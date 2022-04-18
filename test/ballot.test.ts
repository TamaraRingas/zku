import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract} from 'ethers';
const {ethers} = require("hardhat"); 
const { expect } = require("chai");

describe("Ballot Tests",  () => {
  let alice: SignerWithAddress;
  let BallotArtifacts;
  let ballot: Contract;
  
  beforeEach(async () => {
    alice = await ethers.getSigners();
    BallotArtifacts = await ethers.getContractFactory("Ballot");
    ballot = await BallotArtifacts.deploy();
  });
});