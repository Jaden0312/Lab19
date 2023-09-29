const myApiNum = 'ZH6E0owuhMP-3aeuf6bwoJb8kQyFIh97S221WDIoeSI';
let page = 1 
const url = `https://api.unsplash.com/search/photos?page=${page}&query=`;
const searchIcon = document.getElementById('search-btn');
const searchBar = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
let searchValue = searchBar.value;


async function searchImage() {
    const response = await fetch(url + searchBar.value + '&client_id='+ myApiNum);
    const jsonData = await response.json();
    console.log(jsonData);
    // for (i=0 ; i <= length-1 ; i++) {
    //     const imageElements = document.createElement('img');
    //     imageElements.src = jsonData.results[i].urls.small;
    //     searchResult.appendChild(imageElements);
    //     console.log('for loop',searchResult);
    // };
    // console.log('outside',searchResult.children);

    jsonData.results.map((result) => {
        console.log(result);
        const imageElements = document.createElement('img');
        imageElements.src = result.urls.small;
        console.log('before',searchResult);
        searchResult.appendChild(imageElements);
        console.log('after',searchResult);
    });

    // const imageElements = document.createElement('img');
    // imageElements.src = jsonData.results

    // const imageElements = document.createElement('img');
    // imageElements.src = jsonData.results[0].urls.small;
    // searchResult.appendChild(imageElements);
};
searchImage();

searchIcon.addEventListener('click', () => {
    console.log('click');
    searchImage();
});