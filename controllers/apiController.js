import { validDatetime, validDepartment } from "../validators";

const products = ['Apple', 'Outplay', 'Sentry', 'Discord','Teams','Google','Github','Fullstory','Height','Slack','Zapier','Figma','Appolo','Zoho Crm','Circleci','Notion'];

function apiController() {
    return {
        async totalItems(req, res) {
            const { start_date, end_date, department } = req.body;

            // TODO: Validation of the parameters
            if (!validDatetime(start_date) || !validDatetime(end_date) || new Date(end_date) <= new Date(start_date)) {
                return res.json({
                    'error': 'Invalid start_date or end_date'
                })
            };

            if (!department || !validDepartment(department)) {
                return res.json({
                    'error': 'Not a valid department'
                })
            }

            // TODO: Fetch the totalItems sold between the start_date and the end_date
            

            // TODO: Return the totalItems
        },

        async nthMostTotalItem(req, res) {
            const { item_by, start_date, end_date, n } = req.body;

            // TODO: Validation of paramters
            if (!item_by || !['price', 'quantity'].includes(item_by)) {
                return res.json({
                    'error': 'Invalid item_by value'
                })
            }

            // TODO: Create a function for validation of date time
            if (!validDatetime(start_date) || !validDatetime(end_date) || new Date(end_date) <= new Date(start_date)) {
                return res.json({
                    'error': 'Invalid start_date or end_date'
                })
            };

            if (!n || parseInt(n) <= 0) {
                return res.json({
                    'error': 'Invalid value of n'
                })
            }

            // TODO: Fetch the item nth most sold item by the item_by parameter

            // TODO: Return the item name
        },

        async percentageOfDepartmentWiseSoldItems(req, res) {
            const { start_date, end_date } = req.body;

            // TODO: Validation of paramters 
            if (!validDatetime(start_date) || !validDatetime(end_date) || new Date(end_date) <= new Date(start_date)) {
                return res.json({
                    'error': 'Invalid start_date or end_date'
                })
            };

            // TODO: Fetch a list of items sold department wise along with total items 

            // TODO: Return the list as json
        },

        async monthlySales(req, res) {
            const { product, year } = req.body;

            // TODO: Validation of paramters
            if(!product || !products.includes(product)) {
                return res.json({
                    'error': 'Invalid product value'
                })
            }

            if(!year || parseInt(year) > 2023 || parseInt(year) < 1970) {
                return res.json({
                    'error': 'Invalid year value'
                })
            }

            // TODO: Fetch a list of the amount of products sold in the given year
            

            // TODO: Return the list of products sold in the year, monthwise
        }
    }
}

export default apiController;