CloudFlare.define("zendesk", ["zendesk/config", "cloudflare/jquery1.7"], function(config,$) {
    var url = '//assets.zendesk.com/external/zenbox/v2.6/zenbox.js';
    CloudFlare.require([url], function() {
		if (typeof(Zenbox) !== "undefined") {
    		//console.log(config);
    	  	Zenbox.init({
     			dropboxID:   config.dropboxID,
      			url:         config.url,
      			tabTooltip:  config.tabTooltip,
      			tabImageURL: config.tabImageURL,
      			tabColor:    config.tabColor,
      			tabPosition: config.tabPosition
      		});
			$("document").ready(function(){ 
			 //https://assets.zendesk.com/external/zenbox/v2.6/zenbox.css 
     	  	 	$("#zenbox_tab").css("border", "solid 1px");
     		 	$("#zenbox_tab").css("cursor", "pointer");
     		 	$("#zenbox_tab").css("position", "fixed");
     		 	$("#zenbox_tab").css("top", "23%");
     	 	 	$("#zenbox_tab").css("z-index", "10000");

			$(".ZenboxTabLeft").css("left", "0");
    		 	$(".ZenboxTabLeft").css("background-position", "right 0");
    		 	$(".ZenboxTabRight").css("right", "0");
    		 	$(".ZenboxTabRight").css("background-position", "left 0");
      
			 $("#zenbox_tab:hover").css("background-color", "#444");
    		 	 $("#zenbox_tab img").css("display", "block");

			 $("#zenbox_overlay").css("height", "100%");
			 $("#zenbox_overlay").css("left", "0");
			 $("#zenbox_overlay").css("position", "absolute");
			 $("#zenbox_overlay").css("top", "0");
			 $("#zenbox_overlay").css("width", "100%");
			 $("#zenbox_overlay").css("z-index", "90000");
		
 			 $("#zenbox_overlay *").css("color", "#333");
 			 $("#zenbox_overlay *").css("font-family", "Arial, Helvetica, sans-serif");
 			 $("#zenbox_overlay *").css("font-style", "normal");
 			 $("#zenbox_overlay *").css("font-variant", "normal");
 			 $("#zenbox_overlay *").css("font-size", "12px");
  			 $("#zenbox_overlay *").css("margin", "0");
 			 $("#zenbox_overlay *").css("padding", "0");
			
			 $("#zenbox_container").css("height", "620px");
 			 $("#zenbox_container").css("margin", "0 auto");
 			 $("#zenbox_container").css("position", "relative");
 			 $("#zenbox_container").css("text-align", "left");
 			 $("#zenbox_container").css("width", "638px");
 			 $("#zenbox_container").css("z-index", "2");

			 $("#zenbox_container .zenbox_header").css("position", "relative");
 			 $("#zenbox_container .zenbox_header").css("text-align", "right");
 			 $("#zenbox_container .zenbox_header").css("width", "auto");
 			 $("#zenbox_container .zenbox_header").css("z-index", "100");
 			
 			 $("#zenbox_close").css("cursor", "pointer");
  			 $("#zenbox_close").css("height", "46px");
  			 $("#zenbox_close").css("position", "relative");
  			 $("#zenbox_close").css("top", "10px");
  			 $("#zenbox_close").css("width", "46px");

 			 $("#zenbox_body").css("height", "900px");
  			 $("#zenbox_body").css("margin-top", "-18px");
  			 $("#zenbox_body").css("position", "relative");
  			 $("#zenbox_body").css("width", "615px");

  			 $("#zenbox_scrim").css("background-color", "#000");
  			 $("#zenbox_scrim").css("filter", "alpha(opacity=42)");
  			 $("#zenbox_scrim").css("-moz-opacity", "0.42");
   			 $("#zenbox_scrim").css("left", "0");
   			 $("#zenbox_scrim").css("position", "absolute");
   			 $("#zenbox_scrim").css("opacity", "0.42");
    		 	 $("#zenbox_scrim").css("top", "0");
   			 $("#zenbox_scrim").css("width", "100%");
			 $("#zenbox_scrim").css("z-index:", "1");
			});

	    } else {
			//console.log('Zenbox not defined');
		}
	});
})
