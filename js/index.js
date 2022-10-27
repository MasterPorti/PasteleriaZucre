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
}

//El under line de los textos al seleccionarlos
function preSelection(biscuiit){
    document.getElementById(biscuiit).classList.toggle("under")
    if (selection !== 'indefinido'){
        document.getElementById(selection).classList.toggle("under")
    }
    selection = biscuiit;

}

// Guardar el pastele selecionado y limpiar underline
function selected(position){
    if (selection == 'indefinido'){
    }else{
        infoCake[position] = selection;  
    }
    document.getElementById(selection).classList.toggle("under")
    selection = 'indefinido';

    switch (position) {
        case 'firtsBiscuiit':
            document.getElementById(position).classList.toggle("hide")  
            document.getElementById('secondBiscuiit').classList.toggle("hide")        
          break;
          case 'secondBiscuiit':
            document.getElementById(position).classList.toggle("hide")  
            document.getElementById('thirdBiscuiit').classList.toggle("hide")        
          break;
          case 'thirdBiscuiit':
            document.getElementById(position).classList.toggle("hide")  
            document.getElementById('flavor').classList.toggle("hide")      
          break;
        case 'Mangoes':

      }
}

function end(flavor){
    infoCake.flavor = flavor;
    document.getElementById('flavor').classList.toggle("hide")  
}













