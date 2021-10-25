function menu(){
    var toggleMenu = document.querySelector('header')
    toggleMenu.classList.toggle('header-flex')
    // document.body.classList.toggle('body-overflow-none')
}

function validation(){
              
    var notice = document.getElementById('notice')
    var noticeF = document.getElementById('notice-falha')
    var email = document.getElementById('email')
    var nome = document.getElementById('nome')
    var msg = document.getElementById('msg')

    email.style.pointerEvents='none'
    email.style.backgroundColor='rgb(245, 245, 245)'
    email.style.transition='1s'
    
    nome.style.pointerEvents='none'
    nome.style.backgroundColor='rgb(245, 245, 245)'
    nome.style.transition='1s'
    
    msg.style.pointerEvents='none'
    msg.style.backgroundColor='rgb(245, 245, 245)'
    msg.style.transition='1s'
    
    document.getElementById('send').style.pointerEvents='none'
    document.getElementById('send').style.backgroundColor='rgb(245, 245, 245)'

    document.getElementById('btn-send').style.left='70px'
    document.getElementById('btn-send').style.animation='1s'
    
    setTimeout(
        function(){  
            document.body.style.cursor='default'
            document.getElementById('loading').style.display='none'

            if (email.value.length <= 5 || email.value.indexOf('@') == -1){
                noticeF.style.display='block'

                setTimeout(function(){ // se for invalido
                    noticeF.style.display='none'
                    email.style.pointerEvents='all'
                    email.style.backgroundColor='#fff'
                    nome.style.pointerEvents='all'
                    nome.style.backgroundColor='#fff'
                    msg.style.pointerEvents='all'
                    msg.style.backgroundColor='#fff'
                    document.getElementById('send').style.pointerEvents='all'
                    document.getElementById('send').style.backgroundColor='#fff'

                    
                    document.getElementById('btn-send').style.left='14px'
                    document.getElementById('btn-send').style.animation='1s'
                }, 3000)
            }
            else if (email.value.indexOf('@') != -1){
                notice.style.display='block'
                setTimeout(function(){ // se for valido
                    notice.style.display='none'

                    document.getElementById('send').textContent = 'Enviado!'

                    document.getElementById('btn-send-smile').style.left='19px'
                    document.getElementById('btn-send-smile').style.animation='1s'
                }, 2000)
            } 
        }, 1000
        ) // enquanto processa 
        document.body.style.cursor='wait'
        document.getElementById('loading').style.display='block'                               
}

// scroll

// window.addEventListener('scroll', function(){
//     var h1Init = document.getElementById('bloblgo')
//     let value = this.window.scrollY;
//     h1Init.style.marginBottom = value * 0.25 + 'px';
// })

// onlinput

function color(){
    var h1Init = document.getElementById('bloblgo')
    var colorInput = document.getElementById('colorInput')
    var post = document.querySelectorAll('.post'), i;

    for (let i=0; i < post.length; i++){
        post[i].style.borderColor = colorInput.value
    }

    h1Init.style.color = colorInput.value
}

//search

function search(){
   
    var result = document.getElementById('list-search') // select: area do resultado
    result.innerHTML = '' //reseta resultado para proxima pesquisa

    const posts = [] // lista com todos os 'post'
    let post = document.querySelectorAll('.post-item') // vai estar dentro de posts

    const nomePosts = [] //lista de nome de cada post
    
    var inputSearch = document.getElementById('input-search').value.toLowerCase(); // select: input de pesquisa
    
    for (let i = 0; i < post.length; i++){
        posts.push(post[i]) // puxa para lista posts todos os post
    } 

    for (let i = 0; i < posts.length; i++){ // passa por cada post

        nomePosts.push(posts[i].textContent.toLowerCase()) // insere na lista de nome o nome de cada post.
        
        var itemPost = posts[i].textContent.toLowerCase() // itemPost: conteudo  textual de cada post que ele passa
        
        if(inputSearch == 'all'){ // search: command: all: mostra todos os posts
            result.innerHTML += ("<a class='item' href='" + posts[i] + "'>"+ posts[i].textContent +"</a>")
        }
        
        else if(itemPost.indexOf(inputSearch) != -1){ // verifica se o que foi digitado existe no conteudo textual do post
            result.innerHTML += ("<a class='item' href='" + posts[i] + "'>"+ posts[i].textContent +"</a>")
        }
    }

    if (nomePosts.join('').indexOf(inputSearch) == -1 && inputSearch != 'all' || inputSearch == '') { // se estiver vazio ou se for diferente de 'all' e também não estiver contido no 'ex-array' unido pelo join() nomePosts
        result.innerHTML = '<div class="failSearch"><p>Sorry, not found </p> <img src="/img/sad.svg" /></div>'
    }
}

function autocomplete(){
    document.getElementById('input-search').value = 'all'; // select: input de pesquisa
    document.getElementById('go').click()      
}

//color classification

function classification(){ 
    var antigos = document.getElementById('antigos')
    var recentes = document.getElementById('recentes')
    
    var antigosL = document.getElementById('antigosL')
    var recentesL = document.getElementById('recentesL')

    if (antigos.checked == true){
        antigosL.style.backgroundColor='rgb(244, 244, 244)'
        antigosL.style.color='#131313'
    }  else {
        antigosL.style.backgroundColor='rgb(248, 248, 248)'
        antigosL.style.color='#bbbbbb'
    }

    if (recentes.checked == true){
        recentesL.style.backgroundColor='rgb(244, 244, 244)'
        recentesL.style.color='#131313'

    }  else {
        recentesL.style.backgroundColor='rgb(248, 248, 248)'
        recentesL.style.color='#bbbbbb'
    }

}


// ajax posts preview

const converteJSON = json => json = json.json()
const selecionaPosts = p => p.posts
const selecionaTitulo = p => p.title

const limite = limitar => limitar.substring(0, 395)
    
const posts = document.querySelectorAll('[posts]')
const conteudo = document.querySelectorAll('[conteudo]')

const conteudoIntern = document.querySelectorAll('[conteudoIntern]')

conteudo.forEach( (content, index) => {
    fetch('../posts.json')
    .then(converteJSON)
    .then(selecionaPosts)

    .then(content => { // titulo e subtitulo

        const title =  document.querySelectorAll(`[title]`)
        const subtitle =  document.querySelectorAll(`[subtitle]`)

        for (let i = 0; i < conteudo.length; i++){
            subtitle[i].innerHTML = content[i].subtitle
            title[i].innerHTML = content[i].title
        }
        return content
    })

    .then(content => content[index].content) // apenas conteudo
    .then(limite) // limita
    .then(insere => content.innerHTML = insere) // insere
    
})


conteudoIntern.forEach(content => 
        {
            var id = content.getAttribute('id')
            console.log(id)

            fetch('/../posts.json')
            
            .then(converteJSON)
            .then(selecionaPosts)

            .then(content => {

                const title =  document.querySelector(`[titleIntern]`)
                const subtitle =  document.querySelector(`[subtitleIntern]`)

                subtitle.innerHTML = content[id].subtitle
                title.innerHTML = content[id].title

                return content
            })

            .then(porId => porId[id].content)
            
            .then(insere => content.innerHTML = insere)
        }
) 
