// ==UserScript==
// @name         MosOblEircFIX
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       mind_of_ghost
// @match        https://lkk-zkh.ru/main/
// @match        https://lkk-zkh.ru/auth/
// @grant        none
// @updateURL    https://mindofghost.github.io/test/MosOblEircFIX.user.js
// @downloadURL  https://mindofghost.github.io/test/MosOblEircFIX.user.js
// ==/UserScript==

(function() {

var Jquery = document.createElement('script');
Jquery.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
document.head.appendChild(Jquery);
//var change=false;

    //window.onload = function() {
        console.log('loaded');
        let Timer = setInterval(function(){
        if ($('p:contains("Чтобы начать пользоваться новым сервисом, необходимо авторизоваться,"):last').parent().parent().parent().parent().css('display')=="block"){
        //clearInterval(Timer);
        setTimeout(function(){
        $('p:contains("Чтобы начать пользоваться новым сервисом, необходимо авторизоваться,"):last').parent().parent().parent().parent().hide();
        $('#login').show();
        $('p:contains("Чтобы начать пользоваться новым сервисом, необходимо авторизоваться,"):first').parent().hide();
            //$('span:contains("Войти")').click();
        }, 2000);
        };
        }, 1000);


         let scr = setInterval(function(){
             //console.log("не hi");
         if($('div:contains("Передача показаний"):first').css('display')=="block"){
             clearInterval(scr);
             setTimeout(function(){
                 //console.log("hi");
           $('div:contains(\"Передача показаний\"):first').find('input').keyup(function(){
               var prop=$(this).prop('id').replace(/\+/g, '');
               $(this).attr('id', prop);
               setTimeout(function(){
                   $(this).trigger('keyup');
               }, 1000);
           });
           $('div:contains(\"Передача показаний\"):first').find('input').keydown(function(){
               var prop=$(this).prop('id')+ '+';
               $(this).attr('id', prop);
           });
           $('div:contains(\"Передача показаний\"):first').find('input').bind("change keyup input click", function() {
               if (this.value.match(/[^0-9.]/g)) {
                   this.value = this.value.replace(/[^0-9.]/g, '');
               }
           });
               }, 2000);
         }}, 1000);

   // };



})();
//x-field-tmb-form-textfield-form-focus
