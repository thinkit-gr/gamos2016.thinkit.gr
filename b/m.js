(function(){for(var n,u=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=t.length,r=window.console=window.console||{};i--;)n=t[i],r[n]||(r[n]=u)})(),function(){for(var i=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var t=(new Date).getTime(),r=Math.max(0,16-(t-i)),u=window.setTimeout(function(){n(t+r)},r);return i=t+r,u});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}();var currentBallonClearance=null,animationMethods={selectNavItem:function(){$("nav li").removeClass("selected");$("nav a[href='#"+$(this).attr("id")+"']").parent().addClass("selected")},balloonMoving:function(){var n=$(this);currentBallonClearance?(clearTimeout(currentBallonClearance),currentBallonClearance=setTimeout(function(){n.removeClass("rocking").addClass("soaring");currentBallonClearance=null},2e3)):(n.removeClass("soaring").addClass("rocking"),currentBallonClearance=setTimeout(function(){n.removeClass("rocking").addClass("soaring");currentBallonClearance=null},2e3))}},Zone=function(n){var t=n.children();this.moveIn=function(){t.addClass("in-view");n.each(animationMethods.selectNavItem)};this.moveOut=function(){t.removeClass("in-view")}};$(document).ready(function(){function v(){$.each(s,function(n,i){var r=$("<div>").addClass("clouding").addClass(i.css_class).addClass("cloud").attr("id","cloud-"+n).css("top",i.top+"px").css("margin-left",i.offset);a.append(r);t.scroll(function(){window.requestAnimationFrame(function(){r.css({top:function(){return i.top-t.scrollTop()*i.delay}})})})})}function y(){t.on("scroll",function(){u||(u=!0,window.requestAnimationFrame(c))})}function p(){$("nav li").click(function(n){n.preventDefault();var t=$($(this).find("a").attr("href"));return $("html, body").animate({scrollTop:t.offset().top},1e3),!1})}var l=190,t=$(window),a=$("body"),f=$(document).height(),e=0,n=null,r=$("#balloon"),i=r.height(),o=[],s;$(".moment").each(function(n,t){var i=$(t),r=i.offset();o.push({start:r.top,end:r.top+i.height(),moment:i,controller:new Zone(i),name:i.find("strong").text(),index:n})});s=[{top:400,offset:"-450px",css_class:"cloud-1",delay:.8},{top:500,offset:"320px",css_class:"cloud-3",delay:1.2},{top:400,offset:"450px",css_class:"cloud-bird",delay:.3},{top:900,offset:"-320px",css_class:"cloud-2",delay:.2},{top:1500,offset:"280px",css_class:"cloud-2",delay:.8},{top:2250,offset:"-380px",css_class:"cloud-4",delay:1.2},{top:2950,offset:"-380px",css_class:"cloud-1",delay:.8},{top:3750,offset:"380px",css_class:"cloud-6",delay:.7},{top:4050,offset:"-380px",css_class:"cloud-5",delay:1.2},{top:4565,offset:"360px",css_class:"cloud-3",delay:.9},{top:4999,offset:"-430px",css_class:"cloud-1",delay:1.4},{top:5445,offset:"330px",css_class:"cloud-2",delay:.8}];var u=!1,h=0,c=function(){var s=0,c=t.height(),a=t.scrollTop(),b=a+c,nt=f-b,v=c<i,k=a<150,d=f-b<150,p=0,w,g,y;p=v?c-i:(c-i)/2;w=a>e;g=!w;g?(s=p,k?s=-1*l:d&&(v||(s=c-i))):(s=p,k?v||(s=s/2):d&&(v||(s=c-i)));y=a+c/2;v||(w?y+=c/4:y-=c/4);$.each(o,function(t,i){if((!n||n!=i)&&y>=i.start&&y<i.end)return n&&n.controller&&n.controller.moveOut(),n=i,n&&n.controller&&n.controller.moveIn(),!1});h!=s&&r.animate({"margin-top":s+"px"},1e3);r.each(animationMethods.balloonMoving);h=s;e=a;u=!1};v();y();p();setTimeout(c,200)})