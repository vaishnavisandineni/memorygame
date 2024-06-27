const cards = 
	document.getElementsByClassName('card'); 
let allImages = document.getElementsByClassName('card-image'); 
let movesDisplay = document.querySelector('.move-counter'); 
let toggledCardsArray = []; 
let move = 0; 
let winCount = 0; 
const restart = document.getElementById('restart'); 

const imagesLinkArray = [ 
	{ 
		id: 1, 
		image: 
'https://thumbs.dreamstime.com/z/game-icon-lilac-flower-vector-perfect-app-icons-devoted-to-floral-topic-109350833.jpg?w=768', 
		newAlt: 'Image1'
	}, 
	{ 
		id: 2, 
		image: 
'https://thumbs.dreamstime.com/z/vector-icon-lily-valley-flower-perfect-game-app-icons-devoted-to-floral-topic-game-icon-lily-108777649.jpg?ct=jpeg', 
		newAlt: 'Image2'
	}, 
	{ 
		id: 3, 
		image: 
'https://thumbs.dreamstime.com/z/game-icon-sakura-flower-vector-icon-sakura-flower-perfect-game-app-icons-devoted-to-floral-topic-108859810.jpg?ct=jpeg', 
		newAlt: 'Image3'
	}, 
	{ 
		id: 4, 
		image: 
'https://thumbs.dreamstime.com/z/beautiful-realistic-pink-flower-illustration-isolated-white-background-30391324.jpg?ct=jpeg', 
		newAlt: 'Image4'
	}, 
	{ 
		id: 5, 
		image: 
'https://thumbs.dreamstime.com/z/beautiful-fantasy-purple-flower-green-leaves-background-30389022.jpg?ct=jpeg', 
		newAlt: 'Image5'
	}, 
	{ 
		id: 6, 
		image: 
'https://thumbs.dreamstime.com/z/game-icon-sakura-flower-vector-icon-sakura-flower-perfect-game-app-icons-devoted-to-floral-topic-108859810.jpg?ct=jpeg', 
		newAlt: 'Image3'
	}, 
	{ 
		id: 7, 
		image: 
'https://thumbs.dreamstime.com/z/beautiful-fantasy-purple-flower-green-leaves-background-30389022.jpg?ct=jpeg', 
		newAlt: 'Image5'
	}, 
	{ 
		id: 8, 
		image: 
'https://thumbs.dreamstime.com/z/vector-icon-lily-valley-flower-perfect-game-app-icons-devoted-to-floral-topic-game-icon-lily-108777649.jpg?ct=jpeg', 
		newAlt: 'Image2'
	}, 
	{ 
		id: 9, 
		image: 
'https://thumbs.dreamstime.com/z/picture-flower-lily-20885591.jpg?ct=jpeg', 
		newAlt: 'Image6'
	}, 
	{ 
		id: 10, 
		image: 
'https://thumbs.dreamstime.com/z/game-icon-lilac-flower-vector-perfect-app-icons-devoted-to-floral-topic-109350833.jpg?w=768', 
		newAlt: 'Image1'
	}, 
	{ 
		id: 11, 
		image: 
'https://thumbs.dreamstime.com/z/picture-flower-lily-20885591.jpg?ct=jpeg', 
		newAlt: 'Image6'
	}, 
	{ 
		id: 12, 
		image: 
'https://thumbs.dreamstime.com/z/beautiful-realistic-pink-flower-illustration-isolated-white-background-30391324.jpg?ct=jpeg', 
		newAlt: 'Image4'
	} 
] 

// function to restart the game 
const restartGame = () => { 
	let toggledCard = 
		document.getElementsByClassName('card toggled'); 
	imagesLinkArray.sort(() => Math.random() - 0.5); 
	Object.values(toggledCard).forEach(function (el) { 
		setTimeout(() => { 
			el.classList.remove("toggled"); 
		}, 0); 
	}) 
	toggledCardsArray.length = 0; 
	move = 0; 
	winCount=0; 
	movesDisplay.innerText = `Moves: ${move}`; 
	let allImagesSrc = document.getElementsByClassName('card-image'); 
	Object.values(allImagesSrc).forEach((el, index)=>{ 
		el.src = imagesLinkArray[index].image; 
		el.alt = imagesLinkArray[index].newAlt; 
		el.id = imagesLinkArray[index].id 
	}) 
} 
restart.addEventListener('click', restartGame); 

//checking for the last clicked and current 
//clicked cards and applying changes accordingly 
for (var i = 0; i < cards.length; i++) { 
	cards[i].addEventListener('click', function () { 
		this.classList.add("toggled"); 
		toggledCardsArray.push(this); 
		let thisImgSrc = this.querySelector('.card-image').src; 
		let previousImgSrc = 
		toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src; 
		if(thisImgSrc !== previousImgSrc) { 
			toggledCardsArray.forEach(function (el) { 
				setTimeout(() => { 
					el.classList.remove("toggled"); 
				}, 500); 
			}) 
			toggledCardsArray.length = 0; 
			move++; 
		} 
		else{ 
			toggledCardsArray.length = 0; 
			move++; 
			winCount++; 
		} 
		movesDisplay.innerText = `Moves: ${move}`; 
		if(winCount===6){ 
			setTimeout(()=>{ 
				alert(`Congratulations!!! You won the game in ${move} moves.`) 
			}, 300) 
		} 
	}) 
}
