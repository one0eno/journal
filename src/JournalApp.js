import React from "react"
import AppRouter from "./routers/AppRouter"
import { store } from "./store/store"
import { Provider } from "react-redux"

export default function JournalApp() {

   
    return (
        <Provider store={store}>        
        <AppRouter/>
        </Provider>
    )
}