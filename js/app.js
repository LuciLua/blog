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
    email.style.backgroundColor='rgb(228, 228, 228)'

    nome.style.pointerEvents='none'
    nome.style.backgroundColor='rgb(228, 228, 228)'

    msg.style.pointerEvents='none'
    msg.style.backgroundColor='rgb(228, 228, 228)'
    
    document.getElementById('send').style.pointerEvents='none'
    document.getElementById('send').style.backgroundColor='rgb(228, 228, 228)'
    
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
                }, 3000)
            }
            else if (email.value.indexOf('@') != -1){
                notice.style.display='block'
                setTimeout(function(){ // se for valido
                    notice.style.display='none'
                    document.getElementById('send').style.backgroundColor= 'rgb(220, 255, 218)'
                    document.getElementById('send').textContent = 'Enviado!'
                }, 3000)
            } 
        }, 1000
        ) // enquanto processa 
        document.body.style.cursor='wait'
        document.getElementById('loading').style.display='block'                               
}

// scroll

window.addEventListener('scroll', function(){
    var h1Init = document.getElementById('bloblgo')
    
    let value = this.window.scrollY;
    
    h1Init.style.marginBottom = value * 0.25 + 'px';
    
})

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

