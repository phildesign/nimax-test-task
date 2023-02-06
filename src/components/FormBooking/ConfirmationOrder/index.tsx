import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../hooks/hooks';
import cn from 'classnames';
import { counterChildren } from '../../../utils/counterPeople';

import styles from '../FormBooking.module.css';

const ConfirmationOrder = (): JSX.Element => {
	const { surname, name, patronymic, phone, birthday } = useAppSelector(
		(state) => state.formBookingStep2Slice,
	);

	const {
		typeRoom,
		numberOfNights,
		numberOfAdults,
		amountOfChildren,
		amountOfChildrenUntilFive,
		insurance,
		total,
	} = useAppSelector((state) => state.formBookingStep1Slice);

	const { register, handleSubmit } = useForm({});

	const navigate = useNavigate();

	const onSubmit = () => {
		navigate('/result');
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
				{numberOfAdults} взрослых, <span>{counterChildren(amountOfChildren)}</span> и{' '}
				{amountOfChildrenUntilFive}
				ребенок младше 5 лет
			</div>
			<div className={styles.text}>{insurance ? 'Страховка включена' : 'Без страховки'}</div>
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
