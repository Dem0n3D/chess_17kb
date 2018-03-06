var table = document.createElement("table");

for (var i = 0; i < 8; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 8; j++) {
        var td = document.createElement("td");
        td.setAttribute("row", i);
        td.setAttribute("col", j);
        //td.appendChild(document.createTextNode(i+j))
        tr.appendChild(td);
    }
    table.appendChild(tr);
}


document.querySelector("body").appendChild(table);