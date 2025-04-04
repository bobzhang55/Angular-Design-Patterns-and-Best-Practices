
interface Person {
    socialSecurityNumber: number;
    name: string;
}
interface Company {
    corporateNumber: number;
    name: string;
}
type Client = Person | Company;
function isPerson(client: Client): client is Person {
    return (client as Person).socialSecurityNumber !== undefined;
}
function getID(client: Client) {
    if (isPerson(client)) {
        return client.socialSecurityNumber;
    } else {
        return client.corporateNumber;
    }
}

let cliet: Client = {
    corporateNumber: 123,
    name: "Mig"
}
console.log(getID(cliet));