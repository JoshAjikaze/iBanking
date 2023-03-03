import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './togglers/sidebarToggler'
import searchSlice from './togglers/searchToggler'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        searchBar: searchSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch