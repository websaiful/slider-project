var photos = ["img/1.JPG","img/2.JPG","img/3.JPG"];
var imgTag = document.querySelector('img');

var count = 0;

function next(){
    count++;
    imgTag.src = photos[count];
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    }

    
    
  
 
}
function prew(){
    count--;
    imgTag.src = photos[count];
    console.log(count);
 
}

