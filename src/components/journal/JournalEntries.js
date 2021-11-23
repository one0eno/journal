import JournalEntry from "./JournalEntry"
import { useSelector } from "react-redux"

export default function JournalEntries (){

    //const entries = [1,2,3,4,5,6,7,8,9,10]

    const { notes } = useSelector(state => state.notes)

    console.log("notes despues", notes)

    return (
       <div className="journal__entries">
        {
            notes.map(note => ( <JournalEntry key={note.id} {...note} /> ))
        }
       </div>
    )
}