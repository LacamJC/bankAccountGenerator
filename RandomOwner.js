
function randomOwnerAccount()
{
    let names = ["James", "Dexter", "Amanda", "Alessandra", "Marcos"];
    
    return names[Math.floor(Math.random() * names.length)]
}


module.exports = randomOwnerAccount;