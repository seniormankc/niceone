let navbarclick=document.querySelector('.navbar')
let addanimeform=document.querySelector('#addanime')
let formfield=document.querySelector('form')
navbarclick.addEventListener('click',function(){
    let dropdowndown=document.querySelector('.dropdownn')
    dropdowndown.className='dropdown'
})
addanimeform.addEventListener('click',function(){
    formfield.className='form'
})

//function to get the value of the submitted form
formfield.addEventListener('submit',formsubmited)


function formsubmited(e){
    e.preventDefault()
    let getanimename=e.target.elements['name'].value
    let getanimepicupload=e.target.elements['upload'].value
    let getepisode=e.target.elements['episodeno'].value

    for(i=0;i<formfield.length;i++){
        formfield.elements[i].value=''
    }
    //function that creates card
    let createdcard=createcard(getanimename,getanimepicupload,getepisode)

    let cards=document.querySelector('.cards')
    cards.appendChild(createdcard)

    formfield.className='formm'
}

function createcard(name,photoUrl,episodeUpLoaded){
    let card=document.createElement('div')
    card.className='card'

    let createImg=document.createElement('img')
    createImg.setAttribute('src',photoUrl)
    card.appendChild(createImg)

    let textcard=document.createElement('div')
    textcard.className='writeup'

    let createp1=document.createElement('p')
    createp1.innerHTML=name
    textcard.appendChild(createp1)

    let createp2=document.createElement('p')
    createp2.innerHTML=episodeUpLoaded
    textcard.appendChild(createp2)

    card.appendChild(textcard)
    return card
}

//function to remove the form
 
