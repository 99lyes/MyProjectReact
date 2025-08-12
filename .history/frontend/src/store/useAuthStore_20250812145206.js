import { create } from "zustand";


export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningIn: false,
    isloggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,
})); 