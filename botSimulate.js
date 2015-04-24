///
///
///
function simulateDriveBot() {

    if ((botNavigate.stop) || (botNavigate.dead) || (deadman == 1)) {
        document.getElementById('d1').src = 'i/i0.png';
        document.getElementById('d2').src = 'i/i0.png';
        document.getElementById('d3').src = 'i/i0.png';
        document.getElementById('d4').src = 'i/i0.png';
        document.getElementById('d6').src = 'i/i0.png';
        document.getElementById('d7').src = 'i/i0.png';
        document.getElementById('d8').src = 'i/i0.png';
        document.getElementById('d9').src = 'i/i0.png';
        if ((botNavigate.stop) || (deadman == 1)) {
            document.getElementById('d1').src = 'i/iD.png';
            document.getElementById('d9').src = 'i/iU.png';
            document.getElementById('d3').src = 'i/iR.png';
            document.getElementById('d7').src = 'i/iL.png';
        }
    } else {
        if (botNavigate.forward) {
            document.getElementById('d1').src = 'i/iU.png';
            document.getElementById('d2').src = 'i/iU.png';
        } else {
            document.getElementById('d1').src = 'i/i0.png';
            document.getElementById('d2').src = 'i/i0.png';
        }
        if (botNavigate.backward) {
            document.getElementById('d8').src = 'i/iD.png';
            document.getElementById('d9').src = 'i/iD.png';
        } else {
            document.getElementById('d8').src = 'i/i0.png';
            document.getElementById('d9').src = 'i/i0.png';
        }
        if (botNavigate.left) {
            document.getElementById('d3').src = 'i/iL.png';
            document.getElementById('d4').src = 'i/iL.png';
        } else {
            document.getElementById('d3').src = 'i/i0.png';
            document.getElementById('d4').src = 'i/i0.png';
        }
        if (botNavigate.right) {
            document.getElementById('d6').src = 'i/iR.png';
            document.getElementById('d7').src = 'i/iR.png';
        } else {
            document.getElementById('d6').src = 'i/i0.png';
            document.getElementById('d7').src = 'i/i0.png';
        }
    }
}
