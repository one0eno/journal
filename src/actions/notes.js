import { db } from "../firebase/firebase-config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const uid = state.auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await addDoc(
      collection(db, `${uid}`, "journal/notes"),
      newNote
    );

    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id,newNote));
   

  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = ( id, note) => ({
  type:types.notesAddNew,
  payload:{id , ...note}
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

//carga notas en el store de redux
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

//Modificar nota
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const state = getState();
    const uid = state.auth.uid;

    if (!note.url) {
      delete note.url;
    }
    const noteToFirestore = { ...note };

   
    
    try {
      await updateDoc(
        doc(db, `${uid}/journal/notes/`, note.id),
        { ...note }
      );

      
      dispatch(refreshNote(note.id, note));
      Swal.fire("Saved", note.title, "succes");
    } catch (error) {
      Swal.fire("Error", "Se ha producido un error", "error");
      console.log(error);
    }
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Uploading...",
      text: "Por favor espere...",
      allowOutsideClick: false,
      onbeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    dispatch(startSaveNote(activeNote));

    Swal.close();
  };
};

export const startDeleting = () => {
  return async (dispatch, getState) => {

    const state = getState();
    const { active: activeNote } = getState().notes;
    const uid = state.auth.uid;

    try {
      await deleteDoc(
        doc(db, `${uid}/journal/notes/`, activeNote.id)
      );
      Swal.fire("Eliminar", "Nota eliminada", "succes");
      dispatch(deleteNote(activeNote.id));
    } catch (error) {
      console.log(error);
    }

    //dispatch(startSaveNote(activeNote))

    Swal.close();
  };
};

export const deleteNote = (id) => {
  return {
    type: types.notesDelete,
    payload: id,
  };
};

export const logOutCleaning = () => ({
  type: types.notesLogoutCleaning,
});
