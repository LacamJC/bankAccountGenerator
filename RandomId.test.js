const randomIdAccount = require('./RandomId')
const randomId = require('./RandomId')

test("Gera um id aleatorio de 5 caracteres", () => {
    const id = randomIdAccount()
    expect(id).toHaveLength(5)
})

test("Verifica se todos os caracteres são validos", () => {
    const valid = ["2","N","Z","2","X","C","7","G","5","E","1","5","C","A", "#", "!", "&"] 
    const id = randomIdAccount()

    for(let i = 0; i < id.length; i++)
    {
        expect(valid).toContain(id[i])
    }
})

test("Gera id diferentes em diversas chamadas", () =>{
    const id1 = randomIdAccount()
    const id2 = randomIdAccount()
    const id3 = randomIdAccount()
    const id4 = randomIdAccount()
    const id5 = randomIdAccount()

    expect(id1).not.toBe(id2)
    expect(id2).not.toBe(id3)
    expect(id3).not.toBe(id4)
    expect(id4).not.toBe(id5)
    expect(id5).not.toBe(id1)
    expect(id2).not.toBe(id4)
})