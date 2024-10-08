document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina3").style.display="none";
    document.getElementById("pagina4").style.display="none";
    document.getElementById("pagina5").style.display="none";

document.getElementById("link1").onclick = function(){

    document.getElementById("pagina1").style.display="block";
    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina3").style.display="none";
    document.getElementById("pagina4").style.display="none";
    document.getElementById("pagina5").style.display="none";
    document.getElementById("boxNascosto").style.display="none";
    
}

document.getElementById("link2").onclick = function(){

    document.getElementById("pagina2").style.display="block";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina3").style.display="none";
    document.getElementById("pagina4").style.display="none";
    document.getElementById("pagina5").style.display="none";
    document.getElementById("boxNascosto").style.display="none";
       
}

document.getElementById("link3").onclick = function(){

    document.getElementById("pagina3").style.display="block";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina4").style.display="none";
    document.getElementById("pagina5").style.display="none";
    document.getElementById("boxNascosto").style.display="none";
       
}

document.getElementById("link4").onclick = function(){

    document.getElementById("pagina4").style.display="block";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina3").style.display="none";
    document.getElementById("pagina5").style.display="none";
    document.getElementById("boxNascosto").style.display="none";
    document.getElementById("Nascosto1").style.display="none";
       
}


document.getElementById("link5").onclick = function(){

    document.getElementById("pagina5").style.display="block";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina3").style.display="none";
    document.getElementById("pagina4").style.display="none";
    document.getElementById("boxNascosto").style.display="none";
       
}

document.getElementById("immagine1").onclick=function(){

    document.getElementById("boxNascosto").style.display="block";
    document.getElementById("pagina3").style.display="none";
    

}



let elencoimmagini = document.querySelectorAll("#pagina4 img");
console.log(elencoimmagini);

for (let i = 0; i < elencoimmagini.length; i++) {
   elencoimmagini[i].onclick=function(){
    if(i == 0){
        document.getElementById("Nascosto1").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi1").onclick=function(){
        document.getElementById("Nascosto1").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 1){
        document.getElementById("Nascosto2").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi2").onclick=function(){
        document.getElementById("Nascosto2").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 2){
        document.getElementById("Nascosto3").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi3").onclick=function(){
        document.getElementById("Nascosto3").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 3){
        document.getElementById("Nascosto4").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi4").onclick=function(){
        document.getElementById("Nascosto4").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 4){
        document.getElementById("Nascosto5").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi5").onclick=function(){
        document.getElementById("Nascosto5").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 5){
        document.getElementById("Nascosto6").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi6").onclick=function(){
        document.getElementById("Nascosto6").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 6){
        document.getElementById("Nascosto7").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi7").onclick=function(){
        document.getElementById("Nascosto7").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }


    if(i == 7){
        document.getElementById("Nascosto8").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi8").onclick=function(){
        document.getElementById("Nascosto8").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 8){
        document.getElementById("Nascosto9").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi9").onclick=function(){
        document.getElementById("Nascosto9").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 9){
        document.getElementById("Nascosto10").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi10").onclick=function(){
        document.getElementById("Nascosto10").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }


    if(i == 10){
        document.getElementById("Nascosto11").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi11").onclick=function(){
        document.getElementById("Nascosto11").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

    if(i == 11){
        document.getElementById("Nascosto12").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi12").onclick=function(){
        document.getElementById("Nascosto12").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }


    if(i == 12){
        document.getElementById("Nascosto13").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi13").onclick=function(){
        document.getElementById("Nascosto13").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }


    if(i == 13){
        document.getElementById("Nascosto14").style.display="block";
        document.getElementById("pagina4").style.display="none";
        
        document.getElementById("chiudi14").onclick=function(){
        document.getElementById("Nascosto14").style.display="none"; 
        document.getElementById("pagina4").style.display="block";  
        }  
    }

} // graffa del click

} // fine ciclo 

let nuovoelenco = document.querySelectorAll(".box1 img");
console.log(nuovoelenco);

for (let i = 0; i < nuovoelenco.length; i++) {
    nuovoelenco[i].onclick=function(){
        if (i == 0) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto1").style.display="block"; 
    
            document.getElementById("1").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto1").style.display="none";  
        }

        }

        if (i == 1) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto2").style.display="block"; 
    
            document.getElementById("2").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto2").style.display="none";  
        }

        }

        if (i == 2) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto3").style.display="block"; 
    
            document.getElementById("3").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto3").style.display="none";  
        }

        }

        if (i == 3) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto4").style.display="block"; 
    
            document.getElementById("4").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto4").style.display="none";  
        }

        }

        if (i == 4) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto5").style.display="block"; 
    
            document.getElementById("5").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto5").style.display="none";  
        }

        }


        if (i == 5) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto6").style.display="block"; 
    
            document.getElementById("6").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto6").style.display="none";  
        }

        }

        if (i == 6) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto7").style.display="block"; 
    
            document.getElementById("7").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto7").style.display="none";  
        }

        }


        
    } // fine onclick
    
} // fine ciclo


let altroelenco = document.querySelectorAll(".box17 img");
console.log(altroelenco);


for (let i = 0; i < altroelenco.length; i++) {
    altroelenco[i].onclick=function(){

        if (i == 0) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto23").style.display="block"; 
    
            document.getElementById("23").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto23").style.display="none";  
        }

        }


        if (i == 1) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto24").style.display="block"; 
    
            document.getElementById("24").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto24").style.display="none";  
        }

        }


        if (i == 2) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto25").style.display="block"; 
    
            document.getElementById("25").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto25").style.display="none";  
        }

        }

        if (i == 3) {
            document.getElementById("sfondo").style.display="block";
            document.getElementById("foto26").style.display="block"; 
    
            document.getElementById("26").onclick=function(){
            document.getElementById("sfondo").style.display="none";
            document.getElementById("foto26").style.display="none";  
        }

        }

    }
    
}


document.getElementById("modulo").onsubmit= function(e){

    e.preventDefault()


let campo1 = document.getElementById("nome");
console.log(campo1);

if(campo1.value.trim().length == 0){
    document.getElementById("nome").classList.add("errore");
    document.getElementById("nome").nextElementSibling.innerHTML = " <br> Inserisci il tuo nome";
}
else{
    document.getElementById("nome").classList.remove("errore");
    document.getElementById("nome").nextElementSibling.innerHTML = "";
}


let campo2 = document.getElementById("cognome");
console.log(campo2);

if(campo2.value.trim().length == 0){
    document.getElementById("cognome").classList.add("errore");
    document.getElementById("cognome").nextElementSibling.innerHTML = " <br> Inserisci il tuo cognome";
}
else{
    document.getElementById("cognome").classList.remove("errore");
    document.getElementById("cognome").nextElementSibling.innerHTML = "";
}


let campo3 = document.getElementById("email");
console.log(campo3);

if(campo3.value.trim().length == 0){
    document.getElementById("email").classList.add("errore");
    document.getElementById("email").nextElementSibling.innerHTML = " <br> Inserisci la tua email";
}
else{
    document.getElementById("email").classList.remove("errore");
    document.getElementById("email").nextElementSibling.innerHTML = "";
}


if(!document.getElementById("accetta").checked){
    document.getElementById("accetta").nextElementSibling.nextElementSibling.innerHTML= " <br> accetta le condizioni per proseguire"
}
else{
    document.getElementById("accetta").nextElementSibling.nextElementSibling.innerHTML= ""
}




}


})