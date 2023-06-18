import { HomePage } from './pages/HomePage/index.js';
import { SignUpPage } from './pages/SignUpPage/index.js';
import { LoginPage } from './pages/LoginPage/index.js';
import './style.css';
import { getSession } from './functions/auth.js';

const appElement = document.querySelector('#app');

getSession().then((response) => {
  const { data } = response;
  const { session } = data;
  if (location.pathname === '/') {
    appElement.append(HomePage({ session: session }));
  } else if (location.pathname === '/sign-up') {
    appElement.append(SignUpPage({ session: session }));
  } else if (location.pathname === '/login') {
    appElement.append(LoginPage({ session: session }));
  }
});
