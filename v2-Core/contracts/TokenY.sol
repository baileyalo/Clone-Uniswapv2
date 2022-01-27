pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TokenY is ERC20Detailed, ERC20 {
  constructor() ERC20Detailed('Token Y', 'TKY', 18) public {  

  } 
}