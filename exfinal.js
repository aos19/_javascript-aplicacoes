let arg = document.getElementById('cx1');
let caixa = document.querySelector('select#cx2');
let res = document.getElementById('res');

let val = []


function isNumero(n)
{
    if (Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    } else {
        return false
    }
}

function inCaixa(n, c)
{
    if (c.indexOf(Number(n)) != -1)
    {
        return true
    } else {
        return false
    }
}

function analisar()
{
    if (isNumero(arg.value) && !inCaixa(arg.value, val))
    {
        val.push(Number(arg.value));
        let item = document.createElement('option');
        item.text = `Número ${arg.value} adicionado.`;
        caixa.appendChild(item);
        res.innerHTML = '';
    } else {
        alert("Valor inválido ou já encontrado na lista.");
    }
    arg.value = '';
    arg.focus();
}


function finalizar()
{
    if (val.length == 0)
    {
        alert("Dados não foram inseridos.");
    }
    else
    {
        let tot = val.length;
        
        let maiorArg = val[0];
        let menorArg = val[0];
        let soma = 0;
        let media = 0;

        for(let pos in val)
        {
            soma += val[pos];

            if (val[pos] > maiorArg)
                maiorArg = val[pos];
            
            else if (val[pos] < menorArg)
                menorArg = val[pos];
        }

        media = soma/tot;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo houveram ${tot} números analisados.</p>`;
        res.innerHTML += `<p>O maior núemro da análise é ${maiorArg}.</p>`
        res.innerHTML += `<p>O menor núemro da análise é ${menorArg}.</p>`
        res.innerHTML += `<p>A soma de todos os valores analisados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores analisados foi ${media.toFixed(1)}.</p>`;    
    }
}