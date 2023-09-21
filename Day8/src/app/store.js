import { configureStore } from '@reduxjs/toolkit';
import donorsReducer from '../features/donorsSlice';
export const store = configureStore({
  reducer: {
    donors: donorsReducer,
  },
});

export default store;