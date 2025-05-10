import { Role } from "@prisma/client";

class Examiner {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = Role.EXAMINER;
  }
}

export default Examiner;
