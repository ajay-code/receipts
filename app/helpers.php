<?php

function compress_html($html){
	 return str_replace(array("\n","\r","\t"),'',$html);
}