let customerArray = [];

function addCustomersData() {
    const membershipNumb = document.getElementById('membershipNumb').value;
    const customerName = document.getElementById('customerName').value;
    const customerContact = document.getElementById('customerContact').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerDob = document.getElementById('customerDob').value;
    const customerorders = document.getElementById('customerorders').value;

    if (membershipNumb && customerName && customerContact && customerAddress && customerDob && customerorders) {
        const customer = { membershipNumb, customerName, customerContact, customerAddress, customerDob, customerorders };
        customerArray.push(customer);
        updateCustomerTable();
        clearCustomerInputs();
    } else {
        alert('Add data correctly... ');
    }
}

function updateCustomerTable() {
    const table = document.getElementById('customerTable');

    // clear Row
    table.innerHTML = "<tr><th>MemberShip Number</th><th>Full Name</th><th>Contact</th><th>Address</th><th>DOB</th><th>Order History</th><th>Action</th></tr>";

    //add Data to Table 
    customerArray.forEach((customer, index) => {
        const row = table.insertRow();
        const cellmembershipNumb = row.insertCell(0);
        const cellcustomerName = row.insertCell(1);
        const cellcustomerContact = row.insertCell(2);
        const cellcustomerAddress = row.insertCell(3);
        const cellcustomerDob = row.insertCell(4);
        const customerorders = row.insertCell(5);
        const cellAction = row.insertCell(6);

        cellmembershipNumb.textContent = customer.membershipNumb;
        cellcustomerName.textContent = customer.customerName;
        cellcustomerContact.textContent = customer.customerContact;
        cellcustomerAddress.textContent = customer.customerAddress;
        cellcustomerDob.textContent = customer.customerDob;
        customerorders.textContent = customer.customerorders;

        // create button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteCustomerData(index);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editCustomerData(index);

        cellAction.appendChild(deleteButton);
        cellAction.appendChild(editButton);

    });
}

updateCustomerTable();

function deleteCustomerData(index) {
    customerArray.splice(index, 1);
    updateCustomerTable();
}

// clear Window Details
function clearCustomerInputs() {
    document.getElementById('membershipNumb').value = '';
    document.getElementById('customerName').value = '';
    document.getElementById('customerContact').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerDob').value = '';
    document.getElementById('customerorders').value = '';
}

// pop-up Window
function openCustomerDetailsWindow() {
    document.getElementById('popUpCustomerDetailsWindow').style.display = 'flex';
}

// close the pop-up
function closeAddNewCustomerWindow() {
    document.getElementById('popUpCustomerDetailsWindow').style.display = 'none';
} popUpCustomerDetailsWindow

function editCustomerData(index) {
    const currentItem = customerArray[index];

    // Display data in pop-up window
    document.getElementById('membershipNumb').value = currentItem.membershipNumb;
    document.getElementById('customerName').value = currentItem.customerName;
    document.getElementById('customerContact').value = currentItem.category;
    document.getElementById('customerAddress').value = currentItem.quantity;
    document.getElementById('customerDob').value = currentItem.expireDate;
    document.getElementById('customerorders').value = currentItem.suppliers;

    // Open window
    openCustomerDetailsWindow();

    function modifyItem() {
        // modification 
        document.getElementById('submitBtn').onclick = function () {
            const newmembershipNumb = document.getElementById('membershipNumb').value;
            const newcustomerName = document.getElementById('customerName').value;
            const newCategory = document.getElementById('category').value;
            const newQuantity = document.getElementById('quantity').value;
            const newExpireDate = document.getElementById('expireDate').value;
            const newSuppliers = document.getElementById('suppliers').value;

            itemArry[index] = {
                membershipNumb: newmembershipNumb,
                customerName: newcustomerName,
                category: newCategory,
                quantity: newQuantity,
                expireDate: newExpireDate,
                suppliers: newSuppliers
            };

            closeAddNewCustomerWindow();

            updateCustomerTable();
        };
    }

}

// const dataArray = [
//     { name: 'Carrot', code: '001' },
//     { name: 'Banana', code: '002' },
//     { name: 'Bread', code: '003' },
//     // Add more items to your data array
// ];

// function showSuggestions() {
//     const input = document.getElementById('searchInput').value.toLowerCase();
//     const suggestionsContainer = document.getElementById('suggestions');
//     suggestionsContainer.innerHTML = '';


//     const matchingItems = dataArray.filter(item => item.name.toLowerCase().includes(input) || item.code.includes(input));

//     matchingItems.forEach(item => {
//         const suggestion = document.createElement('div');
//         suggestion.textContent = `${item.name} - ${item.code}`;
//         suggestion.addEventListener('click', () => selectItem(item));
//         suggestionsContainer.appendChild(suggestion);
//     });
// }

// function selectItem(item) {
//     document.getElementById('searchInput').value = `${item.name} - ${item.code}`;
//     // You can do additional actions here based on the selected item if needed
// }
