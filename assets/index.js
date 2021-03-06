
import './sass/styles.scss';

import Typed from 'typed.js';


const WOW = require('wowjs');

window.wow = new WOW.WOW({
	live: false
});


/*
Configure Typed JS
 */
const typed = new Typed('#typedContent', {
	strings: ["Crypto Block Pay", "Zerocoin + Pos 3.0", "Masternode Block Rewards"],
	typeSpeed: 30,
	backSpeed: 60,
	loop: true,
	backDelay: 1200,
	showCursor: true
});
typed.start();
/*
End Typed JS!
 */


function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		}
	}
	
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("return-to-top").style.display = "block";
	} else {
		document.getElementById("return-to-top").style.display = "none";
	}
	
	
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


window.wow.init();


