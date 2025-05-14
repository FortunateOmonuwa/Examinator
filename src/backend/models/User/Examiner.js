import pkg from '@prisma/client';
const { Role } = pkg;

class Examiner {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = 'EXAMINER';
  }
}

export default Examiner;
