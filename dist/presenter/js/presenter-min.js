function PresenterJS(){}PresenterJS.prototype.steps=null,PresenterJS.prototype.presenterDefaultTemplate='<div id="guide-dialogue-box"></div>',PresenterJS.prototype.presenterDefaultBody='<div id="dialogue-indicator"></div><div class="dialogue-content"><div class="dialogue-img"><img src="https://image.flaticon.com/icons/svg/288/288082.svg"></div> <div class="dialogue-body"><h4 id="presenter_title" class="dialogue-heading"></h4><p id="presenter_message"></p><button id="dialogue-btn" class="btn waves-effect waves-light show" type="submit" name="action">Entendido</button></div></div>',PresenterJS.prototype.getPresenterInstance=function(){console.log(this);var e=$("#guide-dialogue-box");return void 0==e.html()&&($(this.presenterDefaultTemplate).appendTo($("body")),e=$("#guide-dialogue-box")),e},PresenterJS.prototype.getPresenterTemplate=function(){return this.presenterDefaultTemplate},PresenterJS.prototype.show=function(e){var t=$("body").find("#"+e.id),r=PresenterJS.prototype.getPresenterInstance(),o=PresenterJS.prototype.calculateNextPositionForThePresenter(e.position,e.align_horizontal,e.align_vertical,t,r);console.log(o),PresenterJS.prototype.relocateThePresenterOnTheScreen(t,r,o),this.onStepStart(e,t,r)},PresenterJS.prototype.onStepStart=function(e,t,r){PresenterJS.prototype.killAPreviousStep(e),PresenterJS.prototype.transformThePresenter(r,e,t)},PresenterJS.prototype.onStepEnd=function(e,t,r){PresenterJS.prototype.prepareThePresenterForTheNextStep(e,t,r),PresenterJS.prototype.prepareTheElementForTheNextStep(t,e),e.callback&&e.callback()},PresenterJS.prototype.relocateThePresenterOnTheScreen=function(e,t,r){t.css({position:"absolute",left:e.position().left+r.left,top:e.position().top+r.top})},PresenterJS.prototype.prepareTheElementForTheNextStep=function(e,t){t.drawOnTargetAtEnd&&e.addClass(t.drawOnTargetAtEnd)},PresenterJS.prototype.prepareThePresenterForTheNextStep=function(e,t,r){t.removeClass(e.drawOnTargetAtStart),r.removeClass(e.drawOnSelf),r.find("#dialogue-indicator").removeClass(e.indicatorPosition),r.empty()},PresenterJS.prototype.transformThePresenter=function(e,t,r){if(r.removeClass(t.drawOnTargetAtEnd),r.addClass(t.drawOnTargetAtStart),e.addClass(t.drawOnSelf),null!=t.template&&""!=t.template?(console.log("Se agrega el valor chimbo al step"),$(t.template).css({}).appendTo(e)):(console.log("Se agrega el valor al step"),$(this.presenterDefaultBody).css({}).appendTo(e)),null!=t.group&&null!=t.group){var o=$("body").find("."+t.group);console.log(o),void 0!=o.html()&&o.addClass(t.groupClass)}var s=e.find("#dialogue-btn");t.button?(s.removeClass("hide"),s.html(t.button),s.off("click"),s.on("click",function(){PresenterJS.prototype.onStepEnd(t,r,e),PresenterJS.prototype.show(steps[t.nextStep])})):s.addClass("hide"),e.find("#presenter_title").html(t.title),e.find("#presenter_message").html(t.text),e.find("#dialogue-indicator").addClass(t.indicatorPosition),e.addClass("show")},PresenterJS.prototype.killAPreviousStep=function(e){if(null!=e.kill&&""!=e.kill){var t=steps[e.kill];if(null!=t){var r=$("body").find("#"+t.id);void 0!=r.html()&&(r.removeClass(steps[e.kill].drawOnTargetAtEnd),null!=t.group&&""!=t.group&&$("body").find("."+t.group).removeClass(t.groupClass))}}},PresenterJS.prototype.calculateNextPositionForThePresenter=function(e,t,r,o,s){var n={top:"",left:""},a=o.height(),i=o.width(),l=PresenterJS.prototype.getDifferenceBetweenThePresenterAndTheElement(s,o),p=s.css("padding");p=2*Number(p.replace("px",""));switch(e){case"TOP_LEFT":switch(t){case"RIGHT":n.left=-29;break;default:n.left=-(l.width+i+p-30-1)}switch(r){case"TOP":n.top=-i;break;default:n.top=30}break;case"LEFT_TOP":switch(t){case"RIGHT":n.left=30;break;default:n.left=-(i+l.width+p+1+30)}switch(r){case"TOP":default:n.top=-(i-p+12+1-30)}break;case"TOP_RIGHT":switch(t){case"RIGHT":n.top=p-12-(l.height+30),n.left=i-30;break;default:n.top=p-12-(l.height+30),n.left=-(l.width+p-30)}break;case"RIGHT_TOP":switch(t){case"RIGHT":n.left=i+1+30;break;default:n.left=30-(i+1-p)}switch(r){case"TOP":n.top=-(l.height-p-30-12);break;default:n.top=i-l.height-p+30+12}break;case"BOTTOM_LEFT":switch(t){case"RIGHT":n.top=a+1+30,n.left=-30;break;default:n.top=a+1+30,n.left=30-(i+l.width+p+1)}break;case"LEFT_BOTTOM":switch(t){case"RIGHT":n.top=a+1-30,n.left=30-(31-p);break;default:n.top=a+1-30,n.left=-(i+l.width+p+1)-30}break;case"BOTTOM_RIGHT":switch(t){case"RIGHT":n.top=a+1+30,n.left=i+1-30;break;default:n.top=a+1+30,n.left=-(l.width+1+p-30)}break;case"RIGHT_BOTTOM":switch(t){case"RIGHT":n.top=a+1-30,n.left=i+1+30;break;default:n.top=a+1-30,n.left=-(l.width+1+p+30)}}return n},PresenterJS.prototype.getDifferenceBetweenThePresenterAndTheElement=function(e,t){var r=e.height()-t.height();r<0&&(r*=-1);var o=e.width()-t.width();return{height:r,width:o}},PresenterJS.prototype.initPresenter=function(e){steps=e},PresenterJS.prototype.runShowCase=function(){var e=steps.prepare.template;$("body").append(e),$("body").css({overflow:"hidden"}),setTimeout(function(){$("body").find("#guide-bg").addClass("show"),setTimeout(function(){$("body").find("#guide-message").addClass("show"),$("body").find("#guide-bg").find("#productName").html(steps.prepare.productName),$("body").find("#guide-bg").find("#message").html(steps.prepare.message),setTimeout(function(){$("body").find("#guide-message").addClass("hide"),setTimeout(function(){PresenterJS.prototype.show(steps.step1)},steps.step1.delay)},1e3)},1e3)},100)};