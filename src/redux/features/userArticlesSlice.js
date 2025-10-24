import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching user articles
export const fetchUserArticles = createAsyncThunk(
  'userArticles/fetchUserArticles',
  async (userEmail, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://knowledege-project.vercel.app/articles?userEmail=${userEmail}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user articles');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userArticlesSlice = createSlice({
  name: 'userArticles',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can add synchronous reducers here if needed, e.g., to clear articles
    clearUserArticles: (state) => {
      state.articles = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchUserArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserArticles } = userArticlesSlice.actions;

export default userArticlesSlice.reducer;