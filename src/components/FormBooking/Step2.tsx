import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { FormBookingStep2Model } from '../../interfaces/formBooking.interface';
import {
	chooseBirthday,
	chooseName,
	choosePatronymic,
	choosePhone,
	chooseSurname,
} from '../../redux/slices/formBookingStep2Slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import styles from './FormBooking.module.css';
import { validateErrors } from '../../utils/validateErrors';

const Step2 = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm<FormBookingStep2Model>({
		defaultValues: {},
		mode: 'onChange',
	});

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FormBookingStep2Model> = (data) => {
		dispatch(chooseSurname(data.surname));
		dispatch(chooseName(data.name));
		dispatch(choosePatronymic(data.patronymic));
		dispatch(choosePhone(data.phone));
		dispatch(chooseBirthday(data.birthday));
		navigate('/step3');
	};

	const handleClickPrev = () => {
		navigate('/');
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
						{...register('surname', { required: true })}
					/>
					<span className={styles.errorMessage}>
						{errors.surname?.type && validateErrors(errors.surname?.type)}
					</span>
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
						{...register('name', { required: true })}
					/>
					<span className={styles.errorMessage}>
						{errors.name?.type && validateErrors(errors.name?.type)}
					</span>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="patronymic" className={styles.label}>
					Отчество
				</label>
				<input type="text" id="patronymic" className={styles.input} {...register('patronymic')} />
			</div>

			<div className={styles.row}>
				<label htmlFor="phone" className={styles.label}>
					Номер телефона
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						id="phone"
						placeholder="+ 7 999 123 45-67"
						className={cn(styles.input, {
							[styles.inputError]: errors.phone?.type,
						})}
						{...register('phone', { required: true })}
					/>
					<span className={styles.errorMessage}>
						{errors.phone?.type && validateErrors(errors.phone?.type)}
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
						className={cn(styles.input, styles.inputDate, {
							[styles.inputError]: errors.birthday?.type,
						})}
						{...register('birthday', { required: true })}
					/>
					<span className={styles.errorMessage}>
						{errors.birthday?.type && validateErrors(errors.birthday?.type)}
					</span>
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

export default Step2;
