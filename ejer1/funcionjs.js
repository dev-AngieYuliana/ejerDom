function cambiar(){
      const parrafo= document.querySelector("#texto");
      const boton = document.querySelector("#b");
      parrafo.innerText = "Chaito Anshi";

      const claseActual = boton.getAttribute("data-clase");

      if(claseActual === "b1"){
            boton.setAttribute("data-clase", "b2");
            boton.className = "b2";
      }else{
            parrafo.innerText = "Hola Anshi";
            boton.setAttribute("data-clase", "b1");
            boton.className = "b1"; 
      }
}