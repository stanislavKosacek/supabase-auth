import { Header } from '../../components/Header/index.js';
import { Footer } from '../../components/Footer/index.js';
import { LoginForm } from './LoginForm/index.js';

export const LoginPage = ({ session }) => {
  if (session) {
    window.location.href = '/';
  }
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container"></main>
  `;
  element.append(Footer());

  element.querySelector('main').append(LoginForm());

  return element;
};
