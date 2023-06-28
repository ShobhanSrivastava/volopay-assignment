import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./mydb.db');

function getTotalItems(start_date, end_date, department) {
    const result = db.run(
        `select sum(seats) from sales_data where date between ? and ? and department=?`,
        [start_date, end_date, department]
    )

    return result;
}

function getPercentage(start_date, end_date) {
    const result = db.run(
        `SELECT department, ROUND((COUNT(seats) / SUM(seats)) * 100, 2) AS percentage_sold
        FROM sales_data
        WHERE date BETWEEN ? AND ?
        GROUP BY department;`,
        [start_date, end_date]
    );

    return result;
}

function nthMostTotalItem(item_by, start_date, end_date, n) {
    const result = db.run(
        ``
    )
}

function monthlySales(product, year) {
    
}