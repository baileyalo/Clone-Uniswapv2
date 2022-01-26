import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import UniswapV2Router02 from './contracts/UniswapV2Router02.json';
//import Migrations from './contracts/Migrations.json';
//import Migrations1 from './contracts/Migrations1.json';
import WETH from './contracts/WETH.json';

const conBlockchain = () =>
  new Promise( async (resolve, reject) => {

    let provider = await detectEthereumProvider();

    if(provider) {

      await provider.request({ method: 'eth_requestAccounts' });

      const networkId = await provider.request({ method: 'net_version' })

      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();

      const UniswapV2Router02 = new Contract(
        UniswapV2Router02.networks[networkId].address,
        UniswapV2Router02.abi,
        signer
      );
      resolve({UniswapV2Router02});
      return;
    }

        const WETH = new Contract(
        WETH.networks[networkId].address,
        WETH.abi,
        signer
      );
      resolve({WETH});
      return;
    }
    reject('Install Metamask');
  });

   /* const Migrations = new Contract(
        Migrations.networks[networkId].address,
        Migrations.abi,
        signer
      );
      resolve({Migrations});
      return;
    }
    const Migrations1 = new Contract(
        Migrations1.networks[networkId].address,
        Migrations1.abi,
        signer
      );
      resolve({Migrations1});
      return;
    }
    */

export default conBlockchain;