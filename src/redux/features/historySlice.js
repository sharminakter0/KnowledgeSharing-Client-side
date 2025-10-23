import { createSlice } from '@reduxjs/toolkit';

const MAX_HISTORY_ITEMS = 5; // Limit the number of recently viewed articles

const getInitialHistory = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedHistory = localStorage.getItem('recentlyViewedArticles');
    return storedHistory ? JSON.parse(storedHistory) : [];
  }
  return [];
};

const initialState = {
  articles: getInitialHistory(),
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addArticleToHistory: (state, action) => {
      const newArticle = action.payload; // Expects { id, title, url }
      
      // Remove if already exists to move it to the top
      state.articles = state.articles.filter(article => article.id !== newArticle.id);
      
      // Add new article to the beginning
      state.articles.unshift(newArticle);
      
      // Limit the history size
      if (state.articles.length > MAX_HISTORY_ITEMS) {
        state.articles.pop();
      }
      
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('recentlyViewedArticles', JSON.stringify(state.articles));
      }
    },
    clearHistory: (state) => {
      state.articles = [];
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('recentlyViewedArticles');
      }
    },
  },
});

export const { addArticleToHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;