function circulo (){
    var figura = document.getElementById ("figura"); /* se crea la varibale figura para capturar un elemto de html*/
    figura.classList = "";
    figura.classList.toggle ("circulo") /* add sirve para agregar una clase a un elemento, toggle para poner y quitar, remove para quitar*/
}
function rombo (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("rombo");
}
function rectanguloH (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("rectanguloH");
}
function rectanguloV (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("rectanguloV");
}
function arriba (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("arriba");
}
function abajo (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("abajo");
}
function izquierda (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("izquierda");
}
function derecha (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("derecha");
}
function diagonal (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("diagonal");
}
function triangulo (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("triangulo");
}
function imagen (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("imagen");
}
function cuadrado (){
    var figura = document.getElementById ("figura");
    figura.classList = "";
    figura.classList.toggle ("cuadrado");
}
function modificar (){
    document.getElementById("demo1").innerHTML = 'Este trabajo es muy dificil <br> Estoy triste :(';
}
function suma (){
    var A = 15;
    var B = 17;
    var C = A + B;
    document.getElementById("demo").innerHTML = C;
}
function oscuro (){
    var modo = document.getElementById("modo");
    modo.classList.toggle ("oscuro");
}

// CAPTURAR DATOS
function capturarDatos(){
    // capturamos los varoles de cada uno de los formularios
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    // capturamos los elementos a los cuales les asignaremos los valores

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");
    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if (genero == "Femenino") {
        mFoto.src = "img/userF.png";
    } else if (genero == "Masculino") {
        mFoto.src = "img/userM.png";
    } else {
        mFoto.src = "img/userO.png";
    }
    
    switch (color){
        case "rojo":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("rojo");
        break;
        case "verde":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("verde");
        break;
        case "azul":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("azul");
        break;
        case "negro":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("negro");
        break;
        case "morado":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("morado");
    }
}