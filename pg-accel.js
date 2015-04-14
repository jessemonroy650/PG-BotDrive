	function accelClear() {
		document.getElementById('accelX').innerHTML = '&nbsp;';
		document.getElementById('accelY').innerHTML = '&nbsp;';
		document.getElementById('accelZ').innerHTML = '&nbsp;';
		document.getElementById('timestamp').innerHTML = '&nbsp;';
	}
	function accelUpdate(acceleration) {
		document.getElementById('accelX').innerHTML = acceleration.x;
		document.getElementById('accelY').innerHTML = acceleration.y;
		document.getElementById('accelZ').innerHTML = acceleration.z;
		document.getElementById('timestamp').innerHTML = acceleration.timestamp;
	}
	function accelOff() {
		if (navigator.accelerometer) {
			navigator.accelerometer.clearWatch(gAccelWatchID);
		}
	}
