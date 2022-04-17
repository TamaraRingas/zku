import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract} from 'ethers';
const {ethers} = require("hardhat"); 
const { expect } = require("chai");

describe.only("Storage tests", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let StorageArtifacts;
  let store: Contract;

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();
    StorageArtifacts = await ethers.getContractFactory("NumberStorage");
    store = await StorageArtifacts.deploy();

    await barn
      .connect(owner)
      .mint(owner.address, ethers.utils.parseEther("1000000000"));

    await barn.connect(owner).mint(owner.address, constants.ERC20.tokenSupply);
  });

  describe("Try Retrieve Before Storing", async () => {
    await expect(store.connect(alice).retrieve().to.revertWith("There is no number to retrieve"));
  });

  describe("It should store number correctly", async () => {
    
  });

  describe("It should retrieve number correctly", async () => {
    
  });
});