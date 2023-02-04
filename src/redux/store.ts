import { configureStore } from '@reduxjs/toolkit';
import formBookingStep1Slice from './slices/formBookingStep1Slice';
import formBookingStep2Slice from './slices/formBookingStep2Slice';

const store = configureStore({
	reducer: {
		formBookingStep1Slice,
		formBookingStep2Slice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
