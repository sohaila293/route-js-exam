let nameSearch = document.getElementsByTagName("input")[0];
let lettersearch = document.getElementsByName("input")[1];
let itemname = document.getElementsByTagName("span")[0]
nameSearch.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll(".main-item");

    items.forEach(item => {
        const name =itemname.value.toLowerCase();
        const containsLetter = name.includes(searchTerm);
        
        if (searchTerm === "" || containsLetter || name.startsWith(searchTerm)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
});
