import { createSlice, configureStore } from '@reduxjs/toolkit'

interface CardProps {
    id: string;
    url: string;
    title: string;
}

const dogsSlice = createSlice({
    name: 'dogs',
    initialState: {
        value: []
    },
    reducers: {
        list: (state) => {
            
        }
    }
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        dogs: dogsSlice.reducer
    }
})

export default store

