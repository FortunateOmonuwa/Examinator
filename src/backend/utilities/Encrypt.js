import { bcrypt } from "../imports/PackageImports.js";
import crypto from "crypto";
const CreateHash = (passsword) => {
  const hash = bcrypt.hashSync(passsword, 10);

  return hash;
};

const CompareHash = async (passsword, passwordHash) => {
  const isSame = bcrypt.compareSync(passsword, passwordHash);

  return isSame;
};

const Generate64BaeHexString = async () => {
  const hexString = crypto.randomBytes(64).toString("hex");
  return hexString;
};
export { CreateHash, CompareHash, Generate64BaeHexString };
