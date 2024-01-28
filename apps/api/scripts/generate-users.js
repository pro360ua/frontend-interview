import { faker } from "@faker-js/faker";
import fs from "fs";
import prettier from "prettier";

const users = [...Array(20)].map(() => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    email: faker.internet.email({
      firstName,
      lastName,
      provider: "example.com",
    }),
  };
});

const usersString = `
  const users = ${JSON.stringify(users, null, 2)};
   
  const data = { users };
  export default data;
`;

(async () => {
  fs.writeFileSync(
    "./data.js",
    await prettier.format(usersString, { parser: "babel" })
  );
})();
