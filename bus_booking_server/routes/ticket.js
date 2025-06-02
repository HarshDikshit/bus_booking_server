import express from "express";
import { bookTicket, getUserTickets } from "../controllers/ticket.js";
import { verifyToken } from "../middlewares/verify.js";

const router = express.Router();

router.post("/book", verifyToken, bookTicket);
router.get("/my-ticket", verifyToken, getUserTickets);

export default router;