const myApiNum = 'ZH6E0owuhMP-3aeuf6bwoJb8kQyFIh97S221WDIoeSI';
const url = 'https://api.unsplash.com/search/photos?page=${page}&query='
const searchIcon = document.getElementById('search-btn');
const searchBar = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
let searchValue = searchBar.value;


async function searchImage(searchValue) {
    const response = await fetch(url + searchValue + '&client_id='+ myApiNum);
    let jsonData = await response.json();
    console.log(jsonData);
    // for (i=0 ; i <= length-1 ; i++) {
    //     const imageElements = document.createElement('img');
    //     imageElements.src = jsonData.results[i].urls.small;
    //     searchResult.appendChild(imageElements);
    // };
    const imageElements = document.createElement('img');
    imageElements.src = jsonData.results[0].urls.small;
    searchResult.appendChild(imageElements);
};
searchImage();

searchIcon.addEventListener ('click', () => {
    searchImage(searchValue);
});