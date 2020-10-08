
function 

function moncv(){
	alert ("Voici mon CV !!");
		var nom ="goede";
		var prenom ="remi";
		var phrase= "Je m'appelle";
		alert (phrase+" "+prenom+" "+nom);
}


function visiteur() {
    var numero = Math.floor(Math.random() * 1000);
    var text = "Tu es le visiteur n°";
    alert(text + numero);
    console.log("Test de la fonction :" + numero );
    var p_footer = document.getElementById('p_footer');
    p_footer.addEventListener('dblclick',visiteur);
}

