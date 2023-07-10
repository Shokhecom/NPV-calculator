function calculate() {
    const presentValue = parseFloat(document.getElementById('presentValue').value);
    const futureValue = parseFloat(document.getElementById('futureValue').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const periods = parseFloat(document.getElementById('periods').value);
  
    if (!isNaN(presentValue) && !isNaN(futureValue) && !isNaN(interestRate) && !isNaN(periods)) {
      const calculatedPresentValue = futureValue / Math.pow(1 + interestRate / 100, periods);
      const calculatedFutureValue = presentValue * Math.pow(1 + interestRate / 100, periods);
      const calculatedInterestRate = (Math.pow(futureValue / presentValue, 1 / periods) - 1) * 100;
      const calculatedPeriods = Math.log(futureValue / presentValue) / Math.log(1 + interestRate / 100);
  
      document.getElementById('calculatedPresentValue').value = calculatedPresentValue.toFixed(2);
      document.getElementById('calculatedFutureValue').value = calculatedFutureValue.toFixed(2);
      document.getElementById('calculatedInterestRate').value = calculatedInterestRate.toFixed(2);
      document.getElementById('calculatedPeriods').value = calculatedPeriods.toFixed(2);
    }
  }
  
  function resetForm() {
    document.getElementById('presentValue').value = '';
    document.getElementById('futureValue').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('periods').value = '';
    document.getElementById('calculatedPresentValue').value = '';
    document.getElementById('calculatedFutureValue').value = '';
    document.getElementById('calculatedInterestRate').value = '';
    document.getElementById('calculatedPeriods').value = '';
  }
  