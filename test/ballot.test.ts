import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract} from 'ethers';
const {ethers} = require("hardhat"); 
const { expect } = require("chai");

describe("Ballot Tests",  () => {
  let alice: SignerWithAddress;
  let BallotArtifacts;
  let ballot: Contract;
  
  const fastForward = async (seconds: number) => {
  await ethers.provider.send("evm_increaseTime", [seconds]);
  await ethers.provider.send("evm_mine", []);
  };

  beforeEach(async () => {
    alice = await ethers.getSigners();
    BallotArtifacts = await ethers.getContractFactory("Ballot");
    ballot = await BallotArtifacts.deploy();
  }); 

  describe("Try to vote after 5 minutes", async () => {
    await fastForward(305);
    await expect(ballot.connect(alice).vote().to.revertWith("Voting has ended"));
  });
});