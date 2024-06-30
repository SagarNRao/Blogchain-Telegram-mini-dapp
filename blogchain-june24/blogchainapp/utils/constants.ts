import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
export const client = createThirdwebClient({
  clientId: clientId as string,
});

export const chain = defineChain(11155111);
const contractAddress = "0x9Cb6B628a7ed40A2d112A9720A5E504E316506F0";

const abi = [
  {
    type: "event",
    name: "Addpost",
    inputs: [
      {
        type: "address",
        name: "recipient",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "postId",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Deletepost",
    inputs: [
      {
        type: "uint256",
        name: "postId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "bool",
        name: "isDeleted",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "addpost",
    inputs: [
      {
        type: "string",
        name: "postText",
        internalType: "string",
      },
      {
        type: "bool",
        name: "isDeleted",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllposts",
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "uint256",
            name: "id",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "username",
            internalType: "address",
          },
          {
            type: "string",
            name: "postText",
            internalType: "string",
          },
          {
            type: "bool",
            name: "isDeleted",
            internalType: "bool",
          },
        ],
        internalType: "struct ValidityContract.post[]",
      },
    ],
    stateMutability: "view",
  },
] as const;

export const ValidityContract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: abi,
  });
