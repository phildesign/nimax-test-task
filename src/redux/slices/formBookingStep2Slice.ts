import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { FormBookingStep2Model } from '../../interfaces/formBooking.interface';

const initialState: FormBookingStep2Model = {
	surname: '',
	name: '',
	patronymic: '',
	phone: '',
	date: '',
};

export const formBookingStep2Slice = createSlice({
	name: 'formBooking',
	initialState: initialState,
	reducers: {
		chooseSurname: (state, action) => {
			console.log(action.payload);
			state.surname = action.payload;
		},
		chooseName: (state, action) => {
			console.log(action.payload);
			state.name = action.payload;
		},
		choosePatronymic: (state, action) => {
			console.log(action.payload);
			state.patronymic = action.payload;
		},
		choosePhone: (state, action) => {
			console.log(action.payload);
			state.phone = action.payload;
		},
		chooseDate: (state, action) => {
			console.log(action.payload);
			state.date = action.payload;
		},
	},
});

export const { chooseSurname, chooseName, choosePatronymic, choosePhone, chooseDate } =
	formBookingStep2Slice.actions;

export const formBookingStep2Selector = (state: RootState) => state.formBookingStep2Slice;

export default formBookingStep2Slice.reducer;
