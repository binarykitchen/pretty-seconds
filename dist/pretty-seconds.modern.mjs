function n(n,t,e,r){return(e||r&&!e)&&((e>1||e<-1||0===e)&&(t+="s"),n.push(e+" "+t)),n}function t(n){return n.toFixed(10)}module.exports=function(e){let r="",o=[];if("number"==typeof e){o=n(o,"day",parseInt(t(e/86400))),o=n(o,"hour",parseInt(t(e%86400/3600))),o=n(o,"minute",parseInt(t(e%3600/60))),o=n(o,"second",Math.floor(e%60),o.length<1);const u=o.length;let s;for(s=0;s<u;s++)r.length>0&&(r+=s===u-1?" and ":", "),r+=o[s]}return r};
//# sourceMappingURL=pretty-seconds.modern.mjs.map
