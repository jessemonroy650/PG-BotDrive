/*
	Date: 2015-04-13
*/
var connectionInfo = {
	networkState : null,
	//
	getState : function () {
		connectionInfo.networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN]  = "Unknown";
	    states[Connection.ETHERNET] = "Ethernet";
    	states[Connection.WIFI]     = "WiFi";
	    states[Connection.CELL_2G]  = "Cell 2G";
	    states[Connection.CELL_3G]  = "Cell 3G";
    	states[Connection.CELL_4G]  = "Cell 4G";
	    states[Connection.CELL]     = "Cell generic";
	    states[Connection.NONE]     = "No network";

		return states[connectionInfo.networkState];
	}
};

var connectionView = {
	//
	offline : function () {
		thePlace = document.getElementById('nt');
		// flip the button color
		thePlace.classList.remove('button-action');
		thePlace.classList.add('button-caution');
		connectionView.updateConnection();
    },
	//
	online : function () {
		thePlace = document.getElementById('nt');
		thePlace.classList.remove('button-caution');
		thePlace.classList.add('button-action');
		connectionView.updateConnection();
    },
	//
	updateConnection : function () {
		document.getElementById('networktype').innerHTML = connectionInfo.getState();
	}
};

