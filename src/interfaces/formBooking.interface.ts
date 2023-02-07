export interface formBookingCostCalculationModel {
	numberOfAdults: number;
	amountOfChildren: number;
	amountOfChildrenUntilFive: number;
	typeRoom: string;
	numberOfNights: number;
	insurance: [];
	total: number;
}

export interface formBookingBuyerDataModel {
	surname: string;
	name: string;
	patronymic: string;
	phone: string;
	birthday: string;
}
