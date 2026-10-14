
// PARTE 1: FUNCIONES CONSTRUCTORAS


function Oveja(raza, maxLitrosLeche) {
  this.raza = raza;
  this.color = "blanco";
  this.maxLitrosLeche = maxLitrosLeche;
  this.esquilada = false;
  this.embarazada = false;
  this.litrosProducidosTotal = 0;

  this.ordenar = function () {
    if (this.embarazada) {
      console.log("Esta oveja está embarazada, no da leche.");
      return 0;
    }
    const litros = Math.round(Math.random() * this.maxLitrosLeche * 100) / 100;
    this.litrosProducidosTotal += litros;
    return litros;
  };

  this.balar = function () {
    console.log("Beeeee");
  };

  this.toString = function () {
    return "Oveja [raza: " + this.raza +
      ", color: " + this.color +
      ", leche total producida: " + this.litrosProducidosTotal + " litros]";
  };
}

function Conejo(colores, orejasArriba) {
  this.colores = colores;
  this.orejasArriba = orejasArriba;
  this.carino = Math.floor(Math.random() * 101);
  this.potenciaRoedura = Math.floor(Math.random() * 100) + 1;

  Object.defineProperty(this, "indiceAchuchabilidad", {
    get: function () {
      return this.carino / this.potenciaRoedura;
    }
  });

  Object.defineProperty(this, "esAchuchable", {
    get: function () {
      return this.indiceAchuchabilidad > 0.5;
    }
  });

  this.achuchar = function () {
    if (this.esAchuchable) {
      console.log("Cariñitos");
    } else {
      console.log("buffffff");
    }
  };

  this.toString = function () {
    let texto = "Conejo [colores: " + this.colores.join(", ") +
      ", orejas: " + (this.orejasArriba ? "arriba" : "abajo") + "]";
    if (this.esAchuchable) {
      texto += " quiero ser tu mejor amigooo";
    }
    return texto;
  };
}

function Gallina(colorHuevo, mesesEdad) {
  this.colorHuevo = colorHuevo;
  this.mesesEdad = mesesEdad;
  this.huevosTotales = 0;
  this.historialHuevos = [];

  Object.defineProperty(this, "indicePonibilidad", {
    get: function () {
      const diasAdulta = (this.mesesEdad - 6) * 30;
      if (diasAdulta <= 0) return 0;
      return this.huevosTotales / diasAdulta;
    }
  });

  this.ponerHuevo = function () {
    this.huevosTotales++;
    this.historialHuevos.push(new Date());
    this.cacarear();
  };

  this.cacarear = function () {
    console.log("caaaaa caaaca ca caaaaaa");
  };

  this.toString = function () {
    let texto = "Gallina [color huevo: " + this.colorHuevo +
      ", huevos totales: " + this.huevosTotales + "]";
    if (this.indicePonibilidad < 0.1 && this.mesesEdad > 12) {
      texto += " Poooo po po po, me voy al puchero";
    }
    return texto;
  };
}

function Vaca(colores, longitudCuernos, maxLitrosLeche, tipoLeche) {
  this.colores = colores;
  this.longitudCuernos = longitudCuernos;
  this.maxLitrosLeche = maxLitrosLeche;
  this.tipoLeche = tipoLeche;
  this.embarazada = false;
  this.litrosProducidosTotal = 0;

  this.ordenar = function () {
    if (this.embarazada) {
      console.log("estoy esperando un ternerito");
      return 0;
    }
    const litros = Math.round(Math.random() * this.maxLitrosLeche * 100) / 100;
    this.litrosProducidosTotal += litros;
    if (Math.random() > 0.5) {
      this.mugir();
    }
    return litros;
  };

  this.mugir = function () {
    console.log("muuuuuuu-cho cuidado que tengo cuernos");
  };

  this.toString = function () {
    let texto = "Vaca [colores: " + this.colores.join(", ") +
      ", leche total: " + this.litrosProducidosTotal + " litros]";
    if (this.embarazada) {
      texto += " estoy esperando un ternerito";
    }
    return texto;
  };
}

const COLORES_GALLO = ["azul", "verde", "amarillo", "marrón", "blanco", "negro", "gris"];

function Gallo(raza) {
  this.raza = raza;
  this.colores = [];
  this.ultimoCanto = null;

  for (let i = 0; i < COLORES_GALLO.length; i++) {
    if (Math.random() > 0.7) {
      this.colores.push(COLORES_GALLO[i]);
    }
  }
  if (this.colores.length === 0) {
    this.colores.push(COLORES_GALLO[0]);
  }

  this.cantar = function () {
    const ahora = new Date();
    const hora = ahora.getHours();
    const cincoMinutos = 5 * 60 * 1000;
    const haPasadoTiempo = this.ultimoCanto === null ||
      (ahora - this.ultimoCanto) >= cincoMinutos;

    if ((hora >= 4 && hora <= 8) || haPasadoTiempo) {
      console.log("kikirikiiiiii");
      this.ultimoCanto = ahora;
    } else {
      console.log("poo popopo pooo");
    }
  };

  this.toString = function () {
    return "Gallo [raza: " + this.raza +
      ", colores: " + this.colores.join(", ") +
      ", último canto: " + (this.ultimoCanto ? this.ultimoCanto.toLocaleTimeString() : "nunca") + "]";
  };
}



// PARTE 2: CREAR UN OBJETO DE CADA TIPO Y MANIPULARLO


console.log("=== OVEJA ===");
const oveja1 = new Oveja("churra", 5);
oveja1.esquilada = true;
console.log("Ordeño 1: " + oveja1.ordenar() + " litros");
console.log("Ordeño 2: " + oveja1.ordenar() + " litros");
oveja1.embarazada = true;
console.log("Ordeño 3 (embarazada): " + oveja1.ordenar() + " litros");
oveja1.color = "marrón";
oveja1.balar();

console.log("=== CONEJO ===");
const conejo1 = new Conejo(["azul", "rojo", "verde"], false);
conejo1.achuchar();
if (!conejo1.esAchuchable) {
  conejo1.carino = 100;
  conejo1.potenciaRoedura = 1;
}
conejo1.achuchar();

console.log("=== GALLINA ===");
const gallina1 = new Gallina("azul fosforito", 7);
console.log("Índice de ponibilidad (recién creada): " + gallina1.indicePonibilidad);
gallina1.ponerHuevo();
gallina1.ponerHuevo();
gallina1.ponerHuevo();
console.log("Índice de ponibilidad (tras 3 huevos): " + gallina1.indicePonibilidad);

console.log("=== VACA ===");
const vaca1 = new Vaca(["negro"], 0.1, 20, "desnatada");
let mugioAlMenosUnaVez = false;
let intentos = 0;
while (!mugioAlMenosUnaVez && intentos < 50) {
  vaca1.ordenar();
  intentos++;
  if (intentos >= 2) mugioAlMenosUnaVez = true;
}
console.log("Leche total dada por la vaca: " + vaca1.litrosProducidosTotal + " litros");

console.log("=== GALLO ===");
const gallo1 = new Gallo("azarqueliana");
gallo1.cantar();
gallo1.cantar();
gallo1.cantar();

console.log("=== Mostrando los 5 animales ===");
console.log(oveja1.toString());
console.log(conejo1.toString());
console.log(gallina1.toString());
console.log(vaca1.toString());
console.log(gallo1.toString());