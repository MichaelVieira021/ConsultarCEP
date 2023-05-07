function buscarCep() {
    let cep = document.querySelector('#cep').value;

    if (cep.length != 8) {
        alert('CEP Inválido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            exibirEndereco(data);
        })

    });
}

function exibirEndereco(dados) {



    let resultado = document.querySelector('#resultado');
    var btn = document.querySelector("#btn-pesquisa")
    let container = document.querySelector('.container')

    resultado.style.display = 'flex';


    /*btn.addEventListener('click', function(){
        if(resultado.style.display === 'none') {
            resultado.style.display = 'block';
        } else {
            resultado.style.display = 'block';
        }
    })*/


    if (dados.erro) {
        resultado.innerHTML = "Endereço não localizado!";
    } else {

        container.style.display = 'none';

        cep.value = '';
        resultado.innerHTML = ` <p>CEP: ${dados.cep}</p>
                            <p>Endereço : ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>
                            <button class ="new" onClick="window.location.reload()" >Nova consulta</button>`
    }
}

/*function alterarCss(resultado){
    resultado.style.padding = 10;
    resultado.style.margintop = 10;
    resultado.style.background = rgb(219, 219, 211);
    resultado.style.border = 1; solid ;gray;
    resultado.style.borderradius = 10;
    resultado.style.boxshadow = 2 ;2 ;gray;
}*/