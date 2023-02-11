function setDisplay(value) {
    fetch("elderLibrary.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let displayArea = document.querySelector("#display");
        let out = "";
        for (let d of data){
            if (d.id == value) {
                out += `
                    <h1>${d.title}</h1>
                    <h5 class="author">by ${d.author}</h5>
                `;
                for (const key in d.chapters) {
                    if (key.includes("chapterName")) {
                        let x = d.chapters[key]
                        out += `<h2>${x}</h2>`
                    } else if (key.includes("paragraphs")) {
                        let x = d.chapters[key];
                        let y = []
                        for (i = 0; i < x.length; i++) {
                            y.push(x[i]);
                        }
                        y.map(paragraph => {
                            out += `
                                <p class = "paragraph">${paragraph}</p>
                            `
                        })
                    }
                }
            }
        }
        displayArea.innerHTML = out;
    })
}
