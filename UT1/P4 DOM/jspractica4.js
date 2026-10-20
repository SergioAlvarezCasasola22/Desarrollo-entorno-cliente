fetch("./data/heros.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => procesarJSON(jsondata))
  .catch((e) => {
    console.log(e);
  });

function procesarJSON(jsondata) {
  let plantilla = document.getElementById("plantilla");
  let contenedor = plantilla.parentNode;
  const heroes = jsondata.data.results;

  heroes.forEach((heroe) => {
    let tarjeta = plantilla.cloneNode(true);
    tarjeta.removeAttribute("id");

    let imagen = tarjeta.querySelector(".card-img-top");
    imagen.src = heroe.thumbnail.path + "." + heroe.thumbnail.extension;
    imagen.alt = heroe.name;

    let titulo = tarjeta.querySelector(".card-title");
    titulo.textContent = heroe.name;

    let texto = tarjeta.querySelector(".card-text");
    texto.textContent = heroe.description
      ? heroe.description
      : "Sin descripción disponible.";

    let lista = tarjeta.querySelector(".list-group");
    lista.innerHTML = "";

    if (heroe.comics.items.length === 0) {
      let item = document.createElement("li");
      item.classList.add("list-group-item");
      item.textContent = "Sin cómics disponibles";
      lista.appendChild(item);
    } else {
      for (let i = 0; i < heroe.comics.items.length && i < 3; i++) {
        let item = document.createElement("li");
        item.classList.add("list-group-item");
        item.textContent = heroe.comics.items[i].name;
        lista.appendChild(item);
      }
    }

    contenedor.appendChild(tarjeta);
  });

  contenedor.removeChild(plantilla);

  /*
    Ahora crea un enlace al final del footer que permita descargar el HTML que has creado
  */

  const a = document.createElement("a");
  //cuidadiinn joorrlll, que estamos con un literal de cadena
  const archivo = new Blob(
    [
      `
      <!doctype html>
      <html lang="en">
      ` +
        document.head.outerHTML +
        `
    
    
    
    
      <!-- Todo lo que viene ahora lo has creado tu solit@ con javascript y jugando con el DOM
           y esto solo la punta del iceberg de todo lo que vas a crear!!!
           venga! vamos a por ello  -->
    
    
    
    
    
    
    
      ` +
        document.body.outerHTML +
        `
      </html>`,
    ],
    { type: "html" }
  );
  const url = URL.createObjectURL(archivo);
  a.href = url;
  a.download = "statico.html";
  a.innerHTML = "descarga el htlm que has creado con js y el dom";
  document.getElementsByTagName("footer")[0].appendChild(a);
}