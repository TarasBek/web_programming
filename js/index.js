import{
    addItemToPage,
    clearInputs,
    renderItemList,
    getInputValues,
    cardArea,
    calculateTotal,
    DELETE_BUTTON_PREFIX,
    EDIT_BUTTON_PREFIX,
    idd
    
} from "./card.js";

import{
    getAllPools,postPools,deletePoolss,editPools, getPoolById
} from "./api.js";

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




let pools =[];
let editMode = false;
let editLiGlobal = "";



// const addItem = ({poolName,volumeOfWater, maxAmount}) =>{
//     const generatedId = uuid.v1();
//     const newItem = {
//         id: generatedId,
//         poolName, 
//         volumeOfWater, 
//         maxAmount
//     };
//     pools.push(newItem);
//     addItemToPage(newItem);
// };

//  const updateItem =({ poolName, volumeOfWater, maxAmount }) => 
//     //  const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "")
//      editPools(liToEdit, { poolName, volumeOfWater, maxAmount }).then(refetchAllPools)

let id = getPoolById()
const updateItem = ({poolName, volumeOfWater, maxAmount  }) => editPools(id, { poolName, volumeOfWater, maxAmount  }).then(refetchAllPools)


export const onEditItem =  async (event) => {
    let editButton = event.target
    let editLI = editButton.parentNode.parentNode.id
    editLiGlobal = editLI

    console.log(editLI)

    if (!editMode) {
        editButton.innerHTML = "Cancel"
        console.log("button activated")
        createButton.innerHTML = "Save changes"
        console.log("button activated")
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

    if (poolName == "" ) {
        alertMesege += "poolName is not valid\n"
    }
    if (isNaN(volumeOfWater) || volumeOfWater < 0 || volumeOfWater == "" ) {
        alertMesege += "volumeOfWater is not valid\n"
    }
    if (isNaN(maxAmount) || maxAmount < 0 || maxAmount == "") {
        alertMesege += "maxAmount are not valid\n"
    }

    if (alertMesege !== "") {
        alert(alertMesege)
        return false
    } else {
        return true
    }
}


const refetchAllPools  = async () =>{
    const allPools = await getAllPools();
    pools = allPools;
    renderItemList(pools, onDelete, onEditItem);
}
export const onDelete = (element) => {
    const id = element.target.id.replace(DELETE_BUTTON_PREFIX, "");
    deletePoolss(id).then(refetchAllPools);
}

createButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const {poolName, 
        volumeOfWater, 
        maxAmount}  = getInputValues();
    clearInputs();
    
    if (inputIsValid({ poolName, volumeOfWater, maxAmount })) {
    if (!editMode){
        postPools({
            poolName, 
            volumeOfWater, 
            maxAmount,
        }).then(refetchAllPools)
    }
    if(editMode){
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
    renderItemList(sortedPools,onEditItem, onDelete);
});

descButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sortedPools = Array.from(pools);
    if (descButton.click){
        sortedPools.sort(
            function(a,b) {return b.maxAmount - a.maxAmount}
        );
    };
    renderItemList(sortedPools, onEditItem, onDelete);
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
    
    renderItemList(foundPools,onEditItem, onDelete);
    
});





refetchAllPools();
// export default;
export { cardArea, nameInput, peopleInput, volumeInput };