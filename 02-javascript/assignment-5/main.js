function calculate() {
  var amount=document.getElementById("amount").value; 
  amount = parseFloat(amount);
  var rate=document.getElementById("rate").value; 
  rate = parseFloat(rate);
  var years=document.getElementById("years").value; 
  years = parseFloat(years);
  var pelement = document.getElementById("results_table");
  var tableString = "<table border=1>";
  tableString += "<tr><th> Month </th><th> Interest </th><th> Balance </th></tr>";
  var balance = amount;
  
  for (var i = 1; i <= years * 12; i++) {
    var interest = balance * ((rate / 100)/12);
    interest = Math.round(interest * 100) /100;
    balance = Math.round(balance *100) /100;
   balance = balance + interest; 
    tableString += "<tr><td>" + i + "</td><td>" + interest.toFixed(2) +"</td><td>" + balance.toFixed(2) +"</td></tr>";
  }
 
  
  tableString += "</table>";
  pelement.innerHTML=tableString;
  
  
}

function reset() {
  document.getElementById("results_table").innerHTML=""
  
}