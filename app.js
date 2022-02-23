
const charactersList = document.getElementById('charactersList');
const search = document.getElementById("searchBar")

let resultArr = []
console.log(resultArr);

search.addEventListener('keyup',function(event) {
    const searchString = event.target.value.toLowerCase();

     const filteredProduct =  resultArr.filter((searchArr) => {
        return(
            searchArr.category.toLowerCase().includes(searchString)
        )
    })
    renderProduct(filteredProduct)
})


const loadCharacters = async function() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        resultArr = await res.json();
        console.log(resultArr);
        renderProduct(resultArr);
    } catch (err) {
        console.error(err);
    }
};


const renderProduct = (product) => {
  product = product
        .map(({category,price,image}) => {
            return `
            <li class="character">
                <h2>${category}</h2>
                <p>House: ${price} $</p>
                <img src="${image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = product;
};

loadCharacters();


/////////////////////////////////////////


// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();
