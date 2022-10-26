"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = '#8C0303';

for (let i = 0; i<3; i++){
    for (let j= 0; j < 6; j  ++){
        context.fillRect(50+(j*105), 50+( i * 110), 100, 50);

    }
}

for (let i= 0; i<3; i++){
    for (let j= 0; j < 6; j ++){
        context.fillRect(115 + (j *105), 105 + (i * 110), 100, 50);
    }
}