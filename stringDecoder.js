const decode = code => {
    let splitStr = code.split('')
    let result =''

    for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(+splitStr[i])) {
    } else {
        result += splitStr[i]
    }
}
return result
}

console.log(decode('0y4akjfe0s'))