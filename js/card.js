import{
    nameInput,
    volumeInput,
    peopleInput,
    onEditItem
    
    
}from "./index.js"

export const cardArea = document.getElementById("card_deck");
export const EDIT_BUTTON_PREFIX = 'item-edit-button-';
export const cardTemplate = ({ id, poolName, volumeOfWater, maxAmount }) => `
<div id="${id}" class="card">
    <img class=" card-img-top" src="main.jpg" alt="Card image">
    <div class="card-body">
        <h5 class="card-title">Pool "${poolName}"</h5>
        <p class="card-text">
            Volume: ${volumeOfWater}<br>
            Max Anount: ${maxAmount} peoples

            <button id="${EDIT_BUTTON_PREFIX}${id}" class="btn btn-outline-warning my-2 my-sm-0">
                Edit
            </button>
        </p>
    </div>
</div>
`

export const addItemToPage = ({ id, poolName, volumeOfWater, maxAmount }) => {
  cardArea.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({ id, poolName, volumeOfWater, maxAmount })
    
  );
  
  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`)
  editButton.addEventListener("click", onEditItem)
  
};


export const renderItemList = (pools) => {
  cardArea.innerHTML = "";
  for (const pool of pools) {
    addItemToPage(pool);
  }
};
export const clearInputs = () => {
  nameInput.value = "";
  volumeInput.value = "";
  peopleInput.value = "";
};


export const getInputValues = () => {
  return{
    poolName: nameInput.value,
    volumeOfWater: volumeInput.value,
    maxAmount: peopleInput.value
  }; 
};

export const calculateTotal = (dataArray, key) => {
  const total = dataArray.reduce((arr, item) => arr + key(item),0);
  return total;
};