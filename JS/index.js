
let getAddBtnId = document.getElementById("#btnAdd");
let getInputName = document.getElementById("inPutName");
let getInputBalance = document.getElementById("inPutBalance");
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
    alert("Plz Inter A Name ??");
  } else if (getInputBalance.value == "") {
    alert("Plz Inter  Balance Number ??");
  } else if (getInputId.value == "") {
    alert("Plz Inter  ID Number ??");
  } else {
    user = {
      name: getInputName.value,
      balance: getInputBalance.value,
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
                ${allUsers[i].balance}
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
  let newBalance = prompt("Enter Ur New Balance");
  let newId = prompt("Enter Ur New ID");
  allUsers[i].name = newName;
  allUsers[i].balance = newBalance;
  allUsers[i].id = newId;
  localStorage.setItem("AllUsers",JSON.stringify(allUsers));
  getDisplayUser();
}
function clearForm() {
  getInputName.value = "";
  getInputBalance.value = "";
  getInputId.value = "";
}
