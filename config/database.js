// mysql 모듈 로드
require('dotenv').config()
const mysql = require('mysql')

const conn = {
  // mysql 접속 설정
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
}

let connection = mysql.createConnection(conn) // DB 커넥션 생성
connection.connect()

module.exports = connection
