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
            for (let i = 0; i < foundMeals.length; i++) {
                const labelAndImage = foundMeals[i];
                console.log(labelAndImage.strMeal);
                console.log(labelAndImage.strMealThumb);
                //testing Area
                // const recipeArea = document.getElementById('recipe-area') //this is important
                // const img = document.createElement('img');
                // img.src = labelAndImage.strMealThumb;
                // const h3 = document.createElement('h3');
                // h3.innerText = labelAndImage.strMeal;
                // recipeArea.appendChild(h3);
                // recipeArea.appendChild(img)
                //testing area 2
                const boxesDiv = document.createElement('div')

                const contents = `
                    <div class="content">
                        <img class="images" src=${labelAndImage.strMealThumb}></img>
                        <h3 class="text-label">${labelAndImage.strMeal}</h3>
                    </div>
                `
                const finalContent = boxesDiv.innerHTML = contents;
                recipeArea.appendChild(boxesDiv);


            } //do not remove
        })
})