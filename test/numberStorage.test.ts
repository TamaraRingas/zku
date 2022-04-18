import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract} from 'ethers';
const {ethers} = require("hardhat"); 
const { expect } = require("chai");

describe.only("Storage tests", () => {
  let alice: SignerWithAddress;
  let StorageArtifacts;
  let store: Contract;

  beforeEach(async () => {
    alice = await ethers.getSigners();
    StorageArtifacts = await ethers.getContractFactory("NumberStorage");
    store = await StorageArtifacts.deploy();
  });

  describe("Try Retrieve Before Storing", async () => {
    await expect(store.connect(alice).retrieveNumber().to.revertWith("There is no number to retrieve"));
  });

  describe("It should store number correctly", async () => {
    await store.connect(alice).storeNumber(4);
    await expect(store.number).to.equal(4);
  });

  describe("It should retrieve number correctly", async () => {
    await expect(store.connect(alice).retriveNumber().to.be(4));
  });
});