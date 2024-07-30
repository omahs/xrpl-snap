import { InvalidParamsError, UserRejectedRequestError } from '@metamask/snaps-sdk';

import type { Network } from '../../../src/core/StateManager';
import { ChangeNetworkDialog } from '../../../src/dialog/network/ChangeNetworkDialog';
import { ChangeNetworkHandler } from '../../../src/handler/network/ChangeNetworkHandler';
import { ProviderMock } from '../../__mocks__/core/Provider.mock';
import { StateManagerMock } from '../../__mocks__/core/StateManager.mock';
import { WalletMock } from '../../__mocks__/core/Wallet.mock';

describe('ChangeNetworkHandler', () => {
  let handler: ChangeNetworkHandler;
  const walletMock = new WalletMock();
  const stateManagerMock = new StateManagerMock();
  const providerMock = new ProviderMock();
  const mockedContext = { wallet: walletMock, stateManager: stateManagerMock, provider: providerMock };

  beforeEach(() => {
    handler = new ChangeNetworkHandler(mockedContext as any);
    jest.clearAllMocks();
  });

  test('should change network and return the network object when the request is accepted', async () => {
    const networks = [
      { chainId: 1, nodeUrl: 'https://mainnet.node' },
      { chainId: 2, nodeUrl: 'https://testnet.node' },
    ];
    stateManagerMock.get.mockResolvedValue({ networks });

    const mockedChangeNetworkDialog = jest.fn().mockResolvedValue(true);
    jest.spyOn(ChangeNetworkDialog, 'prompt').mockImplementation(mockedChangeNetworkDialog);

    const params = { chainId: 1 };
    const result = await handler.handle('https://origin', params);

    expect(result).toEqual(networks[0]);
    expect(mockedChangeNetworkDialog).toHaveBeenCalledTimes(1);
    expect(stateManagerMock.set).toHaveBeenCalledWith({ activeNetwork: networks[0] });
    expect(providerMock.changeNode).toHaveBeenCalledWith((networks[0] as Network).nodeUrl);
  });

  test('should throw InvalidParamsError when the network is not found', async () => {
    const networks = [
      { chainId: 1, nodeUrl: 'https://mainnet.node' },
      { chainId: 2, nodeUrl: 'https://testnet.node' },
    ];
    stateManagerMock.get.mockResolvedValue({ networks });
    const mockedChangeNetworkDialog = jest.fn().mockResolvedValue(true);
    jest.spyOn(ChangeNetworkDialog, 'prompt').mockImplementation(mockedChangeNetworkDialog);

    const params = { chainId: 1999 };

    await expect(handler.handle('https://origin', params)).rejects.toThrow(InvalidParamsError);
    expect(stateManagerMock.get).toHaveBeenCalledTimes(1);
    expect(mockedChangeNetworkDialog).not.toHaveBeenCalled();
  });

  test('should throw UserRejectedRequestError when the request is rejected', async () => {
    const networks = [
      { chainId: 1, nodeUrl: 'https://mainnet.node' },
      { chainId: 2, nodeUrl: 'https://testnet.node' },
    ];
    stateManagerMock.get.mockResolvedValue({ networks });

    const mockedChangeNetworkDialog = jest.fn().mockResolvedValue(false);
    jest.spyOn(ChangeNetworkDialog, 'prompt').mockImplementation(mockedChangeNetworkDialog);

    const params = { chainId: 1 };

    await expect(handler.handle('https://origin', params)).rejects.toThrow(UserRejectedRequestError);
    expect(mockedChangeNetworkDialog).toHaveBeenCalledTimes(1);
    expect(stateManagerMock.set).not.toHaveBeenCalled();
    expect(providerMock.changeNode).not.toHaveBeenCalled();
  });
});