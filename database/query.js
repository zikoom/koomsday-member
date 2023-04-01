/**
 * 쿼리 실행 함수 반환 async / await 로 핸들링 필요
 * global_db 참조
 */


const db = global._db;


const test = () => {
  return db.execute('SELECT * FROM user.userinfo');
}

const querys = {
  test
}

module.exports = querys;