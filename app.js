function redactFunction() {
    userInput = document.getElementById("font").value;
    split = userInput.replace(/\b(07|447)\d{9}\b/g, match => {
        return 'x'.repeat(match.length)});

    
    document.getElementById("result").innerHTML = split;
}
