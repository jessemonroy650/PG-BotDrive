	function compassClear() {
		document.getElementById('heading').innerHTML = '';
	}
	function compassUpdate(heading) {
		document.getElementById('heading').innerHTML = heading.magneticHeading;
	}
	function compassOff() {
		navigator.compass.clearWatch(gCompassWatchID);
	}
