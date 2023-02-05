import {
	MIN,
	ENTER_VALUE_GREATER_THAN_1,
	REQUIRED,
	THIS_FIELD_IS_REQUIRED,
	MAX,
	ENTER_VALUE_LESS_THAN_3,
} from './../components/FormBooking/FormBookingConstants';

export const validateErrors = (type: string) => {
	switch (type) {
		case MIN:
			return ENTER_VALUE_GREATER_THAN_1;
		case REQUIRED:
			return THIS_FIELD_IS_REQUIRED;
		case MAX:
			return ENTER_VALUE_LESS_THAN_3;
	}
};
