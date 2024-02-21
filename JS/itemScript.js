let itemArry = [];
let categoryDemo;

// document.getElementById('category').addEventListener('change', function () {
//     categoryDemo = this.value;
//     console.log('Selected Category:', category);
// });

document.getElementById('category').addEventListener('change', function () {
    categoryDemo = this.value;
    // console.log('Selected Category:', categoryDemo);
});


function addData() {
    const code = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    const category = categoryDemo;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const expireDate = document.getElementById('expireDate').value;
    const discount = document.getElementById('discount').value;
    // console.log(category);

    if (code && name && quantity && price && expireDate && discount) {
        const item = { code, name, category, quantity, price, expireDate, discount };
        itemArry.push(item);
        updateTable();
        clearInputs();
    } else {
        alert('Add data Inorrectly ')
    }
}

function updateTable() {
    const table = document.getElementById('dataTable');

    // clear Row
    table.innerHTML = "<tr><th>Code</th><th>Name</th><th>Category</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";


    //add Data to Table 
    itemArry.forEach((item, index) => {
        const row = table.insertRow();
        const cellCode = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellcategory = row.insertCell(2);
        const cellquantity = row.insertCell(3);
        const cellprice = row.insertCell(4);
        const cellexpireDate = row.insertCell(5);
        const celldiscount = row.insertCell(6);
        const cellAction = row.insertCell(7);

        cellCode.textContent = item.code;
        cellName.textContent = item.name;
        cellcategory.textContent = item.category;
        cellquantity.textContent = item.quantity;
        cellprice.textContent = item.price;
        cellexpireDate.textContent = item.expireDate;
        celldiscount.textContent = item.discount;

        // create button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteData(index);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editData(index);

        cellAction.appendChild(deleteButton);
        cellAction.appendChild(editButton);
    });
    updateSalesDashBoard();
}

function updateSalesDashBoard() {
    // console.log("Updating Sales Dashboard");

    const burgersTable = document.getElementById('sales-Burgers-table');
    const submarineTable = document.getElementById('sales-Submarines-dashboard');
    const fiesTable = document.getElementById('sales-Fies-dashboard');
    const pastaTable = document.getElementById('sales-Pasta-dashboard');
    const chickenTable = document.getElementById('sales-Chicken-dashboard');
    const beveragesTable = document.getElementById('sales-Beverages-dashboard');

    burgersTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";
    submarineTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";
    fiesTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";
    pastaTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";
    chickenTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";
    beveragesTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";


    itemArry.forEach((item, index) => {
        // console.log("Processing item:", item);
        if (item.category == "burgers") {

            const row = burgersTable.insertRow();
            const cellCode = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellQuantity = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellExpireDate = row.insertCell(4);
            const cellDiscount = row.insertCell(5);
            const cellAction = row.insertCell(6);

            cellCode.textContent = item.code;
            cellName.textContent = item.name;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = item.price;
            cellExpireDate.textContent = item.expireDate;
            cellDiscount.textContent = item.discount;

            // const deleteButton = document.createElement('button');
            // deleteButton.textContent = 'Delete';
            // deleteButton.onclick = () => deleteData(index);

            const itemPurchase = document.createElement('button');
            itemPurchase.textContent = 'Purchase';
            itemPurchase.onclick = () => addToOrder(item);

            cellAction.appendChild(itemPurchase);

        } else if (item.category == "submarines") {

            const row = submarineTable.insertRow();
            const cellCode = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellQuantity = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellExpireDate = row.insertCell(4);
            const cellDiscount = row.insertCell(5);
            const cellAction = row.insertCell(6);

            cellCode.textContent = item.code;
            cellName.textContent = item.name;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = item.price;
            cellExpireDate.textContent = item.expireDate;
            cellDiscount.textContent = item.discount;

            const itemPurchase = document.createElement('button');
            itemPurchase.textContent = 'Purchase';
            itemPurchase.onclick = () => addToOrder(item);

            cellAction.appendChild(itemPurchase);

        } else if (item.category == "fies") {

            const row = fiesTable.insertRow();
            const cellCode = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellQuantity = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellExpireDate = row.insertCell(4);
            const cellDiscount = row.insertCell(5);
            const cellAction = row.insertCell(6);

            cellCode.textContent = item.code;
            cellName.textContent = item.name;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = item.price;
            cellExpireDate.textContent = item.expireDate;
            cellDiscount.textContent = item.discount;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteData(index);

            cellAction.appendChild(deleteButton);

        } else if (item.category == "pasta") {

            const row = pastaTable.insertRow();
            const cellCode = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellQuantity = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellExpireDate = row.insertCell(4);
            const cellDiscount = row.insertCell(5);
            const cellAction = row.insertCell(6);

            cellCode.textContent = item.code;
            cellName.textContent = item.name;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = item.price;
            cellExpireDate.textContent = item.expireDate;
            cellDiscount.textContent = item.discount;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteData(index);

            cellAction.appendChild(deleteButton);

        } else if (item.category == "chicken") {

            const row = chickenTable.insertRow();
            const cellCode = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellQuantity = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellExpireDate = row.insertCell(4);
            const cellDiscount = row.insertCell(5);
            const cellAction = row.insertCell(6);

            cellCode.textContent = item.code;
            cellName.textContent = item.name;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = item.price;
            cellExpireDate.textContent = item.expireDate;
            cellDiscount.textContent = item.discount;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteData(index);

            cellAction.appendChild(deleteButton);

        } else { //if (item.category == "beverages") 

            const row = beveragesTable.insertRow();
            const cellCode = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellQuantity = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellExpireDate = row.insertCell(4);
            const cellDiscount = row.insertCell(5);
            const cellAction = row.insertCell(6);

            cellCode.textContent = item.code;
            cellName.textContent = item.name;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = item.price;
            cellExpireDate.textContent = item.expireDate;
            cellDiscount.textContent = item.discount;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteData(index);

            cellAction.appendChild(deleteButton);
        }

    });
}


// function updateSalesDashBoard() {

//     const burgersTable = document.getElementById('sales-Burgers-table');

//     // Clear existing rows
//     burgersTable.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>ExpireDate</th><th>Discount</th><th>Action</th></tr>";


//     itemArry.forEach((item, index) => {
//         if (item.category == "Burgers") {
//             // const burgersTable = document.getElementById('sales-Burgers-table');
//             const row = burgersTable.insertRow();
//             const cellCode = row.insertCell(0);
//             const cellName = row.insertCell(1);
//             const cellQuantity = row.insertCell(2);
//             const cellExpireDate = row.insertCell(4);
//             const cellDiscount = row.insertCell(5);
//             const cellAction = row.insertCell(6);

//             cellCode.textContent = item.code;
//             cellName.textContent = item.name;
//             cellQuantity.textContent = item.quantity;
//             cellExpireDate.textContent = item.expireDate;
//             cellDiscount.textContent = item.discount;

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.onclick = () => deleteData(index);

//             cellAction.appendChild(deleteButton);
//         }
//     });
// }


function deleteData(index) {
    itemArry.splice(index, 1);
    updateTable();
}

function addToOrder(item) {
    const burgersTable = document.getElementById('sales-Burgers-table');

    burgersTable.innerHTML = "";

    const itemCell = burgersTable.insertCell(0);
    const priceCell = burgersTable.insertCell(1);
    const quantityCell = burgersTable.insertCell(2);
    const amountCell = burgersTable.insertCell(3);

    itemCell.textContent = item.name;


    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.value = item.price;
    amountInput.addEventListener("change", function () {
        updateTotal(row);
    });
    priceCell.appendChild(amountInput);

    quantityCell.value = 1;


    // Display total
    totalCell.textContent = item.quantity * item.amount;
}


//code, name, category, quantity, expireDate, discount 


function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('code').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
    document.getElementById('expireDate').value = '';
    document.getElementById('discount').value = '';
}

function editData(index) {
    const currentItem = itemArry[index];

    // Display data in pop-up window
    document.getElementById('code').value = currentItem.code;
    document.getElementById('name').value = currentItem.name;
    // document.getElementById('category').value = currentItem.category;
    document.getElementById('quantity').value = currentItem.quantity;
    document.getElementById('expireDate').value = currentItem.expireDate;
    document.getElementById('discount').value = currentItem.discount;

    // Open window
    openWindow();

    function modifyItem() {
        // modification 
        document.getElementById('submitBtn').onclick = function () {
            const newCode = document.getElementById('code').value;
            const newName = document.getElementById('name').value;
            // const newCategory = document.getElementById('category').value;
            const newQuantity = document.getElementById('quantity').value;
            const newExpireDate = document.getElementById('expireDate').value;
            const newdiscount = document.getElementById('discount').value;

            itemArry[index] = {
                code: newCode,
                name: newName,
                // category: newCategory,
                quantity: newQuantity,
                expireDate: newExpireDate,
                discount: newdiscount
            };

            closeModal();

            updateTable();
        };
    }

}


// function modifyItem(index) {
//     const newCode = document.getElementById('code').value;
//     const newName = document.getElementById('name').value;
//     const newCategory = document.getElementById('category').value;
//     const newQuantity = document.getElementById('quantity').value;
//     const newExpireDate = document.getElementById('expireDate').value;
//     const newdiscount = document.getElementById('discount').value;

//     // Update item array
//     itemArry[index].code = newCode;
//     itemArry[index].name = newName;
//     itemArry[index].category = newCategory;
//     itemArry[index].quantity = newQuantity;
//     itemArry[index].expireDate = newExpireDate;
//     itemArry[index].discount = newdiscount;

//     // Close 
//     closeModal();

//     updateTable();
// }

// // modification 
// function editData(index) {
//     const currentItem = itemArry[index];

//     document.getElementById('code').value = currentItem.code;
//     document.getElementById('name').value = currentItem.name;
//     document.getElementById('category').value = currentItem.category;
//     document.getElementById('quantity').value = currentItem.quantity;
//     document.getElementById('expireDate').value = currentItem.expireDate;
//     document.getElementById('discount').value = currentItem.discount;

//     // Open window
//     openWindow();

//     document.getElementById('submitBtn').addEventListener('click', function handler() {
//         modifyItem(index);

//         // Remove the event listener to avoid reattachment
//         document.getElementById('submitBtn').removeEventListener('click', handler);
//     });
// }




updateTable();

// pop-up Window
function openWindow() {
    document.getElementById('popUpWindow').style.display = 'flex';
}

// close the pop-up
function closeModal() {
    document.getElementById('popUpWindow').style.display = 'none';
}


function submitInput() {
    var inputCode = document.getElementById('inputCode').value;
    var inputName = document.getElementById('inputName').value;
    var inputCategory = document.getElementById('inputCategory').value;
    var inputQuantity = document.getElementById('inputQuantity').value;
    var inputExpireDate = document.getElementById('inputExpireDate').value;
    var inputdiscount = document.getElementById('inputdiscount').value;

    alert('Item Code: ' + inputCode +
        '\nItem Name: ' + inputName +
        '\nItem Category: ' + inputCategory +
        '\nItem Quantity: ' + inputQuantity +
        '\nItem Expire Date: ' + inputExpireDate +
        '\nItem discount: ' + inputdiscount);

    closeModal();
}

