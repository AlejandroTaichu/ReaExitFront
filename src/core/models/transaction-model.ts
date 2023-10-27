export class Transaction {
    accountId: number = 0;
    amount: number = 0;
    TransactionDescription: string = '';
    transactionType:number=0;

}

export enum  TransactionType
{
    Deposit,
    Withdrawal
}
