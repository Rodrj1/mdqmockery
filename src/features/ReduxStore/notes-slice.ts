import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../types";

interface noteProps {
  note: Note;
}

interface notesState {
  notes: noteProps["note"][];
}

const initialState: notesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addToNotes(state, action: PayloadAction<noteProps["note"]>) {
      state.notes.push(action.payload);
    },
    removeFromNotes(state, action: PayloadAction<string>) {
      const findNote = state.notes.find((note) => note.id === action.payload);
      if (findNote) {
        state.notes.splice(state.notes.indexOf(findNote), 1);
      }
    },
    editNote(state, action: PayloadAction<noteProps["note"]>) {
      const findNote = state.notes.find(
        (note) => note.id === action.payload.id
      );
      if (findNote) {
        state.notes.splice(state.notes.indexOf(findNote), 1);
        state.notes.push(action.payload);
      }
    },
  },
});

export const { addToNotes, removeFromNotes, editNote } = notesSlice.actions;
export default notesSlice.reducer;
