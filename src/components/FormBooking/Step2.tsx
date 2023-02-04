import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import styles from './FormBooking.module.css';

const Step2 = (): JSX.Element => {
	const { register, handleSubmit } = useForm();

	const navigate = useNavigate();

	const onSubmit = () => {
		navigate('/step3');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formBookingStep}>
			<h1 className={styles.title}>Бронирование номера</h1>
			<h2 className={styles.subtitle}>Данные покупателя</h2>

			<div className={styles.row}>
				<label htmlFor="surname" className={styles.label}>
					Фамилия
				</label>
				<input type="text" id="surname" className={styles.input} />
			</div>

			<div className={styles.row}>
				<label htmlFor="name" className={styles.label}>
					Имя
				</label>
				<input type="text" id="name" className={styles.input} />
			</div>

			<div className={styles.row}>
				<label htmlFor="patronymic" className={styles.label}>
					Отчество
				</label>
				<input type="text" id="patronymic" className={styles.input} />
			</div>

			<div className={styles.row}>
				<label htmlFor="phone" className={styles.label}>
					Номер телефона
				</label>
				<input type="text" id="phone" className={styles.input} />
			</div>

			<div className={styles.row}>
				<label htmlFor="birthday" className={styles.label}>
					Дата рождения
				</label>
				<div className={styles.inputDateWrapper}>
					<input type="date" id="birthday" className={cn(styles.input, styles.inputDate)} />
				</div>
			</div>

			<div className={cn(styles.row, styles.rowBottom)}>
				<button className={styles.btnPrev}>Назад к расчету стоимости</button>
				<button className={styles.btnSubmit}>Далее</button>
			</div>
		</form>
	);
};

export default Step2;
