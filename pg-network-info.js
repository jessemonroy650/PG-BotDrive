    function onOffline() {
		thePlace = document.getElementById('ns');
		thePlace.classList.remove('button-action');
		thePlace.classList.add('button-caution');
		thePlace = document.getElementById('networkstatus').innerHTML = 'Offline';
		updateConnection();
    }
	//
    function onOnline() {
		thePlace = document.getElementById('ns');
		thePlace.classList.remove('button-caution');
		thePlace.classList.add('button-action');
		thePlace = document.getElementById('networkstatus').innerHTML = 'Online';
		updateConnection();
    }
	//
	function updateConnection() {
    	var networkState = navigator.connection.type;

	    var states = {};
    	states[Connection.UNKNOWN]  = 'Unknown connection';
	    states[Connection.ETHERNET] = 'Ethernet connection';
    	states[Connection.WIFI]     = 'WiFi connection';
	    states[Connection.CELL_2G]  = 'Cell 2G connection';
	    states[Connection.CELL_3G]  = 'Cell 3G connection';
    	states[Connection.CELL_4G]  = 'Cell 4G connection';
	    states[Connection.CELL]     = 'Cell generic connection';
	    states[Connection.NONE]     = 'No network connection';

		thePlace = document.getElementById('networktype').innerHTML = states[networkState];
		//alert('Connection type: ' + states[networkState]);
	}
