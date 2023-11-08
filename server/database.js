const { Client } = require('pg');

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });

const client = new Client({
    connectionString: process.env.DATABASE_URL, // Use the variable from .env for the connection
});

client.on('connect', () => {
    console.log('Database Connection Successful');
});

client.on('end', () => {
    console.log('Database Connection End');
});

module.exports = client;
