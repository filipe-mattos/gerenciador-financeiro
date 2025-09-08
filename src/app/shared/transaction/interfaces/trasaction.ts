import { TransactionType } from '../enums/transactionType';

export interface Transaction {
  id: number;
  title: string;
  value: number;
  type: TransactionType;
}
