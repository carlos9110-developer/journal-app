import moment from "moment";
import { useDispatch } from "react-redux";
import { notes } from "../../reducers/notesReducer";
import { activeNote } from '../../actions/notes';


export const JournalEntry = ({ id, date, title, body, imageUrl }:any) => {

    const noteDate  =   moment(date);

    const dispatch = useDispatch();

    const handleEntryClick = () => {

        const noteSelected:notes= {
            id:id,
            title:title,
            body:body,
            date: date
        }

        dispatch( activeNote(noteSelected) );
    }



    return (
        <div 
            className="journal__entry pointer"
            onClick={handleEntryClick}
        >
            
            {
                imageUrl &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('DD')}</h4>
            </div>

        </div>
    )
}
