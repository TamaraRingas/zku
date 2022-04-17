//SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract NumberStorage {

  uint256 number;
  bool stored;

  // Sets number to argument passed in
  function storeNumber(uint256 _number) external {
    number = _number;
    stored = true;
  }

  // Returns the number, if one has been stored (the modifier checks this)
  function retrieveNumber() external numberStored returns (uint256) {
    return number;
  }

  // Checks if a number has been stored yet
  modifier numberStored() {
    require(stored, "There is no number to retrieve");
    _;
  }
}