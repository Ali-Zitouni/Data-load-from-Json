$(document).ready(function(){
  $.ajax({
    url: "https://api.tenor.com/v1/search?cats",
    type: "GET",
    success: $.getJSON("https://api.tenor.com/v1/search?cats", function(data){
      let cat_data = '';
      console.log(data.results[0]);
      data.results.forEach(element => {
        cat_data += '<tr>';
        cat_data += '<td><img src="'+element.media[0].mp4.preview+'" height="40" width="40" class="img-thumbnail" /></td>';
        cat_data += '<td>'+element.media[0].mp4.size+'</td>';
        cat_data += '<td>'+element.media[0].mp4.dims+'</td>';
        cat_data += '<td>'+element.media[0].mp4.duration+'</td>';
        cat_data += '</tr>';
      })
      $('#cat_table').append(cat_data);
    }) 
  });
});