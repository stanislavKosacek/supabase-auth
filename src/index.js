import { HomePage } from './pages/HomePage/index.js';
import { SignUpPage } from './pages/SignUpPage/index.js';
import { LoginPage } from './pages/LoginPage/index.js';
import './style.css';

const appElement = document.querySelector('#app');

if (location.pathname === '/') {
  appElement.append(HomePage());
} else if (location.pathname === '/sign-up') {
  appElement.append(SignUpPage());
} else if (location.pathname === '/login') {
  appElement.append(LoginPage());
}
