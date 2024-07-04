import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
    path: path.join(process.cwd(), '.env')
});


export default {
    port : process.env.PORT,
    node_env: process.env.NODE_ENV,
    db: process.env.DB_URL
}