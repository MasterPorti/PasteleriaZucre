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

function sizee(selected){
    infoCake.size = selected;
    cakeSize.classList.toggle("hide");
    secondBiscuiit.classList.toggle("hide");
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
    document.getElementById('shiping').classList.toggle("hide") 
    if (infoCake.flavor == 'limon'){ 
        document.getElementById('flavor-vainilla').classList.toggle("hide")
    } else{
        document.getElementById('flavor-limon').classList.toggle("hide")   
    }
    document.getElementById("textInfoCake").innerHTML = 'Biscocho: ' + infoCake.firtsBiscuiit + ', ' + infoCake.secondBiscuiit + ', ' + infoCake.thirdBiscuiit + '  ' + 'Decoracion: ' + infoCake.flavor
}

function next(){
    document.getElementById('shiping').classList.toggle("hide") 
    document.getElementById('idInfo').classList.toggle("hide") 
    document.getElementById("idinfo").innerHTML = infoCake.size.charAt(0) + infoCake.firtsBiscuiit.charAt(0) + infoCake.secondBiscuiit.charAt(0) + infoCake.thirdBiscuiit.charAt(0) + infoCake.flavor.charAt(0)
}


// let infoCake = {   // --------> Se crea un objeto donde se va almacenar los detalles del pastel
//     size: '',
//     firtsBiscuiit: '',
//     secondBiscuiit: '',
//     thirdBiscuiit: '',
//     flavor: ''
// }













