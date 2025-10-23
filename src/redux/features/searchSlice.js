import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  filters: {
    category: 'all',
    date: 'all',
    author: '',
    sortBy: 'newest'
  },
  results: [],
  loading: false,
  error: null,
  cachedResults: {}
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      // Cache the results
      const cacheKey = state.searchQuery + JSON.stringify(state.filters);
      state.cachedResults[cacheKey] = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearSearch: (state) => {
      state.searchQuery = '';
      state.results = [];
      state.error = null;
    }
  }
});

export const { 
  setSearchQuery, 
  setFilters, 
  setLoading, 
  setResults, 
  setError, 
  clearSearch 
} = searchSlice.actions;

export default searchSlice.reducer;