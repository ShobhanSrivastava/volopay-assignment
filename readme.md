- Installation
    - Use the following commands in the terminal to start the server
    ```
    git clone git@github.com:ShobhanSrivastava/volopay-assignment.git
    cd volopay-assignment
    ```
    - Create .env file from .env.example
    ```
    npm install
    ```

- DB USED: SQLITE3

- Create new file called mydb.db in the root folder
- Open terminal in the root folder
- Use commands 
```
sqlite3

.open mydb.db

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