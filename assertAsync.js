	var queue = [], overRideRes;

	function runTest(){
		if(queue.length){
			queue[0].fn(queue[0].parentNode);
			queue.shift();
		}
	}

	 this.test = function(name, fn){
		parent = assert(true, name).appendChild(
			document.createElement("ul")
		);
		queue.push(	
			{
				fn: function(parent){
					setTimeout(function() {
						overRideRes = parent;
						fn();
					}, 0);
					overRideRes = false;
				},
				parentNode: parent
			} 	
		);
		runTest();
	}

	 this.assert = function(value, desc){
	 	results = overRideRes ? overRideRes : document.getElementById("results");
		var li = document.createElement("li");
		li.className = value ? "pass" : "fail";
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		if(!value)
			li.parentNode.parentNode.className = "fail";
		return li;

	}

//})();