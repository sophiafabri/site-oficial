document.getElementById('accept-cookies').addEventListener('click', function() {
    document.getElementById('cookie-banner').style.display = 'none';
});
document.getElementById('compra-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const produto = document.getElementById('produto').value;

    document.getElementById('mensagem').innerText = `Obrigado, ${nome}! Sua compra do ${produto} será enviada para ${endereco}.`;
});
