- [x] Route Setup
    - [x] /api Router
        - [x] /total_items
        - [x] /nth_most_total_item
        - [x] /percentage_of_department_wise_sold_items
        - [x] /monthly_sales

- [x] Controllers Setup
    - [x] totalItems
    - [x] nthMostTotalItem
    - [x] percentageOfDepartmentWiseSoldItems
    - [x] monthlySales

- [ ] totalItems Controller
    - [x] Extract start_date, end_date, department from request body
    - [x] Validate the data 
    - [x] Fetch the totalItems sold between the start_date and the end_date for the given department
    - [x] Return the JSON response
