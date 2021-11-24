
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


export default function JournalEntry({id, date, title, body, url}){

    const noteDate = moment(date)
    const dispatch = useDispatch();

   

    const handleEntryClick = () => {
       
        dispatch(activeNote(id,{id, date, title, body, url}));
    }

    return(
        
        <>
            <div className="journal__entry pointer animate__animated animate__bounce__fadeIn animate__backInDown animate__faster" onClick={ handleEntryClick } >
                {

                    url && <div className="journal__entry-picture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage:`url(${url})`
                    }}
                >
                </div>
               
                }
               
                <div className="journal__entry-body" >
                        <p className="journal__entry_title">
                          { title }
                        </p>
                        <p className="journal__entry_content">
                            { body }
                        </p>
                </div>
                <div className="journal__entry-date-box">
                        <span>{noteDate.format('dddd')}</span>
                        <h4>{noteDate.format('Do')}</h4>
                </div>
            </div>
        </>

    )
}