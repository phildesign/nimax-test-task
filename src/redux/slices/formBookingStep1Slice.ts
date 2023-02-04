import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { FormBookingStep1Model } from '../../interfaces/formBooking.interface';

const initialState: FormBookingStep1Model = {
	numberOfAdults: 1,
	amountOfChildren: 0,
	amountOfChildrenUntilFive: 0,
	typeRoom: 'Эконом',
	numberOfNights: 1,
	insurance: true,
	total: 0,
};

export const formBookingStep1Slice = createSlice({
	name: 'formBooking',
	initialState: initialState,
	reducers: {
		chooseNumberOfAdults: (state, action) => {
			console.log(action.payload);
			state.numberOfAdults = action.payload;
		},
		chooseAmountOfChildren: (state, action) => {
			console.log(action.payload);
			state.amountOfChildren = action.payload;
		},
		chooseAmountOfChildrenUntilFive: (state, action) => {
			console.log(action.payload);
			state.amountOfChildrenUntilFive = action.payload;
		},
		chooseTypeRoom: (state, action) => {
			console.log(action.payload);
			state.typeRoom = action.payload;
		},
		chooseNumberOfNights: (state, action) => {
			console.log(action.payload);
			state.numberOfNights = action.payload;
		},
		chooseInsurance: (state, action) => {
			console.log(action.payload);
			state.insurance = action.payload;
		},
		totalPrice: (state, action) => {
			console.log(action.payload);
			state.total = action.payload;
		},
	},
});

export const {
	chooseNumberOfAdults,
	chooseAmountOfChildren,
	chooseAmountOfChildrenUntilFive,
	chooseTypeRoom,
	chooseNumberOfNights,
	chooseInsurance,
	totalPrice,
} = formBookingStep1Slice.actions;

export const formBookingStep1Selector = (state: RootState) => state.formBookingStep1Slice;

export default formBookingStep1Slice.reducer;
