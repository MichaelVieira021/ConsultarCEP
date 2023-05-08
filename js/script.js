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
    let resultado404 = document.querySelector('#resultado404');
    var btn = document.querySelector("#btn-pesquisa")
    let container = document.querySelector('.container')

    resultado.style.display = 'flex';

    if (dados.erro) {

        container.style.display = 'none';
        resultado.innerHTML = ` <p>Endereço não localizado!</p>
                                <button class ="new2" onClick="window.location.reload()" >Nova consulta</button>`
    } else {

        resultado.style.marginTop = 'auto';
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