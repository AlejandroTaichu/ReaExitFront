export class Account {
    accountId: number = 0;
    userId: number = 0;
    Balance: number = 0;
    customNotes:string = '';
}

export enum AccountType
{
    Savings,
    Checking,
}
