import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userName: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    login: (state: TUserState, data: PayloadAction<TUserPayload>) => {
        state.isLoggedIn = true;
        state.userName = data.payload.userName;
    },
    logout: (state: TUserState) => {
        state.isLoggedIn = false;
    },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
export type TUserPayload = {userName: string};
export type TUserState = typeof initialState;