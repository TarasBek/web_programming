import{
    cardArea
}from "./index.js"

const cardTemplate = ({ id, poolName, volumeOfWater: volumeOfWater, maxAmount }) => `
<div id="item-${id}" class="card" ">
  <img class="card-img-top" src="main.jpg" alt="Card image">
  <div class="card-body">
<h5 class="card-title">Pool "${poolName}"</h5>
<p class="card-text">
Volume: ${volumeOfWater}<br>
Max Anount: ${maxAmount} peoples
</p>
</div>
</div>
`;

const addItemToPage = ({ id, poolName, volumeOfWater, maxAmount }) => {
    cardArea.insertAdjacentHTML(
      "afterbegin",
      cardTemplate({ id, poolName, volumeOfWater, maxAmount })
    );
  };

  const renderItemList = (dataArray) => {
    cardArea.innerHTML = "";
    for (const item of dataArray) {
      addItemToPage(item);
    }
  };

  const calculateTotal = (dataArray, key) => {
    const total = dataArray.reduce((arr, item) => arr + key(item), 0);
    return total;
  };

export { addItemToPage, renderItemList,calculateTotal };