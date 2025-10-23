import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import notificationReducer from './features/notificationSlice';
import historyReducer from './features/historySlice';
import userArticlesReducer from './features/userArticlesSlice'; // Import the new reducer

export const store = configureStore({
  reducer: {
    search: searchReducer,
    notification: notificationReducer,
    history: historyReducer,
    userArticles: userArticlesReducer, // Add the user articles reducer
  },
});