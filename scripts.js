document.querySelectorAll('.btn-pedido').forEach(button => {
    button.addEventListener('click', () => {
        const preco = parseFloat(button.getAttribute('data-preco'));
        const nomeLanche = button.parentElement.querySelector('h2').textContent;
        alert(`Você pediu: ${nomeLanche}\nPreço: R$${preco.toFixed(2)}`);
    });
});
