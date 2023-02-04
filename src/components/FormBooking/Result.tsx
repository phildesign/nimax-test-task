import { useForm } from 'react-hook-form';
import cn from 'classnames';
import successIcon from './success-icon.svg';

import styles from './FormBooking.module.css';

const Result = (): JSX.Element => {
	const { register, handleSubmit } = useForm();
	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formBookingStep}>
			<img src={successIcon} alt="success-icon" className={styles.successIcon} />
			<h1 className={styles.successTitle}>Заказ успешно оплачен.</h1>
			<button className={cn(styles.btnSubmit, styles.btnSuccess)}>Забронировать еще</button>
		</form>
	);
};

export default Result;
