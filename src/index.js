function updateSubtotal(product) {

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');


  const price = parseFloat(priceElement.innerText);
  const quantity = parseFloat(quantityElement.value);

  const subtotal = price * quantity;
  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const totalValue = document.querySelector('#total-value span');
  let total = 0;
  for (let product of products) {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  }
  totalValue.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const buttonClicked = event.currentTarget;
  const rowToRemove = buttonClicked.parentNode.parentNode;
  rowToRemove.parentNode.removeChild(rowToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.getElementById('name2');
  const priceInput = document.getElementById('price2');

  const newName = nameInput.value;
  const newPrice = priceInput.value;

  const tbody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product')
  newRow.innerHTML = `
  <td class="name">
    <span>${newName}</span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;
  tbody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');

  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);

  }

  const addProductButton = document.getElementById('add-product-button');
  addProductButton.addEventListener('click', createProduct);

});



