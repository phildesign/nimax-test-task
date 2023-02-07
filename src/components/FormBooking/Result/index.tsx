import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import successIcon from './success-icon.svg';

import styles from '../FormBooking.module.css';

const Result = (): JSX.Element => {
	const navigate = useNavigate();

	const handleClickPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate('/nimax-test-task');
	};

	return (
		<div className={styles.formBookingStep}>
			<img src={successIcon} alt="success-icon" className={styles.successIcon} />
			<h1 className={styles.successTitle}>Заказ успешно оплачен.</h1>
			<button className={cn(styles.btnSubmit, styles.btnSuccess)} onClick={handleClickPrev}>
				Забронировать еще
			</button>
		</div>
	);
};

export default Result;
