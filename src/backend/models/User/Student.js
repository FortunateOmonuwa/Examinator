import pkg from "@prisma/client";
const { Role } = pkg;

class Student {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = Role.STUDENT;
  }
}

export default Student;
