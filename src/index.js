//fetches dog images
fetch('https://dog.ceo/api/breeds/image/random/4')
.then ((resp) => resp.json())
.then((data) => renderImgs(data.message)) 

fetch('https://dog.ceo/api/breeds/list/all')
.then ((resp) => resp.json())
.then((data) => {
   const breeds = Object.keys(data.message)
     renderList(breeds)
     filterBreeds(breeds)
})

function renderImgs(urlArr){
    // console.log(urlArr)
    const imageContainer = document.getElementById("dog-image-container")
    // console.log(imageContainer)
    urlArr.forEach((url) => {
        const img = document.createElement('img')
        img.src = url
        imageContainer.append(img)
    });
}

function renderList(breeds){
    // console.log(breeds)
    const dogList = document.getElementById("dog-breeds")
    // console.log(dogList)
    breeds.forEach((breed) => {
        const listDog = document.createElement('li')
        listDog.textContent = `${breed}`
        dogList.append(listDog)
        listDog.addEventListener('click', (e) => {
            e.target.style.color = 'blue'
        }
        )
    })
}

function filterBreeds(breeds){
    dropDown = document.getElementById('breed-dropdown')
    // console.log(breeds)
    // console.log(dropDown)}
    // filterBreeds(breeds)
    dropDown.addEventListener('change', (e) => handleChange(e))

    function handleChange(e){
        console.log(e.target.value)
        const filteredBreeds = breeds.filter((breed) => {
            return breed[0] === e.target.value
        })
        document.getElementById('dog-breeds').textContent = ""
        renderList(filteredBreeds)
    }
}