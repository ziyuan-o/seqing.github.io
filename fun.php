<?php
date_default_timezone_set("Asia/Shanghai");
function curl_get($url){
  $header = array(
      'User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
   );
   $curl = curl_init();
   //设置抓取的url
   curl_setopt($curl, CURLOPT_URL, $url);
   //设置头文件的信息作为数据流输出
   curl_setopt($curl, CURLOPT_HEADER, 0);
   // 超时设置,以秒为单位
   curl_setopt($curl, CURLOPT_TIMEOUT,0);
   curl_setopt($curl, CURLOPT_POST, 1);
   // 超时设置，以毫秒为单位
   // curl_setopt($curl, CURLOPT_TIMEOUT_MS, 500);

   // 设置请求头
   curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
   //设置获取的信息以文件流的形式返回，而不是直接输出。
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
   curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
   //执行命令
   $data = curl_exec($curl);

   // 显示错误信息
   if (curl_error($curl)) {
       print "Error: " . curl_error($curl);
   } else {
       // 打印返回的内容
       curl_close($curl);
       return $data;
   }
}
function th($keys){
  $as = str_replace("第1集$","",$keys);
  return $as;
}
function files($ps){
    switch($ps){
        case '20':
            $f = "1";
            break;
        case '21':
            $f = "2";
            break;
        case '22':
            $f = "3";
            break;
        case '23':
            $f = "4";
            break;
        case '24':
            $f = "5";
            break;
        case '25':
            $f = "6";
            break;
        case '26':
            $f = "7";
            break;
        case '27':
            $f = "8";
            break;
        case '28':
            $f = "9";
            break;
        case '29':
            $f = "10";
            break;
        case '31':
            $f = "11";
            break;
        case '32':
            $f = "12";
            break;
        case '33':
            $f = "13";
            break;
        case '35':
            $f = "14";
            break;
        case '36':
            $f = "15";
            break;
        case '44':
            $f = "16";
            break;
        case '56':
            $f = "17";
            break;
        case '57':
            $f = "18";
            break;
        case '60':
            $f = "19";
            break;
        case '61':
            $f = "20";
            break;
        case '62':
            $f = "21";
            break;
        case '63':
            $f = "22";
            break;
        case '64':
            $f = "23";
            break;
        case '65':
            $f = "24";
            break;
		case '66':
			$f = "25";
		break;
    }
    return $f;
}
function uns(){
    $files = glob('./temp/*.txt'); // 需要查找的文件夹
    $path = './JCSQL/Home/'; //目标文件夹
    $as = "";
    foreach ($files as $val) {
        $as = copy($val,$path.basename($val))."\n";
    }
    return $as;
}
function dels(){
    $files = glob('./temp/*.txt');
    foreach ($files as $file) {
    if (is_writable($file)) {
        unlink($file);
    } else {
        echo "文件 {$file} 不可写，无法删除。\n";
    }
}
}
function urls(){
    $u = PACK('H*',base64_decode('Njg3NDc0NzA3MzNhMmYyZjYxNzA2OTc5NzU3NDc1MmU2MzZmNmQ='));
    return $u;
}
?>