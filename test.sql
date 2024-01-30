CREATE TABLE IF NOT EXISTS user
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  age INTEGER,
  gender VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS post
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(100) NOT NULL,
  date_publication DATETIME,
  id_user INTEGER,
  FOREIGN KEY (id_user) REFERENCES user(id)
);

INSERT INTO user (firstname, lastname)
VALUES ('Rar', 'Dooba'), ('Nanda', 'Dooba');