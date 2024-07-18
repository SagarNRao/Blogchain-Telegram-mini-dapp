"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import MyValContract from "./../../../artifacts-zk/contracts/Contract.sol/MyValContract.json";
import MyTokenContract from "./../../../artifacts-zk/contracts/MyTokenContract.sol/MyTokenContract.json";


interface Props {
  postId: number;
  address: string;
  handleClick: (postId: number, address: string) => Promise<void>;
}

const contractABI = MyValContract.abi;
const contractAddress = "0x62A71C820A229c38C9fc40a8DC71971EA1B7A034";

// ------------------------------------------------------------------

const tokenABI = MyTokenContract.abi;
const tokenAddress =
  "0xcC571B20D246586aA1D22F64Aebd962879DC5112";

const ContractDataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      // Initialize ethers provider
      const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/e84a2946755345209aa59f4a1645f14a"
      );

      // Create a contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, provider);

      try {
        const result = await contract.getAllposts();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Failed to fetch contract data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data from contract

    fetchData();
  }, []);

  const handleverify = async (postId: string) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, tokenABI, signer);

      const tx = await contract.validatepost(postId);
      console.log("validated");
    } catch (error) {
      console.log(error);
    }
  };

  const postids: string[] = [];
  const addresses: string[] = [];
  const postsarr: { content: string; isVerified: boolean; postId: string }[] =
    [];

  if (data) {
    data.forEach((item: any) => {
      addresses.push(item[1]);
      postsarr.push({ content: item[2], isVerified: item[3], postId: item[0] });
    });
  }

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <>
      <div id="re">
        <div className="flex justify-center p-1">
          <Button onClick={fetchData}>Get posts</Button>
        </div>
        {postsarr.map((post, index) => (
          <Card key={index} className="mb-4">
            <CardTitle className="p-5 pb-1">
              <div className="flex justify-between items-center">
                Post Title
                {post.isVerified && <Badge>Verified</Badge>}
                {!post.isVerified && <Badge>Not Verified</Badge>}
              </div>
              <div className="p-2"></div>
              <hr className="ml-[-1.3rem] mr-[-1.3rem]"></hr>
            </CardTitle>
            <CardDescription className="p-5">
              {post.content}
              <div className="p-1"></div>
            </CardDescription>
            <hr></hr>
            <div className="p-1"></div>
            <CardFooter>
              <Button>Approve</Button>
              <div className="p-1"></div>
              <Button onClick={() => handleverify(post.postId)}>Verify</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};
export default ContractDataFetcher;
