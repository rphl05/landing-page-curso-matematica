function toggleContent(id,pai){
    const conteudo = document.getElementById(id)
    console.log(conteudo)
    conteudo.classList.toggle('active')

    const item = conteudo.closest('.conteudo-item')
    const icone = item.querySelector('.conteudo-icon-image')
    icone.classList.toggle('rotacionado')

}

function loadConteudos (){
    const conteudoContent  = document.getElementById('conteudo-content')
    
    conteudosDoCurso.forEach((item)=>{

        const conteudoItem = document.createElement('div')
        conteudoItem.classList.add('conteudo-item')
        
        conteudoItem.innerHTML = `
            <div class="conteudo-titulo-container" onclick="toggleContent('conteudo-${item.id}')">
                <div class="conteudo-titulo-numero">
                    ${item.id}
                </div>
                <div class="conteudo-titulo">
                    ${item.titulo}
                </div>
                <div class="conteudo-icon">
                    <img src="images/angle-down-solid-full.svg" class="conteudo-icon-image">
                </div>
            </div>
            <div class="conteudo-descricao" id="conteudo-${item.id}">
                ${item.descricao}
            </div>
            
        `
        conteudoContent.appendChild(conteudoItem)
    })
}

function loadFAQ() {
    const FAQContent = document.getElementById("faq-container-content")

    listaFAQ.forEach((item)=>{

        const FAQItem = document.createElement('div')
        FAQItem.classList.add('conteudo-item')

        FAQItem.innerHTML = `
                <div class="conteudo-item">
                    <div class="conteudo-titulo-container" onclick="toggleContent('pergunta-${item.id}')">
                        <div class="conteudo-titulo-faq">
                            ${item.pergunta}
                        </div>
                        <div class="conteudo-icon">
                            <img src="images/angle-down-solid-full.svg" class="conteudo-icon-image">
                        </div>
                    </div>
                    <div class="conteudo-descricao" id="pergunta-${item.id}">
                        ${item.resposta}
                    </div>
                </div>

        `
        FAQContent.appendChild(FAQItem)
    })

}
