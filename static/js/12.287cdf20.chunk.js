(this["webpackJsonpreact-portfolio-starter-code-files"]=this["webpackJsonpreact-portfolio-starter-code-files"]||[]).push([[12],{1768:function(r,t){},2062:function(r,t,e){"use strict";e.r(t),function(r){e.d(t,"getED25519Key",(function(){return c}));var n=e(60),a=e(1848),o=e.n(a).a.lowlevel;function c(t){var e;e="string"===typeof t?r.from(t,"hex"):t;var a=new Uint8Array(64),c=[o.gf(),o.gf(),o.gf(),o.gf()],f=new Uint8Array([].concat(Object(n.a)(new Uint8Array(e)),Object(n.a)(new Uint8Array(32)))),i=new Uint8Array(32);o.crypto_hash(a,f,32),a[0]&=248,a[31]&=127,a[31]|=64,o.scalarbase(c,a),o.pack(i,c);for(var s=0;s<32;s+=1)f[s+32]=i[s];return{sk:r.from(f),pk:r.from(i)}}}.call(this,e(32).Buffer)}}]);
//# sourceMappingURL=12.287cdf20.chunk.js.map