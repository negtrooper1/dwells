!function(t,e){"use strict";t.rails!==e&&t.error("jquery-ujs has already been loaded!");var i,n=t(document);t.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return t("meta[name=csrf-token]").attr("content")},csrfParam:function(){return t("meta[name=csrf-param]").attr("content")},CSRFProtection:function(t){var e=i.csrfToken();e&&t.setRequestHeader("X-CSRF-Token",e)},refreshCSRFTokens:function(){t('form input[name="'+i.csrfParam()+'"]').val(i.csrfToken())},fire:function(e,i,n){var s=t.Event(i);return e.trigger(s,n),s.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t[0].href},isRemote:function(t){return t.data("remote")!==e&&t.data("remote")!==!1},handleRemote:function(n){var s,r,o,a,h,l;if(i.fire(n,"ajax:before")){if(a=n.data("with-credentials")||null,h=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,n.is("form")){s=n.data("ujs:submit-button-formmethod")||n.attr("method"),r=n.data("ujs:submit-button-formaction")||n.attr("action"),o=t(n[0]).serializeArray();var u=n.data("ujs:submit-button");u&&(o.push(u),n.data("ujs:submit-button",null)),n.data("ujs:submit-button-formmethod",null),n.data("ujs:submit-button-formaction",null)}else n.is(i.inputChangeSelector)?(s=n.data("method"),r=n.data("url"),o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(s=n.data("method")||"get",r=n.data("url"),o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):(s=n.data("method"),r=i.href(n),o=n.data("params")||null);return l={type:s||"GET",data:o,dataType:h,beforeSend:function(t,s){return s.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+s.accepts.script),i.fire(n,"ajax:beforeSend",[t,s])?void n.trigger("ajax:send",t):!1},success:function(t,e,i){n.trigger("ajax:success",[t,e,i])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e,i){n.trigger("ajax:error",[t,e,i])},crossDomain:i.isCrossDomain(r)},a&&(l.xhrFields={withCredentials:a}),r&&(l.url=r),i.ajax(l)}return!1},isCrossDomain:function(t){var e=document.createElement("a");e.href=location.href;var i=document.createElement("a");try{return i.href=t,i.href=i.href,!((!i.protocol||":"===i.protocol)&&!i.host||e.protocol+"//"+e.host==i.protocol+"//"+i.host)}catch(n){return!0}},handleMethod:function(n){var s=i.href(n),r=n.data("method"),o=n.attr("target"),a=i.csrfToken(),h=i.csrfParam(),l=t('<form method="post" action="'+s+'"></form>'),u='<input name="_method" value="'+r+'" type="hidden" />';h===e||a===e||i.isCrossDomain(s)||(u+='<input name="'+h+'" value="'+a+'" type="hidden" />'),o&&l.attr("target",o),l.hide().append(u).appendTo("body"),l.submit()},formElements:function(e,i){return e.is("form")?t(e[0].elements).filter(i):e.find(i)},disableFormElements:function(e){i.formElements(e,i.disableSelector).each(function(){i.disableFormElement(t(this))})},disableFormElement:function(t){var i,n;i=t.is("button")?"html":"val",n=t.data("disable-with"),n!==e&&(t.data("ujs:enable-with",t[i]()),t[i](n)),t.prop("disabled",!0),t.data("ujs:disabled",!0)},enableFormElements:function(e){i.formElements(e,i.enableSelector).each(function(){i.enableFormElement(t(this))})},enableFormElement:function(t){var i=t.is("button")?"html":"val";t.data("ujs:enable-with")!==e&&(t[i](t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.prop("disabled",!1),t.removeData("ujs:disabled")},allowAction:function(t){var e,n=t.data("confirm"),s=!1;if(!n)return!0;if(i.fire(t,"confirm")){try{s=i.confirm(n)}catch(r){(console.error||console.log).call(console,r.stack||r)}e=i.fire(t,"confirm:complete",[s])}return s&&e},blankInputs:function(e,i,n){var s,r,o,a,h=t(),l=i||"input,textarea",u=e.find(l),c={};return u.each(function(){s=t(this),s.is("input[type=radio]")?(a=s.attr("name"),c[a]||(0===e.find('input[type=radio]:checked[name="'+a+'"]').length&&(o=e.find('input[type=radio][name="'+a+'"]'),h=h.add(o)),c[a]=a)):(r=s.is("input[type=checkbox],input[type=radio]")?s.is(":checked"):!!s.val(),r===n&&(h=h.add(s)))}),h.length?h:!1},nonBlankInputs:function(t,e){return i.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var n=t.data("disable-with");n!==e&&(t.data("ujs:enable-with",t.html()),t.html(n)),t.bind("click.railsDisable",function(t){return i.stopEverything(t)}),t.data("ujs:disabled",!0)},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable"),t.removeData("ujs:disabled")}},i.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){t.crossDomain||i.CSRFProtection(n)}),t(window).on("pageshow.rails",function(){t(t.rails.enableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableFormElement(e)}),t(t.rails.linkDisableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableElement(e)})}),n.delegate(i.linkDisableSelector,"ajax:complete",function(){i.enableElement(t(this))}),n.delegate(i.buttonDisableSelector,"ajax:complete",function(){i.enableFormElement(t(this))}),n.delegate(i.linkClickSelector,"click.rails",function(e){var n=t(this),s=n.data("method"),r=n.data("params"),o=e.metaKey||e.ctrlKey;if(!i.allowAction(n))return i.stopEverything(e);if(!o&&n.is(i.linkDisableSelector)&&i.disableElement(n),i.isRemote(n)){if(o&&(!s||"GET"===s)&&!r)return!0;var a=i.handleRemote(n);return a===!1?i.enableElement(n):a.fail(function(){i.enableElement(n)}),!1}return s?(i.handleMethod(n),!1):void 0}),n.delegate(i.buttonClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n)||!i.isRemote(n))return i.stopEverything(e);n.is(i.buttonDisableSelector)&&i.disableFormElement(n);var s=i.handleRemote(n);return s===!1?i.enableFormElement(n):s.fail(function(){i.enableFormElement(n)}),!1}),n.delegate(i.inputChangeSelector,"change.rails",function(e){var n=t(this);return i.allowAction(n)&&i.isRemote(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),n.delegate(i.formSubmitSelector,"submit.rails",function(n){var s,r,o=t(this),a=i.isRemote(o);if(!i.allowAction(o))return i.stopEverything(n);if(o.attr("novalidate")===e)if(o.data("ujs:formnovalidate-button")===e){if(s=i.blankInputs(o,i.requiredInputSelector,!1),s&&i.fire(o,"ajax:aborted:required",[s]))return i.stopEverything(n)}else o.data("ujs:formnovalidate-button",e);if(a){if(r=i.nonBlankInputs(o,i.fileInputSelector)){setTimeout(function(){i.disableFormElements(o)},13);var h=i.fire(o,"ajax:aborted:file",[r]);return h||setTimeout(function(){i.enableFormElements(o)},13),h}return i.handleRemote(o),!1}setTimeout(function(){i.disableFormElements(o)},13)}),n.delegate(i.formInputClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);var s=n.attr("name"),r=s?{name:s,value:n.val()}:null,o=n.closest("form");0===o.length&&(o=t("#"+n.attr("form"))),o.data("ujs:submit-button",r),o.data("ujs:formnovalidate-button",n.attr("formnovalidate")),o.data("ujs:submit-button-formaction",n.attr("formaction")),o.data("ujs:submit-button-formmethod",n.attr("formmethod"))}),n.delegate(i.formSubmitSelector,"ajax:send.rails",function(e){this===e.target&&i.disableFormElements(t(this))}),n.delegate(i.formSubmitSelector,"ajax:complete.rails",function(e){this===e.target&&i.enableFormElements(t(this))}),t(function(){i.refreshCSRFTokens()}))}(jQuery);