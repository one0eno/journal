
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from "../../actions/notes";

//const middlewares = [thunk]
//const mockStore = configureStore(middlewares)

// const store = mockStore({
//     auth: {
//         uid: 'TESTING'
//     }
// })
// //"firebase": "^9.4.1",
describe('Pruebas con las acciones de notes', () => {


    test("HA DE CREAR UNA NUEVA NOTA", async() =>{

        //await store.dispatch(startNewNote())
    })
})