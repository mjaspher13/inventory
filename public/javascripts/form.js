document.querySelector(".btn-item-add").onclick = function (event) {
    let name = document.querySelector(".input-name").value;
    let qty = document.querySelector(".input-qty").value;
    let amount = document.querySelector(".input-amount").value;

    var body = {};

    body.name = document.querySelector(".input-name").value;
    body.qty = document.querySelector(".input-qty").value;
    body.amount = document.querySelector(".input-amount").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/items", true);
    xhr.setRequestHeader("Content-Type", "Application/json");
    xhr.onload = function () {
      let item = JSON.parse(this.responseText).updatedItem;
      document.querySelector(".input-name").value = "";
      document.querySelector(".input-qty").value = "";
      document.querySelector(".input-amount").value = "";
    };
    xhr.send(JSON.stringify(body));
  };