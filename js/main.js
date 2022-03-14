import * as tools from './tools.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
	<p>${tools.capitalizeFirstCharacter('this is a test')}</p>
	<p>${tools.getTodaysDate()}</p>
`;