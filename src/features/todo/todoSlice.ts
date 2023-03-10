import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  title: string
  content: string
  isCompleted: boolean
}

const state = {
  todos: [
    {
      id: 1,
      title: 'テスト1',
      content: 'テスト1の内容',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'テスト2',
      content: 'テスト2の内容',
      isCompleted: false,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: state,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const {add, remove} = todoSlice.actions

export default todoSlice.reducer
