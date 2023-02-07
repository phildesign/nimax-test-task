import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { formBookingCostCalculationModel } from '../../interfaces/formBooking.interface';

const initialState: formBookingCostCalculationModel = {
	numberOfAdults: 1,
	amountOfChildren: 0,
	amountOfChildrenUntilFive: 0,
	typeRoom: 'Эконом',
	numberOfNights: 1,
	insurance: [],
	total: 0,
};

export const formBookingCostCalculationSlice = createSlice({
	name: 'formBooking',
	initialState: initialState,
	reducers: {
		chooseNumberOfAdults: (state, action) => {
			state.numberOfAdults = action.payload;
		},
		chooseAmountOfChildren: (state, action) => {
			state.amountOfChildren = action.payload;
		},
		chooseAmountOfChildrenUntilFive: (state, action) => {
			state.amountOfChildrenUntilFive = action.payload;
		},
		chooseTypeRoom: (state, action) => {
			state.typeRoom = action.payload;
		},
		chooseNumberOfNights: (state, action) => {
			state.numberOfNights = action.payload;
		},
		chooseInsurance: (state, action) => {
			state.insurance = action.payload;
		},
		setTotalPrice: (state, action) => {
			state.total = action.payload;
		},
		clearDataFormBookingCostCalculation: (state) => {
			state.numberOfAdults = 1;
			state.amountOfChildren = 0;
			state.amountOfChildrenUntilFive = 0;
			state.typeRoom = 'Эконом';
			state.numberOfNights = 1;
			state.insurance = [];
			state.total = 0;
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
	setTotalPrice,
	clearDataFormBookingCostCalculation,
} = formBookingCostCalculationSlice.actions;

export const formBookingCostCalculationSelector = (state: RootState) =>
	state.formBookingCostCalculationSlice;

export default formBookingCostCalculationSlice.reducer;
