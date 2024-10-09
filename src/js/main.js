import '../scss/style.scss'

const currentYear = new Date().getFullYear();
const updateText = (element, text) => {
	if (element) {
		element.textContent = `${currentYear} ${text}`;
	}
};

updateText(document.getElementById('date'), 'All rights reserved.');
updateText(document.getElementById('datePl'), 'Wszelkie prawa zastrzeżone.');