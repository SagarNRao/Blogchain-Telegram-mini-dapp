"use client";

import React, { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContractDataFetcher = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sdk = new ThirdwebSDK("sepolia");
        const contract = await sdk.getContract(
          "0x5FbDB2315678afecb367f032d93F642f64180aa3"
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
  }, []);

  const addresses: string[] = [];
  const postsarr: { content: string; isVerified: boolean }[] = [];

  if (data) {
    data.forEach((item) => {
      addresses.push(item[1]);
      postsarr.push({ content: item[2], isVerified: item[3] });
    });
  }

  console.log(addresses);
  console.log(postsarr);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div id="re">
      {postsarr.map((post, index) => (
        <Card key={index}>
          <CardTitle className="p-5 pb-1">post
          {post.isVerified && <Badge>Verified</Badge>}
          {!post.isVerified && <Badge>Not Verified</Badge>}
          </CardTitle>
          <CardContent className="p-5">
            {post.content}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContractDataFetcher;
