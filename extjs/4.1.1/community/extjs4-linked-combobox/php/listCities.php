<?php
	//chama o arquivo de conexão com o bd
	include("database.php");

	$stateId = $_REQUEST['stateId'];

	$queryString = "SELECT * FROM City WHERE state_id = " . $stateId;

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$rows = array('data' => array());
	while($city = mysql_fetch_assoc($query)) {
	    $rows['data'][] = $city;
	}

	//encoda para formato JSON
	echo json_encode($rows);
?>