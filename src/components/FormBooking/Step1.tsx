import { useForm, useWatch, Control } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
	chooseAmountOfChildren,
	chooseAmountOfChildrenUntilFive,
	chooseInsurance,
	chooseNumberOfAdults,
	chooseNumberOfNights,
	chooseTypeRoom,
	totalPrice,
} from '../../redux/slices/formBookingStep1Slice';
import { FormBookingStep1Model } from '../../interfaces/formBooking.interface';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { validateErrors } from '../../utils/validateErrors';
import { ECO_PRICE, LUHURY_PRICE, STANDART_PRICE } from './FormBookingConstants';

import styles from './FormBooking.module.css';

const Step1 = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const {
		numberOfAdults,
		amountOfChildren,
		amountOfChildrenUntilFive,
		typeRoom,
		numberOfNights,
		insurance,
		total,
	} = useAppSelector((state) => state.formBookingStep1Slice);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm<FormBookingStep1Model>({
		defaultValues: { numberOfAdults, amountOfChildren, typeRoom: 'Эконом', insurance: true },
		mode: 'onChange',
	});

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FormBookingStep1Model> = (data) => {
		dispatch(chooseNumberOfAdults(data.numberOfAdults));
		dispatch(chooseAmountOfChildren(data.amountOfChildren));
		dispatch(chooseAmountOfChildrenUntilFive(data.amountOfChildrenUntilFive));
		dispatch(chooseTypeRoom(data.typeRoom));
		dispatch(chooseNumberOfNights(data.numberOfNights));
		dispatch(chooseInsurance(data.insurance));
		dispatch(totalPrice(data.total));
		navigate('/step2');
	};

	function CalculateCost({ control }: { control: Control<FormBookingStep1Model> }) {
		const numberOfAdults = useWatch({
			control,
			name: 'numberOfAdults',
		});

		const numberOfNights = useWatch({
			control,
			name: 'numberOfNights',
		});

		const amountOfChildren = useWatch({
			control,
			name: 'amountOfChildren',
		});

		const insurance = useWatch({
			control,
			name: 'insurance',
		});

		const typeRoom = useWatch({
			control,
			name: 'typeRoom',
		});

		let result = 0;

		switch (typeRoom) {
			case 'Эконом':
				result = numberOfAdults * numberOfNights * ECO_PRICE + (amountOfChildren * ECO_PRICE) / 2;
				break;
			case 'Стандарт':
				result =
					numberOfAdults * numberOfNights * STANDART_PRICE +
					(amountOfChildren * STANDART_PRICE) / 2;
				break;
			case 'Люкс':
				result =
					numberOfAdults * numberOfNights * LUHURY_PRICE + (amountOfChildren * LUHURY_PRICE) / 2;
				break;
		}

		if (insurance) {
			result += result * 0.1;
		}

		return <span>{result}</span>;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formBookingStep}>
			<h1 className={styles.title}>Бронирование номера</h1>
			<h2 className={styles.subtitle}>Расчет стоимости</h2>

			<div className={styles.row}>
				<label htmlFor="numberOfAdults" className={styles.label}>
					Количество взрослых
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="number"
						id="numberOfAdults"
						className={cn(styles.input, {
							[styles.inputError]: errors.numberOfAdults?.type,
						})}
						defaultValue={numberOfAdults}
						{...register('numberOfAdults', { required: true, min: 1 })}
					/>
					<span className={styles.errorMessage}>
						{errors.numberOfAdults?.type && validateErrors(errors.numberOfAdults?.type)}
					</span>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="amountOfChildren" className={styles.label}>
					Количество детей от 5 до 12 лет
				</label>

				<input
					type="number"
					id="amountOfChildren"
					className={styles.input}
					defaultValue={amountOfChildren}
					{...register('amountOfChildren', { min: 0 })}
				/>
			</div>

			<div className={styles.row}>
				<label htmlFor="amountOfChildrenUntilFive" className={styles.label}>
					Количество детей до 5 лет
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="number"
						id="amountOfChildrenUntilFive"
						className={cn(styles.input, {
							[styles.inputError]: errors.amountOfChildrenUntilFive?.type,
						})}
						defaultValue={amountOfChildrenUntilFive}
						{...register('amountOfChildrenUntilFive', { max: watch('numberOfAdults') * 3 })}
					/>
					<span className={styles.errorMessage}>
						{errors.amountOfChildrenUntilFive?.type &&
							validateErrors(errors.amountOfChildrenUntilFive?.type)}
					</span>
				</div>
			</div>

			<div className={cn(styles.row, styles.rowAlignBaseline)}>
				<label className={styles.label}>Тип номера</label>

				<div className={styles.radioGroupBox}>
					<div className={styles.radioGroup}>
						<input
							type="radio"
							id="typeRoom1"
							defaultValue={'Эконом'}
							className={styles.inputRadio}
							{...register('typeRoom')}
						/>
						<label htmlFor="typeRoom1" className={(styles.label, styles.labelRadio)}>
							Эконом
						</label>
					</div>
					<div className={styles.radioGroup}>
						<input
							type="radio"
							id="typeRoom2"
							defaultValue={'Стандарт'}
							className={styles.inputRadio}
							{...register('typeRoom')}
						/>
						<label htmlFor="typeRoom2" className={(styles.label, styles.labelRadio)}>
							Стандарт
						</label>
					</div>
					<div className={styles.radioGroup}>
						<input
							type="radio"
							id="typeRoom3"
							defaultValue={'Люкс'}
							className={styles.inputRadio}
							{...register('typeRoom')}
						/>
						<label htmlFor="typeRoom3" className={(styles.label, styles.labelRadio)}>
							Люкс
						</label>
					</div>
				</div>

				<div className={styles.selectTypeRoomWrapper}>
					<select
						id="selectTypeRoom"
						className={styles.selectTypeRoom}
						defaultValue={typeRoom}
						{...register('typeRoom', { required: true })}>
						<option value="Эконом">Эконом</option>
						<option value="Стандарт">Стандарт</option>
						<option value="Люкс">Люкс</option>
					</select>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="numberOfNights" className={styles.label}>
					Количество ночей
				</label>
				<div className={styles.inputWrapper}>
					<input
						type="number"
						id="numberOfNights"
						className={cn(styles.input, {
							[styles.inputError]: errors.numberOfNights?.type,
						})}
						defaultValue={numberOfNights}
						{...register('numberOfNights', { required: true, min: 1 })}
					/>
					<span className={styles.errorMessage}>
						{errors.numberOfNights?.type && validateErrors(errors.numberOfNights?.type)}
					</span>
				</div>
			</div>

			<div className={cn(styles.row, styles.rowInsurance)}>
				<label htmlFor="insurance" className={styles.label}>
					Страховка
				</label>
				<div className={styles.inputInsuranceWrapper}>
					<input
						type="checkbox"
						id="insurance"
						className={styles.inputInsuranceCheckbox}
						{...register('insurance')}
					/>
					<label htmlFor="insurance" className={styles.labelInsuranceCheckbox}></label>
				</div>

				<div className={styles.inputToggleInsuranceWrapper}>
					<label htmlFor="insuranceMobile" className={styles.inputToggleInsuranceLabel}>
						<input
							type="checkbox"
							id="insuranceMobile"
							className={styles.inputToggleInsurance}
							{...register('insurance')}
						/>
						<div className={styles.inputToggleInsuranceInner}></div>
						<div className={styles.inputToggleInsuranceBullet}></div>
					</label>
				</div>
			</div>

			<div className={cn(styles.row, styles.rowTotal)}>
				<label className={styles.label}>Итого:</label>
				<div className={styles.total}>
					{total}
					<span className={styles.rub}>₽</span>
				</div>
			</div>

			<button className={styles.btnSubmit}>Далее</button>
		</form>
	);
};

export default Step1;
