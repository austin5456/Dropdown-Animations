"use strict";
var firstUl = document.getElementsByClassName("menu1")[0];
var secondUl = document.getElementsByClassName("menu2")[0];
var thirdUl = document.getElementsByClassName("menu3")[0];
var forthUl = document.getElementsByClassName("menu4")[0];
var fithUl = document.getElementsByClassName("menu5")[0];

var dropHolder = document.getElementsByClassName("dropHolder")[0];
var dropMenu = document.getElementsByClassName("dropMenu");


var animation0 = {
    duration: 300,
    durationCompile: 150,
    delay: "",
    delayCompile: "",
    index: 0
};
var animation1 = {
    duration: 300,
    durationCompile: "",
    delay: 0,
    delayCompile: 150,
    index: 1
};
var animation2 = {
    duration: 250,
    durationCompile: "",
    delay: 0,
    delayCompile: 125,
    index: 2
};
var animation3 = {
    duration: 250,
    durationCompile: 10,
    delay: 0,
    delayCompile: 125,
    index: 3,
};
var animation4 = {
    duration: 200,
    durationCompile: 100,
    delay: 0,
    delayCompile: 150,
    index: 4
};

var animationList = [animation0, animation1, animation2, animation3, animation4];

function addingEvents(item) {
    var i;
    for (i = 0; i <= item.children.length - 1; i++) {
        item.children[i].addEventListener("click", loopThroughHandle("animation" + i));
    }
}

function loopThroughHandle(animation) {
    return function () {
        loopThrough(window[animation]);
    }
}

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
// converting hover to on click

/*
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
                dropMenu[0].children[i].style.display = "block";
                firstUl.children[i].style.animationDuration = duration + "ms";
                duration += 150;
            }
        }

        function rmLoopThrough1() {
            var i;
            for (i = 0; i <= firstUl.children.length - 1; i++) {
                dropMenu[0].children[i].style.display = "none";
            }
        }
    }
dropHolder.children[0].addEventListener("click", clickToggler);



})(jQuery);

*/

function loopThrough(animation) {

    var who = animation.index;
    var duration = animation.duration;
    var delay = animation.delay;
    var durationCompile = animation.durationCompile;
    var delayCompile = animation.delayCompile;

    if (hasClass(dropMenu[who], "toBlock")) {
        removeClass(dropMenu[who], "toBlock");
        rmDisplay();
    }
    else {
        addClass(dropMenu[who] ,"toBlock");
        displayIt();
    }

    function displayIt() {
        var i;
        for (i = 0; i <= dropMenu[who].children.length - 1; i++) {
            dropMenu[who].children[i].style.display = "block"
            dropMenu[who].children[i].style.animationDuration = duration + "ms";
            dropMenu[who].children[i].style.animationDelay = delay + "ms";
            duration += durationCompile;
            delay += delayCompile;
        }
    }

    function rmDisplay() {
        var i;
        for (i = 0; i <= dropMenu[who].children.length - 1; i++) {
            dropMenu[who].children[i].style.display = "none";
        }
    }
}

function removeClass(elem, cls) {
    var str = " " + elem.className + " ";
    elem.className = str.replace(" " + cls + " ", " ").replace(/^\s+|\s+$/g, "");
}
function addClass(elem, cls) {
    elem.className += (" " + cls);
}
function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return (str.indexOf(testCls) != -1);
}

addingEvents(dropHolder);
