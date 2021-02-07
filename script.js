//input handler
const apiString = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
document.getElementById('search-btn').addEventListener('click', function () {
    const searchText = document.getElementById('text-box').value
    let userSearched = apiString + searchText;
    // console.log('User Searched this term', userSearched);
    fetch(userSearched)
        .then(res => res.json())
        .then(data => {
            const foundMeals = data.meals
            const recipeArea = document.getElementById('recipe-area')
            foundMeals.map(labelAndImage => {
                const boxesDiv = document.createElement('div')
                boxesDiv.classList.add('boxes')
                const contents = `
                    <div class="content">
                        <img class="images" src=${labelAndImage.strMealThumb}></img>
                        <h3 class="text-label">${labelAndImage.strMeal}</h3>
                    </div>
                `
                const finalContent = boxesDiv.innerHTML = contents; //maybe declare it as a variable is not necessary
                recipeArea.appendChild(boxesDiv);
            })
        })
})