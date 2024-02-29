document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.button button');

    button.addEventListener("click", function(event) {
        event.preventDefault();
        var user = document.querySelector(".input1 input").value;
        var password = document.querySelector(".input2 input").value;
        
        if (user === "user" && password === "senha") {
            alert("Login realizado com sucesso");
            window.location.href = "telaprincipal.html";
         s
            
        } else {
            alert("Login ou senha incorretos");
        }
    });
});
