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
		clearDataFormBookingBuyer: (state) => {
			state.surname = '';
			state.name = '';
			state.patronymic = '';
			state.phone = '';
			state.birthday = '';
		},
	},
});

export const {
	chooseSurname,
	chooseName,
	choosePatronymic,
	choosePhone,
	chooseBirthday,
	clearDataFormBookingBuyer,
} = formBookingBuyerDataSlice.actions;

export const formBookingBuyerSelector = (state: RootState) => state.formBookingBuyerDataSlice;

export default formBookingBuyerDataSlice.reducer;
