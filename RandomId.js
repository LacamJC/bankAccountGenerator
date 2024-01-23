function randomIdAccount()
{
    let numbers = ["2","N","Z","2","X","C","7","G","5","E","1","5","C","A", "#", "!", "&"] 
    var id = "";
    for(i=0; i < 5; i++)
    {
        id += numbers[Math.floor(Math.random() * numbers.length )]
    }

    return (id)
}

module.exports = randomIdAccount;