$(document).ready(function () {
    $( "a.event_nivel" ).bind( "click", function() {
        var id_nivel = $(this).attr("data");
         $.redirect(PATH_URL +'/grados', {'nivel': id_nivel});
    });

    $( "a.event_grado" ).bind( "click", function() {
        var id_grado = $(this).attr("data");
         $.redirect(PATH_URL +'/areas', {'grado': id_grado});
    });

    $( "a.event_area" ).bind( "click", function() {
        var id_area = $(this).attr("data");
         $.redirect(PATH_URL +'/listado', {'area': id_area});
    });

    $( "a.event_recurso" ).bind( "click", function() {
        var id_recurso = $(this).attr("data");
         $.redirect(PATH_URL +'/detalle/'+id_recurso, {'recursoCode': id_recurso});
    });

   
    $( "a.event_nivel_head" ).bind( "click", function() {
        var id_nivel = $(this).attr("data");
         $.redirect(PATH_URL +'/grados', {'nivel': id_nivel});
    });    

    $( "#btn_buscar_recurso" ).bind( "click", function() {
        if($("input.control-buscador").val().length>2){
            //$.redirect(PATH_URL +'/busqueda', {'q': $("input.control-buscador").val()});
            location.href = PATH_URL +'/busqueda/&q='+$("input.control-buscador").val();
        }else{
            alert("Ingrese por lo menos 3 caracteres");
        }
    });    
    
    $("input.control-buscador").keyup(function(event){
        if(event.keyCode == 13){
            if($(this).val().length>2){
                location.href = PATH_URL +'/busqueda/&q='+$(this).val();
                //$.redirect(PATH_URL +'/busqueda', {'q': $(this).val()});
            }else{
                $(this).blur();
                alert("Ingrese por lo menos 3 caracteres");
            }
        }
    });    
    
});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-96237139-1', 'auto');
  ga('send', 'pageview')