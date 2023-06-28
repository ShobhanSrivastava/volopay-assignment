import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./mydb.db');

// Function to get the total items
function getTotalItems(start_date, end_date, department) {
    return new Promise((resolve, reject) => {
        let total_items;
        db.all(
            `
            SELECT sum(seats) as total_seats
            FROM sales_data 
            WHERE date>=? AND date<=? AND department=?`
            , [start_date, end_date, department]
        , (error, row) => {
            if(error) reject(error);
    
            total_items = row[0].total_seats;
            console.log(total_items);
    
            resolve(total_items);
        });
    })
}

// Function to get the percentage
function getPercentage(start_date, end_date) {
    let totalSeats, percentages;
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT SUM(seats) as totalSeats
            FROM sales_data
            WHERE date>=? AND date<=?
        `, 
        [start_date, end_date],
        (error, row) => {
            if(error) reject(error);

            console.log(row);
            totalSeats = row[0].totalSeats;
        });
    
        db.all(`
            SELECT department, SUM(seats) as seatSum
            FROM sales_data
            WHERE date>=? AND date<=?
            GROUP BY department
        `, 
        [start_date, end_date],
        (error, rows) => {
            if(error) reject(error);

            percentages = rows;
            resolve({ totalSeats, percentages });
        });
    })
}

// Function to get the Nth highest total element
function getNthMostTotalItem(item_by, start_date, end_date, n) {
    return new Promise((resolve, reject) => {
        let item;
        db.all(`
            SELECT software, SUM(${item_by}) as total
            FROM sales_data
            WHERE date>=? AND date<=?
            GROUP BY software
            ORDER BY total desc
            LIMIT ?
        `,
        [start_date, end_date, n],
        (error, rows) => {
            if(error) reject(error);
            console.log(rows);
            item = rows[n-1];
            resolve(item.software);
        }
    )
    })
}

// Function to get the monthly sales
function getMonthlySales(product, year) {
    const start_date = year+'-01-01 00:00:00 +530', end_date=year+'-12-31 23:59:59 +530';

    return new Promise((resolve, reject) => {
        db.all(`
            SELECT date, amount 
            FROM sales_data
            WHERE software=? AND date>=? AND date<=?
        `,
        [product, start_date, end_date],
        (error, rows) => {
            if(error) reject(error);

            const monthlySales = [0,0,0,0,0,0,0,0,0,0,0,0];

            rows.forEach(row => {
                let month = parseInt(row['date'].substring(6, 8));
                monthlySales[month-1] += parseFloat(row['amount'])
            })

            resolve(monthlySales);
        })
    })
}

export { getTotalItems, getPercentage, getNthMostTotalItem, getMonthlySales };