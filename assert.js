(function(){
			var queue = [], paused = false;

			this.test = function(name,fn){
				queue.push(
					function(){
						results = document.getElementById("results");
						results = assert(true, name).appendChild(
							document.createElement("ul")
						);
						fn();
					}
				);
				runTest();
				if(!paused)
					results = document.getElementById("results");
			}

			this.assert = function(value, desc){
				if(!paused){
					var li = document.createElement("li");
					li.className = value ? "pass" : "fail";
					li.appendChild(document.createTextNode(desc));
					results.appendChild(li);
				}else{
					console.log("pausado");
					console.log(results);
					queue.push(
						function(){
							var li = document.createElement("li");
							li.className = value ? "pass" : "fail";
							li.appendChild(document.createTextNode(desc));
							results = document.getElementById("results");
							results.appendChild(li);
						}
					);
				}
				return li;
			}

			function runTest(){

				if(!paused && queue.length){
					queue.shift()();
					if(!paused){
						resume();
					}
				}
			}	
			this.resume = function(){
				paused = false;
				setTimeout(runTest,1);
				
			};

			this.pause = function(){
				paused = true;
			};
		})();