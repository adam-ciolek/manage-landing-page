const input = document.querySelector('.footer__inbox input');
const button = document.querySelector('.footer__inbox button');

button.addEventListener('click', e => {
    e.preventDefault();
      
    if(input.value === '') return alert('Please complete the field');
    
    if(input.value != '') {
        
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
        if(reg.test(input.value)) {
            alert('You sened your email.Thank you')
            input.value= '';
        } else {
            alert('The email entered is incorrect');
        }
        
    }
    
})

