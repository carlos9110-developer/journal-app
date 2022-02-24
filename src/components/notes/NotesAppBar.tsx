import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';
import { storeInterface } from '../../interfaces/storeInterface';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const {note}:any = useSelector<storeInterface>( state => state.notes.active );



    const handleSave    =   () => {
        dispatch( startSaveNote( note ) );
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
