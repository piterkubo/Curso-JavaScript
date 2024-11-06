function ReverteString(string){
    //1 separa
    let splitString = string.split("");
    //2 reverte
    let reverter = splitString.reverse();
    //3 junta
    let result = reverter.join("");

    return result;
}

console.log(ReverteString("Lucas"));