import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";


export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningIn: false,
    isloggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    chackAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({authUser:res.data});
        } catch (error) {
            console.log("Error in checkAuth")
            set({authUser:null});
        }finally{
            set({ isChekcingAuth: false});
        }
    }
})); 