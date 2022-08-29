const interestCheck = document.querySelectorAll('.interest__check');

for (let i = 0; i < interestCheck.length; i++) {
  const interestActive = interestCheck[i].parentElement.nextElementSibling;

  if (interestActive !== null) {
    interestCheck[i].addEventListener('change', () => {
      const interestsActiveList = interestActive.querySelectorAll('.interest__check');

      interestsActiveList.forEach(elem => {
        if (interestCheck[i].checked === true) {
          elem.checked = true;
          } else {
          elem.checked = false;
        };
      });
    });       
  };
};