var envio = document.forms["Cadastro"]["submit"];
document.addEventListener("submit", function controller(infos_event)
{
    infos_event.preventDefault();
    coletar_variaveis();
});

var validation_envio = true;

function coletar_variaveis()
{
    validation_envio = true;

    var $nome = document.forms["Cadastro"]["nome"];    
    verificar_nome($nome);

    var $email = document.forms["Cadastro"]["email"];
    verificar_email($email);

    var $senha = document.forms["Cadastro"]["senha"];
    verificar_senha($senha);

    var $repita_senha = document.forms["Cadastro"]["repita_senha"];
    verificar_repita_senha($repita_senha);

    login();
}

function verificar_nome(nome)
{
    const nome_regex = new RegExp("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    var $erro_nome = document.getElementById("erro_nome");

    if ((nome.value == "") || (!nome_regex.test(nome.value)) || (nome.value.length < 4) || (!/\s/g.test(nome.value)))
    {
        nome.setAttribute("class","erro");

        if (nome.value == "")
        {
            $erro_nome.innerHTML = "Digite seu nome completo";
        }
        else
        {
            $erro_nome.innerHTML = "Digite seu nome completo usando apenas letras e espaços";
        }

        validation_envio = false;
    }
    else
    {
        nome.removeAttribute("class","erro");
        nome.setAttribute("class","acerto");
        $erro_nome.innerHTML = "";
    }
}

function verificar_email(email)
{
    const email_regex = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    var $erro_email = document.getElementById("erro_email");

    if ((email.value == "") || (!email_regex.test(email.value)) || (email.value.length < 4) || (/\s/g.test(email.value)))
    {
        email.setAttribute("class","erro");

        if (email.value == "")
        {
            $erro_email.innerHTML = "Digite seu email";
        }
        else
        {
            $erro_email.innerHTML = "Digite seu email corretamente";
        }

        validation_envio = false;
    }
    else
    {
        email.removeAttribute("class","erro");
        email.setAttribute("class","acerto");
        $erro_email.innerHTML = "";
    }
}

function verificar_senha(senha)
{
    var $erro_senha = document.getElementById("erro_senha");

    if ((senha.value == "") || (senha.value.length < 6))
    {
        senha.setAttribute("class","erro");

        if (senha.value == "")
        {
            $erro_senha.innerHTML = "Digite uma senha com mais de seis caracteres";
        }
        else
        {
            $erro_senha.innerHTML = "Sua senha deve ter no mínimo seis caracteres";
        }

        validation_envio = false;
    }
    else
    {
        senha.removeAttribute("class","erro");
        senha.setAttribute("class","acerto");
        $erro_senha.innerHTML = "";
    }
}

function verificar_repita_senha(repita_senha)
{
    var $erro_repita_senha = document.getElementById("erro_repita_senha");

    if ((repita_senha.value != senha.value) || repita_senha.value.length < 6)
    {
        repita_senha.setAttribute("class","erro");

        if(repita_senha.value == "")
        {
            $erro_repita_senha.innerHTML = "Digite sua senha para confirmação";
        }
        else
        {
            $erro_repita_senha.innerHTML = "Sua repetição de senha deve ser igual a senha";
        }

        validation_envio = false;
    }
    else
    {
        repita_senha.removeAttribute("class","erro");
        repita_senha.setAttribute("class","acerto");
        $erro_repita_senha.innerHTML = "";
    }
}

function login()
{
    if (validation_envio)
    {
        setTimeout(function(){
            window.location.href = "./login.html";
        }, 1000);
    }
}