<?php

define("PATH_PROY","C:/xampp/htdocs/minedu_pda_ie/");
// define("PATH_PROY","/var/www/html/minedu_pda_ie/");

    $id = $_GET["id"];
    $accion = $_GET["accion"];
    $duracion = $_GET["duracion"];

    if($id == '' || $accion == ''  ){
        exit;
    }

    $current_data = file_get_contents('./evaluacion.json');  
    $array_data = json_decode($current_data, true);  

    $top = sizeof($array_data["evaluacion"]) - 1;
    $bottom = 0;
 
    $extra["evaluacion"] = array();

    while($bottom <= $top)
        {  // if($array_data["evaluacion"][0])
            
            if($array_data["evaluacion"][$bottom]["id"] == $id){
                if($accion == "iniciar"){
                    $extraTemp = array(  
                        'id' => $array_data["evaluacion"][$bottom]["id"],
                        'nombre'               =>     $array_data["evaluacion"][$bottom]["nombre"],  
                        'grado'          =>    $array_data["evaluacion"][$bottom]["grado"],  
                        'curso'     =>     $array_data["evaluacion"][$bottom]["curso"],
                        'creacion' => $array_data["evaluacion"][$bottom]["creacion"],
                        'estado' => '1',
                        'fecha_inicio' => date("d/m/Y h:i"),
                        'minutos' => $duracion,
                        'preguntas' => $array_data["evaluacion"][$bottom]["preguntas"]
                    );
                    
                    array_push($extra["evaluacion"],$extraTemp);
                }else if($accion == "eliminar"){
                    //eliminar
                }else{
                    $extraTemp = array(  
                        'id' => $array_data["evaluacion"][$bottom]["id"],
                        'nombre'               =>     $array_data["evaluacion"][$bottom]["nombre"],  
                        'grado'          =>    $array_data["evaluacion"][$bottom]["grado"],  
                        'curso'     =>     $array_data["evaluacion"][$bottom]["curso"],
                        'creacion' => $array_data["evaluacion"][$bottom]["creacion"],
                        'estado' => '2',
                        'fecha_inicio' => $array_data["evaluacion"][$bottom]["fecha_inicio"],
                        'minutos' => $array_data["evaluacion"][$bottom]["minutos"],
                        'preguntas' => $array_data["evaluacion"][$bottom]["preguntas"]
                    );
                    array_push($extra["evaluacion"],$extraTemp);
                }
            }else{
                $extraTemp = array(  
                    'id' => $array_data["evaluacion"][$bottom]["id"],
                    'nombre'               =>     $array_data["evaluacion"][$bottom]["nombre"],  
                    'grado'          =>    $array_data["evaluacion"][$bottom]["grado"],  
                    'curso'     =>     $array_data["evaluacion"][$bottom]["curso"],
                    'creacion' => $array_data["evaluacion"][$bottom]["creacion"],
                    'estado' => $array_data["evaluacion"][$bottom]["estado"],
                    'fecha_inicio' => $array_data["evaluacion"][$bottom]["fecha_inicio"],
                    'minutos' => $array_data["evaluacion"][$bottom]["minutos"],
                    'preguntas' => $array_data["evaluacion"][$bottom]["preguntas"]
                );
                array_push($extra["evaluacion"],$extraTemp);
            }
            $bottom++;
        }

        $final_data = json_encode($extra,JSON_UNESCAPED_UNICODE);  
       
        file_put_contents('./evaluacion.json', $final_data);

        $ArrMesaje = array('mensaje'=> "1");     
        echo json_encode($ArrMesaje, JSON_UNESCAPED_UNICODE);

?>