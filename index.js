// <button class="ins" onclick="func()">отправить</button>
function func() {
  let a1 = document.querySelector("#input1");
  let a2 = document.querySelector("#input2");
  let a3 = document.querySelector("#input3");
  let a4 = document.querySelector("#input4");
  let a5 = document.querySelector("#input5");

  document.querySelector("#output1").textContent = a1.value;
  document.querySelector("#output2").textContent = a2.value;
  document.querySelector("#output3").textContent = a3.value;
  document.querySelector("#output4").textContent = a4.value;
  document.querySelector("#output5").textContent = a5.value;
}

function table() {
  let nickname = document.querySelector("#nickname");
  let a1 = document.querySelector("#input1");
  let a2 = document.querySelector("#input2");
  let a3 = document.querySelector("#input3");
  let a4 = document.querySelector("#input4");
  let a5 = document.querySelector("#input5");

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  // Adding the entire table to the body tag
  document.getElementById("table").appendChild(table);

  let row_1 = document.createElement("tr");

  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Игрок:";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Имя";
  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "Город";
  let heading_4 = document.createElement("th");
  heading_4.innerHTML = "Растение";
  let heading_5 = document.createElement("th");
  heading_5.innerHTML = "Животное";
  let heading_6 = document.createElement("th");
  heading_6.innerHTML = "Река";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  row_1.appendChild(heading_5);
  row_1.appendChild(heading_6);

  thead.appendChild(row_1);

  // Creating and adding data to second row of the table
  let row_2 = document.createElement("tr");

  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = nickname.value;

  let row_2_data_2 = document.createElement("td");
  row_2_data_2.innerHTML = a1.value;

  let row_2_data_3 = document.createElement("td");
  row_2_data_3.innerHTML = a2.value;

  let row_2_data_4 = document.createElement("td");
  row_2_data_4.innerHTML = a3.value;

  let row_2_data_5 = document.createElement("td");
  row_2_data_5.innerHTML = a4.value;

  let row_2_data_6 = document.createElement("td");
  row_2_data_6.innerHTML = a5.value;

  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  row_2.appendChild(row_2_data_3);
  row_2.appendChild(row_2_data_4);
  row_2.appendChild(row_2_data_5);
  row_2.appendChild(row_2_data_6);

  tbody.appendChild(row_2);

  /*
  Creating and adding data to third row of the table
  let row_3 = document.createElement("tr");
  let row_3_data_1 = document.createElement("td");
  row_3_data_1.innerHTML = "2.";
  let row_3_data_2 = document.createElement("td");
  row_3_data_2.innerHTML = "Adam White";
  let row_3_data_3 = document.createElement("td");
  row_3_data_3.innerHTML = "Microsoft";

  row_3.appendChild(row_3_data_1);
  row_3.appendChild(row_3_data_2);
  row_3.appendChild(row_3_data_3);
  tbody.appendChild(row_3);
  */
}
