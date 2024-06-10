var exploit = document.getElementById("xssinput");

var table = ['<','s','c','r','i','p','t','>','a','l','e','r','t','(','"','f','a','i','l','l','e',' ','x','s','s',' ','e','x','p','l','o','i','t','é','e','!','"',')',';','<','/','s','c','r','i','p','t','>'];
var i = 0;

document.addEventListener("click", function(){
    var boucle_interval = setInterval(function(){
        var tout = exploit.value = exploit.value + table[i];
        i++;
        if(exploit.value === '<script>alert("faille xss exploitée!");</script>'){
            clearInterval(boucle_interval);
                    //incremente (1, 1), (2, 2) etc
document.addEventListener("copy", function(){
    var iteration = 200;
var souris = setInterval(function(){
    //document.getElementById("pointer").style.display = "block";
    iteration--;
    document.getElementById("pointer").style.top = iteration + "px";
    document.getElementById("pointer").style.right = iteration + "px";
    if(iteration === 60){
        clearInterval(souris);
        document.getElementById("pointer").style.display = "none";
        document.getElementById("pointer2").style.display = "block";
        document.getElementById("btn").style.backgroundColor = "#0056b3";
        setTimeout(function(){
            document.getElementById("btn").style.backgroundColor = "#007bff";
        }, 100)
        //peut etre faire un animation du bouton et surout faire l'alert
        setTimeout(function(){
            alert("faille xss exploitée!");
        }, 200);
    }
}, 10)
//site upload
document.addEventListener("click", function(){
    window.location.href = "upload.html";
});
});
        };
    }, 100);
});

//designer la faille xss dans la requete get et dans le dormulaire