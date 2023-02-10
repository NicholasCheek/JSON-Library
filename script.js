fetch("elderLibrary.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    let displayArea = document.querySelector("#display");
    let out = "";
    for (let d of data){
        out += `
            <h1>${d.title}</h1>
            <i>by ${d.author}</i>
        `;
        for (chapter in d.chapters) {
            d.chapters.paragraphs.map(paragraph => {
                out += `
                    <p class = "paragraph">${paragraph}</p>
                `
            })
        }
    }
    displayArea.innerHTML = out;
})

