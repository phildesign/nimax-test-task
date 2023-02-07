import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { counterAdults, counterChildren } from '../../../utils/counterPeople';
import { clearDataFormBookingBuyer } from '../../../redux/slices/formBookingBuyerDataSlice';
import { clearDataFormBookingCostCalculation } from '../../../redux/slices/formBookingCostCalculationSlice';

import styles from '../FormBooking.module.css';

const ConfirmationOrder = (): JSX.Element => {
	const state = useAppSelector((state) => state);

	const { surname, name, patronymic, phone } = useAppSelector(
		(state) => state.formBookingBuyerDataSlice,
	);

	const {
		typeRoom,
		numberOfNights,
		numberOfAdults,
		amountOfChildren,
		amountOfChildrenUntilFive,
		insurance,
		total,
	} = useAppSelector((state) => state.formBookingCostCalculationSlice);

	const { handleSubmit } = useForm({});

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const onSubmit = () => {
		setTimeout(() => alert(JSON.stringify(state, null, 2)), 1000); //fake send to server
		setTimeout(() => navigate('/result'), 1000);
		setTimeout(() => dispatch(clearDataFormBookingCostCalculation()), 1000);
		setTimeout(() => dispatch(clearDataFormBookingBuyer()), 1000);
	};

	const handleClickPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate('/step2');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formBookingStep}>
			<h1 className={styles.title}>Бронирование номера</h1>
			<h2 className={styles.subtitle}>Подтверждение заказа</h2>
			<div className={cn(styles.text, styles.textBold)}>
				{surname} {name} {patronymic}
			</div>
			<div className={styles.text}>{phone}</div>
			<div className={styles.text}>
				Номер «{typeRoom}» на {numberOfNights} ночей
			</div>
			<div className={styles.text}>
				{counterAdults(numberOfAdults)}
				<span>{counterChildren(amountOfChildren, 'afterFive')}</span>
				<span>{counterChildren(amountOfChildrenUntilFive, 'beforeFive')}</span>
			</div>
			<div className={styles.text}>{insurance.length ? 'Страховка включена' : 'Без страховки'}</div>
			<div className={cn(styles.text, styles.textBottom)}>
				К оплате
				<span className={styles.price}>
					{total} <span className={styles.rub}>₽</span>
				</span>
			</div>
			<div className={styles.rowBottom}>
				<button className={styles.btnPrev} onClick={handleClickPrev}>
					Назад к данным покупателя
				</button>
				<button className={styles.btnSubmit}>Оплатить</button>
			</div>
		</form>
	);
};

export default ConfirmationOrder;
