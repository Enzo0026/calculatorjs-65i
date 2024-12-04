let screen = document.getElementById('screen');

//let buttons = document.getElementsByTagName('button');
let buttons = document.querySelectorAll('button');

console.log(buttons);

let screenValue = "";

/* const handleFocus = (event) =>{
    console.log(event.target.value);
}

screen.addEvenListener('change', ()=>{
    console.log(event.target.value)
})

screen.addEvenListener('change', handleFocus) */

for (let item of buttons){
    item.addEventListener('click', (e)=>{
        //console.log(e.target.innerHTML);
        let buttonText = e.target.innerHTML
        console.log('Button text is ' + buttonText);

        switch (buttonText) {
            case 'X':
                buttonText = '*'
                console.log('Button text is' + buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case 'AC':
                screenValue = '';
                screen.value = screenValue;
                return;
            case '':
                buttonText = 'sqrt(';
                console.log('Button text is ' + buttonText)
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case '':
                buttonText = '3.1416';
                console.log('Button text is ' + buttonText)
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case '%':
                buttonText = '/100';
                console.log('Button text is ' + buttonText)
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case '%':
                buttonText = '/100';
                console.log('Button text is ' + buttonText)
                screenValue += buttonText;
                screen.value = screenValue;
                return;            
            case '=':
                screen.value = math.evaluate(screenValue)
                return;
            case '⌫':
                screenValue = screenValue.substring(0, screen.value.length -1)
                screen.value = screenValue;
                return;
        
            default:
                screenValue += buttonText;
                screen.value = screenValue;
                return;
        }
    })
}
