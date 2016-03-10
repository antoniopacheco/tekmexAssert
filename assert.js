	var overRideRes, results= document.getElementById("results");
	var allp = {};

	 this.test = function(name, fn){
		parentNodeEl = assert(true, name).appendChild(
			document.createElement("ul")
		);
		results = parentNodeEl
	   	runTest(fn,parentNodeEl);
	   	results= document.getElementById("results");
	}


	function runTest(fn, pn){
		var t = setTimeout;
		setTimeout = function(funct, time){
			results = pn;
			t(function(){
				results = pn;
				funct();

			},time);
		};
		fn();
		setTimeout = t;
	}


	 function assert(value, desc){
		var li = document.createElement("li");
		li.className = value ? "pass" : "fail";
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		if(!value)
			li.parentNode.parentNode.className = "fail";
		//results = document.getElementById("results");
		return li;

	}
