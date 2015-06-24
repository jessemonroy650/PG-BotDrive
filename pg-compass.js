    function compassClear() {
        document.getElementById('heading').innerHTML = '';
    }
    function compassUpdate(heading) {
        document.getElementById('heading').innerHTML = heading.magneticHeading;
    }
    function compassOff() {
        if (navigator.compass) {
            navigator.compass.clearWatch(gCompassWatchID);
        }
    }
