import { db } from "../firebase/firebase-config";
import { collection, query, getDocs } from "@firebase/firestore";

export const loadNotes = async (uid) => {

  const notesSanp = await getDocs(
    query(collection(db, `${uid}`, "journal/notes"))
  );
  const notes = [];

  notesSanp.forEach((note) => {
    notes.push({
      id: note.id,
      ...note.data(),
    });
  })
  return notes;
  
};
