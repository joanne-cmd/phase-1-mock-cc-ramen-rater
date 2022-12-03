// write your code here

const menu=document.getElementById("ramen-menu")
function fetchImages(url){
    fetch(url)
    .then(response => response.json())
    .then(ramen => {
        createImages(ramen)
    })

}
fetchImages("http://localhost:3000/ramens")

function createImages(images){
    for(let image of images){
        newMenuItem(image)
    }
}

const form = document.getElementById("new-ramen")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let image= {
        "image":document.querySelector("#new-image").value,
        "name":document.querySelector("#new-name").value,
        "restaurant":document.querySelector("#new-restaurant").value,
        "rating":document.querySelector("#new-rating").value,
        "comment":document.querySelector("#new-comment").value
    }
    newMenuItem(image)
    showDetailInfo(image)
})
 
function newMenuItem(image){
    let menuItem = document.createElement("img")
    menuItem.setAttribute("src", image.image)
    menu.appendChild(menuItem)
    menuItem.addEventListener("click",(event)=> {
        showDetailInfo(image)
    } )

}
function showDetailInfo(image){
    let pic = document.querySelector(".detail-image")
        pic.setAttribute("src", image.image)
    let h2 = document.querySelector(".name")
        h2.textContent= image.name
    let h3= document.querySelector(".restaurant")
        h3.textContent=image.restaurant
    let rating =document.querySelector("#rating-display")
        rating.textContent=image.rating
    let comment= document.querySelector("#comment-display")
        comment.textContent=image.comment
}

