var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

﻿function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}

function showrecentposts(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	cmtext = (jtext != 'no') ? '<i><font color="'+jacolor+'">('+pcm+' '+jtext+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = (jshowPostDate) ? '<i><font color="'+jacolor+'"> - ('+day+ ' ' + m + ' ' + y + ')</font></i>' : "";

posttitle = (jaBold) ? "<b>"+posttitle+"</b>" : posttitle;

	var trtd = '<h3>'+posttitle+'</h3><p><img src="'+img[i]+'" style="float:left; border: #ccc 1px solid; padding:2px; margin-right:4px;" width="'+jimgwidth+'" height="'+jimgheight+'"/><span style="color:'+jacolor+'; font-size:'+jfntsize+'px;">'+posttitle+'</span><br/> '+cmtext+ ' ' + daystr + '<br/>'+removeHtmlTag(postcontent,jsummaryPost)+'...<br/><a style="float:right;" href="'+posturl+'">...إقرأ المزيد</a></p>';
	
	document.write(trtd);

	j++;
}

}
document.write("<script src=\""+home_page+"feeds/posts/default/-/"+label+"?max-results="+numposts+"&orderby=published&alt=json-in-script&callback=showrecentposts\"><\/script>");﻿

}
/*
     FILE ARCHIVED ON ﻿17:54:34 Oct 28, 2017﻿ AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON ﻿19:51:01 Nov 12, 2024﻿.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
﻿playback timings (ms):
﻿  ﻿captures_list﻿: ﻿1.385﻿
﻿  ﻿exclusion.robots﻿: ﻿0.042﻿
﻿  ﻿exclusion.robots.policy﻿: ﻿0.018﻿
﻿  ﻿esindex﻿: ﻿0.019﻿
﻿  ﻿cdx.remote﻿: ﻿14.692﻿
﻿  ﻿LoadShardBlock﻿: ﻿214.621﻿ (﻿3﻿)
﻿  ﻿PetaboxLoader3.datanode﻿: ﻿163.12﻿ (﻿4﻿)
﻿  ﻿PetaboxLoader3.resolve﻿: ﻿211.864﻿ (﻿2﻿)
﻿  ﻿load_resource﻿: ﻿184.595﻿
﻿*/