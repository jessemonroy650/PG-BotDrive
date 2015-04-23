/*
	Date: 2015-04-13
*/
	//
	function onOffline() {
		thePlace = document.getElementById('nt');
		// flip the button color
		thePlace.classList.remove('button-action');
		thePlace.classList.add('button-caution');
		updateConnection();
    };
	//
	function onOnline() {
		thePlace = document.getElementById('nt');
		// flip the button color
		thePlace.classList.remove('button-caution');
		thePlace.classList.add('button-action');
		updateConnection();
    };
	//
	function updateConnection() {
    	var networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN] = "Unknown";
	    states[Connection.ETHERNET] = "Ethernet";
    	states[Connection.WIFI] = "WiFi";
	    states[Connection.CELL_2G] = "Cell 2G";
	    states[Connection.CELL_3G] = "Cell 3G";
    	states[Connection.CELL_4G] = "Cell 4G";
	    states[Connection.CELL] = "Cell generic";
	    states[Connection.NONE] = "No network";

		document.getElementById('networktype').innerHTML = states[networkState];
	};
