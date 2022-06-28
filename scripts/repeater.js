function addCard() {
    event.preventDefault()
    //mapeando os inputs necessários
    let cardName = document.querySelector('input[name="monthName"]').value
    let cardPrice = document.querySelector('input[name="monthPrice"]').value
    let cardDescription = document.querySelector('textarea[name="descriptionCard"]').value
    let frontCardImg = document.querySelector('input[name="imageFrontCard"]').value
    let TextButton = document.querySelector('input[name="textButton"]').value
    let urlFromButton = document.querySelector('input[name="urlButton"]').value

    alert(frontCardImg)
    

}