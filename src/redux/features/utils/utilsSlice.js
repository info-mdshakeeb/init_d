import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  drawer: false,
  optionValue: null,
  dropdown: localStorage.getItem("dropdown")
    ? localStorage.getItem("dropdown")
    : null,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    // increment: (state, action) => {
    //   state.count += action.payload ? action.payload : 3
    // },
    increment: (state, action) => {
      state.count += action.payload ?? 3; // Using nullish coalescing operator for default value
    },
    openDrawer: (state, action) => {
      state.drawer = action.payload;
    },
    setOptionValue: (state, action) => {
      state.optionValue = action.payload;
    },
    setDropdown: (state, action) => {
      state.dropdown = action.payload;
    },
    setModalSelectedItem: (state, action) => {
      // Serialize the non-serializable value before updating the state
      state.modal.modal.selectedItem = JSON.stringify(action.payload);
    },
  },
});

export const {
  increment,
  openDrawer,
  setOptionValue,
  setDropdown,
  setModalSelectedItem,
} = utilsSlice.actions;
export default utilsSlice.reducer;
