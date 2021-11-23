
import Swal from 'sweetalert2';

import { getAuth ,signInWithPopup, signInWithEmailAndPassword ,createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth'
import { googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types';
import { startLoading,finishLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {

  

    return (dispatch) => {
        dispatch(startLoading())

        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user}) => {
            dispatch(login(user.uid,user.displayName))
            dispatch(finishLoading())
        }).catch(e => {
            console.error(e)
            
            Swal.fire('Error', e.message,'error')
        }).finally(() => {
            dispatch(finishLoading())
        })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    
        return (dispatch) => {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth,email,password)
            .then(async ({user}) =>{
                
                 await updateProfile(user, {displayName:name})
                 console.log("usuario creado con email no google", user)
                // console.log("user:",user)
                 dispatch(login(user.uid, user.displayName))
            }).catch(error => {
                console.error(error)
                Swal.fire('Error', error.message,'error')
            });
        }
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                console.log("user:",user)
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) =>({
        type: types.login,
        payload:{
            uid,
            displayName
        }

})

export const startLogOut = () =>{
    return async (dispatch) => {
        const auth = getAuth();
        await auth.signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type:types.logout
})
   

