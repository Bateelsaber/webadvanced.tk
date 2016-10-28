cookie.set('hello', 'world');

$(window).click(function(e){
    
    console.log(e.clientX);
     console.log(e.clientY);
     Cookies.set('xval', e.clientX);
     Cookies.set('xval', e.clientY);
     
})