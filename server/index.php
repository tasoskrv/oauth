<?php
include_once './cors.php';
include_once './Config.php';
include_once './Database.php';

cors();
$response = array();

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$headers = apache_request_headers();
$oauth = (isset($headers['oauth']))? $headers['oauth'] : null;

$db = new Database();

if($oauth == "registration"){
    $email = $data->email;
    $password = md5($data->password);
    $utcDate = date("Y-m-d H:i:s", time() - date("Z"));

    try {        
        $binds = array(":email" => $email, ":password" => md5($password));        
        $query = "INSERT INTO user(`email`, `password`, `insertdate`) VALUES (:email, :password, '$utcDate')";
        $id = $db->insertSql($query, $binds); 

        $response["success"] = true;
        $response["id"] = $id;

    } catch(PDOException $e){
        $response["success"] = false;
        $response["message"] = $e->getMessage();
    }

} else if($oauth == "authenticate"){
    $email = $data->email;
    $password = $data->password;
        
    $binds = array(":email" => $email, ":password" => $password);    
    $query = "SELECT * FROM `user` where email=:email and password = md5(:password)";
    $count = $db->countRows($query, true, $binds);

    if($count == 0){
        $response["success"] = false;
        $response["error"] = "invalid credentials";
    } else {
        $response["success"] = true;
        $response["token"] = "JHDF4578FDFYJHDFG78DFFSDF78SDF";
        $response["sn"] = "154546565";        
    }
}


echo json_encode($response);
?>