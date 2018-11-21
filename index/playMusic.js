var bgSoundFile = "
if (navigator.userAgent.toLowerCase().indexOf("msie") != -1)
{    document.write('<bgsound src="' + bgSoundFile + '" loop="-1">');
} else if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1)
{    document.write('<object data="' + bgSoundFile + '" type="application/x-mplayer2"
width="0" height="0"><param name="filename" value="' + bgSoundFile + '">
<param name="autostart" value="1"><param name="playcount" value="infinite">
</object>');}
else {    document.write('<audio src="' + bgSoundFile + '" autoplay="autoplay" loop="loop">
<object data="' + bgSoundFile + '" type="application/x-mplayer2" width="0" height="0">
<param name="filename" value="' + bgSoundFile + '"><param name="autostart" value="1">
<embed height="2" width="2" src="' + bgSoundFile + '" pluginspage="http://www.apple.com/quicktime/download/"
type="video/quicktime" controller="false" controls="false" autoplay="true" autostart="true" loop="true" bgcolor="#000000">
</embed>
</object>
</audio>');
}