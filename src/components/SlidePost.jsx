import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: "posts",
  initialState: { data: [] },
  reducers: {
    AddPost: (state, action) => { state.data.push(action.payload) },
    DeletePost: (state, action) => {
      state.data = state.data.filter(e=> e.id != action.payload.id)
    },
    UpdatePost: (state, action) => {
      state.data.map(e => {
        if (e.id == action.payload.id) {
          e.title = action.payload.title;
          e.desc = action.payload.desc
        }
      })
    }
  }
})

export const {AddPost , DeletePost , UpdatePost} = user.actions
export default user.reducer
