//SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract HelloWorld {

  uint256 number;
  bool stored;

  function storeNumber(uint256 _number) external {
    number = _number;
    stored = true;
  }

  function retrieveNumber() external numberStored returns (bool) {
    return number;
  }

  modifier numberStored() {
    require(stored, "There is no number to retrieve");
    _;
  }
}