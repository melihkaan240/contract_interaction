import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { Text, Button, Stack, Input, VStack } from "@chakra-ui/react";
import { useSetAccount } from "@/hooks/useSetAccount";
import { useStorken } from "@/data/storken";
import { useState } from "react";
import contract from "../hooks/useContract";
export default function Home() {
  const [account, setAccount] = useStorken<any>("account");
  const [balance, setBalance] = useStorken<any>("balance");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState<any>();
  const useContract = contract();
  const fauset = async () => {
    const txn = await useContract.mint(address, amount);
    await txn.wait();
  };
  // öteki fonskiyon şimdilik kullanılmıyor
  const totalBalance = async () => {
    const txn = await useContract.mint(address);
    await txn.wait();
  };
  return (
    <>
      <Text>contract addres:{account}</Text>
      <Text>contract balance:{balance} </Text>
      <Button w={"10vw"} h={"10vh"} bgColor={"red"} onClick={useSetAccount()}>
        {" "}
        dene{" "}
      </Button>

      <Stack spacing={3}>
        <VStack>
          <Input
            placeholder="Address size"
            size="lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button bgColor={"blue"} onClick={fauset}>
            fauset
          </Button>
        </VStack>
        <VStack>
          <Input
            placeholder="amount size"
            size="lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button bgColor={"yellow"}>balance control</Button>
        </VStack>
      </Stack>
    </>
  );
}
