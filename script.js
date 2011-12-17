(function(){
    document.addEventListener('DOMContentLoaded', function() {
	window.ondeviceorientation = function(event) {
	    document.getElementById('alpha').innerHTML = event.alpha;
	    document.getElementById('beta').innerHTML = event.beta;
	    document.getElementById('gamma').innerHTML = event.gamma;
	};
    }, false);
})();

