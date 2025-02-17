const randomOwnerAccount = require('./RandomOwner')

test("O nome do dono da nunca nunca sera nulo", () => {
    const owner = randomOwnerAccount()
    expect(owner.length).toBeGreaterThanOrEqual(1)
})