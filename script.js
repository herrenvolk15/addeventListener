const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

// btn.addEventListener('evento', funcion);
//btnOnClick con addEventListener no se usa con parentesis para llamar la funcion
//porque se ejecutara una funcion que ya fue ejecutada

function sumarInputValues (event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

//voy a usar este archivo para conectar a gitHub
//lo siguiente es lo que me aparece al crear el archivo en GitHub
//echo "# addeventListener"  >> README.md  : no me sirve esta instruccion
//git init: me dice que inicialice mi repositorio de git es decir en local
//git add README.md
//git commit -m "first commit"
//git branch -M master
//git remote add origin git@github.com:herrenvolk15/addeventListener.git
//git push -u origin master