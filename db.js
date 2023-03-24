const dotenv = require("dotenv").config() // we need .config to load .env varibles to the process env 
const POOL = require("pg").Pool;
const pool = new POOL({
    // user:"postgres",
    // password:"8896",
    // database:"work",
    // host:"localhost",
    // port:5432

     connectionString:process.env.DATABASE_URL
})

module.exports = pool;