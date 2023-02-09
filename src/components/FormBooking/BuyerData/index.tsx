import React from 'react';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { formBookingBuyerDataModel } from '../../../interfaces/formBooking.interface';
import {
	chooseBirthday,
	chooseName,
	choosePatronymic,
	choosePhone,
	chooseSurname,
} from '../../../redux/slices/formBookingBuyerDataSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { validateErrors } from '../../../utils/validateErrors';

import styles from '../FormBooking.module.css';

const BuyerData = (): JSX.Element => {
	const { surname, name, patronymic, phone, birthday } = useAppSelector(
		(state) => state.formBookingBuyerDataSlice,
	);

	const [isPhoneIncomplete, setPhoneIncomplete] = React.useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formBookingBuyerDataModel>({
		defaultValues: {
			surname,
			name,
			patronymic,
			phone,
			birthday,
		},
		mode: 'onChange',
	});

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<formBookingBuyerDataModel> = (data) => {
		dispatch(chooseSurname(data.surname));
		dispatch(chooseName(data.name));
		dispatch(choosePatronymic(data.patronymic));
		dispatch(choosePhone(data.phone));
		dispatch(chooseBirthday(data.birthday));
		navigate('/step3');
	};

	const handleClickPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate('/nimax-test-task');
	};

	const checkNumbersMinLength = (e: { target: HTMLInputElement }, minLength: number) => {
		setPhoneIncomplete(e.target.value.replace(/\D/g, '').length <= minLength);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formBookingStep}>
			<h1 className={styles.title}>Бронирование номера</h1>
			<h2 className={styles.subtitle}>Данные покупателя</h2>

			<div className={styles.row}>
				<label htmlFor="surname" className={styles.label}>
					Фамилия
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						id="surname"
						className={cn(styles.input, {
							[styles.inputError]: errors.surname?.type,
						})}
						{...register('surname', {
							required: 'Это поле обязательное',
							pattern: {
								value: /[A-Za-zА-Яа-яЁё]/i,
								message: 'Возможен ввод только текста',
							},
						})}
					/>
					<span className={styles.errorMessage}>{errors.surname?.message}</span>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="name" className={styles.label}>
					Имя
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						id="name"
						className={cn(styles.input, {
							[styles.inputError]: errors.name?.type,
						})}
						{...register('name', {
							required: 'Это поле обязательное',
							pattern: {
								value: /[A-Za-zА-Яа-яЁё]/i,
								message: 'Возможен ввод только текста',
							},
						})}
					/>
					<span className={styles.errorMessage}>{errors.name?.message}</span>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="patronymic" className={styles.label}>
					Отчество
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						id="patronymic"
						className={cn(styles.input, {
							[styles.inputError]: errors.patronymic?.type,
						})}
						{...register('patronymic', {
							pattern: {
								value: /[A-Za-zА-Яа-яЁё]/i,
								message: 'Возможен ввод только текста',
							},
						})}
					/>
					<span className={styles.errorMessage}>{errors.patronymic?.message}</span>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="phone" className={styles.label}>
					Номер телефона
				</label>
				<div className={styles.inputWrapper}>
					<InputMask
						mask="+ 7 999 999 99-99"
						id="phone"
						placeholder="+ 7 999 123 45-67"
						{...register('phone', {
							required: true,
							pattern: {
								value: /[0-9]/i,
								message: 'Возможен ввод только цифр',
							},
						})}
						onInput={(e: { target: HTMLInputElement }) => checkNumbersMinLength(e, 10)}
						className={cn(styles.input, {
							[styles.inputError]: errors.phone?.type || isPhoneIncomplete,
						})}
						type="text"
					/>
					<span className={styles.errorMessage}>
						{errors.phone?.type && validateErrors(errors.phone?.type)}
						{isPhoneIncomplete && 'Неккоректный формат телефона'}
					</span>
				</div>
			</div>

			<div className={cn(styles.row, styles.rowBirthday)}>
				<label htmlFor="birthday" className={styles.label}>
					Дата рождения
				</label>
				<div className={styles.inputDateWrapper}>
					<input
						type="date"
						id="birthday"
						max="2023-01-07"
						className={cn(styles.input, styles.inputDate, {
							[styles.inputError]: errors.birthday?.type,
						})}
						{...register('birthday', { required: 'Это поле обязательное' })}
					/>
					<span className={styles.errorMessage}>{errors.birthday?.message}</span>
				</div>
			</div>

			<div className={cn(styles.row, styles.rowBottom)}>
				<button className={styles.btnPrev} onClick={handleClickPrev}>
					Назад к расчету стоимости
				</button>
				<button className={styles.btnSubmit}>Далее</button>
			</div>
		</form>
	);
};

export default BuyerData;
