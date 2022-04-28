// We create an IIFE to prevent using global variables in order to avoid memory leaks
(function () {
  const liElements = document.querySelector('ol').children;
  const btnElement = document.querySelector('.btn');
  const cardStarter = document.querySelector('.card--starter');
  const cardThankYou = document.querySelector('.card--thankYou');
  const spanEl = document.querySelector('.variable');

  let clickedElement = undefined;

  for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', () => {
      for (let j = 0; j < liElements.length; j++) {
        if (
          liElements[j].hasAttribute('id') &&
          liElements[i] !== liElements[j]
        ) {
          liElements[j].removeAttribute('id');
          clickedElement = undefined;
        }
      }

      const listItem = liElements[i];

      if (listItem.hasAttribute('id')) {
        listItem.removeAttribute('id');
        clickedElement = undefined;
      } else {
        listItem.setAttribute('id', 'clicked');
        clickedElement = listItem.textContent;
      }
    });
  }

  btnElement.addEventListener('click', () => {
    if (clickedElement === undefined) {
      alert('Please select a rating!');
      return;
    }

    cardStarter.classList.toggle('hide');
    cardThankYou.classList.toggle('hide');

    spanEl.textContent = clickedElement;
  });
})();
