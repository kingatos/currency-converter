{
  const clearButtonResult = () => {
    const clearButton = document.querySelector(".js-clearButton");

    clearButton.addEventListener("click", () => {
      document.getElementById("r").innerHTML = "";
    });
  };

  const convertAmountFromCurrency = (currencyFromElement) => {
    const currencyFrom = currencyFromElement.value;

    switch (currencyFrom) {
      case "PLN":
        return 1.0;
      case "EUR":
        return 4.72;
      case "AUD":
        return 4.75;
      case "GBP":
        return 5.48;
      case "CHF":
        return 3.04;
      case "USD":
        return 4.72;
    }
  };

  const convertAmountToCurrency = (currencyToElement) => {
    const currencyTo = currencyToElement.value;

    switch (currencyTo) {
      case "PLN":
        return 1.0;
      case "EUR":
        return 4.72;
      case "AUD":
        return 4.75;
      case "GBP":
        return 5.48;
      case "CHF":
        return 3.04;
      case "USD":
        return 4.72;
    }
  };

  const calculateResult = (currencyFromElement, currencyToElement, amount) => {
    return (
      (convertAmountFromCurrency(currencyFromElement) * amount) /
      convertAmountToCurrency(currencyToElement)
    );
  };

  const updateResultText = (
    resultElement,
    currencyFromElement,
    currencyToElement,
    amount,
    resultCurrency
  ) => {
    const result = calculateResult(
      currencyFromElement,
      currencyToElement,
      amount
    ).toFixed(2);
    resultElement.classList.add("result-background");
    resultElement.innerText = `${result} ${resultCurrency}`;
  };

  const onFormSubmit = () => {
    const amountElement = document.querySelector(".js-amount");
    const currencyFromElement = document.querySelector(".js-currencyFrom");
    const currencyToElement = document.querySelector(".js-currencyTo");
    const resultElement = document.querySelector(".js-result");
    const amount = amountElement.value;
    const resultCurrency = currencyToElement.value;

    updateResultText(
      resultElement,
      currencyFromElement,
      currencyToElement,
      amount,
      resultCurrency
    );
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      onFormSubmit();
      clearButtonResult();
    });
  };

  init();
}
