window.addEventListener("load", function () {
  getData();
});

function getData() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "colors.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      let res = document.getElementById("contenedor-colores");
      for (let item of data) {
        res.innerHTML += `
            <div class="col-sm-3">
                <div class="cuadro mx-2 my-2" onclick="colores('${item.hex}')" style="background-color:${item.hex};"></div>
            </div>`;
      }
    }
  };
}


function colores(color) {
    var elemento = document.getElementsByClassName('active'); 
    var id = elemento[0].getAttribute('id');
    var Elementos = document.getElementsByClassName(id);
    for (let index = 0; index < Elementos.length; index++) {
        Elementos[index].style.fill=`${color}`;
        
    } 

        /*
        .base{
            fill: #00f7ff;
        }
        .linea{
            fill: #ff00ff;
        }
        .cuello{
            fill: #ff00ff;
        }
        .mangas{
            fill: #ff00ff;
        })*/
}