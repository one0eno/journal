import JournalEntries from "./JournalEntries";

import { useDispatch , useSelector} from "react-redux";
import { startLogOut } from "../../actions/auth";
import { types } from "../../types/types";
import { startNewNote } from "../../actions/notes";

export default function Sidebar() {

    const { name } = useSelector(state => state.auth);
    

    const dispatch  = useDispatch();
    const handleLogout = () => {
        dispatch(startLogOut())
    }
    const handleAddNew = () => {
        dispatch(startNewNote())
    }
    return(
     
            <aside className="journal__sidebar">
                <div className="journal__sidebar-navbar">
                    <h3 className="mt-5">
                        <i className="fas fa-moon" />
                        <span> {name} </span>
                     </h3>
                     <button className="btn" onClick={handleLogout}>
                         logout
                     </button>
                </div>
                <div className="journal__new-entry" onClick={ handleAddNew }>
                    <i className="far fa-calendar-plus fa-5x" />
                    <p className="mt-5">
                        New Entry
                    </p>
                </div>
                <JournalEntries />
            </aside>
        
    )
}