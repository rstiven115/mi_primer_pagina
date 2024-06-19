function activaScroll(selector){

    var button = document.querySelector(selector);
    
            button.addEventListener('click', function(event){
                /*event.preventDefault();*/
                var page=document.querySelector('Dudas.html');
                var origin=Math.max(page.scrollTop);
                console.log(origin);
                var dest=document.querySelector(this.attributes.href.value).offsetTop;
                console.log(dest);
                var counter = 0;
        
                var animation= setInterval(function(){
                    counter++;
                    page.scrollTop= origin+(dest*counter*0.1);
                },50);
                setTimeout(function(){
                    clearInterval(animation);
                },500);
            });
            console.log(prueba);
}

activaScroll('a [href*=panel__App]');
activaScroll('a [href*=panel__comunicacion]');
activaScroll('a [href*=panel__Entretenimiento]');
activaScroll('a [href*=panel__Productividad]');
activaScroll('a [href*=panel__Finanzas]');
activaScroll('a [href*=panel__Salud]');