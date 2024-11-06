import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tabVisible: true,
  user: null,
  token: null,
  products: [],
  messages: [],
};

export const defaultSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTabVisible: state => {
      state.tabVisible = state.tabVisible === true ? false : true;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: state => {
      state.user = null;
      state.token = null;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setMessages: (state, action) => {
      state.messages = action.payload.messages;
    },
  },
});

export const {setTabVisible, setLogin, setLogout, setProducts, setMessages} =
  defaultSlice.actions;
export default defaultSlice.reducer;
