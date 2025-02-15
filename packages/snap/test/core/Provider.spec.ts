/* eslint-disable no-restricted-globals */
import { InternalError } from '@metamask/snaps-sdk';
import type { Transaction, Request as XrplRequest } from 'xrpl';

import { Provider } from '../../src/core/Provider';

describe('Provider', () => {
  const uri = 'https://s.altnet.rippletest.net:51234';
  let provider: Provider;

  beforeEach(() => {
    provider = new Provider(uri);
    jest.clearAllMocks();
  });

  describe('Autofill', () => {
    test('Autofills a transaction with the fee and the sequence number', async () => {
      const mockedResponse = {
        result: {
          drops: {
            open_ledger_fee: 12,
          },
          account_data: {
            Sequence: 1,
          },
        },
      };
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockedResponse),
      } as any);

      const mockedTransaction = {};

      const res = await provider.autofill(mockedTransaction as Transaction);
      expect(res).toEqual({
        Fee: 12,
        Sequence: 1,
      });
    });

    test('Throws an error if the request fails', async () => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue({ result: { error: 'error' } }),
      } as any);

      await expect(provider.autofill({} as Transaction)).rejects.toThrow(InternalError);
    });
  });

  describe('Request', () => {
    const req: XrplRequest = {
      command: 'account_info',
      account: 'rEXAMPLE',
    };
    test('Should make a request an return a response', async () => {
      const mockedResponse = { result: 'result' };

      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockedResponse),
      } as any);

      const res = await provider.request(req);

      expect(res).toEqual(mockedResponse);
    });

    test('Should throw an error if the request fails', async () => {
      const errorResponse = {
        result: {
          error: 'actNotFound',
        },
      };

      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(errorResponse),
      } as any);

      await expect(provider.request(req)).rejects.toThrow(new InternalError('Error calling account_info - actNotFound'));
    });
  });

  describe('Changes node correctly', () => {
    test('Changes the node correctly', async () => {
      expect(provider.node).toEqual(uri);
      await provider.changeNode('newNode');
      expect(provider.node).toEqual('newNode');
    });
  });
});
