//SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract HelloWorld {

  uint256 number;

  function storeNumber(uint256 _number) external {
    number = _number;
  }

  function retrieveNumber() external returns (bool) {
    return number;
  }
}