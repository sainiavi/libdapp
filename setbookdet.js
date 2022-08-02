// function setter()
// {
Web3 = require("web3");
 let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

 const Contract = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_writer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_owner",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner_address",
				"type": "address"
			}
		],
		"name": "set_book_detail",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addr",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "writer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "owner",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner_adress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner_address",
				"type": "address"
			}
		],
		"name": "by_owner_address",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "own_addr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "searchBook",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "writer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "owner",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner_adress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], "0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4");



var a = document.getElementById("bname").value;
var b = document.getElementById("wname").value;
var c = document.getElementById("bid").value;
var d = document.getElementById("bown").value;
var e = document.getElementById("oadd").value;

const setter = async()=>{
    // console.log(window.web3)
    // console.log(window.ethereum)
 await   Contract.methods.set_book_detail(a,b,c,d,e).send({from:'0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4',gas :"50000"})
    console.log(e)
  };

// Contract.methods.set_book_detail(a,b,c,d,e).send({from: '0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4'})
// }


