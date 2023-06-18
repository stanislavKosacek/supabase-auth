import { Header } from '../../components/Header/index.js';
import { Footer } from '../../components/Footer/index.js';
import { SignUpForm } from './SignUpForm/index.js';

export const SignUpPage = ({ session }) => {
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

  element.querySelector('main').append(SignUpForm());

  return element;
};
