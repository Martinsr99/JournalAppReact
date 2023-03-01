import {collection, doc, setDoc} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving } from './journalSlice';

export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch(savingNewNote())

        const {uid} = getState().auth;
        //uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),

        }

        const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notes`))
        await setDoc(newDoc,newNote);

        newNote.id = newDoc.id;

        //dispatch
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch,getState) => {

        let notes = []
        const {uid} = getState().auth
        if(!uid) throw new Error('El UID del usuario no existe')
        
        notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
    
}

export const startSaveNote = () => { 
    
    return async (dispatch,getState) => {

        dispatch(setSaving())

        const {uid} = getState().auth
        const {active:note} = getState().journal

        const noteToFireStore = {...note}
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB,`${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true})
    }
}