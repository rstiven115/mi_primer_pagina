function activaScroll(selector){
    var button= document.querySelector(selector);
    button.addEventListener('click',function(event){
        event.preventDefault();
        var page= document.querySelector('html');
        var origin= Math.max(page.scrollTop);
        var destino= document.querySelector(this.attributes.href.value).offsetTop;
        var counter=0;
        var animation= setInterval(function(){
            counter++;
            page.scrollTop = origin + (destino * counter * 0.1);
        },50);
        setTimeout(function(){
            clearInterval(animation);
        },500);
    });
}
activaScroll('a[href*=panel__App]' );
activaScroll('a[href*=panel__comunicacion]' );
activaScroll('a[href*=panel__Entretenimiento]' );
activaScroll('a[href*=panel__Productividad]' );
activaScroll('a[href*=panel__Finanzas]' );
activaScroll('a[href*=panel__Salud]' );