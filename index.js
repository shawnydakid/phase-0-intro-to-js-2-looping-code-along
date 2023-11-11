const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) {
    const messages = []
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return messages
}
function countDown() {
    let countDown = 0
    while (countDown < 11) {
        console.log(countDown++)
    }
}