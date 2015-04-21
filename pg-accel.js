var myAccel = {
	//
	WatchID : null,
	Options : { frequency: 250 },
	Callback : null,
	//
	init : function (callback, options) {
		if (callback) {
			myAccel.Callback = callback;
		} else { alert("Error on myAccel.init() needs a callback."); }
		if (options) {
			myAccel.Options  = options;
		}
		navigator.accelerometer.getCurrentAcceleration(myAccel.Callback,
			function() { alert("Error on myAccel.init() getCurrent"); });
	},
	start : function () {
		myAccel.WatchID = navigator.accelerometer.watchAcceleration(myAccel.Callback,
			function() { alert("Error on myAccel.start()"); },
			myAccel.Options);
	},
	stop : function () {
		navigator.accelerometer.clearWatch(myAccel.WatchID);
	},
	toggle : function () {
		if (myAccel.WatchID === null) {
			myAccel.WatchID = myAccel.start(myAccel.Callback);
		} else {
			myAccel.stop();
			myAccel.WatchID = null.
		}
	}
};

var myAccelView = {
	ViewRefs : { 'x': null, 'y': null, 'z': null, 'ts': null},
	//
	init : function (x, y, z, ts) {
		myAccelView.ViewRefs.x  = document.getElementById(x);
		myAccelView.ViewRefs.y  = document.getElementById(y);
		myAccelView.ViewRefs.z  = document.getElementById(z);
		myAccel.ViewRefs.ts = document.getElementById(ts);
	},
	clear : function () {
		myAccelView.ViewRefs.x.innerHTML  = '&nbsp;';
		myAccelView.ViewRefs.y.innerHTML  = '&nbsp;';
		myAccelView.ViewRefs.z.innerHTML  = '&nbsp;';
		myAccel.ViewRefs.ts.innerHTML = '&nbsp;';
	},
	update : function(acceleration) {
		myAccelView.ViewRefs.x.innerHTML  = acceleration.x;
		myAccelView.ViewRefs.y.innerHTML  = acceleration.y;
		myAccelView.ViewRefs.z.innerHTML  = acceleration.z;
		myAccelView.ViewRefs.ts.innerHTML = acceleration.timestamp;
	}
};
