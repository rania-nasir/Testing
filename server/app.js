const client = require('./database');


(async () => {
    await client.connect();
     const result = await client.query(`select * from student`);
    // const result = await client.query(`INSERT INTO STUDENT(rollno, Name) 
    // VALUES($1, $2)`, [`179`, `Ahmad`]);
    console.log(result.rows);
    console.log(result.rowCount);
    client.end();
})();