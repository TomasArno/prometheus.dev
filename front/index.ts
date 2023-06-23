import { Router } from '@vaadin/router';
import './router';
import './pages/welcome';

window.addEventListener('load', () => {
	Router.go('/');
});
