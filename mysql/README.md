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

```

```console

```

```console

```

```console

```

```console

```

```console

```