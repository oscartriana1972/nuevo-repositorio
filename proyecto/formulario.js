
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(){
    const nombre = document.getElementById("nombre").value
    const apellidos = document.getElementById("apellidos").value

   // const genero = document.getElementById('genero').value

    //const genero = document.getElementById('genero').value 

    console.log('el nombre es' + nombre); 
    console.log('los apellidos son ' + apellidos);

    //console.log('el genero es' + genero);

    alert('los datos se guardaron exitosamemte')
   
})
