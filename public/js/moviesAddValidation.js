window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let $title =document.querySelector("#title");



    //para que aparesca selecionado
        $title.focus();
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

function validarVacio (event){
    let name = event.target.name
    if(this.value == ''){
        errors[name] = 'No puedes dejar el campo vacio';
        let $divError = document.querySelector('.error-' + name);
        $divError.innerHTML = errors[name];
    }
}
$title.addEventListener('blur', validarVacio)



}