import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User as TUser } from "./Users";
import './User.css';

export const User = () => {
    const [userById, setUserById] = useState<TUser>({});
    let { id } = useParams(); 

    useEffect(() => {
        const fetchUserById = async () => {
            const response = await fetch(`/api/users/${id}`);
            const userById = await response.json();
            setUserById(userById);
        }
        
        fetchUserById();
    }, []);

    return (
        <div className="user-container">
            <h1 className="username">{userById.firstName + " " + userById.lastName}</h1>
            <h2 className="user-email">{userById.email}</h2>
        </div>
    );
}
