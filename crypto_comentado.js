function crypt(mensagem, hash) {
    // Randomiza um valor de 1 a 999
    const d = Math.floor(Math.random() * 999 + 1);
    console.log(d)

    
    // Transformando a string em um array de letras
    let phrase = mensagem.split("");

    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < phrase.length; i++) {
        // Transformando cada letra em um decimal de ASCII
        // e multiplicando pelo valor D
        phrase[i] = (phrase[i].charCodeAt(0) * d)

        // Adicionando a hash separadora a cada um dos
        // itens do array (letras)
        phrase[i] += hash;
    }


    // Adicionando a data de criptografia ao ultimo elemento do array
    phrase.push(d);

    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
        // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;

    
}


function decrypt(decifrar, hash) {
    // Forço a hash a virar uma string
    let h = String(hash)
    // Uso a hash para dividir a string em um array
    const mensagem = decifrar.split(h);

    //Removeu o ultimo item do array e guardou em "d"
    const d = mensagem.pop();

    // Passando por cada um dos elementos e:
    // - dividindo pela data
    // - transformando de ASCII para caracteres
    for (let i = 0; i < mensagem.length; i++) {
        mensagem[i] = String.fromCharCode(parseInt(mensagem[i]) / d);
    }

    // Defininindo um uma saída no formato de string
    let output = "";

    // Loop concatenando a minha mensagem
    for (let i = 0; i < mensagem.length; i++) {
        output += mensagem[i];
    }

    // Retornando a mensagem descriptografada
    return output;
}

const frase = "Teste!";

const v = Math.floor(Math.random() * 500000000 + 1000000)
let pass = crypt(frase, "123456789" + v + "%^&");

console.log(pass);



let resolver = decrypt(pass,"123456789" + v + "%^&");

console.log(resolver);