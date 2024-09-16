(() => {
    document 
        .querySelector('.js-speaker-form')
        .addEventListener('submit', e => {
            e.preventDefault();

            new FormData(e.currnetTarget).forEach((value,name) =>
                console.log('${name}: ${value}'),
            );
        });
})();

function checkForSpam(message) {
    let result;
    // Change code below this line
  message.toLowerCase().includes("spam")||message.toLowerCase().includes("sale")
    // Change code above this line
    return result;

}