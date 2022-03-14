import { } from 'react-native'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { BASE_URL, DEFALT_NOTIFICATIONS, EDITORS_CHOICE, NOW_SHOWING } from '../config';
import axios from 'axios';


const StateContext = createContext();


export function useAppState() {
    return useContext(StateContext)
}

export const StateProvider = ({ children }) => {

    const [appState, setAppState] = useState({
        modalState: false,
        searchQuery: "",
        editorChoice: EDITORS_CHOICE,
        nowShowing: [],
        searchresult: [],
        selectedMovie: {},
        donwloadUrl: "",
        saved_list: [],
        useNative: true,
        notifications: DEFALT_NOTIFICATIONS
    })


    const setNative = (t) => {
        setAppState({ ...appState, useNative: t })
    }

    const setSearchQuery = (q) => {
        setAppState({ ...appState, searchQuery: q })
    }
    const getSearchQuery = (q) => {
        return appState.searchQuery;
    }

    const create_saved = (url) => {
        let _data = { ...appState.selectedMovie, url }
        /* 1. set donwloadUrl*/
        /* 2. Push data to saved_list*/
        let issaved = false

        for (let index = 0; index < appState.saved_list.length; index++) {
            const element = appState.saved_list[index];
            if (element.title == appState.selectedMovie.title) {
                issaved = true;
            }

        }
        if (issaved == true) {
            setAppState({ ...appState, donwloadUrl: url, modalState: !appState.modalState })
        } else {

            setAppState({ ...appState, donwloadUrl: url, saved_list: [...appState.saved_list, _data], modalState: !appState.modalState })
        }


    }
    useEffect(() => {
        fetch(`${BASE_URL}/movies/2022`)
            .then((response) => response.json())
            .then(data => setAppState({ ...appState, nowShowing: data }))
            .catch((error) => setAppState({ ...appState, nowShowing: NOW_SHOWING }))
    }, [])


    return (
        <StateContext.Provider value={{ appState, setAppState, create_saved, setSearchQuery, getSearchQuery, setNative }}>
            {children}
        </StateContext.Provider>
    )
}