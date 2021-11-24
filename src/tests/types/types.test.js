import { types } from '../../types/types';
describe('Prueba de comprobación de types', () => {

    test('Prueba de tipos debe de tener estos types', () =>{

        expect(types).toEqual({
            
                login:'[Auth login]',
                logout:'[Auth logout]',
            
                uiSetError:'[UI] Set Error',
                uiRemoveError:'[UI] Remove Error',
            
                uiStarLoading:'[UI] Start loading',
                uiFinishLoading:'[UI] Finish loading',
            
                notesAddNew : '[Notes] Add new',
                notesActive : '[Notes] Set active note',
                notesLoad : '[Notes] Load notes',
                notesUpdate : '[Notes] update notes',
                notesFileUrl:'[Notes] Upadte image url',
                notesDelete : '[Notes] delete notes',
                notesLogoutCleaning:'[Notes] Logout cleaning',
                notesUploading:'[Notes] uploading file'
            })
    })

})