import {
  createContact,
  getContacts,
  getSingleContact,
  updateContact,
  deleteContact,
  getContactsByPriority
} from "../controllers/contact.controller.js";
import express from "express";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.get("/:id", getSingleContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);
router.get("/priority/:priority", getContactsByPriority);

export default router;