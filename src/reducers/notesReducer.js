import { types } from '../types/types';

/*
notes:[],
active:null,
active:{
    id:'asdfa2a323f
    title:'',
    body:'',
    imageUrl:'',
    date:12341234234
}
*/
const initialState = {
    notes:[],
    active:null
}
export const notesReducer= (state = initialState,action) =>{

    switch(action.type){
        case types.notesActive:
            return{
               ...state,
               active:{
                   ...action.payload
               } 

            }
        case types.notesLoad:
            return{
                ...state,
                notes:[...action.payload]
            }
        case types.notesUpdate:
            
            return{
                ...state,
                notes:state.notes.map(
                    note => note.id === action.payload.id 
                        ? action.payload.note
                        : note)
            }
        case types.notesUploading:
            return{
                ...state,
                notes:[...action.payload]
            }

        case types.notesDelete:
            return{
                ...state,
                active:null,
                notes:state.notes.filter(note => note.id !== action.payload)
            }
    
        default:
            return state
    }
}