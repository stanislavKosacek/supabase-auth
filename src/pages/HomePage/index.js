import { Header } from '../../components/Header/index.js';
import { Footer } from '../../components/Footer/index.js';
import { ShopList } from './ShopList/index.js';

export const HomePage = ({ session }) => {
  if (!session) {
    window.location.href = '/login';
  }
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container"></main>
  `;
  element.append(Footer());

  element.querySelector('main').append(
    ShopList({
      day: 'Pondělí',
      dayResult: 'loading',
      session: session,
    }),
  );

  return element;
};
