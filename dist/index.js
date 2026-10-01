"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=q(function(l,s){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),d=require('@stdlib/blas-ext-base-scusome/dist').ndarray;function m(i){var r=i[1],e=i[0],n=c(i[2]);return d(o(e,0),n,u(e),t(e,0),a(e),u(r),t(r,0),a(r)),r}s.exports=m
});var f=v();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
