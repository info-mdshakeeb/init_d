import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  modal: {
    show: false,
    title: null,
    width: null,
    selectedItem: null,
  }
}
const modalSlices = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modal.show = action.payload.show;
      state.modal.title = action.payload.title;
      state.modal.width = action.payload.width;
      state.modal.selectedItem = action.payload.selectedItem;
    }
  }
})

export const { showModal } = modalSlices.actions;
export default modalSlices.reducer;
