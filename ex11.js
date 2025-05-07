function simularCaixa() {
    const valor = parseInt(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(valor) || valor <= 0) {
      resultado.innerHTML = 'Digite um valor válido.';
      return;
    }
  
    let restante = valor;
    const notas = [100, 50, 10, 1];
    let saida = `<p>Para R$${valor}, serão utilizadas:</p><ul>`;
  
    for (let nota of notas) {
      let qtd = Math.floor(restante / nota);
      if (qtd > 0) {
        saida += `<li>${qtd} nota(s) de R$${nota}</li>`;
        restante %= nota;
      }
    }
  
    saida += '</ul>';
    resultado.innerHTML = saida;
  }
  