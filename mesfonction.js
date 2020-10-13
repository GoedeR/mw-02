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
}
 

 var p_footer = document.getElementById('p_footer');
    p_footer.addEventListener('dblclick',visiteur);


 function changer_titre(){
	var titre_header=document.getElementById('titre_header').innerHTML;
	if(titre_header=="Mes dev ! web en SNIR")
			document.getElementById('titre_header').innerHTML="CV de GOËDE Rémi";
	else{
		document.getElementById('titre_header').innerHTML="Mes dev ! web en SNIR"
		
	}
}
setTimeout(changer_titre, 1000);
document.getElementById('titre_header').addEventListener('mouseover',changer_titre);


function change_theme(){
	console.debug("change_theme");
console.debug(this.id)
var couleur;
if(this.id=='theme_bleu'){

document.getElementById('mon_header').style.backgroundColor="#4874a6";
document.getElementById('p_footer').style.backgroundColor="#4874a6";
document.getElementById('ma_nav').style.backgroundColor="#4874a6";
	}
	if(this.id=='theme_orange'){
document.getElementById('mon_header').style.backgroundColor="#cc5500";
document.getElementById('p_footer').style.backgroundColor="#cc5500";
document.getElementById('ma_nav').style.backgroundColor="#cc5500";
	}
	if(this.id=='theme_blood'){
document.getElementById('mon_header').style.backgroundColor="#850606";
document.getElementById('p_footer').style.backgroundColor="#850606";
document.getElementById('ma_nav').style.backgroundColor="#850606";
	}
}


document.getElementById('theme_blood').addEventListener('click',change_theme);

document.getElementById('theme_orange').addEventListener("click",change_theme);

document.getElementById('theme_bleu').addEventListener("click",change_theme);



