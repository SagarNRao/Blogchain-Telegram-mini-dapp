"use client";

import React, { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Card, CardTitle } from "@/components/ui/card";

const ContractDataFetcher = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sdk = new ThirdwebSDK("sepolia");
        const contract = await sdk.getContract(
          "0x9Cb6B628a7ed40A2d112A9720A5E504E316506F0"
        );
        const result = await contract.call("getAllposts");
        setData(result);
      } catch (error) {
        console.error("Failed to fetch contract data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const addresses: string[] = [];
  const postsarr: string[] = [];

  if (data) {
    data.forEach((item) => {
      addresses.push(item[1]);
      postsarr.push(item[2]);
    });
  }

  console.log(addresses);
  console.log(postsarr);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;
  else {
  }

  return (
    <div>
      {postsarr.map((post, index) => (
        <Card key={index}>
          <CardTitle>{post}</CardTitle>
        </Card>
      ))}
    </div>
  );
};

export default ContractDataFetcher;
