let infoCake = {   // --------> Se crea un objeto donde se va almacenar los detalles del pastel
    size: '',
    firtsBiscuiit: '',
    secondBiscuiit: '',
    thirdBiscuiit: '',
    flavor: ''
}

cakeSize = document.getElementById('cakeSize');// contenedo de seleccion de pastel
firtsBiscuiit = document.getElementById('firtsBiscuiit');
let selection = 'indefinido';
//Se realiza la seleccion de tamaño del pastel

function size(selected){
    infoCake.size = selected;
    cakeSize.classList.toggle("hide");
    firtsBiscuiit.classList.toggle("hide");
    console.log(infoCake)
}

//El under line de los textos al seleccionarlos
function preSelection(biscuiit){
    document.getElementById(biscuiit).classList.toggle("under")
    if (selection !== 'indefinido'){
        document.getElementById(selection).classList.toggle("under")
    }
    selection = biscuiit;

}









