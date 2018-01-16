var d = document;

var name;

function addRow()
{
    name = d.getElementById('name').value;
    name1 = d.getElementById('text').value;
    var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];
    var row = d.createElement("tr");
    tbody.appendChild(row);
    var td1 = d.createElement("td");
    var td2 = d.createElement("td");
    row.appendChild(td1);
    row.appendChild(td2);
    td1.innerHTML = name;
    td2.innerHTML = name1;
    td1.classList.add("table-success")
    td2.classList.add("table-warning")
}