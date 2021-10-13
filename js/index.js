import{
renderItemList,
addItemToPage,
calculateTotal
} from "./card.js";


const cardArea = document.getElementById("card_deck");
const searchField = document.getElementById("search_field");
const searchButton = document.getElementById("search_button");
const ascButton = document.getElementById("asc_sorting_button");
const descButton = document.getElementById("desc_sorting_button");
const countButton = document.getElementById("count_price_button");
const countResult = document.getElementById("count_results");
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

ascButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sortedPools = Array.from(pools);
    if (ascButton.click){
        sortedPools.sort(
            function(a,b) {return a.maxAmount - b.maxAmount}
        );
    };
    renderItemList(sortedPools);
});

descButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sortedPools = Array.from(pools);
    if (descButton.click){
        sortedPools.sort(
            function(a,b) {return b.maxAmount - a.maxAmount}
        );
    };
    renderItemList(sortedPools);
});

countButton.addEventListener("click", (event) => {
    event.preventDefault();
    countResult.classList.remove("hidden");
    const totalAmount = calculateTotal(pools,(pool) => pool.maxAmount);
    countTotal.innerHTML = totalAmount;
});

searchButton.addEventListener("click", (event)  => {  
    event.preventDefault(); // запобігає  оновленю  сторінки
    let foundPools = pools.filter(

        (pools) => pools.poolName.search(searchField.value) !== -1,
        
    );
    let foundPools1 = pools.filter(

        (pools) => pools.volumeOfWater.find(searchField.value) ,
        
    );
    let foundPools2 = pools.filter(

        (pools) => pools.maxAmount.find(searchField.value) ,
        
    );
    renderItemList(foundPools);
    renderItemList(foundPools1);
    renderItemList(foundPools2);
});


renderItemList(pools);
export default pools;
export { cardArea };