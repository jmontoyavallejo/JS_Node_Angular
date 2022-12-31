'use strict';

//fetch(ajax) y peticiones y servicios api rest
var usuarios = [];
var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
var div_jp = document.querySelector('#jp');
get_usuarios()
    .then(response => response.json())
    .then(data => {
        usuarios = data.data;
        listado_usuarios(usuarios);
        return get_Janet();
    })
    .then(response => response.json())
    .then(response => {
        mostrar_janet(response.data);
        return get_info();
    })
    .then(data => {
        mostrar_jp(data);
    })
    .catch(error => { console.log(error) });

function listado_usuarios(usuarios) {

    usuarios.map((users, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + '.' + users.first_name + ' ' + users.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector('.loading').style.display = 'none';
    });
};

function get_usuarios() {
    return fetch('https://reqres.in/api/users');
}
function get_Janet() {
    return fetch('https://reqres.in/api/users/2');
}

function mostrar_janet(usuario) {
    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');
    nombre.innerHTML = usuario.first_name + ' ' + usuario.last_name;
    avatar.src = usuario.avatar;
    avatar.width = '100';
    avatar.height = '100';
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    document.querySelector('#janet .loading').style.display = 'none';

};

function get_info() {
    var profesor = {
        nombre: 'juan pablo',
        apellidos: 'montoya vallejo',
        url: 'victor',
    };
    return new Promise((resolve, reject) => {
        var profersor_string = '';
        setTimeout(function () {
            profersor_string = JSON.stringify(profesor);
            if (typeof profersor_string !== 'string' || profersor_string == '') return reject('error: invalid prof');
            return resolve(profersor_string)
        }, 3000);

    });
}

function mostrar_jp(json) {
    let usuario = JSON.parse(json);
    let nom = document.createElement('h3');
    nom.innerHTML = usuario.nombre + ' ' + usuario.apellidos;

    div_jp.appendChild(nom);
    document.querySelector('#jp .loading').style.display = 'none';

};



















