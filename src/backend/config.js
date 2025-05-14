import dotenv from 'dotenv';
const environment = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5001;
export { environment, dotenv, port };
