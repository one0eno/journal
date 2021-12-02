import { db } from "../../firebase/firebase-config";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
  } from "@firebase/firestore";

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from "../../actions/notes";
import { types } from '../../types/types';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

 const store = mockStore({
     auth: {
         uid: 'TESTING'
     }
 })

describe('Pruebas con las acciones de notes', () => {


    test("HA DE CREAR UNA NUEVA NOTA", async() =>{
        
        await store.dispatch(startNewNote())

        const actions = store.getActions()
        //console.log(actions)
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        const noteId = actions[0].payload.id
        //console.log(noteId)

        await deleteDoc(
            doc(db, `TESTING/journal/notes/`, noteId)
          );

    })
})