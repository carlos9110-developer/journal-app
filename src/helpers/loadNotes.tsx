import { db } from "../firebase/firebase-config"
import { notes } from '../reducers/notesReducer';


export const loadNotes = async ( uid:string | undefined )=> {

   const notesSnap = await db.collection(`${uid}/journal/notes`).get();
   const notes:notes[] = [];

   notesSnap.forEach( snapHijo =>  {

        const result = snapHijo.data();

        notes.push({
            id:snapHijo.id,
            body:result.body,
            title:result.title,
            date: result.date
        })
   })


   return notes;


}