/*
	Date: 2015-04-13
*/
var pgNetworkInfo = {
	//
    var states = {
		Connection.UNKNOWN : 'Unknown',
	    Connection.ETHERNET : 'Ethernet';
    	Connection.WIFI     : 'WiFi',
	    Connection.CELL_2G : 'Cell 2G',
	    Connection.CELL_3G : 'Cell 3G',
    	Connection.CELL_4G :'Cell 4G',
	    Connection.CELL    : 'Cell generic',
	    Connection.NONE    : 'No network'
	},
   	var networkState = this.states[Connection.UNKNOWN];
	//
	onOffline : function() {
		thePlace = document.getElementById('ns');
		// flip the button color
		thePlace.classList.remove('button-action');
		thePlace.classList.add('button-caution');
		// Change the text to reflect the state
		thePlace = document.getElementById('networkstatus').innerHTML = 'Offline';
		updateConnection();
    },
	//
	onOnline : function() {
		thePlace = document.getElementById('ns');
		// flip the button color
		thePlace.classList.remove('button-caution');
		thePlace.classList.add('button-action');
		// Change the text to reflect the state
		thePlace = document.getElementById('networkstatus').innerHTML = 'Online';
		updateConnection();
    },
	//
	updateConnection : function() {
    	networkState = navigator.connection.type;
		thePlace = document.getElementById('networktype').innerHTML = this.states[networkState];
	}

}
