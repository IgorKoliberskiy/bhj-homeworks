const hasTooltips = document.getElementsByClassName('has-tooltip');
const tooltip = document.createElement('div');

for (let hasTooltip of hasTooltips) {
  hasTooltip.onclick = (event) => event.preventDefault();
  hasTooltip.addEventListener('click', () => {
    tooltip.className = 'tooltip tooltip_active';
    tooltip.innerText = hasTooltip.getAttribute('title');

    if (hasTooltip.querySelector('.tooltip')) {
      hasTooltip.querySelector('.tooltip').remove();
      return;
    };

    const tooltipActive = document.querySelectorAll('.tooltip_active');
    tooltipActive.forEach(el => el.remove());
    const tooltipLeft = hasTooltip.getBoundingClientRect().left;
    tooltip.setAttribute('style', `left: ${tooltipLeft}px; position: absolute`);
    hasTooltip.appendChild(tooltip);
  });
};