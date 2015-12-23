# divdropdownSelect
div模版select，兼容ie6
#div下拉选择
```
这是一个很简单的div下拉选择；可以兼容IE6，两种弹出配置，解决select在IE下比较丑的样式，样式根据自己需要更改
```
#####参考demo地址：[http://192.168.14.97:8080/acc/plugin/divSelect](http://192.168.14.97:8080/acc/plugin/divSelect)
##样例
####1、使用步骤
####（1）导入样式文件
```
<link href="style/divselect.css" type="text/css" rel="stylesheet"/>
```
####（2）导入JS文件,people.js为接口插件
```
<script src="javascript/jquery-1.9.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="javascript/divselect.js"></script>
```
####（3）页面使用代码
```
 <div class="divselect" id="divselect1">
  <cite>直接弹开</cite>
  <ul>
     <li><a href="javascript:;" selectid="1"><img src="file:///E|/1.插件/纯div模仿select/images/xjt.png" /></a></li>
     <li><a href="javascript:;" selectid="2">下拉select效果</a></li>
     <li><a href="javascript:;" selectid="3">select模拟</a></li>
     <li><a href="javascript:;" selectid="4">DIVCSS5特效</a></li>
  </ul>
<input name="" type="hidden" value=""  id="inputselect1"/>
</div>
<div class="divselect" id="divselect2">
  <cite>滑动弹开</cite>
  <ul>
     <li><a href="javascript:;" selectid="1"><img src="file:///E|/1.插件/纯div模仿select/images/xjt.png" /></a></li>
     <li><a href="javascript:;" selectid="2">下拉select效果</a></li>
     <li><a href="javascript:;" selectid="3">select模拟</a></li>
     <li><a href="javascript:;" selectid="4">DIVCSS5特效</a></li>
  </ul>
<input name="" type="hidden" value="" id="inputselect2"/>
</div> 
```
####（4）方法和API
#####1、方法
```
页面可以多处使用
<script type="text/javascript">
	$(document).ready(function(){
		var id1 = $("#divselect1").hello();
		id1.show(1);//默认block
		var id2 = $("#divselect2").hello();
		id2.show(2);//滑动效果
	});
</script>
```
#####2、API
```
无
```
#参数说明：
```
无
```
#更新日志
```
无
```
