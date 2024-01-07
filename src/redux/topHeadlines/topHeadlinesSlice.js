import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchTopHeadlines } from './topHeadlinesAPI'

export const fetchTopHeadlinesAsync = createAsyncThunk(
    'news/fetchTopHeadlines',
    async ({country, title}) => {
        const response = await fetchTopHeadlines(country, title);
        return response.data;
    }
)



const initialState = {
    status: 'idle',
    newsData: [],
    totalNews : 0
}

const topHeadlinesSlice = createSlice({
    name: 'topHeadlines',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopHeadlinesAsync.pending, (state)=>{
            state.status = 'loading'
        })

        builder.addCase(fetchTopHeadlinesAsync.fulfilled, (state, action)=>{
            state.status = 'idle'
            state.newsData = action.payload
        } )
    }
})

export const selectTopHeadlines = (state)=>state.topHeadlines.newsData
export const selectLoader = (state)=>state.topHeadlines.status
export default topHeadlinesSlice.reducer