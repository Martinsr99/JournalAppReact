import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNote: (state, action) => {},
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
