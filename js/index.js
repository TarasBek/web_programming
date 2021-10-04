import { renderItemsDOM, calculateTotal} from "./modules.js";


const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");


let pools = [
    {
        id: 1,
        poolName: "dolphin",
        volumeOfWater: parseInt("340"),
        maxAmount: parseInt("20"),
    },
    {
        id: 2,
        poolName: "Sport life",
        volumeOfWater: parseInt("680"),
        maxAmount: parseInt("40"),
    },
    {
        id: 3,
        poolName: "Water Sport",
        volumeOfWater: parseInt("1000"),
        maxAmount: parseInt("50"),
    },
    {
        id: 4,
        poolName: "Bulk",
        volumeOfWater: parseInt("200"),
        maxAmount: parseInt("15"),
    },
    {
        id: 5,
        poolName: "Swim Swim",
        volumeOfWater: parseInt("100"),
        maxAmount: parseInt("5"),
    },
];

let sortedPools = [];

searchButton.addEventListener("click", (event)  => {  
    event.preventDefault(); // запобігає  оновленю  сторінки
    let foundPools = pools.filter(
        (pools) => pools.poolName.search(searchInput.value) !== -1
    );
    renderItemsDOM(foundPools);
});

sortCheckbox.addEventListener("change", () => {
    let sortedPools = Array.from(pools);
    if (sortCheckbox.checked) {
      sortedPools.sort(
        (first, second) => first.maxAmount - second.maxAmount
      );
    }
    renderItemsDOM(sortedPools);
  });

  countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalAmount = calculateTotal(pools, (pool) => pool.maxAmount);
    countTotal.innerHTML = totalAmount;
  });
  
  renderItemsDOM(pools);
  
  export default pools;
  export { cardDeck };