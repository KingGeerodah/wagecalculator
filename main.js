// simple grade calculator

// btn event listener
document.getElementById("btn1").addEventListener("click", btnClicked);

function btnClicked() {
  // input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  let num3 = +document.getElementById("num3-in").value;
  // Process;
  let calculate = num1 * (num2 * 1.5) * num3;
  // Output
  document.getElementById("output").innerHTML = calculate;
}
