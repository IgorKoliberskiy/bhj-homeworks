const tabs = document.getElementsByClassName("tab");
const tabsContent = document.getElementsByClassName("tab__content");

for (let i = 0; i < tabs.length; i++) {
	let tab = tabs[i];
	tab.addEventListener("click", function(event) {
		document.getElementsByClassName("tab_active")[0].classList.remove("tab_active");
		tab.classList.add("tab_active");

		document.getElementsByClassName("tab__content_active")[0].classList.remove("tab__content_active");
		tabsContent[i].classList.add("tab__content_active");
	})

};