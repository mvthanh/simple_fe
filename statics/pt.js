function getContractInstance (abi, address) {
    let contract = new web3.eth.Contract(abi, address);
    return contract;
}

async function getMess(instance) {
    return await instance.methods.getMess().call();
}

async function setMess(instance, mess, from) {
    return await instance.methods.setMess(mess).send({from: from});
}
