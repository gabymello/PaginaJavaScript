function gerarSenha() {
    const tamanho = document.getElementById('tamanho').value;

    if (tamanho < 8 || tamanho > 32) {
        alert("Por favor, insira um tamanho válido entre 8 e 32.");
        return;
    }

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const todosCaracteres = letrasMaiusculas + letrasMinusculas + numeros + simbolos;

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length);
        senha += todosCaracteres[indiceAleatorio];
    }

    document.getElementById('senhaGerada').textContent = senha;
}