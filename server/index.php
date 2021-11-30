<?php
include_once './cors.php';

cors();
$response = array();

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);        


$headerStringValue = $_SERVER['oauth'];

echo $headerStringValue;




$email = $data->email;
$password = (isset($data->password)) ? $data->password : "";

if($email!="1" && $password!="1"){
    $response["success"] = false;
    $response["error"] = "invalid credentials";
    echo json_encode($response);
    exit;    
}

$response["token"] = "JHDF4578FDFYJHDFG78DFFSDF78SDF";
$response["sn"] = "154546565";

echo json_encode($response);
?>