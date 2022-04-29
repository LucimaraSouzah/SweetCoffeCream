function transparentMenu(){
    scrollY = window.pageYOffset
    screenX = window.innerWidth
    
    if(scrollY != 0 || screenX < 1023)
        header.classList.remove('bg-transparent')
    else
        header.classList.add('bg-transparent')

}

transparentMenu()

window.onscroll = () => transparentMenu()
window.onresize = () => transparentMenu()


function changeUser(n){
    
    user = [
        { ig: "Katherine Smith"  , txt:"I visited Sweet Coffee Cream last week during the day with my laptop so that I could get some work of my own done and enjoy some coffee shop atmosphere. This place was perfect! The coffee was great, and the truffles were ridiculously good. I recommend this place to everybody" , img: "assets/images/person1.jpg"},
        { ig: "Julia Parker" , txt:"I tried coffee here for the first time just the other day. The location may seem hidden but it is actually very easy to find Coffee Shop on the map. I ordered just a medium regular coffee and it was very good. The lady who poured the coffee was very friendly. I will definitely be back!" , img:  "assets/images/person2.jpg"},
        { ig: "Anthony Smith"  , txt:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha." , img: "assets/images/person3.jpg"},
    ]

    position = n%user.length
    if(position < 0)
        position = Math.abs(n%user.length-1)

    imagePerson.src = user[position].img
    titlePerson.innerHTML  = user[position].ig
    descPerson.innerHTML = user[position].txt
}
changeUser(0)
