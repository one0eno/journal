import { authReducer } from "../../reducers/authReducers"
import { types } from "../../types/types"

describe("Prueba reducer", () => {

    test("El reducer debe de realizar el login", () => {

        const initState = {
            uid: "",
            name: ""
        }
        const action = {
            type: types.login,
            payload:{
                uid: "123",
                displayName: "Jorge"
            }
        }

        const state = authReducer(initState, action)

        expect(state).toEqual({
            uid: "123",
            name: "Jorge"
        })
    })

    test("El reducer debe de realizar el logout", () => {

        const initState = {
            uid: "asdfafwefaf",
            name: "jorge"
        }
        const action = {
            type: types.logout,
          
        }

        const state = authReducer(initState, action)

        expect(state).toEqual({})
    })


})