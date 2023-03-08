function carregar() {
	var msg = window.document.getElementById('msg') //msg do Html
	var img = window.document.getElementById('imagem') //Imagem do Html
	var data = new Date() // Data atual
	var hora = data.getHours() //Hora atual
	//var hora = 17  
	
	msg.innerHTML = `Agora são ${hora} horas.` //aparecer a mensagem hora
	if (hora >= 0 && hora < 12) {
		// BOM DIA!
		img.src = 'Manha.png' //carregar arquivo
		document.body.style.background = '#e2cd9f' // cor de fundo
	} else if(hora >= 12 && hora <18) {
		// BOA TARDE!
		img.src ='Tarde.png'
		document.body.style.background = '#b9846f'
	} else {
		// BOA NOITE!
		img.src = 'Noite.png'
		document.body.style.background = '#515154'
	}

}