// FOOD COLLECTION PART
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const foodIndex = data.categories;
        for (let i = 0; i < foodIndex.length; i++) {
            const foodImage = foodIndex[i].strCategoryThumb;
            const availableFoods = foodIndex[i].strCategory;
            const foodDetails = foodIndex[i].strCategoryDescription;
            const foodList = document.getElementById('food-list');
            const newItem = `
                <h3>${availableFoods}</h3>
               <img src="${foodImage}">
                 `
            const foodDiv = document.createElement('div');
            foodDiv.className = 'food-place';
            foodDiv.innerHTML = newItem;
            foodList.appendChild(foodDiv);
        }

        // FOOD SELECTION PART
        const selectFood = foodSelection => {
            for (let i = 0; i < foodIndex.length; i++) {
                const foodPage = document.getElementById('food-list');
                const foodItem = document.getElementsByClassName('food-place')[i];
                const foodDetailsDiv = document.getElementById('food-details');
                const foodImage = foodIndex[i].strCategoryThumb;
                const availableFoods = foodIndex[i].strCategory;
                const foodDetails = foodIndex[i].strCategoryDescription;
                const foodList = document.getElementById('food-list');
                foodItem.addEventListener('click', function() {
                    const newDiv = `
                            <h3>${availableFoods}</h3>
                            <img src="${foodImage}">
                            <ul><li>${foodDetails}</li></ul>
                            <button type="button" class="btn btn-success">Order Now</button>
                        `
                    foodPage.style.display = 'none';
                    const detailsDiv = document.createElement('div');
                    detailsDiv.className = 'details-div';
                    detailsDiv.innerHTML = newDiv;
                    foodDetailsDiv.appendChild(detailsDiv);
                })
            }
        }
        selectFood();

        // SEARCH INPUT PART
        const searchOutput = searchBar => {
            for (let i = 0; i < foodIndex.length; i++) {

                document.getElementById('search-Button').addEventListener('click', function() {
                    const foodNames = document.getElementById('food-list');
                    const searchOutputDiv = document.getElementById('new-div');
                    var searchInput = document.getElementById('search-box').value;
                    const searchedImage = foodIndex[i].strCategoryThumb;
                    const availableFoods = foodIndex[i].strCategory;
                    const foodDetails = foodIndex[i].strCategoryDescription;
                    if (searchInput == availableFoods) {
                        const searchResult = `
                            <h3>${availableFoods}</h3>
                            <img src="${searchedImage}">
                            <ul><li>${foodDetails}</li></ul>
                            <button type="button" class="btn btn-success">Order Now</button>
                        `
                        const searchResultDiv = document.createElement('div');
                        foodNames.style.display = 'none';
                        searchResultDiv.innerHTML = searchResult;
                        searchOutputDiv.appendChild(searchResultDiv);


                    } else {
                        searchInput = 'Sorry, no food available of this name';
                    }
                })
            }
        }
        searchOutput();
    })