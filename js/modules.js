  import {cardDeck} from "./index.js";

//making card template
const cardTemplate = ({ id, poolName, volumeOfWater: volumeOfWater, maxAmount }) => `
<div id="item-${id}" class="card">
<img class="card-img-top" src="../img/pool.jpeg" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">Pool "${poolName}"</h5>
<p class="card-text">
Volume: ${volumeOfWater}<br>
Max Anount: ${maxAmount} lyks
</p>
</div>
<div class="card-footer">
<small class="text-muted">
<i class="fas fa-edit fa-lg btnedit"></i>
<i class="fas fa-trash-alt fa-lg btndelete"></i>
</small>
</div>
</div>
`;

// adding constant function that will be used in  index.html

// this method ads field for item in html page
const addItemToPage = ({ id, poolName, volumeOfWater, maxAmount }) => {
    cardDeck.insertAdjacentHTML(
      "afterbegin",
      cardTemplate({ id, poolName, volumeOfWater, maxAmount })
    );
  };
  
  const renderItemsDOM = (dataArray) => {
    cardDeck.innerHTML = "";
    for (const item of dataArray) {
      addItemToPage(item);
    }
  };
  
  
  const calculateTotal = (dataArray, key) => {
    const total = dataArray.reduce((acc, item) => acc + key(item), 0);
    return total;
  }
  
  export { addItemToPage, renderItemsDOM, calculateTotal };