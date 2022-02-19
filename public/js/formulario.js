
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const submitButton = document.querySelector('#submit-button');

    submitButton.addEventListener("click",(e) => {
        e.preventDefault();

        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        if(nameValue === '' || emailValue === ''){
            alert("CAMPO VAZIO.");
        }else{
            alert("MENSAGEM ENVIADA COM SUCESSO");
        }
    })