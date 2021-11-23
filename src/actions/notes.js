import { db } from "../firebase/firebase-config";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "@firebase/firestore";
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
    //const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
    console.log(doc);
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

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
        doc(db, "fsCPaza99EQw42XduqltmCT2nt33/journal/notes/", note.id),
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

    dispatch(startSaveNote(activeNote))

    Swal.close();

  };
};

export const startDeleting = () => {
  return async (dispatch, getState) => {

    const { active: activeNote } = getState().notes;

    try{

      await deleteDoc(doc(db, "fsCPaza99EQw42XduqltmCT2nt33/journal/notes/", activeNote.id));
      Swal.fire("Eliminar", "Nota eliminada", "succes");
      dispatch(deleteNote(activeNote.id))
    }catch(error){
      console.log(error);
    }
    

    //dispatch(startSaveNote(activeNote))

    Swal.close();

  };
};

export const deleteNote =(id) => {

   return {
     type: types.notesDelete,
     payload:id
   }
}