/*
$ to call jQuery
$("") = document.querySelector/All("")
*/

//Class related
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
console.log($("h1").hasClass("margin-50"));

//text/innerHtml
$("h1").text("Bye");
$("h1").html("<em>Bye!Bye!<Bye!/Bye!<em>");

//css("x") returns the value of x, css("a","b") changes the value a to b
$("button").css("color","green");

//attribute related
$("img").attr("src");//returns src value
$("a").attr("href","https://www.youtube.com"); //changes the href value

//Event listeners
$("h1").click(function(){
    $("h1").css("color","lightgreen");
});
$("button").click(function(){
    $("h1").css("color","purple");
});
$("input").keypress((event)=>{
    $("h1").text(event.key);
})
$("button").on("click",function(){});//universal event listener

//adding new element to the HTML
$("h1").before("<buttton>hello</buttom>");  //before h1
$("h1").after("<buttton>hello</buttom>");   //after h1
$("h1").append("<buttton>hello</buttom>");  //inside the h1 and after the insides <h1>Content<bnt></btn></h1>
$("h1").prepend("<buttton>hello</buttom>"); //inside the h1 before the content

// animations
$("button").on("click",()=>{
    $("h1").hide();             //hides the h1
    $("h1").show();             //shows the h1
    $("h1").toggle();           // hide/show
    $("h1").fadeToggle();       //animation hide
    $("h1").slideToggle();  
    $("h1").animate({opacity:0.5});  //custom animation with css in {}
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})