import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen"
import { Sidebar } from "./Sidebar"
import { storeInterface } from '../../interfaces/storeInterface';
import { NothingSelected } from "./NothingSelected";

export const JournalScreen = () => {

    const active = useSelector<storeInterface>( state => state.notes.active );

    return (
        <div className="journal__main-content">
            
            <Sidebar />


            <main>

                {
                    ( active ) 
                        ? <NoteScreen />
                        : <NothingSelected />
                }

            </main>


        </div>
    )
}
