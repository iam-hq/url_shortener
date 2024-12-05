import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            setLogin: ({token, user}) => set({ user, token }),
            setLogout: () => set({ user: null, token: null }),
        }),
        {
            name: 'url-shortener-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)