import { Route, Routes } from 'react-router-dom';
import CostCalculation from './CostCalculation';
import BuyerData from './BuyerData';
import ConfirmationOrder from './ConfirmationOrder';
import Result from './Result';

import styles from './FormBooking.module.css';

const FormBooking = (): JSX.Element => {
	return (
		<div className={styles.formBooking}>
			<Routes>
				<Route path="/" element={<CostCalculation />} />
				<Route path="/step2" element={<BuyerData />} />
				<Route path="/step3" element={<ConfirmationOrder />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</div>
	);
};

export default FormBooking;
