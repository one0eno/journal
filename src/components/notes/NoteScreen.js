import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";
import { activeNote, startDeleting } from "../../actions/notes";

export default function NoteScreen() {
    
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const { title, body } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
   
    if(note.id !== activeId.current){
        reset(note)
        activeId.current = note.id;
    }

  }, [note, reset]);

  useEffect(() => {
    
    dispatch(activeNote(formValues.id, {...formValues}));
  },[formValues,dispatch])

  const handleDeleteNote = () => {

    dispatch(startDeleting(note));
  }
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Somo awesom title"
          autoComplete="off"
          className="notes__title-input"
          name="title"
        />
        <textarea
          placeholder="What happend today"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
          name="body"
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img
              src={note.url}
             
              alt="imagen"
              
            />
          </div>
        )}
      </div>
      <button onClick={ handleDeleteNote }>
        Eliminar Nota
      </button>
    </div>
  );
}
