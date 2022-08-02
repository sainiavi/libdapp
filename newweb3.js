// const { default: Web3 } = require("web3");

solc = require("solc");

fs=require('fs');

Web3 = require("web3");
 let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

const fileContent = fs.readFileSync("library.sol").toString();

console.log(fileContent);

var input = {
    language: "Solidity",
    sources: {
      "library.sol": {
        content: fileContent,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  
  var output=JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output);
  ABI= output.contracts["library.sol"]["Library"].abi;
  bytecode=output.contracts["library.sol"]["Library"].evm.bytecode.object;
//   console.log("abi:",ABI);
//  console.log("bytecode:",bytecode);
  //fs.savefile

  contract = new web3.eth.Contract(ABI);
//   web3.eth.getAccounts(console.log);

web3.eth.getAccounts(console.log);
  // console.log(accounts[0])
  
  // console.log("Accounts:",accounts); 
  // defaultAccount = accounts[0];
  // console.log(defaultAccount)
//   contract.deploy({data:bytecode}).send({from:defaultAccount,gas:600000})
// .on("receipt",(receipt)=>{console.log("contract Address", receipt.contractAddress);})
//     })  .then((contract.methods.get_details().call((err,data)=>{console.log("Initial Value: ",data);});

    contract.deploy({
        data: bytecode,
      })
      .send({
        from: "0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4",    gas: 5000000,      }).then(function(newContractInstance){
          console.log(newContractInstance.options.address) // instance with the new contract address
      });

      // Library.methods.set_book_detail("abc","nbi","1","awd","0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4").send();
      // Library.methods.set_book_detail("jhfvb","dbr",1,"snh","0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4").send({from: '0x495210369aa49BA84317134a7E5Bf43d0f4F2ac4'})
