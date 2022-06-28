function addCard() {
    event.preventDefault()
    //mapeando os inputs necessários
    let cardName = document.querySelector('input[name="monthName"]').value
    let cardPrice = document.querySelector('input[name="monthPrice"]').value
    let cardDescription = document.querySelector('textarea[name="descriptionCard"]').value
    let frontCardImg = document.querySelector('input[name="imageFrontCard"]').value
    let TextButton = document.querySelector('input[name="textButton"]').value
    let urlFromButton = document.querySelector('input[name="urlButton"]').value

    let newCard = new card (cardName, cardPrice, cardDescription, frontCardImg, TextButton, urlFromButton)

    this.insertCard(newCard)

    this.cleanForm()  

}
//função de criação e inserção do card

function insertCard(newCard){
    let baseCard = document.createElement('div')
    baseCard.className = "baseCard"

    let cardFront = document.createElement('div')
    cardFront.className = "card-repeater front"

    let btnCardName = document.createElement('a')
    btnCardName.className = "btn btn-card"
    btnCardName.innerText = newCard.cardName
    
    //div imagem
    let imgDiv = document.createElement('div')
    imgDiv.className = "img"
    imgDiv.innerHTML = "<img src="+ newCard.frontCardImg +">"           

    //div preço
    let divPrice = document.createElement('div')
    divPrice.className = "selo-preco"
    //diárias a partir de:
    divPrice.innerHTML = "<p>Diárias <br> apartir de:<p/>"

    //tag preço
    let tagPrice = document.createElement('div')
    tagPrice.className = "preco"
    tagPrice.innerHTML = "<h4><span>R$</span> " + newCard.cardPrice + "</h4>"
    //colocando a tap preço dentro da div preço
    divPrice.appendChild(tagPrice)
    //inserindo todos os elementos dentro do cardFront
    cardFront.appendChild(btnCardName)
    cardFront.appendChild(imgDiv)
    cardFront.appendChild(divPrice)

    //inserindo cardfront no card base
    baseCard.appendChild(cardFront)


    //criando cardBack
    let cardBack = document.createElement('div')
    cardBack.className = "card-repeater back"
    //inserindo btn Name 
    let btnBackName = document.createElement('a')
    btnBackName.className = "btn btn-card"
    btnBackName.innerText = newCard.cardName

    cardBack.appendChild(btnBackName)




    let imgback = document.createElement('div')
    imgback.className = "img"
    
    let desctext = document.createElement('p')
    desctext.className = "desc-card"
    desctext.innerText = newCard.cardDescription

    let bgback = document.createElement('img')
    bgback.setAttribute('src', '../assets/home/cards-promo/back-card.webp')

    imgback.appendChild(desctext)
    imgback.appendChild(bgback)
    cardBack.appendChild(imgback)

    baseCard.appendChild(cardBack)

    let repeater = document.querySelector('.repeater')
    repeater.appendChild(baseCard)

    

    
}


//função de limpar o form
function cleanForm() {
    document.querySelector('input[name="monthName"]').value = ""
    document.querySelector('input[name="monthPrice"]').value = ""
    document.querySelector('textarea[name="descriptionCard"]').value = ""
    document.querySelector('input[name="imageFrontCard"]').value = ""
    document.querySelector('input[name="textButton"]').value = ""
    document.querySelector('input[name="urlButton"]').value = ""
}