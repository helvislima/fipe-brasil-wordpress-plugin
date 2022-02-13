<?php
/**
 * @package Akismet
 */
/*
Plugin Name: Fipe Brasil
Plugin URI: https://helvis.dev/fipe-brasil
Description: Plugin para exibir informações atualizadas de preços de carros no Brasil
Version: 1.0.0
Author: Helvis Lima
Author URI: https://helvis.dev
License: GPLv2 or later
Text Domain: fipe-brasil
*/

add_shortcode( 'fipe-brasil','fipe_shortcode'  );

function fipe_shortcode(  ) {
    ob_start();
    require_once('views/fipe.php');
    $data = ob_get_contents();
    ob_end_clean();
    return $data;
}

