const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;
checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    //it sets the element's display property to "block", which means that the element will now be visible on the page
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});
txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    ///[^A-Z0-9]/: This is a regular expression that matches all characters except uppercase letters (A-Z), lowercase letters (a-z), and numbers (0-9). The ^ inside the brackets indicates negation, meaning it matches anything that is not within the specified character range.
    //     i: This flag makes the search case-insensitive. So, the A-Z in the   regex will match both uppercase and lowercase letters.
    // g: This flag makes the replacement global. It replaces all occurrences of the matched characters, not just the first one
    if(filterInput) {
        return checkBtn.classList.add("active");
        //This checks if the filterInput variable is not empty (meaning there is at least one valid character). If it is, the code adds the class "active" to the element checkBtn. This likely changes the appearance of the button, possibly making it clickable or highlighted.
    }
    infoTxt.style.display = "none";
    //This sets the display property of the element infoTxt to "none", effectively hiding it from the page.
    checkBtn.classList.remove("active");
    // This removes the class "active" from the element checkBtn.
});