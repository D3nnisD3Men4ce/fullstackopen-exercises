import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))


// REDUX
// A Complex State Management Tool,
// with a single store as CDS

// REDUCERS
// Manages the State and Returns the
// newly updated state.

// ACTIONS
// Actions have 2 properties type:which
// is a unique identifier and payload
// which has data

// DISPATCH
// Dispatch is used to send actions to
// update the data

// SLICES
// A convention where it chunks up your 
// state into small manageable pieces of functionalities

// SELECTORS
// When you want to grab a state from your store, you use a useSelector() hook



const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = 
                (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const authSlice = createSlice({ 
    name: 'auth',
    initialState,
    // reducers are methods that you can call on your slice to modify the state
    // can add many methods as you want
    // will be exported out and imported to store
    reducers: {                         
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },

// The reducers property both creates an action creator function and responds to that action in the slice reducer. 
// The extraReducers allows you to respond to an action in your slice reducer but does not create an action creator function.

// You will use reducers most of the time.

// You would use extraReducers when you are dealing with an action that you have already defined somewhere else. 
// The most common examples are responding to a createAsyncThunk action and responding to an action from another slice.

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    }
})


export const { reset } = authSlice.actions
// actions are what you are going to be calling in your jsx components to change your state

export default authSlice.reducer