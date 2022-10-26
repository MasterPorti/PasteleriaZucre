let infoCake = {
    size: '',
    firtsBiscuiit: '',
    secondBiscuiit: '',
    thirdBiscuiit: '',
    flavor: ''
}

let preBiscuiit = '';

infoCake.size = 'big';

big= () =>{
    console.log('se ejecuto');
    infoCake.size = 'big';
    let ocultar = document.getElementById('cakeSize');
    let mostrar = document.getElementById('firtsBiscuiit');
    ocultar.classList.add('hide');
    mostrar.classList.remove('hide')
}

function preSelection(tipo){
    document.getElementById('fresa').classList.remove('under')
    document.getElementById('fresa1').classList.remove('under')
    document.getElementById('fresa2').classList.remove('under')
    document.getElementById('vainilla').classList.remove('under')
    document.getElementById('vainilla1').classList.remove('under')
    document.getElementById('vainilla2').classList.remove('under')
    document.getElementById("chocolate").classList.remove('under')
    document.getElementById("chocolate1").classList.remove('under')
    document.getElementById("chocolate2").classList.remove('under')
    document.getElementById(tipo).classList.add('under')
    preBiscuiit = tipo;
    console.log(preBiscuiit)
}

function selected(lugar){
    infoCake[lugar] = preBiscuiit;
    console.log(infoCake);  
    switch (lugar) {
        case 'firtsBiscuiit':
            document.getElementById('firtsBiscuiit').classList.add('hide');    
            document.getElementById('secondBiscuiit').classList.remove('hide');           
          break;
        case 'secondBiscuiit':
            document.getElementById('secondBiscuiit').classList.add('hide');    
            document.getElementById('thirdBiscuiit').classList.remove('hide'); 
        break;
        case 'thirdBiscuiit':
            document.getElementById('thirdBiscuiit').classList.add('hide');    
            document.getElementById('flavor').classList.remove('hide');
        break;
      }

}

function end(flavor){
    infoCake.flavor = flavor;
    document.getElementById("amountChocolate").innerHTML = infoCake.size;
}





