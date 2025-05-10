import { Role } from "@prisma/client";

class Student {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = Role.STUDENT;
  }
}

export default Student;
