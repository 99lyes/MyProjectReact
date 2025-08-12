import { create } from "zustand";


export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningIn: false,
    isloggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    chackAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({authUser:res.data})
        } catch (error) {
            set({authUser:null})
            
        }
    }
})); 