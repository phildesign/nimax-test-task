import { useForm } from 'react-hook-form';
import cn from 'classnames';

import styles from './FormBooking.module.css';

const Step3 = (): JSX.Element => {
	const { register, handleSubmit } = useForm();
	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formBookingStep}>
			<h1 className={styles.title}>Бронирование номера</h1>
			<h2 className={styles.subtitle}>Подтверждение заказа</h2>
			<div className={cn(styles.text, styles.textBold)}>Иванов Иван Иванович</div>
			<div className={styles.text}>+7 999 123 45-67</div>
			<div className={styles.text}>Номер «Люкс» на 10 ночей</div>
			<div className={styles.text}>2 взрослых, 2 ребенка от 12 лет и 1 ребенок младше 12 лет</div>
			<div className={styles.text}>Страховка включена</div>
			<div className={cn(styles.text, styles.textBottom)}>
				К оплате
				<span className={styles.price}>
					1 234 <span className={styles.rub}>₽</span>
				</span>
			</div>

			<div className={styles.rowBottom}>
				<button className={styles.btnPrev}>Назад к данным покупателя</button>
				<button className={styles.btnSubmit}>Оплатить</button>
			</div>
		</form>
	);
};

export default Step3;
