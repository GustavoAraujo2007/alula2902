document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.button1 button');

    button.addEventListener("click", function(event) {
        event.preventDefault();
        var user = document.querySelector(".input1 input").value;
        var password = document.querySelector(".input2 input").value;
        
        if (user === "" && password === "") {
            alert("Prencha todos os campos");
        }
        else if (user === "user" && password === "senha") {
            alert("Login realizado com sucesso");
            window.location.href = "telaprincipal.html";

            
        } else {
            alert("Login ou senha incorretos");
        }
    });
});
