    //Elementos
    const emailInput = document.querySelector("#email");
    const emailValue = document.querySelector('#email').value;
    const message = document.querySelector("#error");
    const form = document.querySelector("#emailForm");
    const button = document.querySelector('#submit');
   
    //evento q controla/ativa aoós a submissão do form    
    button.addEventListener("click", function(event){
        event.preventDefault();
        //Executar depois da validação do email

        
        const email = emailInput.value;
        
        

        //validar email
        let isValid = validadeEmail(email);

        if(isValid){
            message.textContent = "E-mail válido!!!!!!!!!";
            message.style.color = "green";
        }else{
            message.textContent = "E-mail inválido!!!!!!!!!";
            message.style.color = "red";
        }
    })
    

    //função de validação de email

    function validadeEmail(email){
        // Padrão: TEXTO@TEXTO.TEXTO
        const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
        return regex.test(email);
    }
