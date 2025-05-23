import express from "express";
import { bookTicket, getUserTickets } from "../controllers/ticket.js";
import { verifyToken } from "../middlewares/verify.js";

const router = express.Router();

router.post("/book", bookTicket);
router.get("/my-ticket", getUserTickets);

export default router;