function generator(){
	var random = 2 + 6 * Math.random(8);
	var phrases = ["I promise to see the sky more delicately.",
					"I need to accept myself that way, all imperfect.",
					"God has these when creating encounters.",
					"I wish to be your most hidden secret.",
					"Speak to the world gently that there is nothing better than love.",
					"See, it's just breathing. That makes it easier to explain...",
					"And if it doesn't work we try again",
					"Work hard with pleasure and everything will be rewarded."];
	random = parseInt(random);
	document.getElementById("phrase").innerHTML = "\"" + phrases[random] + "\"";
}