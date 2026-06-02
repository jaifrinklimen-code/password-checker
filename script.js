function checkPassword(){

    let password = document.getElementById("password").value;

    let score = 0;

    let suggestions = [];

    // Length Check
    if(password.length >= 8){
        score++;
    }
    else{
        suggestions.push("Use at least 8 characters");
    }

    // Uppercase Check
    if(/[A-Z]/.test(password)){
        score++;
    }
    else{
        suggestions.push("Add uppercase letters");
    }

    // Lowercase Check
    if(/[a-z]/.test(password)){
        score++;
    }
    else{
        suggestions.push("Add lowercase letters");
    }

    // Number Check
    if(/[0-9]/.test(password)){
        score++;
    }
    else{
        suggestions.push("Add numbers");
    }

    // Special Character Check
    if(/[!@#$%^&*]/.test(password)){
        score++;
    }
    else{
        suggestions.push("Add special characters");
    }

    let result = document.getElementById("result");

    if(score <= 2){
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }
    else if(score <= 4){
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    }
    else{
        result.innerHTML = "Strong Password";
        result.style.color = "green";
    }

    let suggestionList = document.getElementById("suggestions");

    suggestionList.innerHTML = "";

    suggestions.forEach(function(item){

        let li = document.createElement("li");

        li.textContent = item;

        suggestionList.appendChild(li);

    });

}
