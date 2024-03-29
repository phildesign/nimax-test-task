import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
	chooseAmountOfChildren,
	chooseAmountOfChildrenUntilFive,
	chooseInsurance,
	chooseNumberOfAdults,
	chooseNumberOfNights,
	chooseTypeRoom,
	setTotalPrice,
} from '../../../redux/slices/formBookingCostCalculationSlice';
import { formBookingCostCalculationModel } from '../../../interfaces/formBooking.interface';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { validateErrors } from '../../../utils/validateErrors';
import { ECO_PRICE, LUHURY_PRICE, STANDART_PRICE } from '../FormBookingConstants';

import styles from '../FormBooking.module.css';

const CostCalculation = (): JSX.Element => {
	const isMobile = useMediaQuery({ query: '(max-width: 580px)' });

	const {
		numberOfAdults,
		amountOfChildren,
		amountOfChildrenUntilFive,
		typeRoom,
		numberOfNights,
		insurance,
		total,
	} = useAppSelector((state) => state.formBookingCostCalculationSlice);

	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		trigger,
	} = useForm<formBookingCostCalculationModel>({
		defaultValues: {
			numberOfAdults,
			amountOfChildren,
			amountOfChildrenUntilFive,
			typeRoom,
			numberOfNights,
			insurance,
			total,
		},
		mode: 'onChange',
	});

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<formBookingCostCalculationModel> = (data) => {
		dispatch(chooseNumberOfAdults(data.numberOfAdults));
		dispatch(chooseAmountOfChildren(data.amountOfChildren));
		dispatch(chooseAmountOfChildrenUntilFive(data.amountOfChildrenUntilFive));
		dispatch(chooseTypeRoom(data.typeRoom));
		dispatch(chooseNumberOfNights(data.numberOfNights));
		dispatch(chooseInsurance(data.insurance));
		dispatch(setTotalPrice(totalTemp));
		navigate('/step2');
	};

	const numberOfAdultsTemp = watch('numberOfAdults');
	const numberOfNightsTemp = watch('numberOfNights');
	const amountOfChildrenTemp = watch('amountOfChildren');
	const amountOfChildrenUntilFiveTemp = watch('amountOfChildrenUntilFive');
	const typeRoomTemp = watch('typeRoom');
	const insuranceTemp = watch('insurance', []);

	const [totalTemp, setTotalTemp] = React.useState(0);

	React.useEffect(() => {
		let result = 0;

		switch (typeRoomTemp) {
			case 'Эконом':
				result =
					numberOfAdultsTemp * numberOfNightsTemp * ECO_PRICE +
					(amountOfChildrenTemp * ECO_PRICE) / 2;
				break;
			case 'Стандарт':
				result =
					numberOfAdultsTemp * numberOfNightsTemp * STANDART_PRICE +
					(amountOfChildrenTemp * STANDART_PRICE) / 2;
				break;
			case 'Люкс':
				result =
					numberOfAdultsTemp * numberOfNightsTemp * LUHURY_PRICE +
					(amountOfChildrenTemp * LUHURY_PRICE) / 2;
				break;
		}

		if (insuranceTemp.length) {
			result += result * 0.1;
		}

		setTotalTemp(result);
	}, [
		numberOfAdultsTemp,
		numberOfNightsTemp,
		amountOfChildrenTemp,
		typeRoomTemp,
		insuranceTemp,
		amountOfChildrenUntilFiveTemp,
	]);

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
						min={1}
						onInput={() => trigger()}
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
					min={0}
					{...register('amountOfChildren')}
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
						min={0}
						{...register('amountOfChildrenUntilFive', { max: numberOfAdultsTemp * 3 })}
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
							value="Эконом"
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
							value="Стандарт"
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
							value="Люкс"
							className={styles.inputRadio}
							{...register('typeRoom')}
						/>
						<label htmlFor="typeRoom3" className={(styles.label, styles.labelRadio)}>
							Люкс
						</label>
					</div>
				</div>

				{isMobile && (
					<div className={styles.selectTypeRoomWrapper}>
						<select
							id="selectTypeRoom"
							className={styles.selectTypeRoom}
							{...register('typeRoom', { required: true })}>
							<option value="Эконом">Эконом</option>
							<option value="Стандарт">Стандарт</option>
							<option value="Люкс">Люкс</option>
						</select>
					</div>
				)}
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
						min={1}
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

				{isMobile && (
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
				)}
			</div>

			<div className={cn(styles.row, styles.rowTotal)}>
				<label className={styles.label}>Итого:</label>
				<div className={styles.total}>
					{totalTemp}
					<span className={styles.rub}>₽</span>
				</div>
			</div>

			<div className={styles.rowBottom}>
				<button className={styles.btnSubmit}>Далее</button>
			</div>
		</form>
	);
};

export default CostCalculation;
