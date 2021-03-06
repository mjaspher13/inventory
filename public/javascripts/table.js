function loadTable() {
  var data = new FormData();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", appUrl + "items", true);
  xhr.onload = function () {
    let items = JSON.parse(this.responseText).items;
    if (items.length) {
      document.querySelector(".empty-table").style.display = "none";
    }
    items.forEach(function (item, index) {
      appendRow(item);
    });
  };
  xhr.send(data);
}

function appendRow(item) {
  var tr = document.createElement("tr");
  tr.classList.add("item-row");

  for (key in item) {
    tr.appendChild(createRow(item[key], key));
  }

  let actionTD = document.createElement("td");
  actionTD.classList.add("item-actions");

  actionTD.appendChild(editButton(item.id));
  actionTD.appendChild(deleteButton(item.id));
  tr.appendChild(actionTD);

  document.querySelector(".items-table--body").appendChild(tr);
}

function createRow(value, key) {
  let td = document.createElement("td");
  td.classList.add("item-" + key);
  td.innerHTML = value;
  return td;
}

function editButton(id) {
  let td = document.createElement("button");
  td.classList.add("btn", "btn-item-edit");
  td.innerHTML = "Edit";
  td.dataset.id = id;
  td.onclick = function (event) {
    edit(this);
  };
  return td;
}

function deleteButton(id) {
  let td = document.createElement("button");
  td.classList.add("btn", "btn-item-delete");
  td.innerHTML = "Delete";
  td.dataset.id = id;
  td.onclick = function (event) {
    remove(this);
  };
  return td;
}

function updateButton(id) {
  let td = document.createElement("button");
  td.classList.add("btn", "btn-item-update");
  td.innerHTML = "Update";
  td.dataset.id = id;
  td.onclick = function (event) {
    updateItem(this);
  };
  return td;
}

function cancelButton(id, name, qty, amount) {
  let td = document.createElement("button");
  td.classList.add("btn", "btn-item-cancel");
  td.innerHTML = "Cancel";
  td.dataset.id = id;
  td.onclick = function (event) {
    cancel(this, id, name, qty, amount);
  };
  return td;
}

function cancel(data, id, name, qty, amount) {
  let row = data.closest("tr");
  row.querySelector(".item-name").innerHTML = name;
  row.querySelector(".item-qty").innerHTML = qty;
  row.querySelector(".item-amount").innerHTML = amount;

  let td = data.closest("td");
  let buttons = td
    .querySelectorAll("button")
    .forEach((e) => e.parentNode.removeChild(e));
  td.appendChild(editButton(id));
  td.appendChild(deleteButton(id));
}

function edit(data) {
  let row = data.closest("tr");
  let id = row.querySelector(".item-id").innerHTML;
  let name = row.querySelector(".item-name").innerHTML;
  let qty = row.querySelector(".item-qty").innerHTML;
  let amount = row.querySelector(".item-amount").innerHTML;

  let inputName = document.createElement("input");
  inputName.classList.add("input-name");
  let inputQty = document.createElement("input");
  inputQty.classList.add("input-qty");
  let inputAmount = document.createElement("input");
  inputAmount.classList.add("input-amount");

  inputName.value = name;
  inputQty.value = qty;
  inputAmount.value = amount;

  row.querySelector(".item-name").innerHTML = "";
  row.querySelector(".item-qty").innerHTML = "";
  row.querySelector(".item-amount").innerHTML = "";

  row.querySelector(".item-name").appendChild(inputName);
  row.querySelector(".item-qty").appendChild(inputQty);
  row.querySelector(".item-amount").appendChild(inputAmount);

  let td = data.closest("td");
  let buttons = td
    .querySelectorAll("button")
    .forEach((e) => e.parentNode.removeChild(e));
  td.appendChild(updateButton(id));
  td.appendChild(cancelButton(id, name, qty, amount));
}

function remove(row) {
  deleteItem(row.dataset.id);
  row.closest("tr").remove();

  if (
    document.querySelector(".items-table--body").querySelectorAll("td")
      .length <= 1
  ) {
    document.querySelector(".empty-table").style.display = "table-row";
  }
}

function updateItem(data) {
  let row = data.closest("tr");
  var body = {};
  let id = row.querySelector(".item-id").innerHTML;
  body.name = row.querySelector(".item-name").querySelector("input").value;
  body.qty = row.querySelector(".item-qty").querySelector("input").value;
  body.amount = row.querySelector(".item-amount").querySelector("input").value;
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", appUrl + "items/" + id, true);
  xhr.setRequestHeader("Content-Type", "Application/json");
  xhr.onload = function () {
    let item = JSON.parse(this.responseText).updatedItem;
    cancel(data, item.id, item.name, item.qty, item.amount);
  };
  xhr.send(JSON.stringify(body));
}

function deleteItem(id) {
  var data = new FormData();
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", appUrl + "items/" + id, true);
  xhr.onload = function () {};
  xhr.send(data);
}

((_) => {
  loadTable();
})();
