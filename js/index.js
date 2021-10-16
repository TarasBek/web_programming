import{
    addItemToPage,
    
    updateItemsOnPage,

clearInputs,
renderItemList,
getInputValues,
cardArea,
calculateTotal

} from "./card.js";



const searchField = document.getElementById("search_field");
const searchButton = document.getElementById("search_button");
const ascButton = document.getElementById("asc_sorting_button");
const descButton = document.getElementById("desc_sorting_button");
const countButton = document.getElementById("count_price_button");
const countResult = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");
const createButton = document.getElementById("create_button")
const nameInput = document.getElementById("pool_name");
const volumeInput = document.getElementById("valume_water");
const peopleInput = document.getElementById("people_emount");
//const editButton = document.getElementById("edit_button");




let pools =[]
let editMode = false
let editLiGlobal = ""




const addItem = ({poolName,volumeOfWater, maxAmount}) =>{
    const generatedId = uuid.v1();
    const newItem = {
        id: generatedId,
        poolName, 
        volumeOfWater, 
        maxAmount
    };
    pools.push(newItem);
    addItemToPage(newItem);
};

const updateItem = ({ poolName, volumeOfWater, maxAmount }) => {
    for (let pool of pools) {
        if (pool.id === editLiGlobal) {
            pool.poolName = poolName
            pool.volumeOfWater = volumeOfWater
            pool.maxAmount = maxAmount
            console.log(pool)
        }
    }
    updateItemsOnPage({ id: editLiGlobal, poolName, volumeOfWater, maxAmount })
};



export const onEditItem = (event) => {
    console.log(event.target)

    let editButton = event.target
    let editLI = editButton.parentNode.parentNode.id
    editLiGlobal = editLI

    console.log(editLI)

    if (!editMode) {
        editButton.innerHTML = "Cancel"
        createButton.innerHTML = "Save changes"
        nameInput.focus()
        editMode = true
    } else {
        editButton.innerHTML = "Edit"
        createButton.innerHTML = "Add pool"
        editMode = false
    }
}

const inputIsValid = ({ poolName, volumeOfWater, maxAmount }) => {
    let alertMesege = ""

    if (poolName == "" || !poolName.replace(/\s/g, '').length) {
        alertMesege += "poolName is not valid\n"
    }
    if (isNaN(volumeOfWater) || volumeOfWater < 0 || volumeOfWater == "" || !volumeOfWater.replace(/\s/g, '').length) {
        alertMesege += "volumeOfWater is not valid\n"
    }
    if (isNaN(maxAmount) || maxAmount < 0 || maxAmount == "" || !maxAmount.replace(/\s/g, '').length) {
        alertMesege += "maxAmount are not valid\n"
    }

    if (alertMesege !== "") {
        alert(alertMesege)
        return false
    } else {
        return true
    }
}

createButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const {poolName, 
        volumeOfWater, 
        maxAmount}  = getInputValues();
    clearInputs();
    if (inputIsValid({ poolName, volumeOfWater, maxAmount })) {
    if (!editMode){
        addItem({
            poolName, 
            volumeOfWater, 
            maxAmount,
        })
    }else{
        updateItem({
            poolName,
            volumeOfWater,
            maxAmount
        })
        createButton.innerHTML = "Add pool"
        editMode = false

    }
    }
});



//-----------------------------------------------------------------------------------------


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
    
    renderItemList(foundPools);
    
});




renderItemList(pools);
export default pools;
export { cardArea, nameInput, peopleInput, volumeInput };