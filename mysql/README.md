## @@@
```console
mysql> CREATE DATABASE hello_world_db2;
Query OK, 1 row affected (0,00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| hello_world_db     |
| hello_world_db2    |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+

mysql> DROP DATABASE  hello_world_db2;
```

```console
USE <database name>;

-- example:
USE dog_walking_app;

SELECT database();

+-----------------+
| database()      |
+-----------------+
| dog_walking_app |
+-----------------+
1 row in set (0,00 sec)
```


```console
mysql> CREATE TABLE cats (
    -> name VARCHAR(100),
    -> age INT
    -> );

CREATE TABLE people (first_name VARCHAR(20), last_name VARCHAR(20), age INT);

mysql> SHOW TABLES;
+--------------+
| Tables_in_c9 |
+--------------+
| cats         |
+--------------+

mysql> SHOW COLUMNS FROM cats; OR       DESC cats
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | YES  |     | NULL    |       |
| age   | int(11)      | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+

mysql> DROP TABLE cats;

```

```console
mysql> INSERT INTO cats(name, age) VALUES('Blue', 1);

mysql> SELECT * FROM cats;
+-------+------+
| name  | age  |
+-------+------+
| Blue  |    1 |
| Drago |   11 |
+-------+------+


### Множественная вставка
mysql> INSERT INTO cats(name, age)
    -> VALUES ('Peanunt', 2),
    -> ('Butter', 4),
    -> ('Jelly', 7);
```

```console
### Готовый пример
CREATE TABLE people
  (
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    age INT
  );
INSERT INTO people(first_name, last_name, age)
VALUES ('Tina', 'Belcher', 13);
INSERT INTO people(age, last_name, first_name)
VALUES (42, 'Belcher', 'Bob');
INSERT INTO people(first_name, last_name, age)
VALUES('Linda', 'Belcher', 45)
  ,('Phillip', 'Frond', 38)
  ,('Calvin', 'Fischoeder', 70);
DROP TABLE people; 

SELECT * FROM people;
```


### NOT NULL
```console
mysql> desc cats
    -> ;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| name  | varchar(50) | YES  |     | NULL    |       |
| age   | int(11)     | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+

mysql> INSERT INTO cats(name) VALUES('alabama');
mysql> INSERT INTO cats() VALUES();

mysql> SELECT * FROM cats;
+---------+------+
| name    | age  |
+---------+------+
| alabama | NULL |
| NULL    | NULL |
+---------+------+

### NOT NULL

mysql> CREATE TABLE cats2(
    -> name VARCHAR(100) NOT NULL,
    -> age INT NOT NULL
    -> );

mysql> DESC cats2;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | NO   |     | NULL    |       |
| age   | int(11)      | NO   |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+

mysql> INSERT INTO cats2 (name) VALUES('fddfd');
ERROR 1364 (HY000): Field 'age' doesn't have a default value
```

### Default Value
```console
mysql> CREATE TABLE cats3 (
    -> name VARCHAR(20) DEFAULT 'no name provided',
    -> age INT DEFAULT 99);

mysql> INSERT INTO cats3(age) VALUES(13);
mysql> INSERT INTO cats3() VALUES();
mysql> INSERT INTO cats3(age) VALUES(null);

mysql> SELECT * FROM cats3;
+------------------+------+
| name             | age  |
+------------------+------+
| no name provided |   13 |
| no name provided |   99 |
| no name provided | NULL |
+------------------+------+


mysql> CREATE TABLE cats4(
    -> name VARCHAR(100) NOT NULL DEFAULT 'unnamed',
    -> age INT NOT NULL DEFAULT 99);


mysql> DESC cats4;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | NO   |     | unnamed |       |
| age   | int(11)      | NO   |     | 99      |       |
+-------+--------------+------+-----+---------+-------+

mysql> INSERT INTO cats4(name, age) VALUES('Cali', NULL);
ERROR 1048 (23000): Column 'age' cannot be null
```

### UNIQUE ID
```console
mysql> CREATE TABLE unique_cats (cat_id INT NOT NULL,
    -> name VARCHAR(100),
    -> age INT,
    -> PRIMARY KEY (cat_id));
Query OK, 0 rows affected (0,01 sec)

mysql> DESC unique_cats;
+--------+--------------+------+-----+---------+-------+
| Field  | Type         | Null | Key | Default | Extra |
+--------+--------------+------+-----+---------+-------+
| cat_id | int(11)      | NO   | PRI | NULL    |       |
| name   | varchar(100) | YES  |     | NULL    |       |
| age    | int(11)      | YES  |     | NULL    |       |
+--------+--------------+------+-----+---------+-------+
mysql> INSERT INTO unique_cats(cat_id, name, age) VALUES(1, "FRED", 23);
mysql> INSERT INTO unique_cats(cat_id, name, age) VALUES(1, "FRED2", 223);
ERROR 1062 (23000): Duplicate entry '1' for key 'PRIMARY'

### AUTO INCREMENT

mysql> CREATE TABLE unique_cats2 (cat_id int not null AUTO_INCREMENT,
    -> name VARCHAR(100),
    -> age INT,
    -> PRIMARY KEY (cat_id));

mysql> DESC unique_cats2;
+--------+--------------+------+-----+---------+----------------+
| Field  | Type         | Null | Key | Default | Extra          |
+--------+--------------+------+-----+---------+----------------+
| cat_id | int(11)      | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100) | YES  |     | NULL    |                |
| age    | int(11)      | YES  |     | NULL    |                |
+--------+--------------+------+-----+---------+----------------+

mysql> INSERT INTO unique_cats2(name, age) VALUES('Skippy', 4);
mysql> INSERT INTO unique_cats2(name, age) VALUES('OooOO', 3);
mysql> SELECT * FROM unique_cats2;
+--------+--------+------+
| cat_id | name   | age  |
+--------+--------+------+
|      1 | Skippy |    4 |
|      2 | OooOO  |    3 |
+--------+--------+------+

### example
mysql> CREATE TABLE employees (
    -> id INT NOT NULL AUTO_INCREMENT,
    -> last_name VARCHAR(255) NOT NULL,
    -> first_name VARCHAR(255) NOT NULL,
    -> middle_name VARCHAR(255),
    -> age INT NOT NULL,
    -> current_status VARCHAR(255)NOT NULL DEFAULT 'employed',
    -> PRIMARY KEY (id));


mysql> DESC employees;
+----------------+--------------+------+-----+----------+----------------+
| Field          | Type         | Null | Key | Default  | Extra          |
+----------------+--------------+------+-----+----------+----------------+
| id             | int(11)      | NO   | PRI | NULL     | auto_increment |
| last_name      | varchar(255) | NO   |     | NULL     |                |
| first_name     | varchar(255) | NO   |     | NULL     |                |
| middle_name    | varchar(255) | YES  |     | NULL     |                |
| age            | int(11)      | NO   |     | NULL     |                |
| current_status | varchar(255) | NO   |     | employed |                |
+----------------+--------------+------+-----+----------+----------------+

mysql> INSERT INTO employees(first_name, last_name, age) VALUES ('Dara', 'Smith', 58);
mysql> INSERT INTO employees(first_name, last_name, age) VALUES ('Dara', 'Smith', 58);

mysql> SELECT * FROM employees;
+----+-----------+------------+-------------+-----+----------------+
| id | last_name | first_name | middle_name | age | current_status |
+----+-----------+------------+-------------+-----+----------------+
|  1 | Smith     | Dara       | NULL        |  58 | employed       |
|  2 | Smith     | Dara       | NULL        |  58 | employed       |
+----+-----------+------------+-------------+-----+----------------+
```


### CRUD
```console
mysql> CREATE TABLE cats( 
  --> cat_id INT NOT NULL AUTO_INCREMENT, 
  --> name VARCHAR(100), 
  --> breed VARCHAR(100),
  --> age  INT, 
  --> PRIMARY KEY (cat_id));

mysql> DESC cats;
+--------+--------------+------+-----+---------+----------------+
| Field  | Type         | Null | Key | Default | Extra          |
+--------+--------------+------+-----+---------+----------------+
| cat_id | int(11)      | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100) | YES  |     | NULL    |                |
| breed  | varchar(100) | YES  |     | NULL    |                |
| age    | int(11)      | YES  |     | NULL    |                |
+--------+--------------+------+-----+---------+----------------+


mysql> INSERT INTO cats(name, breed, age) 
    -> VALUES ('Ringo', 'Tabby', 4),
    ->        ('Cindy', 'Maine Coon', 10),
    ->        ('Dumbledore', 'Maine Coon', 11),
    ->        ('Egg', 'Persian', 4),
    ->        ('Misty', 'Tabby', 13),
    ->        ('George Michael', 'Ragdoll', 9),
    ->        ('Jackson', 'Sphynx', 7);
Query OK, 7 rows affected (0,00 sec)
Records: 7  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM cats;
+--------+----------------+------------+------+
| cat_id | name           | breed      | age  |
+--------+----------------+------------+------+
|      1 | Ringo          | Tabby      |    4 |
|      2 | Cindy          | Maine Coon |   10 |
|      3 | Dumbledore     | Maine Coon |   11 |
|      4 | Egg            | Persian    |    4 |
|      5 | Misty          | Tabby      |   13 |
|      6 | George Michael | Ragdoll    |    9 |
|      7 | Jackson        | Sphynx     |    7 |
+--------+----------------+------------+------+
```

### READ
```console
mysql> SELECT * FROM cats;

+--------+----------------+------------+------+
| cat_id | name           | breed      | age  |
+--------+----------------+------------+------+
|      1 | Ringo          | Tabby      |    4 |
|      2 | Cindy          | Maine Coon |   10 |
|      3 | Dumbledore     | Maine Coon |   11 |
|      4 | Egg            | Persian    |    4 |
|      5 | Misty          | Tabby      |   13 |
|      6 | George Michael | Ragdoll    |    9 |
|      7 | Jackson        | Sphynx     |    7 |
+--------+----------------+------------+------+

mysql> SELECT name FROM cats;
+----------------+
| name           |
+----------------+
| Ringo          |
| Cindy          |
| Dumbledore     |
| Egg            |
| Misty          |
| George Michael |
| Jackson        |
+----------------+

mysql> SELECT name, age FROM cats; 
+----------------+------+
| name           | age  |
+----------------+------+
| Ringo          |    4 |
| Cindy          |   10 |
| Dumbledore     |   11 |
| Egg            |    4 |
| Misty          |   13 |
| George Michael |    9 |
| Jackson        |    7 |
+----------------+------+

### WHERE
mysql> SELECT * FROM cats WHERE age=4;
+--------+-------+---------+------+
| cat_id | name  | breed   | age  |
+--------+-------+---------+------+
|      1 | Ringo | Tabby   |    4 |
|      4 | Egg   | Persian |    4 |
+--------+-------+---------+------+

mysql> SELECT * FROM cats WHERE age > 10;
+--------+------------+------------+------+
| cat_id | name       | breed      | age  |
+--------+------------+------------+------+
|      3 | Dumbledore | Maine Coon |   11 |
|      5 | Misty      | Tabby      |   13 |
+--------+------------+------------+------+

mysql> SELECT * FROM cats WHERE name='Egg';
+--------+------+---------+------+
| cat_id | name | breed   | age  |
+--------+------+---------+------+
|      4 | Egg  | Persian |    4 |
+--------+------+---------+------+

### не чуствителен к регистру
mysql> SELECT * FROM cats WHERE name='EgG'; 
+--------+------+---------+------+
| cat_id | name | breed   | age  |
+--------+------+---------+------+
|      4 | Egg  | Persian |    4 |
+--------+------+---------+------+
```
### exercise
```console
mysql> SELECT cat_id FROM cats WHERE cat_id <= 8;
+--------+
| cat_id |
+--------+
|      1 |
|      2 |
|      3 |
|      4 |
|      5 |
|      6 |
|      7 |
+--------+

mysql> SELECT name, breed From cats;
+----------------+------------+
| name           | breed      |
+----------------+------------+
| Ringo          | Tabby      |
| Cindy          | Maine Coon |
| Dumbledore     | Maine Coon |
| Egg            | Persian    |
| Misty          | Tabby      |
| George Michael | Ragdoll    |
| Jackson        | Sphynx     |
+----------------+------------+

mysql> SELECT name, age From cats WHERE breed='tabby';
+-------+------+
| name  | age  |
+-------+------+
| Ringo |    4 |
| Misty |   13 |
+-------+------+

mysql> SELECT cat_id, age FROM cats WHERE cat_id=age;
+--------+------+
| cat_id | age  |
+--------+------+
|      4 |    4 |
|      7 |    7 |
+--------+------+


```

###  Alias
```console
mysql> SELECT cat_id AS id, name FROM cats;
+----+----------------+
| id | name           |
+----+----------------+
|  1 | Ringo          |
|  2 | Cindy          |
|  3 | Dumbledore     |
|  4 | Egg            |
|  5 | Misty          |
|  6 | George Michael |
|  7 | Jackson        |
+----+----------------+

mysql> SELECT name AS 'cat_name', breed AS 'kitty breed' From cats;
+----------------+-------------+
| cat_name       | kitty breed |
+----------------+-------------+
| Ringo          | Tabby       |
| Cindy          | Maine Coon  |
| Dumbledore     | Maine Coon  |
| Egg            | Persian     |
| Misty          | Tabby       |
| George Michael | Ragdoll     |
| Jackson        | Sphynx      |
+----------------+-------------+
```

### Update
```console
mysql> mysql> UPDATE cats SET Shorthair' WHERE breed='Tabby';
mysql> SELECT * FROM cats;
+--------+----------------+------------+------+
| cat_id | name           | breed      | age  |
+--------+----------------+------------+------+
|      1 | Ringo          | Shorthair  |    4 |
|      2 | Cindy          | Maine Coon |   10 |
|      3 | Dumbledore     | Maine Coon |   11 |
|      4 | Egg            | Persian    |    4 |
|      5 | Misty          | Shorthair  |   13 |
|      6 | George Michael | Ragdoll    |    9 |
|      7 | Jackson        | Sphynx     |    7 |
+--------+----------------+------------+------+

mysql> UPDATE cats SET age=14 WHERE name='Misty';
mysql> SELECT * FROM cats WHERE name='misty';
+--------+-------+-----------+------+
| cat_id | name  | breed     | age  |
+--------+-------+-----------+------+
|      5 | Misty | Shorthair |   14 |
+--------+-------+-----------+------+

### exercise

mysql> UPDATE cats SET age=12 WHERE  breed='maine coon'; 
mysql> UPDATE cats SET name='Jackson' WHERE name='Jack';
mysql> UPDATE cats SET name='Ringo' WHERE breed='British Shorthair';

mysql> SELECT * FROM cats;
+--------+----------------+------------+------+
| cat_id | name           | breed      | age  |
+--------+----------------+------------+------+
|      1 | Ringo          | Shorthair  |    4 |
|      2 | Cindy          | Maine Coon |   12 |
|      3 | Dumbledore     | Maine Coon |   12 |
|      4 | Egg            | Persian    |    4 |
|      5 | Misty          | Shorthair  |   14 |
|      6 | George Michael | Ragdoll    |    9 |
|      7 | Jackson        | Sphynx     |    7 |
+--------+----------------+------------+------+
```

### Delete
```console
mysql> DELETE FROM cats WHERE name='egg';
mysql> SELECT * FROM cats;
+--------+----------------+------------+------+
| cat_id | name           | breed      | age  |
+--------+----------------+------------+------+
|      1 | Ringo          | Shorthair  |    4 |
|      2 | Cindy          | Maine Coon |   12 |
|      3 | Dumbledore     | Maine Coon |   12 |
|      5 | Misty          | Shorthair  |   14 |
|      6 | George Michael | Ragdoll    |    9 |
|      7 | Jackson        | Sphynx     |    7 |
+--------+----------------+------------+------+

### удалит всю таблицу cat
mysql> DELETE FROM cats

mysql> DELETE FROM cats WHERE age=4;
mysql> DELETE FROM cats WHERE cat_id=age;
mysql> SELECT * FROM cats;
+--------+----------------+------------+------+
| cat_id | name           | breed      | age  |
+--------+----------------+------------+------+
|      2 | Cindy          | Maine Coon |   12 |
|      3 | Dumbledore     | Maine Coon |   12 |
|      5 | Misty          | Shorthair  |   14 |
|      6 | George Michael | Ragdoll    |    9 |
+--------+----------------+------------+------+

mysql> DELETE FROM cats; - удаляет все
```

## Exercise
```console
mysql> CREATE DATABASE shirts_db;
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| c9                 |
| dog_walking_app    |
| hello_world_db     |
| information_schema |
| mysql              |
| performance_schema |
| shirts_db          |
| sys                |
+--------------------+
mysql> USE shirts_db
mysql> SELECT database();
+------------+
| database() |
+------------+
| shirts_db  |
+------------+

mysql> CREATE TABLE shirts  (shirt_id INT NOT NULL AUTO_INCREMENT,
    -> article VARCHAR(100),
    -> color VARCHAR(100),
    -> shirt_size VARCHAR(100),
    -> last_worn INT,
    -> PRIMARY KEY (shirt_id));

mysql> SHOW COLUMNS FROM shirts;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| shirt_id   | int(11)      | NO   | PRI | NULL    | auto_increment |
| article    | varchar(100) | YES  |     | NULL    |                |
| color      | varchar(100) | YES  |     | NULL    |                |
| shirt_size | varchar(100) | YES  |     | NULL    |                |
| last_worn  | int(11)      | YES  |     | NULL    |                |

mysql> INSERT INTO shirts(article, color, shirt_size, last_worn) VALUES
    -> ('t-shirt', 'white', 'S', 10),
    -> ('t-shirt', 'green', 'S', 200),
    -> ('polo shirt', 'black', 'M', 10),
    -> ('tank top', 'blue', 'S', 50),
    -> ('t-shirt', 'pink', 'S', 0),
    -> ('polo shirt', 'red', 'M', 5),
    -> ('tank top', 'white', 'S', 200),
    -> ('tank top', 'blue', 'M', 15);


INSERT INTO shirts(color, article, shirt_size, last_worn) 
VALUES('purple', 'polo shirt', 'medium', 50);

mysql> SELECT * FROM shirts;
+----------+------------+--------+------------+-----------+
| shirt_id | article    | color  | shirt_size | last_worn |
+----------+------------+--------+------------+-----------+
|        1 | t-shirt    | white  | S          |        10 |
|        2 | t-shirt    | green  | S          |       200 |
|        3 | polo shirt | black  | M          |        10 |
|        4 | tank top   | blue   | S          |        50 |
|        5 | t-shirt    | pink   | S          |         0 |
|        6 | polo shirt | red    | M          |         5 |
|        7 | tank top   | white  | S          |       200 |
|        8 | tank top   | blue   | M          |        15 |
|        9 | polo shirt | purple | medium     |        50 |
+----------+------------+--------+------------+-----------+
```

 # The World Of String Functions

### CONCAT
```console
mysql> SELECT author_fname, author_lname FROM books;
+--------------+----------------+
| author_fname | author_lname   |
+--------------+----------------+
| Jhumpa       | Lahiri         |
| Neil         | Gaiman         |
| Neil         | Gaiman         |
| Jhumpa       | Lahiri         |
| Dave         | Eggers         |
| Dave         | Eggers         |
| Michael      | Chabon         |
| Patti        | Smith          |
| Dave         | Eggers         |
| Neil         | Gaiman         |
| Raymond      | Carver         |
| Raymond      | Carver         |
| Don          | DeLillo        |
| John         | Steinbeck      |
| David        | Foster Wallace |
| David        | Foster Wallace |
+--------------+----------------+

mysql> SELECT CONCAT(author_fname, ' ', author_lname) AS fullname FROM books;
+----------------------+
| fullname             |
+----------------------+
| Jhumpa Lahiri        |
| Neil Gaiman          |
| Neil Gaiman          |
| Jhumpa Lahiri        |
| Dave Eggers          |
| Dave Eggers          |
| Michael Chabon       |
| Patti Smith          |
| Dave Eggers          |
| Neil Gaiman          |
| Raymond Carver       |
| Raymond Carver       |
| Don DeLillo          |
| John Steinbeck       |
| David Foster Wallace |
| David Foster Wallace |
+----------------------+

mysql> SELECT author_fname AS first, author_lname AS last,
    -> CONCAT(author_fname, ' ', author_lname) AS full
    -> FROM books;
+---------+----------------+----------------------+
| first   | last           | full                 |
+---------+----------------+----------------------+
| Jhumpa  | Lahiri         | Jhumpa Lahiri        |
| Neil    | Gaiman         | Neil Gaiman          |
| Neil    | Gaiman         | Neil Gaiman          |
| Jhumpa  | Lahiri         | Jhumpa Lahiri        |
| Dave    | Eggers         | Dave Eggers          |
| Dave    | Eggers         | Dave Eggers          |
| Michael | Chabon         | Michael Chabon       |
| Patti   | Smith          | Patti Smith          |
| Dave    | Eggers         | Dave Eggers          |
| Neil    | Gaiman         | Neil Gaiman          |
| Raymond | Carver         | Raymond Carver       |
| Raymond | Carver         | Raymond Carver       |
| Don     | DeLillo        | Don DeLillo          |
| John    | Steinbeck      | John Steinbeck       |
| David   | Foster Wallace | David Foster Wallace |
| David   | Foster Wallace | David Foster Wallace |
+---------+----------------+----------------------+

mysql> SELECT CONCAT_WS('* * *', title, author_fname, author_lname) FROM books;
+----------------------------------------------------------------------------+
| CONCAT_WS('* * *', title, author_fname, author_lname)                      |
+----------------------------------------------------------------------------+
| The Namesake* * *Jhumpa* * *Lahiri                                         |
| Norse Mythology* * *Neil* * *Gaiman                                        |
| American Gods* * *Neil* * *Gaiman                                          |
| Interpreter of Maladies* * *Jhumpa* * *Lahiri                              |
| A Hologram for the King: A Novel* * *Dave* * *Eggers                       |
| The Circle* * *Dave* * *Eggers                                             |
| The Amazing Adventures of Kavalier & Clay* * *Michael* * *Chabon           |
| Just Kids* * *Patti* * *Smith                                              |
| A Heartbreaking Work of Staggering Genius* * *Dave* * *Eggers              |
| Coraline* * *Neil* * *Gaiman                                               |
| What We Talk About When We Talk About Love: Stories* * *Raymond* * *Carver |
| Where I'm Calling From: Selected Stories* * *Raymond* * *Carver            |
| White Noise* * *Don* * *DeLillo                                            |
| Cannery Row* * *John* * *Steinbeck                                         |
| Oblivion: Stories* * *David* * *Foster Wallace                             |
| Consider the Lobster* * *David* * *Foster Wallace                          |
+----------------------------------------------------------------------------+
```

### SUBSTRING
```console
mysql> SELECT SUBSTRING(title, 1, 10) AS 'short title' FROM books;
+-------------+
| short title |
+-------------+
| The Namesa  |
| Norse Myth  |
| American G  |
| Interprete  |
| A Hologram  |
| The Circle  |
| The Amazin  |
| Just Kids   |
| A Heartbre  |
| Coraline    |
| What We Ta  |
| Where I'm   |
| White Nois  |
| Cannery Ro  |
| Oblivion:   |
| Consider t  |
+-------------+

mysql> SELECT CONCAT (SUBSTRING(title, 1, 10), '...') AS 'short_title' FROM books;
+---------------+
| short_title   |
+---------------+
| The Namesa... |
| Norse Myth... |
| American G... |
| Interprete... |
| A Hologram... |
| The Circle... |
| The Amazin... |
| Just Kids...  |
| A Heartbre... |
| Coraline...   |
| What We Ta... |
| Where I'm ... |
| White Nois... |
| Cannery Ro... |
| Oblivion: ... |
| Consider t... |
+---------------+

```

## REPLACE
```console
mysql> SELECT REPLACE('Hello World', 'l', '7') AS 'replace';
+-------------+
| replace     |
+-------------+
| He77o Wor7d |
+-------------+

mysql> SELECT REPLACE('HellO World', 'o', '*') AS 'replace';  чуствителен к регистру
+-------------+
| replace     |
+-------------+
| HellO W*rld |
+-------------+

mysql> SELECT REPLACE (title, ' ', '-') AS 'replace' FROM books;
+-----------------------------------------------------+
| replace                                             |
+-----------------------------------------------------+
| The-Namesake                                        |
| Norse-Mythology                                     |
| American-Gods                                       |
| Interpreter-of-Maladies                             |
| A-Hologram-for-the-King:-A-Novel                    |
| The-Circle                                          |
| The-Amazing-Adventures-of-Kavalier-&-Clay           |
| Just-Kids                                           |
| A-Heartbreaking-Work-of-Staggering-Genius           |
| Coraline                                            |
| What-We-Talk-About-When-We-Talk-About-Love:-Stories |
| Where-I'm-Calling-From:-Selected-Stories            |
| White-Noise                                         |
| Cannery-Row                                         |
| Oblivion:-Stories                                   |
| Consider-the-Lobster                                |
+-----------------------------------------------------+

mysql> SELECT SUBSTRING(REPLACE(title, 'e', '3'), 1, 10) FROM books;
+--------------------------------------------+
| SUBSTRING(REPLACE(title, 'e', '3'), 1, 10) |
+--------------------------------------------+
| Th3 Nam3sa                                 |
| Nors3 Myth                                 |
| Am3rican G                                 |
| Int3rpr3t3                                 |
| A Hologram                                 |
| Th3 Circl3                                 |
| Th3 Amazin                                 |
| Just Kids                                  |
| A H3artbr3                                 |
| Coralin3                                   |
| What W3 Ta                                 |
| Wh3r3 I'm                                  |
| Whit3 Nois                                 |
| Cann3ry Ro                                 |
| Oblivion:                                  |
| Consid3r t                                 |
+--------------------------------------------+
```

#REVERSE
```console
mysql> SELECT REVERSE (12345);
+-----------------+
| REVERSE (12345) |
+-----------------+
| 54321           |
+-----------------+

mysql> SELECT REVERSE (author_fname) FROM books;
+------------------------+
| REVERSE (author_fname) |
+------------------------+
| apmuhJ                 |
| lieN                   |
| lieN                   |
| apmuhJ                 |
| evaD                   |
| evaD                   |
| leahciM                |
| ittaP                  |
| evaD                   |
| lieN                   |
| dnomyaR                |
| dnomyaR                |
| noD                    |
| nhoJ                   |
| divaD                  |
| divaD                  |
+------------------------+
16 rows in set (0,00 sec)

| CONCAT(author_fname, ' <--> ', REVERSE(author_fname)) |
+-------------------------------------------------------+
| Jhumpa <--> apmuhJ                                    |
| Neil <--> lieN                                        |
| Neil <--> lieN                                        |
| Jhumpa <--> apmuhJ                                    |
| Dave <--> evaD                                        |
| Dave <--> evaD                                        |
| Michael <--> leahciM                                  |
| Patti <--> ittaP                                      |
| Dave <--> evaD                                        |
| Neil <--> lieN                                        |
| Raymond <--> dnomyaR                                  |
| Raymond <--> dnomyaR                                  |
| Don <--> noD                                          |
| John <--> nhoJ                                        |
| David <--> divaD                                      |
| David <--> divaD                                      |
+-------------------------------------------------------+
```


### CHAR_LENGTH
```console
mysql> SELECT CHAR_LENGTH('D D D D D D');
+----------------------------+
| CHAR_LENGTH('D D D D D D') |
+----------------------------+
|                         11 |
+----------------------------+

mysql> SELECT author_lname, CHAR_LENGTH(author_lname) AS 'length' FROM books;
+----------------+--------+
| author_lname   | length |
+----------------+--------+
| Lahiri         |      6 |
| Gaiman         |      6 |
| Gaiman         |      6 |
| Lahiri         |      6 |
| Eggers         |      6 |
| Eggers         |      6 |
| Chabon         |      6 |
| Smith          |      5 |
| Eggers         |      6 |
| Gaiman         |      6 |
| Carver         |      6 |
| Carver         |      6 |
| DeLillo        |      7 |
| Steinbeck      |      9 |
| Foster Wallace |     14 |
| Foster Wallace |     14 |
+----------------+--------+

mysql> SELECT CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long') FROM books;
+-----------------------------------------------------------------------------+
| CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long') |
+-----------------------------------------------------------------------------+
| Lahiri is 6 characters long                                                 |
| Gaiman is 6 characters long                                                 |
| Gaiman is 6 characters long                                                 |
| Lahiri is 6 characters long                                                 |
| Eggers is 6 characters long                                                 |
| Eggers is 6 characters long                                                 |
| Chabon is 6 characters long                                                 |
| Smith is 5 characters long                                                  |
| Eggers is 6 characters long                                                 |
| Gaiman is 6 characters long                                                 |
| Carver is 6 characters long                                                 |
| Carver is 6 characters long                                                 |
| DeLillo is 7 characters long                                                |
| Steinbeck is 9 characters long                                              |
| Foster Wallace is 14 characters long                                        |
| Foster Wallace is 14 characters long                                        |
+-----------------------------------------------------------------------------+
```

### UPPER
```console
mysql> SELECT UPPER(title) FROM books;
+-----------------------------------------------------+
| UPPER(title)                                        |
+-----------------------------------------------------+
| THE NAMESAKE                                        |
| NORSE MYTHOLOGY                                     |
| AMERICAN GODS                                       |
| INTERPRETER OF MALADIES                             |
| A HOLOGRAM FOR THE KING: A NOVEL                    |
| THE CIRCLE                                          |
| THE AMAZING ADVENTURES OF KAVALIER & CLAY           |
| JUST KIDS                                           |
| A HEARTBREAKING WORK OF STAGGERING GENIUS           |
| CORALINE                                            |
| WHAT WE TALK ABOUT WHEN WE TALK ABOUT LOVE: STORIES |
| WHERE I'M CALLING FROM: SELECTED STORIES            |
| WHITE NOISE                                         |
| CANNERY ROW                                         |
| OBLIVION: STORIES                                   |
| CONSIDER THE LOBSTER                                |
+-----------------------------------------------------+
```

## exercises
```console
SELECT REVERSE(UPPER('Why does my cat look at me with such hatred?')); 


SELECT UPPER(REVERSE('Why does my cat look at me with such hatred?')); 


I-like-cats 


SELECT REPLACE(CONCAT('I', ' ', 'like', ' ', 'cats'), ' ', '-'); 


SELECT REPLACE(title, ' ', '->') AS title FROM books; 



SELECT 
   author_lname AS forwards,
   REVERSE(author_lname) AS backwards 
FROM books;


SELECT
   UPPER
   (
      CONCAT(author_fname, ' ', author_lname)
   ) AS 'full name in caps'
FROM books;


SELECT
   CONCAT(title, ' was released in ', released_year) AS blurb
FROM books;
SELECT
   title,
   CHAR_LENGTH(title) AS 'character count'
FROM books;


SELECT
   CONCAT(SUBSTRING(title, 1, 10), '...') AS 'short title',
   CONCAT(author_lname, ',', author_fname) AS author,
   CONCAT(stock_quantity, ' in stock') AS quantity
FROM books;
```


### DISTINCT - выбирает уникальные значения 
```console
mysql> SELECT DISTINCT author_lname FROM books;
+----------------+
| author_lname   |
+----------------+
| Lahiri         |
| Gaiman         |
| Eggers         |
| Chabon         |
| Smith          |
| Carver         |
| DeLillo        |
| Steinbeck      |
| Foster Wallace |
| Harris         |
| Saunders       |
+----------------+


mysql> SELECT DISTINCT CONCAT(author_fname,' ', author_lname) FROM books;
+----------------------------------------+
| CONCAT(author_fname,' ', author_lname) |
+----------------------------------------+
| Jhumpa Lahiri                          |
| Neil Gaiman                            |
| Dave Eggers                            |
| Michael Chabon                         |
| Patti Smith                            |
| Raymond Carver                         |
| Don DeLillo                            |
| John Steinbeck                         |
| David Foster Wallace                   |
| Dan Harris                             |
| Freida Harris                          |
| George Saunders                        |
+----------------------------------------+

mysql> SELECT author_fname, author_lname FROM books;
+--------------+----------------+
| author_fname | author_lname   |
+--------------+----------------+
| Jhumpa       | Lahiri         |
| Neil         | Gaiman         |
| Neil         | Gaiman         |
| Jhumpa       | Lahiri         |
| Dave         | Eggers         |
| Dave         | Eggers         |
| Michael      | Chabon         |
| Patti        | Smith          |
| Dave         | Eggers         |
| Neil         | Gaiman         |
| Raymond      | Carver         |
| Raymond      | Carver         |
| Don          | DeLillo        |
| John         | Steinbeck      |
| David        | Foster Wallace |
| David        | Foster Wallace |
| Dan          | Harris         |
| Freida       | Harris         |
| George       | Saunders       |
+--------------+----------------+

```


### SELECT
```console
mysql> SELECT author_lname, stock_quantity FROM books ORDER BY stock_quantity;
+----------------+----------------+
| author_lname   | stock_quantity |
+----------------+----------------+
| Gaiman         |             12 |
| Carver         |             12 |
| Carver         |             23 |
| Eggers         |             26 |
| Harris         |             29 |
| Lahiri         |             32 |
| Gaiman         |             43 |
| DeLillo        |             49 |
| Smith          |             55 |
| Chabon         |             68 |
| Foster Wallace |             92 |
| Steinbeck      |             95 |
| Lahiri         |             97 |
| Gaiman         |            100 |
| Eggers         |            104 |
| Eggers         |            154 |
| Foster Wallace |            172 |
| Harris         |            287 |
| Saunders       |           1000 |
+----------------+----------------+

mysql> SELECT title FROM books ORDER BY title;
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| 10% Happier                                         |
| A Heartbreaking Work of Staggering Genius           |
| A Hologram for the King: A Novel                    |
| American Gods                                       |
| Cannery Row                                         |
| Consider the Lobster                                |
| Coraline                                            |
| fake_book                                           |
| Interpreter of Maladies                             |
| Just Kids                                           |
| Lincoln In The Bardo                                |
| Norse Mythology                                     |
| Oblivion: Stories                                   |
| The Amazing Adventures of Kavalier & Clay           |
| The Circle                                          |
| The Namesake                                        |
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| White Noise                                         |
+-----------------------------------------------------+

mysql> SELECT author_lname, stock_quantity FROM books ORDER BY stock_quantity DESC;
+----------------+----------------+
| author_lname   | stock_quantity |
+----------------+----------------+
| Saunders       |           1000 |
| Harris         |            287 |
| Foster Wallace |            172 |
| Eggers         |            154 |
| Eggers         |            104 |
| Gaiman         |            100 |
| Lahiri         |             97 |
| Steinbeck      |             95 |
| Foster Wallace |             92 |
| Chabon         |             68 |
| Smith          |             55 |
| DeLillo        |             49 |
| Gaiman         |             43 |
| Lahiri         |             32 |
| Harris         |             29 |
| Eggers         |             26 |
| Carver         |             23 |
| Gaiman         |             12 |
| Carver         |             12 |
+----------------+----------------+

mysql> SELECT author_lname, stock_quantity FROM books ORDER BY 2 DESC;
+----------------+----------------+
| author_lname   | stock_quantity |
+----------------+----------------+
| Saunders       |           1000 |
| Harris         |            287 |
| Foster Wallace |            172 |
| Eggers         |            154 |
| Eggers         |            104 |
| Gaiman         |            100 |
| Lahiri         |             97 |
| Steinbeck      |             95 |
| Foster Wallace |             92 |
| Chabon         |             68 |
| Smith          |             55 |
| DeLillo        |             49 |
| Gaiman         |             43 |
| Lahiri         |             32 |
| Harris         |             29 |
| Eggers         |             26 |
| Carver         |             23 |
| Gaiman         |             12 |
| Carver         |             12 |
+----------------+----------------+
```

### LIMIT
```console
mysql> SELECT title FROM books LIMIT 3;
+-----------------+
| title           |
+-----------------+
| The Namesake    |
| Norse Mythology |
| American Gods   |
+-----------------+

mysql> SELECT title, released_year FROM books ORDER BY released_year DESC LIMIT 5;
+----------------------------------+---------------+
| title                            | released_year |
+----------------------------------+---------------+
| Lincoln In The Bardo             |          2017 |
| Norse Mythology                  |          2016 |
| 10% Happier                      |          2014 |
| The Circle                       |          2013 |
| A Hologram for the King: A Novel |          2012 |
+----------------------------------+---------------+

mysql> SELECT title, released_year FROM books ORDER BY released_year DESC LIMIT 5, 7; - с 5 индекса + 7 элементов
+----------------------+---------------+
| title                | released_year |
+----------------------+---------------+
| Just Kids            |          2010 |
| Consider the Lobster |          2005 |
| Oblivion: Stories    |          2004 |
| The Namesake         |          2003 |
| Coraline             |          2003 |
| American Gods        |          2001 |
| fake_book            |          2001 |
+----------------------+---------------+
```

### LIKE
```console
mysql> SELECT title, author_fname FROM books WHERE author_fname LIKE '%da%';
+-------------------------------------------+--------------+
| title                                     | author_fname |
+-------------------------------------------+--------------+
| A Hologram for the King: A Novel          | Dave         |
| The Circle                                | Dave         |
| A Heartbreaking Work of Staggering Genius | Dave         |
| Oblivion: Stories                         | David        |
| Consider the Lobster                      | David        |
| 10% Happier                               | Dan          |
| fake_book                                 | Freida       |
+-------------------------------------------+--------------+

'%da%'
'da%' - имя начинаеться с da
'%da' - имя заканчиваеться на da


mysql> SELECT title FROM books WHERE title LIKE 'The Namesake';
| title        |
+--------------+
| The Namesake |
+--------------+

mysql> SELECT title, stock_quantity FROM books WHERE stock_quantity LIKE '____';
+----------------------+----------------+
| title                | stock_quantity |
+----------------------+----------------+
| Lincoln In The Bardo |           1000 |
+----------------------+----------------+


mysql> SELECT title, stock_quantity FROM books WHERE stock_quantity LIKE '___';
+-------------------------------------------+----------------+
| title                                     | stock_quantity |
+-------------------------------------------+----------------+
| A Hologram for the King: A Novel          |            154 |
| A Heartbreaking Work of Staggering Genius |            104 |
| Coraline                                  |            100 |
| Oblivion: Stories                         |            172 |
| fake_book                                 |            287 |
+-------------------------------------------+----------------+

mysql> SELECT title FROM books WHERE title LIKE '%\%%'; 
+-------------+
| title       |
+-------------+
| 10% Happier |
+-------------+
'%\%%' - будет искать %

mysql> SELECT title FROM books WHERE title LIKE '%\_%';
+-----------+
| title     |
+-----------+
| fake_book |
+-----------+
```

### exercice
```console
mysql> SELECT title FROM books WHERE title LIKE '%stories%';
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| Oblivion: Stories                                   |
+-----------------------------------------------------+


mysql> mysql> SELECT title, pages FROM books ORDER BY pages DESC LIMIT1;
+-------------------------------------------+-------+
| title                                     | pages |
+-------------------------------------------+-------+
| The Amazing Adventures of Kavalier & Clay |   634 |
+-------------------------------------------+-------+


mysql> SELECT CONCAT(title, ' - ', released_year) AS summary FROM books ORDER BY released_year DESC LIMIT 3;
+-----------------------------+
| summary                     |
+-----------------------------+
| Lincoln In The Bardo - 2017 |
| Norse Mythology - 2016      |
| 10% Happier - 2014          |
+-----------------------------+

mysql> SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';
+----------------------+----------------+
| title                | author_lname   |
+----------------------+----------------+
| Oblivion: Stories    | Foster Wallace |
| Consider the Lobster | Foster Wallace |
+----------------------+----------------+

mysql> mysql> SELECT title, released_year, stock_quantity FROM books ORDER BY stock_quantity LIMIT 3;
+-----------------------------------------------------+---------------+----------------+
| title                                               | released_year | stock_quantity |
+-----------------------------------------------------+---------------+----------------+
| Where I'm Calling From: Selected Stories            |          1989 |             12 |
| American Gods                                       |          2001 |             12 |
| What We Talk About When We Talk About Love: Stories |          1981 |             23 |
+-----------------------------------------------------+---------------+----------------+

mysql> SELECT title, author_lname FROM books ORDER BY author_lname, title;
+-----------------------------------------------------+----------------+
| title                                               | author_lname   |
+-----------------------------------------------------+----------------+
| What We Talk About When We Talk About Love: Stories | Carver         |
| Where I'm Calling From: Selected Stories            | Carver         |
| The Amazing Adventures of Kavalier & Clay           | Chabon         |
| White Noise                                         | DeLillo        |
| A Heartbreaking Work of Staggering Genius           | Eggers         |
| A Hologram for the King: A Novel                    | Eggers         |
| The Circle                                          | Eggers         |
| Consider the Lobster                                | Foster Wallace |
| Oblivion: Stories                                   | Foster Wallace |
| American Gods                                       | Gaiman         |
| Coraline                                            | Gaiman         |
| Norse Mythology                                     | Gaiman         |
| 10% Happier                                         | Harris         |
| fake_book                                           | Harris         |
| Interpreter of Maladies                             | Lahiri         |
| The Namesake                                        | Lahiri         |
| Lincoln In The Bardo                                | Saunders       |
| Just Kids                                           | Smith          |
| Cannery Row                                         | Steinbeck      |
+-----------------------------------------------------+----------------+
19 rows in set (0,00 sec)

mysql> SELECT UPPER(CONCAT('my favorite author is ', author_fname, ' ',  author_lname, '!' )) AS 'yell' FROM books ORDER BY  author_lname;
+---------------------------------------------+
| yell                                        |
+---------------------------------------------+
| MY FAVORITE AUTHOR IS RAYMOND CARVER!       |
| MY FAVORITE AUTHOR IS RAYMOND CARVER!       |
| MY FAVORITE AUTHOR IS MICHAEL CHABON!       |
| MY FAVORITE AUTHOR IS DON DELILLO!          |
| MY FAVORITE AUTHOR IS DAVE EGGERS!          |
| MY FAVORITE AUTHOR IS DAVE EGGERS!          |
| MY FAVORITE AUTHOR IS DAVE EGGERS!          |
| MY FAVORITE AUTHOR IS DAVID FOSTER WALLACE! |
| MY FAVORITE AUTHOR IS DAVID FOSTER WALLACE! |
| MY FAVORITE AUTHOR IS NEIL GAIMAN!          |
| MY FAVORITE AUTHOR IS NEIL GAIMAN!          |
| MY FAVORITE AUTHOR IS NEIL GAIMAN!          |
| MY FAVORITE AUTHOR IS DAN HARRIS!           |
| MY FAVORITE AUTHOR IS FREIDA HARRIS!        |
| MY FAVORITE AUTHOR IS JHUMPA LAHIRI!        |
| MY FAVORITE AUTHOR IS JHUMPA LAHIRI!        |
| MY FAVORITE AUTHOR IS GEORGE SAUNDERS!      |
| MY FAVORITE AUTHOR IS PATTI SMITH!          |
| MY FAVORITE AUTHOR IS JOHN STEINBECK!       |
+---------------------------------------------+
```




# Aggregate

### COUNT
```console
mysql> SELECT COUNT(*) FROM books;
+----------+
| count(*) |
+----------+
|       19 |
+----------+

mysql> SELECT COUNT(author_fname) FROM books;
+---------------------+
| COUNT(author_fname) |
+---------------------+
|                  19 |
+---------------------+

mysql> SELECT COUNT(DISTINCT author_fname) FROM books;
+------------------------------+
| COUNT(DISTINCT author_fname) |
+------------------------------+
|                           12 |
+------------------------------+

mysql> SELECT COUNT(DISTINCT author_fname, author_lname) FROM books;
+--------------------------------------------+
| COUNT(DISTINCT author_fname, author_lname) |
+--------------------------------------------+
|                                         12 |
+--------------------------------------------+

mysql> SELECT title FROM books WHERE title LIKE '%the%';
+-------------------------------------------+
| title                                     |
+-------------------------------------------+
| The Namesake                              |
| A Hologram for the King: A Novel          |
| The Circle                                |
| The Amazing Adventures of Kavalier & Clay |
| Consider the Lobster                      |
| Lincoln In The Bardo                      |
+-------------------------------------------+

mysql> SELECT COUNT(*) FROM books WHERE title LIKE '%the%';
+----------+
| COUNT(*) |
+----------+
|        6 |
+----------+
```

### GROUP BY
```console

mysql> SELECT author_lname, COUNT(*) FROM books GROUP BY author_lname;
+----------------+----------+
| author_lname   | COUNT(*) |
+----------------+----------+
| Lahiri         |        2 |
| Gaiman         |        3 |
| Eggers         |        3 |
| Chabon         |        1 |
| Smith          |        1 |
| Carver         |        2 |
| DeLillo        |        1 |
| Steinbeck      |        1 |
| Foster Wallace |        2 |
| Harris         |        2 |
| Saunders       |        1 |
+----------------+----------+

mysql> SELECT author_fname, author_lname, COUNT(*) FROM books GROUP BY author_lname, author_fname;
+--------------+----------------+----------+
| author_fname | author_lname   | COUNT(*) |
+--------------+----------------+----------+
| Jhumpa       | Lahiri         |        2 |
| Neil         | Gaiman         |        3 |
| Dave         | Eggers         |        3 |
| Michael      | Chabon         |        1 |
| Patti        | Smith          |        1 |
| Raymond      | Carver         |        2 |
| Don          | DeLillo        |        1 |
| John         | Steinbeck      |        1 |
| David        | Foster Wallace |        2 |
| Dan          | Harris         |        1 |
| Freida       | Harris         |        1 |
| George       | Saunders       |        1 |
+--------------+----------------+----------+

mysql> SELECT released_year, COUNT(*) FROM books GROUP BY released_year;
+---------------+----------+
| released_year | COUNT(*) |
+---------------+----------+
|          2003 |        2 |
|          2016 |        1 |
|          2001 |        3 |
|          1996 |        1 |
|          2012 |        1 |
|          2013 |        1 |
|          2000 |        1 |
|          2010 |        1 |
|          1981 |        1 |
|          1989 |        1 |
|          1985 |        1 |
|          1945 |        1 |
|          2004 |        1 |
|          2005 |        1 |
|          2014 |        1 |
|          2017 |        1 |
+---------------+----------+
```

### MIN MAX
```console
mysql> SELECT MIN(released_year) FROM books;
+--------------------+
| MIN(released_year) |
+--------------------+
|               1945 |
+--------------------+

mysql> SELECT MAX(pages) FROM books;
+------------+
| MAX(pages) |
+------------+
|        634 |
+------------+

// Этот способ немного медленный

mysql> SELECT * FROM books WHERE pages = (SELECT MIN(pages) FROM books);
+---------+-----------------------------------------------------+--------------+--------------+---------------+----------------+-------+
| book_id | title                                               | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+-----------------------------------------------------+--------------+--------------+---------------+----------------+-------+
|      11 | What We Talk About When We Talk About Love: Stories | Raymond      | Carver       |          1981 |             23 |   176 |
+---------+-----------------------------------------------------+--------------+--------------+---------------+----------------+-------+

mysql> select title, pages from books where pages=634;
+-------------------------------------------+-------+
| title                                     | pages |
+-------------------------------------------+-------+
| The Amazing Adventures of Kavalier & Clay |   634 |
+-------------------------------------------+-------+

mysql> SELECT title, pages FROM books WHERE pages=(SELECT MAX(pages) FROM books);
+-------------------------------------------+-------+
| title                                     | pages |
+-------------------------------------------+-------+
| The Amazing Adventures of Kavalier & Clay |   634 |
+-------------------------------------------+-------+

// способ быстрее 
mysql> SELECT * FROM books ORDER BY pages ASC LIMIT 1;
+---------+-----------------------------------------------------+--------------+--------------+---------------+----------------+-------+
| book_id | title                                               | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+-----------------------------------------------------+--------------+--------------+---------------+----------------+-------+
|      11 | What We Talk About When We Talk About Love: Stories | Raymond      | Carver       |          1981 |             23 |   176 |
+---------+-----------------------------------------------------+--------------+--------------+---------------+----------------+-------+

```

### MIN MAX with BROUP BY
```console
mysql> SELECT author_fname, author_lname, MIN(released_year) FROM books GROUP BY author_lname, author_fname;
+--------------+----------------+--------------------+
| author_fname | author_lname   | MIN(released_year) |
+--------------+----------------+--------------------+
| Jhumpa       | Lahiri         |               1996 |
| Neil         | Gaiman         |               2001 |
| Dave         | Eggers         |               2001 |
| Michael      | Chabon         |               2000 |
| Patti        | Smith          |               2010 |
| Raymond      | Carver         |               1981 |
| Don          | DeLillo        |               1985 |
| John         | Steinbeck      |               1945 |
| David        | Foster Wallace |               2004 |
| Dan          | Harris         |               2014 |
| Freida       | Harris         |               2001 |
| George       | Saunders       |               2017 |
+--------------+----------------+--------------------+


mysql> SELECT author_lname, author_fname, MAX(pages) FROM book
+----------------+--------------+------------+
| author_lname   | author_fname | MAX(pages) |
+----------------+--------------+------------+
| Lahiri         | Jhumpa       |        291 |
| Gaiman         | Neil         |        465 |
| Eggers         | Dave         |        504 |
| Chabon         | Michael      |        634 |
| Smith          | Patti        |        304 |
| Carver         | Raymond      |        526 |
| DeLillo        | Don          |        320 |
| Steinbeck      | John         |        181 |
| Foster Wallace | David        |        343 |
| Harris         | Dan          |        256 |
| Harris         | Freida       |        428 |
| Saunders       | George       |        367 |
+----------------+--------------+------------+

mysql> SELECT CONCAT(author_fname, ' ', author_lname) AS author, MAX(pages) AS 'longes_books' FROM books GROUP BY author_fname, author_lname;
+----------------------+--------------+
| author               | longes_books |
+----------------------+--------------+
| Jhumpa Lahiri        |          291 |
| Neil Gaiman          |          465 |
| Dave Eggers          |          504 |
| Michael Chabon       |          634 |
| Patti Smith          |          304 |
| Raymond Carver       |          526 |
| Don DeLillo          |          320 |
| John Steinbeck       |          181 |
| David Foster Wallace |          343 |
| Dan Harris           |          256 |
| Freida Harris        |          428 |
| George Saunders      |          367 |
+----------------------+--------------+
```

### SUM
```console
mysql> SELECT SUM(pages) FROM books;
+------------+
| SUM(pages) |
+------------+
|       6623 |
+------------+

mysql> SELECT author_fname, author_lname, SUM(pages) FROM books GROUP BY author_fname, author_lname;
+--------------+----------------+------------+
| author_fname | author_lname   | SUM(pages) |
+--------------+----------------+------------+
| Jhumpa       | Lahiri         |        489 |
| Neil         | Gaiman         |        977 |
| Dave         | Eggers         |       1293 |
| Michael      | Chabon         |        634 |
| Patti        | Smith          |        304 |
| Raymond      | Carver         |        702 |
| Don          | DeLillo        |        320 |
| John         | Steinbeck      |        181 |
| David        | Foster Wallace |        672 |
| Dan          | Harris         |        256 |
| Freida       | Harris         |        428 |
| George       | Saunders       |        367 |
+--------------+----------------+------------+
```

### AVG
```console
mysql> SELECT AVG(released_year) FROM BOOKS;
+--------------------+
| AVG(released_year) |
+--------------------+
|          1999.7895 |
+--------------------+

mysql> SELECT AVG(pages) from books;
+------------+
| AVG(pages) |
+------------+
|   348.5789 |
+------------+

mysql> SELECT AVG(stock_quantity), released_year FROM books GROUP BY released_year ORDER BY released_year;
+---------------------+---------------+
| AVG(stock_quantity) | released_year |
+---------------------+---------------+
|             95.0000 |          1945 |
|             23.0000 |          1981 |
|             49.0000 |          1985 |
|             12.0000 |          1989 |
|             97.0000 |          1996 |
|             68.0000 |          2000 |
|            134.3333 |          2001 |
|             66.0000 |          2003 |
|            172.0000 |          2004 |
|             92.0000 |          2005 |
|             55.0000 |          2010 |
|            154.0000 |          2012 |
|             26.0000 |          2013 |
|             29.0000 |          2014 |
|             43.0000 |          2016 |
|           1000.0000 |          2017 |
+---------------------+---------------+
```

### Exicise 
```console
mysql> SELECT COUNT(pages) FROM books;
+--------------+
| COUNT(pages) |
+--------------+
|           19 |
+--------------+

mysql> SELECT released_year, COUNT(*) FROM books GROUP BY released_year;
+---------------+----------+
| released_year | COUNT(*) |
+---------------+----------+
|          2003 |        2 |
|          2016 |        1 |
|          2001 |        3 |
|          1996 |        1 |
|          2012 |        1 |
|          2013 |        1 |
|          2000 |        1 |
|          2010 |        1 |
|          1981 |        1 |
|          1989 |        1 |
|          1985 |        1 |
|          1945 |        1 |
|          2004 |        1 |
|          2005 |        1 |
|          2014 |        1 |
|          2017 |        1 |
+---------------+----------+



mysql> SELECT SUM(stock_quantity) FROM books;
+---------------------+
| SUM(stock_quantity) |
+---------------------+
|                2450 |
+---------------------+


mysql> SELECT CONCAT( author_fname, ' ',  author_lname ) AS author, AVG(released_year) FROM books GROUP BY author_fname, author_lname;
+----------------------+--------------------+
| author               | AVG(released_year) |
+----------------------+--------------------+
| Jhumpa Lahiri        |          1999.5000 |
| Neil Gaiman          |          2006.6667 |
| Dave Eggers          |          2008.6667 |
| Michael Chabon       |          2000.0000 |
| Patti Smith          |          2010.0000 |
| Raymond Carver       |          1985.0000 |
| Don DeLillo          |          1985.0000 |
| John Steinbeck       |          1945.0000 |
| David Foster Wallace |          2004.5000 |
| Dan Harris           |          2014.0000 |
| Freida Harris        |          2001.0000 |
| George Saunders      |          2017.0000 |
+----------------------+--------------------+


mysql> SELECT CONCAT(author_fname, ' ', author_lname) AS author, pages FROM books ORDER BY pages DESC LIMIT 1;
+----------------+-------+
| author         | pages |
+----------------+-------+
| Michael Chabon |   634 |
+----------------+-------+

mysql> SELECT CONCAT(author_fname, ' ', author_lname) AS author, pages FROM books WHERE pages=(SELECT MAX(pages) FROM books);
+----------------+-------+
| author         | pages |
+----------------+-------+
| Michael Chabon |   634 |
+----------------+-------+

mysql> SELECT released_year as year, COUNT(*) AS books, AVG(pages) FROM books GROUP BY released_year ORDER BY released_year;
+------+-------+------------+
| year | books | AVG(pages) |
+------+-------+------------+
| 1945 |     1 |   181.0000 |
| 1981 |     1 |   176.0000 |
| 1985 |     1 |   320.0000 |
| 1989 |     1 |   526.0000 |
| 1996 |     1 |   198.0000 |
| 2000 |     1 |   634.0000 |
| 2001 |     3 |   443.3333 |
| 2003 |     2 |   249.5000 |
| 2004 |     1 |   329.0000 |
| 2005 |     1 |   343.0000 |
| 2010 |     1 |   304.0000 |
| 2012 |     1 |   352.0000 |
| 2013 |     1 |   504.0000 |
| 2014 |     1 |   256.0000 |
| 2016 |     1 |   304.0000 |
| 2017 |     1 |   367.0000 |
+------+-------+------------+



```

# DATA TYPES

DIGIT
```console
CREATE TABLE items(price DECIMAL(5,2)); // DECIMAL(5,2) 999.99   5 - 999.99,  2 - .99
INSERT INTO items(price) VALUES(7);
......

mysql> desc items;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| price | decimal(5,2) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+



mysql> select * FROM  items;
+--------+
| price  |
+--------+
|   7.00 |
|  12.00 |
| 122.00 |
| 123.44 |
| 123.44 |
+--------+

```

### FLOAT ~ 7 digit (4 byte) DOUBLE ~ 15 digit (8 byte)
```console
mysql> CREATE TABLE thingies (price FLOAT);
Query OK, 0 rows affected (0,01 sec)

mysql> desc thingies;
+-------+-------+------+-----+---------+-------+
| Field | Type  | Null | Key | Default | Extra |
+-------+-------+------+-----+---------+-------+
| price | float | YES  |     | NULL    |       |
+-------+-------+------+-----+---------+-------+

mysql> INSERT INTO thingies(price) VALUES (88.45);
Query OK, 1 row affected (0,00 sec)

mysql> SELECT * FROM thingies;
+-------+
| price |
+-------+
| 88.45 |
+-------+


```

### DATE
```console
mysql> CREATE TABLE people (name VARCHAR(100), birthdate DATE, birthtime TIME, birthdt DATETIME);

mysql> desc people;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| name      | varchar(100) | YES  |     | NULL    |       |
| birthdate | date         | YES  |     | NULL    |       |
| birthtime | time         | YES  |     | NULL    |       |
| birthdt   | datetime     | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+

mysql> INSERT INTO people (name, birthdate, birthtime, birthdt)
    -> VALUES('Padma', '1983-11-11', '10:07:35', '1983-11-11 10:07:35');

mysql> SELECT * FROM people;
+-------+------------+-----------+---------------------+
| name  | birthdate  | birthtime | birthdt             |
+-------+------------+-----------+---------------------+
| Padma | 1983-11-11 | 10:07:35  | 1983-11-11 10:07:35 |
+-------+------------+-----------+---------------------+

mysql> INSERT INTO people (name, birthdate, birthtime, birthdt)
    -> VALUES('Larry', '1943-12-25', '04:10:42', '1943-12-25 04:10:42');

mysql> SELECT * FROM people;
+-------+------------+-----------+---------------------+
| name  | birthdate  | birthtime | birthdt             |
+-------+------------+-----------+---------------------+
| Padma | 1983-11-11 | 10:07:35  | 1983-11-11 10:07:35 |
| Larry | 1943-12-25 | 04:10:42  | 1943-12-25 04:10:42 |
+-------+------------+-----------+---------------------+

mysql> SELECT CURDATE();
+------------+
| CURDATE()  |
+------------+
| 2019-12-11 |
+------------+
1 row in set (0,00 sec)

mysql> SELECT CURTIME();
+-----------+
| CURTIME() |
+-----------+
| 12:49:36  |
+-----------+
1 row in set (0,00 sec)

mysql> SELECT NOW();
+---------------------+
| NOW()               |
+---------------------+
| 2019-12-11 12:49:42 |
+---------------------+


mysql> INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES('Toaster', CURDATE(), CURTIME(), NOW());

mysql> SELECT * FROM people;                                 
+---------+------------+-----------+---------------------+
| name    | birthdate  | birthtime | birthdt             |
+---------+------------+-----------+---------------------+
| Padma   | 1983-11-11 | 10:07:35  | 1983-11-11 10:07:35 |
| Larry   | 1943-12-25 | 04:10:42  | 1943-12-25 04:10:42 |
| Toaster | 2019-12-11 | 12:54:04  | 2019-12-11 12:54:04 |
+---------+------------+-----------+---------------------+

```

### Format date
```console
mysql> SELECT name, DAY(birthdate), birthdate FROM people;
+---------+----------------+------------+
| name    | DAY(birthdate) | birthdate  |
+---------+----------------+------------+
| Padma   |             11 | 1983-11-11 |
| Larry   |             25 | 1943-12-25 |
| Toaster |             11 | 2019-12-11 |
+---------+----------------+------------+

mysql> SELECT name, birthdate, DAYNAME(birthdate) FROM people;
+---------+------------+--------------------+
| name    | birthdate  | DAYNAME(birthdate) |
+---------+------------+--------------------+
| Padma   | 1983-11-11 | Friday             |
| Larry   | 1943-12-25 | Saturday           |
| Toaster | 2019-12-11 | Wednesday          |
+---------+------------+--------------------+


mysql> SELECT name, birthdate, DAYOFWEEK(birthdate) FROM people;
+---------+------------+----------------------+
| name    | birthdate  | DAYOFWEEK(birthdate) |
+---------+------------+----------------------+
| Padma   | 1983-11-11 |                    6 |
| Larry   | 1943-12-25 |                    7 |
| Toaster | 2019-12-11 |                    4 |
+---------+------------+----------------------+

le;
+---------+------------+----------------------+
| name    | birthdate  | DAYOFYEAR(birthdate) |
+---------+------------+----------------------+
| Padma   | 1983-11-11 |                  315 |
| Larry   | 1943-12-25 |                  359 |
| Toaster | 2019-12-11 |                  345 |
+---------+------------+----------------------+

mysql> SELECT name, birthdt, MONTH(birthdt) FROM people;
+---------+---------------------+----------------+
| name    | birthdt             | MONTH(birthdt) |
+---------+---------------------+----------------+
| Padma   | 1983-11-11 10:07:35 |             11 |
| Larry   | 1943-12-25 04:10:42 |             12 |
| Toaster | 2019-12-11 12:54:04 |             12 |
+---------+---------------------+----------------+

mysql> SELECT name, birthdt, MONTHNAME(birthdt) FROM people;
+---------+---------------------+--------------------+
| name    | birthdt             | MONTHNAME(birthdt) |
+---------+---------------------+--------------------+
| Padma   | 1983-11-11 10:07:35 | November           |
| Larry   | 1943-12-25 04:10:42 | December           |
| Toaster | 2019-12-11 12:54:04 | December           |
+---------+---------------------+--------------------+


mysql> SELECT name, birthdt, HOUR(birthdt) FROM people;
+---------+---------------------+---------------+
| name    | birthdt             | HOUR(birthdt) |
+---------+---------------------+---------------+
| Padma   | 1983-11-11 10:07:35 |            10 |
| Larry   | 1943-12-25 04:10:42 |             4 |
| Toaster | 2019-12-11 12:54:04 |            12 |
+---------+---------------------+---------------+

mysql> SELECT CONCAT(MONTHNAME(birthdate), ' ', DAY(birthdate), ' ', YEAR(birthdate)) FROM people;
+-------------------------------------------------------------------------+
| CONCAT(MONTHNAME(birthdate), ' ', DAY(birthdate), ' ', YEAR(birthdate)) |
+-------------------------------------------------------------------------+
| November 11 1983                                                        |
| December 25 1943                                                        |
| December 11 2019                                                        |
+-------------------------------------------------------------------------+


mysql> SELECT DATE_FORMAT(birthdt, 'Was born on a %W') FROM people;
+------------------------------------------+
| DATE_FORMAT(birthdt, 'Was born on a %W') |
+------------------------------------------+
| Was born on a Friday                     |
| Was born on a Saturday                   |
| Was born on a Wednesday                  |
+------------------------------------------+

https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html


mysql> SELECT DATE_FORMAT(birthdt, '--%D--%M--%Y--') FROM people;
+----------------------------------------+
| DATE_FORMAT(birthdt, '--%D--%M--%Y--') |
+----------------------------------------+
| --11th--November--1983--               |
| --25th--December--1943--               |
| --11th--December--2019--               |
+----------------------------------------+



mysql> SELECT DATE_FORMAT(birthdt, '%m/%d/%Y') FROM people;
+----------------------------------+
| DATE_FORMAT(birthdt, '%m/%d/%Y') |
+----------------------------------+
| 11/11/1983                       |
| 12/25/1943                       |
| 12/11/2019                       |
+----------------------------------+

mysql> SELECT DATE_FORMAT(birthdt, '%m/%d/%Y at %h:%i') FROM people;
+-------------------------------------------+
| DATE_FORMAT(birthdt, '%m/%d/%Y at %h:%i') |
+-------------------------------------------+
| 11/11/1983 at 10:07                       |
| 12/25/1943 at 04:10                       |
| 12/11/2019 at 12:54                       |
+-------------------------------------------+


```

### DATA MATH
```console

mysql> SELECT name, birthdate, DATEDIFF(NOW(), birthdate) FROM people;
+---------+------------+----------------------------+
| name    | birthdate  | DATEDIFF(NOW(), birthdate) |
+---------+------------+----------------------------+
| Padma   | 1983-11-11 |                      13179 |
| Larry   | 1943-12-25 |                      27745 |
| Toaster | 2019-12-11 |                          0 |
+---------+------------+----------------------------+

mysql> SELECT birthdt, DATE_ADD(birthdt, INTERVAL 1 MONTH) FROM people;
+---------------------+-------------------------------------+
| birthdt             | DATE_ADD(birthdt, INTERVAL 1 MONTH) |
+---------------------+-------------------------------------+
| 1983-11-11 10:07:35 | 1983-12-11 10:07:35                 |
| 1943-12-25 04:10:42 | 1944-01-25 04:10:42                 |
| 2019-12-11 12:54:04 | 2020-01-11 12:54:04                 |
+---------------------+-------------------------------------+

mysql> SELECT birthdt, DATE_ADD(birthdt, INTERVAL 3 QUARTER) FROM people;
+---------------------+---------------------------------------+
| birthdt             | DATE_ADD(birthdt, INTERVAL 3 QUARTER) |
+---------------------+---------------------------------------+
| 1983-11-11 10:07:35 | 1984-08-11 10:07:35                   |
| 1943-12-25 04:10:42 | 1944-09-25 04:10:42                   |
| 2019-12-11 12:54:04 | 2020-09-11 12:54:04                   |
+---------------------+---------------------------------------+

mysql> SELECT birthdt, birthdt + INTERVAL 1 MONTH + INTERVAL 10 DAY FROM people;
+---------------------+----------------------------------------------+
| birthdt             | birthdt + INTERVAL 1 MONTH + INTERVAL 10 DAY |
+---------------------+----------------------------------------------+
| 1983-11-11 10:07:35 | 1983-12-21 10:07:35                          |
| 1943-12-25 04:10:42 | 1944-02-04 04:10:42                          |
| 2019-12-11 12:54:04 | 2020-01-21 12:54:04                          |
+---------------------+----------------------------------------------+
```

### Timestamt
```console
mysql> CREATE TABLE comments (
    -> content VARCHAR(100),
    -> created_at TIMESTAMP DEFAULT NOW());
Query OK, 0 rows affected (0,02 sec)

mysql> DESC comments;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| content    | varchar(100) | YES  |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+

mysql> INSERT INTO comments (content) VALUES('lol what a funny article');
Query OK, 1 row affected (0,00 sec)

mysql> 
mysql> INSERT INTO comments (content) VALUES('I found this offensive');
Query OK, 1 row affected (0,00 sec)

mysql> 
mysql> INSERT INTO comments (content) VALUES('Ifasfsadfsadfsad');
Query OK, 1 row affected (0,00 sec)

mysql> SELECT * FROM comments ORDER BY created_at DESC;
+--------------------------+---------------------+
| content                  | created_at          |
+--------------------------+---------------------+
| Ifasfsadfsadfsad         | 2019-12-11 14:51:48 |
| lol what a funny article | 2019-12-11 14:51:47 |
| I found this offensive   | 2019-12-11 14:51:47 |
+--------------------------+---------------------+


mysql> CREATE TABLE comments2 (
    ->     content VARCHAR(100),
    ->     changed_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
    -> );

mysql> INSERT INTO comments2 (content) VALUES('dasdasdasd');
mysql> INSERT INTO comments2 (content) VALUES('lololololo');
mysql> INSERT INTO comments2 (content) VALUES('I LIKE CATS AND DOGS');
mysql> UPDATE comments2 SET content='THIS IS NOT GIBBERISH' WHERE content='dasdasdasd';
mysql> SELECT * FROM comments2;
+-----------------------+---------------------+
| content               | changed_at          |
+-----------------------+---------------------+
| THIS IS NOT GIBBERISH | 2019-12-11 15:18:00 |
| lololololo            | 2019-12-11 15:17:48 |
| I LIKE CATS AND DOGS  | 2019-12-11 15:17:49 |
+-----------------------+---------------------+
```

# Exercise
```console
mysql> CREATE TABLE inventory (
    -> item_name VARCHAR(100),
    -> price DECIMAL(8,2),
    -> quantity INT);


mysql> SELECT DATE_FORMAT(NOW(), '%d-%m-%y');
+--------------------------------+
| DATE_FORMAT(NOW(), '%d-%m-%y') |
+--------------------------------+
| 11-12-19                       |
+--------------------------------+

mysql> SELECT DAYNAME(NOW());
+----------------+
| DAYNAME(NOW()) |
+----------------+
| Wednesday      |
+----------------+

mysql> SELECT DATE_FORMAT(NOW(), '%W');
+--------------------------+
| DATE_FORMAT(NOW(), '%W') |
+--------------------------+
| Wednesday                |
+--------------------------+

mysql> SELECT DATE_FORMAT(NOW(), '%h:%i - %d/%m/%y');
+----------------------------------------+
| DATE_FORMAT(NOW(), '%h:%i - %d/%m/%y') |
+----------------------------------------+
| 03:51 - 11/12/19                       |
+----------------------------------------+



```

## LOGICAL OPERATOR

### !=
```console
mysql> SELECT title, released_year FROM books WHERE released_year != 2017;
+-----------------------------------------------------+---------------+
| title                                               | released_year |
+-----------------------------------------------------+---------------+
| The Namesake                                        |          2003 |
| Norse Mythology                                     |          2016 |
| American Gods                                       |          2001 |
| Interpreter of Maladies                             |          1996 |
| A Hologram for the King: A Novel                    |          2012 |
| The Circle                                          |          2013 |
| The Amazing Adventures of Kavalier & Clay           |          2000 |
| Just Kids                                           |          2010 |
| A Heartbreaking Work of Staggering Genius           |          2001 |
| Coraline                                            |          2003 |
| What We Talk About When We Talk About Love: Stories |          1981 |
| Where I'm Calling From: Selected Stories            |          1989 |
| White Noise                                         |          1985 |
| Cannery Row                                         |          1945 |
| Oblivion: Stories                                   |          2004 |
| Consider the Lobster                                |          2005 |
| 10% Happier                                         |          2014 |
| fake_book                                           |          2001 |
+-----------------------------------------------------+---------------+
```

### LIKE
```console
mysql> SELECT title from books WHERE title LIKE 'W%';
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| White Noise                                         |
+-----------------------------------------------------+

mysql> SELECT title from books WHERE title LIKE '%W%';
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| A Heartbreaking Work of Staggering Genius           |
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| White Noise                                         |
| Cannery Row                                         |
+-----------------------------------------------------+

mysql> SELECT title from books WHERE title LIKE 'W%';
+-----------------------------------------------------+
| title                                               |
+-----------------------------------------------------+
| What We Talk About When We Talk About Love: Stories |
| Where I'm Calling From: Selected Stories            |
| White Noise                                         |
+-----------------------------------------------------+

mysql> SELECT title from books WHERE title NOT LIKE '%w%';
+-------------------------------------------+
| title                                     |
+-------------------------------------------+
| The Namesake                              |
| Norse Mythology                           |
| American Gods                             |
| Interpreter of Maladies                   |
| A Hologram for the King: A Novel          |
| The Circle                                |
| The Amazing Adventures of Kavalier & Clay |
| Just Kids                                 |
| Coraline                                  |
| Oblivion: Stories                         |
| Consider the Lobster                      |
| 10% Happier                               |
| fake_book                                 |
| Lincoln In The Bardo                      |
+-------------------------------------------+
```

### <= >
```console
mysql> SELECT title, stock_quantity FROM books WHERE stock_quantity >= 100 ORDER BY stock_quantity;
+-------------------------------------------+----------------+
| title                                     | stock_quantity |
+-------------------------------------------+----------------+
| Coraline                                  |            100 |
| A Heartbreaking Work of Staggering Genius |            104 |
| A Hologram for the King: A Novel          |            154 |
| Oblivion: Stories                         |            172 |
| fake_book                                 |            287 |
| Lincoln In The Bardo                      |           1000 |
+-------------------------------------------+----------------+



SELECT title, author_lname FROM books WHERE author_lname = 'Eggers';
+-------------------------------------------+--------------+
| title                                     | author_lname |
+-------------------------------------------+--------------+
| A Hologram for the King: A Novel          | Eggers       |
| The Circle                                | Eggers       |
| A Heartbreaking Work of Staggering Genius | Eggers       |
+-------------------------------------------+--------------+


SELECT title, author_lname FROM books WHERE author_lname = 'eggers';
+-------------------------------------------+--------------+
| title                                     | author_lname |
+-------------------------------------------+--------------+
| A Hologram for the King: A Novel          | Eggers       |
| The Circle                                | Eggers       |
| A Heartbreaking Work of Staggering Genius | Eggers       |
+-------------------------------------------+--------------+

SELECT title, author_lname FROM books WHERE author_lname = 'eGGers';
the same
```

### AND
```console
mysql> SELECT  
    ->     title, 
    ->     author_lname, 
    ->     released_year FROM books
    -> WHERE author_lname='Eggers' 
    ->     AND released_year > 2010;
+----------------------------------+--------------+---------------+
| title                            | author_lname | released_year |
+----------------------------------+--------------+---------------+
| A Hologram for the King: A Novel | Eggers       |          2012 |
| The Circle                       | Eggers       |          2013 |
+----------------------------------+--------------+---------------+

mysql> SELECT * FROM books WHERE author_lname='Eggers' 
    ->     AND released_year > 2010 AND title LIKE '%novel%';
+---------+----------------------------------+--------------+--------------+---------------+----------------+-------+
| book_id | title                            | author_fname | author_lname | released_year | stock_quantity | pages |
+---------+----------------------------------+--------------+--------------+---------------+----------------+-------+
|       5 | A Hologram for the King: A Novel | Dave         | Eggers       |          2012 |            154 |   352 |
+---------+----------------------------------+--------------+--------------+---------------+----------------+-------+

```

### OR
```console
mysql> SELECT title, author_lname, released_year FROM books WHERE author_lname='Eggers' || released_year > 2010;
+-------------------------------------------+--------------+---------------+
| title                                     | author_lname | released_year |
+-------------------------------------------+--------------+---------------+
| Norse Mythology                           | Gaiman       |          2016 |
| A Hologram for the King: A Novel          | Eggers       |          2012 |
| The Circle                                | Eggers       |          2013 |
| A Heartbreaking Work of Staggering Genius | Eggers       |          2001 |
| 10% Happier                               | Harris       |          2014 |
| Lincoln In The Bardo                      | Saunders     |          2017 |
+-------------------------------------------+--------------+---------------+

+-------------------------------------------+----------------+---------------+----------------+
| title                                     | author_lname   | released_year | stock_quantity |
+-------------------------------------------+----------------+---------------+----------------+
| Norse Mythology                           | Gaiman         |          2016 |             43 |
| A Hologram for the King: A Novel          | Eggers         |          2012 |            154 |
| The Circle                                | Eggers         |          2013 |             26 |
| A Heartbreaking Work of Staggering Genius | Eggers         |          2001 |            104 |
| Oblivion: Stories                         | Foster Wallace |          2004 |            172 |
| 10% Happier                               | Harris         |          2014 |             29 |
| fake_book                                 | Harris         |          2001 |            287 |
| Lincoln In The Bardo                      | Saunders       |          2017 |           1000 |
+-------------------------------------------+----------------+---------------+----------------+
```
### BETWEEN
```console
mysql> SELECT title, released_year FROM books WHERE released_year >= 2004 && released_year <= 2015;
+----------------------------------+---------------+
| title                            | released_year |
+----------------------------------+---------------+
| A Hologram for the King: A Novel |          2012 |
| The Circle                       |          2013 |
| Just Kids                        |          2010 |
| Oblivion: Stories                |          2004 |
| Consider the Lobster             |          2005 |
| 10% Happier                      |          2014 |
+----------------------------------+---------------+

mysql> SELECT title,  released_year FROM books WHERE  released_year BETWEEN 2010 AND 2015;
+----------------------------------+---------------+
| title                            | released_year |
+----------------------------------+---------------+
| A Hologram for the King: A Novel |          2012 |
| The Circle                       |          2013 |
| Just Kids                        |          2010 |
| 10% Happier                      |          2014 |
+----------------------------------+---------------+

mysql> SELECT title,  released_year FROM books WHERE  released_year NOT BETWEEN 2010 AND 2015;
+-----------------------------------------------------+---------------+
| title                                               | released_year |
+-----------------------------------------------------+---------------+
| The Namesake                                        |          2003 |
| Norse Mythology                                     |          2016 |
| American Gods                                       |          2001 |
| Interpreter of Maladies                             |          1996 |
| The Amazing Adventures of Kavalier & Clay           |          2000 |
| A Heartbreaking Work of Staggering Genius           |          2001 |
| Coraline                                            |          2003 |
| What We Talk About When We Talk About Love: Stories |          1981 |
| Where I'm Calling From: Selected Stories            |          1989 |
| White Noise                                         |          1985 |
| Cannery Row                                         |          1945 |
| Oblivion: Stories                                   |          2004 |
| Consider the Lobster                                |          2005 |
| fake_book                                           |          2001 |
| Lincoln In The Bardo                                |          2017 |
+-----------------------------------------------------+---------------+

mysql> SELECT CAST('2017-05-02' AS DATETIME);
+--------------------------------+
| CAST('2017-05-02' AS DATETIME) |
+--------------------------------+
| 2017-05-02 00:00:00            |
+--------------------------------+



mysql> SELECT name, birthdt FROM people;
+---------+---------------------+
| name    | birthdt             |
+---------+---------------------+
| Padma   | 1983-11-11 10:07:35 |
| Larry   | 1943-12-25 04:10:42 |
| Toaster | 2019-12-11 12:54:04 |
+---------+---------------------+
3 rows in set (0,00 sec)

mysql> SELECT name, birthdt FROM people WHERE birthdt BETWEEN '1980-01-01' AND '2000-01-01';
+-------+---------------------+
| name  | birthdt             |
+-------+---------------------+
| Padma | 1983-11-11 10:07:35 |
+-------+---------------------+
1 row in set (0,00 sec)



SELECT name, birthdt FROM people WHERE  birthdt BETWEEN CAST('1980-01-01' AS DATETIME) AND CAST('2000-01-01' AS DATETIME);
```


### IN
```console
mysql> SELECT title, author_lname FROM books WHERE author_lname='Carver' OR author_lname='Lahiri' OR author_lname='Smith'; 
+-----------------------------------------------------+--------------+
| title                                               | author_lname |
+-----------------------------------------------------+--------------+
| The Namesake                                        | Lahiri       |
| Interpreter of Maladies                             | Lahiri       |
| Just Kids                                           | Smith        |
| What We Talk About When We Talk About Love: Stories | Carver       |
| Where I'm Calling From: Selected Stories            | Carver       |
+-----------------------------------------------------+--------------+

mysql> SELECT title, author_lname FROM books WHERE author_lname IN ('Carver', 'Lahiri', 'Smith');
+-----------------------------------------------------+--------------+
| title                                               | author_lname |
+-----------------------------------------------------+--------------+
| The Namesake                                        | Lahiri       |
| Interpreter of Maladies                             | Lahiri       |
| Just Kids                                           | Smith        |
| What We Talk About When We Talk About Love: Stories | Carver       |
| Where I'm Calling From: Selected Stories            | Carver       |
+-----------------------------------------------------+--------------+


mysql> SELECT title, released_year FROM books WHERE released_year IN (2017, 1985);
+----------------------+---------------+
| title                | released_year |
+----------------------+---------------+
| White Noise          |          1985 |
| Lincoln In The Bardo |          2017 |
+----------------------+---------------+

SELECT title, released_year FROM books WHERE released_year != 2000 AND released_year != 2002 AND released_year != 2004 AND released_year != 2006 AND released_year != 2008 AND released_year != 2010 AND released_year != 2012 AND released_year != 2014 AND released_year != 2016;

mysql> SELECT title, released_year FROM books WHERE released_year NOT IN (2000,2002,2004,2006,2008,2010,2012,2014,2016);
+-----------------------------------------------------+---------------+
| title                                               | released_year |
+-----------------------------------------------------+---------------+
| The Namesake                                        |          2003 |
| American Gods                                       |          2001 |
| Interpreter of Maladies                             |          1996 |
| The Circle                                          |          2013 |
| A Heartbreaking Work of Staggering Genius           |          2001 |
| Coraline                                            |          2003 |
| What We Talk About When We Talk About Love: Stories |          1981 |
| Where I'm Calling From: Selected Stories            |          1989 |
| White Noise                                         |          1985 |
| Cannery Row                                         |          1945 |
| Consider the Lobster                                |          2005 |
| fake_book                                           |          2001 |
| Lincoln In The Bardo                                |          2017 |
+-----------------------------------------------------+---------------+

mysql> SELECT title, released_year FROM books
    -> WHERE released_year >= 2000
    -> AND released_year NOT IN 
    -> (2000,2002,2004,2006,2008,2010,2012,2014,2016);
+-------------------------------------------+---------------+
| title                                     | released_year |
+-------------------------------------------+---------------+
| The Namesake                              |          2003 |
| American Gods                             |          2001 |
| The Circle                                |          2013 |
| A Heartbreaking Work of Staggering Genius |          2001 |
| Coraline                                  |          2003 |
| Consider the Lobster                      |          2005 |
| fake_book                                 |          2001 |
| Lincoln In The Bardo                      |          2017 |
+-------------------------------------------+---------------+

mysql> SELECT title, released_year FROM books WHERE released_year >= 2000 AND released_year % 2 != 0 ORDER BY released_year;
+-------------------------------------------+---------------+
| title                                     | released_year |
+-------------------------------------------+---------------+
| American Gods                             |          2001 |
| A Heartbreaking Work of Staggering Genius |          2001 |
| fake_book                                 |          2001 |
| The Namesake                              |          2003 |
| Coraline                                  |          2003 |
| Consider the Lobster                      |          2005 |
| The Circle                                |          2013 |
| Lincoln In The Bardo                      |          2017 |
+-------------------------------------------+---------------+
```

### 
```console
mysql> SELECT title, released_year,
    ->        CASE 
    ->          WHEN released_year >= 2000 THEN 'Modern Lit'
    ->          ELSE '20th Century Lit'
    ->        END AS GENRE
    -> FROM books;
+-----------------------------------------------------+---------------+------------------+
| title                                               | released_year | GENRE            |
+-----------------------------------------------------+---------------+------------------+
| The Namesake                                        |          2003 | Modern Lit       |
| Norse Mythology                                     |          2016 | Modern Lit       |
| American Gods                                       |          2001 | Modern Lit       |
| Interpreter of Maladies                             |          1996 | 20th Century Lit |
| A Hologram for the King: A Novel                    |          2012 | Modern Lit       |
| The Circle                                          |          2013 | Modern Lit       |
| The Amazing Adventures of Kavalier & Clay           |          2000 | Modern Lit       |
| Just Kids                                           |          2010 | Modern Lit       |
| A Heartbreaking Work of Staggering Genius           |          2001 | Modern Lit       |
| Coraline                                            |          2003 | Modern Lit       |
| What We Talk About When We Talk About Love: Stories |          1981 | 20th Century Lit |
| Where I'm Calling From: Selected Stories            |          1989 | 20th Century Lit |
| White Noise                                         |          1985 | 20th Century Lit |
| Cannery Row                                         |          1945 | 20th Century Lit |
| Oblivion: Stories                                   |          2004 | Modern Lit       |
| Consider the Lobster                                |          2005 | Modern Lit       |
| 10% Happier                                         |          2014 | Modern Lit       |
| fake_book                                           |          2001 | Modern Lit       |
| Lincoln In The Bardo                                |          2017 | Modern Lit       |
+-----------------------------------------------------+---------------+------------------+



mysql> SELECT title, stock_quantity,
    ->     CASE 
    ->         WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
    ->         WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
    ->         ELSE '***'
    ->     END AS STOCK
    -> FROM books;
+-----------------------------------------------------+----------------+-------+
| title                                               | stock_quantity | STOCK |
+-----------------------------------------------------+----------------+-------+
| The Namesake                                        |             32 | *     |
| Norse Mythology                                     |             43 | *     |
| American Gods                                       |             12 | *     |
| Interpreter of Maladies                             |             97 | **    |
| A Hologram for the King: A Novel                    |            154 | ***   |
| The Circle                                          |             26 | *     |
| The Amazing Adventures of Kavalier & Clay           |             68 | **    |
| Just Kids                                           |             55 | **    |
| A Heartbreaking Work of Staggering Genius           |            104 | ***   |
| Coraline                                            |            100 | **    |
| What We Talk About When We Talk About Love: Stories |             23 | *     |
| Where I'm Calling From: Selected Stories            |             12 | *     |
| White Noise                                         |             49 | *     |
| Cannery Row                                         |             95 | **    |
| Oblivion: Stories                                   |            172 | ***   |
| Consider the Lobster                                |             92 | **    |
| 10% Happier                                         |             29 | *     |
| fake_book                                           |            287 | ***   |
| Lincoln In The Bardo                                |           1000 | ***   |
+-----------------------------------------------------+----------------+-------+
```


### execise
```console
mysql> SELECT  title, released_year from books WHERE released_year <= 1980;
+-------------+---------------+
| title       | released_year |
+-------------+---------------+
| Cannery Row |          1945 |
+-------------+---------------+

mysql> SELECT title, author_lname from books WHERE author_lname IN('eggers', 'chabon');
+-------------------------------------------+--------------+
| title                                     | author_lname |
+-------------------------------------------+--------------+
| A Hologram for the King: A Novel          | Eggers       |
| The Circle                                | Eggers       |
| The Amazing Adventures of Kavalier & Clay | Chabon       |
| A Heartbreaking Work of Staggering Genius | Eggers       |
+-------------------------------------------+--------------+

mysql> SELECT title, author_lname, released_year FROM books WHERE author_lname="lahiri" AND released_year > 2000;
+--------------+--------------+---------------+
| title        | author_lname | released_year |
+--------------+--------------+---------------+
| The Namesake | Lahiri       |          2003 |
+--------------+--------------+---------------+

mysql> select title, pages from books WHERE pages BETWEEN 100 AND 200;
+-----------------------------------------------------+-------+
| title                                               | pages |
+-----------------------------------------------------+-------+
| Interpreter of Maladies                             |   198 |
| What We Talk About When We Talk About Love: Stories |   176 |
| Cannery Row                                         |   181 |
+-----------------------------------------------------+-------+

mysql> select title, author_lname from books WHERE author_lname LIKE 'C%' OR author_lname LIKE 'S%' ;
+-----------------------------------------------------+--------------+
| title                                               | author_lname |
+-----------------------------------------------------+--------------+
| The Amazing Adventures of Kavalier & Clay           | Chabon       |
| Just Kids                                           | Smith        |
| What We Talk About When We Talk About Love: Stories | Carver       |
| Where I'm Calling From: Selected Stories            | Carver       |
| Cannery Row                                         | Steinbeck    |
| Lincoln In The Bardo                                | Saunders     |
+-----------------------------------------------------+--------------+

mysql> SELECT title, author_lname FROM books WHERE SUBSTR(author_lname,1,1) = 'C' OR SUBSTR(author_lname,1,1) = 'S';
+-----------------------------------------------------+--------------+
| title                                               | author_lname |
+-----------------------------------------------------+--------------+
| The Amazing Adventures of Kavalier & Clay           | Chabon       |
| Just Kids                                           | Smith        |
| What We Talk About When We Talk About Love: Stories | Carver       |
| Where I'm Calling From: Selected Stories            | Carver       |
| Cannery Row                                         | Steinbeck    |
| Lincoln In The Bardo                                | Saunders     |
+-----------------------------------------------------+--------------+

mysql> SELECT 
    ->     title, 
    ->     author_lname,
    ->     CASE
    ->         WHEN title LIKE '%stories%' THEN 'Short Stories'
    ->         WHEN title = 'Just Kids' OR title = 'A Heartbreaking Work of Staggering Genius' THEN 'Memoir'
    ->         ELSE 'Novel'
    ->     END AS TYPE
    -> FROM books;
+-----------------------------------------------------+----------------+---------------+
| title                                               | author_lname   | TYPE          |
+-----------------------------------------------------+----------------+---------------+
| The Namesake                                        | Lahiri         | Novel         |
| Norse Mythology                                     | Gaiman         | Novel         |
| American Gods                                       | Gaiman         | Novel         |
| Interpreter of Maladies                             | Lahiri         | Novel         |
| A Hologram for the King: A Novel                    | Eggers         | Novel         |
| The Circle                                          | Eggers         | Novel         |
| The Amazing Adventures of Kavalier & Clay           | Chabon         | Novel         |
| Just Kids                                           | Smith          | Memoir        |
| A Heartbreaking Work of Staggering Genius           | Eggers         | Memoir        |
| Coraline                                            | Gaiman         | Novel         |
| What We Talk About When We Talk About Love: Stories | Carver         | Short Stories |
| Where I'm Calling From: Selected Stories            | Carver         | Short Stories |
| White Noise                                         | DeLillo        | Novel         |
| Cannery Row                                         | Steinbeck      | Novel         |
| Oblivion: Stories                                   | Foster Wallace | Short Stories |
| Consider the Lobster                                | Foster Wallace | Novel         |
| 10% Happier                                         | Harris         | Novel         |
| fake_book                                           | Harris         | Novel         |
| Lincoln In The Bardo                                | Saunders       | Novel         |
+-----------------------------------------------------+----------------+---------------+

mysql> SELECT author_fname, author_lname,
    ->     CASE 
    ->         WHEN COUNT(*) = 1 THEN '1 book'
    ->         ELSE CONCAT(COUNT(*), ' books')
    ->     END AS COUNT
    -> FROM books 
    -> GROUP BY author_lname, author_fname;
+--------------+----------------+---------+
| author_fname | author_lname   | COUNT   |
+--------------+----------------+---------+
| Jhumpa       | Lahiri         | 2 books |
| Neil         | Gaiman         | 3 books |
| Dave         | Eggers         | 3 books |
| Michael      | Chabon         | 1 book  |
| Patti        | Smith          | 1 book  |
| Raymond      | Carver         | 2 books |
| Don          | DeLillo        | 1 book  |
| John         | Steinbeck      | 1 book  |
| David        | Foster Wallace | 2 books |
| Dan          | Harris         | 1 book  |
| Freida       | Harris         | 1 book  |
| George       | Saunders       | 1 book  |
+--------------+----------------+---------+
```



# Many to one

### ?

```console
CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);

mysql> desc customers;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| first_name | varchar(100) | YES  |     | NULL    |                |
| last_name  | varchar(100) | YES  |     | NULL    |                |
| email      | varchar(100) | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

mysql> desc orders;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int(11)      | NO   | PRI | NULL    | auto_increment |
| order_date  | date         | YES  |     | NULL    |                |
| amount      | decimal(8,2) | YES  |     | NULL    |                |
| customer_id | int(11)      | YES  | MUL | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+

mysql> SELECT * FROM customers;
+----+------------+-----------+------------------+
| id | first_name | last_name | email            |
+----+------------+-----------+------------------+
|  1 | Boy        | George    | george@gmail.com |
|  2 | George     | Michael   | gm@gmail.com     |
|  3 | David      | Bowie     | david@gmail.com  |
|  4 | Blue       | Steele    | blue@gmail.com   |
|  5 | Bette      | Davis     | bette@aol.com    |
+----+------------+-----------+------------------+

mysql> SELECT * FROM orders;
+----+------------+--------+-------------+
| id | order_date | amount | customer_id |
+----+------------+--------+-------------+
|  1 | 2016-02-10 |  99.99 |           1 |
|  2 | 2017-11-11 |  35.50 |           1 |
|  3 | 2014-12-12 | 800.67 |           2 |
|  4 | 2015-01-03 |  12.50 |           2 |
|  5 | 1999-04-11 | 450.25 |           5 |
+----+------------+--------+-------------+


mysql> mysql> * FROM orders, customers;
+----+------------+--------+-------------+----+------------+-----------+------------------+
| id | order_date | amount | customer_id | id | first_name | last_name | email            |
+----+------------+--------+-------------+----+------------+-----------+------------------+
|  1 | 2016-02-10 |  99.99 |           1 |  1 | Boy        | George    | george@gmail.com |
|  2 | 2017-11-11 |  35.50 |           1 |  1 | Boy        | George    | george@gmail.com |
|  3 | 2014-12-12 | 800.67 |           2 |  1 | Boy        | George    | george@gmail.com |
|  4 | 2015-01-03 |  12.50 |           2 |  1 | Boy        | George    | george@gmail.com |
|  5 | 1999-04-11 | 450.25 |           5 |  1 | Boy        | George    | george@gmail.com |
|  1 | 2016-02-10 |  99.99 |           1 |  2 | George     | Michael   | gm@gmail.com     |
|  2 | 2017-11-11 |  35.50 |           1 |  2 | George     | Michael   | gm@gmail.com     |
|  3 | 2014-12-12 | 800.67 |           2 |  2 | George     | Michael   | gm@gmail.com     |
|  4 | 2015-01-03 |  12.50 |           2 |  2 | George     | Michael   | gm@gmail.com     |
|  5 | 1999-04-11 | 450.25 |           5 |  2 | George     | Michael   | gm@gmail.com     |
|  1 | 2016-02-10 |  99.99 |           1 |  3 | David      | Bowie     | david@gmail.com  |
|  2 | 2017-11-11 |  35.50 |           1 |  3 | David      | Bowie     | david@gmail.com  |
|  3 | 2014-12-12 | 800.67 |           2 |  3 | David      | Bowie     | david@gmail.com  |
|  4 | 2015-01-03 |  12.50 |           2 |  3 | David      | Bowie     | david@gmail.com  |
|  5 | 1999-04-11 | 450.25 |           5 |  3 | David      | Bowie     | david@gmail.com  |
|  1 | 2016-02-10 |  99.99 |           1 |  4 | Blue       | Steele    | blue@gmail.com   |
|  2 | 2017-11-11 |  35.50 |           1 |  4 | Blue       | Steele    | blue@gmail.com   |
|  3 | 2014-12-12 | 800.67 |           2 |  4 | Blue       | Steele    | blue@gmail.com   |
|  4 | 2015-01-03 |  12.50 |           2 |  4 | Blue       | Steele    | blue@gmail.com   |
|  5 | 1999-04-11 | 450.25 |           5 |  4 | Blue       | Steele    | blue@gmail.com   |
|  1 | 2016-02-10 |  99.99 |           1 |  5 | Bette      | Davis     | bette@aol.com    |
|  2 | 2017-11-11 |  35.50 |           1 |  5 | Bette      | Davis     | bette@aol.com    |
|  3 | 2014-12-12 | 800.67 |           2 |  5 | Bette      | Davis     | bette@aol.com    |
|  4 | 2015-01-03 |  12.50 |           2 |  5 | Bette      | Davis     | bette@aol.com    |
|  5 | 1999-04-11 | 450.25 |           5 |  5 | Bette      | Davis     | bette@aol.com    |
+----+------------+--------+-------------+----+------------+-----------+------------------+


-- IMPLICIT INNER JOIN
mysql> SELECT * FROM customers, orders 
    -> WHERE customers.id = orders.customer_id;
+----+------------+-----------+------------------+----+------------+--------+-------------+
| id | first_name | last_name | email            | id | order_date | amount | customer_id |
+----+------------+-----------+------------------+----+------------+--------+-------------+
|  1 | Boy        | George    | george@gmail.com |  1 | 2016-02-10 |  99.99 |           1 |
|  1 | Boy        | George    | george@gmail.com |  2 | 2017-11-11 |  35.50 |           1 |
|  2 | George     | Michael   | gm@gmail.com     |  3 | 2014-12-12 | 800.67 |           2 |
|  2 | George     | Michael   | gm@gmail.com     |  4 | 2015-01-03 |  12.50 |           2 |
|  5 | Bette      | Davis     | bette@aol.com    |  5 | 1999-04-11 | 450.25 |           5 |
+----+------------+-----------+------------------+----+------------+--------+-------------+


-- EXPLICIT INNER JOINS

mysql> SELECT * FROM customers JOIN orders ON customers.id=orders.customer_id;
+----+------------+-----------+------------------+----+------------+--------+-------------+
| id | first_name | last_name | email            | id | order_date | amount | customer_id |
+----+------------+-----------+------------------+----+------------+--------+-------------+
|  1 | Boy        | George    | george@gmail.com |  1 | 2016-02-10 |  99.99 |           1 |
|  1 | Boy        | George    | george@gmail.com |  2 | 2017-11-11 |  35.50 |           1 |
|  2 | George     | Michael   | gm@gmail.com     |  3 | 2014-12-12 | 800.67 |           2 |
|  2 | George     | Michael   | gm@gmail.com     |  4 | 2015-01-03 |  12.50 |           2 |
|  5 | Bette      | Davis     | bette@aol.com    |  5 | 1999-04-11 | 450.25 |           5 |
+----+------------+-----------+------------------+----+------------+--------+-------------+
    
mysql> SELECT first_name, last_name, order_date, amount FROM customers JOIN orders ON customers.id = orders.customer_id;
+------------+-----------+------------+--------+
| first_name | last_name | order_date | amount |
+------------+-----------+------------+--------+
| Boy        | George    | 2016-02-10 |  99.99 |
| Boy        | George    | 2017-11-11 |  35.50 |
| George     | Michael   | 2014-12-12 | 800.67 |
| George     | Michael   | 2015-01-03 |  12.50 |
| Bette      | Davis     | 1999-04-11 | 450.25 |
+------------+-----------+------------+--------+

    
SELECT *
FROM orders
JOIN customers
    ON customers.id = orders.customer_id;
-- ARBITRARY JOIN - meaningless, but still possible 

SELECT * FROM customers
JOIN orders ON customers.id = orders.id;




-- Getting Fancier (Inner Joins Still)

SELECT first_name, last_name, order_date, amount FROM customers JOIN orders ON customers.id = orders.customer_id ORDER BY order_date;
SELECT first_name, last_name, SUM(amount) AS total_spent FROM customers JOIN orders ON customers.id = orders.customer_id
GROUP BY orders.customer_id ORDER BY total_spent DESC;




-- LEFT JOINS
мы получаем все с левой таблицы  customers
mysql> SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.customer_id; 
+----+------------+-----------+------------------+------+------------+--------+-------------+
| id | first_name | last_name | email            | id   | order_date | amount | customer_id |
+----+------------+-----------+------------------+------+------------+--------+-------------+
|  1 | Boy        | George    | george@gmail.com |    1 | 2016-02-10 |  99.99 |           1 |
|  1 | Boy        | George    | george@gmail.com |    2 | 2017-11-11 |  35.50 |           1 |
|  2 | George     | Michael   | gm@gmail.com     |    3 | 2014-12-12 | 800.67 |           2 |
|  2 | George     | Michael   | gm@gmail.com     |    4 | 2015-01-03 |  12.50 |           2 |
|  3 | David      | Bowie     | david@gmail.com  | NULL | NULL       |   NULL |        NULL |
|  4 | Blue       | Steele    | blue@gmail.com   | NULL | NULL       |   NULL |        NULL |
|  5 | Bette      | Davis     | bette@aol.com    |    5 | 1999-04-11 | 450.25 |           5 |
+----+------------+-----------+------------------+------+------------+--------+-------------+


mysql> SELECT first_name, last_name, IFNULL(SUM(amount), 0) AS total_spentFROM customersLEFT JOIN orders ON customers.id = orders.customer_id
    -> GROUP BY customers.id;
+------------+-----------+-------------+
| first_name | last_name | total_spent |
+------------+-----------+-------------+
| Boy        | George    |      135.49 |
| George     | Michael   |      813.17 |
| David      | Bowie     |        0.00 |
| Blue       | Steele    |        0.00 |
| Bette      | Davis     |      450.25 |
+------------+-----------+-------------+


-- RIGHT JOINS
SELECT * FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id;

mysql> SELECT * FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id ORDER BY first_name;
+------+------------+-----------+------------------+----+------------+--------+-------------+
| id   | first_name | last_name | email            | id | order_date | amount | customer_id |
+------+------------+-----------+------------------+----+------------+--------+-------------+
| NULL | NULL       | NULL      | NULL             |  6 | 2017-11-05 |  23.45 |          45 |
| NULL | NULL       | NULL      | NULL             |  7 | 2019-12-13 | 777.77 |         109 |
|    5 | Bette      | Davis     | bette@aol.com    |  5 | 1999-04-11 | 450.25 |           5 |
|    1 | Boy        | George    | george@gmail.com |  1 | 2016-02-10 |  99.99 |           1 |
|    1 | Boy        | George    | george@gmail.com |  2 | 2017-11-11 |  35.50 |           1 |
|    2 | George     | Michael   | gm@gmail.com     |  3 | 2014-12-12 | 800.67 |           2 |
|    2 | George     | Michael   | gm@gmail.com     |  4 | 2015-01-03 |  12.50 |           2 |
+------+------------+-----------+------------------+----+------------+--------+-------------+

```


### -- DELETE CASCADE
```console

CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) 
        REFERENCES customers(id)
        ON DELETE CASCADE
);

mysql> SELECT * FROM customers JOIN orders ON customers.id = orders.customer_id;
+----+------------+-----------+------------------+----+------------+--------+-------------+
| id | first_name | last_name | email            | id | order_date | amount | customer_id |
+----+------------+-----------+------------------+----+------------+--------+-------------+
|  1 | Boy        | George    | george@gmail.com |  1 | 2016-02-10 |  99.99 |           1 |
|  1 | Boy        | George    | george@gmail.com |  2 | 2017-11-11 |  35.50 |           1 |
|  2 | George     | Michael   | gm@gmail.com     |  3 | 2014-12-12 | 800.67 |           2 |
|  2 | George     | Michael   | gm@gmail.com     |  4 | 2015-01-03 |  12.50 |           2 |
|  5 | Bette      | Davis     | bette@aol.com    |  5 | 1999-04-11 | 450.25 |           5 |
+----+------------+-----------+------------------+----+------------+--------+-------------+
5 rows in set (0,00 sec)

mysql> SELECT * FROM customers;
+----+------------+-----------+------------------+
| id | first_name | last_name | email            |
+----+------------+-----------+------------------+
|  1 | Boy        | George    | george@gmail.com |
|  2 | George     | Michael   | gm@gmail.com     |
|  3 | David      | Bowie     | david@gmail.com  |
|  4 | Blue       | Steele    | blue@gmail.com   |
|  5 | Bette      | Davis     | bette@aol.com    |
+----+------------+-----------+------------------+
5 rows in set (0,00 sec)

mysql> SELECT * FROM orders;
+----+------------+--------+-------------+
| id | order_date | amount | customer_id |
+----+------------+--------+-------------+
|  1 | 2016-02-10 |  99.99 |           1 |
|  2 | 2017-11-11 |  35.50 |           1 |
|  3 | 2014-12-12 | 800.67 |           2 |
|  4 | 2015-01-03 |  12.50 |           2 |
|  5 | 1999-04-11 | 450.25 |           5 |
+----+------------+--------+-------------+
5 rows in set (0,00 sec)

mysql> delete from customers WHERE email='george@gmail.com';
Query OK, 1 row affected (0,00 sec)

mysql> SELECT * FROM orders;
+----+------------+--------+-------------+
| id | order_date | amount | customer_id |
+----+------------+--------+-------------+
|  3 | 2014-12-12 | 800.67 |           2 |
|  4 | 2015-01-03 |  12.50 |           2 |
|  5 | 1999-04-11 | 450.25 |           5 |
+----+------------+--------+-------------+
```

### excercise
```console

mysql> CREATE TABLE students(id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100));
Query OK, 0 rows affected (0,01 sec)

mysql> CREATE TABLE papers(
    -> title VARCHAR(100),
    -> grade INT,
    -> student_id INT,
    -> FOREIGN KEY (student_id) REFERENCES students(id));
Query OK, 0 rows affected (0,01 sec)

mysql> INSERT INTO students (first_name) VALUES 
    -> ('Caleb'), 
    -> ('Samantha'), 
    -> ('Raj'), 
    -> ('Carlos'), 
    -> ('Lisa');
Query OK, 5 rows affected (0,00 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> 
mysql> INSERT INTO papers (student_id, title, grade ) VALUES
    -> (1, 'My First Book Report', 60),
    -> (1, 'My Second Book Report', 75),
    -> (2, 'Russian Lit Through The Ages', 94),
    -> (2, 'De Montaigne and The Art of The Essay', 98),
    -> (4, 'Borges and Magical Realism', 89);
Query OK, 5 rows affected (0,00 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> SELECT * from students;
+----+------------+
| id | first_name |
+----+------------+
|  1 | Caleb      |
|  2 | Samantha   |
|  3 | Raj        |
|  4 | Carlos     |
|  5 | Lisa       |
+----+------------+
5 rows in set (0,00 sec)

mysql> SELECT * from papers;
+---------------------------------------+-------+------------+
| title                                 | grade | student_id |
+---------------------------------------+-------+------------+
| My First Book Report                  |    60 |          1 |
| My Second Book Report                 |    75 |          1 |
| Russian Lit Through The Ages          |    94 |          2 |
| De Montaigne and The Art of The Essay |    98 |          2 |
| Borges and Magical Realism            |    89 |          4 |
+---------------------------------------+-------+------------+

mysql> SELECT * FROM students JOIN papers ON students.id = papers.student_id ORDER BY grade DESC;
+----+------------+---------------------------------------+-------+------------+
| id | first_name | title                                 | grade | student_id |
+----+------------+---------------------------------------+-------+------------+
|  2 | Samantha   | De Montaigne and The Art of The Essay |    98 |          2 |
|  2 | Samantha   | Russian Lit Through The Ages          |    94 |          2 |
|  4 | Carlos     | Borges and Magical Realism            |    89 |          4 |
|  1 | Caleb      | My Second Book Report                 |    75 |          1 |
|  1 | Caleb      | My First Book Report                  |    60 |          1 |
+----+------------+---------------------------------------+-------+------------+


mysql> SELECT first_name, title, grade FROM students LEFT JOIN papers ON students.id = papers.student_id ORDER BY grade DESC;
+------------+---------------------------------------+-------+
| first_name | title                                 | grade |
+------------+---------------------------------------+-------+
| Samantha   | De Montaigne and The Art of The Essay |    98 |
| Samantha   | Russian Lit Through The Ages          |    94 |
| Carlos     | Borges and Magical Realism            |    89 |
| Caleb      | My Second Book Report                 |    75 |
| Caleb      | My First Book Report                  |    60 |
| Raj        | NULL                                  |  NULL |
| Lisa       | NULL                                  |  NULL |
+------------+---------------------------------------+-------+


mysql> SELECT first_name, IFNULL(title, 'MISSING'), IFNULL(grade, 0) FROM students LEFT JOIN papers ON students.id = papers.student_id ORDER BY id;
+------------+---------------------------------------+------------------+
| first_name | IFNULL(title, 'MISSING')              | IFNULL(grade, 0) |
+------------+---------------------------------------+------------------+
| Caleb      | My First Book Report                  |               60 |
| Caleb      | My Second Book Report                 |               75 |
| Samantha   | Russian Lit Through The Ages          |               94 |
| Samantha   | De Montaigne and The Art of The Essay |               98 |
| Raj        | MISSING                               |                0 |
| Carlos     | Borges and Magical Realism            |               89 |
| Lisa       | MISSING                               |                0 |
+------------+---------------------------------------+------------------+


mysql> SELECT first_name, AVG(IFNULL(grade, 0)) AS average FROM students LEFT JOIN papers ON students.id = papers.student_id GROUP BY first_name ORDER BY average;
+------------+---------+
| first_name | average |
+------------+---------+
| Raj        |  0.0000 |
| Lisa       |  0.0000 |
| Caleb      | 67.5000 |
| Carlos     | 89.0000 |
| Samantha   | 96.0000 |
+------------+---------+

mysql> SELECT first_name, 
    ->        Ifnull(Avg(grade), 0) AS average, 
    ->        CASE 
    ->          WHEN Avg(grade) IS NULL THEN 'FAILING' 
    ->          WHEN Avg(grade) >= 75 THEN 'PASSING' 
    ->          ELSE 'FAILING' 
    ->        end                   AS passing_status 
    -> FROM   students 
    ->        LEFT JOIN papers 
    ->               ON students.id = papers.student_id 
    -> GROUP  BY students.id 
    -> ORDER  BY average DESC;
+------------+---------+----------------+
| first_name | average | passing_status |
+------------+---------+----------------+
| Samantha   | 96.0000 | PASSING        |
| Carlos     | 89.0000 | PASSING        |
| Caleb      | 67.5000 | FAILING        |
| Raj        |  0.0000 | FAILING        |
| Lisa       |  0.0000 | FAILING        |
+------------+---------+----------------+


```


### MAYN to many
<!-- //много слассов имеет много студентов -->
<!-- // мнного книг имеет много авторов -->
<!-- Books       <-> Authors
Blog Post <-> Tags
Students  <-> Classes -->

```console
mysql> CREATE TABLE reviewers(id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100));

mysql> desc reviewers;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| first_name | varchar(100) | YES  |     | NULL    |                |
| last_name  | varchar(100) | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+

mysql> CREATE TABLE series(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100), released_year YEAR(4), genre VARCHAR(100));
mysql> desc series;
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| id            | int(11)      | NO   | PRI | NULL    | auto_increment |
| title         | varchar(100) | YES  |     | NULL    |                |
| released_year | year(4)      | YES  |     | NULL    |                |
| genre         | varchar(100) | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+

mysql> CREATE TABLE reviews (
    -> id INT AUTO_INCREMENT PRIMARY KEY,
    -> rating DECIMAL(2,1),
    -> series_id INT,
    -> reviewer_id INT,
    -> FOREIGN KEY(series_id) REFERENCES series(id),
    -> FOREIGN KEY(reviewer_id) REFERENCES reviewers(id));

mysql> desc reviews;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int(11)      | NO   | PRI | NULL    | auto_increment |
| rating      | decimal(2,1) | YES  |     | NULL    |                |
| series_id   | int(11)      | YES  | MUL | NULL    |                |
| reviewer_id | int(11)      | YES  | MUL | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+


mysql> select * from series;
+----+-----------------------+---------------+-----------+
| id | title                 | released_year | genre     |
+----+-----------------------+---------------+-----------+
|  1 | Archer                |          2009 | Animation |
|  2 | Arrested Development  |          2003 | Comedy    |
|  3 | Bob's Burgers         |          2011 | Animation |
|  4 | Bojack Horseman       |          2014 | Animation |
|  5 | Breaking Bad          |          2008 | Drama     |
|  6 | Curb Your Enthusiasm  |          2000 | Comedy    |
|  7 | Fargo                 |          2014 | Drama     |
|  8 | Freaks and Geeks      |          1999 | Comedy    |
|  9 | General Hospital      |          1963 | Drama     |
| 10 | Halt and Catch Fire   |          2014 | Drama     |
| 11 | Malcolm In The Middle |          2000 | Comedy    |
| 12 | Pushing Daisies       |          2007 | Comedy    |
| 13 | Seinfeld              |          1989 | Comedy    |
| 14 | Stranger Things       |          2016 | Drama     |
+----+-----------------------+---------------+-----------+
14 rows in set (0,00 sec)

mysql> select * from reviewers;
+----+------------+-----------+
| id | first_name | last_name |
+----+------------+-----------+
|  1 | Thomas     | Stoneman  |
|  2 | Wyatt      | Skaggs    |
|  3 | Kimbra     | Masters   |
|  4 | Domingo    | Cortes    |
|  5 | Colt       | Steele    |
|  6 | Pinkie     | Petit     |
|  7 | Marlon     | Crafford  |
+----+------------+-----------+
7 rows in set (0,00 sec)

```

### -- Chalange 1
```console

mysql> select * from reviews;
+----+--------+-----------+-------------+
| id | rating | series_id | reviewer_id |
+----+--------+-----------+-------------+
|  1 |    8.0 |         1 |           1 |
|  2 |    7.5 |         1 |           2 |
|  3 |    8.5 |         1 |           3 |
|  4 |    7.7 |         1 |           4 |
|  5 |    8.9 |         1 |           5 |
|  6 |    8.1 |         2 |           1 |
|  7 |    6.0 |         2 |           4 |
|  8 |    8.0 |         2 |           3 |
|  9 |    8.4 |         2 |           6 |
| 10 |    9.9 |         2 |           5 |
| 11 |    7.0 |         3 |           1 |
| 12 |    7.5 |         3 |           6 |
| 13 |    8.0 |         3 |           4 |
| 14 |    7.1 |         3 |           3 |
| 15 |    8.0 |         3 |           5 |
| 16 |    7.5 |         4 |           1 |
| 17 |    7.8 |         4 |           3 |
| 18 |    8.3 |         4 |           4 |
| 19 |    7.6 |         4 |           2 |
| 20 |    8.5 |         4 |           5 |
| 21 |    9.5 |         5 |           1 |
| 22 |    9.0 |         5 |           3 |
| 23 |    9.1 |         5 |           4 |
| 24 |    9.3 |         5 |           2 |
| 25 |    9.9 |         5 |           5 |
| 26 |    6.5 |         6 |           2 |
| 27 |    7.8 |         6 |           3 |
| 28 |    8.8 |         6 |           4 |
| 29 |    8.4 |         6 |           2 |
| 30 |    9.1 |         6 |           5 |
| 31 |    9.1 |         7 |           2 |
| 32 |    9.7 |         7 |           5 |
| 33 |    8.5 |         8 |           4 |
| 34 |    7.8 |         8 |           2 |
| 35 |    8.8 |         8 |           6 |
| 36 |    9.3 |         8 |           5 |
| 37 |    5.5 |         9 |           2 |
| 38 |    6.8 |         9 |           3 |
| 39 |    5.8 |         9 |           4 |
| 40 |    4.3 |         9 |           6 |
| 41 |    4.5 |         9 |           5 |
| 42 |    9.9 |        10 |           5 |
| 43 |    8.0 |        13 |           3 |
| 44 |    7.2 |        13 |           4 |
| 45 |    8.5 |        14 |           2 |
| 46 |    8.9 |        14 |           3 |
| 47 |    8.9 |        14 |           4 |
+----+--------+-----------+-------------+
```

### -- Chalange 2
```console

mysql> SELECT title, AVG(rating) AS avg_rating FROM series JOIN reviews ON series.id = reviews.series_id GROUP BY series_id ORDER BY avg_rating;
+----------------------+------------+
| title                | avg_rating |
+----------------------+------------+
| General Hospital     |    5.38000 |
| Bob's Burgers        |    7.52000 |
| Seinfeld             |    7.60000 |
| Bojack Horseman      |    7.94000 |
| Arrested Development |    8.08000 |
| Archer               |    8.12000 |
| Curb Your Enthusiasm |    8.12000 |
| Freaks and Geeks     |    8.60000 |
| Stranger Things      |    8.76667 |
| Breaking Bad         |    9.36000 |
| Fargo                |    9.40000 |
| Halt and Catch Fire  |    9.90000 |
+----------------------+------------+
```
### -- Chalange 3
```console
mysql> SELECT first_name, last_name, rating FROM reviewers JOIN reviews ON reviewers.id = reviews.reviewer_id;
+------------+-----------+--------+
| first_name | last_name | rating |
+------------+-----------+--------+
| Thomas     | Stoneman  |    8.0 |
| Thomas     | Stoneman  |    8.1 |
| Thomas     | Stoneman  |    7.0 |
| Thomas     | Stoneman  |    7.5 |
| Thomas     | Stoneman  |    9.5 |
| Wyatt      | Skaggs    |    7.5 |
| Wyatt      | Skaggs    |    7.6 |
| Wyatt      | Skaggs    |    9.3 |
| Wyatt      | Skaggs    |    6.5 |
| Wyatt      | Skaggs    |    8.4 |
| Wyatt      | Skaggs    |    9.1 |
| Wyatt      | Skaggs    |    7.8 |
| Wyatt      | Skaggs    |    5.5 |
| Wyatt      | Skaggs    |    8.5 |
| Kimbra     | Masters   |    8.5 |
| Kimbra     | Masters   |    8.0 |
| Kimbra     | Masters   |    7.1 |
| Kimbra     | Masters   |    7.8 |
| Kimbra     | Masters   |    9.0 |
| Kimbra     | Masters   |    7.8 |
| Kimbra     | Masters   |    6.8 |
| Kimbra     | Masters   |    8.0 |
| Kimbra     | Masters   |    8.9 |
| Domingo    | Cortes    |    7.7 |
| Domingo    | Cortes    |    6.0 |
| Domingo    | Cortes    |    8.0 |
| Domingo    | Cortes    |    8.3 |
| Domingo    | Cortes    |    9.1 |
| Domingo    | Cortes    |    8.8 |
| Domingo    | Cortes    |    8.5 |
| Domingo    | Cortes    |    5.8 |
| Domingo    | Cortes    |    7.2 |
| Domingo    | Cortes    |    8.9 |
| Colt       | Steele    |    8.9 |
| Colt       | Steele    |    9.9 |
| Colt       | Steele    |    8.0 |
| Colt       | Steele    |    8.5 |
| Colt       | Steele    |    9.9 |
| Colt       | Steele    |    9.1 |
| Colt       | Steele    |    9.7 |
| Colt       | Steele    |    9.3 |
| Colt       | Steele    |    4.5 |
| Colt       | Steele    |    9.9 |
| Pinkie     | Petit     |    8.4 |
| Pinkie     | Petit     |    7.5 |
| Pinkie     | Petit     |    8.8 |
| Pinkie     | Petit     |    4.3 |
+------------+-----------+--------+
```

### -- Chalange 4
```console


mysql> SELECT * FROM series LEFT JOIN reviews ON series.id = reviews.series_id;
+----+-----------------------+---------------+-----------+------+--------+-----------+-------------+
| id | title                 | released_year | genre     | id   | rating | series_id | reviewer_id |
+----+-----------------------+---------------+-----------+------+--------+-----------+-------------+
|  1 | Archer                |          2009 | Animation |    1 |    8.0 |         1 |           1 |
|  1 | Archer                |          2009 | Animation |    2 |    7.5 |         1 |           2 |
|  1 | Archer                |          2009 | Animation |    3 |    8.5 |         1 |           3 |
|  1 | Archer                |          2009 | Animation |    4 |    7.7 |         1 |           4 |
|  1 | Archer                |          2009 | Animation |    5 |    8.9 |         1 |           5 |
|  2 | Arrested Development  |          2003 | Comedy    |    6 |    8.1 |         2 |           1 |
|  2 | Arrested Development  |          2003 | Comedy    |    7 |    6.0 |         2 |           4 |
|  2 | Arrested Development  |          2003 | Comedy    |    8 |    8.0 |         2 |           3 |
|  2 | Arrested Development  |          2003 | Comedy    |    9 |    8.4 |         2 |           6 |
|  2 | Arrested Development  |          2003 | Comedy    |   10 |    9.9 |         2 |           5 |
|  3 | Bob's Burgers         |          2011 | Animation |   11 |    7.0 |         3 |           1 |
|  3 | Bob's Burgers         |          2011 | Animation |   12 |    7.5 |         3 |           6 |
|  3 | Bob's Burgers         |          2011 | Animation |   13 |    8.0 |         3 |           4 |
|  3 | Bob's Burgers         |          2011 | Animation |   14 |    7.1 |         3 |           3 |
|  3 | Bob's Burgers         |          2011 | Animation |   15 |    8.0 |         3 |           5 |
|  4 | Bojack Horseman       |          2014 | Animation |   16 |    7.5 |         4 |           1 |
|  4 | Bojack Horseman       |          2014 | Animation |   17 |    7.8 |         4 |           3 |
|  4 | Bojack Horseman       |          2014 | Animation |   18 |    8.3 |         4 |           4 |
|  4 | Bojack Horseman       |          2014 | Animation |   19 |    7.6 |         4 |           2 |
|  4 | Bojack Horseman       |          2014 | Animation |   20 |    8.5 |         4 |           5 |
|  5 | Breaking Bad          |          2008 | Drama     |   21 |    9.5 |         5 |           1 |
|  5 | Breaking Bad          |          2008 | Drama     |   22 |    9.0 |         5 |           3 |
|  5 | Breaking Bad          |          2008 | Drama     |   23 |    9.1 |         5 |           4 |
|  5 | Breaking Bad          |          2008 | Drama     |   24 |    9.3 |         5 |           2 |
|  5 | Breaking Bad          |          2008 | Drama     |   25 |    9.9 |         5 |           5 |
|  6 | Curb Your Enthusiasm  |          2000 | Comedy    |   26 |    6.5 |         6 |           2 |
|  6 | Curb Your Enthusiasm  |          2000 | Comedy    |   27 |    7.8 |         6 |           3 |
|  6 | Curb Your Enthusiasm  |          2000 | Comedy    |   28 |    8.8 |         6 |           4 |
|  6 | Curb Your Enthusiasm  |          2000 | Comedy    |   29 |    8.4 |         6 |           2 |
|  6 | Curb Your Enthusiasm  |          2000 | Comedy    |   30 |    9.1 |         6 |           5 |
|  7 | Fargo                 |          2014 | Drama     |   31 |    9.1 |         7 |           2 |
|  7 | Fargo                 |          2014 | Drama     |   32 |    9.7 |         7 |           5 |
|  8 | Freaks and Geeks      |          1999 | Comedy    |   33 |    8.5 |         8 |           4 |
|  8 | Freaks and Geeks      |          1999 | Comedy    |   34 |    7.8 |         8 |           2 |
|  8 | Freaks and Geeks      |          1999 | Comedy    |   35 |    8.8 |         8 |           6 |
|  8 | Freaks and Geeks      |          1999 | Comedy    |   36 |    9.3 |         8 |           5 |
|  9 | General Hospital      |          1963 | Drama     |   37 |    5.5 |         9 |           2 |
|  9 | General Hospital      |          1963 | Drama     |   38 |    6.8 |         9 |           3 |
|  9 | General Hospital      |          1963 | Drama     |   39 |    5.8 |         9 |           4 |
|  9 | General Hospital      |          1963 | Drama     |   40 |    4.3 |         9 |           6 |
|  9 | General Hospital      |          1963 | Drama     |   41 |    4.5 |         9 |           5 |
| 10 | Halt and Catch Fire   |          2014 | Drama     |   42 |    9.9 |        10 |           5 |
| 11 | Malcolm In The Middle |          2000 | Comedy    | NULL |   NULL |      NULL |        NULL |
| 12 | Pushing Daisies       |          2007 | Comedy    | NULL |   NULL |      NULL |        NULL |
| 13 | Seinfeld              |          1989 | Comedy    |   43 |    8.0 |        13 |           3 |
| 13 | Seinfeld              |          1989 | Comedy    |   44 |    7.2 |        13 |           4 |
| 14 | Stranger Things       |          2016 | Drama     |   45 |    8.5 |        14 |           2 |
| 14 | Stranger Things       |          2016 | Drama     |   46 |    8.9 |        14 |           3 |
| 14 | Stranger Things       |          2016 | Drama     |   47 |    8.9 |        14 |           4 |
+----+-----------------------+---------------+-----------+------+--------+-----------+-------------+
49 rows in set (0,00 sec)
mysql> SELECT title AS unreviewed_series FROM series LEFT JOIN reviews ON series.id = reviews.series_id WHERE rating IS NULL;
+-----------------------+
| unreviewed_series     |
+-----------------------+
| Malcolm In The Middle |
| Pushing Daisies       |
+-----------------------+
```
```console

```
### -- Chalange 5
```console
mysql> mysql> SELECT genre, Round(Avg(rating), 2) AS avg_rating FROM series JOIN reviews ON series.id = reviews.series_id GROUP BY genre;
+-----------+------------+
| genre     | avg_rating |
+-----------+------------+
| Animation |       7.86 |
| Comedy    |       8.16 |
| Drama     |       8.04 |
+-----------+------------+
```

### -- Chalange 6
```console
mysql> SELECT first_name, last_name, COUNT(reviewer_id) AS COUNT, MIN(rating) AS MIN, MAX(rating) AS MAX, AVG(RATING) AS AVG, IF(Count(rating) > 0, 'ACTIVE', 'INACTIVE') AS STATUS    FROM reviewers JOIN reviews ON  reviewers.id = reviews.reviewer_id GROUP BY reviewer_id;
+------------+-----------+-------+------+------+---------+--------+
| first_name | last_name | COUNT | MIN  | MAX  | AVG     | STATUS |
+------------+-----------+-------+------+------+---------+--------+
| Thomas     | Stoneman  |     5 |  7.0 |  9.5 | 8.02000 | ACTIVE |
| Wyatt      | Skaggs    |     9 |  5.5 |  9.3 | 7.80000 | ACTIVE |
| Kimbra     | Masters   |     9 |  6.8 |  9.0 | 7.98889 | ACTIVE |
| Domingo    | Cortes    |    10 |  5.8 |  9.1 | 7.83000 | ACTIVE |
| Colt       | Steele    |    10 |  4.5 |  9.9 | 8.77000 | ACTIVE |
| Pinkie     | Petit     |     4 |  4.3 |  8.8 | 7.25000 | ACTIVE |
+------------+-----------+-------+------+------+---------+--------+

<!-- ------- -->

-- CHALLENGE 6 - Reviewer Stats With POWER USERS 

SELECT first_name, 
       last_name, 
       Count(rating)                    AS COUNT, 
       Ifnull(Min(rating), 0)           AS MIN, 
       Ifnull(Max(rating), 0)           AS MAX, 
       Round(Ifnull(Avg(rating), 0), 2) AS AVG, 
       CASE 
         WHEN Count(rating) >= 10 THEN 'POWER USER' 
         WHEN Count(rating) > 0 THEN 'ACTIVE' 
         ELSE 'INACTIVE' 
       end                              AS STATUS 
FROM   reviewers 
       LEFT JOIN reviews 
              ON reviewers.id = reviews.reviewer_id 
GROUP  BY reviewers.id; 
```

### -- Chalange 7
```console
mysql> SELECT  title, rating, CONCAT(first_name,' ', last_name) AS reviewer FROM reviewers
    -> INNER JOIN reviews ON reviewers.id = reviews.reviewer_id
    -> INNER JOIN series ON series.id = reviews.series_id ORDER BY title;
+----------------------+--------+-----------------+
| title                | rating | reviewer        |
+----------------------+--------+-----------------+
| Archer               |    8.0 | Thomas Stoneman |
| Archer               |    8.9 | Colt Steele     |
| Archer               |    7.7 | Domingo Cortes  |
| Archer               |    8.5 | Kimbra Masters  |
| Archer               |    7.5 | Wyatt Skaggs    |
| Arrested Development |    8.4 | Pinkie Petit    |
| Arrested Development |    9.9 | Colt Steele     |
| Arrested Development |    8.1 | Thomas Stoneman |
| Arrested Development |    8.0 | Kimbra Masters  |
| Arrested Development |    6.0 | Domingo Cortes  |
| Bob's Burgers        |    7.5 | Pinkie Petit    |
| Bob's Burgers        |    8.0 | Colt Steele     |
| Bob's Burgers        |    8.0 | Domingo Cortes  |
| Bob's Burgers        |    7.1 | Kimbra Masters  |
| Bob's Burgers        |    7.0 | Thomas Stoneman |
| Bojack Horseman      |    8.3 | Domingo Cortes  |
| Bojack Horseman      |    7.6 | Wyatt Skaggs    |
| Bojack Horseman      |    8.5 | Colt Steele     |
| Bojack Horseman      |    7.5 | Thomas Stoneman |
| Bojack Horseman      |    7.8 | Kimbra Masters  |
| Breaking Bad         |    9.5 | Thomas Stoneman |
| Breaking Bad         |    9.0 | Kimbra Masters  |
| Breaking Bad         |    9.1 | Domingo Cortes  |
| Breaking Bad         |    9.9 | Colt Steele     |
| Breaking Bad         |    9.3 | Wyatt Skaggs    |
| Curb Your Enthusiasm |    7.8 | Kimbra Masters  |
| Curb Your Enthusiasm |    8.8 | Domingo Cortes  |
| Curb Your Enthusiasm |    8.4 | Wyatt Skaggs    |
| Curb Your Enthusiasm |    9.1 | Colt Steele     |
| Curb Your Enthusiasm |    6.5 | Wyatt Skaggs    |
| Fargo                |    9.1 | Wyatt Skaggs    |
| Fargo                |    9.7 | Colt Steele     |
| Freaks and Geeks     |    8.5 | Domingo Cortes  |
| Freaks and Geeks     |    7.8 | Wyatt Skaggs    |
| Freaks and Geeks     |    9.3 | Colt Steele     |
| Freaks and Geeks     |    8.8 | Pinkie Petit    |
| General Hospital     |    6.8 | Kimbra Masters  |
| General Hospital     |    5.8 | Domingo Cortes  |
| General Hospital     |    5.5 | Wyatt Skaggs    |
| General Hospital     |    4.5 | Colt Steele     |
| General Hospital     |    4.3 | Pinkie Petit    |
| Halt and Catch Fire  |    9.9 | Colt Steele     |
| Seinfeld             |    8.0 | Kimbra Masters  |
| Seinfeld             |    7.2 | Domingo Cortes  |
| Stranger Things      |    8.9 | Kimbra Masters  |
| Stranger Things      |    8.5 | Wyatt Skaggs    |
| Stranger Things      |    8.9 | Domingo Cortes  |
+----------------------+--------+-----------------+
```



# INSTARAM CLONE
```console
CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE photos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE comments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(255) NOT NULL,
    photo_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    user_id INTEGER NOT NULL,
    photo_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    PRIMARY KEY(user_id, photo_id)
);

CREATE TABLE follows (
    follower_id INTEGER NOT NULL,
    followee_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(follower_id) REFERENCES users(id),
    FOREIGN KEY(followee_id) REFERENCES users(id),
    PRIMARY KEY(follower_id, followee_id)
);

mysql> select * from follows;
+-------------+-------------+---------------------+
| follower_id | followee_id | created_at          |
+-------------+-------------+---------------------+
|           1 |           2 | 2019-12-16 13:49:23 |
|           1 |           3 | 2019-12-16 13:49:23 |
|           2 |           3 | 2019-12-16 13:49:23 |
|           3 |           1 | 2019-12-16 13:49:23 |
+-------------+-------------+---------------------+


CREATE TABLE tags (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE photo_tags (
    photo_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id),
    PRIMARY KEY(photo_id, tag_id)
);
```


### example
```console
mysql> SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") as earlest_date  FROM users ORDER BY created_at;
+--------------------+
| earlest_date       |
+--------------------+
| December 19th 2018 |
+--------------------+

mysql> select * from users WHERE created_at=(select MIN(created_at) from users);
+------------------------+---------------------+
| email                  | created_at          |
+------------------------+---------------------+
| Christiana13@gmail.com | 2018-12-19 10:35:23 |
+------------------------+---------------------+

SELECT Monthname(created_at) AS month, Count(*) AS count FROM   users GROUP  BY month ORDER  BY count DESC; 
+-----------+-------+
| month     | count |
+-----------+-------+
| October   |    53 |
| December  |    49 |
| November  |    48 |
| March     |    46 |
| August    |    42 |
| April     |    42 |
| May       |    40 |
| September |    39 |
| February  |    38 |
| January   |    38 |
| June      |    37 |
| July      |    33 |
+-----------+-------+


mysql> select Count(*) AS yahoo_users from users WHERE email LIKE '%@yahoo.com';
+-------------+
| yahoo_users |
+-------------+
|         178 |
+-------------+


SELECT CASE 
         WHEN email LIKE '%@gmail.com' THEN 'gmail' 
         WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
         WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
         ELSE 'other' 
       end      AS provider, 
       Count(*) AS total_users 
FROM   users 
GROUP  BY provider 
ORDER  BY total_users DESC; 
+----------+-------------+
| provider | total_users |
+----------+-------------+
| yahoo    |         178 |
| hotmail  |         173 |
| gmail    |         154 |
+----------+-------------+


```
