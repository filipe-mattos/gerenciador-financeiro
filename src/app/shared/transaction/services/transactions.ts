import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../interfaces/trasaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Transaction[]>(
      'http://localhost:3000/transactions',
    );
  }
}
