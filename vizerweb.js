/*slides*/
function FeaturedPost(a){!function(e){var t={blogURL:"",MaxPost:5,idcontaint:"#featuredpost",ImageSize:500,interval:1e4,autoplay:!1,loadingClass:"loadingxx",pBlank:"http://3.bp.blogspot.com/-v45kaX-IHKo/VDgZxWv0xUI/AAAAAAAAHAo/QJQf8Dlh3xc/s1600/grey.gif",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:!1};t=e.extend({},t,a);var s=e(t.idcontaint),l=t.blogURL,i=200*t.MaxPost;""===t.blogURL&&(l=window.location.protocol+"//"+window.location.host),s.html('<div id="slides"><ul class="randomnya"></ul></div><div id="buttons"><a href="#" id="prevx" title="prev"></a><a href="#" id="nextx" title="next"></a></div>').addClass(t.loadingClass);var n=function(a){for(var l,i,n,r,o,d,c,u="",p=a.feed.entry,f=0;f<p.length;f++){for(var v=0;v<p[f].link.length;v++)if("alternate"==p[f].link[v].rel){l=p[f].link[v].href;break}r="media$thumbnail"in p[f]?p[f].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+t.ImageSize+"-c"):t.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+t.ImageSize+"$1"),i=p[f].title.$t,c=p[f].published.$t.substring(0,10),n=p[f].author[0].name.$t,o=c.substring(0,4),d=c.substring(5,7),u+='<li><a target="_blank" href="'+l+'" title="'+i+'"><div class="overlayx"></div><img class="random" src="'+r+'" title="'+i+'"><h4>'+i+'</h4></a><div class="label_text"><span class="date"><span class="dd">'+c.substring(8,10)+'</span> <span class="dm">'+t.MonthNames[parseInt(d,10)-1]+'</span> <span class="dy">'+o+'</span></span> <span class="autname">'+n+"</span></div></li>"}e("ul",s).append(u)};e(document).ready(function(){var a="/-/"+t.tagName;!1===t.tagName?(a="",e.ajax({url:l+"/feeds/posts/default"+a+"?max-results="+t.MaxPost+"&orderby=published&alt=json-in-script",success:n,dataType:"jsonp",cache:!0})):e.ajax({url:l+"/feeds/posts/default"+a+"?max-results="+t.MaxPost+"&orderby=published&alt=json-in-script",success:n,dataType:"jsonp",cache:!0}),setTimeout(function(){if(e("#prevx").click(function(){return e("#slides li:first").before(e("#slides li:last")),!1}),e("#nextx").click(function(){return e("#slides li:last").after(e("#slides li:first")),!1}),t.autoplay){var a=t.interval,l=setInterval("rotate()",a);e("#slides li:first").before(e("#slides li:last")),e("#slides").hover(function(){clearInterval(l)},function(){l=setInterval("rotate()",a)})}s.removeClass(t.loadingClass)},i)})}(jQuery)}function rotate(){$("#nextx").click()}document.write("");
$(document).ready(function(){FeaturedPost()})
/*page unli*/
function loophalaman(a){var e="";nomerkiri=parseInt(numshowpage/2),nomerkiri==numshowpage-nomerkiri&&(numshowpage=2*nomerkiri+1),mulai=nomerhal-nomerkiri,mulai<1&&(mulai=1),maksimal=parseInt(a/postperpage)+1,maksimal-1==a/postperpage&&(maksimal-=1),akhir=mulai+numshowpage-1,akhir>maksimal&&(akhir=maksimal),e+="<span class='showpageOf'>Page "+nomerhal+" of "+maksimal+"</span>";var s=parseInt(nomerhal)-1;nomerhal>1&&(e+=2==nomerhal?"page"==jenis?'<span class="showpage"><a href="'+home_page+'">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">'+upPageWord+"</a></span>":"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+s+');return false">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+s+');return false">'+upPageWord+"</a></span>"),mulai>1&&(e+="page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>'),mulai>2&&(e+="");for(var r=mulai;r<=akhir;r++)e+=nomerhal==r?'<span class="showpagePoint">'+r+"</span>":1==r?"page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>':"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+r+');return false">'+r+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+r+');return false">'+r+"</a></span>";akhir<maksimal-1&&(e+=""),akhir<maksimal&&(e+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+"</a></span>");var n=parseInt(nomerhal)+1;nomerhal<maksimal&&(e+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+n+');return false">'+downPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+n+');return false">'+downPageWord+"</a></span>");for(var t=document.getElementsByName("pageArea"),l=document.getElementById("blog-pager"),p=0;p<t.length;p++)t[p].innerHTML=e;t&&t.length>0&&(e=""),l&&(l.innerHTML=e)}function hitungtotaldata(a){var e=a.feed,s=parseInt(e.openSearch$totalResults.$t,10);loophalaman(s)}function halamanblogger(){var a=urlactivepage;-1!=a.indexOf("/search/label/")&&(lblname1=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max"))),-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(jenis="page",nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"></script>')):(jenis="label",-1==a.indexOf("&max-results=")&&(postperpage=20),nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" ></script>')))}function redirectpage(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function redirectlabel(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function finddatepost(a){post=a.feed.entry[0];var e=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),s=encodeURIComponent(e);if("page"==jenis)var r="/search?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;else var r="/search/label/"+lblname1+"?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;location.href=r}var nopage,jenis,nomerhal,lblname1;halamanblogger();
/*backtotop*/
$(window).scroll(function(){if($(this).scrollTop()&gt;200){$(&#39;#back-to-top&#39;).fadeIn()}else{$(&#39;#back-to-top&#39;).fadeOut()}});$(&#39;#back-to-top&#39;).hide().click(function(){$(&#39;html,body&#39;).animate({scrollTop:0},1000);return!1});$(document).ready(function(){var stickysidebarWidgetTop=$(&#39;#container1&#39;).offset().top;var stickysidebarWidget=function(){var scrollTop=$(window).scrollTop();if(scrollTop&gt;stickysidebarWidgetTop){$(&#39;#container1&#39;).addClass(&#39;stickysidebar&#39;)}else{$(&#39;#container1&#39;).removeClass(&#39;stickysidebar&#39;)}};stickysidebarWidget();$(window).scroll(function(){stickysidebarWidget()})});$(document).ready(function(){var stickyWidgetTop=$(&#39;#topnav&#39;).offset().top;var stickyWidget=function(){var scrollTop=$(window).scrollTop();if(scrollTop&gt;stickyWidgetTop){$(&#39;#topnav&#39;).addClass(&#39;sticky&#39;)}else{$(&#39;#topnav&#39;).removeClass(&#39;sticky&#39;)}};stickyWidget();$(window).scroll(function(){stickyWidget()})})
