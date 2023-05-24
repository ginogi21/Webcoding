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
    let data = jsondata.data.movies
    data.forEach((e,i) => {
      let title = data[i].title;
      let year = data[i].year;
      let img = data[i].medium_cover_image;
      let summary = data[i].summary;
      let genres = data[i].genres;

    });
  })
}

(function(){
  ajax();
})()
