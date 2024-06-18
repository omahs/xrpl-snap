import type { Component } from '@metamask/snaps-sdk';
import type { SetRegularKey, Transaction } from 'xrpl';

import { AccountComponent, FeeComponent, RegularKeyComponent, TransactionTypeComponent } from '../../TransactionComponents';
import type { TransactionDialogStrategy } from '../TransactionDialogStrategies.types';

export class SetRegularKeyDialogStrategy implements TransactionDialogStrategy<SetRegularKey> {
  transactionType: Transaction['TransactionType'] = 'SetRegularKey';

  /**
   * Builds the body of the dialog for a SetRegularKeyDialogStrategy transaction.
   * Supported fields:
   * - TransactionType
   * - Account
   * - RegularKey (string)
   * - Fee XRPAmount
   *
   * @param transaction - The transaction to build the dialog for
   * @returns Components to render in the dialog
   */
  buildBody(transaction: SetRegularKey): Component[] {
    return [
      ...TransactionTypeComponent(this.transactionType),
      ...AccountComponent(transaction.Account),
      ...RegularKeyComponent(transaction.RegularKey),
      ...FeeComponent(transaction.Fee),
    ];
  }
}