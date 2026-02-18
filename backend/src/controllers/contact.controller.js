import { Contact } from "../models/contact.model.js";

// get all contacts
export const getContacts = async (req, res) => {

  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      data: contacts
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// create a new contact
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// update a contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      success: true,
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// delete a contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// get a single contact
export const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// get contacts by priority
export const getContactsByPriority = async (req, res) => {
  try {
    const contacts = await Contact.find({ priority: req.params.priority });
    res.status(200).json({
      success: true,
      data: contacts
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

