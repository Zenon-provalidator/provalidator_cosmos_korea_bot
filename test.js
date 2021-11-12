const func = require('./func')
const fs = require('fs')
//console.log(func.getProvalidatorDetail())
//console.log(func.getMessage('cosmos'))
//console.log(func.getProposal(57))

let latestProposal = 0


var files = fs.readdirSync('./json/proposals')
for(var i = 0; i < files.length; i++){
	latestProposal = parseInt(files[i].replace(/\.[^/.]+$/, ""))
}

console.log(typeof func.getProposalFromServer(latestProposal+1))
console.log(func.getProposalFromServer(latestProposal+1))
if(typeof func.getProposalFromServer(latestProposal+1) === "object"){
	console.log(1111)
}