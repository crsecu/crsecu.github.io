var dropdown1 = document.getElementById('dropdown1');
var dropdown2 = document.getElementById('dropdown2');
var dropdown3 = document.getElementById('dropdown3');

$(dropdown1).click(function(){
    $(this).toggleClass('active');
    if($(dropdown1).hasClass('active')){
        $(dropdown2).removeClass('active');
        $(dropdown3).removeClass('active');
    } else{
        $(dropdown1).removeClass('active');
    }
})

$(document).click(function(){
    $(dropdown1).removeClass('active');
})


$(dropdown2).click(function(){
    $(this).toggleClass('active');
    if($(dropdown2).hasClass('active')){
        $(dropdown1).removeClass('active');
        $(dropdown3).removeClass('active');
    } else{
        $(dropdown2).removeClass('active');
    }
})

$(document).click(function(){
    $(dropdown2).removeClass('active');
})