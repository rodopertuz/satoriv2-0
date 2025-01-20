<?php

include 'includes/connect.php';
$tablename = "prospectos";

date_default_timezone_set('America/Bogota');

$anohoy = date("Y");
$meshoy = date("m");
$diahoy = date("d");
$fechahoy = date("Y\-m\-d" , mktime(0,0,0,$meshoy,$diahoy,$anohoy));

$nombre = $_REQUEST["nombre"];
$acudiente = $_REQUEST["acudiente"];
$email = $_REQUEST["email"];
$celular = $_REQUEST['celular'];
$fecha = $_REQUEST["fecha"];
$hora = $_REQUEST["hora"];

$celular = str_replace("M", "+", $celular);
$email = strtolower($email);

// echo $nombre .', ';
// echo $acudiente .', ';
// echo $email .', ';
// echo $celular .', ';
// echo $fecha .', ';
// echo $hora;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$conn = new mysqli($servername, $username, $password, $dbname);

try {
    //Server settings
    $mail->SMTPDebug = 0; //Enable verbose debug output
    $mail->isSMTP(); //Send using SMTP
    $mail->CharSet = 'UTF-8';
    $mail->Host = 'smtp.gmail.com'; //Set the SMTP server to send through
    $mail->SMTPAuth = true; //Enable SMTP authentication
    $mail->Username = 'satori.centrodeartesmarciales@gmail.com';
    $mail->Password = 'hwtfsxxkwzxhfewm';
    $mail->SMTPSecure = 'ssl'; //Enable implicit TLS encryption
    $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('satori.centrodeartesmarciales@gmail.com', 'Satori Jiu Jitsu');
    $mail->addAddress($email, $nombre); //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('rodopertuz@gmail.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = 'Tu clase de cortesía en Satori Jiu Jitsu';
    $mail->Body = '
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <div style="width: 100%; background-color: #333333; text-align: center;">
                            <img style="width: 70%" src="https://www.satorijiujitsu.com.co/img/email/emailHeader.png" alt="emailHeader" />
                        </div>';
    if($acudiente != ""){
        $mail->Body = '<p>Hola ' . $acudiente . '</p>';
    } else {
        $mail->Body = '<p>Hola ' . $nombre . '</p>';
    }
    $mail->Body = '
                        <H2>Bienvenido a Satori Jiu Jitsu</H2>
                        <p>Has reservado con éxito el inicio de tu clase de cortesía con la siguiente información:</p>
                        <p>Nombre del alumno: ' . $nombre . '</p>
                        <p>Fecha: ' . $fecha . '</p>
                        <p>hora: ' . $hora . '</p>
                        <p>E-mail:  ' . $email . '</p>
                        <p>Celular: ' . $celular . '</p>
                        <ul>
                            <li>Recuerda llegar por lo menos 10 minutos antes del inicio de la clase</li>
                            <li>Usa ropa cómoda para hacer deporte durante la clase</li>
                            <li>No se permite caminar descalzo fuera del tatami, te recomendamos traer chanclas</li>
                        </ul> 
                        <p>Estaremos felices de poder contar contigo!</p>
                        <div style="width: 100%; background-color: #f1e4d4; text-align: center;">
                            <img style="width: 70%" src="https://www.satorijiujitsu.com.co/img/email/emailFootnote.png" alt="emailFootnote" />
                        </div>
                    </body>
                    </html>';
    $mail->AltBody = 'Hola' . $nombre . ' Bienvenido a Satori Jiu Jitsu.
                    Has reservado con éxito el inicio de tu clase de cortesía para el dia: 
                    ' . $fecha . ' hora: ' . $hora .
        '';

    $mail->send();
    
    //introducir datos en la base de datos, tabla prospectos
    $mail->clearAllRecipients( );
    $mail->addAddress('rodopertuz@gmail.com', 'Rodolfo Pertuz');
    $mail->Subject = 'Nueva solicitud de cortesía en Sitio WEB';

    if ($conn->connect_error) {
        //enviar email con el error del servidor
        $mail->Body = '
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <p>Se ha recibido una nueva solicitud de clase gratis pero se ha presentado un error
                            al introducir los datos en la tabla "PROSPECTOS"</p>
                            <p>Nombre: ' . $nombre . '</p>
                            <p>Email: ' . $email  . '</p>
                            <p>Celular: ' . $celular . '</p>
                            <p>Fecha: ' . $fecha . '</p>
                            <p>Hora: ' . $hora . '</p>
                            </hr>
                            <p>Respuesta del servidor de la base de datos, Connection failed: ' . $conn->connect_error . '</p>
                        </body>
                        </html>';
        $mail->send();
    } else {
        //enviar email con éxito de introducción en la base de datos
        $datoscortesia = $fecha . ' / ' . $hora; 
        $sql = "INSERT INTO $tablename (nombre, email, celular, editor, fecha, cortesia) VALUES ('$nombre', '$email', '$celular', 'WEB','$fechahoy', '$datoscortesia')";
        $resultado = mysqli_query($conn, $sql);
        if ($resultado){
            $mail->Body = '
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="utf-8">
                            </head>
                            <body>
                                <p>Se ha recibido una nueva solicitud de clase gratis y se han registrado con éxito los datos en la tabla "PROSPECTOS"</p>
                                <p>Nombre: ' . $nombre . '</p>
                                <p>Email: ' . $email  . '</p>
                                <p>Celular: ' . $celular . '</p>
                                <p>Fecha: ' . $fecha . '</p>
                                <p>Hora: ' . $hora . '</p>
                            </body>
                            </html>';
        }else{
            $mail->Body = '
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="utf-8">
                            </head>
                            <body>
                                <p>Se ha recibido una nueva solicitud de clase gratis pero se ha presentado un error
                                al introducir los datos en la tabla "PROSPECTOS"</p>
                                <p>Nombre: ' . $nombre . '</p>
                                <p>Email: ' . $email  . '</p>
                                <p>Celular: ' . $celular . '</p>
                                <p>Fecha: ' . $fecha . '</p>
                                <p>Hora: ' . $hora . '</p>
                                </hr>
                                <p>Respuesta del servidor de la base de datos, Connection failed: ' . $conn->error . '</p>
                            </body>
                            </html>';
        }
        $mail->send();
    }
    echo 'OK';
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}
