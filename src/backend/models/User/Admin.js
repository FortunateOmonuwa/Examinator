import pkg from "@prisma/client";
const { Role } = pkg;

class Admin {
  constructor({ email, password }) {
    this.email = email;
    this.passwordHash = password;
    this.role = Role.ADMIN;
  }
}

export default Admin;
