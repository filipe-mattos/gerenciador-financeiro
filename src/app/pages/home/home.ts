import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/interfaces/trasaction';
import { TransactionType } from '../../shared/transaction/enums/transactionType';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  transactions = signal<Transaction[]>([
    {title: 'Aluguel', value: 500, type: TransactionType.OUTCOME },
    {title: 'Energia', value: 150, type: TransactionType.OUTCOME },
    {title: 'Salario', value: 2800, type: TransactionType.INCOME },
    {title: 'Internet', value: 130, type: TransactionType.OUTCOME },
  ])
}
