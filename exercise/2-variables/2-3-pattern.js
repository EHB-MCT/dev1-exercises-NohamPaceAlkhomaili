"use strict";

setup(); 

function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let width = context.canvas.width();
    let height = context.canvas.height();

    drawPattern();
    
    function drawPattern() {

        context.fillStyle = "#2c3e51";
        context.beginPath();
        context.rect(0, 0, width, height);
        context.fill();
    }


}