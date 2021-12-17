//Anatomy of JQuery
//Shortcuts - Replace Jquery with a $ sign
//Listener
$(document).ready(function(){
    $('h1').click(function(){
        alert('This is a Heading');
        alert('Clicking will make you laugh :)');
        $(this).hide();
    });
    $('p').click(function(){
        alert('This is a paragraph');
    });

    $('img').click(function(){
        alert('This is an image');
        $(this).hide();
    });


});