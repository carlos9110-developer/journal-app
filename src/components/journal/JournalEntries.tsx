import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';
import { storeInterface } from '../../interfaces/storeInterface';



export const JournalEntries = () => {

    

     const entries:any = useSelector<storeInterface>( state => state.notes.notes);



    return (
        <div className="journal__entries">
            
            {     
                entries !== undefined &&
                entries.map( (note:any) => (
                    <JournalEntry 
                        key={ note.id } 
                        {...note}
                    />
                ))
            }

        </div>
    )
}
