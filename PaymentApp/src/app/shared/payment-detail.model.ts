export class PaymentDetail {
    id: number;
    cardOwnerName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;

    constructor(){
        this.id = 0;
        this.cardOwnerName = '';
        this.cardNumber = '';
        this.expirationDate = '';
        this.securityCode = '';
    }
}
