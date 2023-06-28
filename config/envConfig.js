import dotenv from 'dotenv';
dotenv.config();

export const {
    PORT, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB
} = process.env;