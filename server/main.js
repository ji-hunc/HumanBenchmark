// server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 8000;

// local db 접속
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'wlgns620',
  database: 'HumanBenchmark',
  port: '3306',
});

db.connect();

app.use(cors());
app.use(bodyParser.json());

app.post('/post', (req, res) => {
  console.log(req.body);
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');

  db.query(
    `INSERT INTO NumberMemoryRecord (score, create_date, user_id) VALUES ('${req.body.score}', '${formattedDate}', '${req.body.id}');`,
  );

  // db.query(`INSERT INTO review (review_user_id, review_menu_id_reviewd, menu_name, write_date, star, review_like, description, image)
  // 		VALUES (
  // 			'${request.body.reviewUserId}',
  // 			'${menuId2}',
  // 			'${request.body.menuName}',
  // 			'${resultTime}',
  // 			'${request.body.star}',
  // 			'${request.body.reviewLike}',
  // 			'${request.body.description}',
  // 			'${imageUrl}'
  // 		);`);
  res.send('i reveice');
});

app.get('/', (req, res) => {
  console.log(req);
  console.log('enter!!!');
  res.send('Hello World!22');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
