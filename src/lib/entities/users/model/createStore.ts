import type { BaseAuthStore } from 'pocketbase'
import { writable } from "svelte/store"
import type{ IUser } from './../types/index'

export const createUserStore = () => {
    const {set, update, subscribe} = writable<{
        current?:IUser | null
        isLoggedIn: boolean
    }>({
        current:undefined,
        isLoggedIn: false
    })

    const setUser = (user?:IUser | null) => {
        update(data => {
            data.isLoggedIn = !!user
            data.current = user
            return data
        })
    }

    return {
        set: setUser,
        subscribe
    }
}