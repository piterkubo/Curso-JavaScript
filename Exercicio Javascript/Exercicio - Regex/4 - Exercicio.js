/* Crie uma regex que valide o endereço IP*/


const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(ip.test("10.222.11.254"));
console.log(ip.test("10.22.11.309"));
console.log(ip.test("99999.2229999.11888.2592322"));
console.log(ip.test("192.168.1.160"));
console.log(ip.test("1asdsadas"));