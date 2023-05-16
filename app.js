function add_todo() {
  var x = document.getElementById("task").value;
  const node = document.createElement("div");
  node.className = "list-group-item list-group-item-primary mb-2";
  const textnode = document.createTextNode(x);
  node.appendChild(textnode);
  var b = document.createElement("button");
  b.className = "btn btn-danger";
  b.textContent = "Delete";
  b.style = "float:right";
  b.onclick = delete_task;
  node.appendChild(b);
  var e = document.createElement("button");
  e.className = "btn btn-warning";
  e.textContent = "edit";
  e.style = "float:right";
  e.onclick = edit_task;
  node.appendChild(e);
  document.getElementById("result").appendChild(node);
  document.getElementById("task").value = "";
}

function clear_todo() {
  document.getElementById("result").innerHTML = "";
}

function delete_task(e) {
  e.target.parentElement.remove();
}

function edit_task(e) {
  console.log("hora hai");
  const editdiv = document.createElement("div");
  editdiv.className = "container text-center mt-3";
  var i = document.createElement("input");
  i.className = "form-control";
  i.setAttribute("type", "text");
  editdiv.appendChild(i);
  var b1 = document.createElement("button");
  b1.className = "btn btn-success";
  b1.textContent = "Update";
  b1.onclick = update_task;
  editdiv.appendChild(b1);
  var b2 = document.createElement("button");
  b2.className = "btn btn-danger";
  b2.textContent = "Close";
  b2.onclick = close_box;
  editdiv.appendChild(b2);
  e.target.parentElement.appendChild(editdiv);
}

function update_task(e) {
  y = e.target.parentElement.firstChild.value;
  const textnode1 = document.createTextNode(y);
  e.target.parentElement.parentElement.replaceChild(
    textnode1,
    e.target.parentElement.parentElement.firstChild
  );
  e.target.parentElement.remove();
}

function close_box(e) {
  e.target.parentElement.remove();
}
