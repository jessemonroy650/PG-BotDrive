//
//
//

function driveBot(a) {

    coordX = roundNumber(a.x);
    coordY = roundNumber(a.y);
    coordZ = roundNumber(a.z);

    if (coordX > trigger.left) {
        botNavigate.left  = 1;
    } else {
        botNavigate.left  = 0;
    }
    if (coordX < trigger.right) {
        botNavigate.right = 1;
    } else {
        botNavigate.right = 0;
    }
    // Z maxes at horizon, then rotates to negative.
    // Y effectively counter-rotates; it's 90° off of Z.
    if (((coordY > trigger.yminforward) && (coordY < trigger.ymaxforward)) || 
          (coordZ > trigger.zminforward)) {
        botNavigate.forward  = 1;
    } else {
        botNavigate.forward  = 0;
    }
    // The top is pointing straight up, almost 90° to the horizon.
    if (coordY > trigger.ystop) {
        botNavigate.stop = 1;
    } else {
        botNavigate.stop = 0;
    }
    // BELOW HERE - THESE ARE FATAL CONDITIONS.
    // The top is pointing down, slightly.
    //
    if (coordY < trigger.yfatal) {
        botNavigate.stop = 1;
    } else {
        botNavigate.stop = 0;
    }
    // It's upside down; the face is point down at about a 45° angle.
    if (coordZ < trigger.zfatal) {
        botNavigate.stop = 1;
        botNavigate.dead = 1;
    }
};
