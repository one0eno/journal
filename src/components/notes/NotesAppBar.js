import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export default function NotesAppBar() {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {

    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    console.log(active);
    document.querySelector("#fileselector").click();
    
  };

  const handleFileChange = (e) => {
     
      const file = e.target.files[0];
      if(file)
         dispatch(startUploading(file))

  };

  return (
    <div className="notes__appbar">
      <span>28 agusto 2200</span>
      <input
        id="fileselector"
        type="file"
        name="fileselector"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={ handlePictureClick }>Picture</button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
