export function popUp() {

    var selectedBox = document.querySelector('input[name="box"]:checked');

    switch (selectedBox.value) {
        case "paragraphs":
            alert("You selected paragraphs!");
            break;
        case "words":
            alert("You selected words!");
            break;
        case "bytes":
            alert("You selected bytes!");
            break;
        case "lists":
            alert("You selected lists!");
            break;
        default:
            alert("Invalid selection!");
    }

}
