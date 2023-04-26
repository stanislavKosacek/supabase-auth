import './style.css';
import {
  updateShoppingItem,
  getShoppingItemById,
} from '../../../functions/db.js';

export const ListItem = (props) => {
  const { id, done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  const element = document.createElement('div');
  element.classList.add('list-item');
  element.innerHTML = `
    <button class="icon-btn btn-tick${tickClass}"></button>
    <div class="list-item__body">
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;

  const handleTick = () => {
    updateShoppingItem(id, !done).then((respose) => {
      getShoppingItemById(id).then((respose) => {
        const { data } = respose;

        element.replaceWith(ListItem(data));
      });
    });
  };

  element.querySelector('.btn-tick').addEventListener('click', handleTick);
  return element;
};
