import './css/styles.scss'; //imports a file from webpack

window.onload=function(){ 
    document.getElementById("myButton").addEventListener("click", generateExcuse);
}


var generateExcuse = function(){
    var whoDidIt = ["An Inglorious Bastard","An ungrateful whelp","An angry lunchlady","A two-timin' floozy","This crazy bird","My damn dog Herbert","Serverus Snape"];
    var whatTheyDid = ["stole my heart","set fire to my neighbors house","ate my freakin cookies","left me high and dry","slept with my best friend","stepped on my foot","spilled coffee on my favorite shoes","left me a million bucks","cast the killing curse"];
    var whereTheyDidIt = ["at Casa Blanca.","during potions class.","on the way to work.", "in bed.","while doing yoga.","at the Sushi restaurant.","while getting money out of the bank.","on the meri-go-round.", "at the bar.","while scaling Mt. Fuji."];
    
    var x = Math.floor(Math.random() * whoDidIt.length);
    var y = Math.floor(Math.random() * whatTheyDid.length);
    var z = Math.floor(Math.random() * whereTheyDidIt.length);
    
    var excuse = whoDidIt[x]+' '+whatTheyDid[y]+' '+whereTheyDidIt[z];
    
    document.querySelector('.excuseContainer').innerHTML = excuse;
}

