const randomIdACcount = require('./RandomId');
const randomOwnerAccount = require('./RandomOwner')

// console.log(randomOwnerAccount())
// console.log(randomIdACcount())
class Account{
    constructor(valueStatus)
    {
        this.setOwner();
        this.setStatus(false)
        this.setIdAccount();
    }

    openAccount(type){
        

        switch (type) 
        {
            case 'cc':
                this.type = 'cc'
                this.balance = 50
                this.status = true;
                break;
            ;
            case 'cp':
                this.balance = 150
                this.type = 'cp'
                this.status = true;
                break
            ;
            default: return console.log("Error to Create a New Account, TYPE is undefined")
        }


    };
    closeAccount(){
        if(this.balance > 0)
        {
            console.log("ERROR, this acount have a balance its not possible delete this account")
            return false 
        }


        this.status = false;
    };

    setBalance(){};
    getBalance(){
        return this.balance
    };

    setIdAccount(){
        return this.idAccount = randomIdACcount();
    };

    getIdAccount(){
        return this.idAccount;
    };

    setStatus(valueStatus){
        return this.status = valueStatus;
    };
    getStatus(){return this.status;};

    setOwner(){
        return this.owner = randomOwnerAccount();
    };

    getOwner(){
        return this.owner;
    }

    getInfo()
    {
        if(this.status == true)
        {
            console.log(`
            //     ==== Creat New Account ====
            //     Id Account   : ${this.getIdAccount()}  
            //     Owner        : ${this.getOwner()}     
            //     Balance      : ${this.getBalance()}      
            //     Status       : ${this.getStatus()}         
            //     Type         : ${this.getType()}                                  
            // `)
        }
        else {
            console.log("This account its inative. Cant get info");
        }
    }

    getType(){
        return this.type;
    }

}


const users = [a = new Account(),b = new Account(),c = new Account(),d = new Account(),e = new Account()]

// use

for (let i = 0; i < users.length; i++)
{
    
    if(i % 2 == 0)
    {
        users[i].openAccount('cc')
    }
    else 
    {
        users[i].openAccount('cp')
    }
    users[i].getInfo()
    // console.log("ESTAMOS EM " + i)
}
