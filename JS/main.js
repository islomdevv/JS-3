var elBtn = document.querySelector('.btn')
var elFid = document.querySelector('.fid')

elBtn.style.padding = '20px 40px'
elBtn.style.fontSize = '20px'
elBtn.style.fontWeight = '600'
elBtn.style.borderRadius = '5px'
elBtn.style.marginLeft = '-5px'

var statuss = false 

function fn1(){
    if(statuss == true){
        elBtn.textContent = ('kun') 
        elBtn.classList.add ('test')
        elBtn.classList.remove ('tesst')
    }else{
        elBtn.textContent = 'tun'
        elBtn.classList.remove ('test')
        elBtn.classList.add ('tesst')
    }
    statuss = !statuss 

    elTitle.classList.toggle('test')
}

var statuss = false 

function gb(){
    if(statuss == true){
        elFid.classList.remove ('foods')
        elFid.classList.add ('food')
    }else{
        elFid.classList.add ('foods')
        elFid.classList.remove ('food')
    }
    statuss = !statuss 

    elFid.classList.toggle('fid')
}
