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

```console

```

```console

```

```console

```