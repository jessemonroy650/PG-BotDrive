var myAccel = {
	//
	WatchID : null,
	Options : { frequency: 250 },
	Callback : null,
	//
	init : function (callback, options) {
		if (callback) {
			myAccel.Callback = callback;
		} else { alert("Error on myAccel.init() needs a callback."); return; }
		if (options) {
			myAccel.Options  = options;
		}
		myAccel.WatchID = myAccel.start();
	},
	start : function () {
		myAccel.WatchID = navigator.accelerometer.watchAcceleration(myAccel.Callback,
			function() { alert("Error on myAccel.start()"); },
			myAccel.Options);
	},
	stop : function () {
		alert('stop accel');
		navigator.accelerometer.clearWatch(myAccel.WatchID);
		alert('stop accel - done');
	},
	toggle : function () {
		if (myAccel.WatchID == null) {
			myAccel.WatchID = myAccel.start();
		} else {
			myAccel.stop();
			myAccel.WatchID = null;
		}
	}
};

function roundNumber(num) {
    var dec = 3;
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
};

var myAccelView = {
	ViewRefs : { 'x': null, 'y': null, 'z': null, 'ts': null},
	//
	init : function (x, y, z, ts) {
		myAccelView.ViewRefs.x  = document.getElementById(x);
		myAccelView.ViewRefs.y  = document.getElementById(y);
		myAccelView.ViewRefs.z  = document.getElementById(z);
		myAccelView.ViewRefs.ts = document.getElementById(ts);
	},
	clear : function () {
		myAccelView.ViewRefs.x.innerHTML  = '&nbsp;';
		myAccelView.ViewRefs.y.innerHTML  = '&nbsp;';
		myAccelView.ViewRefs.z.innerHTML  = '&nbsp;';
		myAccelView.ViewRefs.ts.innerHTML = '&nbsp;';
	},
	update : function(acceleration) {
		myAccelView.ViewRefs.x.innerHTML  = roundNumber(acceleration.x);
		myAccelView.ViewRefs.y.innerHTML  = roundNumber(acceleration.y);
		myAccelView.ViewRefs.z.innerHTML  = roundNumber(acceleration.z);
		myAccelView.ViewRefs.ts.innerHTML = roundNumber(acceleration.timestamp);
	}
};
