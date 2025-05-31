<?php
include_once("./fun.php");
$lb = array("20","21","22","23","24","25","26","27","28","29","31","32","33","35","36","44","56","57","60","61","62","63","64","65","66");
for ($s=0; $s <count($lb); $s++) {
$type = $lb[$s];
$url = urls().'/api.php/provide/vod/at/json/?ac=detail&t='.$type;
$tp = files($type);
$nr = curl_get($url);
$info = json_decode($nr,TRUE);
$file = './temp/'.$tp.'.txt';
$start = "[";
file_put_contents($file,$start);
for ($page=1; $page <=$info['pagecount']; $page++) { 
$url = urls().'/api.php/provide/vod/at/json/?ac=detail&t='.$type."&pg=".$page;
$nr = curl_get($url);
$infopage = json_decode($nr,TRUE);
for ($i=0; $i < count($infopage['list']); $i++) {
    $vod_id = $infopage['list'][$i]['vod_id'];
    $vod_name = @$infopage['list'][$i]['vod_name'];
    $vod_pic = th($infopage['list'][$i]['vod_pic']);
    $vod_play_url = @th($infopage['list'][$i]['vod_play_url']);
    $sj = date('Y-m-d H:i:s',time());
    $arr = array(
        "d_id"=>"$vod_id",
        "d_type"=>"$tp",
        "d_name"=>"$vod_name",
        "d_pic"=>"$vod_pic",
        "d_playurl"=>"$vod_play_url",
        "d_time"=>"$sj",
    );
    $infos = json_encode($arr,TRUE).",";
    file_put_contents($file, $infos, FILE_APPEND);
    echo $vod_name."----$i----采集成功\r\n";
}
}
$infos = substr(file_get_contents($file), 0, strlen(file_get_contents($file))-1);
file_put_contents($file,$infos);
$contentToAppend = "]";
file_put_contents($file, $contentToAppend, FILE_APPEND);
}
uns();
echo "采集完成\r\n";
echo "正在删除temp目录缓存文件\n";
dels();
?>