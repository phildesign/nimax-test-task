import { useForm } from 'react-hook-form';
import cn from 'classnames';

import styles from './FormBooking.module.css';

const Step1 = (): JSX.Element => {
	const { register, handleSubmit } = useForm();
	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.subtitle}>Расчет стоимости</h2>

			<div className={styles.row}>
				<label htmlFor="number-of-adults" className={styles.label}>
					Количество взрослых
				</label>
				<input type="number" id="number-of-adults" className={styles.input} value={1} min={1} />
			</div>

			<div className={styles.row}>
				<label htmlFor="amount-of-children" className={styles.label}>
					Количество детей от 5 до 12 лет
				</label>
				<input type="number" id="amount-of-children" className={styles.input} value={0} min={0} />
			</div>

			<div className={cn(styles.row, styles.rowAlignBaseline)}>
				<label className={styles.label}>Тип номера</label>

				<div className={styles.radioGroupBox}>
					<div className={styles.radioGroup}>
						<input
							type="radio"
							id="type-room-1"
							className={styles.inputRadio}
							name="type-room"
							checked
						/>
						<label htmlFor="type-room-1" className={(styles.label, styles.labelRadio)}>
							Эконом
						</label>
					</div>
					<div className={styles.radioGroup}>
						<input type="radio" id="type-room-2" className={styles.inputRadio} name="type-room" />
						<label htmlFor="type-room-2" className={(styles.label, styles.labelRadio)}>
							Стандарт
						</label>
					</div>
					<div className={styles.radioGroup}>
						<input type="radio" id="type-room-3" className={styles.inputRadio} name="type-room" />
						<label htmlFor="type-room-3" className={(styles.label, styles.labelRadio)}>
							Люкс
						</label>
					</div>
				</div>
			</div>

			<div className={styles.row}>
				<label htmlFor="number-of-nights" className={styles.label}>
					Количество ночей
				</label>
				<input type="number" id="number-of-nights" className={styles.input} value={0} min={0} />
			</div>

			<div className={styles.row}>
				<label htmlFor="insurance" className={styles.label}>
					Страховка
				</label>
				<div className={styles.inputInsuranceWrapper}>
					<input type="checkbox" id="insurance" className={styles.inputInsuranceCheckbox} checked />
					<label htmlFor="insurance" className={styles.labelInsuranceCheckbox}></label>
				</div>
			</div>

			<div className={styles.row}>
				<label className={styles.label}>Итого:</label>
				<div className={styles.total}>
					1 234 <span className={styles.rub}>₽</span>
				</div>
			</div>

			<button className={styles.btnSubmit}>Далее</button>
		</form>
	);
};

export default Step1;
