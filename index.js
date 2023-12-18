let h = 1;
let win = 0;
let l = 1;
let b = 1
let han = 1
let rhand = $('.p_rhand')
let lhand = $('.p_lhand')
let body = $('.p_body')
let head = $('.p_head')
let legs = $('.p_legs')
let infohand = $('.infohand')
let infobody = $('.infobody')
let infohead = $('.infohead')
let infolegs = $('.infolegs')


head.on('click', function(){
   
    if ( h == 1 && l == 1 && b == 1 && han == 1){ 
        infohead.slideToggle(1000);
        $('main').css({'animation':'bod 0.6s', 'animation-fill-mode':'forwards'})
        h = 2
        
    }
    else if( h == 2 && l == 1 && b == 1 && han == 1){ 
        infohead.slideToggle(200);
        $('main').css({'animation':'bod1 0.6s', 'animation-fill-mode':'forwards'})
        h = 1
    }
    else if( h == 1 && l == 2 && b == 1 && han == 1){
        infolegs.css({'display':'none'})
        infohead.toggle(0)
        h = 2
        l = 1
        b = 1
    } else if (h == 1 && l == 1 && b == 2 && han == 1){
        infobody.css({'display':'none'})
        infohead.toggle(0)
        h = 2
        l = 1
        b = 1
    }else if (h == 1 && l == 1 && b == 1 && han == 2){
        infohand.css({'display':'none'})
        infohead.toggle(0)
        han = 1
        h = 2
        l = 1
        b = 1
    }
})
legs.on('click', function(){
    if( l == 1 && h == 1 && b == 1 && han == 1){
        infolegs.slideToggle(1000);
        $('main').css({'animation':'bod 0.6s', 'animation-fill-mode':'forwards'})
        l = 2

    }
    else if( l ==2 && h == 1 && b == 1 && han == 1){
        infolegs.slideToggle(200);
        $('main').css({'animation':'bod1 0.6s', 'animation-fill-mode':'forwards'})
        l = 1
    }
    else if ( l == 1 && h == 2 && b == 1 && han == 1){
        infohead.css({'display':'none'})
        infolegs.toggle(0)
        h = 1
        l = 2

    }else if(l == 1 && h == 1 && b == 2 && han == 1){
        infobody.css({'display':'none'})
        infolegs.toggle(0)
        b = 1
        l = 2

    }else if(l == 1 && h == 1 && b == 1 && han == 2){
        infohand.css({'display':'none'})
        infolegs.toggle(0)
        b = 1
        l = 2
        han = 1

    }
})
body.on('click', function(){
    if (b == 1 && h == 1 && l == 1 && han == 1){
        infobody.slideToggle(1000);
        $('main').css({'animation':'bod 0.6s', 'animation-fill-mode':'forwards'})
        b = 2

    }else if( b == 2 && h == 1 && l == 1 && han == 1){
        infobody.slideToggle(200);
        $('main').css({'animation':'bod1 0.6s', 'animation-fill-mode':'forwards'})
        b = 1

    }else if(b == 1 && l == 2 && h == 1 && han == 1){
        infolegs.css({'display':'none'})
        infobody.toggle(0)
        h = 1
        l = 1
        b = 2
    }else if(b == 1 && l == 1 && h == 2 && han == 1){
        infohead.css({'display':'none'})
        infobody.toggle(0)
        h = 1
        l = 1
        b = 2
    }else if(b == 1 && l == 1 && h == 1 && han == 2){
        infohand.css({'display':'none'})
        infobody.toggle(0)
        han = 1
        l = 1
        b = 2
    }
})
rhand.on('click', function(){
    if (han == 1 && b == 1 && h == 1 && l == 1){
        infohand.slideToggle(1000);
        $('main').css({'animation':'bod 0.6s', 'animation-fill-mode':'forwards'})
        han = 2

    }else if( han == 2 && b == 1 && h == 1 && l == 1){
        infohand.slideToggle(200);
        $('main').css({'animation':'bod1 0.6s', 'animation-fill-mode':'forwards'})
        han = 1

    }else if(han == 1 && b == 1 && l == 2 && h == 1){
        infolegs.css({'display':'none'})
        infohand.toggle(0)
        han = 2
        h = 1
        l = 1
        b = 1
    }else if(han == 1 && b == 1 && l == 1 && h == 2){
        infohead.css({'display':'none'})
        infohand.toggle(0)
        han = 2
        h = 1
        l = 1
        b = 1
    }else if (han == 1 && b == 2 && l == 1 && h == 1){
        infobody.css({'display':'none'})
        infohand.toggle(0)
        han = 2
        h = 1
        l = 1
        b = 1

    }
})
lhand.on('click', function(){
    if (han == 1 && b == 1 && h == 1 && l == 1){
        infohand.slideToggle(1000);
        $('main').css({'animation':'bod 0.6s', 'animation-fill-mode':'forwards'})
        han = 2

    }else if( han == 2 && b == 1 && h == 1 && l == 1){
        infohand.slideToggle(200);
        $('main').css({'animation':'bod1 0.6s', 'animation-fill-mode':'forwards'})
        han = 1

    }else if(han == 1 && b == 1 && l == 2 && h == 1){
        infolegs.css({'display':'none'})
        infohand.toggle(0)
        han = 2
        h = 1
        l = 1
        b = 1
    }else if(han == 1 && b == 1 && l == 1 && h == 2){
        infohead.css({'display':'none'})
        infohand.toggle(0)
        han = 2
        h = 1
        l = 1
        b = 1
    }else if (han == 1 && b == 2 && l == 1 && h == 1){
        infobody.css({'display':'none'})
        infohand.toggle(0)
        han = 2
        h = 1
        l = 1
        b = 1

    }
})
$(".pologbtn").click(function(){
    $(".polog").slideToggle(500)
})
$(".eyesbtn").click(function(){
    $(".eyes").slideToggle(500)
})
$(".mousebtn").click(function(){
    $(".mouse").slideToggle(500)
})
$(".backbtn").click(function(){
    $(".back").slideToggle(500)
})
$(".shouldersbtn").click(function(){
    $(".shoulders").slideToggle(500)
})
$(".fingersbtn").click(function(){
    $(".fingers").slideToggle(500)
})
$(".handspositionbtn").click(function(){
    $(".handsposition").slideToggle(500)
})
$(".legspositionbtn").click(function(){
    $(".legsposition").slideToggle(500)
})
$(".testbtn").click(function(){
    $(".testh").slideToggle(500)
})



$("#nerv").click(function(){
    win++;
    $("#sad, #shy, #conf").css({"background-color":"red"})
    $("#nerv").css({"background-color":"green"})
})
$("#shy, #conf, #sad").click(function(){
   window.navigator.vibrate(200);
    win--;
    $("#sad, #shy, #conf").css({"background-color":"red", "animation":"fals .5s"})
    $("#nerv").css({"background-color":"green"})
})
$("#shy1, #conf1, #nerv1").click(function(){
   window.navigator.vibrate(200);
    win--;
    if (win == 2){
        $(".win").css({"display":"flex"})
      
    }else{
        $(".loose").css({"display":"flex"})
    }
    $("#nerv1, #shy1, #conf1").css({"background-color":"red", "animation":"fals .5s"})
    $("#sad1").css({"background-color":"green"})
})
$("#sad1").click(function(){
    win++;
    if (win == 2){
        $(".win").css({"display":"flex"})
      
    }else{
        $(".loose").css({"display":"flex"})
    }
    $("#nerv1, #shy1, #conf1").css({"background-color":"red"})
    $("#sad1").css({"background-color":"green"})
})

