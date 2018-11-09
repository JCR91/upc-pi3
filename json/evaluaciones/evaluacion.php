<?php

    //define("PATH_PROY","C:/xampp/htdocs/minedu_pda_ie/");
    //define("PATH_PROY","/var/www/html/minedu_pda_ie/");

    $nombre = $_GET["nombre"];
    $grado = $_GET["grado"];
    $curso = $_GET["curso"];
    $preguntas = $_GET["preguntas"];
    
    if($nombre == '' || $grado == '' || $curso == '' ){
        exit;
    }
      $records=array();
    for ($x = 0; $x < sizeof($preguntas); $x++) {
        $records += array("idPregunta_".($x + 1) => $preguntas[$x] );
    } 

    $current_data = file_get_contents('./evaluacion.json');  
    $array_data = json_decode($current_data, true);  

    $total = intval(count($array_data["evaluacion"])) + 1;

    $extra = array(  
        'id' => strval($total),
        'nombre'               =>     $nombre,  
        'grado'          =>    $grado,  
        'curso'     =>     $curso,
        'creacion' => date("d/m/Y"),
        'estado' => '0',
        'fecha_inicio' => '',
        'minutos' => '',
        'preguntas' => $records
    ); 

    array_push($array_data["evaluacion"],$extra);
    $final_data = json_encode($array_data,JSON_UNESCAPED_UNICODE);  
    file_put_contents('./evaluacion.json', $final_data);

    $ArrMesaje = array('mensaje'=> "1");     
    echo json_encode($ArrMesaje, JSON_UNESCAPED_UNICODE);

?>