import FormBooking from './components/FormBooking/FormBooking';

import styles from './App.module.css';

const App = (): JSX.Element => {
	return (
		<div className={styles.app}>
			<FormBooking />
		</div>
	);
};

export default App;
