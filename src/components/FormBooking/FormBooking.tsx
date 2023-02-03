import { Route, Routes } from 'react-router-dom';
import Result from './Result';
import Step1 from './Step1';
import Step2 from './Step2';

import styles from './FormBooking.module.css';

const FormBooking = (): JSX.Element => {
	return (
		<div className={styles.formBooking}>
			<h1 className={styles.title}>Бронирование номера</h1>
			<Routes>
				<Route path="/" element={<Step1 />} />
				<Route path="/step2" element={<Step2 />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</div>
	);
};

export default FormBooking;
