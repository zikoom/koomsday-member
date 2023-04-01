
/**
 * index.js 에서 config로딩후 global 속성으로 저장 된후 이 모듈 로딩
 */

const {GCP_SQL} = global._CONFIG;
const {HOST, PORT, USER_NAME, PASSWORD} = GCP_SQL;



const mysql = require('mysql2/promise');  // mysql 모듈 로드

const conn = () => {
  return mysql.createConnection({
    host: HOST,
    user: USER_NAME,
    password: PASSWORD,
    database: 'user'
  })
}

// console.log('test', global._CONFIG)

module.exports = conn;