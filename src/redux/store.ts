import { configureStore } from '@reduxjs/toolkit';
import formBookingCostCalculationSlice from './slices/formBookingCostCalculationSlice';
import formBookingBuyerDataSlice from './slices/formBookingBuyerDataSlice';

const store = configureStore({
	reducer: {
		formBookingCostCalculationSlice,
		formBookingBuyerDataSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
