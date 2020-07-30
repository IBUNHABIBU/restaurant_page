import loadMainPage from './main';
import createMenu from './menu';
import createContact from './contact';
const navbar = () => {
	const menu = document.getElementById('myMenu');
	menu.addEventListener('click',createMenu);
	const contact = document.getElementById('contact');
	contact.addEventListener('click',createContact);
}
function init() {
	loadMainPage();
	// createHomePage();
	navbar();
	
}
init();