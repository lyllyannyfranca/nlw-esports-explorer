/*captura o caminho dos arquivos de efeitos sonoros 
para cada Easter Egg colocado na página*/
const pathOne = './.sounds/01.flac';
const pathTwo = './.sounds/02.flac';
const pathThree = './.sounds/03.mp3'

// captura o primeiro li da ul que tiver a classe .games-list
let easterEggOne = document.querySelector('.games-list').firstElementChild

/* adiciona um evento de click no primeiro li da ul que 
tiver a classe .games-list.
   nesse evento, é executado um efeito sonoro ao ser clicado na li 
*/
easterEggOne.addEventListener('click', function () {
    easterEggOne.setAttribute('id', 'easter-egg-one')
    
    easterEggOne.firstElementChild.innerHTML += `<audio id="surprise-one" src="${pathOne}"></audio>`
    
    let audio = document.querySelector('#surprise-one')
    
    audio.play()
})

// captura o primeiro li da ul que tiver a classe .channel-list
let easterEggTwo = document.querySelector('.channel-list').firstElementChild

/* adiciona um evento de click no primeiro li da ul que 
tiver a classe .games-list.
   nesse evento, é executado um efeito sonoro ao ser clicado na li 
*/
easterEggTwo.addEventListener('click', function () {
    easterEggTwo.setAttribute('id', 'easter-egg-two')

    easterEggTwo.firstElementChild.innerHTML += `<audio id="surprise-two" src="${pathTwo}"></audio>`

    let audio = document.querySelector('#surprise-two')
    
    audio.play()
})

// captura o último li da ul que tiver a classe .social-list
let easterEggThree = document.querySelector('.social-list').lastElementChild

/* adiciona um evento de click no primeiro li da ul que 
tiver a classe .games-list.
   nesse evento, é executado um efeito sonoro ao ser clicado na li 
*/
easterEggThree.addEventListener('click', function () {
    easterEggThree.setAttribute('id', 'easter-egg-three')

    easterEggThree.firstElementChild.innerHTML += `<audio id="surprise-three" src="${pathThree}"></audio>`

    let audio = document.querySelector('#surprise-three')

    audio.play()
})

/* função chamada após o clique no botão correspondente ao logo do 
Discord. Copia para área de transferência do usuário a Discord Tag 
e o redireciona para a página de login do Discord para que possa 
convidar o detentor da Discord Tag copiada para serem amigos. 
*/
async function getDiscordTag() {
    let discordTag = "Lyllyanny França#4619"
    await navigator.clipboard.writeText(discordTag)

    alert('Discord Tag copiada!')

    window.open('https://discord.com/login', '_blank')
}

/* função chamada após o clique no botão correspondente ao logo da Playstation.
Copia para a área de transferência do usuário a Playstation ID e o redireciona 
para a página de login da Playstation Network para que possa convidar o detentor
da Playstation ID copiada para serem amigos
*/
async function getPlaystationId() {
    let playstationId = "Lylly_21"
    await navigator.clipboard.writeText(playstationId)

    alert('Playstation ID copiada!')

    window.open("https://my.account.sony.com/central/signin/?duid=00000007000901002d16e755dba66641662a3c3b5d936cfac06b613d12bc3a06a2f3babc61f51c6b&response_type=code&client_id=e4a62faf-4b87-4fea-8565-caaabb3ac918&scope=web%3Acore&access_type=offline&state=96851ef6f9ab448f8c247205e5fcb8352f995bf54abe7d5f8e214176e9270ff8&service_entity=urn%3Aservice-entity%3Apsn&ui=pr&smcid=web%3Apdc&redirect_uri=https%3A%2F%2Fweb.np.playstation.com%2Fapi%2Fsession%2Fv1%2Fsession%3Fredirect_uri%3Dhttps%253A%252F%252Fio.playstation.com%252Fcentral%252Fauth%252Flogin%253Flocale%253Dpt_BR%2526postSignInURL%253Dhttps%25253A%25252F%25252Fwww.playstation.com%25252Fpt-br%25252Fplaystation-network%25252F%2526cancelURL%253Dhttps%25253A%25252F%25252Fwww.playstation.com%25252Fpt-br%25252Fplaystation-network%25252F%26x-psn-app-ver%3D%2540sie-ppr-web-session%252Fsession%252Fv5.22.0&auth_ver=v3&error=login_required&error_code=4165&error_description=User+is+not+authenticated&no_captcha=false&cid=0a9908fe-4762-4bc9-b3c4-c6eff0447b55#/signin/ca?entry=ca", "_blank")
}

/* função chamada após o clique no botão correspondente ao logo da Nintendo.
Copia para a área de transferência do usuário o Nintendo Friend Code e o redireciona 
para a página de login da Nintendo Accounts para que possa convidar o detentor
do Nintendo Friend Code copiada para serem amigos 
*/
async function getNintendoFriendCode() {
    let friendCode = "SW-1638-6989-0959"
    await navigator.clipboard.writeText(friendCode)

    alert('Nintendo Friend Code copiada!')

    window.open("https://accounts.nintendo.com/login?post_login_redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2F", "_blank")
}
