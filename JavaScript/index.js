function sumOf() {
  let numbersInput = document.querySelector(".addUpValues").value;
  let array = numbersInput.split(",");
  let newArray = array.map(function (string) {
    return parseInt(string);
  });
  let answer = newArray.reduce(function (num1, num2, ...numS) {
    return num1 + num2;
  });
  console.log(answer);
  document.querySelector("p").innerText = answer;
}

let numbersInput2 = document.querySelector(".addUpValues");
numbersInput2.addEventListener("change", () => sumOf());
