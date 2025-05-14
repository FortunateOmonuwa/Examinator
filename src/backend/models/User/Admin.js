class Admin {
  constructor({ email, password }) {
    this.email = email;
    this.passwordHash = password;
    this.role = 'ADMIN';
  }
}

export default Admin;
