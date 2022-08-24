const rotator = document.querySelectorAll(".rotator");

for (let i = 0; i < rotator.length; i++) {
	
	let rotatorCase = rotator[i].querySelector(".rotator__case");
		
	setInterval(() => {
		if(rotatorCase.classList.contains("rotator__case_active")) {
			rotatorCase.classList.remove("rotator__case_active");
		};
		
		rotatorCase = rotatorCase.nextElementSibling;
		
		if(rotatorCase == null) {
			rotatorCase = rotator[i].querySelector(".rotator__case");
		};
		
		rotatorCase.classList.add("rotator__case_active");
		
	}, 1000);
}