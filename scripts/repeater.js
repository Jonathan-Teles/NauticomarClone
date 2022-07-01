function addCard() {
    event.preventDefault()
    //mapeando os inputs necessários
    let monthName = document.querySelector('input[name="monthName"]').value
    let price = document.querySelector('input[name="monthPrice"]').value
    let descriptionCard = document.querySelector('textarea[name="descriptionCard"]').value
    let imgFrontCard = document.querySelector('input[name="imageFrontCard"]').value
    let TextButton = document.querySelector('input[name="textButton"]').value
    let urlButton = document.querySelector('input[name="urlButton"]').value

    let newCard = new card (monthName, price, imgFrontCard, descriptionCard, TextButton, urlButton)

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
    btnCardName.innerText = newCard.monthName
    
    //div imagem
    let imgDiv = document.createElement('div')
    imgDiv.className = "img"

    let imgTag = document.createElement('img')
    console.log(newCard.imgFrontCard)
    imgTag.src = newCard.imgFrontCard

    imgDiv.appendChild(imgTag)
    //imgDiv.innerHTML = `<img src="${newCard.frontCardImg}">`           

    //div preço
    let divPrice = document.createElement('div')
    divPrice.className = "selo-preco"
    //diárias a partir de:
    divPrice.innerHTML = "<p>Diárias <br> apartir de:<p/>"

    //tag preço
    let tagPrice = document.createElement('div')
    tagPrice.className = "preco"
    tagPrice.innerHTML = `<h4><span>R$</span>${newCard.price}</h4>`
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
    btnBackName.innerText = newCard.monthName
    //inserindo button no cardback
    cardBack.appendChild(btnBackName)



    //criando a div do bg card
    let imgback = document.createElement('div')
    imgback.className = "img"
    
    //criando elemento do texto
    let desctext = document.createElement('p')
    desctext.className = "desc-card"
    desctext.innerText = newCard.descriptionCard
    
    //criando tag img do bg
    let bgback = document.createElement('img')
    bgback.setAttribute('src', '../assets/home/cards-promo/back-card.webp')

    //inserindo elementod na div img
    imgback.appendChild(desctext) 
    imgback.appendChild(bgback)       
    cardBack.appendChild(imgback)

    //inserindo cardback no cardBase
    baseCard.appendChild(cardBack)

    let repeater = document.querySelector('.repeater')
    repeater.appendChild(baseCard)


    //criando div button reservar
    let divReservation = document.createElement('div')
    divReservation.className = "selo-preco"

    //criando button Reserve
    let reserveButton = document.createElement('a')
    reserveButton.className = "btn btn-promo"
    reserveButton.innerText = "Reserve"

    //para adicionar uma url à um elemento necessário usar o metodo .href
    reserveButton.href = newCard.urlButton

    divReservation.appendChild(reserveButton)
    cardBack.appendChild(divReservation)
    

    
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