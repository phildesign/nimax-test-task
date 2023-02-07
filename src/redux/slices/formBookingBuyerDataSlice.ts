import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { formBookingBuyerDataModel } from './../../interfaces/formBooking.interface';

const initialState: formBookingBuyerDataModel = {
	surname: '',
	name: '',
	patronymic: '',
	phone: '',
	birthday: '',
};

export const formBookingBuyerDataSlice = createSlice({
	name: 'formBooking',
	initialState: initialState,
	reducers: {
		chooseSurname: (state, action) => {
			state.surname = action.payload;
		},
		chooseName: (state, action) => {
			state.name = action.payload;
		},
		choosePatronymic: (state, action) => {
			state.patronymic = action.payload;
		},
		choosePhone: (state, action) => {
			state.phone = action.payload;
		},
		chooseBirthday: (state, action) => {
			state.birthday = action.payload;
		},
	},
});

export const { chooseSurname, chooseName, choosePatronymic, choosePhone, chooseBirthday } =
	formBookingBuyerDataSlice.actions;

export const formBookingBuyerSelector = (state: RootState) => state.formBookingBuyerDataSlice;

export default formBookingBuyerDataSlice.reducer;
