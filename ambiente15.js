let num = [9, 7, 5, 3, 1]
//num[5] = 11
//num.push(11);
//num.sort();
console.log(num)

console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`);

let pos = num.indexOf(11);
if (pos == -1)
{
    console.log('O valor requerido não foi encontrado!')
} else {
    console.log(`O valor 3 está na posição ${pos}`);
}


/* for(let pos = 0; pos<num.length; pos++)
{
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

/*for(let pos in num)
{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/