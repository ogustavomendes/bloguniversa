(window.blocksyJsonP=window.blocksyJsonP||[]).push([[12],{34:function(e,t,o){"use strict";o.r(t),o.d(t,"mount",(function(){return d}));var r=o(4),a=o.n(r);const d=(e,t)=>{let{event:o}=t;a.a&&function(e){if(!a.a)return;var t=e.closest("form"),o=t.find(".button"),r=t.attr("action"),d=t.attr("method");void 0!==d&&""!=d||(d="POST");var c=new FormData(t[0]);c.append(o.attr("name"),o.val());const n=[...c.entries()].reduce((e,t)=>e+(t[0].indexOf("quantity")>-1?parseInt(t[1],10):0),0);t.closest(".quick-view-modal").length&&(t.closest(".quick-view-modal").find(".ct-quick-add").removeClass("added"),t.closest(".quick-view-modal").find(".ct-quick-add").addClass("loading")),o.removeClass("added"),o.addClass("loading"),a()(document.body).trigger("adding_to_cart",[o,{}]),fetch(r,{method:d,body:c}).then(e=>e.text()).then((e,r,d)=>{const c=document.createElement("div");c.innerHTML=e;let s=c.querySelector(".woocommerce-error");if(s){let e=document.querySelector(".woocommerce-notices-wrapper");return e.querySelector(".woocommerce-error")&&e.querySelector(".woocommerce-error").remove(),void(e&&e.appendChild(s))}a()(document.body).trigger("wc_fragment_refresh"),a.a.ajax({url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:e=>{e&&e.fragments&&(a.a.each(e.fragments,(function(e,t){a()(e).replaceWith(t)})),a()(document.body).trigger("wc_fragments_refreshed")),t.closest(".quick-view-modal").length&&(t.closest(".quick-view-modal").find(".ct-quick-add").addClass("added"),t.closest(".quick-view-modal").find(".ct-quick-add").removeClass("loading")),a()(document.body).trigger("added_to_cart",[e.fragments,e.cart_hash,o,n])}})}).catch(()=>o.removeClass("loading")).finally(()=>o.removeClass("loading"))}(a()(e))}}}]);