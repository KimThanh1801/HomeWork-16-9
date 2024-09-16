var id = 0;
function sell() {
    id++;
    var pname = document.getElementById('pname').value;
    var qty = parseInt(document.getElementById('qty').value);
    var price = parseInt(document.getElementById('up').value);
    var dc = parseInt(document.getElementById('dc').value);
    var sub = qty * price * (1 - dc / 100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "$</td>";
    row += "<td>" + dc + "%</td>";
    row += "<td>" + sub + "$</td>";
    row += "</tr>";
    document.getElementById("tbl").getElementsByTagName("tbody")[0].innerHTML += row;
    document.getElementById('pname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('up').value = '';
    document.getElementById('dc').value = '';
}
function cancel() {
    document.getElementById('pname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('up').value = '';
    document.getElementById('dc').value = '';
}