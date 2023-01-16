import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useStorken } from "../data/storken";
import abi from "../abi.json";
const useContract = () => {
  const [contract, Contract] = useStorken<any>("contract");
  const contractAddress = "0x7B5beCf5f3680ed58e81f753211cE843fa078012";
  const contractAbi = abi.abi;
  useEffect(() => {
    const provider: any = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const singer = provider.getSigner();
    const _contract = new ethers.Contract(contractAddress, contractAbi, singer);
    Contract.set(_contract);
  }, []);

  return contract;
};

export default useContract;
