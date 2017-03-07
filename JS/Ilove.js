"use strict";
var firstUl = document.getElementsByClassName("menu1")[0];
var secondUl = document.getElementsByClassName("menu2")[0];
var thirdUl = document.getElementsByClassName("menu3")[0];
var forthUl = document.getElementsByClassName("menu4")[0];
var fithUl = document.getElementsByClassName("menu5")[0];

var dropHolder = document.getElementsByClassName("dropHolder")[0];
var dropMenu = document.getElementsByClassName("dropMenu")[0];
/*
function loopThrough1() {
    var i;
    var duration = 300;
    for (i = 0; i <= firstUl.children.length -1; i++) {
        console.log(i);
        firstUl.children[i].style.animationDuration = duration + "ms";
        duration += 150;
    }
}

*/
//loopThrough1();
//loopThrough2();
//loopThrough3();
//loopThrough4();
//loopThrough5();

function loopThrough2() {
    var i;
    var duration = 300;
    var delay = 150;
    for (i = 0; i <= secondUl.children.length - 1; i++) {
        console.log(i);
        secondUl.children[i].style.animationDuration = duration + "ms";
        secondUl.children[i].style.animationDelay = delay + "ms";
      //  duration += 1000;
        delay += 150;
        console.log(duration + " / " + delay)
    }
}


function loopThrough3() {
    var i;
    var duration = 250;
    var delay = 150;
    for (i = 0; i <= thirdUl.children.length - 1; i++) {
        console.log(i);
        thirdUl.children[i].style.animationDuration = duration + "ms";
        thirdUl.children[i].style.animationDelay = delay + "ms";
        //duration += 300;
        delay += 125;
        console.log(duration + " / " + delay)
    }
}


function loopThrough4() {
    var i;
    var duration = 250;
    var delay = 150;
    for (i = 0; i <= forthUl.children.length - 1; i++) {
        console.log(i);
        forthUl.children[i].style.animationDuration = duration + "ms";
        forthUl.children[i].style.animationDelay = delay + "ms";
        duration += 10;
        delay += 125;
        console.log(duration + " / " + delay)
    }
}


function loopThrough5() {
    var i;
    var duration = 200;
    var delay = 150;
    for (i = 0; i <= fithUl.children.length - 1; i++) {
        console.log(i);
        fithUl.children[i].style.animationDuration = duration + "ms";
        fithUl.children[i].style.animationDelay = delay + "ms";
        duration += 100;
        delay += 150;
        console.log(duration + " / " + delay)
    }
}
//var list1 = document.getElementById("listA");
//list1.addEventListener("mouseover", function () {
  //  alert("success");
    //console.log(list1.children);
    //list1.children[0].style.display = "block";
    //list1.children[0].style.height = "60px";
    //list1.children[0].style.width = "120px";
    //list1.children[0].style.backgroundColor = "red";

//});


// converting hover to on click
(function ($) {
    function clickToggler() {

        if ($(dropMenu).hasClass("toBlock")) {
            $(dropMenu).removeClass("toBlock");
            rmLoopThrough1();
        }
        else {
            $(dropMenu).addClass("toBlock");
            loopThrough1();
        }

        function loopThrough1() {
            var i;
            var duration = 300;
            for (i = 0; i <= firstUl.children.length - 1; i++) {
                dropMenu.children[i].style.display = "block";
                firstUl.children[i].style.animationDuration = duration + "ms";
                duration += 150;
            }
        }

        function rmLoopThrough1() {
            var i;
            for (i = 0; i <= firstUl.children.length - 1; i++) {
                dropMenu.children[i].style.display = "none";
            }
        }
    }
dropHolder.addEventListener("click", clickToggler);

})(jQuery);