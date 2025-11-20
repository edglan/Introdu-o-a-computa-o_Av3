function validar() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("mensagem");
    msg.className = "";


    if (email === "") {
        return mensagemDeErro("O campo de email não pode estar vazio !");
    }
    
    if (email.length < 10) {
        return mensagemDeErro("O email precisa ter no minino 10 caracteres !");
    }

    if (!email.includes("@") || !email.includes(".")) {
        return mensagemDeErro("O email deve conter '@' e '.' !");
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        return mensagemDeErro("O email é inválido !");
    }

    if (senha === "") {
        return mensagemDeErro("A senha não pode estar vazia !");
    }

    if (senha.length < 6) {
        return mensagemDeErro("A senha precisa ter no minimo 6 caracteres !");
    }

    if (!/[0-9]/.test(senha)) {
        return mensagemDeErro("A senha precisa ter no minino um número !");
    }

    if (!/[A-Z]/.test(senha)) {
        return mensagemDeErro("A senha precisa ter no minino uma letra maiúscula !");
    }

    if (!/[a-z]/.test(senha)) {
        return mensagemDeErro("A senha precisa ter no minino uma letra minuscula !");
    }
    
    msg.textContent = "Login realizado com sucesso.";
    msg.classList.add("success");
}

function mensagemDeErro(texto) {
    const msg = document.getElementById("mensagem");
    msg.textContent = texto;
    msg.classList.add("error");
}