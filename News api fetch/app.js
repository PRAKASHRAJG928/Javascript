let newsAPI = async (news) => {
    let apiURL = `https://newsapi.org/v2/everything?q=${news}&from=2025-03-02&sortBy=publishedAt&apiKey=6ffef03d28e34c22a1237c7bc9225ed3`;
    
    let newsObj = await fetch(apiURL);
    let response = await newsObj.json();
    return response;
};

async function callnews(news) {
    try {
        let response = await newsAPI(news);
        console.log(response);
        let container = document.getElementById("news_container");
        container.innerHTML = `
            <p class="title">${response.articles[0].title}</p>
            <p class="para">Description :${response.articles[0].description}</p>
            <p class="aut">-${response.articles[0].author}</p>
        `
    } catch (error) {
        console.error('Error:', error);
    }
}
document.getElementById("searchbtn").addEventListener("click", () => {
    let news = document.getElementById("search").value; 
    if (news) {
        callnews(news); 
    }
    else {
        console.log("News Not Found.");
    }
}

);
    
