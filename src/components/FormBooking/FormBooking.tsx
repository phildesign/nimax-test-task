import { Route, Routes } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';

import styles from './FormBooking.module.css';

const FormBooking = (): JSX.Element => {
	return (
		<div className={styles.formBooking}>
			<Routes>
				<Route path="/" element={<Step1 />} />
				<Route path="/step2" element={<Step2 />} />
				<Route path="/step3" element={<Step3 />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</div>
	);
};

export default FormBooking;
