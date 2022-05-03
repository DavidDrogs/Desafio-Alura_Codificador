var entrada1 = document.querySelector("#txt-area1");
var entrada2 = document.querySelector("#txt-area2");
var menssagem = document.getElementById("msg");

var button1 = document.querySelector(".btn-1");
button1.onclick = criptografar;

var button2 = document.querySelector(".btn-2");
button2.onclick = descriptografar;

document.getElementById("none").innerHTML = "";
entrada1.focus();

// Função criptografar//
function criptografar() {

    
    
    if (entrada1.value.length == 0) {
        document.getElementById("none").innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        entrada1.focus();
    } else {
        //limpa textarea2 (descriptografar)//
        document.getElementById("none").innerHTML = "";
        document.querySelector("img.icone").style.display = "none";

        //chaves pra criptografar 
        var text = entrada1.value;
        var txt =  text.replace(/e/igm, "enter");
        var txt = txt.replace(/i/igm, "imes");
        var txt = txt.replace(/a/igm, "ai");
        var txt = txt.replace(/o/igm, "ober");
        var txt = txt.replace(/u/igm, "ufat");

        document.getElementById("txt-area2").innerHTML = `${txt}`;
       
        // Botão copiar é exibido na tela, chamando a função codificar() 
        document.getElementById("copiar").innerHTML = '<button class="botao btn-3" onclick="copiar()">Copiar</button>';
       
    }
}
// função descriptografar o texto inserido pelo usuário se o valor nao for vazio, se for mostra msg
function descriptografar() {
    if (entrada1.value.length == 0) {
        document.getElementById("none").innerHTML = ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.icone').style.display;
        entrada1.focus();
    } else {
        //limpa a txt-area2 quando o botão é clicado pra poder exibir o resultado
        document.getElementById("none").innerHTML = "";
        document.querySelector("img.icone").style.display = "none";
        document.getElementById("txt-area1").innerHTML = "";

        //chaves pra criptografar 
        var text = entrada1.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
    

        document.getElementById("txt-area2").innerHTML = `${txt}`;
     
        // Botão de copiar é exibido na tela quando a função "criptografar()" é chamada 
        document.getElementById('copiar').innerHTML = '<button class="botao btn-3" onclick="copiar()">Copiar</button>';
    }
}

function copiar() {
    document.querySelector('#txt-area2').select();
    document.execCommand('copy');
    menssagem.innerHTML = "O texto copiado já está na área de transferência!";
    document.querySelector("#txt-area1").value = "";
 
}