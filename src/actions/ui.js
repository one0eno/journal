import { types } from "../types/types";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = () => ({
    type:types.uiRemoveError
    
})

export const startLoading = () => ({
  type:types.uiStarLoading,
  payload:true
})

export const finishLoading = () => ({
  type:types.uiFinishLoading,
  payload:false
})
