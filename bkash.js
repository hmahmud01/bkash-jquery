$(document).ready(function(){
    console.log("bkash.js loaded");
    //BKASH ELEMENTS
    var $b = $(".b");
    var $k = $(".k");
    var $a = $(".a");
    var $s = $(".s");
    var $h = $(".h");

    var letters = ["b", "K", "a", "s", "h"];
    var win ="Congrats! You won the game!";
    var loss = "Sorry! You lost the game! Better Luck Next Time";
    var bkash = "";

    function assemble(letter){
    console.log(letter);
    bkash+= letter;
    console.log(bkash);
    }


    // unlock button for individual k a s h buttons
    function unlockK(){
        $('#k').removeAttr("disabled");
    }

    function unlocka(){
        $('#a').removeAttr("disabled");
    }

    function unlocks(){
        $('#s').removeAttr("disabled");
    }

    function unlockh(){
        $('#h').removeAttr("disabled");
    }

    function disable() {
        $("#b").attr("disabled", true);
        $("#k").attr("disabled", true);
        $("#a").attr("disabled", true);
        $("#s").attr("disabled", true);
        $("#h").attr("disabled", true);
        console.log("disabled success");
        location.reload();
    }

    // Scramble bkash on click
    $( "#b" ).click(function() {  
    var letter = letters[Math.floor(Math.random()*letters.length)];
    // var letter = "b";
    console.log(letter);
    document.getElementById('charB').innerHTML = letter;
    $b.scramble(3000, 20, "alphabet", true);  
    // settimeout to ensure scramble
    setTimeout(function(){ 
        if(letter == "b"){
            assemble(letter);
            $("#b").attr("disabled", true);
            unlockK();
        }else{
            alert(loss);
            disable();    
        }
    }, 3000);
    });

    $( "#k" ).click(function() {
    var letter = letters[Math.floor(Math.random()*letters.length)];
    // var letter = "K";
    console.log(letter);
    document.getElementById('charK').innerHTML = letter;
    $k.scramble(3000, 20, "alphabet", true);
    // settimeout to ensure scramble
    setTimeout(function(){ 
        if(letter == "K"){
            assemble(letter);
            $("#k").attr("disabled", true);
            unlocka();
        }else{
            alert(loss);
            disable();    
        }
    }, 3000);
    });

    $( "#a" ).click(function() {
    var letter = letters[Math.floor(Math.random()*letters.length)];
    // var letter = "a";
    console.log(letter);
    document.getElementById('charA').innerHTML = letter;
    $a.scramble(3000, 20, "alphabet", true);
    // settimeout to ensure scramble
    setTimeout(function(){ 
        if(letter == "a"){
            assemble(letter);
            $("#a").attr("disabled", true);
            unlocks();
    
        }else{
            alert(loss);
            disable();    
        }
    }, 3000);
    });

    $( "#s" ).click(function() {
    var letter = letters[Math.floor(Math.random()*letters.length)];
    // var letter = "s";
    console.log(letter);
    document.getElementById('charS').innerHTML = letter;
    $s.scramble(3000, 20, "alphabet", true);
    // settimeout to ensure scramble
    setTimeout(function(){ 
        if(letter == "s"){
            assemble(letter);
            $("#s").attr("disabled", true);
            unlockh();
    
        }else{
            alert(loss);
            disable();    
        }
    }, 3000);
    });

    $( "#h" ).click(function() {
    var letter = letters[Math.floor(Math.random()*letters.length)];
    // var letter = "h";
    console.log(letter);
    document.getElementById('charH').innerHTML = letter;
    $h.scramble(2600, 20, "alphabet", true);
    // settimeout to ensure scramble
    setTimeout(function(){ 
        if(letter == "h"){
            assemble(letter);
            $("#h").attr("disabled", true);
            alert(win);
            location.reload(true);
        }else{
            alert(loss);
            disable();    
        }
    }, 3000);
    });
})

