import './style.css';
import { signUp } from '../../../functions/auth';

export const SignUpForm = () => {
  const formElm = document.createElement('form');
  formElm.classList.add('login-form');
  formElm.innerHTML = `
    <h1>Registrace</h1>
    <div>
      <label>
        Email: <input class="input__email" type="email" />
      </label>
    </div>
    <div>
      <label>
        Heslo: <input class="input__password" type="password" />
      </label>
    </div>
    <div>
      <button type="submit">Přihlásit se</button>
    </div>
  `;

  formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = formElm.querySelector('.input__email');
    const passwordInput = formElm.querySelector('.input__password');

    signUp(emailInput.value, passwordInput.value).then((response) => {
      window.location.href = '/';
    });

    // registrace uživatele
  });

  return formElm;
};
