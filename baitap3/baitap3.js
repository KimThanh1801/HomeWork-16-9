var id = 0;
var total = 0;
function Add() {
    id++;
    var pname = form.pname.value;
    var qty = form.qty.value;
    var price = form.pri.value;
    var sub = qty * price;
    total += sub;
    
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById('tbody').innerHTML += row;
    document.getElementById('pname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('pri').value = '';
    document.getElementById('total').innerHTML = total.toFixed(2);
}
function Cancel() {
    document.getElementById('pname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('pri').value = '';
    document.getElementById('tbody').innerHTML ='';
    document.getElementById('total').innerHTML = '0';
    id=0;
}


