'use strict';

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js";


drawbubbles();

function drawbubbles(){
    context.fillStyle = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
    context.beginPath();
    context.ellipse(300, 350, 100, 50, 0, 0, Math.PI * 2, true);
    context.fill();
}