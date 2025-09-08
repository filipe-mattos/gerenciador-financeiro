import { TransactionType } from "../enums/transactionType";


export interface Transaction {
  title: string;
  value: number;
  type: TransactionType;
}
