import { setError, removeError, startLoading, finishLoading } from "../../actions/ui";
import {types} from "../../types/types";

describe('UI action', () => {


    test("todas las acciones deben funcionar", () =>{

        const action = setError("HELP !!!");
        expect(action).toEqual({
                type: types.uiSetError,
                payload: "HELP !!!",
        })

        const removeErrorAction = removeError({
            type: types.uiRemoveError
        });

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })

        const startLoadingAction = startLoading({
            type:types.uiStarLoading,
            payload:true
        });
        expect(startLoadingAction).toEqual({
            type:types.uiStarLoading,
            payload:true
        })

        const finishLoadingAction = finishLoading({

            type:types.uiFinishLoading,
            payload:false
        });
        expect(finishLoadingAction).toEqual({
            type:types.uiFinishLoading,
            payload:false
        })

    })

})