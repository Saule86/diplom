function price (){
    let project_html = document.querySelector('.tariff #first p')
    let project = project_html.innerHTML 
    project = parseFloat(project)
    let track_html = document.querySelector('.tariff #second p')
    let track = track_html.innerHTML 
    track = parseFloat(track)

    let price = project * track
    
    if(project <= 2){
        track === 2000
    }
    else if(project <= 4){
        track === 1800
    }
    else{
        track === 1680
    }

    price_html.innerHTML =  price
    console.log(price)

    return price
}
