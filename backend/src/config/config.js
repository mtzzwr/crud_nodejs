// conexão com o database
module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'cursoNodeMysql',
            dialect: 'mysql',
            user: 'root',
            password: 'bcd127'
        }
    }, 
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
        }
    }
}