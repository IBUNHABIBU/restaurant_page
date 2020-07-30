import loadMainPage from './main';
import createMenu from './menu';
const navbar = () => {
	const menu = document.getElementById('myMenu');
	menu.addEventListener('click',createMenu);
}
function init() {
	loadMainPage();
	// createHomePage();
	navbar();
	
}
init();