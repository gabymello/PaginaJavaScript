
const exercicios = [
    "Par ou Ímpar",
    "Contador com Passo",
    "Calculadora de IMC",
    "Calculadora Básica",
    "Verificador de Idade",
    "Gerador de Tabuada",
    "Lista de Compras",
    "Verificador de Palíndromos",
    "Simulador de Semáforo",
    "Conversor de Temperatura",
    "Simulador de Caixa Eletrônico",
    "Cronômetro",
    "Gerador de Senhas Aleatórias",
    "Simulador de Sorteio",
    "Enquete com Votos",
    "Contador de Palavras e Letras",
    "Verificador de Números Primos",
    "Cadastro com Validação",
    "Jogo de Adivinhação",
    "Simulador de Notas Escolares"
  ];
  
  const container = document.getElementById('card-container');
  
  
  exercicios.forEach((titulo, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = `${index + 1}. ${titulo}`;
    card.onclick = () => {
      window.location.href = `exercicios/exercicio${index + 1}.html`;
    };
    container.appendChild(card);
  });
  