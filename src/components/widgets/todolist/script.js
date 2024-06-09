document.addEventListener("DOMContentLoaded", function() {
 addItem("Máslo");
 addItem("Mouka");
 addItem("Okurka");
});

document.getElementById("itemInput").addEventListener("keypress", function(event) {
 if (event.key === "Enter") {
  addItem();
 }
});

function addItem(text) {
 let itemInput = document.getElementById("itemInput");
 let itemText = text || itemInput.value.trim();
 if (itemText === "") return;

 let li = document.createElement("li");
 li.textContent = itemText;

 let deleteBtn = document.createElement("button");
 deleteBtn.textContent = "X";
 deleteBtn.className = "delete-btn";
 deleteBtn.onclick = function() {
  this.parentElement.remove();
 };

 li.appendChild(deleteBtn);
 li.onclick = function() {
  this.classList.toggle("checked");
 };

 document.getElementById("shoppingList").appendChild(li);
 if (!text) {
  itemInput.value = "";
 }
}
