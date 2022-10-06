document.addEventListener("DOMContentLoaded", function() {

	var cookiebutton = document.getElementsByClassName("cookie__accept"),
			cookienotice = document.getElementsByClassName("cookie__notice");

	cookiebutton.length && cookiebutton[0].addEventListener("click", function(event) {
			event.preventDefault(), cookienotice.classList.add("remove"),

					function(cname, cvalue, exdays) {
							var d = new Date;
							d.setTime(d.getTime() + 24 * exdays * 60 * 60 * 1e3);
							var expires = "expires=" + d.toUTCString();
							document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
					}("user_accepted", 1, 365), location.reload()
					});
});
