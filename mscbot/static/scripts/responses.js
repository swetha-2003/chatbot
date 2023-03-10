function getBotResponse(input) {
    //rock paper scissors
    if (input.includes("request")) {
        return "Enter your Order Id";
    } else if (input.includes("12345")) {
        return "What is the reason";
    } else if (input.includes("damage")) {
        return "Accepted";
    }
    else if (input.includes("Not Satisfied")) {
        return "Accepted";
    }
    else if (input.includes("high price")) {
        return "Declined";
    }
    else {
        return "Try asking something else!";
    }
}