$('h3').css({color: 'white', background: 'black'})

var X = document.getElementById('Aceptar');
X.addEventListener("click", Aceptar);

  function Aceptar()
  {
      N = 0
	  
	  var Nombres = document.querySelector('#Nombres').value;
	  var Apellidos = document.querySelector('#Apellidos').value;
	  var Usuario = document.querySelector('#Usuario').value;
	  var Departamento = document.querySelector('#Departamento').value;
	  var Ciudad = document.querySelector('#Ciudad').value;
	  var Estrato = document.querySelector('#Estrato').value;
	  
	var ID = 'row' + N;
	
	var Reg = '<tr id = ' + ID + '></td><td>' + Nombres + '</td><td>' + Apellidos + '</td><td> @' + Usuario + '</td><td>' + Departamento + '</td><td>' + Ciudad + '</td><td>' + Estrato + '</td></tr>';
	
    $("#Tabla_Formulario").append(Reg);
  
    N++;
}