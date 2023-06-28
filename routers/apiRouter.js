import express from "express";
import { apiController } from "../controllers/index.js";

const router = express.Router();

// GET total_items
router.get('/total_items', apiController().totalItems);

// GET nth_most_total_item
router.get('/nth_most_total_item', apiController().nthMostTotalItem);

// GET percentage_of_department_wise_sold_items
router.get('/percentage_of_department_wise_sold_items', apiController().percentageOfDepartmentWiseSoldItems);

// GET monthly_sales
router.get('/monthly_sales', apiController().monthlySales);

export default router;
