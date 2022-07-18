// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

function c(id){
    return document.createElement(id)
}

async function search(){
    let query= document.getElementById("search_input").value;
// console.log(query)
    let response = await fetch(`https://masai-api.herokuapp.com/news?q=${query}`)
    let data= await response.json()
    data = data.articles
    append(data)
    console.log(data)
}

function append(data){
    let container = document.getElementById("results")
    data.forEach(function (el){
        let title = c('h4')
        title.innerText= el.title;

        let desc = c('p')
        desc.innerText= el.description;
        let img= c('img')
        img.src= el.urlToImage
        img.style.height='200px'
        img.style.width='200px'
        let divimg= c('div')
        divimg.style.height="200px"
        divimg.style.width="200px"
        divimg.append(img)
        let divCont= c('div')
        divCont.append(title,desc)
        divCont.style.margin="0 0 0 10px"
        let div= c('div')
        div.setAttribute("class","news")
        div.append(divimg,divCont)
        div.addEventListener("click", openNews)
        div.style.cursor="pointer"
        container.append(div)

    })
}
function openNews(data){
    let newsArr=[]

    localStorage.setItem("news",JSON.stringify(data))
}
