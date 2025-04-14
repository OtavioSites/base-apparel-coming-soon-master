    //Elementos
    const emailInput = document.querySelector("#email");
    const message = document.querySelector("#error");
    const form = document.querySelector("#emailForm");
   
    //evento q controla/ativa aoós a submissão do form    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        //Executar depois da validação do email

        
        const email = emailInput.value;
        
        

        //validar email
        const isValid = validateEmail(email);

        if(isValid){
            message.textContent = "E-mail válido!!!!!!!!!";
            message.style.color = "green";
        }else{
            message.textContent = "E-mail inválido!!!!!!!!!";
            message.style.color = "red";
        }
    })
    

    //função de validação de email

    const validadeEmail = (email) => {
        // Padrão: TEXTO@TEXTO.TEXTO
        const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
        return regex.test(email);
    }
