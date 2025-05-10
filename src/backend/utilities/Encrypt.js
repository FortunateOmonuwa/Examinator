import { bcrypt } from "../imports/PackageImports.js";

const CreateHash = (passsword) => {
  const hash = bcrypt.hashSync(passsword, 10);

  return hash;
};

export { CreateHash };
