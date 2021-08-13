import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car-store/carSlice';

export const store = configureStore({
	reducer: {
		car: carReducer,
	},
});
