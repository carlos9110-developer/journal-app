import { useDispatch, useSelector } from 'react-redux';
import { storeInterface } from '../../interfaces/storeInterface';
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { useEffect, useRef } from 'react';
import { activeNote } from '../../actions/notes';


export const NoteScreen = () => {

    const dispatch = useDispatch();

    const result:any = useSelector<storeInterface>( state => state.notes.active);

    const [ formValues, handleInputChange, reset ]  = useForm(result.note);

    const activeId = useRef( result.note.id);

    useEffect( () => {
        
        if( result.note.id !== activeId.current  ){
            reset(result.note);
            activeId.current = result.note.id;
        }

    }, [result.note, reset])
    

    
    useEffect( () => {
        
        dispatch( activeNote( {...formValues} ) );

    }, [formValues])
    

    const { body, title} = formValues;





    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

        </div>
    )
}
