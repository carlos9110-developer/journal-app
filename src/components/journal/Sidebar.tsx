import { useDispatch, useSelector } from "react-redux";
import { JournalEntries } from "./JournalEntries"
import { startLogout } from '../../actions/auth';
import { storeInterface } from "../../interfaces/storeInterface";
import { startNewNote } from "../../actions/notes";
import { useEffect } from "react";

export const Sidebar = () => {


    const dispatch = useDispatch();

    const  nameUser  =    useSelector<storeInterface>( state => state.auth.displayName  );

    

    const handleLogout = () => {
        dispatch(  startLogout() );
    }

    const handleAddNew = () => {
        dispatch(  startNewNote() );
    }



    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {nameUser}</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={handleAddNew}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />    

        </aside>
    )
}
