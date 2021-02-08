//input handler
const apiString = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
document.getElementById('search-btn').addEventListener('click', function () {
    const searchText = document.getElementById('text-box').value
    let userSearched = apiString + searchText;
    fetch(userSearched)
        .then(res => res.json())
        .then(data => {
            const foundMeals = data.meals
            const recipeArea = document.getElementById('recipe-area')
            foundMeals.map(labelAndImage => {
                const boxesDiv = document.createElement('div')
                boxesDiv.classList.add('boxes')
                const contents = `
                    <div class="content" onclick="recipeDetail('${labelAndImage.strMeal}')">
                        <img class="images" src=${labelAndImage.strMealThumb}></img>
                        <h3 class="text-label">${labelAndImage.strMeal}</h3>
                    </div>
                `
                boxesDiv.innerHTML = contents;
                recipeArea.appendChild(boxesDiv);
            })
        })
        .catch(error => errorMessage("Couldn't find what you are looking for, please search different keyword"))
})


const recipeDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const dataObject = data.meals[0]
        const appendDetail = document.getElementById('detail-info')
        const detailDiv = document.createElement('div')
        appendDetail.innerHTML = "";
        const detailMeasurement = `
            <img class="images" id="selected-food" src="${dataObject.strMealThumb}">
            <div id="detail-info-texts">
                <h2>${dataObject.strMeal}</h2>
                <h4>Ingredients</h4>
                <ul>
                    <li>${dataObject.strMeasure1} ${dataObject.strIngredient1}</li>
                    <li>${dataObject.strMeasure2} ${dataObject.strIngredient2}</li>
                    <li>${dataObject.strMeasure3} ${dataObject.strIngredient3}</li>
                    <li>${dataObject.strMeasure4} ${dataObject.strIngredient4}</li>
                    <li>${dataObject.strMeasure5} ${dataObject.strIngredient5}</li>
                    <li>${dataObject.strMeasure6} ${dataObject.strIngredient6}</li>
                    <li>${dataObject.strMeasure7} ${dataObject.strIngredient7}</li>
                    <li>${dataObject.strMeasure8} ${dataObject.strIngredient8}</li>
                    <li>${dataObject.strMeasure9} ${dataObject.strIngredient9}</li>
                    <li>${dataObject.strMeasure10} ${dataObject.strIngredient10}</li>
                </ul>
            </div>
    `
    detailDiv.innerHTML = detailMeasurement;
    appendDetail.appendChild(detailDiv)
    })
}

const errorMessage = error => {
    document.getElementById('error-message').innerText = error;
}
