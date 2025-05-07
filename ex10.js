function converterTemperatura() {
    const temperaturaCelsius = parseFloat(document.getElementById('temperatura').value);
    
   
    if (isNaN(temperaturaCelsius)) {
      alert("Por favor, insira um valor válido para a temperatura.");
      return;
    }
  
    
    const tipoConversao = document.querySelector('input[name="conversao"]:checked');
    
    if (!tipoConversao) {
      alert("Por favor, selecione a conversão desejada (Fahrenheit ou Kelvin).");
      return;
    }
  
    let resultado;
    let textoResultado = '';
  
   
    if (tipoConversao.value === 'fahrenheit') {
      resultado = (temperaturaCelsius * 9/5) + 32;
      textoResultado = `${temperaturaCelsius}°C é igual a ${resultado.toFixed(2)}°F.`;
    } else if (tipoConversao.value === 'kelvin') {
      resultado = temperaturaCelsius + 273.15;
      textoResultado = `${temperaturaCelsius}°C é igual a ${resultado.toFixed(2)}K.`;
    }
  
   
    document.getElementById('resultadoTexto').textContent = textoResultado;
  }
  