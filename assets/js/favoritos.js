const peliculas = []
for (var i = 0; i <= 50; i++){
    peliculas.push("pelicula" + i);
}

console.log(peliculas)



var fav = document.getElementById('myDiv')
// Definición de la clase Pelicula
class Pelicula {
    constructor(titulo, link, descripcion) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.link = link
      this.favorito = false;
    }
  
    marcarComoFavorita() {
      this.favorito = true;
      fav.innerHTML += `<img class="row__poster row__posterLarge" src="${this.link}" alt="" />`

    }

  
    desmarcarComoFavorita() {
      this.favorito = false;
      console.log(`La película "${this.titulo}" ha sido desmarcada como favorita.`);
    }
  }
  
  // Creación de algunas instancias de películas
  const pelicula1 = new Pelicula('Titanic', 'James Cameron', 'Drama');
  const pelicula2 = new Pelicula('Pulp Fiction', 'Quentin Tarantino', 'Crimen');
  const pelicula3 = new Pelicula('El Señor de los Anillos', 'Peter Jackson', 'Fantasía');
  

  
// Event listener para el sistema de favoritos

var button1 = document.querySelector('#b1');
var container = document.getElementById('container');
console.log(container)

if(localStorage.getItem('peliculas')) {
    var peliculas2 = localStorage.getItem('peliculas').split(',');
  } else{
    var peliculas2 = [];
  }
container.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e)
  
  if(e.target.localName === 'button') {
      peliculas2.push(e.target.id) 
        localStorage.setItem('peliculas', peliculas2)
      

  }
})

fetch("assets/json/img.json")
.then((respuesta) => respuesta.json())
.then((img) => {

    if(localStorage.getItem('peliculas')) {
        var p = localStorage.getItem('peliculas').split(',');
        p.forEach((element) => {
            
            new Pelicula(img[element].nombre, img[element ].imagen, img[element].descripcion).marcarComoFavorita()
        });
      } 
    
    
    container.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e)
        if(e.target.localName === 'button') {
        var peliculasfav = localStorage.getItem('peliculas').split(',')
        console.log(peliculasfav)
        var ultimo = peliculasfav[peliculasfav.length-1]
            new Pelicula(img[ultimo].nombre, img[ultimo].imagen, img[ultimo].descripcion).marcarComoFavorita()
            
            alert(`La película "${img[ultimo].nombre}" ha sido marcada como favorita.`);
        }
      
        if (e.target.localName === 'img') {
           
            var des = document.getElementById('modal-class')
            

            des.innerHTML = `        <div class="w-full h-full bg-modal fixed z-50 flex">
            <div class="flex justify-center items-center flex-col w-72 rounded-lg shadow-xl  p-2 bg-gray-900 m-auto ">
                
                <p class="text-base mt-2 mx-4 text-white font-semibold text-center">
                   ${img[e.target.name].descripcion}
                </p>
                <div class="flex justify-between">

                    <button
                        class="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                        onClick={cerrar()}
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>`
        }
      })
   
  
    


  
}) 
.catch((error) => console.log("Hubo un error: " + error.message));

const cerrar = () => {
    var des = document.getElementById('modal-class')

            des.innerHTML = ``
}



  




