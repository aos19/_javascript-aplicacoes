var hora = 7;
console.log(`Agora são exatamente ${hora} horas.`)
    if (hora >= 12 && hora < 18) {
        console.log("Já passou do meio dia. Boa tarde!");
        } else if (hora >= 18 && hora < 23) {
            console.log("Acabou a tarde... boa noite!");
            } else if (hora >= 8 && hora < 12) {
            console.log("Hora de estar de pé, e como ainda é manhã, bom dia!")
                } else if (hora <= 8 && hora > 4) {
                     console.log("Ainda estou dormindo...")
                    } else if (hora >= 0 && hora < 4) {
                        console.log("Ainda é madrugada... me deixe dormir!");
                    }
    