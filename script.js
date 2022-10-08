/* código original del preBootcamp

function result() {
  let answer="Incorrecta";
  if(document.getElementById("correcta1").checked)
  {
    answer="Correcta";
  } 
  if(document.getElementById("correcta2" ).checked)
  {
    answer= "Correcta"
  }
  
  alert(" Karen tu respuesta es:" +answer);
}*/


/*código refactorizado */
function result() {
    //alert("test"); es para probar si la función corre o no
    if (document.getElementById("correcta1").checked && document.getElementById("correcta2").checked) {
        alert(" Karen tu respuesta es: Correcta");
    } else {
        alert(" Karen tu respuesta es: Incorrecta");
    }
}
