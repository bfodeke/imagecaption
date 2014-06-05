imagecaption
============

Create captions from image tags

##Usage
$('img.caption').imageCaption();

##Initial Code
<pre>
	&lt;img style=&quot;float:right;margin:0 0 15px 15px;&quot; src=&quot;http://stevensegallery.com/210/200&quot; class=&quot;caption&quot; title=&quot;Lorem Ipsum Dolor&quot; /&gt;
</pre>

##Output
<pre>
	&lt;figure style=&quot;float: left; margin: 0px 15px 15px 0px; height: auto;&quot; class=&quot;imageCaption caption-left&quot;&gt;&lt;img src=&quot;http://stevensegallery.com/212/250&quot; class=&quot;caption&quot; title=&quot;Lorem Ipsum Dolor&quot;&gt;&lt;figcaption&gt;Lorem Ipsum Dolor&lt;/figcaption&gt;&lt;/figure&gt;
</pre>