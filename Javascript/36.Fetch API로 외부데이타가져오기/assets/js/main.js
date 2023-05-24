/* fetch('good.json').then(function(response){
  response.json().then(function(data){
    console.log(data.name)
  })
}) */

/* fetch('good.json').then(function(resp){
  return resp.json()
}).then(function(data){
  return data.name;
}).then(function(data){
  console.log(data)
}) */

/* API연습사이트 */
/* https://yts.mx/api */

const div = document.querySelector('div')

function ajax(){
  fetch('https://yts.mx/api/v2/list_movies.json').then(function(resp){
  
    if(resp.status !==200){
      console.log('통신실패')
    }else{
      return resp.json();
    }
  }).then(function(jsondata){
    let data = jsondata.data.movies;

    let movieList = document.querySelector('.movieList');
    let tag = "";

    data.forEach((e,i) => {
      let title = data[i].title;
      let year = data[i].year;
      let img = data[i].medium_cover_image;
      let summary = data[i].summary;
      let genres = data[i].genres;

      tag += `<div class="movie">`;
      tag += `<img src="${img}">`;
      tag += `<div class="inner">`;
      tag += `<h3 class="title">◆ Title: ${title}</h3>`;
      tag += `<h3 class="year">◆ Open: ${year}</h3>`;
      tag += `<ul class="genres">`;
              for(let k in genres){
                tag += `<li>✅${genres[k]}</li>`;
              }
      tag += `</ul>`;
      tag += `<p class="summary"><b>※ Content:</b> ${summary}</p>`;
      tag += `</div>`;
      tag += `</div>`;
    });
    movieList.innerHTML = tag;
  })
}

(function(){
  ajax();
})()
