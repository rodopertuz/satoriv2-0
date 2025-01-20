<?php

function actualizarEstadoPorFecha($conn, $tablename, $date1){
$sql = "SELECT * FROM $tablename";
    $resultado = mysqli_query($conn, $sql);

    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $date2 = new DateTime($row["fecha_vencimiento"]);
            $restaFecha = $date1->diff($date2); //$date1 es la fecha de hoy
            if (($row["estado"] != "congelado") && ($row["estado"] != "staff") && ($row["estado"] != "convenio")){
                if ($date2 > $date1){ //$date1 es la fecha de hoy
                    $nombreRow = $row["nombre"];
                    $sql2 = "UPDATE $tablename SET estado = 'activo' WHERE nombre = '$nombreRow'";
                    $resultado2 = mysqli_query($conn, $sql2);
                }
                if (($restaFecha->days <3) && ($date2>$date1)) { //$date1 es la fecha de hoy
                    $nombreRow = $row["nombre"];
                    $sql2 = "UPDATE $tablename SET estado = 'saldobajo' WHERE nombre = '$nombreRow'";
                    $resultado2 = mysqli_query($conn, $sql2);
                }
                if (($restaFecha->days <6) && ($date2<$date1)) { //$date1 es la fecha de hoy
                    $nombreRow = $row["nombre"];
                    $sql2 = "UPDATE $tablename SET estado = 'pendiente' WHERE nombre = '$nombreRow'";
                    $resultado2 = mysqli_query($conn, $sql2);
                }
                if (($restaFecha->days >30) && ($date2<$date1)) { //$date1 es la fecha de hoy
                    $nombreRow = $row["nombre"];
                    $sql2 = "UPDATE $tablename SET estado = 'inactivo' WHERE nombre = '$nombreRow'";
                    $resultado2 = mysqli_query($conn, $sql2);
                }
            }                    
        }
    }
}

function actualizarEstadoPorClases($conn, $tablename){
    $sql = "SELECT * FROM $tablename WHERE plan = 'tiquetera10c' OR plan = 'Tiquetera 10 Clases'";
    $resultado = mysqli_query($conn, $sql);

    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $tablename2 = $row["nombre_tabla"];
            $sql2 = "SELECT saldo_clases FROM $tablename2 ORDER BY fecha";
            $resultado2 = mysqli_query($conn, $sql2);
            if ($resultado2){
                while($row2 = $resultado2->fetch_assoc()){
                    if($row2["saldo_clases"] != ""){
                        $saldo_clases = $row2["saldo_clases"];
                    }
                }
                if (($row["estado"] != "congelado") && ($row["estado"] != "staff") && ($row["estado"] != "convenio") && ($row["estado"] != "inactivo")){
                    if ($saldo_clases < 3){
                        $sql3 = "UPDATE $tablename SET estado = 'saldobajo' WHERE nombre_tabla = '$tablename2'";
                        mysqli_query($conn, $sql3);
                    }
                    if ($saldo_clases < 1){
                        $sql3 = "UPDATE $tablename SET estado = 'pendiente' WHERE nombre_tabla = '$tablename2'";
                        mysqli_query($conn, $sql3);
                    }
                    if ($saldo_clases < -2){
                        $sql3 = "UPDATE $tablename SET estado = 'inactivo' WHERE nombre_tabla = '$tablename2'";
                        mysqli_query($conn, $sql3);
                    }
                }
            }
        }
    }
}

function consultaOnDeck($conn, $tablename, $date1, $fecha, $hora1, $hora2){
    $sql = "SELECT * FROM $tablename ORDER BY grado";
    $resultado = mysqli_query($conn, $sql);

    if(($resultado) && ($resultado->num_rows > 0)){
        $s7 = $s10 = $s11 = $s16 = $s17 = $s18 = $s20 = '';
        if($hora1 == '0700') {
            $s7 = 'selected';
        } else if ($hora1 == '1000') {
            $s10 = 'selected';
        } else if ($hora1 == '1130') {
            $s11 = 'selected';
        } else if ($hora1 == '1630') {
            $s16 = 'selected';
        } else if ($hora1 == '1730') {
            $s17 = 'selected';
        } else if ($hora1 == '1830') {
            $s18 = 'selected';
        } else if ($hora1 == '2000') {
            $s20 = 'selected';
        }
        echo '<div class="encabezadoContenido" id="encabezadoContenidoAsistencias">
            <div class="encabezadoContenido-btn" onclick="cambiarPestanaContenido(1)">
                <span>
                    <i class="fa-solid fa-rotate-right"></i>
                </span>
            </div>
            <div class="encabezadoContenido-item noMobile">
                <select name="ordenar" id="ordenarUsuarios" onchange="ordenarUsuarios(this)">
                    <option value="" selected disabled>Ordenar por... </option>
                    <option value="nombre">Nombre</option>
                    <option value="estado">Estado actual de afiliación</option>
                    <option value="promocion">Tipo de promoción</option>
                    <option value="asistencias">Asistencias</option>
                </select>
            </div>
            <div class="encabezadoContenido-item">
                <select name="filtrar" id="filtrarUsuarios" onchange="mostrarInputBusqueda(this)">
                    <option value="" selected disabled>Filtrar por... </option>
                    <option value="nombre">Nombre</option>
                    <option value="estado">Estado actual de afiliación</option>
                    <option value="promocion">Promo/Plan</option>
                </select>
            </div>
            <div class="encabezadoContenido-item">
                <input type="text" id="inputBusqueda" onkeyup="busquedaFiltro(this)" placeholder="buscar..." autocomplete="off" style="display: none;">
                <i class="fa-solid fa-eraser manito" style="padding-left: 10px; display: none;" onclick="borrarInputUniversal(this)"></i>
                <select name="selectEstado" id="selectEstado" style="display: none;" onchange="busquedaFiltro(this)">
                </select>
            </div>
            <div class="encabezadoContenido-item">
                <input type="date" name="fechaPrevCheckin" id="fechaPrevCheckin" value="' . $fecha . '">
            </div>
            <div class="encabezadoContenido-item">
                <select name="horaPrevCheckin" id="horaPrevCheckin">
                    <option value="">actual</option>
                    <option value="700" ' . $s7 . '>7:00 AM (BJJ)</option>
                    <option value="1000" ' . $s10 . '>10:00 AM (KIDS)</option>
                    <option value="1130" ' . $s11 . '>11:30 AM (BJJ)</option>
                    <option value="1630" ' . $s16 . '>4:30 PM (KIDS)</option>
                    <option value="1730" ' . $s17 . '>5:30 PM (PRIV.)</option>
                    <option value="1830" ' . $s18 . '>6:30 PM (BJJ)</option>
                    <option value="2000" ' . $s20 . '>8:00 PM (BJJ)</option>
                </select>
            </div>
            <div class="encabezadoContenido-item">
                <button type="button" onclick="consultarPrevCheckin()">
                    IR
                </button>
            </div>
        </div>';

        echo '<div class="pestanasContenido">
            <div class="pestanaContenido" onclick="cambiarPestanaContenido(0)">
                ASISTENCIAS
            </div>
            <div class="pestanaContenido pestanaContenido-activo" onclick="cambiarPestanaContenido(1)">
                ON-DECK
            </div>
        </div>';

        echo '<div class="listadoContenidoOnDeck" id="listadoContenidoAsistencias">';

        while($row = $resultado->fetch_assoc()) {
                    
            $strtest = $row["grado"];

            if (strpos($strtest, "zul") == '1'){
                $cinta = 'blue';
                $idcinta = 'idazul.png';
            } elseif (strpos($strtest, "ora") == '1'){
                $cinta = 'purple';
                $idcinta = 'idmorado.png';
            } elseif (strpos($strtest, "arr") == '1'){
                $cinta = 'brown';
                $idcinta = 'idmarron.png';
            } elseif (strpos($strtest, "egr") == '1'){
                $cinta = 'black';
                $idcinta = 'idnegro.png';
            } else {
                $cinta = 'white';
                $idcinta = 'idblanco.png';
            }

            $colorEstado = 'black';

            if (($row["estado"] == 'saldobajo') || ($row["estado"] == 'pendiente') || ($row["estado"] == 'inactivo')){
                $colorEstado = 'red';
            }

            $hermanos = '0';
            $onDeck = false;
            $strCompare = '0';

            $sql1 = "SELECT * FROM satori_alumnos WHERE nombre_tabla = '$row[nombre_tabla]'";
            $resultado1 = mysqli_query($conn, $sql1);
            if ($resultado1->num_rows >1) $hermanos = '1';

            if ($fecha == "") {
                $dateA = $date1->format('Y-m-d');
                $sql1 = "SELECT * FROM $row[nombre_tabla] WHERE evento = 'checkin' AND fecha = '$dateA'";
            } else {
                if ($hora1 < 1000) {
                    $hora1a = "0" . strval($hora1);
                } else {
                    $hora1a = $hora1;
                }
                if ($hora2 < 1000) {
                    $hora2a = "0" . strval($hora2);
                } else {
                    $hora2a = $hora2;
                }
                $sql1 = "SELECT * FROM $row[nombre_tabla] WHERE evento = 'checkin' AND fecha = '$fecha' AND ((horasminutos >= '$hora1' AND horasminutos <= '$hora2') OR (horasminutos >= '$hora1a' AND horasminutos <= '$hora2a'))";
            }
            $resultado1 = mysqli_query($conn, $sql1);

            if (($resultado1) && ($resultado1->num_rows >0)){
                while ($row1 = $resultado1->fetch_assoc()){
                    if ($hermanos == '1'){
                        $strCompare = stristr($row1["comentarios"],$row["nombre"]);
                        if ($strCompare != "") {
                            $hermanos = 0;
                        }
                    } else {
                        $strCompare = "aaa";
                    }
                    if ($fecha == "") {
                        $hms = (int) $row1["horasminutos"];
                        $onDeck = consultarOnDeck($hms);
                    } else {
                        $onDeck = true;
                    }
                }
            }
            
            if($strCompare !='' && $onDeck){
                $testFoto = "../img/users/" . $row["foto"];
                if ((file_exists($testFoto)) && ($row["foto"] != "")){
                    $foto = '<img src="' . $testFoto . '" alt="?" class="fotoUsuarioOnDeck">';
                } else {
                    $foto = '<i class="fa-solid fa-user-tie fotoUsuarioOnDeck"></i>';
                }
                echo '<div class="IDCard" style="background-image: url(\'../img/'.$idcinta.'\'); border: 5px solid ' . $colorEstado . ';">';
                echo $foto;
                echo '<div class="infoUsuarioOnDeck manito" onclick="consultarUsuarioPorNombre(`' . $row["nombre"] . '`)">
                    <b>Nombre: </b>' . $row["nombre"] . '</div>';
                echo '<div class="infoUsuarioOnDeck">
                    <b>Estado: </b>' . $row["estado"];
                    if ($colorEstado == 'red'){
                        echo '<table id="tablaUsuarios">
                            <tr>
                                <td style="display: none;">ID</td>
                                <td style="display: none;" title="columnaNombre">' . $row["nombre"] . '</td>
                                <td style="display: none;" title="columnaCelular">' . $row["celular"] . '</td>
                                <td style="display: none;" title="columnaEmail">' . $row["email"] . '</td>
                                <td style="display: none;">Estado Icono</td>
                                <td style="display: none;" title="columnaEstadoTexto">' . $row["estado"] . '</td>
                                <th style="display: none" title="columnaEstadoNumero">Estado Numero</th>
                                <td style="display: none;" title="columnaFechaVencimiento">' . $row["fecha_vencimiento"]. '</td>
                                <td style="display: none;" title="columnaPromocion">' . $row["promocion"] . '</td>
                                <td style="display: none;" title="columnaPlan">' . $row["plan"] . '</td>
                                <td style="border: none;"><i class="fa-brands fa-whatsapp" style="float: right;" onclick="mostrarMensajesWapp(this)"></i></td>
                                <td style="display: none" title="columnaApodo">' . $row["apodo"] . '</td>
                                <td style="display: none" id="columna_11" title="columnaFechaInicio">' . $row["fecha_inicio"] . '</td>
                                <td style="display: none" id="columna_12" title="columnaFechaMensajeBienvenida">' . $row["wapp_bienvenida"] . '</td>
                                <td style="display: none" id="columna_13" title="columnaFechaMensajeSaldoBajo">' . $row["wapp_saldobajo"] . '</td>
                                <td style="display: none" id="columna_14" title="columnaFechaMensajePendiente">' . $row["wapp_pendiente"] . '</td>
                                <td style="display: none" id="columna_15" title="columnaAcudiente">' . $row["nombre_acudiente1"] . '</td>
                            </tr>
                        </table>';
                    }
                echo '</div>';
                echo '<div class="infoUsuarioOnDeck">';
                if (strpos(strtoupper($row["plan"]), "BOXEO") !== FALSE){
                    echo '<img src="../img/icons/boxeo-ico.png" width="20px;">';
                }
                if (strpos(strtoupper($row["plan"]), "MMA") !== FALSE) {
                    echo '<img src="../img/icons/mma-ico.png" width="20px;">';
                }
                if (strpos(strtoupper($row["plan"]), "BJJ") !== FALSE) {
                    echo '<img src="../img/icons/bjj-ico.png" width="20px;">';
                }
                echo '</div>';
                echo '</div>';
            }

        }
        echo '</div>';
    }
}
