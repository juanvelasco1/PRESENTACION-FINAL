const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav.classList.add('nav__black');
  } else {
    nav.classList.remove('nav__black');
  }
});
const cargarImg = () => {
    fetch("assets/json/img.json")
      .then((respuesta) => respuesta.json())
      .then((img) => {
        const row = img[0].imagen;
        const row2 = img[1].imagen;
        const row3 = img[3].imagen;
        const row4 = img[4].imagen;
        const row5 = img[5].imagen;
        const row6 = img[6].imagen;
        const row7 = img[7].imagen;
        const row8 = img[8].imagen;
        const row9 = img[9].imagen;
        const row10 = img[10].imagen;
        const row11 = img[11].imagen;
        const row12 = img[12].imagen;
        const row13 = img[13].imagen;
        const row14 = img[14].imagen;
     
    
        // insertando imagenes
        const verificar = () => {
          var p = document.getElementById("p");
          p.setAttribute("src", row2);
  
          var p2 = document.getElementById("p2");
          p2.setAttribute("src", row3);
  
          var p3 = document.getElementById("p3");
          p3.setAttribute("src", row4);
  
          var p4 = document.getElementById("p4");
          p4.setAttribute("src", row5);
  
          var p5 = document.getElementById("p5");
          p5.setAttribute("src", row6);
  
          var p6 = document.getElementById("p6");
          p6.setAttribute("src", row7);
  
          var p7 = document.getElementById("p7");
          p7.setAttribute("src", row8);
  
          var p8 = document.getElementById("p8");
          p8.setAttribute("src", row9);
  
          var p9 = document.getElementById("p9");
          p9.setAttribute("src", row10);
  
          var p10 = document.getElementById("p10");
          p10.setAttribute("src", row11);
  
          var p11 = document.getElementById("p11");
          p11.setAttribute("src", row12);
  
          var p12 = document.getElementById("p12");
          p12.setAttribute("src", row13);
  
          var p13 = document.getElementById("p13");
          p13.setAttribute("src", img[14].imagen);
  
          var p14 = document.getElementById("p14");
          p14.setAttribute("src", img[15].imagen);
  
          var p15 = document.getElementById("p15");
          p15.setAttribute("src", img[16].imagen);
  
      
  
          var p16 = document.getElementById("p16");
          p16.setAttribute("src", img[17].imagen);
  
          var p17 = document.getElementById("p17");
          p17.setAttribute("src", img[18].imagen);
  
          var p18 = document.getElementById("p18");
          p18.setAttribute("src", img[19].imagen);
  
          var p19 = document.getElementById("p19");
          p19.setAttribute("src", img[20].imagen);
  
          var p20 = document.getElementById("p20");
          p20.setAttribute("src", img[21].imagen);
  
          var p21 = document.getElementById("p21");
          p21.setAttribute("src", img[22].imagen);
  
          var p22 = document.getElementById("p22");
          p22.setAttribute("src", img[23].imagen);
  
          var p23 = document.getElementById("p23");
          p23.setAttribute("src", img[24].imagen);
  
          var p24 = document.getElementById("p24");
          p24.setAttribute("src", img[25].imagen);
  
          var p25 = document.getElementById("p25");
          p25.setAttribute("src", img[26].imagen);
  
  
         
          var p26 = document.getElementById("p26");
          p26.setAttribute("src", img[27].imagen);
  
          var p27 = document.getElementById("p27");
          p27.setAttribute("src", img[28].imagen);
  
          var p28 = document.getElementById("p28");
          p28.setAttribute("src", img[29].imagen);
  
          var p29 = document.getElementById("p29");
          p29.setAttribute("src", img[30].imagen);
  
          var bravestwarriors = document.getElementById("bravestwarriors");
          bravestwarriors.setAttribute("src", row3);
        };
  
        verificar();
  
        
        
  
          
  
        
      }) 
      .catch((error) => console.log("Hubo un error: " + error.message));
  }
  
  cargarImg();
  
  // Función que carga más elementos en el contenedor
  const cargarMasElementos = () => {
      // Simulación de carga de elementos (puedes reemplazarlo con tu propia lógica)
      const nuevosElementos = document.createDocumentFragment();
      for (let i = 0; i < 5; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        
        const h2 = document.createElement("h2");
        h2.textContent = "Otras Pelis";
        
        const button = document.createElement("button");
        button.classList.add("favorite-button");
        button.textContent = "Agregar a favoritos";
        
        const divPosters = document.createElement("div");
        divPosters.classList.add("row__posters");
        
        for (let j = 0; j < 5; j++) {
          const img = document.createElement("img");
          img.classList.add("row__poster", "row__posterLarge");
          img.alt = "";
          img.src = "assets/logo.png"
          divPosters.appendChild(img);
        }
        
        div.appendChild(h2);
        div.appendChild(button);
        div.appendChild(divPosters);
        
        nuevosElementos.appendChild(div);
      }
    
      // Agregar los nuevos elementos al contenedor
      const contenedor = document.getElementById("container");
      contenedor.appendChild(nuevosElementos);
    }
    
    // Función que verifica si se ha llegado al final de la página
    const verificarScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;
    
      if (scrollTop + windowHeight >= documentHeight) {
        cargarMasElementos();
      }
    }
    
    // scroll
    window.addEventListener("scroll", verificarScroll);
    
    // Cargar elementos iniciales
    cargarMasElementos();
    