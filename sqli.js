//ecriture
var exploit = document.getElementById("username");
var exploit2 = document.getElementById("password");

var table = ['a', 'd', 'm', 'i', 'n'];
var table2 = ["'", " ", "o", "r", " ", "1", "=", "1", ";", "-", "-"];
var i = 0;
var i2 = 0;

document.addEventListener("click", function(){
    var boucle_interval = setInterval(function(){
        var tout = exploit.value = exploit.value + table[i];
        i++;
        if(exploit.value === 'admin'){
            clearInterval(boucle_interval);
            var boucle_interval2 = setInterval(function(){
                var tout2 = exploit2.value = exploit2.value + table2[i2];
                i2++;
                if(exploit2.value === "' or 1=1;--"){
                    clearInterval(boucle_interval2);
                    
//déplacement de la souris
i = 200;
i2 = 200;
var interval = setInterval(function(){
    document.getElementById("pointer").style.right = i + "px";
    document.getElementById("pointer").style.top = i2 + "px";
    if(i === 106){
        i = 107;
        if(i2 === 70){
            i = 106;
            clearInterval(interval);
            document.getElementById("pointer").style.display = "block";//none
            document.getElementById("pointer2").style.display = "block";
            setTimeout(function(){
                document.getElementById("eye").style.display = "block";//none
                document.getElementById("eye2").style.display = "block";
            }, 100);
            setTimeout(function(){
                document.getElementById("password").type = "text";
            }, 100)
        }
    }
    i--;
    i2--;
}, 10);
                }
            }, 100);
};}, 100)
document.addEventListener("copy", function(){
    //baissser la souris sur le btn
    var boucle_int = setInterval(function(){
        document.getElementById("pointer2").style.display = "none";//none
        document.getElementById("pointer").style.display = "block";
        document.getElementById("pointer").style.right = i + "px";
        document.getElementById("pointer").style.top = i2 + "px";
        if(i2 === 113){
            clearInterval(boucle_int);
            document.getElementById("pointer").style.display = "none";//none
            document.getElementById("pointer2").style.top = 111 + "px";
            document.getElementById("pointer2").style.right = 153 + "px";
            document.getElementById("pointer2").style.display = "block";
            setTimeout(function(){
                document.getElementById("submit").style.backgroundColor = "#0056b3";
                setTimeout(function(){
                    document.getElementById("submit").style.backgroundColor = "#007bff";
                    setTimeout(function(){
                        window.location.href = "connexion.html";
                    }, 200);
                }, 100);
            }, 100);
        }
        i++;
        i2++;
    }, 30)
    //se barrer sur l'autre page
    //window.location.href = "connexion/index.html";
});
});
