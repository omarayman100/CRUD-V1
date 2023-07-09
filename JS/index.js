
let getAddBtnId = document.getElementById("#btnAdd");
let getInputName = document.getElementById("inPutName");
let getInputQuantity = document.getElementById("inPutBalance");
let getInputId = document.getElementById("inPutId");

allUsers = [];
if (localStorage.getItem("AllUsers") != null) {
  
  allUsers = JSON.parse(localStorage.getItem("AllUsers"));
} else {
  allUsers = []
}
getDisplayUser();
function getAddUser() {
  if (getInputName.value == "") {
    alert("Please Enter Product Name");
  } else if (getInputQuantity.value == "") {
    alert("Please Enter Product Quantity");
  } else if (getInputId.value == "") {
    alert("Please Enter Product ID/Description");
  } else {
    user = {
      name: getInputName.value,
      Quantity: getInputQuantity.value,
      id: getInputId.value,
    };
    allUsers.push(user);
    localStorage.setItem("AllUsers", JSON.stringify(allUsers));
    getDisplayUser();
    clearForm();
  }
}
function getDisplayUser() {
  cartona = "";
  for (i = 0; i < allUsers.length; i++) {
    cartona += `<tr>
              <td>
                ${i + 1}
              </td>
              <td>
                ${allUsers[i].name}
              </td>
              <td>
                ${allUsers[i].Quantity}
              </td>
              <td>
                ${allUsers[i].id}
              </td>
              <td class="text-center">
                <button onclick="getUpDate(${i})"   class="btn btn-primary px-3 me-3">Edit</button>
                <button onclick="getDeleteUser(${i})" class="btn btn-warning px-2">Delete</button>
              </td>
            </tr>`;
  }
  document.getElementById("displayUsers").innerHTML = cartona;
}

function getDeleteUser(i) {
  allUsers.splice(i, 1);
    localStorage.setItem("AllUsers", JSON.stringify(allUsers));
  getDisplayUser();
}
function getUpDate(i) {
  let newName = prompt("Enter Ur New Name");
  let newQuantity = prompt("Enter Ur New Quantity");
  let newId = prompt("Enter Ur New ID");
  allUsers[i].name = newName;
  allUsers[i].Quantity = newQuantity;
  allUsers[i].id = newId;
  localStorage.setItem("AllUsers",JSON.stringify(allUsers));
  getDisplayUser();
}
function clearForm() {
  getInputName.value = "";
  getInputQuantity.value = "";
  getInputId.value = "";
}
