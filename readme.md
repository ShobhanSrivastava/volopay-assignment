- DB USED: SQLITE3

- TABLE CREATED USING 
```
CREATE TABLE sales_data(id NUMBER PRIMARY KEY,
date VARCHAR2,
user VARCHAR2,
department VARCHAR2, 
software VARCHAR2,
seats NUMBER,
amount DECIMAL(5,2) 
);
```

- Importing csv to sqlite3
```
.import CSV_PATH sales_data
```