const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const CtoF = (c) => {
        let f = Math.round((c * 9 / 5) + 32);
        return f;
    }

    const FtoC = (f) => {
        let c = Math.round((f - 32) * 5 / 9);
        return c;
    }

    let result;

    if (valueTemp == 'cel') {
        result = CtoF(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °F`;
    }
    else {
        result = FtoC(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °C`;
    }


}