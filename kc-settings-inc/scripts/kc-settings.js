var win=window.dialogArguments||opener||parent||top;win.kcsInsertFiles=function(){var d=win.kcSettings.upload.nu.length;if(d){var a=win.kcSettings.upload.id,b=a.children().last(),e=jQuery();while(d){d--;var c=b.clone();jQuery("input",c).each(function(){this.value=win.kcSettings.upload.nu[d][0]});jQuery(".title",c).text(win.kcSettings.upload.nu[d][1]);c.find("img").attr("src",win.kcSettings.upload.nu[d][2]);e=e.add(c)}a.append(e);if(b.is(".hidden")){e.show();b.remove()}}};function inArray(d,c){var b=c.length;for(var a=0;a<b;a++){if(c[a]==d){return true}}return false}function kcsbSlug(a){strNu=a.replace(/^\-+/,"");strNu=strNu.replace(/^_+/,"");strNu=strNu.replace(/[^A-Za-z0-9\-_]/g,"");if(strNu.match(/^\-+/)||strNu.match(/^_+/)){strNu=kcsbSlug(strNu)}return strNu}(function(a){a.fn.kcsbShowDeps=function(b){return this.each(function(){var c=a(this);if(c.is(b)){if(c.is(":hidden")){c.fadeIn().find(":input").each(function(){a(this).removeAttr("disabled")})}}else{c.hide().find(":input").each(function(){a(this).attr("disabled",true)})}})};a.fn.kcsbIDep=function(){return this.each(function(){var d=a(this),f=d.val(),c=d.attr("name").match(/\[(\w+)\]$/)[1],e=d.parent().siblings(".idep_"+c);if(d.is(".global")){var b=a(".global_idep_"+c);e=e.add(b)}if(!e.length){return}d.data("targets",e);e.kcsbShowDeps("."+f);d.change(function(){var g=a(this);g.data("targets").kcsbShowDeps("."+g.val())})})};a.fn.kcsbGoto=function(){return this.each(function(){var b=a(this);b.fadeIn(function(){a("html, body").stop().animate({scrollTop:(b.offset().top-20)},800)})})};a.fn.kcsbUnique=function(){return this.each(function(){var c=a(this),b=c.val();c.data("olVal",b).blur(function(){var f=a(this),e=c.data("olVal"),d=f.val();if(d!=e&&inArray(d,kcSettings._ids[f.data("ids")])){f.val("")}})})};a.fn.kcsbCheck=function(){var b=a(this);if(b.val()==""){b.focus().css("borderColor","#ff0000");return false}else{b.removeAttr("style")}};a.fn.kcsbReorder=function(c){var b=new RegExp(c+"\\]\\[(\\d+)");return this.each(function(){var e=a(this),f=e.children(),d=-1;f.each(function(){a("> .actions .count",this).text(a(this).index()+1);d++;a(this).find(":input").each(function(){this.name=this.name.replace(b,function(h,g){return c+"]["+d})})})})}})(jQuery);jQuery(document).ready(function(d){var j=d("#kcsb"),e=d("form.kcsb"),a=d("#kc-settings-form").find("div.postbox").find("#kcs-components");if(a.length){var c="#"+a.closest("div.metabox-holder").attr("id")+"-",g=a.find(":checkbox"),h=d();g.each(function(){var l=d(c+this.value);if(!l.length){return}var m=d(this),k=d(c+this.value+"-hide");m.data("sectTarget",k).data("mBox",l);if(!(this.checked===k[0].checked)){k.prop("checked",this.checked).triggerHandler("click")}h=h.add(m)});if(h.length){h.change(function(){var k=d(this);k.data("sectTarget").prop("checked",this.checked).triggerHandler("click");if(this.checked){k.data("mBox").kcsbGoto()}})}}d("ul.kc-rows").sortable({axis:"y",start:function(k,l){l.placeholder.height(l.item.outerHeight())},stop:function(k,l){l.item.parent().kcsbReorder(l.item.data("mode"))}});d(".row a.del").live("click",function(n){var m=d(this),k=m.closest(".row"),o=k.data("mode"),l=k.is(":last-child");if(!k.siblings(".row").length){return false}k.addClass("removing").fadeOut("slow",function(){d(this).remove();if(!l){k.parent().kcsbReorder(o)}});return false});d(".row a.add").live("click",function(n){var m=d(this),l=m.closest(".row"),o=l.data("mode"),k=l.clone(false).addClass("adding");if(e.length){k.find(".kc-rows").each(function(){var p=d(this).children(".row");if(p.length>1){p.not(":first").remove()}});k.find(":input").each(function(){var p=d(this);if(this.type=="text"||this.type=="textarea"){p.removeAttr("style").val("")}else{if(this.type=="checkbox"||this.type=="radio"){if(p.prop("checked")){this.checked=true}else{this.checked=false}}}if(p.is(".kcsb-ids")){p.kcsbUnique()}});d(".idep",k).kcsbIDep()}else{k.find(":input").each(function(){d(this).val("")})}l.after(k);k.kcsbGoto();setTimeout(function(){k.removeClass("adding")},1000);l.parent().kcsbReorder(o);return false});d(".row a.clear").live("click",function(k){d(this).closest(".row").find(":input").val("");return false});var b=d("input[type=date]");if(b.length&&Modernizr.inputtypes.date===false){var f=d("body").is(".admin-color-classic")?"cupertino":"flick";Modernizr.load([{load:win.kcSettings.paths.styles+"/jquery-ui/"+f+"/style.css",complete:function(){b.datepicker({dateFormat:"yy-mm-dd"})}}])}var i=d("input[type=color]");if(i.length&&Modernizr.inputtypes.color===false){Modernizr.load([{load:[win.kcSettings.paths.scripts+"/colorpicker/js/colorpicker.js",win.kcSettings.paths.scripts+"/colorpicker/css/colorpicker.css"],complete:function(){i.ColorPicker({onBeforeShow:function(){d(this).ColorPickerSetColor(this.value)},onSubmit:function(k,o,m,n){var l="#"+o;d(n).css("backgroundColor",l).val(l).ColorPickerHide()}}).each(function(){if(d(this).val()!==""){d(this).css("backgroundColor",d(this).val())}})}}])}d(".kcs-file a.rm").live("click",function(m){m.preventDefault();var l=d(this),k=l.closest(".row");k.addClass("removing").fadeOut("slow",function(){if(k.siblings().length){k.remove()}else{k.removeClass("removing").addClass("hidden").find(":input").val("").prop("checked",false);var n=d('input[type="hidden"]',k);n.data("olName",n.attr("name")).attr("name","")}})});d("a.kcsf-upload").live("click",function(o){o.preventDefault();var m=d(this),n=m.parent(),l=n.find(".row.hidden");win.kcSettings.upload.id=d("#"+n.attr("id")+" > ul");win.kcSettings.upload.files=[];if(l.length){var k=d('input[type="hidden"]',l);k.attr("name",k.data("olName"))}else{d("input.mid",n).each(function(){win.kcSettings.upload.files.push(this.value)})}tb_show("",m.attr("href"))});d("ul.kc-sortable").sortable({axis:"y",start:function(k,l){l.placeholder.height(l.item.outerHeight())}});if(!j.is(".hidden")){j.kcsbGoto()}d(".idep:input").kcsbIDep();d("input.kcsb-slug").live("blur",function(){var l=d(this),k=l.val();l.val(kcsbSlug(k))});d("input.kcsb-ids").kcsbUnique();d("input.required, input.clone-id").live("blur",function(){d(this).kcsbCheck()});d("#new-kcsb").live("click",function(){j.kcsbGoto();return false});d("a.kcsb-cancel").live("click",function(){d("#kcsb").fadeOut(function(){d("body").kcsbGoto()});return false});d("a.clone-open").live("click",function(){d(this).parent().children().hide().filter("div.kcsb-clone").fadeIn();return false});d("a.clone-do").click(function(){var k=d(this),l=d(this).siblings("input");if(l.kcsbCheck()===false){return false}k.attr("href",k.attr("href")+"&new="+l.val())});d("input.clone-id").bind("keypress",function(m){var k=m.keyCode||m.which;if(k===13){var l=d(this);m.preventDefault();l.blur().siblings("a.clone-do").data("new",l.val()).trigger("click")}});d(".kcsb-tools a.close").live("click",function(){var l=d(this),k=l.parent();l.siblings("input").val("");k.fadeOut(function(){d(this).siblings().show()});return false});e.submit(function(l){var k=true;d(this).find("input.required").not(":disabled").each(function(){if(d(this).kcsbCheck()===false){k=false;return false}});if(!k){return false}});d("a.kc-help-trigger").live("click",function(){if(win.kcHelpBox!==undefined){win.kcPopHelp()}else{d("#contextual-help-link").click();d("#screen-meta").kcsbGoto()}return false})});