import React from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";

const contractABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "MyValContract",
  "sourceName": "contracts/Contract.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "postId",
          "type": "uint256"
        }
      ],
      "name": "Addpost",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "postId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isDeleted",
          "type": "bool"
        }
      ],
      "name": "Deletepost",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "postId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "PostApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "postId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "liker",
          "type": "address"
        }
      ],
      "name": "PostLiked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "postId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        }
      ],
      "name": "Validatepost",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "postText",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isDeleted",
          "type": "bool"
        }
      ],
      "name": "addpost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "approvals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "new_expert",
          "type": "address"
        }
      ],
      "name": "ascention",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "isExpert",
          "type": "bool"
        }
      ],
      "name": "createAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_postId",
          "type": "uint256"
        }
      ],
      "name": "expertapprove",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getfeed",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "username",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "postText",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isDeleted",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isVerified",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            }
          ],
          "internalType": "struct MyValContract.post[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isExpertcheck",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_postId",
          "type": "uint256"
        }
      ],
      "name": "likePost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "likes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "postRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenaddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userAccs",
      "outputs": [
        {
          "internalType": "address",
          "name": "username",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isExpert",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_postId",
          "type": "uint256"
        }
      ],
      "name": "validatepost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50600180546001600160a01b0319163317905560405161002f90610071565b604051809103906000f08015801561004b573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905561007e565b610c26806111aa83390190565b61111d8061008d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638834c8911161008c578063b8c4e52111610066578063b8c4e52114610267578063bc7bf1c714610327578063c90858751461033a578063d4ccd5f31461035a57600080fd5b80638834c8911461022c5780638da5cb5b1461023f578063a92a7fb71461025257600080fd5b8063671033ea116100c8578063671033ea14610162578063725009d3146101b65780637e9dffe6146101c957806380789c89146101e957600080fd5b8063204ff240146100ef5780633feff76d1461010457806363035f6614610134575b600080fd5b6101026100fd366004610c98565b61036d565b005b600054610117906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610154610142366004610c98565b60076020526000908152604090205481565b60405190815260200161012b565b610197610170366004610cb1565b6008602052600090815260409020546001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b03909316835290151560208301520161012b565b6101026101c4366004610c98565b6104a0565b6101546101d7366004610c98565b60066020526000908152604090205481565b61021c6101f7366004610cb1565b6001600160a01b0316600090815260086020526040902054600160a01b900460ff1690565b604051901515815260200161012b565b61010261023a366004610cb1565b610529565b600154610117906001600160a01b031681565b61025a6105e5565b60405161012b9190610ce1565b610102610275366004610e05565b506040805180820182523380825260016020808401828152600093845260089091529382209251835494516001600160a01b039182166001600160a81b031996871617600160a01b911515820217855560048054938401815590935283547f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b9092018054929091166001600160a01b031983168117825593549190941690921760ff9282900492909216151502179055565b610102610335366004610c98565b6108a1565b610154610348366004610c98565b60026020526000908152604090205481565b610102610368366004610e38565b610a86565b336000908152600860205260409020546001600160a01b03166103ab5760405162461bcd60e51b81526004016103a290610efa565b60405180910390fd5b60008181526007602052604081208054916103c583610f44565b9091555050600081815260076020526040902054600a1015610464576001600382815481106103f6576103f6610f6b565b906000526020600020906006020160030160016101000a81548160ff0219169083151502179055507fb1c8a09f3f65c01ce2ad5471f151a4d0ca61d365bcd286c0f0041845538f2b0981600160405161045b9291909182521515602082015260400190565b60405180910390a15b604080518281523360208201527fc6c773bb48fb8d38ada891d09df01af1f307f2a1bc38bb513c5cb1950150038191015b60405180910390a150565b336000908152600860205260409020546001600160a01b03166104d55760405162461bcd60e51b81526004016103a290610efa565b60008181526006602052604081208054916104ef83610f44565b9091555050604080518281523360208201527fcf765d6f163c9b0d832e2a94f4c8e9bffd32a2c3ca5fdbb8cc67b5fe1441f4139101610495565b6001546001600160a01b031633146105725760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b60448201526064016103a2565b6001546001600160a01b031633146105bb5760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b60448201526064016103a2565b6001600160a01b03166000908152600860205260409020805460ff60a01b1916600160a01b179055565b60035460609060009067ffffffffffffffff81111561060657610606610e22565b60405190808252806020026020018201604052801561063f57816020015b61062c610c4e565b8152602001906001900390816106245790505b5090506000805b6003548110156107ec576003818154811061066357610663610f6b565b6000918252602082206003600690920201015460ff16151590036107da576003818154811061069457610694610f6b565b90600052602060002090600602016040518060e0016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820180546106f690610f81565b80601f016020809104026020016040519081016040528092919081815260200182805461072290610f81565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b5050509183525050600382015460ff8082161515602084015261010090910416151560408201526004820154606082015260059091015460809091015283518490849081106107c0576107c0610f6b565b602002602001018190525081806107d690610f44565b9250505b806107e481610f44565b915050610646565b5060008167ffffffffffffffff81111561080857610808610e22565b60405190808252806020026020018201604052801561084157816020015b61082e610c4e565b8152602001906001900390816108265790505b50905060005b828110156108995783818151811061086157610861610f6b565b602002602001015182828151811061087b5761087b610f6b565b6020026020010181905250808061089190610f44565b915050610847565b509392505050565b336000908152600860205260409020546001600160a01b03166108d65760405162461bcd60e51b81526004016103a290610efa565b600381815481106108e9576108e9610f6b565b906000526020600020906006020160030160019054906101000a900460ff161561094d5760405162461bcd60e51b81526020600482015260156024820152741c1bdcdd08185b1c9958591e481d995c9a599a5959605a1b60448201526064016103a2565b600081815260076020526040902054600a1015610a835760016003828154811061097957610979610f6b565b906000526020600020906006020160030160016101000a81548160ff0219169083151502179055507fb1c8a09f3f65c01ce2ad5471f151a4d0ca61d365bcd286c0f0041845538f2b098160016040516109de9291909182521515602082015260400190565b60405180910390a160008181526005602090815260408083205460029092528083206064908190559254905163a9059cbb60e01b81526001600160a01b03928316600482018190526024820185905293929091169063a9059cbb906044016020604051808303816000875af1158015610a5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7f9190610fbb565b5050505b50565b336000908152600860205260409020546001600160a01b0316610abb5760405162461bcd60e51b81526004016103a290610efa565b600380546040805160e0810182528281523360208201908152918101868152851515606083015260006080830181905260a0830181905260c0830181905260018501865594855281517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6006860290810191825593517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c850180546001600160a01b0319166001600160a01b039092169190911790559051939493919290917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d90910190610ba99082611027565b506060820151600382018054608085015115156101000261ff00199315159390931661ffff199091161791909117905560a0820151600482015560c0909101516005918201556000838152602091825260409081902080546001600160a01b0319163390811790915581519081529182018490527f4ea9a4c2644295403d8e347c48692cc92bf605a5fb4b31e88976a41e5b1199c2910160405180910390a150505050565b6040518060e001604052806000815260200160006001600160a01b031681526020016060815260200160001515815260200160001515815260200160008152602001600081525090565b600060208284031215610caa57600080fd5b5035919050565b600060208284031215610cc357600080fd5b81356001600160a01b0381168114610cda57600080fd5b9392505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610dd857898403603f19018652825180518552888101516001600160a01b0316898601528781015160e089870181905281519087018190528491905b80831015610d68578183018c01518884016101000152918b0191610d49565b61010092508583828a0101526060915081840151610d89838a018215159052565b506080915081840151610d9f838a018215159052565b5060a0848101519089015260c093840151938801939093525096890196601f909101601f19169094019093019291870191600101610d09565b50919998505050505050505050565b8015158114610a8357600080fd5b8035610e0081610de7565b919050565b600060208284031215610e1757600080fd5b8135610cda81610de7565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610e4b57600080fd5b823567ffffffffffffffff80821115610e6357600080fd5b818501915085601f830112610e7757600080fd5b813581811115610e8957610e89610e22565b604051601f8201601f19908116603f01168101908382118183101715610eb157610eb1610e22565b81604052828152886020848701011115610eca57600080fd5b826020860160208301376000602084830101528096505050505050610ef160208401610df5565b90509250929050565b6020808252602a908201527f596f75206e65656420616e206163636f756e7420746f20706572666f726d20746040820152693434b99030b1ba34b7b760b11b606082015260800190565b600060018201610f6457634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680610f9557607f821691505b602082108103610fb557634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610fcd57600080fd5b8151610cda81610de7565b601f82111561102257600081815260208120601f850160051c81016020861015610fff5750805b601f850160051c820191505b8181101561101e5782815560010161100b565b5050505b505050565b815167ffffffffffffffff81111561104157611041610e22565b6110558161104f8454610f81565b84610fd8565b602080601f83116001811461108a57600084156110725750858301515b600019600386901b1c1916600185901b17855561101e565b600085815260208120601f198616915b828110156110b95788860151825594840194600190910190840161109a565b50858210156110d75787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212206767a55c99f0a32bb2df5d0b7bd5bfbc82f5dcefefa71a273d402b4279a43f4264736f6c6343000814003360806040523480156200001157600080fd5b506040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b81525081600390816200005f9190620002cd565b5060046200006e8282620002cd565b505050620000a83362000086620000ae60201b60201c565b6200009390600a620004ae565b620000a290620f4240620004c6565b620000b3565b620004f6565b601290565b6001600160a01b038216620000e35760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000f160008383620000f5565b5050565b6001600160a01b03831662000124578060026000828254620001189190620004e0565b90915550620001989050565b6001600160a01b03831660009081526020819052604090205481811015620001795760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000da565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620001b657600280548290039055620001d5565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200021b91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200025357607f821691505b6020821081036200027457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c857600081815260208120601f850160051c81016020861015620002a35750805b601f850160051c820191505b81811015620002c457828155600101620002af565b5050505b505050565b81516001600160401b03811115620002e957620002e962000228565b6200030181620002fa84546200023e565b846200027a565b602080601f831160018114620003395760008415620003205750858301515b600019600386901b1c1916600185901b178555620002c4565b600085815260208120601f198616915b828110156200036a5788860151825594840194600190910190840162000349565b5085821015620003895787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003f0578160001904821115620003d457620003d462000399565b80851615620003e257918102915b93841c9390800290620003b4565b509250929050565b6000826200040957506001620004a8565b816200041857506000620004a8565b81600181146200043157600281146200043c576200045c565b6001915050620004a8565b60ff84111562000450576200045062000399565b50506001821b620004a8565b5060208310610133831016604e8410600b841016171562000481575081810a620004a8565b6200048d8383620003af565b8060001904821115620004a457620004a462000399565b0290505b92915050565b6000620004bf60ff841683620003f8565b9392505050565b8082028115828204841417620004a857620004a862000399565b80820180821115620004a857620004a862000399565b61072080620005066000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce567146100fe57806370a082311461010d57806395d89b4114610136578063a9059cbb1461013e578063dd62ed3e1461015157600080fd5b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100d957806323b872dd146100eb575b600080fd5b6100a061018a565b6040516100ad919061056a565b60405180910390f35b6100c96100c43660046105d4565b61021c565b60405190151581526020016100ad565b6002545b6040519081526020016100ad565b6100c96100f93660046105fe565b610236565b604051601281526020016100ad565b6100dd61011b36600461063a565b6001600160a01b031660009081526020819052604090205490565b6100a061025a565b6100c961014c3660046105d4565b610269565b6100dd61015f36600461065c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101999061068f565b80601f01602080910402602001604051908101604052809291908181526020018280546101c59061068f565b80156102125780601f106101e757610100808354040283529160200191610212565b820191906000526020600020905b8154815290600101906020018083116101f557829003601f168201915b5050505050905090565b60003361022a818585610277565b60019150505b92915050565b600033610244858285610289565b61024f85858561030c565b506001949350505050565b6060600480546101999061068f565b60003361022a81858561030c565b610284838383600161036b565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461030657818110156102f757604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6103068484848403600061036b565b50505050565b6001600160a01b03831661033657604051634b637e8f60e11b8152600060048201526024016102ee565b6001600160a01b0382166103605760405163ec442f0560e01b8152600060048201526024016102ee565b610284838383610440565b6001600160a01b0384166103955760405163e602df0560e01b8152600060048201526024016102ee565b6001600160a01b0383166103bf57604051634a1406b160e11b8152600060048201526024016102ee565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561030657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161043291815260200190565b60405180910390a350505050565b6001600160a01b03831661046b57806002600082825461046091906106c9565b909155506104dd9050565b6001600160a01b038316600090815260208190526040902054818110156104be5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102ee565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166104f957600280548290039055610518565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161055d91815260200190565b60405180910390a3505050565b600060208083528351808285015260005b818110156105975785810183015185820160400152820161057b565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105cf57600080fd5b919050565b600080604083850312156105e757600080fd5b6105f0836105b8565b946020939093013593505050565b60008060006060848603121561061357600080fd5b61061c846105b8565b925061062a602085016105b8565b9150604084013590509250925092565b60006020828403121561064c57600080fd5b610655826105b8565b9392505050565b6000806040838503121561066f57600080fd5b610678836105b8565b9150610686602084016105b8565b90509250929050565b600181811c908216806106a357607f821691505b6020821081036106c357634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561023057634e487b7160e01b600052601160045260246000fdfea2646970667358221220fb1aafc40f20202f72ab2a6c6f3eea00272cf67b4bd884aceefd51c22d91992564736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638834c8911161008c578063b8c4e52111610066578063b8c4e52114610267578063bc7bf1c714610327578063c90858751461033a578063d4ccd5f31461035a57600080fd5b80638834c8911461022c5780638da5cb5b1461023f578063a92a7fb71461025257600080fd5b8063671033ea116100c8578063671033ea14610162578063725009d3146101b65780637e9dffe6146101c957806380789c89146101e957600080fd5b8063204ff240146100ef5780633feff76d1461010457806363035f6614610134575b600080fd5b6101026100fd366004610c98565b61036d565b005b600054610117906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610154610142366004610c98565b60076020526000908152604090205481565b60405190815260200161012b565b610197610170366004610cb1565b6008602052600090815260409020546001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b03909316835290151560208301520161012b565b6101026101c4366004610c98565b6104a0565b6101546101d7366004610c98565b60066020526000908152604090205481565b61021c6101f7366004610cb1565b6001600160a01b0316600090815260086020526040902054600160a01b900460ff1690565b604051901515815260200161012b565b61010261023a366004610cb1565b610529565b600154610117906001600160a01b031681565b61025a6105e5565b60405161012b9190610ce1565b610102610275366004610e05565b506040805180820182523380825260016020808401828152600093845260089091529382209251835494516001600160a01b039182166001600160a81b031996871617600160a01b911515820217855560048054938401815590935283547f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b9092018054929091166001600160a01b031983168117825593549190941690921760ff9282900492909216151502179055565b610102610335366004610c98565b6108a1565b610154610348366004610c98565b60026020526000908152604090205481565b610102610368366004610e38565b610a86565b336000908152600860205260409020546001600160a01b03166103ab5760405162461bcd60e51b81526004016103a290610efa565b60405180910390fd5b60008181526007602052604081208054916103c583610f44565b9091555050600081815260076020526040902054600a1015610464576001600382815481106103f6576103f6610f6b565b906000526020600020906006020160030160016101000a81548160ff0219169083151502179055507fb1c8a09f3f65c01ce2ad5471f151a4d0ca61d365bcd286c0f0041845538f2b0981600160405161045b9291909182521515602082015260400190565b60405180910390a15b604080518281523360208201527fc6c773bb48fb8d38ada891d09df01af1f307f2a1bc38bb513c5cb1950150038191015b60405180910390a150565b336000908152600860205260409020546001600160a01b03166104d55760405162461bcd60e51b81526004016103a290610efa565b60008181526006602052604081208054916104ef83610f44565b9091555050604080518281523360208201527fcf765d6f163c9b0d832e2a94f4c8e9bffd32a2c3ca5fdbb8cc67b5fe1441f4139101610495565b6001546001600160a01b031633146105725760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b60448201526064016103a2565b6001546001600160a01b031633146105bb5760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b60448201526064016103a2565b6001600160a01b03166000908152600860205260409020805460ff60a01b1916600160a01b179055565b60035460609060009067ffffffffffffffff81111561060657610606610e22565b60405190808252806020026020018201604052801561063f57816020015b61062c610c4e565b8152602001906001900390816106245790505b5090506000805b6003548110156107ec576003818154811061066357610663610f6b565b6000918252602082206003600690920201015460ff16151590036107da576003818154811061069457610694610f6b565b90600052602060002090600602016040518060e0016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820180546106f690610f81565b80601f016020809104026020016040519081016040528092919081815260200182805461072290610f81565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b5050509183525050600382015460ff8082161515602084015261010090910416151560408201526004820154606082015260059091015460809091015283518490849081106107c0576107c0610f6b565b602002602001018190525081806107d690610f44565b9250505b806107e481610f44565b915050610646565b5060008167ffffffffffffffff81111561080857610808610e22565b60405190808252806020026020018201604052801561084157816020015b61082e610c4e565b8152602001906001900390816108265790505b50905060005b828110156108995783818151811061086157610861610f6b565b602002602001015182828151811061087b5761087b610f6b565b6020026020010181905250808061089190610f44565b915050610847565b509392505050565b336000908152600860205260409020546001600160a01b03166108d65760405162461bcd60e51b81526004016103a290610efa565b600381815481106108e9576108e9610f6b565b906000526020600020906006020160030160019054906101000a900460ff161561094d5760405162461bcd60e51b81526020600482015260156024820152741c1bdcdd08185b1c9958591e481d995c9a599a5959605a1b60448201526064016103a2565b600081815260076020526040902054600a1015610a835760016003828154811061097957610979610f6b565b906000526020600020906006020160030160016101000a81548160ff0219169083151502179055507fb1c8a09f3f65c01ce2ad5471f151a4d0ca61d365bcd286c0f0041845538f2b098160016040516109de9291909182521515602082015260400190565b60405180910390a160008181526005602090815260408083205460029092528083206064908190559254905163a9059cbb60e01b81526001600160a01b03928316600482018190526024820185905293929091169063a9059cbb906044016020604051808303816000875af1158015610a5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7f9190610fbb565b5050505b50565b336000908152600860205260409020546001600160a01b0316610abb5760405162461bcd60e51b81526004016103a290610efa565b600380546040805160e0810182528281523360208201908152918101868152851515606083015260006080830181905260a0830181905260c0830181905260018501865594855281517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6006860290810191825593517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c850180546001600160a01b0319166001600160a01b039092169190911790559051939493919290917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d90910190610ba99082611027565b506060820151600382018054608085015115156101000261ff00199315159390931661ffff199091161791909117905560a0820151600482015560c0909101516005918201556000838152602091825260409081902080546001600160a01b0319163390811790915581519081529182018490527f4ea9a4c2644295403d8e347c48692cc92bf605a5fb4b31e88976a41e5b1199c2910160405180910390a150505050565b6040518060e001604052806000815260200160006001600160a01b031681526020016060815260200160001515815260200160001515815260200160008152602001600081525090565b600060208284031215610caa57600080fd5b5035919050565b600060208284031215610cc357600080fd5b81356001600160a01b0381168114610cda57600080fd5b9392505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610dd857898403603f19018652825180518552888101516001600160a01b0316898601528781015160e089870181905281519087018190528491905b80831015610d68578183018c01518884016101000152918b0191610d49565b61010092508583828a0101526060915081840151610d89838a018215159052565b506080915081840151610d9f838a018215159052565b5060a0848101519089015260c093840151938801939093525096890196601f909101601f19169094019093019291870191600101610d09565b50919998505050505050505050565b8015158114610a8357600080fd5b8035610e0081610de7565b919050565b600060208284031215610e1757600080fd5b8135610cda81610de7565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610e4b57600080fd5b823567ffffffffffffffff80821115610e6357600080fd5b818501915085601f830112610e7757600080fd5b813581811115610e8957610e89610e22565b604051601f8201601f19908116603f01168101908382118183101715610eb157610eb1610e22565b81604052828152886020848701011115610eca57600080fd5b826020860160208301376000602084830101528096505050505050610ef160208401610df5565b90509250929050565b6020808252602a908201527f596f75206e65656420616e206163636f756e7420746f20706572666f726d20746040820152693434b99030b1ba34b7b760b11b606082015260800190565b600060018201610f6457634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680610f9557607f821691505b602082108103610fb557634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610fcd57600080fd5b8151610cda81610de7565b601f82111561102257600081815260208120601f850160051c81016020861015610fff5750805b601f850160051c820191505b8181101561101e5782815560010161100b565b5050505b505050565b815167ffffffffffffffff81111561104157611041610e22565b6110558161104f8454610f81565b84610fd8565b602080601f83116001811461108a57600084156110725750858301515b600019600386901b1c1916600185901b17855561101e565b600085815260208120601f198616915b828110156110b95788860151825594840194600190910190840161109a565b50858210156110d75787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212206767a55c99f0a32bb2df5d0b7bd5bfbc82f5dcefefa71a273d402b4279a43f4264736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "networks": {
    "11155111": {
      "address": "0x28A5A383da2f32915B0Ff1E3fE67402497169Cc1",
      "transactionHash": "0x0bda0616679d040a88c29b05b2825ca6a26acb5f4a3f415e9ace89951c368ddb"
    }
  }
}

const contractAddress = "0x62A71C820A229c38C9fc40a8DC71971EA1B7A034";

export default function CreateAccount() {
  const createAccount = async (isExpert: boolean) => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const abiArray = contractABI.abi;

        console.log("Requesting account access...");
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Account access granted.");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abiArray, signer);

        console.log("Sending transaction to create account...");
        const tx = await contract.createAccount(isExpert);
        console.log("Transaction sent: ", tx);

        const receipt = await tx.wait();
        console.log("Transaction mined: ", receipt);
      } catch (error) {
        console.error("Transaction failed: ", error);
      }
    } else {
      console.error("Ethereum object not found. Install MetaMask.");
    }
  };

  return (
    <div>
      <Button onClick={() => createAccount(true)}>
        Create account with your wallet
      </Button>
    </div>
  );
}