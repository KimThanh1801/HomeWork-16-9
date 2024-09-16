var id = 0;
        var total = 0; 
        function sell() {
            id++;
            var pname = document.getElementById('pname').value;
            var qty = parseInt(document.getElementById('qty').value);
            var price = parseInt(document.getElementById('up').value);
            var sub = qty * price;
            var row = "<tr>";
            row += "<td>" + id + "</td>";
            row += "<td>" + pname + "</td>";
            row += "<td>" + qty + "</td>";
            row += "<td>" + price + "$</td>";
            row += "<td>" + sub + "$</td>";
            row += "</tr>";
            document.getElementById("tbl").getElementsByTagName("tbody")[0].innerHTML += row;
            total += sub;
            document.getElementById("totalAmount").innerText = total + "$";
            document.getElementById('pname').value = '';
            document.getElementById('qty').value = '';
            document.getElementById('up').value = '';
        }