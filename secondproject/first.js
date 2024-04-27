const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
    result.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
    result.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //  show the result
    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.5) {
      result.innerHTML = `hello! your bmi index is ${bmi} and you are under Wight`;
      result.style.color = "red";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `hello! your bmi index is ${bmi} and you are Normal range`;
      result.style.color = "green";
    } else {
      result.innerHTML = `hello! your bmi index is ${bmi} and you are over Wight`;
      result.style.color = "red";
    }
  }
});
