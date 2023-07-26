// Card object with 'value' and 'suit' properties
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

// Create an array to represent all unique cards in a deck
const deck = [];
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Populate the deck array with all 52 cards
for (const suit of suits) {
    for (const value of values) {
        deck.push(new Card(value, suit));
    }
}

// Function to randomly select 5 cards from the deck and display them on the HTML page
function dealHand() {
    const handSize = 5;
    const hand = [];
    const handDisplay = document.getElementById('hand');
    handDisplay.innerHTML = ''; // Clear the currently-displayed hand

    // Randomly select 5 unique cards from the deck
    while (hand.length < handSize) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const card = deck[randomIndex];

        if (!hand.includes(card)) {
            hand.push(card);

            // Display the card on the HTML page
            const cardText = card.value === '10' ? card.value : card.value[0]; // Special handling for '10'
            const cardDisplay = document.createElement('p');
            cardDisplay.textContent = `${cardText} of ${card.suit}`;
            handDisplay.appendChild(cardDisplay);
        }
    }
}

// Call the dealHand function initially to display the first hand of cards
dealHand();
