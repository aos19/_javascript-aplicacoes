var idade = 15;
    console.log(`Você possui ${idade} anos`);
if (idade < 16) {
    console.log("Não vota");
    console.log("Não tem idade apta a dirigir, apenas daqui a dois anos!");
} else if (idade < 18 || idade >= 65) {
        console.log("Voto opcional");    
    } else {
            console.log("Voto obrigatório");
        }

