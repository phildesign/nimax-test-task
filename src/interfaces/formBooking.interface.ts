// export interface FormBookingModel {}

export interface FormBookingStep1Model {
	numberOfAdults: number;
	amountOfChildren: number;
	amountOfChildrenUntilFive: number;
	typeRoom: string;
	numberOfNights: number;
	insurance: boolean;
	total: number;
}

export interface FormBookingStep2Model {
	surname: string;
	name: string;
	patronymic: string;
	phone: string;
	date: string;
}
