(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="163",Rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xm=0,Cl=1,ym=2,Fh=1,Mm=2,Ei=3,Zi=0,xn=1,Ri=2,$i=0,Js=1,Ll=2,Pl=3,Il=4,Sm=5,ps=100,Tm=101,Em=102,Am=103,Nm=104,bm=200,wm=201,Rm=202,Cm=203,Tc=204,Ec=205,Lm=206,Pm=207,Im=208,Dm=209,Um=210,Om=211,Fm=212,Vm=213,zm=214,Bm=0,Hm=1,Gm=2,Po=3,km=4,Wm=5,Xm=6,qm=7,Zo=0,Ym=1,jm=2,ni=0,Vh=1,zh=2,Bh=3,Hh=4,$m=5,Gh=6,Km=7,kh=300,or=301,ar=302,Ac=303,Nc=304,Jo=306,bc=1e3,_s=1001,wc=1002,un=1003,Zm=1004,no=1005,Qn=1006,Ea=1007,Yi=1008,Ki=1009,Jm=1010,Qm=1011,Wh=1012,Xh=1013,cr=1014,Li=1015,Vr=1016,qh=1017,Yh=1018,Yr=1020,eg=35902,tg=1021,ng=1022,di=1023,ig=1024,sg=1025,Qs=1026,zr=1027,rg=1028,jh=1029,og=1030,$h=1031,Kh=1033,Aa=33776,Na=33777,ba=33778,wa=33779,Dl=35840,Ul=35841,Ol=35842,Fl=35843,Zh=36196,Vl=37492,zl=37496,Bl=37808,Hl=37809,Gl=37810,kl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,jl=37816,$l=37817,Kl=37818,Zl=37819,Jl=37820,Ql=37821,Ra=36492,eu=36494,tu=36495,ag=36283,nu=36284,iu=36285,su=36286,cg=3200,lg=3201,xs=0,Jh=1,Ci="",Jn="srgb",Wn="srgb-linear",jc="display-p3",Qo="display-p3-linear",Io="linear",St="srgb",Do="rec709",Uo="p3",Ls=7680,ru=519,ug=512,Qh=513,hg=514,ed=515,dg=516,fg=517,pg=518,mg=519,Oo=35044,Rc=35048,ou="300 es",fi=2e3,lr=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const Dr=Math.PI/180,ur=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function gg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _g(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function vg(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function xg(i,e=1){return e-Math.abs($c(i,e*2)-e)}function yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tg(i,e){return i+Math.random()*(e-i)}function Eg(i){return i*(.5-Math.random())}function Ag(i){i!==void 0&&(au=i);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(i){return i*Dr}function bg(i){return i*ur}function wg(i){return(i&i-1)===0&&i!==0}function Rg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kc={DEG2RAD:Dr,RAD2DEG:ur,generateUUID:Pi,clamp:en,euclideanModulo:$c,mapLinear:gg,inverseLerp:_g,lerp:Ur,damp:vg,pingpong:xg,smoothstep:yg,smootherstep:Mg,randInt:Sg,randFloat:Tg,randFloatSpread:Eg,seededRandom:Ag,degToRad:Ng,radToDeg:bg,isPowerOfTwo:wg,ceilPowerOfTwo:Rg,floorPowerOfTwo:Cg,setQuaternionFromProperEuler:Lg,normalize:ft,denormalize:ei};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],v=s[0],p=s[3],f=s[6],b=s[1],y=s[4],R=s[7],F=s[2],C=s[5],A=s[8];return r[0]=o*v+a*b+c*F,r[3]=o*p+a*y+c*C,r[6]=o*f+a*R+c*A,r[1]=l*v+u*b+h*F,r[4]=l*p+u*y+h*C,r[7]=l*f+u*R+h*A,r[2]=d*v+m*b+_*F,r[5]=d*p+m*y+_*C,r[8]=d*f+m*R+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,_=t*h+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*l-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Ye;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pg(){const i=Fo("canvas");return i.style.display="block",i}const cu={};function nd(i){i in cu||(cu[i]=!0,console.warn(i))}const lu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[Wn]:{transfer:Io,primaries:Do,toReference:i=>i,fromReference:i=>i},[Jn]:{transfer:St,primaries:Do,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qo]:{transfer:Io,primaries:Uo,toReference:i=>i.applyMatrix3(uu),fromReference:i=>i.applyMatrix3(lu)},[jc]:{transfer:St,primaries:Uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uu),fromReference:i=>i.applyMatrix3(lu).convertLinearToSRGB()}},Ig=new Set([Wn,Qo]),gt={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ig.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=io[e].toReference,s=io[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return io[i].primaries},getTransfer:function(i){return i===Ci?Io:io[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class Dg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Fo("canvas")),Ps.width=e.width,Ps.height=e.height;const n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=er(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ug=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pa(s[o].image)):r.push(Pa(s[o]))}else r=Pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Og=0;class pn extends Fi{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=_s,s=_s,r=Qn,o=Yi,a=di,c=Ki,l=pn.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Pi(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kh;pn.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],_=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,R=(m+1)/2,F=(f+1)/2,C=(u+d)/4,A=(h+v)/4,z=(_+p)/4;return y>R&&y>F?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=A/n):R>F?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=C/s,r=z/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=A/r,s=z/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-v)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ji extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends Ji{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zc extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fg extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==d||l!==m||u!==_){let p=1-a;const f=c*d+l*m+u*_+h*v,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const F=Math.sqrt(y),C=Math.atan2(F,f*b);p=Math.sin(p*C)/F,a=Math.sin(a*C)/F}const R=a*b;if(c=c*p+d*R,l=l*p+m*R,u=u*p+_*R,h=h*p+v*R,p===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=F,l*=F,u*=F,h*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*m-l*d,e[t+1]=c*_+u*d+l*h-a*m,e[t+2]=l*_+u*m+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"YZX":this._x=d*u*h+l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h-d*m*_;break;case"XZY":this._x=d*u*h-l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new L,hu=new Ms;class jr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),ro.subVectors(this.max,Nr),Is.subVectors(e.a,Nr),Ds.subVectors(e.b,Nr),Us.subVectors(e.c,Nr),Bi.subVectors(Ds,Is),Hi.subVectors(Us,Ds),rs.subVectors(Is,Us);let t=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-rs.z,rs.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,rs.z,0,-rs.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-rs.y,rs.x,0];return!Da(t,Is,Ds,Us,ro)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,Is,Ds,Us,ro))?!1:(oo.crossVectors(Bi,Hi),t=[oo.x,oo.y,oo.z],Da(t,Is,Ds,Us,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new L,new L,new L,new L,new L,new L,new L,new L],$n=new L,so=new jr,Is=new L,Ds=new L,Us=new L,Bi=new L,Hi=new L,rs=new L,Nr=new L,ro=new L,oo=new L,os=new L;function Da(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);const a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),l=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vg=new jr,br=new L,Ua=new L;class Jc{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Ua)),this.expandByPoint(br.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new L,Oa=new L,ao=new L,Gi=new L,Fa=new L,co=new L,Va=new L;class sd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oa.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Gi.dot(this.direction),c=-Gi.dot(ao),l=Gi.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Oa).addScaledVector(ao,d),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){Fa.subVectors(t,e),co.subVectors(n,e),Va.crossVectors(Fa,co);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const c=a*this.direction.dot(co.crossVectors(Gi,co));if(c<0)return null;const l=a*this.direction.dot(Fa.cross(Gi));if(l<0||c+l>o)return null;const u=-a*Gi.dot(Va);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,o,a,c,l,u,h,d,m,_,v,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,m,_,v,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,m,_,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,_=l*u,v=l*h;t[0]=d+v*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,_=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,m=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,Bg)}lookAt(e,t,n){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),ki.crossVectors(n,An),ki.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ki.crossVectors(n,An)),ki.normalize(),lo.crossVectors(An,ki),s[0]=ki.x,s[4]=lo.x,s[8]=An.x,s[1]=ki.y,s[5]=lo.y,s[9]=An.y,s[2]=ki.z,s[6]=lo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],v=n[6],p=n[10],f=n[14],b=n[3],y=n[7],R=n[11],F=n[15],C=s[0],A=s[4],z=s[8],T=s[12],M=s[1],B=s[5],Z=s[9],I=s[13],te=s[2],Q=s[6],oe=s[10],ce=s[14],Y=s[3],ue=s[7],le=s[11],Ne=s[15];return r[0]=o*C+a*M+c*te+l*Y,r[4]=o*A+a*B+c*Q+l*ue,r[8]=o*z+a*Z+c*oe+l*le,r[12]=o*T+a*I+c*ce+l*Ne,r[1]=u*C+h*M+d*te+m*Y,r[5]=u*A+h*B+d*Q+m*ue,r[9]=u*z+h*Z+d*oe+m*le,r[13]=u*T+h*I+d*ce+m*Ne,r[2]=_*C+v*M+p*te+f*Y,r[6]=_*A+v*B+p*Q+f*ue,r[10]=_*z+v*Z+p*oe+f*le,r[14]=_*T+v*I+p*ce+f*Ne,r[3]=b*C+y*M+R*te+F*Y,r[7]=b*A+y*B+R*Q+F*ue,r[11]=b*z+y*Z+R*oe+F*le,r[15]=b*T+y*I+R*ce+F*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],v=e[7],p=e[11],f=e[15];return _*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*m-n*c*m)+v*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+p*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],v=e[13],p=e[14],f=e[15],b=h*p*l-v*d*l+v*c*m-a*p*m-h*c*f+a*d*f,y=_*d*l-u*p*l-_*c*m+o*p*m+u*c*f-o*d*f,R=u*v*l-_*h*l+_*a*m-o*v*m-u*a*f+o*h*f,F=_*h*c-u*v*c-_*a*d+o*v*d+u*a*p-o*h*p,C=t*b+n*y+s*R+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(v*d*r-h*p*r-v*s*m+n*p*m+h*s*f-n*d*f)*A,e[2]=(a*p*r-v*c*r+v*s*l-n*p*l-a*s*f+n*c*f)*A,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*m-n*c*m)*A,e[4]=y*A,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*f+t*d*f)*A,e[6]=(_*c*r-o*p*r-_*s*l+t*p*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*m+t*c*m)*A,e[8]=R*A,e[9]=(_*h*r-u*v*r-_*n*m+t*v*m+u*n*f-t*h*f)*A,e[10]=(o*v*r-_*a*r+_*n*l-t*v*l-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*A,e[12]=F*A,e[13]=(u*v*s-_*h*s+_*n*d-t*v*d-u*n*p+t*h*p)*A,e[14]=(_*a*s-o*v*s-_*n*c+t*v*c+o*n*p-t*a*p)*A,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,_=r*h,v=o*u,p=o*h,f=a*h,b=c*l,y=c*u,R=c*h,F=n.x,C=n.y,A=n.z;return s[0]=(1-(v+f))*F,s[1]=(m+R)*F,s[2]=(_-y)*F,s[3]=0,s[4]=(m-R)*C,s[5]=(1-(d+f))*C,s[6]=(p+b)*C,s[7]=0,s[8]=(_+y)*A,s[9]=(p-b)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);const l=1/r,u=1/o,h=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=fi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,_;if(a===fi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,m=(n+s)*u;let _,v;if(a===fi)_=(o+r)*h,v=-2*h;else if(a===lr)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new L,Kn=new Nt,zg=new L(0,0,0),Bg=new L(1,1,1),ki=new L,lo=new L,An=new L,du=new Nt,fu=new Ms;class kn{constructor(e=0,t=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const pu=new L,Fs=new Ms,Mi=new Nt,uo=new L,wr=new L,Gg=new L,kg=new Ms,mu=new L(1,0,0),gu=new L(0,1,0),_u=new L(0,0,1),vu={type:"added"},Wg={type:"removed"},Vs={type:"childadded",child:null},za={type:"childremoved",child:null};class Xt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new L,t=new kn,n=new Ms,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ye}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(wr,uo,this.up):Mi.lookAt(uo,wr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wg),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new L(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new L,Si=new L,Ba=new L,Ti=new L,zs=new L,Bs=new L,xu=new L,Ha=new L,Ga=new L,ka=new L;class hi{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Si.subVectors(n,t),Ba.subVectors(e,t);const o=Zn.dot(Zn),a=Zn.dot(Si),c=Zn.dot(Ba),l=Si.dot(Si),u=Si.dot(Ba),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Si.subVectors(e,t),Zn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,n),Bs.subVectors(r,n),Ha.subVectors(e,n);const c=zs.dot(Ha),l=Bs.dot(Ha);if(c<=0&&l<=0)return t.copy(n);Ga.subVectors(e,s);const u=zs.dot(Ga),h=Bs.dot(Ga);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(zs,o);ka.subVectors(e,r);const m=zs.dot(ka),_=Bs.dot(ka);if(_>=0&&m<=_)return t.copy(r);const v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Bs,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return xu.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(xu,a);const f=1/(p+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=$c(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wa(o,r,e+1/3),this.g=Wa(o,r,e),this.b=Wa(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Jn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return gt.fromWorkingColorSpace(cn.copy(this),e),Math.round(en(cn.r*255,0,255))*65536+Math.round(en(cn.g*255,0,255))*256+Math.round(en(cn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Jn){gt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,s=cn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(ho);const n=Ur(Wi.h,ho.h,t),s=Ur(Wi.s,ho.s,t),r=Ur(Wi.l,ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ve;Ve.NAMES=od;let Xg=0;class Xn extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Js,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ec,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ec&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qc extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new L,fo=new Se;class Gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class ad extends Gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cd extends Gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ii extends Gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qg=0;const Fn=new Nt,Xa=new Xt,Hs=new L,Nn=new jr,Rr=new jr,Kt=new L;class ts extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?cd:ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Nn.min,Rr.min),Nn.expandByPoint(Kt),Kt.addVectors(Nn.max,Rr.max),Nn.expandByPoint(Kt)):(Nn.expandByPoint(Rr.min),Nn.expandByPoint(Rr.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Kt.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(e,l),Kt.add(Hs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new L,c[z]=new L;const l=new L,u=new L,h=new L,d=new Se,m=new Se,_=new Se,v=new L,p=new L;function f(z,T,M){l.fromBufferAttribute(n,z),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,z),m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),u.sub(l),h.sub(l),m.sub(d),_.sub(d);const B=1/(m.x*_.y-_.x*m.y);isFinite(B)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(B),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(B),a[z].add(v),a[T].add(v),a[M].add(v),c[z].add(p),c[T].add(p),c[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,T=b.length;z<T;++z){const M=b[z],B=M.start,Z=M.count;for(let I=B,te=B+Z;I<te;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new L,R=new L,F=new L,C=new L;function A(z){F.fromBufferAttribute(s,z),C.copy(F);const T=a[z];y.copy(T),y.sub(F.multiplyScalar(F.dot(T))).normalize(),R.crossVectors(C,T);const B=R.dot(c[z])<0?-1:1;o.setXYZW(z,y.x,y.y,y.z,B)}for(let z=0,T=b.length;z<T;++z){const M=b[z],B=M.start,Z=M.count;for(let I=B,te=B+Z;I<te;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let f=0;f<u;f++)d[_++]=l[m++]}return new Gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ts,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new Nt,as=new sd,po=new Jc,Mu=new L,Gs=new L,ks=new L,Ws=new L,qa=new L,mo=new L,go=new Se,_o=new Se,vo=new Se,Su=new L,Tu=new L,Eu=new L,xo=new L,yo=new L;class ti extends Xt{constructor(e=new ts,t=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(qa.fromBufferAttribute(h,e),o?mo.addScaledVector(qa,u):mo.addScaledVector(qa.sub(t),u))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(po.containsPoint(as.origin)===!1&&(as.intersectSphere(po,Mu)===null||as.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),as.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],f=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let R=b,F=y;R<F;R+=3){const C=a.getX(R),A=a.getX(R+1),z=a.getX(R+2);s=Mo(this,f,e,n,l,u,h,C,A,z),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){const b=a.getX(p),y=a.getX(p+1),R=a.getX(p+2);s=Mo(this,o,e,n,l,u,h,b,y,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],f=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let R=b,F=y;R<F;R+=3){const C=R,A=R+1,z=R+2;s=Mo(this,f,e,n,l,u,h,C,A,z),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){const b=p,y=p+1,R=p+2;s=Mo(this,o,e,n,l,u,h,b,y,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Yg(i,e,t,n,s,r,o,a){let c;if(e.side===xn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Zi,a),c===null)return null;yo.copy(a),yo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:i}}function Mo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Gs),i.getVertexPosition(c,ks),i.getVertexPosition(l,Ws);const u=Yg(i,e,t,n,Gs,ks,Ws,xo);if(u){s&&(go.fromBufferAttribute(s,a),_o.fromBufferAttribute(s,c),vo.fromBufferAttribute(s,l),u.uv=hi.getInterpolation(xo,Gs,ks,Ws,go,_o,vo,new Se)),r&&(go.fromBufferAttribute(r,a),_o.fromBufferAttribute(r,c),vo.fromBufferAttribute(r,l),u.uv1=hi.getInterpolation(xo,Gs,ks,Ws,go,_o,vo,new Se)),o&&(Su.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,c),Eu.fromBufferAttribute(o,l),u.normal=hi.getInterpolation(xo,Gs,ks,Ws,Su,Tu,Eu,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};hi.getNormal(Gs,ks,Ws,h.normal),u.face=h}return u}class mr extends ts{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ii(l,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(h,2));function _(v,p,f,b,y,R,F,C,A,z,T){const M=R/A,B=F/z,Z=R/2,I=F/2,te=C/2,Q=A+1,oe=z+1;let ce=0,Y=0;const ue=new L;for(let le=0;le<oe;le++){const Ne=le*B-I;for(let Ze=0;Ze<Q;Ze++){const dt=Ze*M-Z;ue[v]=dt*b,ue[p]=Ne*y,ue[f]=te,l.push(ue.x,ue.y,ue.z),ue[v]=0,ue[p]=0,ue[f]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ze/A),h.push(1-le/z),ce+=1}}for(let le=0;le<z;le++)for(let Ne=0;Ne<A;Ne++){const Ze=d+Ne+Q*le,dt=d+Ne+Q*(le+1),j=d+(Ne+1)+Q*(le+1),he=d+(Ne+1)+Q*le;c.push(Ze,dt,he),c.push(dt,j,he),Y+=6}a.addGroup(m,Y,T),m+=Y,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=hr(i[t]);for(const s in n)e[s]=n[s]}return e}function jg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const $g={clone:hr,merge:fn};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ud extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new L,Au=new Se,Nu=new Se;class _n extends ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Au,Nu),t.subVectors(Nu,Au)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,qs=1;class Jg extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Xs,qs,e,t);s.layers=this.layers,this.add(s);const r=new _n(Xs,qs,e,t);r.layers=this.layers,this.add(r);const o=new _n(Xs,qs,e,t);o.layers=this.layers,this.add(o);const a=new _n(Xs,qs,e,t);a.layers=this.layers,this.add(a);const c=new _n(Xs,qs,e,t);c.layers=this.layers,this.add(c);const l=new _n(Xs,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hd extends pn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qg extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mr(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:$i});r.uniforms.tEquirect.value=t;const o=new ti(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Qn),new Jg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ya=new L,e_=new L,t_=new Ye;class Ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ya.subVectors(n,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t_.getNormalMatrix(e),s=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Jc,So=new L;class el{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],v=s[10],p=s[11],f=s[12],b=s[13],y=s[14],R=s[15];if(n[0].setComponents(c-r,d-l,p-m,R-f).normalize(),n[1].setComponents(c+r,d+l,p+m,R+f).normalize(),n[2].setComponents(c+o,d+u,p+_,R+b).normalize(),n[3].setComponents(c-o,d-u,p-_,R-b).normalize(),n[4].setComponents(c-a,d-h,p-v,R-y).normalize(),t===fi)n[5].setComponents(c+a,d+h,p+v,R+y).normalize();else if(t===lr)n[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function n_(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let m=0,_=d.length;m<_;m++){const v=d[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ea extends ts{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],_=[],v=[],p=[];for(let f=0;f<u;f++){const b=f*d-o;for(let y=0;y<l;y++){const R=y*h-r;_.push(R,-b,0),v.push(0,0,1),p.push(y/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const y=b+l*f,R=b+l*(f+1),F=b+1+l*(f+1),C=b+1+l*f;m.push(y,R,C),m.push(R,F,C)}this.setIndex(m),this.setAttribute("position",new Ii(_,3)),this.setAttribute("normal",new Ii(v,3)),this.setAttribute("uv",new Ii(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,f_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,__=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:i_,alphahash_pars_fragment:s_,alphamap_fragment:r_,alphamap_pars_fragment:o_,alphatest_fragment:a_,alphatest_pars_fragment:c_,aomap_fragment:l_,aomap_pars_fragment:u_,batching_pars_vertex:h_,batching_vertex:d_,begin_vertex:f_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:g_,bumpmap_pars_fragment:__,clipping_planes_fragment:v_,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:y_,clipping_planes_vertex:M_,color_fragment:S_,color_pars_fragment:T_,color_pars_vertex:E_,color_vertex:A_,common:N_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:w_,displacementmap_pars_vertex:R_,displacementmap_vertex:C_,emissivemap_fragment:L_,emissivemap_pars_fragment:P_,colorspace_fragment:I_,colorspace_pars_fragment:D_,envmap_fragment:U_,envmap_common_pars_fragment:O_,envmap_pars_fragment:F_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:K_,envmap_vertex:z_,fog_vertex:B_,fog_pars_vertex:H_,fog_fragment:G_,fog_pars_fragment:k_,gradientmap_pars_fragment:W_,lightmap_fragment:X_,lightmap_pars_fragment:q_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:j_,lights_pars_begin:$_,lights_toon_fragment:Z_,lights_toon_pars_fragment:J_,lights_phong_fragment:Q_,lights_phong_pars_fragment:ev,lights_physical_fragment:tv,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:lv,map_fragment:uv,map_pars_fragment:hv,map_particle_fragment:dv,map_particle_pars_fragment:fv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:yv,normal_fragment_begin:Mv,normal_fragment_maps:Sv,normal_pars_fragment:Tv,normal_pars_vertex:Ev,normal_vertex:Av,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:wv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Cv,opaque_fragment:Lv,packing:Pv,premultiplied_alpha_fragment:Iv,project_vertex:Dv,dithering_fragment:Uv,dithering_pars_fragment:Ov,roughnessmap_fragment:Fv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:Bv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Gv,skinbase_vertex:kv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:qv,specularmap_fragment:Yv,specularmap_pars_fragment:jv,tonemapping_fragment:$v,tonemapping_pars_fragment:Kv,transmission_fragment:Zv,transmission_pars_fragment:Jv,uv_pars_fragment:Qv,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:o0,cube_vert:a0,cube_frag:c0,depth_vert:l0,depth_frag:u0,distanceRGBA_vert:h0,distanceRGBA_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:_0,meshbasic_frag:v0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:T0,meshnormal_frag:E0,meshphong_vert:A0,meshphong_frag:N0,meshphysical_vert:b0,meshphysical_frag:w0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:L0,points_frag:P0,shadow_vert:I0,shadow_frag:D0,sprite_vert:U0,sprite_frag:O0},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:fn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:fn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:fn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:fn([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:fn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:fn([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:fn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:fn([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:fn([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:fn([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};li.physical={uniforms:fn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const To={r:0,b:0,g:0},ls=new kn,F0=new Nt;function V0(i,e,t,n,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function _(p,f){let b=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,c):y&&y.isColor&&(v(y,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Jo)?(u===void 0&&(u=new ti(new mr(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:hr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(f.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(ls)),u.material.toneMapped=gt.getTransfer(y.colorSpace)!==St,(h!==y||d!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ti(new ea(2,2),new Ui({name:"BackgroundMaterial",uniforms:hr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){p.getRGB(To,ld(i)),n.buffers.color.setClear(To.r,To.g,To.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:_}}function z0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,B,Z,I,te){let Q=!1;const oe=h(I,Z,B);r!==oe&&(r=oe,l(r.object)),Q=m(M,I,Z,te),Q&&_(M,I,Z,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,R(M,B,Z,I),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,B,Z){const I=Z.wireframe===!0;let te=n[M.id];te===void 0&&(te={},n[M.id]=te);let Q=te[B.id];Q===void 0&&(Q={},te[B.id]=Q);let oe=Q[I];return oe===void 0&&(oe=d(c()),Q[I]=oe),oe}function d(M){const B=[],Z=[],I=[];for(let te=0;te<t;te++)B[te]=0,Z[te]=0,I[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,B,Z,I){const te=r.attributes,Q=B.attributes;let oe=0;const ce=Z.getAttributes();for(const Y in ce)if(ce[Y].location>=0){const le=te[Y];let Ne=Q[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Ne=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Ne=M.instanceColor)),le===void 0||le.attribute!==Ne||Ne&&le.data!==Ne.data)return!0;oe++}return r.attributesNum!==oe||r.index!==I}function _(M,B,Z,I){const te={},Q=B.attributes;let oe=0;const ce=Z.getAttributes();for(const Y in ce)if(ce[Y].location>=0){let le=Q[Y];le===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const Ne={};Ne.attribute=le,le&&le.data&&(Ne.data=le.data),te[Y]=Ne,oe++}r.attributes=te,r.attributesNum=oe,r.index=I}function v(){const M=r.newAttributes;for(let B=0,Z=M.length;B<Z;B++)M[B]=0}function p(M){f(M,0)}function f(M,B){const Z=r.newAttributes,I=r.enabledAttributes,te=r.attributeDivisors;Z[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),te[M]!==B&&(i.vertexAttribDivisor(M,B),te[M]=B)}function b(){const M=r.newAttributes,B=r.enabledAttributes;for(let Z=0,I=B.length;Z<I;Z++)B[Z]!==M[Z]&&(i.disableVertexAttribArray(Z),B[Z]=0)}function y(M,B,Z,I,te,Q,oe){oe===!0?i.vertexAttribIPointer(M,B,Z,te,Q):i.vertexAttribPointer(M,B,Z,I,te,Q)}function R(M,B,Z,I){v();const te=I.attributes,Q=Z.getAttributes(),oe=B.defaultAttributeValues;for(const ce in Q){const Y=Q[ce];if(Y.location>=0){let ue=te[ce];if(ue===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const le=ue.normalized,Ne=ue.itemSize,Ze=e.get(ue);if(Ze===void 0)continue;const dt=Ze.buffer,j=Ze.type,he=Ze.bytesPerElement,Me=j===i.INT||j===i.UNSIGNED_INT||ue.gpuType===Xh;if(ue.isInterleavedBufferAttribute){const ve=ue.data,He=ve.stride,We=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<Y.locationSize;Qe++)f(Y.location+Qe,ve.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<Y.locationSize;Qe++)p(Y.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Qe=0;Qe<Y.locationSize;Qe++)y(Y.location+Qe,Ne/Y.locationSize,j,le,He*he,(We+Ne/Y.locationSize*Qe)*he,Me)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)f(Y.location+ve,ue.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<Y.locationSize;ve++)p(Y.location+ve);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ve=0;ve<Y.locationSize;ve++)y(Y.location+ve,Ne/Y.locationSize,j,le,Ne*he,Ne/Y.locationSize*ve*he,Me)}}else if(oe!==void 0){const le=oe[ce];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Y.location,le);break;case 3:i.vertexAttrib3fv(Y.location,le);break;case 4:i.vertexAttrib4fv(Y.location,le);break;default:i.vertexAttrib1fv(Y.location,le)}}}}b()}function F(){z();for(const M in n){const B=n[M];for(const Z in B){const I=B[Z];for(const te in I)u(I[te].object),delete I[te];delete B[Z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const B=n[M.id];for(const Z in B){const I=B[Z];for(const te in I)u(I[te].object),delete I[te];delete B[Z]}delete n[M.id]}function A(M){for(const B in n){const Z=n[B];if(Z[M.id]===void 0)continue;const I=Z[M.id];for(const te in I)u(I[te].object),delete I[te];delete Z[M.id]}}function z(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function B0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(c[d],l[d]);else{h.multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let m=0;m<u;m++)d+=l[m];t.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function H0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=t.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:p,vertexTextures:f,maxSamples:b}}function G0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ai,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const b=r?0:n,y=b*4;let R=f.clippingState||null;c.value=R,R=u(_,d,y,m);for(let F=0;F!==y;++F)R[F]=t[F];f.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const f=m+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,R=m;y!==v;++y,R+=4)o.copy(h[y]).applyMatrix4(b,a),o.normal.toArray(p,R),p[R+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function k0(i){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=or:a===Nc&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ac||a===Nc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qg(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class tl extends ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const js=4,bu=[.125,.215,.35,.446,.526,.582],ms=20,ja=new tl,wu=new Ve;let $a=null,Ka=0,Za=0,Ja=!1;const fs=(1+Math.sqrt(5))/2,Ys=1/fs,Ru=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,fs,Ys),new L(0,fs,-Ys),new L(Ys,0,fs),new L(-Ys,0,fs),new L(fs,Ys,0),new L(-fs,Ys,0)];class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a,Ka,Za),this._renderer.xr.enabled=Ja,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Vr,format:di,colorSpace:Wn,depthBuffer:!1},s=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=X0(r,e,t)}return s}_compileMaterial(e){const t=new ti(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,s){const a=new _n(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(wu),u.toneMapping=ni,u.autoClear=!1;const m=new Qc({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new ti(new mr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(wu),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Eo(s,b*y,f>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ti(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ru[(s-1)%Ru.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ti(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ms-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):ms;p>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);const f=[];let b=0;for(let A=0;A<ms;++A){const z=A/v,T=Math.exp(-z*z/2);f.push(T),A===0?b+=T:A<p&&(b+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const R=this._sizeLods[s],F=3*R*(s>y-js?s-y+js:0),C=4*(this._cubeSize-R);Eo(t,F,C,3*R,2*R),c.setRenderTarget(t),c.render(h,ja)}}function W0(i){const e=[],t=[],n=[];let s=i;const r=i-js+1+bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-js?c=bu[o-i+js-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,f=1,b=new Float32Array(v*_*m),y=new Float32Array(p*_*m),R=new Float32Array(f*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,z=C>2?0:-1,T=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];b.set(T,v*_*C),y.set(d,p*_*C);const M=[C,C,C,C,C,C];R.set(M,f*_*C)}const F=new ts;F.setAttribute("position",new Gn(b,v)),F.setAttribute("uv",new Gn(y,p)),F.setAttribute("faceIndex",new Gn(R,f)),e.push(F),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(i,e,t){const n=new ys(i,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function X0(i,e,t){const n=new Float32Array(ms),s=new L(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Pu(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Iu(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ac||c===Nc,u=c===or||c===ar;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Cu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function j0(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,f=v.length;p<f;p++)e.update(v[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,R=b.length;y<R;y+=3){const F=b[y+0],C=b[y+1],A=b[y+2];d.push(F,C,C,A,A,F)}}else if(_!==void 0){const b=_.array;v=_.version;for(let y=0,R=b.length/3-1;y<R;y+=3){const F=y+0,C=y+1,A=y+2;d.push(F,C,C,A,A,F)}}else return;const p=new(td(d)?cd:ad)(d,1);p.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $0(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,h*o,m),t.update(d,n,m))}function u(h,d,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<m;v++)this.render(h[v]/o,d[v]);else{_.multiDrawElementsWEBGL(n,d,0,r,h,0,m);let v=0;for(let p=0;p<m;p++)v+=d[p];t.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function K0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Z0(i,e,t){const n=new WeakMap,s=new ot;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let R=0;_===!0&&(R=1),v===!0&&(R=2),p===!0&&(R=3);let F=a.attributes.position.count*R,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const A=new Float32Array(F*C*4*h),z=new Zc(A,F,C,h);z.type=Li,z.needsUpdate=!0;const T=R*4;for(let B=0;B<h;B++){const Z=f[B],I=b[B],te=y[B],Q=F*C*4*B;for(let oe=0;oe<Z.count;oe++){const ce=oe*T;_===!0&&(s.fromBufferAttribute(Z,oe),A[Q+ce+0]=s.x,A[Q+ce+1]=s.y,A[Q+ce+2]=s.z,A[Q+ce+3]=0),v===!0&&(s.fromBufferAttribute(I,oe),A[Q+ce+4]=s.x,A[Q+ce+5]=s.y,A[Q+ce+6]=s.z,A[Q+ce+7]=0),p===!0&&(s.fromBufferAttribute(te,oe),A[Q+ce+8]=s.x,A[Q+ce+9]=s.y,A[Q+ce+10]=s.z,A[Q+ce+11]=te.itemSize===4?s.w:1)}}d={count:h,texture:z,size:new Se(F,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function J0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class $r extends pn{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:Qs,u!==Qs&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qs&&(n=cr),n===void 0&&u===zr&&(n=Yr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fd=new pn,pd=new $r(1,1);pd.compareFunction=ed;const md=new Zc,gd=new Fg,_d=new hd,Du=[],Uu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),Vu=new Float32Array(4);function gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Vu.set(n),i.uniformMatrix2fv(this.addr,!1,Vu),Yt(t,n)}}function sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Yt(t,n)}}function rx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),Yt(t,n)}}function ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?pd:fd;t.setTexture2D(e||r,s)}function mx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gd,s)}function gx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_d,s)}function _x(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||md,s)}function vx(i){switch(i){case 5126:return Q0;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return ux;case 36294:return hx;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function xx(i,e){i.uniform1fv(this.addr,e)}function yx(i,e){const t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Mx(i,e){const t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Sx(i,e){const t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Tx(i,e){const t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ex(i,e){const t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ax(i,e){const t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nx(i,e){i.uniform1iv(this.addr,e)}function bx(i,e){i.uniform2iv(this.addr,e)}function wx(i,e){i.uniform3iv(this.addr,e)}function Rx(i,e){i.uniform4iv(this.addr,e)}function Cx(i,e){i.uniform1uiv(this.addr,e)}function Lx(i,e){i.uniform2uiv(this.addr,e)}function Px(i,e){i.uniform3uiv(this.addr,e)}function Ix(i,e){i.uniform4uiv(this.addr,e)}function Dx(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fd,r[o])}function Ux(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gd,r[o])}function Ox(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_d,r[o])}function Fx(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||md,r[o])}function Vx(i){switch(i){case 5126:return xx;case 35664:return yx;case 35665:return Mx;case 35666:return Sx;case 35674:return Tx;case 35675:return Ex;case 35676:return Ax;case 5124:case 35670:return Nx;case 35667:case 35671:return bx;case 35668:case 35672:return wx;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Lx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vx(t.type)}}class Bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vx(t.type)}}class Hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function Gx(i,e,t){const n=i.name,s=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),o=Qa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zu(t,l===void 0?new zx(a,i,e):new Bx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Hx(a),zu(t,h)),t=h}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Gx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Bu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const kx=37297;let Wx=0;function Xx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qx(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===Uo&&t===Do?n="LinearDisplayP3ToLinearSRGB":e===Do&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case Wn:case Qo:return[n,"LinearTransferOETF"];case Jn:case jc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xx(i.getShaderSource(e),o)}else return s}function Yx(i,e){const t=qx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jx(i,e){let t;switch(e){case Vh:t="Linear";break;case zh:t="Reinhard";break;case Bh:t="OptimizedCineon";break;case Hh:t="ACESFilmic";break;case Gh:t="AgX";break;case Km:t="Neutral";break;case $m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Kx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function Gu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(Jx,ey)}const Qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ey(i,e){let t=$e[e];if(t===void 0){const n=Qx.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(ty,ny)}function ny(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ry(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function oy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ym:e="ENVMAP_BLENDING_MIX";break;case jm:e="ENVMAP_BLENDING_ADD";break}return e}function ay(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=iy(t),l=sy(t),u=ry(t),h=oy(t),d=ay(t),m=$x(t),_=Kx(r),v=s.createProgram();let p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(p=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?$e.tonemapping_pars_fragment:"",t.toneMapping!==ni?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Cc(o),o=Gu(o,t),o=ku(o,t),a=Cc(a),a=Gu(a,t),a=ku(a,t),o=Wu(o),a=Wu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+p+o,R=b+f+a,F=Bu(s,s.VERTEX_SHADER,y),C=Bu(s,s.FRAGMENT_SHADER,R);s.attachShader(v,F),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(B){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(F).trim(),te=s.getShaderInfoLog(C).trim();let Q=!0,oe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,C);else{const ce=Hu(s,F,"vertex"),Y=Hu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Z+`
`+ce+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(I===""||te==="")&&(oe=!1);oe&&(B.diagnostics={runnable:Q,programLog:Z,vertexShader:{log:I,prefix:p},fragmentShader:{log:te,prefix:f}})}s.deleteShader(F),s.deleteShader(C),z=new Co(s,v),T=Zx(s,v)}let z;this.getUniforms=function(){return z===void 0&&A(this),z};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,kx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=C,this}let ly=0;class uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hy(e),t.set(e,n)),n}}class hy{constructor(e){this.id=ly++,this.code=e,this.usedTimes=0}}function dy(i,e,t,n,s,r,o){const a=new rd,c=new uy,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function p(T,M,B,Z,I){const te=Z.fog,Q=I.geometry,oe=T.isMeshStandardMaterial?Z.environment:null,ce=(T.isMeshStandardMaterial?t:e).get(T.envMap||oe),Y=ce&&ce.mapping===Jo?ce.image.height:null,ue=_[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const le=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ne=le!==void 0?le.length:0;let Ze=0;Q.morphAttributes.position!==void 0&&(Ze=1),Q.morphAttributes.normal!==void 0&&(Ze=2),Q.morphAttributes.color!==void 0&&(Ze=3);let dt,j,he,Me;if(ue){const jt=li[ue];dt=jt.vertexShader,j=jt.fragmentShader}else dt=T.vertexShader,j=T.fragmentShader,c.update(T),he=c.getVertexShaderID(T),Me=c.getFragmentShaderID(T);const ve=i.getRenderTarget(),He=I.isInstancedMesh===!0,We=I.isBatchedMesh===!0,Qe=!!T.map,V=!!T.matcap,Ke=!!ce,Ue=!!T.aoMap,Rt=!!T.lightMap,Fe=!!T.bumpMap,lt=!!T.normalMap,E=!!T.displacementMap,x=!!T.emissiveMap,q=!!T.metalnessMap,ee=!!T.roughnessMap,ne=T.anisotropy>0,ie=T.clearcoat>0,Pe=T.iridescence>0,ae=T.sheen>0,Ce=T.transmission>0,Ie=ne&&!!T.anisotropyMap,fe=ie&&!!T.clearcoatMap,xe=ie&&!!T.clearcoatNormalMap,ze=ie&&!!T.clearcoatRoughnessMap,Te=Pe&&!!T.iridescenceMap,Ee=Pe&&!!T.iridescenceThicknessMap,et=ae&&!!T.sheenColorMap,nt=ae&&!!T.sheenRoughnessMap,at=!!T.specularMap,rt=!!T.specularColorMap,ct=!!T.specularIntensityMap,we=Ce&&!!T.transmissionMap,g=Ce&&!!T.thicknessMap,G=!!T.gradientMap,K=!!T.alphaMap,de=T.alphaTest>0,ye=!!T.alphaHash,it=!!T.extensions;let Je=ni;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Je=i.toneMapping);const Et={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:j,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:We,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Wn,alphaToCoverage:!!T.alphaToCoverage,map:Qe,matcap:V,envMap:Ke,envMapMode:Ke&&ce.mapping,envMapCubeUVHeight:Y,aoMap:Ue,lightMap:Rt,bumpMap:Fe,normalMap:lt,displacementMap:d&&E,emissiveMap:x,normalMapObjectSpace:lt&&T.normalMapType===Jh,normalMapTangentSpace:lt&&T.normalMapType===xs,metalnessMap:q,roughnessMap:ee,anisotropy:ne,anisotropyMap:Ie,clearcoat:ie,clearcoatMap:fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:ze,iridescence:Pe,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ae,sheenColorMap:et,sheenRoughnessMap:nt,specularMap:at,specularColorMap:rt,specularIntensityMap:ct,transmission:Ce,transmissionMap:we,thicknessMap:g,gradientMap:G,opaque:T.transparent===!1&&T.blending===Js&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:ye,combine:T.combine,mapUv:Qe&&v(T.map.channel),aoMapUv:Ue&&v(T.aoMap.channel),lightMapUv:Rt&&v(T.lightMap.channel),bumpMapUv:Fe&&v(T.bumpMap.channel),normalMapUv:lt&&v(T.normalMap.channel),displacementMapUv:E&&v(T.displacementMap.channel),emissiveMapUv:x&&v(T.emissiveMap.channel),metalnessMapUv:q&&v(T.metalnessMap.channel),roughnessMapUv:ee&&v(T.roughnessMap.channel),anisotropyMapUv:Ie&&v(T.anisotropyMap.channel),clearcoatMapUv:fe&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:nt&&v(T.sheenRoughnessMap.channel),specularMapUv:at&&v(T.specularMap.channel),specularColorMapUv:rt&&v(T.specularColorMap.channel),specularIntensityMapUv:ct&&v(T.specularIntensityMap.channel),transmissionMapUv:we&&v(T.transmissionMap.channel),thicknessMapUv:g&&v(T.thicknessMap.channel),alphaMapUv:K&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(lt||ne),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Q.attributes.uv&&(Qe||K),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Qe&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===St,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ri,flipSided:T.side===xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:it&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:it&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)M.push(B),M.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(b(M,T),y(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),T.push(a.mask)}function R(T){const M=_[T.type];let B;if(M){const Z=li[M];B=$g.clone(Z.uniforms)}else B=T.uniforms;return B}function F(T,M){let B;for(let Z=0,I=u.length;Z<I;Z++){const te=u[Z];if(te.cacheKey===M){B=te,++B.usedTimes;break}}return B===void 0&&(B=new cy(i,M,T,r),u.push(B)),B}function C(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function A(T){c.remove(T)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:R,acquireProgram:F,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:z}}function fy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function py(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,m,_,v,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function a(h,d,m,_,v,p){const f=o(h,d,m,_,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,_,v,p){const f=o(h,d,m,_,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||py),n.length>1&&n.sort(d||qu),s.length>1&&s.sort(d||qu)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function my(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yu,i.set(n,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function _y(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vy=0;function xy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yy(i){const e=new gy,t=_y(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Nt,o=new Nt;function a(l,u){let h=0,d=0,m=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let _=0,v=0,p=0,f=0,b=0,y=0,R=0,F=0,C=0,A=0,z=0;l.sort(xy);const T=u===!0?Math.PI:1;for(let B=0,Z=l.length;B<Z;B++){const I=l[B],te=I.color,Q=I.intensity,oe=I.distance,ce=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=te.r*Q*T,d+=te.g*Q*T,m+=te.b*Q*T;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],Q);z++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const ue=I.shadow,le=t.get(I);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.directionalShadow[_]=le,n.directionalShadowMap[_]=ce,n.directionalShadowMatrix[_]=I.shadow.matrix,y++}n.directional[_]=Y,_++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(te).multiplyScalar(Q*T),Y.distance=oe,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[p]=Y;const ue=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ue.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[p]=ue.matrix,I.castShadow){const le=t.get(I);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.spotShadow[p]=le,n.spotShadowMap[p]=ce,F++}p++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(te).multiplyScalar(Q),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=Y,f++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ue=I.shadow,le=t.get(I);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,le.shadowCameraNear=ue.camera.near,le.shadowCameraFar=ue.camera.far,n.pointShadow[v]=le,n.pointShadowMap[v]=ce,n.pointShadowMatrix[v]=I.shadow.matrix,R++}n.point[v]=Y,v++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(Q*T),Y.groundColor.copy(I.groundColor).multiplyScalar(Q*T),n.hemi[b]=Y,b++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const M=n.hash;(M.directionalLength!==_||M.pointLength!==v||M.spotLength!==p||M.rectAreaLength!==f||M.hemiLength!==b||M.numDirectionalShadows!==y||M.numPointShadows!==R||M.numSpotShadows!==F||M.numSpotMaps!==C||M.numLightProbes!==z)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=f,n.point.length=v,n.hemi.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=F+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=z,M.directionalLength=_,M.pointLength=v,M.spotLength=p,M.rectAreaLength=f,M.hemiLength=b,M.numDirectionalShadows=y,M.numPointShadows=R,M.numSpotShadows=F,M.numSpotMaps=C,M.numLightProbes=z,n.version=vy++)}function c(l,u){let h=0,d=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const y=l[f];if(y.isDirectionalLight){const R=n.directional[h];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),h++}else if(y.isSpotLight){const R=n.spot[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const R=n.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const R=n.point[d];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const R=n.hemi[v];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function ju(i){const e=new yy(i),t=[],n=[];function s(){t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function My(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ju(i),e.set(s,[a])):r>=o.length?(a=new ju(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Sy extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ty extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ny(i,e,t){let n=new el;const s=new Se,r=new Se,o=new ot,a=new Sy({depthPacking:lg}),c=new Ty,l={},u=t.maxTextureSize,h={[Zi]:xn,[xn]:Zi,[Ri]:Ri},d=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ey,fragmentShader:Ay}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new ts;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ti(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let f=this.type;this.render=function(C,A,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending($i),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const I=f!==Ei&&this.type===Ei,te=f===Ei&&this.type!==Ei;for(let Q=0,oe=C.length;Q<oe;Q++){const ce=C[Q],Y=ce.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ue=Y.getFrameExtents();if(s.multiply(ue),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y)),Y.map===null||I===!0||te===!0){const Ne=this.type!==Ei?{minFilter:un,magFilter:un}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ys(s.x,s.y,Ne),Y.map.texture.name=ce.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const le=Y.getViewportCount();for(let Ne=0;Ne<le;Ne++){const Ze=Y.getViewport(Ne);o.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),Z.viewport(o),Y.updateMatrices(ce,Ne),n=Y.getFrustum(),R(A,z,Y.camera,ce,this.type)}Y.isPointLightShadow!==!0&&this.type===Ei&&b(Y,z),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(T,M,B)};function b(C,A){const z=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ys(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,z,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,z,m,v,null)}function y(C,A,z,T){let M=null;const B=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)M=B;else if(M=z.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Z=M.uuid,I=A.uuid;let te=l[Z];te===void 0&&(te={},l[Z]=te);let Q=te[I];Q===void 0&&(Q=M.clone(),te[I]=Q,A.addEventListener("dispose",F)),M=Q}if(M.visible=A.visible,M.wireframe=A.wireframe,T===Ei?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=i.properties.get(M);Z.light=z}return M}function R(C,A,z,T,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ei)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const I=e.update(C),te=C.material;if(Array.isArray(te)){const Q=I.groups;for(let oe=0,ce=Q.length;oe<ce;oe++){const Y=Q[oe],ue=te[Y.materialIndex];if(ue&&ue.visible){const le=y(C,ue,T,M);C.onBeforeShadow(i,C,A,z,I,le,Y),i.renderBufferDirect(z,null,I,le,C,Y),C.onAfterShadow(i,C,A,z,I,le,Y)}}}else if(te.visible){const Q=y(C,te,T,M);C.onBeforeShadow(i,C,A,z,I,Q,null),i.renderBufferDirect(z,null,I,Q,C,null),C.onAfterShadow(i,C,A,z,I,Q,null)}}const Z=C.children;for(let I=0,te=Z.length;I<te;I++)R(Z[I],A,z,T,M)}function F(C){C.target.removeEventListener("dispose",F);for(const z in l){const T=l[z],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function by(i){function e(){let g=!1;const G=new ot;let K=null;const de=new ot(0,0,0,0);return{setMask:function(ye){K!==ye&&!g&&(i.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){g=ye},setClear:function(ye,it,Je,Et,jt){jt===!0&&(ye*=Et,it*=Et,Je*=Et),G.set(ye,it,Je,Et),de.equals(G)===!1&&(i.clearColor(ye,it,Je,Et),de.copy(G))},reset:function(){g=!1,K=null,de.set(-1,0,0,0)}}}function t(){let g=!1,G=null,K=null,de=null;return{setTest:function(ye){ye?Me(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ye){G!==ye&&!g&&(i.depthMask(ye),G=ye)},setFunc:function(ye){if(K!==ye){switch(ye){case Bm:i.depthFunc(i.NEVER);break;case Hm:i.depthFunc(i.ALWAYS);break;case Gm:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case km:i.depthFunc(i.EQUAL);break;case Wm:i.depthFunc(i.GEQUAL);break;case Xm:i.depthFunc(i.GREATER);break;case qm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ye}},setLocked:function(ye){g=ye},setClear:function(ye){de!==ye&&(i.clearDepth(ye),de=ye)},reset:function(){g=!1,G=null,K=null,de=null}}}function n(){let g=!1,G=null,K=null,de=null,ye=null,it=null,Je=null,Et=null,jt=null;return{setTest:function(mt){g||(mt?Me(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(mt){G!==mt&&!g&&(i.stencilMask(mt),G=mt)},setFunc:function(mt,Ut,Ot){(K!==mt||de!==Ut||ye!==Ot)&&(i.stencilFunc(mt,Ut,Ot),K=mt,de=Ut,ye=Ot)},setOp:function(mt,Ut,Ot){(it!==mt||Je!==Ut||Et!==Ot)&&(i.stencilOp(mt,Ut,Ot),it=mt,Je=Ut,Et=Ot)},setLocked:function(mt){g=mt},setClear:function(mt){jt!==mt&&(i.clearStencil(mt),jt=mt)},reset:function(){g=!1,G=null,K=null,de=null,ye=null,it=null,Je=null,Et=null,jt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],m=null,_=!1,v=null,p=null,f=null,b=null,y=null,R=null,F=null,C=new Ve(0,0,0),A=0,z=!1,T=null,M=null,B=null,Z=null,I=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ce)[1]),Q=oe>=1):ce.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),Q=oe>=2);let Y=null,ue={};const le=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ze=new ot().fromArray(le),dt=new ot().fromArray(Ne);function j(g,G,K,de){const ye=new Uint8Array(4),it=i.createTexture();i.bindTexture(g,it),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<K;Je++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(G+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return it}const he={};he[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),r.setFunc(Po),Fe(!1),lt(Cl),Me(i.CULL_FACE),Ue($i);function Me(g){l[g]!==!0&&(i.enable(g),l[g]=!0)}function ve(g){l[g]!==!1&&(i.disable(g),l[g]=!1)}function He(g,G){return u[g]!==G?(i.bindFramebuffer(g,G),u[g]=G,g===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=G),g===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=G),!0):!1}function We(g,G){let K=d,de=!1;if(g){K=h.get(G),K===void 0&&(K=[],h.set(G,K));const ye=g.textures;if(K.length!==ye.length||K[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Je=ye.length;it<Je;it++)K[it]=i.COLOR_ATTACHMENT0+it;K.length=ye.length,de=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,de=!0);de&&i.drawBuffers(K)}function Qe(g){return m!==g?(i.useProgram(g),m=g,!0):!1}const V={[ps]:i.FUNC_ADD,[Tm]:i.FUNC_SUBTRACT,[Em]:i.FUNC_REVERSE_SUBTRACT};V[Am]=i.MIN,V[Nm]=i.MAX;const Ke={[bm]:i.ZERO,[wm]:i.ONE,[Rm]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[Um]:i.SRC_ALPHA_SATURATE,[Im]:i.DST_COLOR,[Lm]:i.DST_ALPHA,[Cm]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[Dm]:i.ONE_MINUS_DST_COLOR,[Pm]:i.ONE_MINUS_DST_ALPHA,[Om]:i.CONSTANT_COLOR,[Fm]:i.ONE_MINUS_CONSTANT_COLOR,[Vm]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(g,G,K,de,ye,it,Je,Et,jt,mt){if(g===$i){_===!0&&(ve(i.BLEND),_=!1);return}if(_===!1&&(Me(i.BLEND),_=!0),g!==Sm){if(g!==v||mt!==z){if((p!==ps||y!==ps)&&(i.blendEquation(i.FUNC_ADD),p=ps,y=ps),mt)switch(g){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}f=null,b=null,R=null,F=null,C.set(0,0,0),A=0,v=g,z=mt}return}ye=ye||G,it=it||K,Je=Je||de,(G!==p||ye!==y)&&(i.blendEquationSeparate(V[G],V[ye]),p=G,y=ye),(K!==f||de!==b||it!==R||Je!==F)&&(i.blendFuncSeparate(Ke[K],Ke[de],Ke[it],Ke[Je]),f=K,b=de,R=it,F=Je),(Et.equals(C)===!1||jt!==A)&&(i.blendColor(Et.r,Et.g,Et.b,jt),C.copy(Et),A=jt),v=g,z=!1}function Rt(g,G){g.side===Ri?ve(i.CULL_FACE):Me(i.CULL_FACE);let K=g.side===xn;G&&(K=!K),Fe(K),g.blending===Js&&g.transparent===!1?Ue($i):Ue(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),r.setFunc(g.depthFunc),r.setTest(g.depthTest),r.setMask(g.depthWrite),s.setMask(g.colorWrite);const de=g.stencilWrite;o.setTest(de),de&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),x(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(g){T!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),T=g)}function lt(g){g!==xm?(Me(i.CULL_FACE),g!==M&&(g===Cl?i.cullFace(i.BACK):g===ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),M=g}function E(g){g!==B&&(Q&&i.lineWidth(g),B=g)}function x(g,G,K){g?(Me(i.POLYGON_OFFSET_FILL),(Z!==G||I!==K)&&(i.polygonOffset(G,K),Z=G,I=K)):ve(i.POLYGON_OFFSET_FILL)}function q(g){g?Me(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ee(g){g===void 0&&(g=i.TEXTURE0+te-1),Y!==g&&(i.activeTexture(g),Y=g)}function ne(g,G,K){K===void 0&&(Y===null?K=i.TEXTURE0+te-1:K=Y);let de=ue[K];de===void 0&&(de={type:void 0,texture:void 0},ue[K]=de),(de.type!==g||de.texture!==G)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(g,G||he[g]),de.type=g,de.texture=G)}function ie(){const g=ue[Y];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function nt(g){Ze.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),Ze.copy(g))}function at(g){dt.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),dt.copy(g))}function rt(g,G){let K=c.get(G);K===void 0&&(K=new WeakMap,c.set(G,K));let de=K.get(g);de===void 0&&(de=i.getUniformBlockIndex(G,g.name),K.set(g,de))}function ct(g,G){const de=c.get(G).get(g);a.get(G)!==de&&(i.uniformBlockBinding(G,de,g.__bindingPointIndex),a.set(G,de))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,ue={},u={},h=new WeakMap,d=[],m=null,_=!1,v=null,p=null,f=null,b=null,y=null,R=null,F=null,C=new Ve(0,0,0),A=0,z=!1,T=null,M=null,B=null,Z=null,I=null,Ze.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Me,disable:ve,bindFramebuffer:He,drawBuffers:We,useProgram:Qe,setBlending:Ue,setMaterial:Rt,setFlipSided:Fe,setCullFace:lt,setLineWidth:E,setPolygonOffset:x,setScissorTest:q,activeTexture:ee,bindTexture:ne,unbindTexture:ie,compressedTexImage2D:Pe,compressedTexImage3D:ae,texImage2D:Ee,texImage3D:et,updateUBOMapping:rt,uniformBlockBinding:ct,texStorage2D:ze,texStorage3D:Te,texSubImage2D:Ce,texSubImage3D:Ie,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:nt,viewport:at,reset:we}}function wy(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return m?new OffscreenCanvas(E,x):Fo("canvas")}function v(E,x,q){let ee=1;const ne=lt(E);if((ne.width>q||ne.height>q)&&(ee=q/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ie=Math.floor(ee*ne.width),Pe=Math.floor(ee*ne.height);h===void 0&&(h=_(ie,Pe));const ae=x?_(ie,Pe):h;return ae.width=ie,ae.height=Pe,ae.getContext("2d").drawImage(E,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ie+"x"+Pe+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==un&&E.minFilter!==Qn}function f(E){i.generateMipmap(E)}function b(E,x,q,ee,ne=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=x;if(x===i.RED&&(q===i.FLOAT&&(ie=i.R32F),q===i.HALF_FLOAT&&(ie=i.R16F),q===i.UNSIGNED_BYTE&&(ie=i.R8)),x===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.R8UI),q===i.UNSIGNED_SHORT&&(ie=i.R16UI),q===i.UNSIGNED_INT&&(ie=i.R32UI),q===i.BYTE&&(ie=i.R8I),q===i.SHORT&&(ie=i.R16I),q===i.INT&&(ie=i.R32I)),x===i.RG&&(q===i.FLOAT&&(ie=i.RG32F),q===i.HALF_FLOAT&&(ie=i.RG16F),q===i.UNSIGNED_BYTE&&(ie=i.RG8)),x===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RG8UI),q===i.UNSIGNED_SHORT&&(ie=i.RG16UI),q===i.UNSIGNED_INT&&(ie=i.RG32UI),q===i.BYTE&&(ie=i.RG8I),q===i.SHORT&&(ie=i.RG16I),q===i.INT&&(ie=i.RG32I)),x===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),x===i.RGBA){const Pe=ne?Io:gt.getTransfer(ee);q===i.FLOAT&&(ie=i.RGBA32F),q===i.HALF_FLOAT&&(ie=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ie=Pe===St?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Qn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){const x=E.target;x.removeEventListener("dispose",R),C(x),x.isVideoTexture&&u.delete(x)}function F(E){const x=E.target;x.removeEventListener("dispose",F),z(x)}function C(E){const x=n.get(E);if(x.__webglInit===void 0)return;const q=E.source,ee=d.get(q);if(ee){const ne=ee[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(E),Object.keys(ee).length===0&&d.delete(q)}n.remove(E)}function A(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const q=E.source,ee=d.get(q);delete ee[x.__cacheKey],o.memory.textures--}function z(E){const x=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let ne=0;ne<x.__webglFramebuffer[ee].length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[ee][ne]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const q=E.textures;for(let ee=0,ne=q.length;ee<ne;ee++){const ie=n.get(q[ee]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(q[ee])}n.remove(E)}let T=0;function M(){T=0}function B(){const E=T;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),T+=1,E}function Z(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function I(E,x){const q=n.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&q.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(q,E,x);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+x)}function te(E,x){const q=n.get(E);if(E.version>0&&q.__version!==E.version){Ze(q,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+x)}function Q(E,x){const q=n.get(E);if(E.version>0&&q.__version!==E.version){Ze(q,E,x);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+x)}function oe(E,x){const q=n.get(E);if(E.version>0&&q.__version!==E.version){dt(q,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+x)}const ce={[bc]:i.REPEAT,[_s]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},Y={[un]:i.NEAREST,[Zm]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ue={[ug]:i.NEVER,[mg]:i.ALWAYS,[Qh]:i.LESS,[ed]:i.LEQUAL,[hg]:i.EQUAL,[pg]:i.GEQUAL,[dg]:i.GREATER,[fg]:i.NOTEQUAL};function le(E,x){if(x.type===Li&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qn||x.magFilter===Ea||x.magFilter===no||x.magFilter===Yi||x.minFilter===Qn||x.minFilter===Ea||x.minFilter===no||x.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ce[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Y[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Y[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===un||x.minFilter!==no&&x.minFilter!==Yi||x.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ne(E,x){let q=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const ee=x.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const ie=Z(x);if(ie!==E.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[ie].usedTimes++;const Pe=ne[E.__cacheKey];Pe!==void 0&&(ne[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(x)),E.__cacheKey=ie,E.__webglTexture=ne[ie].texture}return q}function Ze(E,x,q){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);const ne=Ne(E,x),ie=x.source;t.bindTexture(ee,E.__webglTexture,i.TEXTURE0+q);const Pe=n.get(ie);if(ie.version!==Pe.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);const ae=gt.getPrimaries(gt.workingColorSpace),Ce=x.colorSpace===Ci?null:gt.getPrimaries(x.colorSpace),Ie=x.colorSpace===Ci||ae===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let fe=v(x.image,!1,s.maxTextureSize);fe=Fe(x,fe);const xe=r.convert(x.format,x.colorSpace),ze=r.convert(x.type);let Te=b(x.internalFormat,xe,ze,x.colorSpace,x.isVideoTexture);le(ee,x);let Ee;const et=x.mipmaps,nt=x.isVideoTexture!==!0&&Te!==Zh,at=Pe.__version===void 0||ne===!0,rt=ie.dataReady,ct=y(x,fe);if(x.isDepthTexture)Te=i.DEPTH_COMPONENT16,x.type===Li?Te=i.DEPTH_COMPONENT32F:x.type===cr?Te=i.DEPTH_COMPONENT24:x.type===Yr&&(Te=i.DEPTH24_STENCIL8),at&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,xe,ze,null));else if(x.isDataTexture)if(et.length>0){nt&&at&&t.texStorage2D(i.TEXTURE_2D,ct,Te,et[0].width,et[0].height);for(let we=0,g=et.length;we<g;we++)Ee=et[we],nt?rt&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ee.width,Ee.height,xe,ze,Ee.data):t.texImage2D(i.TEXTURE_2D,we,Te,Ee.width,Ee.height,0,xe,ze,Ee.data);x.generateMipmaps=!1}else nt?(at&&t.texStorage2D(i.TEXTURE_2D,ct,Te,fe.width,fe.height),rt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,ze,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,xe,ze,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){nt&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Te,et[0].width,et[0].height,fe.depth);for(let we=0,g=et.length;we<g;we++)Ee=et[we],x.format!==di?xe!==null?nt?rt&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ee.width,Ee.height,fe.depth,xe,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Te,Ee.width,Ee.height,fe.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?rt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ee.width,Ee.height,fe.depth,xe,ze,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Te,Ee.width,Ee.height,fe.depth,0,xe,ze,Ee.data)}else{nt&&at&&t.texStorage2D(i.TEXTURE_2D,ct,Te,et[0].width,et[0].height);for(let we=0,g=et.length;we<g;we++)Ee=et[we],x.format!==di?xe!==null?nt?rt&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?rt&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ee.width,Ee.height,xe,ze,Ee.data):t.texImage2D(i.TEXTURE_2D,we,Te,Ee.width,Ee.height,0,xe,ze,Ee.data)}else if(x.isDataArrayTexture)nt?(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Te,fe.width,fe.height,fe.depth),rt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,ze,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,xe,ze,fe.data);else if(x.isData3DTexture)nt?(at&&t.texStorage3D(i.TEXTURE_3D,ct,Te,fe.width,fe.height,fe.depth),rt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,ze,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,xe,ze,fe.data);else if(x.isFramebufferTexture){if(at)if(nt)t.texStorage2D(i.TEXTURE_2D,ct,Te,fe.width,fe.height);else{let we=fe.width,g=fe.height;for(let G=0;G<ct;G++)t.texImage2D(i.TEXTURE_2D,G,Te,we,g,0,xe,ze,null),we>>=1,g>>=1}}else if(et.length>0){if(nt&&at){const we=lt(et[0]);t.texStorage2D(i.TEXTURE_2D,ct,Te,we.width,we.height)}for(let we=0,g=et.length;we<g;we++)Ee=et[we],nt?rt&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,xe,ze,Ee):t.texImage2D(i.TEXTURE_2D,we,Te,xe,ze,Ee);x.generateMipmaps=!1}else if(nt){if(at){const we=lt(fe);t.texStorage2D(i.TEXTURE_2D,ct,Te,we.width,we.height)}rt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,ze,fe)}else t.texImage2D(i.TEXTURE_2D,0,Te,xe,ze,fe);p(x)&&f(ee),Pe.__version=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function dt(E,x,q){if(x.image.length!==6)return;const ee=Ne(E,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+q);const ie=n.get(ne);if(ne.version!==ie.__version||ee===!0){t.activeTexture(i.TEXTURE0+q);const Pe=gt.getPrimaries(gt.workingColorSpace),ae=x.colorSpace===Ci?null:gt.getPrimaries(x.colorSpace),Ce=x.colorSpace===Ci||Pe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let g=0;g<6;g++)!Ie&&!fe?xe[g]=v(x.image[g],!0,s.maxCubemapSize):xe[g]=fe?x.image[g].image:x.image[g],xe[g]=Fe(x,xe[g]);const ze=xe[0],Te=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),et=b(x.internalFormat,Te,Ee,x.colorSpace),nt=x.isVideoTexture!==!0,at=ie.__version===void 0||ee===!0,rt=ne.dataReady;let ct=y(x,ze);le(i.TEXTURE_CUBE_MAP,x);let we;if(Ie){nt&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,et,ze.width,ze.height);for(let g=0;g<6;g++){we=xe[g].mipmaps;for(let G=0;G<we.length;G++){const K=we[G];x.format!==di?Te!==null?nt?rt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,0,0,K.width,K.height,Te,K.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,et,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,0,0,K.width,K.height,Te,Ee,K.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,et,K.width,K.height,0,Te,Ee,K.data)}}}else{if(we=x.mipmaps,nt&&at){we.length>0&&ct++;const g=lt(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,et,g.width,g.height)}for(let g=0;g<6;g++)if(fe){nt?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,xe[g].width,xe[g].height,Te,Ee,xe[g].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,et,xe[g].width,xe[g].height,0,Te,Ee,xe[g].data);for(let G=0;G<we.length;G++){const de=we[G].image[g].image;nt?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,0,0,de.width,de.height,Te,Ee,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,et,de.width,de.height,0,Te,Ee,de.data)}}else{nt?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,Te,Ee,xe[g]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,et,Te,Ee,xe[g]);for(let G=0;G<we.length;G++){const K=we[G];nt?rt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,0,0,Te,Ee,K.image[g]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,et,Te,Ee,K.image[g])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),ie.__version=ne.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function j(E,x,q,ee,ne,ie){const Pe=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),Ce=b(q.internalFormat,Pe,ae,q.colorSpace);if(!n.get(x).__hasExternalTextures){const fe=Math.max(1,x.width>>ie),xe=Math.max(1,x.height>>ie);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,Ce,fe,xe,x.depth,0,Pe,ae,null):t.texImage2D(ne,ie,Ce,fe,xe,0,Pe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ne,n.get(q).__webglTexture,0,Ke(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ne,n.get(q).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(E,x,q){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let ee=i.DEPTH_COMPONENT24;if(q||Ue(x)){const ne=x.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Li?ee=i.DEPTH_COMPONENT32F:ne.type===cr&&(ee=i.DEPTH_COMPONENT24));const ie=Ke(x);Ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ee,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ee,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const ee=Ke(x);q&&Ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,x.width,x.height):Ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const ee=x.textures;for(let ne=0;ne<ee.length;ne++){const ie=ee[ne],Pe=r.convert(ie.format,ie.colorSpace),ae=r.convert(ie.type),Ce=b(ie.internalFormat,Pe,ae,ie.colorSpace),Ie=Ke(x);q&&Ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ce,x.width,x.height):Ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I(x.depthTexture,0);const ee=n.get(x.depthTexture).__webglTexture,ne=Ke(x);if(x.depthTexture.format===Qs)Ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===zr)Ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ve(E){const x=n.get(E),q=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Me(x.__webglFramebuffer,E)}else if(q){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=i.createRenderbuffer(),he(x.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),he(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(E,x,q){const ee=n.get(E);x!==void 0&&j(ee.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ve(E)}function We(E){const x=E.texture,q=n.get(E),ee=n.get(x);E.addEventListener("dispose",F);const ne=E.textures,ie=E.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,o.memory.textures++),ie){q.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer[ae]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)q.__webglFramebuffer[ae][Ce]=i.createFramebuffer()}else q.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)q.__webglFramebuffer[ae]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ae=0,Ce=ne.length;ae<Ce;ae++){const Ie=n.get(ne[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ue(E)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ae=0;ae<ne.length;ae++){const Ce=ne[ae];q.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ae]);const Ie=r.convert(Ce.format,Ce.colorSpace),fe=r.convert(Ce.type),xe=b(Ce.internalFormat,Ie,fe,Ce.colorSpace,E.isXRRenderTarget===!0),ze=Ke(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,q.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),he(q.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),le(i.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)j(q.__webglFramebuffer[ae][Ce],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce);else j(q.__webglFramebuffer[ae],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ae=0,Ce=ne.length;ae<Ce;ae++){const Ie=ne[ae],fe=n.get(Ie);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),le(i.TEXTURE_2D,Ie),j(q.__webglFramebuffer,E,Ie,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),p(Ie)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,ee.__webglTexture),le(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)j(q.__webglFramebuffer[Ce],E,x,i.COLOR_ATTACHMENT0,ae,Ce);else j(q.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ae,0);p(x)&&f(ae),t.unbindTexture()}E.depthBuffer&&ve(E)}function Qe(E){const x=E.textures;for(let q=0,ee=x.length;q<ee;q++){const ne=x[q];if(p(ne)){const ie=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(ne).__webglTexture;t.bindTexture(ie,Pe),f(ie),t.unbindTexture()}}}function V(E){if(E.samples>0&&Ue(E)===!1){const x=E.textures,q=E.width,ee=E.height;let ne=i.COLOR_BUFFER_BIT;const ie=[],Pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(E),Ce=x.length>1;if(Ce)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){ie.push(i.COLOR_ATTACHMENT0+Ie),E.depthBuffer&&ie.push(Pe);const fe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(fe===!1&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&ae.__isTransmissionRenderTarget!==!0&&(ne|=i.STENCIL_BUFFER_BIT)),Ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]),fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),Ce){const xe=n.get(x[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,q,ee,0,0,q,ee,ne,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ce)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const fe=n.get(x[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ke(E){return Math.min(s.maxSamples,E.samples)}function Ue(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function Fe(E,x){const q=E.colorSpace,ee=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||q!==Wn&&q!==Ci&&(gt.getTransfer(q)===St?(ee!==di||ne!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),x}function lt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=oe,this.rebindTextures=He,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ue}function Ry(i,e){function t(n,s=Ci){let r;const o=gt.getTransfer(s);if(n===Ki)return i.UNSIGNED_BYTE;if(n===qh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jm)return i.BYTE;if(n===Qm)return i.SHORT;if(n===Wh)return i.UNSIGNED_SHORT;if(n===Xh)return i.INT;if(n===cr)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Vr)return i.HALF_FLOAT;if(n===tg)return i.ALPHA;if(n===ng)return i.RGB;if(n===di)return i.RGBA;if(n===ig)return i.LUMINANCE;if(n===sg)return i.LUMINANCE_ALPHA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===rg)return i.RED;if(n===jh)return i.RED_INTEGER;if(n===og)return i.RG;if(n===$h)return i.RG_INTEGER;if(n===Kh)return i.RGBA_INTEGER;if(n===Aa||n===Na||n===ba||n===wa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zh)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Vl||n===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===Hl||n===Gl||n===kl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===$l||n===Kl||n===Zl||n===Jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===eu||n===tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ag||n===nu||n===iu||n===su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Cy extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Ui({vertexShader:Py,fragmentShader:Iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new ea(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Uy extends Fi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,_=null;const v=new Dy,p=t.getContextAttributes();let f=null,b=null;const y=[],R=[],F=new Se;let C=null;const A=new _n;A.layers.enable(1),A.viewport=new ot;const z=new _n;z.layers.enable(2),z.viewport=new ot;const T=[A,z],M=new Cy;M.layers.enable(1),M.layers.enable(2);let B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=y[j];return he===void 0&&(he=new ec,y[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=y[j];return he===void 0&&(he=new ec,y[j]=he),he.getGripSpace()},this.getHand=function(j){let he=y[j];return he===void 0&&(he=new ec,y[j]=he),he.getHandSpace()};function I(j){const he=R.indexOf(j.inputSource);if(he===-1)return;const Me=y[he];Me!==void 0&&(Me.update(j.inputSource,j.frame,l||o),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function te(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",Q);for(let j=0;j<y.length;j++){const he=R[j];he!==null&&(R[j]=null,y[j].disconnect(he))}B=null,Z=null,v.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,b=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",te),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ys(m.framebufferWidth,m.framebufferHeight,{format:di,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,Me=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?zr:Qs,Me=p.stencil?Yr:cr);const He={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ys(d.textureWidth,d.textureHeight,{format:di,type:Ki,depthTexture:new $r(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const We=e.properties.get(b);We.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Q(j){for(let he=0;he<j.removed.length;he++){const Me=j.removed[he],ve=R.indexOf(Me);ve>=0&&(R[ve]=null,y[ve].disconnect(Me))}for(let he=0;he<j.added.length;he++){const Me=j.added[he];let ve=R.indexOf(Me);if(ve===-1){for(let We=0;We<y.length;We++)if(We>=R.length){R.push(Me),ve=We;break}else if(R[We]===null){R[We]=Me,ve=We;break}if(ve===-1)break}const He=y[ve];He&&He.connect(Me)}}const oe=new L,ce=new L;function Y(j,he,Me){oe.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(ce),He=he.projectionMatrix.elements,We=Me.projectionMatrix.elements,Qe=He[14]/(He[10]-1),V=He[14]/(He[10]+1),Ke=(He[9]+1)/He[5],Ue=(He[9]-1)/He[5],Rt=(He[8]-1)/He[0],Fe=(We[8]+1)/We[0],lt=Qe*Rt,E=Qe*Fe,x=ve/(-Rt+Fe),q=x*-Rt;he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(q),j.translateZ(x),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ee=Qe+x,ne=V+x,ie=lt-q,Pe=E+(ve-q),ae=Ke*V/ne*ee,Ce=Ue*V/ne*ee;j.projectionMatrix.makePerspective(ie,Pe,ae,Ce,ee,ne),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ue(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;v.texture!==null&&(j.near=v.depthNear,j.far=v.depthFar),M.near=z.near=A.near=j.near,M.far=z.far=A.far=j.far,(B!==M.near||Z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),B=M.near,Z=M.far,A.near=B,A.far=Z,z.near=B,z.far=Z,A.updateProjectionMatrix(),z.updateProjectionMatrix(),j.updateProjectionMatrix());const he=j.parent,Me=M.cameras;ue(M,he);for(let ve=0;ve<Me.length;ve++)ue(Me[ve],he);Me.length===2?Y(M,A,z):M.projectionMatrix.copy(A.projectionMatrix),le(j,M,he)};function le(j,he,Me){Me===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ur*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null};let Ne=null;function Ze(j,he){if(u=he.getViewerPose(l||o),_=he,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ve=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let We=0;We<Me.length;We++){const Qe=Me[We];let V=null;if(m!==null)V=m.getViewport(Qe);else{const Ue=h.getViewSubImage(d,Qe);V=Ue.viewport,We===0&&(e.setRenderTargetTextures(b,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(b))}let Ke=T[We];Ke===void 0&&(Ke=new _n,Ke.layers.enable(We),Ke.viewport=new ot,T[We]=Ke),Ke.matrix.fromArray(Qe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Qe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(V.x,V.y,V.width,V.height),We===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(Ke)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")){const We=h.getDepthInformation(Me[0]);We&&We.isValid&&We.texture&&v.init(e,We,s.renderState)}}for(let Me=0;Me<y.length;Me++){const ve=R[Me],He=y[Me];ve!==null&&He!==void 0&&He.update(ve,he,l||o)}v.render(e,M),Ne&&Ne(j,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}const dt=new dd;dt.setAnimationLoop(Ze),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const us=new kn,Oy=new Nt;function Fy(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ld(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,y,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,R)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,b,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===xn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===xn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),y=b.envMap,R=b.envMapRotation;if(y&&(p.envMap.value=y,us.copy(R),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(us)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const F=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*F,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const R=y.program;n.uniformBlockBinding(b,R)}function l(b,y){let R=s[b.id];R===void 0&&(_(b),R=u(b),s[b.id]=R,b.addEventListener("dispose",p));const F=y.program;n.updateUBOMapping(b,F);const C=e.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function u(b){const y=h();b.__bindingPointIndex=y;const R=i.createBuffer(),F=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,R),R}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],R=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,A=R.length;C<A;C++){const z=Array.isArray(R[C])?R[C]:[R[C]];for(let T=0,M=z.length;T<M;T++){const B=z[T];if(m(B,C,T,F)===!0){const Z=B.__offset,I=Array.isArray(B.value)?B.value:[B.value];let te=0;for(let Q=0;Q<I.length;Q++){const oe=I[Q],ce=v(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,Z+te,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,te),te+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,y,R,F){const C=b.value,A=y+"_"+R;if(F[A]===void 0)return typeof C=="number"||typeof C=="boolean"?F[A]=C:F[A]=C.clone(),!0;{const z=F[A];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return F[A]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(b){const y=b.uniforms;let R=0;const F=16;for(let A=0,z=y.length;A<z;A++){const T=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,B=T.length;M<B;M++){const Z=T[M],I=Array.isArray(Z.value)?Z.value:[Z.value];for(let te=0,Q=I.length;te<Q;te++){const oe=I[te],ce=v(oe),Y=R%F;Y!==0&&F-Y<ce.boundary&&(R+=F-Y),Z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=ce.storage}}}const C=R%F;return C>0&&(R+=F-C),b.__size=R,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const R=o.indexOf(y.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class zy{constructor(e={}){const{canvas:t=Pg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const y=this;let R=!1,F=0,C=0,A=null,z=-1,T=null;const M=new ot,B=new ot;let Z=null;const I=new Ve(0);let te=0,Q=t.width,oe=t.height,ce=1,Y=null,ue=null;const le=new ot(0,0,Q,oe),Ne=new ot(0,0,Q,oe);let Ze=!1;const dt=new el;let j=!1,he=!1;const Me=new Nt,ve=new Se,He=new L,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return A===null?ce:1}let V=n;function Ke(S,U){const W=t.getContext(S,U);return W!==null?W:null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",de,!1),V===null){const U="webgl2";if(V=Ke(U,S),V===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ue,Rt,Fe,lt,E,x,q,ee,ne,ie,Pe,ae,Ce,Ie,fe,xe,ze,Te,Ee,et,nt,at,rt,ct;function we(){Ue=new Y0(V),Ue.init(),Rt=new H0(V,Ue,e),at=new Ry(V,Ue),Fe=new by(V),lt=new K0(V),E=new fy,x=new wy(V,Ue,Fe,E,Rt,at,lt),q=new k0(y),ee=new q0(y),ne=new n_(V),rt=new z0(V,ne),ie=new j0(V,ne,lt,rt),Pe=new J0(V,ie,ne,lt),Ee=new Z0(V,Rt,x),xe=new G0(E),ae=new dy(y,q,ee,Ue,Rt,rt,xe),Ce=new Fy(y,E),Ie=new my,fe=new My(Ue),Te=new V0(y,q,ee,Fe,Pe,d,c),ze=new Ny(y,Pe,Rt),ct=new Vy(V,lt,Rt,Fe),et=new B0(V,Ue,lt),nt=new $0(V,Ue,lt),lt.programs=ae.programs,y.capabilities=Rt,y.extensions=Ue,y.properties=E,y.renderLists=Ie,y.shadowMap=ze,y.state=Fe,y.info=lt}we();const g=new Uy(y,V);this.xr=g,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const S=Ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(S){S!==void 0&&(ce=S,this.setSize(Q,oe,!1))},this.getSize=function(S){return S.set(Q,oe)},this.setSize=function(S,U,W=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,oe=U,t.width=Math.floor(S*ce),t.height=Math.floor(U*ce),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Q*ce,oe*ce).floor()},this.setDrawingBufferSize=function(S,U,W){Q=S,oe=U,ce=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,U,W,X){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,U,W,X),Fe.viewport(M.copy(le).multiplyScalar(ce).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,U,W,X){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,U,W,X),Fe.scissor(B.copy(Ne).multiplyScalar(ce).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){Fe.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(S=!0,U=!0,W=!0){let X=0;if(S){let k=!1;if(A!==null){const _e=A.texture.format;k=_e===Kh||_e===$h||_e===jh}if(k){const _e=A.texture.type,Re=_e===Ki||_e===cr||_e===Wh||_e===Yr||_e===qh||_e===Yh,De=Te.getClearColor(),Be=Te.getClearAlpha(),Xe=De.r,Ge=De.g,qe=De.b;Re?(m[0]=Xe,m[1]=Ge,m[2]=qe,m[3]=Be,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=Xe,_[1]=Ge,_[2]=qe,_[3]=Be,V.clearBufferiv(V.COLOR,0,_))}else X|=V.COLOR_BUFFER_BIT}U&&(X|=V.DEPTH_BUFFER_BIT),W&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ie.dispose(),fe.dispose(),E.dispose(),q.dispose(),ee.dispose(),Pe.dispose(),rt.dispose(),ct.dispose(),ae.dispose(),g.dispose(),g.removeEventListener("sessionstart",Ut),g.removeEventListener("sessionend",Ot),Tn.stop()};function G(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=lt.autoReset,U=ze.enabled,W=ze.autoUpdate,X=ze.needsUpdate,k=ze.type;we(),lt.autoReset=S,ze.enabled=U,ze.autoUpdate=W,ze.needsUpdate=X,ze.type=k}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ye(S){const U=S.target;U.removeEventListener("dispose",ye),it(U)}function it(S){Je(S),E.remove(S)}function Je(S){const U=E.get(S).programs;U!==void 0&&(U.forEach(function(W){ae.releaseProgram(W)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,X,k,_e){U===null&&(U=We);const Re=k.isMesh&&k.matrixWorld.determinant()<0,De=mm(S,U,W,X,k);Fe.setMaterial(X,Re);let Be=W.index,Xe=1;if(X.wireframe===!0){if(Be=ie.getWireframeAttribute(W),Be===void 0)return;Xe=2}const Ge=W.drawRange,qe=W.attributes.position;let Pt=Ge.start*Xe,En=(Ge.start+Ge.count)*Xe;_e!==null&&(Pt=Math.max(Pt,_e.start*Xe),En=Math.min(En,(_e.start+_e.count)*Xe)),Be!==null?(Pt=Math.max(Pt,0),En=Math.min(En,Be.count)):qe!=null&&(Pt=Math.max(Pt,0),En=Math.min(En,qe.count));const $t=En-Pt;if($t<0||$t===1/0)return;rt.setup(k,X,De,W,Be);let vi,wt=et;if(Be!==null&&(vi=ne.get(Be),wt=nt,wt.setIndex(vi)),k.isMesh)X.wireframe===!0?(Fe.setLineWidth(X.wireframeLinewidth*Qe()),wt.setMode(V.LINES)):wt.setMode(V.TRIANGLES);else if(k.isLine){let je=X.linewidth;je===void 0&&(je=1),Fe.setLineWidth(je*Qe()),k.isLineSegments?wt.setMode(V.LINES):k.isLineLoop?wt.setMode(V.LINE_LOOP):wt.setMode(V.LINE_STRIP)}else k.isPoints?wt.setMode(V.POINTS):k.isSprite&&wt.setMode(V.TRIANGLES);if(k.isBatchedMesh)wt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)wt.renderInstances(Pt,$t,k.count);else if(W.isInstancedBufferGeometry){const je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ya=Math.min(W.instanceCount,je);wt.renderInstances(Pt,$t,ya)}else wt.render(Pt,$t)};function Et(S,U,W){S.transparent===!0&&S.side===Ri&&S.forceSinglePass===!1?(S.side=xn,S.needsUpdate=!0,to(S,U,W),S.side=Zi,S.needsUpdate=!0,to(S,U,W),S.side=Ri):to(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),p=fe.get(W),p.init(),b.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(y._useLegacyLights);const X=new Set;return S.traverse(function(k){const _e=k.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const De=_e[Re];Et(De,W,k),X.add(De)}else Et(_e,W,k),X.add(_e)}),b.pop(),p=null,X},this.compileAsync=function(S,U,W=null){const X=this.compile(S,U,W);return new Promise(k=>{function _e(){if(X.forEach(function(Re){E.get(Re).currentProgram.isReady()&&X.delete(Re)}),X.size===0){k(S);return}setTimeout(_e,10)}Ue.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let jt=null;function mt(S){jt&&jt(S)}function Ut(){Tn.stop()}function Ot(){Tn.start()}const Tn=new dd;Tn.setAnimationLoop(mt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(S){jt=S,g.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},g.addEventListener("sessionstart",Ut),g.addEventListener("sessionend",Ot),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(U),U=g.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,A),p=fe.get(S,b.length),p.init(),b.push(p),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),dt.setFromProjectionMatrix(Me),he=this.localClippingEnabled,j=xe.init(this.clippingPlanes,he),v=Ie.get(S,f.length),v.init(),f.push(v),Un(S,U,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Y,ue),this.info.render.frame++,j===!0&&xe.beginShadows();const W=p.state.shadowsArray;if(ze.render(W,S,U),j===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1)&&Te.render(v,S),p.setupLights(y._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let k=0,_e=X.length;k<_e;k++){const Re=X[k];Vi(v,S,Re,Re.viewport)}}else Vi(v,S,U);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,U),rt.resetDefaultState(),z=-1,T=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Un(S,U,W,X){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||dt.intersectsSprite(S)){X&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Me);const Re=Pe.update(S),De=S.material;De.visible&&v.push(S,Re,De,W,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||dt.intersectsObject(S))){const Re=Pe.update(S),De=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),He.copy(Re.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(Me)),Array.isArray(De)){const Be=Re.groups;for(let Xe=0,Ge=Be.length;Xe<Ge;Xe++){const qe=Be[Xe],Pt=De[qe.materialIndex];Pt&&Pt.visible&&v.push(S,Re,Pt,W,He.z,qe)}}else De.visible&&v.push(S,Re,De,W,He.z,null)}}const _e=S.children;for(let Re=0,De=_e.length;Re<De;Re++)Un(_e[Re],U,W,X)}function Vi(S,U,W,X){const k=S.opaque,_e=S.transmissive,Re=S.transparent;p.setupLightsView(W),j===!0&&xe.setGlobalState(y.clippingPlanes,W),_e.length>0&&ws(k,_e,U,W),X&&Fe.viewport(M.copy(X)),k.length>0&&is(k,U,W),_e.length>0&&is(_e,U,W),Re.length>0&&is(Re,U,W),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ws(S,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new ys(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Vr:Ki,minFilter:Yi,samples:4,stencilBuffer:r});const Xe=E.get(p.state.transmissionRenderTarget);Xe.__isTransmissionRenderTarget=!0}const _e=p.state.transmissionRenderTarget;y.getDrawingBufferSize(ve),_e.setSize(ve.x,ve.y);const Re=y.getRenderTarget();y.setRenderTarget(_e),y.getClearColor(I),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear();const De=y.toneMapping;y.toneMapping=ni,is(S,W,X),x.updateMultisampleRenderTarget(_e),x.updateRenderTargetMipmap(_e);let Be=!1;for(let Xe=0,Ge=U.length;Xe<Ge;Xe++){const qe=U[Xe],Pt=qe.object,En=qe.geometry,$t=qe.material,vi=qe.group;if($t.side===Ri&&Pt.layers.test(X.layers)){const wt=$t.side;$t.side=xn,$t.needsUpdate=!0,Al(Pt,W,X,En,$t,vi),$t.side=wt,$t.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(_e),x.updateRenderTargetMipmap(_e)),y.setRenderTarget(Re),y.setClearColor(I,te),y.toneMapping=De}function is(S,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let k=0,_e=S.length;k<_e;k++){const Re=S[k],De=Re.object,Be=Re.geometry,Xe=X===null?Re.material:X,Ge=Re.group;De.layers.test(W.layers)&&Al(De,U,W,Be,Xe,Ge)}}function Al(S,U,W,X,k,_e){S.onBeforeRender(y,U,W,X,k,_e),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,U,W,X,S,_e),k.transparent===!0&&k.side===Ri&&k.forceSinglePass===!1?(k.side=xn,k.needsUpdate=!0,y.renderBufferDirect(W,U,X,k,S,_e),k.side=Zi,k.needsUpdate=!0,y.renderBufferDirect(W,U,X,k,S,_e),k.side=Ri):y.renderBufferDirect(W,U,X,k,S,_e),S.onAfterRender(y,U,W,X,k,_e)}function to(S,U,W){U.isScene!==!0&&(U=We);const X=E.get(S),k=p.state.lights,_e=p.state.shadowsArray,Re=k.state.version,De=ae.getParameters(S,k.state,_e,U,W),Be=ae.getProgramCacheKey(De);let Xe=X.programs;X.environment=S.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(S.isMeshStandardMaterial?ee:q).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Xe===void 0&&(S.addEventListener("dispose",ye),Xe=new Map,X.programs=Xe);let Ge=Xe.get(Be);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Re)return bl(S,De),Ge}else De.uniforms=ae.getUniforms(S),S.onBuild(W,De,y),S.onBeforeCompile(De,y),Ge=ae.acquireProgram(De,Be),Xe.set(Be,Ge),X.uniforms=De.uniforms;const qe=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qe.clippingPlanes=xe.uniform),bl(S,De),X.needsLights=_m(S),X.lightsStateVersion=Re,X.needsLights&&(qe.ambientLightColor.value=k.state.ambient,qe.lightProbe.value=k.state.probe,qe.directionalLights.value=k.state.directional,qe.directionalLightShadows.value=k.state.directionalShadow,qe.spotLights.value=k.state.spot,qe.spotLightShadows.value=k.state.spotShadow,qe.rectAreaLights.value=k.state.rectArea,qe.ltc_1.value=k.state.rectAreaLTC1,qe.ltc_2.value=k.state.rectAreaLTC2,qe.pointLights.value=k.state.point,qe.pointLightShadows.value=k.state.pointShadow,qe.hemisphereLights.value=k.state.hemi,qe.directionalShadowMap.value=k.state.directionalShadowMap,qe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,qe.spotShadowMap.value=k.state.spotShadowMap,qe.spotLightMatrix.value=k.state.spotLightMatrix,qe.spotLightMap.value=k.state.spotLightMap,qe.pointShadowMap.value=k.state.pointShadowMap,qe.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function Nl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Co.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function bl(S,U){const W=E.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function mm(S,U,W,X,k){U.isScene!==!0&&(U=We),x.resetTextureUnits();const _e=U.fog,Re=X.isMeshStandardMaterial?U.environment:null,De=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wn,Be=(X.isMeshStandardMaterial?ee:q).get(X.envMap||Re),Xe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),qe=!!W.morphAttributes.position,Pt=!!W.morphAttributes.normal,En=!!W.morphAttributes.color;let $t=ni;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&($t=y.toneMapping);const vi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=vi!==void 0?vi.length:0,je=E.get(X),ya=p.state.lights;if(j===!0&&(he===!0||S!==T)){const On=S===T&&X.id===z;xe.setState(X,S,On)}let At=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ya.state.version||je.outputColorSpace!==De||k.isBatchedMesh&&je.batching===!1||!k.isBatchedMesh&&je.batching===!0||k.isInstancedMesh&&je.instancing===!1||!k.isInstancedMesh&&je.instancing===!0||k.isSkinnedMesh&&je.skinning===!1||!k.isSkinnedMesh&&je.skinning===!0||k.isInstancedMesh&&je.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&je.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&je.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&je.instancingMorph===!1&&k.morphTexture!==null||je.envMap!==Be||X.fog===!0&&je.fog!==_e||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Ge||je.morphTargets!==qe||je.morphNormals!==Pt||je.morphColors!==En||je.toneMapping!==$t||je.morphTargetsCount!==wt)&&(At=!0):(At=!0,je.__version=X.version);let ss=je.currentProgram;At===!0&&(ss=to(X,U,k));let wl=!1,Ar=!1,Ma=!1;const on=ss.getUniforms(),zi=je.uniforms;if(Fe.useProgram(ss.program)&&(wl=!0,Ar=!0,Ma=!0),X.id!==z&&(z=X.id,Ar=!0),wl||T!==S){on.setValue(V,"projectionMatrix",S.projectionMatrix),on.setValue(V,"viewMatrix",S.matrixWorldInverse);const On=on.map.cameraPosition;On!==void 0&&On.setValue(V,He.setFromMatrixPosition(S.matrixWorld)),Rt.logarithmicDepthBuffer&&on.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&on.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,Ar=!0,Ma=!0)}if(k.isSkinnedMesh){on.setOptional(V,k,"bindMatrix"),on.setOptional(V,k,"bindMatrixInverse");const On=k.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),on.setValue(V,"boneTexture",On.boneTexture,x))}k.isBatchedMesh&&(on.setOptional(V,k,"batchingTexture"),on.setValue(V,"batchingTexture",k._matricesTexture,x));const Sa=W.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0)&&Ee.update(k,W,ss),(Ar||je.receiveShadow!==k.receiveShadow)&&(je.receiveShadow=k.receiveShadow,on.setValue(V,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zi.envMap.value=Be,zi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(zi.envMapIntensity.value=U.environmentIntensity),Ar&&(on.setValue(V,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&gm(zi,Ma),_e&&X.fog===!0&&Ce.refreshFogUniforms(zi,_e),Ce.refreshMaterialUniforms(zi,X,ce,oe,p.state.transmissionRenderTarget),Co.upload(V,Nl(je),zi,x)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Co.upload(V,Nl(je),zi,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&on.setValue(V,"center",k.center),on.setValue(V,"modelViewMatrix",k.modelViewMatrix),on.setValue(V,"normalMatrix",k.normalMatrix),on.setValue(V,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const On=X.uniformsGroups;for(let Ta=0,vm=On.length;Ta<vm;Ta++){const Rl=On[Ta];ct.update(Rl,ss),ct.bind(Rl,ss)}}return ss}function gm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function _m(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,U,W){E.get(S.texture).__webglTexture=U,E.get(S.depthTexture).__webglTexture=W;const X=E.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const W=E.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){A=S,F=U,C=W;let X=!0,k=null,_e=!1,Re=!1;if(S){const Be=E.get(S);Be.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(V.FRAMEBUFFER,null),X=!1):Be.__webglFramebuffer===void 0?x.setupRenderTarget(S):Be.__hasExternalTextures&&x.rebindTextures(S,E.get(S.texture).__webglTexture,E.get(S.depthTexture).__webglTexture);const Xe=S.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const Ge=E.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[U])?k=Ge[U][W]:k=Ge[U],_e=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?k=E.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[W]:k=Ge,M.copy(S.viewport),B.copy(S.scissor),Z=S.scissorTest}else M.copy(le).multiplyScalar(ce).floor(),B.copy(Ne).multiplyScalar(ce).floor(),Z=Ze;if(Fe.bindFramebuffer(V.FRAMEBUFFER,k)&&X&&Fe.drawBuffers(S,k),Fe.viewport(M),Fe.scissor(B),Fe.setScissorTest(Z),_e){const Be=E.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+U,Be.__webglTexture,W)}else if(Re){const Be=E.get(S.texture),Xe=U||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,W||0,Xe)}z=-1},this.readRenderTargetPixels=function(S,U,W,X,k,_e,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Fe.bindFramebuffer(V.FRAMEBUFFER,De);try{const Be=S.texture,Xe=Be.format,Ge=Be.type;if(Xe!==di&&at.convert(Xe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ge===Vr&&(Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float"));if(Ge!==Ki&&at.convert(Ge)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&Ge!==Li&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-X&&W>=0&&W<=S.height-k&&V.readPixels(U,W,X,k,at.convert(Xe),at.convert(Ge),_e)}finally{const Be=A!==null?E.get(A).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(S,U,W=0){const X=Math.pow(2,-W),k=Math.floor(U.image.width*X),_e=Math.floor(U.image.height*X);x.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,W,0,0,S.x,S.y,k,_e),Fe.unbindTexture()},this.copyTextureToTexture=function(S,U,W,X=0){const k=U.image.width,_e=U.image.height,Re=at.convert(W.format),De=at.convert(W.type);x.setTexture2D(W,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,X,S.x,S.y,k,_e,Re,De,U.image.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,X,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Re,U.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,X,S.x,S.y,Re,De,U.image),X===0&&W.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,X,k=0){const _e=Math.round(S.max.x-S.min.x),Re=Math.round(S.max.y-S.min.y),De=S.max.z-S.min.z+1,Be=at.convert(X.format),Xe=at.convert(X.type);let Ge;if(X.isData3DTexture)x.setTexture3D(X,0),Ge=V.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)x.setTexture2DArray(X,0),Ge=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const qe=V.getParameter(V.UNPACK_ROW_LENGTH),Pt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),En=V.getParameter(V.UNPACK_SKIP_PIXELS),$t=V.getParameter(V.UNPACK_SKIP_ROWS),vi=V.getParameter(V.UNPACK_SKIP_IMAGES),wt=W.isCompressedTexture?W.mipmaps[k]:W.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,S.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,S.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(Ge,k,U.x,U.y,U.z,_e,Re,De,Be,Xe,wt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,k,U.x,U.y,U.z,_e,Re,De,Be,wt.data):V.texSubImage3D(Ge,k,U.x,U.y,U.z,_e,Re,De,Be,Xe,wt),V.pixelStorei(V.UNPACK_ROW_LENGTH,qe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,En),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,vi),k===0&&X.generateMipmaps&&V.generateMipmap(Ge),Fe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),Fe.unbindTexture()},this.resetState=function(){F=0,C=0,A=null,Fe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jc?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Qo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class By extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new L;class il{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new il(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hy extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Gy extends Gn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class xd extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class yd extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Md extends pn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=un,this.minFilter=un,this.generateMipmaps=!1,this.needsUpdate=!0}}class sl extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ky extends sl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wy extends Xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xy extends Xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class qy extends Xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sd extends xd{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Kr extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Yy extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tc=new Nt,$u=new L,Ku=new L;class rl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jy extends rl{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Td extends Kr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zu=new Nt,Cr=new L,nc=new L;class $y extends rl{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cr),nc.copy(n.position),nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nc),n.updateMatrixWorld(),s.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}}class Ky extends Kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zy extends rl{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ed extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Zy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ad extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jy extends vd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ju{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);const Qu={type:"change"},ic={type:"start"},eh={type:"end"},No=new sd,th=new Ai,Qy=Math.cos(70*Kc.DEG2RAD);class eM extends Fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",xe),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qu),n.update(),r=s.NONE},this.update=function(){const g=new L,G=new Ms().setFromUnitVectors(e.up,new L(0,1,0)),K=G.clone().invert(),de=new L,ye=new Ms,it=new L,Je=2*Math.PI;return function(jt=null){const mt=n.object.position;g.copy(mt).sub(n.target),g.applyQuaternion(G),a.setFromVector3(g),n.autoRotate&&r===s.NONE&&Z(M(jt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ut=n.minAzimuthAngle,Ot=n.maxAzimuthAngle;isFinite(Ut)&&isFinite(Ot)&&(Ut<-Math.PI?Ut+=Je:Ut>Math.PI&&(Ut-=Je),Ot<-Math.PI?Ot+=Je:Ot>Math.PI&&(Ot-=Je),Ut<=Ot?a.theta=Math.max(Ut,Math.min(Ot,a.theta)):a.theta=a.theta>(Ut+Ot)/2?Math.max(Ut,a.theta):Math.min(Ot,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Tn=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)a.radius=le(a.radius);else{const Un=a.radius;a.radius=le(a.radius*l),Tn=Un!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion(K),mt.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&C){let Un=null;if(n.object.isPerspectiveCamera){const Vi=g.length();Un=le(Vi*l);const ws=Vi-Un;n.object.position.addScaledVector(R,ws),n.object.updateMatrixWorld(),Tn=!!ws}else if(n.object.isOrthographicCamera){const Vi=new L(F.x,F.y,0);Vi.unproject(n.object);const ws=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Tn=ws!==n.object.zoom;const is=new L(F.x,F.y,0);is.unproject(n.object),n.object.position.sub(is).add(Vi),n.object.updateMatrixWorld(),Un=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Un!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Un).add(n.object.position):(No.origin.copy(n.object.position),No.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(No.direction))<Qy?e.lookAt(n.target):(th.setFromNormalAndCoplanarPoint(n.object.up,n.target),No.intersectPlane(th,n.target))))}else if(n.object.isOrthographicCamera){const Un=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Un!==n.object.zoom&&(n.object.updateProjectionMatrix(),Tn=!0)}return l=1,C=!1,Tn||de.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||it.distanceToSquared(n.target)>o?(n.dispatchEvent(Qu),de.copy(n.object.position),ye.copy(n.object.quaternion),it.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ee),n.domElement.removeEventListener("pointerdown",q),n.domElement.removeEventListener("pointercancel",ne),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ne),n.domElement.getRootNode().removeEventListener("keydown",Ie,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xe),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Ju,c=new Ju;let l=1;const u=new L,h=new Se,d=new Se,m=new Se,_=new Se,v=new Se,p=new Se,f=new Se,b=new Se,y=new Se,R=new L,F=new Se;let C=!1;const A=[],z={};let T=!1;function M(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function B(g){const G=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*G)}function Z(g){c.theta-=g}function I(g){c.phi-=g}const te=function(){const g=new L;return function(K,de){g.setFromMatrixColumn(de,0),g.multiplyScalar(-K),u.add(g)}}(),Q=function(){const g=new L;return function(K,de){n.screenSpacePanning===!0?g.setFromMatrixColumn(de,1):(g.setFromMatrixColumn(de,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(K),u.add(g)}}(),oe=function(){const g=new L;return function(K,de){const ye=n.domElement;if(n.object.isPerspectiveCamera){const it=n.object.position;g.copy(it).sub(n.target);let Je=g.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),te(2*K*Je/ye.clientHeight,n.object.matrix),Q(2*de*Je/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(te(K*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),Q(de*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ce(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(g,G){if(!n.zoomToCursor)return;C=!0;const K=n.domElement.getBoundingClientRect(),de=g-K.left,ye=G-K.top,it=K.width,Je=K.height;F.x=de/it*2-1,F.y=-(ye/Je)*2+1,R.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function Ne(g){h.set(g.clientX,g.clientY)}function Ze(g){ue(g.clientX,g.clientX),f.set(g.clientX,g.clientY)}function dt(g){_.set(g.clientX,g.clientY)}function j(g){d.set(g.clientX,g.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;Z(2*Math.PI*m.x/G.clientHeight),I(2*Math.PI*m.y/G.clientHeight),h.copy(d),n.update()}function he(g){b.set(g.clientX,g.clientY),y.subVectors(b,f),y.y>0?ce(B(y.y)):y.y<0&&Y(B(y.y)),f.copy(b),n.update()}function Me(g){v.set(g.clientX,g.clientY),p.subVectors(v,_).multiplyScalar(n.panSpeed),oe(p.x,p.y),_.copy(v),n.update()}function ve(g){ue(g.clientX,g.clientY),g.deltaY<0?Y(B(g.deltaY)):g.deltaY>0&&ce(B(g.deltaY)),n.update()}function He(g){let G=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(-n.keyPanSpeed,0),G=!0;break}G&&(g.preventDefault(),n.update())}function We(g){if(A.length===1)h.set(g.pageX,g.pageY);else{const G=ct(g),K=.5*(g.pageX+G.x),de=.5*(g.pageY+G.y);h.set(K,de)}}function Qe(g){if(A.length===1)_.set(g.pageX,g.pageY);else{const G=ct(g),K=.5*(g.pageX+G.x),de=.5*(g.pageY+G.y);_.set(K,de)}}function V(g){const G=ct(g),K=g.pageX-G.x,de=g.pageY-G.y,ye=Math.sqrt(K*K+de*de);f.set(0,ye)}function Ke(g){n.enableZoom&&V(g),n.enablePan&&Qe(g)}function Ue(g){n.enableZoom&&V(g),n.enableRotate&&We(g)}function Rt(g){if(A.length==1)d.set(g.pageX,g.pageY);else{const K=ct(g),de=.5*(g.pageX+K.x),ye=.5*(g.pageY+K.y);d.set(de,ye)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;Z(2*Math.PI*m.x/G.clientHeight),I(2*Math.PI*m.y/G.clientHeight),h.copy(d)}function Fe(g){if(A.length===1)v.set(g.pageX,g.pageY);else{const G=ct(g),K=.5*(g.pageX+G.x),de=.5*(g.pageY+G.y);v.set(K,de)}p.subVectors(v,_).multiplyScalar(n.panSpeed),oe(p.x,p.y),_.copy(v)}function lt(g){const G=ct(g),K=g.pageX-G.x,de=g.pageY-G.y,ye=Math.sqrt(K*K+de*de);b.set(0,ye),y.set(0,Math.pow(b.y/f.y,n.zoomSpeed)),ce(y.y),f.copy(b);const it=(g.pageX+G.x)*.5,Je=(g.pageY+G.y)*.5;ue(it,Je)}function E(g){n.enableZoom&&lt(g),n.enablePan&&Fe(g)}function x(g){n.enableZoom&&lt(g),n.enableRotate&&Rt(g)}function q(g){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",ne)),!at(g)&&(et(g),g.pointerType==="touch"?ze(g):ie(g)))}function ee(g){n.enabled!==!1&&(g.pointerType==="touch"?Te(g):Pe(g))}function ne(g){switch(nt(g),A.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ne),n.dispatchEvent(eh),r=s.NONE;break;case 1:const G=A[0],K=z[G];ze({pointerId:G,pageX:K.x,pageY:K.y});break}}function ie(g){let G;switch(g.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Rs.DOLLY:if(n.enableZoom===!1)return;Ze(g),r=s.DOLLY;break;case Rs.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;dt(g),r=s.PAN}else{if(n.enableRotate===!1)return;Ne(g),r=s.ROTATE}break;case Rs.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;Ne(g),r=s.ROTATE}else{if(n.enablePan===!1)return;dt(g),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ic)}function Pe(g){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;j(g);break;case s.DOLLY:if(n.enableZoom===!1)return;he(g);break;case s.PAN:if(n.enablePan===!1)return;Me(g);break}}function ae(g){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(g.preventDefault(),n.dispatchEvent(ic),ve(Ce(g)),n.dispatchEvent(eh))}function Ce(g){const G=g.deltaMode,K={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(G){case 1:K.deltaY*=16;break;case 2:K.deltaY*=100;break}return g.ctrlKey&&!T&&(K.deltaY*=10),K}function Ie(g){g.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(g){g.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function xe(g){n.enabled===!1||n.enablePan===!1||He(g)}function ze(g){switch(rt(g),A.length){case 1:switch(n.touches.ONE){case Cs.ROTATE:if(n.enableRotate===!1)return;We(g),r=s.TOUCH_ROTATE;break;case Cs.PAN:if(n.enablePan===!1)return;Qe(g),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Cs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(g),r=s.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(g),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ic)}function Te(g){switch(rt(g),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Rt(g),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Fe(g),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(g),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;x(g),n.update();break;default:r=s.NONE}}function Ee(g){n.enabled!==!1&&g.preventDefault()}function et(g){A.push(g.pointerId)}function nt(g){delete z[g.pointerId];for(let G=0;G<A.length;G++)if(A[G]==g.pointerId){A.splice(G,1);return}}function at(g){for(let G=0;G<A.length;G++)if(A[G]==g.pointerId)return!0;return!1}function rt(g){let G=z[g.pointerId];G===void 0&&(G=new Se,z[g.pointerId]=G),G.set(g.pageX,g.pageY)}function ct(g){const G=g.pointerId===A[0]?A[1]:A[0];return z[G]}n.domElement.addEventListener("contextmenu",Ee),n.domElement.addEventListener("pointerdown",q),n.domElement.addEventListener("pointercancel",ne),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ie,{passive:!0,capture:!0}),this.update()}}class tM extends Td{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const nM=tM,nh={VERTEX:"vertex",FRAGMENT:"fragment"},vt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},na=["x","y","z","w"];function Nd(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of Vo(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*Vo(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function ji(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function bd(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Ve(...e):t==="vec2"?new Se(...e):t==="vec3"?new L(...e):t==="vec4"?new ot(...e):t==="mat3"?new Ye(...e):t==="mat4"?new Nt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?Rd(e[0]):null}function wd(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Rd(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const ih=new Map;let iM=0;class be extends Fi{constructor(e=null){super(),this.nodeType=e,this.updateType=vt.NONE,this.updateBeforeType=vt.NONE,this.uuid=Kc.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:iM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,vt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,vt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,vt.OBJECT)}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of Vo(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Nd(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return Vo(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function J(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(ih.has(i)){console.warn(`Redefinition of node class ${i}`);return}ih.set(i,e),e.type=i}class xt extends be{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}J("TempNode",xt);class _r extends be{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}J("ArrayElementNode",_r);class ol extends be{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}J("ConvertNode",ol);class Cd extends xt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}J("JoinNode",Cd);const sM=na.join("");class Lc extends be{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(na.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===s&&this.components===sM.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}J("SplitNode",Lc);class Ld extends xt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=na[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}J("SetNode",Ld);class ia extends be{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?ji(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=ji(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=wd(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?bd(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}J("InputNode",ia);class qn extends ia{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}J("ConstNode",qn);let dr=null;const $s=new Map;function D(i,e){if($s.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);$s.set(i,e)}const sh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Pd={setup(i,e){const t=e.shift();return i(oa(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(dr.assign(t,...n),t);if($s.has(e)){const n=$s.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&$s.has(e.slice(0,e.length-6))){const n=$s.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=sh(e),me(new Lc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=sh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>me(new Ld(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),me(new Lc(i,e));if(/^\d+$/.test(e)===!0)return me(new _r(t,new qn(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},sc=new WeakMap,rh=new WeakMap,rM=function(i,e=null){const t=ji(i);if(t==="node"){let n=sc.get(i);return n===void 0&&(n=new Proxy(i,Pd),sc.set(i,n),sc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return me(Pc(i,e));if(t==="shader")return $(i)}return i},oM=function(i,e=null){for(const t in i)i[t]=me(i[t],e);return i},aM=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=me(i[n],e);return i},cM=function(i,e=null,t=null,n=null){const s=r=>me(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...tr(r))):t!==null?(t=me(t),(...r)=>s(new i(e,...tr(r),t))):(...r)=>s(new i(e,...tr(r)))},lM=function(i,...e){return me(new i(...tr(e)))};class uM extends be{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=rh.get(e.constructor);o===void 0&&(o=new WeakMap,rh.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=me(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),me(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return me(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class hM extends be{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return oa(e),me(new uM(this,e))}setup(){return this.call()}}const dM=[!1,!0],fM=[0,1,2,3],pM=[-1,-2],Id=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],al=new Map;for(const i of dM)al.set(i,new qn(i));const cl=new Map;for(const i of fM)cl.set(i,new qn(i,"uint"));const ll=new Map([...cl].map(i=>new qn(i.value,"int")));for(const i of pM)ll.set(i,new qn(i,"int"));const sa=new Map([...ll].map(i=>new qn(i.value)));for(const i of Id)sa.set(i,new qn(i));for(const i of Id)sa.set(-i,new qn(-i));const ra={bool:al,uint:cl,ints:ll,float:sa},oh=new Map([...al,...sa]),Pc=(i,e)=>oh.has(i)?oh.get(i):i.isNode===!0?i:new qn(i,e),mM=i=>{try{return i.getNodeType()}catch{return}},pt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[bd(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return me(e.get(t[0]));if(t.length===1){const s=Pc(t[0],i);return mM(s)===i?me(s):me(new ol(s,i))}const n=t.map(s=>Pc(s));return me(new Cd(n,i))}},gM=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Or(i){return new Proxy(new hM(i),Pd)}const me=(i,e=null)=>rM(i,e),oa=(i,e=null)=>new oM(i,e),tr=(i,e=null)=>new aM(i,e),H=(...i)=>new cM(...i),se=(...i)=>new lM(...i),$=i=>{const e=new Or(i),t=(...n)=>{let s;return oa(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};J("ShaderNode",Or);const ah=i=>{dr=i},_M=()=>dr,tt=(...i)=>dr.if(...i);function vM(i){return dr&&dr.add(i),i}D("append",vM);const xM=new pt("color"),N=new pt("float",ra.float),w=new pt("int",ra.ints),pe=new pt("uint",ra.uint),Ss=new pt("bool",ra.bool),Le=new pt("vec2"),vs=new pt("ivec2"),yM=new pt("uvec2"),MM=new pt("bvec2"),O=new pt("vec3"),SM=new pt("ivec3"),Zr=new pt("uvec3"),Dd=new pt("bvec3"),Ae=new pt("vec4"),TM=new pt("ivec4"),EM=new pt("uvec4"),AM=new pt("bvec4"),Ud=new pt("mat2"),NM=new pt("imat2"),bM=new pt("umat2"),wM=new pt("bmat2"),ri=new pt("mat3"),RM=new pt("imat3"),CM=new pt("umat3"),LM=new pt("bmat3"),nr=new pt("mat4"),PM=new pt("imat4"),IM=new pt("umat4"),DM=new pt("bmat4"),UM=(i="")=>me(new qn(i,"string")),OM=i=>me(new qn(i,"ArrayBuffer"));D("color",xM);D("float",N);D("int",w);D("uint",pe);D("bool",Ss);D("vec2",Le);D("ivec2",vs);D("uvec2",yM);D("bvec2",MM);D("vec3",O);D("ivec3",SM);D("uvec3",Zr);D("bvec3",Dd);D("vec4",Ae);D("ivec4",TM);D("uvec4",EM);D("bvec4",AM);D("mat2",Ud);D("imat2",NM);D("umat2",bM);D("bmat2",wM);D("mat3",ri);D("imat3",RM);D("umat3",CM);D("bmat3",LM);D("mat4",nr);D("imat4",PM);D("umat4",IM);D("bmat4",DM);D("string",UM);D("arrayBuffer",OM);const FM=H(_r),VM=(i,e)=>me(new ol(me(i),e));D("element",FM);D("convert",VM);class Od extends xt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return na.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),m=e.getPropertyName(d);e.addLineFlowCode(`${m} = ${c}`);const _=n.node.context({assign:!0}).build(e);for(let v=0;v<n.components.length;v++){const p=n.components[v];e.addLineFlowCode(`${_}.${p} = ${m}[ ${v} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const zM=H(Od);J("AssignNode",Od);D("assign",zM);class Fd extends be{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),r=e.getVaryingFromNode(this,t,s);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(r,nh.VERTEX);return e.flowNodeFromShaderStage(nh.VERTEX,n,s,o),e.getPropertyName(r)}}const Ct=H(Fd);D("varying",Ct);J("VaryingNode",Fd);class aa extends be{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Ct(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const ln=(i,e)=>me(new aa(i,e));J("AttributeNode",aa);class Vd extends be{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const zd=H(Vd);D("bypass",zd);J("BypassNode",Vd);let BM=0;class HM{constructor(){this.id=BM++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Bd extends be{constructor(e,t=new HM){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const zo=H(Bd),GM=i=>zo(i,null);D("cache",zo);D("globalCache",GM);J("CacheNode",Bd);class ul extends be{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Di=H(ul),kM=(i,e)=>Di(i,{label:e});D("context",Di);D("label",kM);J("ContextNode",ul);class mi extends be{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===mi.VERTEX)s=e.getVertexIndex();else if(n===mi.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Ct(this).build(e,t),r}}mi.VERTEX="vertex";mi.INSTANCE="instance";const WM=se(mi,mi.VERTEX),Hd=se(mi,mi.INSTANCE);J("IndexNode",mi);class Gd{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class kd extends be{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const Br=H(kd);D("temp",Br);D("toVar",(...i)=>Br(...i).append());J("VarNode",kd);class Ht extends be{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const tn=(i,e)=>me(new Ht(i,e)),ci=(i,e)=>me(new Ht(i,e,!0)),Jt=se(Ht,"vec4","DiffuseColor"),Fr=se(Ht,"float","Roughness"),XM=se(Ht,"float","Metalness"),Ic=se(Ht,"float","Clearcoat"),Bo=se(Ht,"float","ClearcoatRoughness"),Ks=se(Ht,"vec3","Sheen"),hl=se(Ht,"float","SheenRoughness"),dl=se(Ht,"float","Iridescence"),Wd=se(Ht,"float","IridescenceIOR"),Xd=se(Ht,"float","IridescenceThickness"),Ni=se(Ht,"color","SpecularColor"),Dc=se(Ht,"float","Shininess"),qM=se(Ht,"vec4","Output"),ir=se(Ht,"float","dashSize"),Ho=se(Ht,"float","gapSize");se(Ht,"float","pointWidth");J("PropertyNode",Ht);class YM extends Ht{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}J("ParameterNode",YM);class fl extends be{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}H(fl);J("CodeNode",fl);class jM extends fl{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),m=l[h].build(e,"property");c=c.replace(d,m)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}J("FunctionNode",jM);class pl extends be{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const $M=i=>new pl(i),qd=i=>new pl(i,!0);qd("frame");qd("render");const KM=$M("object");J("UniformGroupNode",pl);class As extends ia{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=KM}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const yt=(i,e)=>{const t=gM(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return me(new As(n,t))};J("UniformNode",As);class Yd extends aa{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const _i=(...i)=>me(new Yd(...i));J("UVNode",Yd);class jd extends be{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const ml=H(jd);D("textureSize",ml);J("TextureSizeNode",jd);class bt extends xt{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let r=n;for(let o=0;o<s.length;o++)r=new bt(e,r,s[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const Ln=H(bt,"+"),Dt=H(bt,"-"),st=H(bt,"*"),fr=H(bt,"/"),ZM=H(bt,"%"),JM=H(bt,"=="),QM=H(bt,"!="),eS=H(bt,"<"),$d=H(bt,">"),tS=H(bt,"<="),nS=H(bt,">="),iS=H(bt,"&&"),sS=H(bt,"||"),rS=H(bt,"!"),oS=H(bt,"^^"),aS=H(bt,"&"),cS=H(bt,"~"),lS=H(bt,"|"),uS=H(bt,"^"),hS=H(bt,"<<"),dS=H(bt,">>");D("add",Ln);D("sub",Dt);D("mul",st);D("div",fr);D("remainder",ZM);D("equal",JM);D("notEqual",QM);D("lessThan",eS);D("greaterThan",$d);D("lessThanEqual",tS);D("greaterThanEqual",nS);D("and",iS);D("or",sS);D("not",rS);D("xor",oS);D("bitAnd",aS);D("bitNot",cS);D("bitOr",lS);D("bitXor",uS);D("shiftLeft",hS);D("shiftRight",dS);J("OperatorNode",bt);class P extends xt{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===P.LENGTH||t===P.DISTANCE||t===P.DOT?"float":t===P.CROSS?"vec3":t===P.ALL?"bool":t===P.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===P.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===P.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Ae(O(h),0):u=Ae(O(u),0);const d=st(u,h).xyz;return Pn(d).build(e,t)}else{if(n===P.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===P.ONE_MINUS)return Dt(1,o).build(e,t);if(n===P.RECIPROCAL)return fr(1,o).build(e,t);if(n===P.DIFFERENCE)return Vt(Dt(o,a)).build(e,t);{const u=[];return n===P.CROSS||n===P.MOD?u.push(o.build(e,s),a.build(e,s)):n===P.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===P.MIN||n===P.MAX)||n===P.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===P.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===P.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}P.ALL="all";P.ANY="any";P.EQUALS="equals";P.RADIANS="radians";P.DEGREES="degrees";P.EXP="exp";P.EXP2="exp2";P.LOG="log";P.LOG2="log2";P.SQRT="sqrt";P.INVERSE_SQRT="inversesqrt";P.FLOOR="floor";P.CEIL="ceil";P.NORMALIZE="normalize";P.FRACT="fract";P.SIN="sin";P.COS="cos";P.TAN="tan";P.ASIN="asin";P.ACOS="acos";P.ATAN="atan";P.ABS="abs";P.SIGN="sign";P.LENGTH="length";P.NEGATE="negate";P.ONE_MINUS="oneMinus";P.DFDX="dFdx";P.DFDY="dFdy";P.ROUND="round";P.RECIPROCAL="reciprocal";P.TRUNC="trunc";P.FWIDTH="fwidth";P.BITCAST="bitcast";P.ATAN2="atan2";P.MIN="min";P.MAX="max";P.MOD="mod";P.STEP="step";P.REFLECT="reflect";P.DISTANCE="distance";P.DIFFERENCE="difference";P.DOT="dot";P.CROSS="cross";P.POW="pow";P.TRANSFORM_DIRECTION="transformDirection";P.MIX="mix";P.CLAMP="clamp";P.REFRACT="refract";P.SMOOTHSTEP="smoothstep";P.FACEFORWARD="faceforward";const Kd=N(1e-6);N(1e6);const ch=N(Math.PI);N(Math.PI*2);const Zd=H(P,P.ALL),fS=H(P,P.ANY),pS=H(P,P.EQUALS),mS=H(P,P.RADIANS),gS=H(P,P.DEGREES),_S=H(P,P.EXP),Uc=H(P,P.EXP2),vS=H(P,P.LOG),gl=H(P,P.LOG2),Ns=H(P,P.SQRT),xS=H(P,P.INVERSE_SQRT),vr=H(P,P.FLOOR),Jd=H(P,P.CEIL),Pn=H(P,P.NORMALIZE),ca=H(P,P.FRACT),bi=H(P,P.SIN),qi=H(P,P.COS),yS=H(P,P.TAN),MS=H(P,P.ASIN),SS=H(P,P.ACOS),TS=H(P,P.ATAN),Vt=H(P,P.ABS),_l=H(P,P.SIGN),ES=H(P,P.LENGTH),AS=H(P,P.NEGATE),NS=H(P,P.ONE_MINUS),bS=H(P,P.DFDX),wS=H(P,P.DFDY),RS=H(P,P.ROUND),CS=H(P,P.RECIPROCAL),Qd=H(P,P.TRUNC),LS=H(P,P.FWIDTH);H(P,P.BITCAST);const PS=H(P,P.ATAN2),Hr=H(P,P.MIN),In=H(P,P.MAX),IS=H(P,P.MOD),DS=H(P,P.STEP),US=H(P,P.REFLECT),OS=H(P,P.DISTANCE),FS=H(P,P.DIFFERENCE),xr=H(P,P.DOT),ef=H(P,P.CROSS),pi=H(P,P.POW),VS=H(P,P.POW,2),zS=H(P,P.POW,3),BS=H(P,P.POW,4),HS=H(P,P.TRANSFORM_DIRECTION),GS=i=>st(_l(i),pi(Vt(i),1/3)),kS=i=>xr(i,i),Dn=H(P,P.MIX),Gr=(i,e=0,t=1)=>me(new P(P.CLAMP,me(i),me(e),me(t))),WS=i=>Gr(i),XS=H(P,P.REFRACT),Oi=H(P,P.SMOOTHSTEP),qS=H(P,P.FACEFORWARD),YS=(i,e,t)=>Dn(e,t,i),jS=(i,e,t)=>Oi(e,t,i);D("all",Zd);D("any",fS);D("equals",pS);D("radians",mS);D("degrees",gS);D("exp",_S);D("exp2",Uc);D("log",vS);D("log2",gl);D("sqrt",Ns);D("inverseSqrt",xS);D("floor",vr);D("ceil",Jd);D("normalize",Pn);D("fract",ca);D("sin",bi);D("cos",qi);D("tan",yS);D("asin",MS);D("acos",SS);D("atan",TS);D("abs",Vt);D("sign",_l);D("length",ES);D("lengthSq",kS);D("negate",AS);D("oneMinus",NS);D("dFdx",bS);D("dFdy",wS);D("round",RS);D("reciprocal",CS);D("trunc",Qd);D("fwidth",LS);D("atan2",PS);D("min",Hr);D("max",In);D("mod",IS);D("step",DS);D("reflect",US);D("distance",OS);D("dot",xr);D("cross",ef);D("pow",pi);D("pow2",VS);D("pow3",zS);D("pow4",BS);D("transformDirection",HS);D("mix",YS);D("clamp",Gr);D("refract",XS);D("smoothstep",jS);D("faceForward",qS);D("difference",FS);D("saturate",WS);D("cbrt",GS);J("MathNode",P);const $S=$(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=Dn(n,s,r);return Ae(o,e.a)}),KS=$(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=Dn(n,s,r);return Ae(o,e.a)}),lh=i=>{let e=null;return i===Wn?e="Linear":i===Jn&&(e="sRGB"),e},tf=(i,e)=>lh(i)+"To"+lh(e);class Mn extends xt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===Mn.LINEAR_TO_LINEAR?t:ZS[e]({value:t})}}Mn.LINEAR_TO_LINEAR="LinearToLinear";Mn.LINEAR_TO_sRGB="LinearTosRGB";Mn.sRGB_TO_LINEAR="sRGBToLinear";const ZS={[Mn.LINEAR_TO_sRGB]:KS,[Mn.sRGB_TO_LINEAR]:$S},JS=(i,e)=>me(new Mn(tf(Wn,e),me(i))),nf=(i,e)=>me(new Mn(tf(e,Wn),me(i))),QS=H(Mn,Mn.LINEAR_TO_sRGB),eT=H(Mn,Mn.sRGB_TO_LINEAR);D("linearTosRGB",QS);D("sRGBToLinear",eT);D("linearToColorSpace",JS);D("colorSpaceToLinear",nf);J("ColorSpaceNode",Mn);class sf extends be{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const la=H(sf);J("ExpressionNode",sf);class rf extends As{constructor(e){super(0),this.textureNode=e,this.updateType=vt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const tT=H(rf);J("MaxMipLevelNode",rf);class yr extends As{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=vt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return _i(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return yt(t.matrix).mul(O(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?vt.FRAME:vt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o){const a=this.value;let c;return s?c=e.generateTextureLevel(a,t,n,s,r):o?c=e.generateTextureCompare(a,t,n,o,r):this.sampler===!1?c=e.generateTextureLoad(a,t,n,r):c=e.generateTexture(a,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:m}=n,_=this.generateUV(e,u),v=h?h.build(e,"float"):null,p=m?m.build(e,"int"):null,f=d?d.build(e,"float"):null,b=e.getVarFromNode(this);a=e.getPropertyName(b);const y=this.generateSnippet(e,r,_,v,p,f);e.addLineFlowCode(`${a} = ${y}`),e.context.tempWrite!==!1&&(o.snippet=y,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=nf(la(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,me(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(tT(t)),t.referenceNode=this,me(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return ml(this,e)}compare(e){const t=this.clone();return t.compareNode=me(e),t.referenceNode=this,me(t)}depth(e){const t=this.clone();return t.depthNode=me(e),t.referenceNode=this,me(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Cn=H(yr),gs=(...i)=>Cn(...i).setSampler(!1);D("texture",Cn);J("TextureNode",yr);class ua extends As{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const vl=(i,e,t)=>me(new ua(i,e,t));J("BufferNode",ua);class nT extends _r{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class of extends ua{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=vt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?ji(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return me(new nT(this,me(e)))}}const Oc=(i,e)=>me(new of(i,e));J("UniformsNode",of);class iT extends _r{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class Mr extends be{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=vt.OBJECT}element(e){return me(new iT(this,me(e)))}setNodeType(e){let t=null;this.count!==null?t=vl(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Oc(null,e):e==="texture"?t=Cn(null):t=yt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const oi=(i,e,t)=>me(new Mr(i,e,t)),sT=(i,e,t,n)=>me(new Mr(i,e,n,t));J("ReferenceNode",Mr);class af extends Mr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const rT=(i,e,t)=>me(new af(i,e,t));J("MaterialReferenceNode",af);class Oe extends be{constructor(e=Oe.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=vt.OBJECT,this._uniformNode=new As(null)}getNodeType(){const e=this.scope;if(e===Oe.WORLD_MATRIX||e===Oe.VIEW_MATRIX)return"mat4";if(e===Oe.NORMAL_MATRIX)return"mat3";if(e===Oe.POSITION||e===Oe.VIEW_POSITION||e===Oe.DIRECTION||e===Oe.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Oe.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Oe.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Oe.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Oe.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Oe.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Oe.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(s===Oe.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Oe.WORLD_MATRIX||t===Oe.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Oe.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Oe.POSITION||t===Oe.VIEW_POSITION||t===Oe.DIRECTION||t===Oe.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Oe.VIEW_MATRIX="viewMatrix";Oe.NORMAL_MATRIX="normalMatrix";Oe.WORLD_MATRIX="worldMatrix";Oe.POSITION="position";Oe.SCALE="scale";Oe.VIEW_POSITION="viewPosition";Oe.DIRECTION="direction";H(Oe,Oe.DIRECTION);H(Oe,Oe.VIEW_MATRIX);H(Oe,Oe.NORMAL_MATRIX);H(Oe,Oe.WORLD_MATRIX);const Fc=H(Oe,Oe.POSITION);H(Oe,Oe.SCALE);const cf=H(Oe,Oe.VIEW_POSITION);J("Object3DNode",Oe);class ke extends Oe{constructor(e=ke.POSITION){super(e),this.updateType=vt.RENDER}getNodeType(e){const t=this.scope;return t===ke.PROJECTION_MATRIX||t===ke.PROJECTION_MATRIX_INVERSE?"mat4":t===ke.NEAR||t===ke.FAR||t===ke.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===ke.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===ke.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===ke.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===ke.NEAR?n.value=t.near:s===ke.FAR?n.value=t.far:s===ke.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===ke.PROJECTION_MATRIX||t===ke.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===ke.NEAR||t===ke.FAR||t===ke.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}ke.PROJECTION_MATRIX="projectionMatrix";ke.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";ke.NEAR="near";ke.FAR="far";ke.LOG_DEPTH="logDepth";const wi=se(ke,ke.PROJECTION_MATRIX);se(ke,ke.PROJECTION_MATRIX_INVERSE);const rc=se(ke,ke.NEAR),oc=se(ke,ke.FAR),oT=se(ke,ke.LOG_DEPTH),ns=se(ke,ke.VIEW_MATRIX);se(ke,ke.NORMAL_MATRIX);se(ke,ke.WORLD_MATRIX);se(ke,ke.POSITION);J("CameraNode",ke);class rn extends Oe{constructor(e=rn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}se(rn,rn.DIRECTION);const Ts=se(rn,rn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),lf=se(rn,rn.NORMAL_MATRIX),Go=se(rn,rn.WORLD_MATRIX);se(rn,rn.POSITION);se(rn,rn.SCALE);se(rn,rn.VIEW_POSITION);J("ModelNode",rn);class Gt extends be{constructor(e=Gt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Gt.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=O(0,1,0):n=ln("normal","vec3");else if(t===Gt.LOCAL)n=Ct(ko);else if(t===Gt.VIEW){const s=lf.mul(ai);n=Pn(Ct(s))}else if(t===Gt.WORLD){const s=Qi.transformDirection(ns);n=Pn(Ct(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Gt.GEOMETRY="geometry";Gt.LOCAL="local";Gt.VIEW="view";Gt.WORLD="world";const ko=se(Gt,Gt.GEOMETRY),ai=se(Gt,Gt.LOCAL).temp("Normal"),Qi=se(Gt,Gt.VIEW),uf=se(Gt,Gt.WORLD),It=tn("vec3","TransformedNormalView"),aT=It.transformDirection(ns).normalize(),Zs=tn("vec3","TransformedClearcoatNormalView");J("NormalNode",Gt);const uh=new Map;class re extends be{constructor(e){super(),this.scope=e}getCache(e,t){let n=uh.get(e);return n===void 0&&(n=rT(e,t),uh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===re.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===re.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===re.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture(n).r:s=N(1);else if(n===re.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===re.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===re.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===re.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=Qi;else if(n===re.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===re.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===re.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=Qi;else if(n===re.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===re.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===re.IRIDESCENCE_THICKNESS){const r=oi("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=oi("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}re.ALPHA_TEST="alphaTest";re.COLOR="color";re.OPACITY="opacity";re.SHININESS="shininess";re.SPECULAR_COLOR="specular";re.SPECULAR_STRENGTH="specularStrength";re.REFLECTIVITY="reflectivity";re.ROUGHNESS="roughness";re.METALNESS="metalness";re.NORMAL="normal";re.CLEARCOAT="clearcoat";re.CLEARCOAT_ROUGHNESS="clearcoatRoughness";re.CLEARCOAT_NORMAL="clearcoatNormal";re.EMISSIVE="emissive";re.ROTATION="rotation";re.SHEEN="sheen";re.SHEEN_ROUGHNESS="sheenRoughness";re.IRIDESCENCE="iridescence";re.IRIDESCENCE_IOR="iridescenceIOR";re.IRIDESCENCE_THICKNESS="iridescenceThickness";re.LINE_SCALE="scale";re.LINE_DASH_SIZE="dashSize";re.LINE_GAP_SIZE="gapSize";re.LINE_WIDTH="linewidth";re.LINE_DASH_OFFSET="dashOffset";re.POINT_WIDTH="pointWidth";const cT=se(re,re.ALPHA_TEST),kr=se(re,re.COLOR),lT=se(re,re.SHININESS),uT=se(re,re.EMISSIVE),hf=se(re,re.OPACITY),hT=se(re,re.SPECULAR_COLOR),dT=se(re,re.SPECULAR_STRENGTH);se(re,re.REFLECTIVITY);const fT=se(re,re.ROUGHNESS),pT=se(re,re.METALNESS),mT=se(re,re.NORMAL),gT=se(re,re.CLEARCOAT),_T=se(re,re.CLEARCOAT_ROUGHNESS),vT=se(re,re.CLEARCOAT_NORMAL),xT=se(re,re.ROTATION),yT=se(re,re.SHEEN),MT=se(re,re.SHEEN_ROUGHNESS),ST=se(re,re.IRIDESCENCE),TT=se(re,re.IRIDESCENCE_IOR),ET=se(re,re.IRIDESCENCE_THICKNESS),Vc=se(re,re.LINE_SCALE),df=se(re,re.LINE_DASH_SIZE),ff=se(re,re.LINE_GAP_SIZE),ac=se(re,re.LINE_WIDTH),hh=se(re,re.LINE_DASH_OFFSET),AT=se(re,re.POINT_WIDTH);J("MaterialNode",re);class _t extends be{constructor(e=_t.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===_t.GEOMETRY)n=ln("position","vec3");else if(t===_t.LOCAL)n=Ct(mn);else if(t===_t.WORLD){const s=Go.mul(hn);n=Ct(s)}else if(t===_t.VIEW){const s=Ts.mul(hn);n=Ct(s)}else if(t===_t.VIEW_DIRECTION){const s=wn.negate();n=Pn(Ct(s))}else if(t===_t.WORLD_DIRECTION){const s=hn.transformDirection(Go);n=Pn(Ct(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}_t.GEOMETRY="geometry";_t.LOCAL="local";_t.WORLD="world";_t.WORLD_DIRECTION="worldDirection";_t.VIEW="view";_t.VIEW_DIRECTION="viewDirection";const mn=se(_t,_t.GEOMETRY),hn=se(_t,_t.LOCAL).temp("Position"),NT=se(_t,_t.WORLD),bT=se(_t,_t.WORLD_DIRECTION),wn=se(_t,_t.VIEW),zt=se(_t,_t.VIEW_DIRECTION);J("PositionNode",_t);class pf extends xt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ct(e.context.mvp);const t=this.positionNode||hn;return wi.mul(Ts).mul(t)}}const dh=H(pf);J("ModelViewProjectionNode",pf);class mf extends ia{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=Oo,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new vd(n,r),c=new il(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Ct(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const ha=(i,e,t,n)=>me(new mf(i,e,t,n)),wT=(i,e,t,n)=>ha(i,e,t,n).setUsage(Rc),fh=(i,e,t,n)=>ha(i,e,t,n).setInstanced(!0),ph=(i,e,t,n)=>wT(i,e,t,n).setInstanced(!0);D("toAttribute",i=>ha(i.value));J("BufferAttributeNode",mf);class gf extends be{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new Jy(c.array,16,1),u=c.usage===Rc?ph:fh,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=nr(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new Gy(n.array,3),l=n.usage===Rc?ph:fh;this.instanceColorNode=O(l(c,"vec3",3,0))}const s=e.mul(hn).xyz,r=ri(e[0].xyz,e[1].xyz,e[2].xyz),o=ai.div(O(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;hn.assign(s),ai.assign(a),this.instanceColorNode!==null&&ci("vec3","vInstanceColor").assign(this.instanceColorNode)}}const RT=H(gf);J("InstanceNode",gf);class Bt extends be{constructor(e=Bt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Bt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Bt.GEOMETRY)n=ln("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===Bt.LOCAL)n=Ct(Wo.xyz);else if(t===Bt.VIEW){const s=Ts.mul(Ae(da,0)).xyz;n=Pn(Ct(s))}else if(t===Bt.WORLD){const s=fa.transformDirection(ns);n=Pn(Ct(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Bt.GEOMETRY="geometry";Bt.LOCAL="local";Bt.VIEW="view";Bt.WORLD="world";const Wo=se(Bt,Bt.GEOMETRY),da=se(Bt,Bt.LOCAL),fa=se(Bt,Bt.VIEW),CT=se(Bt,Bt.WORLD),_f=Br(fa,"TransformedTangentView");Pn(_f.transformDirection(ns));J("TangentNode",Bt);class vf extends be{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=ln("batchId"));const t=this.batchMesh._matricesTexture,n=ml(gs(t),0),s=N(w(this.batchingIdNode)).mul(4).toVar(),r=w(s.mod(n)),o=w(s).div(w(n)),a=nr(gs(t,vs(r,o)),gs(t,vs(r.add(1),o)),gs(t,vs(r.add(2),o)),gs(t,vs(r.add(3),o))),c=ri(a[0].xyz,a[1].xyz,a[2].xyz);hn.assign(a.mul(hn));const l=ai.div(O(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;ai.assign(u),e.hasGeometryAttribute("tangent")&&da.mulAssign(c)}}const LT=H(vf);J("batch",vf);class xf extends be{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=vt.OBJECT,this.skinIndexNode=ln("skinIndex","uvec4"),this.skinWeightNode=ln("skinWeight","vec4");let n,s,r;t?(n=oi("bindMatrix","mat4"),s=oi("bindMatrixInverse","mat4"),r=sT("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=yt(e.bindMatrix,"mat4"),s=yt(e.bindMatrixInverse,"mat4"),r=vl(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=s.mul(hn),d=Ln(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),m=r.mul(d).xyz;let _=Ln(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));_=r.mul(_).mul(s);const v=_.transformDirection(ai).xyz;hn.assign(m),ai.assign(v),e.hasGeometryAttribute("tangent")&&da.assign(v)}generate(e,t){if(t!=="void")return hn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const PT=i=>me(new xf(i,!0));J("SkinningNode",xf);class yf extends be{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,r=this.params.length-1;s<r;s++){const o=this.params[s],a=o.isNode!==!0&&o.name||this.getVarName(s),c=o.isNode!==!0&&o.type||"int";n[a]=la(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,r=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,m=null,_=null,v=null,p=null;u.isNode?(_="int",m=this.getVarName(c),h="0",d=u.build(e,_),v="<"):(_=u.type||"int",m=u.name||this.getVarName(c),h=u.start,d=u.end,v=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,_)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,_)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",v=">="):d!==void 0&&h===void 0&&(h="0",v="<"),v===void 0&&(Number(h)>Number(d)?v=">=":v="<"));const f={start:h,end:d,condition:v},b=f.start,y=f.end;let R="",F="",C="";p||(_==="int"||_==="uint"?v.includes("<")?p="++":p="--":v.includes("<")?p="+= 1.":p="-= 1."),R+=e.getVar(_,m)+" = "+b,F+=m+" "+v+" "+y,C+=m+" "+p;const A=`for ( ${R}; ${F}; ${C} )`;e.addFlowCode((c===0?`
`:"")+e.tab+A+` {

`).addFlowTab()}const o=Di(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const Mt=(...i)=>me(new yf(tr(i,"int"))).append(),IT=()=>la("break").append();D("loop",(i,...e)=>zd(i,Mt(...e)));J("LoopNode",yf);const cc=new WeakMap,bn=new ot,mh=$(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=w(WM).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return gs(i,vs(c,a)).depth(s).mul(e)});function DT(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=cc.get(i);if(o===void 0||o.count!==r){let b=function(){p.dispose(),cc.delete(i),i.removeEventListener("dispose",b)};var a=b;o!==void 0&&o.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,m=1;const _=4096;d>_&&(m=Math.ceil(d/_),d=_);const v=new Float32Array(d*m*4*r),p=new Zc(v,d,m,r);p.type=Li,p.needsUpdate=!0;const f=h*4;for(let y=0;y<r;y++){const R=c[y],F=l[y],C=u[y],A=d*m*4*y;for(let z=0;z<R.count;z++){const T=z*f;e===!0&&(bn.fromBufferAttribute(R,z),v[A+T+0]=bn.x,v[A+T+1]=bn.y,v[A+T+2]=bn.z,v[A+T+3]=0),t===!0&&(bn.fromBufferAttribute(F,z),v[A+T+4]=bn.x,v[A+T+5]=bn.y,v[A+T+6]=bn.z,v[A+T+7]=0),n===!0&&(bn.fromBufferAttribute(C,z),v[A+T+8]=bn.x,v[A+T+9]=bn.y,v[A+T+10]=bn.z,v[A+T+11]=C.itemSize===4?bn.w:1)}}o={count:r,texture:p,stride:h,size:new Se(d,m)},cc.set(i,o),i.addEventListener("dispose",b)}return o}class Mf extends be{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=yt(1),this.updateType=vt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=DT(t);n===!0&&hn.mulAssign(this.morphBaseInfluence),s===!0&&ai.mulAssign(this.morphBaseInfluence);const u=w(l.width);Mt(o,({i:h})=>{const d=N(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(gs(this.mesh.morphTexture,vs(w(h).add(1),w(Hd))).r):d.assign(oi("morphTargetInfluences","float").element(h).toVar()),n===!0&&hn.addAssign(mh({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:w(0)})),s===!0&&ai.addAssign(mh({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:w(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const UT=H(Mf);J("MorphNode",Mf);class Sf extends be{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return zt.negate().reflect(It).transformDirection(ns)}}const OT=se(Sf);J("ReflectVectorNode",Sf);class Tf extends yr{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return OT}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===lr||!n.isRenderTargetTexture?O(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const Ef=H(Tf);D("cubeTexture",Ef);J("CubeTextureNode",Tf);class pa extends be{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}J("LightingNode",pa);let Lr=null;class bs extends pa{constructor(e=null){super(),this.updateType=vt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new Ve,this._defaultColorNode=yt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){let t=this.shadowNode;if(t===null){Lr===null&&(Lr=e.createNodeMaterial(),Lr.fragmentNode=Ae(0,0,0,1),Lr.isShadowNodeMaterial=!0);const n=this.light.shadow,s=e.createRenderTarget(n.mapSize.width,n.mapSize.height),r=new $r;r.minFilter=un,r.magFilter=un,r.image.width=n.mapSize.width,r.image.height=n.mapSize.height,r.compareFunction=Qh,s.depthTexture=r,n.camera.updateProjectionMatrix();const o=oi("bias","float",n),a=oi("normalBias","float",n);let c=yt(n.matrix).mul(NT.add(uf.mul(a)));c=c.xyz.div(c.w);const l=c.x.greaterThanEqual(0).and(c.x.lessThanEqual(1)).and(c.y.greaterThanEqual(0)).and(c.y.lessThanEqual(1)).and(c.z.lessThanEqual(1));let u=c.z.add(o);e.renderer.coordinateSystem===lr&&(u=u.mul(2).sub(1)),c=O(c.x,c.y.oneMinus(),u),t=((m,_,v)=>Cn(m,_).compare(v))(r,c.xy,c.z);const d=Cn(s.texture,c);this.rtt=s,this.colorNode=this.colorNode.mul(l.mix(1,t.mix(d.a.mix(1,d),1))),this.shadowNode=t,this.updateBeforeType=vt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r}=e,o=r.overrideMaterial;r.overrideMaterial=Lr,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=s.getRenderTarget(),c=s.getRenderObjectFunction();s.setRenderObjectFunction((l,...u)=>{l.castShadow===!0&&s.renderObject(l,...u)}),s.setRenderTarget(t),s.render(r,n.shadow.camera),s.setRenderTarget(a),s.setRenderObjectFunction(c),r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}J("AnalyticLightNode",bs);const Xo=new WeakMap,FT=i=>i.sort((e,t)=>e.id-t.id);class VT extends be{constructor(e=[]){super("vec3"),this.totalDiffuseNode=O().temp("totalDiffuse"),this.totalSpecularNode=O().temp("totalSpecular"),this.outgoingLightNode=O().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const p of r)p.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:m,indirectSpecular:_}=t.reflectedLight;let v=h.add(m);l!==null&&(v=O(u!==null?u.mix(v,l):l)),o.assign(v),a.assign(d.add(_)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=FT(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=Xo.has(r)?Xo.get(r):bs;s=me(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const zT=H(VT);function Sr(i,e){if(Xo.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Xo.set(i,e)}class Af extends pa{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}J("AONode",Af);class Nf extends ul{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=O().temp("directDiffuse"),s=O().temp("directSpecular"),r=O().temp("indirectDiffuse"),o=O().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:O().temp("radiance"),irradiance:O().temp("irradiance"),iblIrradiance:O().temp("iblIrradiance"),ambientOcclusion:N(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const bf=H(Nf);D("lightingContext",bf);J("LightingContextNode",Nf);class xl extends be{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?tn(n).build(e):"";r.nodeProperty=l;const u=Di(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Di(o,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Di(a,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Rn=H(xl);D("cond",Rn);J("CondNode",xl);const gh=N(1),zc=N(-2),bo=N(.8),lc=N(-1),wo=N(.4),uc=N(2),Ro=N(.305),hc=N(3),_h=N(.21),BT=N(4),vh=N(4),HT=N(16),GT=$(([i])=>{const e=O(Vt(i)).toVar(),t=N(-1).toVar();return tt(e.x.greaterThan(e.z),()=>{tt(e.x.greaterThan(e.y),()=>{t.assign(Rn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Rn(i.y.greaterThan(0),1,4))})}).else(()=>{tt(e.z.greaterThan(e.y),()=>{t.assign(Rn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Rn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),kT=$(([i,e])=>{const t=Le().toVar();return tt(e.equal(0),()=>{t.assign(Le(i.z,i.y).div(Vt(i.x)))}).elseif(e.equal(1),()=>{t.assign(Le(i.x.negate(),i.z.negate()).div(Vt(i.y)))}).elseif(e.equal(2),()=>{t.assign(Le(i.x.negate(),i.y).div(Vt(i.z)))}).elseif(e.equal(3),()=>{t.assign(Le(i.z.negate(),i.y).div(Vt(i.x)))}).elseif(e.equal(4),()=>{t.assign(Le(i.x.negate(),i.z).div(Vt(i.y)))}).else(()=>{t.assign(Le(i.x,i.y).div(Vt(i.z)))}),st(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),WT=$(([i])=>{const e=N(0).toVar();return tt(i.greaterThanEqual(bo),()=>{e.assign(gh.sub(i).mul(lc.sub(zc)).div(gh.sub(bo)).add(zc))}).elseif(i.greaterThanEqual(wo),()=>{e.assign(bo.sub(i).mul(uc.sub(lc)).div(bo.sub(wo)).add(lc))}).elseif(i.greaterThanEqual(Ro),()=>{e.assign(wo.sub(i).mul(hc.sub(uc)).div(wo.sub(Ro)).add(uc))}).elseif(i.greaterThanEqual(_h),()=>{e.assign(Ro.sub(i).mul(BT.sub(hc)).div(Ro.sub(_h)).add(hc))}).else(()=>{e.assign(N(-2).mul(gl(st(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});$(([i,e])=>{const t=i.toVar();t.assign(st(2,t).sub(1));const n=O(t,1).toVar();return tt(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const XT=$(([i,e,t,n,s,r])=>{const o=N(t),a=O(e),c=Gr(WT(o),zc,r),l=ca(c),u=vr(c),h=O(Bc(i,a,u,n,s,r)).toVar();return tt(l.notEqual(0),()=>{const d=O(Bc(i,a,u.add(1),n,s,r)).toVar();h.assign(Dn(h,d,l))}),h}),Bc=$(([i,e,t,n,s,r])=>{const o=N(t).toVar(),a=O(e),c=N(GT(a)).toVar(),l=N(In(vh.sub(o),0)).toVar();o.assign(In(o,vh));const u=N(Uc(o)).toVar(),h=Le(kT(a,c).mul(u.sub(2)).add(1)).toVar();return tt(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(st(3,HT))),h.y.addAssign(st(4,Uc(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.uv(h)}),dc=$(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=qi(n),l=t.mul(c).add(s.cross(t).mul(bi(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return Bc(i,l,e,r,o,a)});$(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=O(Rn(e,t,ef(t,n))).toVar();tt(Zd(d.equals(O(0))),()=>{d.assign(O(n.z,0,n.x.negate()))}),d.assign(Pn(d));const m=O().toVar();return m.addAssign(s.element(w(0)).mul(dc({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Mt({start:w(1),end:i},({i:_})=>{tt(_.greaterThanEqual(r),()=>{IT()});const v=N(o.mul(N(_))).toVar();m.addAssign(s.element(_).mul(dc({theta:v.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),m.addAssign(s.element(_).mul(dc({theta:v,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Ae(m,1)});let qo=null;const xh=new WeakMap;function qT(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function YT(i){let e=xh.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=qo.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=qo.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,xh.set(i,e)}return e.texture}class wf extends xt{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Cn(null),this._width=yt(0),this._height=yt(0),this._maxMip=yt(0),this.updateBeforeType=vt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=qT(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=YT(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){qo===null&&(qo=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===fi&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=O(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),XT(this._texture,t,s,this._width,this._height,this._maxMip)}}const jT=H(wf);J("PMREMNode",wf);const yh=new WeakMap;class Rf extends pa{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let l=yh.get(t.value);l===void 0&&(l=jT(t.value),yh.set(t.value,l)),t=l}const s=e.material.envMap?oi("envMapIntensity","float",e.material):oi("environmentIntensity","float",e.scene),r=Di(t,Mh(Fr,It)).mul(s),o=Di(t,$T(aT)).mul(Math.PI).mul(s),a=zo(r);e.context.radiance.addAssign(a),e.context.iblIrradiance.addAssign(o);const c=e.context.lightingModel.clearcoatRadiance;if(c){const l=Di(t,Mh(Bo,Zs)).mul(s),u=zo(l);c.addAssign(u)}}}const Mh=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=zt.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(ns)),t),getTextureLevel:()=>i}},$T=i=>({getUV:()=>i,getTextureLevel:()=>N(1)});J("EnvironmentNode",Rf);let fc,pc;class ht extends be{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ht.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=vt.NONE;return(this.scope===ht.RESOLUTION||this.scope===ht.VIEWPORT)&&(e=vt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ht.VIEWPORT?e.getViewport(pc):e.getDrawingBufferSize(fc)}setup(){const e=this.scope;let t=null;if(e===ht.RESOLUTION)t=yt(fc||(fc=new Se));else if(e===ht.VIEWPORT)t=yt(pc||(pc=new ot));else{t=KT.div(Sh);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Le(n,s)}return t}generate(e){if(this.scope===ht.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(Sh).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}ht.COORDINATE="coordinate";ht.RESOLUTION="resolution";ht.VIEWPORT="viewport";ht.TOP_LEFT="topLeft";ht.BOTTOM_LEFT="bottomLeft";ht.TOP_RIGHT="topRight";ht.BOTTOM_RIGHT="bottomRight";const KT=se(ht,ht.COORDINATE),Sh=se(ht,ht.RESOLUTION),sr=se(ht,ht.VIEWPORT),Wr=se(ht,ht.TOP_LEFT);se(ht,ht.BOTTOM_LEFT);se(ht,ht.TOP_RIGHT);se(ht,ht.BOTTOM_RIGHT);J("ViewportNode",ht);const Pr=new Se;class Jr extends yr{constructor(e=Wr,t=null,n=null){n===null&&(n=new Md,n.minFilter=Yi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=vt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Pr);const n=this.value;(n.image.width!==Pr.width||n.image.height!==Pr.height)&&(n.image.width=Pr.width,n.image.height=Pr.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){return new this.constructor(this.uvNode,this.levelNode,this.value)}}const ZT=H(Jr),JT=H(Jr,null,null,{generateMipmaps:!0});D("viewportTexture",ZT);D("viewportMipTexture",JT);J("ViewportTextureNode",Jr);let mc=null;class Cf extends Jr{constructor(e=Wr,t=null){mc===null&&(mc=new $r),super(e,t,mc)}}const Lf=H(Cf);D("viewportDepthTexture",Lf);J("ViewportDepthTextureNode",Cf);class nn extends be{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===nn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===nn.DEPTH)t=Hc(wn.z,rc,oc);else if(e===nn.DEPTH_TEXTURE){const n=this.valueNode||Lf(),s=Pf(n,rc,oc);t=Hc(s,rc,oc)}else e===nn.DEPTH_PIXEL&&this.valueNode!==null&&(t=If().assign(this.valueNode));return t}}const Hc=(i,e,t)=>i.add(e).div(e.sub(t)),Pf=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));nn.DEPTH="depth";nn.DEPTH_TEXTURE="depthTexture";nn.DEPTH_PIXEL="depthPixel";const If=H(nn,nn.DEPTH_PIXEL);se(nn,nn.DEPTH);H(nn,nn.DEPTH_TEXTURE);const Df=se(nn,nn.DEPTH_PIXEL);Df.assign=i=>If(i);J("ViewportDepthNode",nn);class es extends be{constructor(e=es.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===es.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return $(()=>{const s=Oc(e),r=tn("float","distanceToPlane"),o=tn("float","distanceToGradient"),a=tn("float","clipOpacity");a.assign(1);let c;if(Mt(n,({i:l})=>{c=s.element(l),r.assign(wn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(Oi(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=tn("float","unionclipOpacity");l.assign(1),Mt({start:n,end:t},({i:u})=>{c=s.element(u),r.assign(wn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(Oi(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}Jt.a.mulAssign(a),Jt.a.equal(0).discard()})()}setupDefault(e,t,n){return $(()=>{const s=Oc(e);let r;if(Mt(n,({i:o})=>{r=s.element(o),wn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=tn("bool","clipped");o.assign(!0),Mt({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(wn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}es.ALPHA_TO_COVERAGE="alphaToCoverage";es.DEFAULT="default";const QT=()=>me(new es),eE=()=>me(new es(es.ALPHA_TO_COVERAGE));class Uf extends be{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const tE=se(Uf),Yo=N(tE).mul(2).sub(1);J("FrontFacingNode",Uf);const Gc=new Map;class Yn extends Ui{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.colorSpaced=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Nd(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.fragmentNode===null){this.depthWrite===!0&&this.setupDepth(e),this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Ae(s,Jt.a).max(0);t=this.setupOutput(e,r),qM.assign(t),this.outputNode!==null&&(t=this.outputNode)}else t=this.setupOutput(e,this.fragmentNode);e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=eE():e.stack.add(QT())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=dh().w.add(1).log2().mul(oT).mul(.5)),n!==null&&Df.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&UT(t).append(),t.isSkinnedMesh===!0&&PT(t).append(),t.isBatchedMesh&&LT(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&RT(t).append(),this.positionNode!==null&&hn.assign(this.positionNode);const s=dh();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ae(this.colorNode):kr;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ae(n.xyz.mul(ln("color","vec3")),n.a)),e.instanceColor&&(n=ci("vec3","vInstanceColor").mul(n)),Jt.assign(n);const s=this.opacityNode?N(this.opacityNode):hf;if(Jt.a.assign(Jt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?N(this.alphaTestNode):cT;Jt.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=wn.dFdx().cross(wn.dFdy()).normalize();It.assign(e.mul(Yo))}else{const e=this.normalNode?O(this.normalNode):mT;It.assign(e.mul(Yo))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?Ef(this.envMap):Cn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];t&&n.push(new Rf(t)),e.material.aoMap&&n.push(new Af(Cn(e.material.aoMap)));let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=zT([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Jt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=bf(a,l,n,s)}else n!==null&&(c=O(s!==null?Dn(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(O(r||uT))),c}setupOutput(e,t){const n=e.renderer;if(this.fog===!0){const r=e.fogNode;r&&(t=Ae(r.mix(t.rgb,r.colorNode),t.a))}const s=e.toneMappingNode;if(this.toneMapped===!0&&s&&(t=Ae(s.context({color:t.rgb}),t.a)),this.colorSpaced===!0){const r=n.currentColorSpace;r!==Wn&&r!==Ci&&(t=t.linearToColorSpace(r))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=Xn.prototype.toJSON.call(this,e),s=Vo(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=nE(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Sn(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(Gc.has(i)){console.warn(`Redefinition of node material ${i}`);return}Gc.set(i,e),e.type=i}function nE(i){const e=Gc.get(i);if(e!==void 0)return new e}Sn("NodeMaterial",Yn);class Of extends be{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Or(t);return this._currentCond=Rn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Or(t),s=Rn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Or(e),this}build(e,...t){const n=_M();ah(this);for(const s of this.nodes)s.build(e,"void");return ah(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}H(Of);J("StackNode",Of);class Ff extends xt{constructor(e=bT){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Le(t,n)}}H(Ff);J("EquirectUVNode",Ff);class Vf extends be{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}J("StructTypeNode",Vf);class zf extends be{constructor(...e){super(),this.isOutputStructNode=!0,this.members=e}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Vf(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),r=this.members,o=s!==""?s+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return s}}H(zf);J("OutputStructNode",zf);class Bf extends be{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const iE=H(Bf);D("hash",iE);J("HashNode",Bf);const kc=(i,e)=>pi(st(4,i.mul(Dt(1,i))),e),sE=(i,e)=>i.lessThan(.5)?kc(i.mul(2),e).div(2):Dt(1,kc(st(Dt(1,i),2),e).div(2)),rE=(i,e,t)=>pi(fr(pi(i,e),Ln(pi(i,e),pi(Dt(1,i),t))),1/e),oE=(i,e)=>bi(ch.mul(e.mul(i).sub(1))).div(ch.mul(e.mul(i).sub(1)));D("parabola",kc);D("gain",sE);D("pcurve",rE);D("sinc",oE);const ui=$(([i])=>i.fract().sub(.5).abs()),Hf=$(([i])=>O(ui(i.z.add(ui(i.y.mul(1)))),ui(i.z.add(ui(i.x.mul(1)))),ui(i.y.add(ui(i.x.mul(1)))))),aE=$(([i,e,t])=>{const n=O(i).toVar(),s=N(1.4).toVar(),r=N(0).toVar(),o=O(n).toVar();return Mt({start:N(0),end:N(3),type:"float",condition:"<="},()=>{const a=O(Hf(o.mul(2))).toVar();n.addAssign(a.add(t.mul(N(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=N(ui(n.z.add(ui(n.x.add(ui(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r});ui.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Hf.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});aE.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let gc;class Gf extends xl{constructor(e){gc=gc||la("discard"),super(e,gc)}}const cE=H(Gf),lE=i=>cE(i).append();D("discard",lE);J("DiscardNode",Gf);class kf extends be{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],m=l[h];d.getNodeType(e)===m.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}const uE=H(kf),jn=i=>(...e)=>uE(i,...e);J("FunctionOverloadingNode",kf);class Wf extends xt{constructor(){super("vec2")}setup(){const e=O(zt.z,0,zt.x.negate()).normalize(),t=zt.cross(e);return Le(e.dot(It),t.dot(It)).mul(.495).add(.5)}}se(Wf);J("MatcapUVNode",Wf);class vn extends As{constructor(e=vn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=vt.FRAME}update(e){const t=this.scope,n=this.scale;t===vn.LOCAL?this.value+=e.deltaTime*n:t===vn.DELTA?this.value=e.deltaTime*n:t===vn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}vn.LOCAL="local";vn.GLOBAL="global";vn.DELTA="delta";vn.FRAME="frame";const hE=(i,e=0)=>me(new vn(vn.LOCAL,i,e));se(vn,vn.FRAME).uint();J("TimerNode",vn);class kt extends be{constructor(e=kt.SINE,t=hE()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=me(this.timeNode);let n=null;return e===kt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===kt.SQUARE?n=t.fract().round():e===kt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===kt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}kt.SINE="sine";kt.SQUARE="square";kt.TRIANGLE="triangle";kt.SAWTOOTH="sawtooth";H(kt,kt.SINE);H(kt,kt.SQUARE);H(kt,kt.TRIANGLE);H(kt,kt.SAWTOOTH);J("OscNode",kt);class gi extends xt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===gi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===gi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}gi.DIRECTION_TO_COLOR="directionToColor";gi.COLOR_TO_DIRECTION="colorToDirection";const Xf=H(gi,gi.DIRECTION_TO_COLOR),dE=H(gi,gi.COLOR_TO_DIRECTION);D("directionToColor",Xf);D("colorToDirection",dE);J("PackingNode",gi);class yl extends be{constructor(e,t,n,s=N(0),r=N(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const fE=H(yl,null,null,{doClamp:!1}),pE=H(yl);D("remap",fE);D("remapClamp",pE);J("RemapNode",yl);class qf extends xt{constructor(e,t,n=Le(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const mE=H(qf);D("rotateUV",mE);J("RotateUVNode",qf);class Yf extends xt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return Ud(r,o,o.negate(),r).mul(n)}else{const r=t,o=nr(Ae(1,0,0,0),Ae(0,qi(r.x),bi(r.x).negate(),0),Ae(0,bi(r.x),qi(r.x),0),Ae(0,0,0,1)),a=nr(Ae(qi(r.y),0,bi(r.y),0),Ae(0,1,0,0),Ae(bi(r.y).negate(),0,qi(r.y),0),Ae(0,0,0,1)),c=nr(Ae(qi(r.z),bi(r.z).negate(),0,0),Ae(bi(r.z),qi(r.z),0,0),Ae(0,0,1,0),Ae(0,0,0,1));return o.mul(a).mul(c).mul(Ae(n,1)).xyz}}}const gE=H(Yf);D("rotate",gE);J("RotateNode",Yf);class jf extends be{constructor(e,t=_i(),n=N(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=Le(a,c);return t.add(u).mul(l)}}H(jf);J("SpriteSheetUVNode",jf);class $f extends _r{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Kf=H($f);D("storageElement",Kf);J("StorageArrayElementNode",$f);class Zf extends be{constructor(e,t=null,n=null,s=N(1),r=hn,o=ai){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(O(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,m=n!==null?n.value:h,_=Cn(h,c).mul(a.x),v=Cn(d,l).mul(a.y),p=Cn(m,u).mul(a.z);return Ln(_,v,p)}}const _E=H(Zf),vE=(...i)=>_E(...i);D("triplanarTexture",vE);J("TriplanarTexturesNode",Zf);new Ai;new L;new L;new L;new Nt;new L(0,0,-1);new ot;new L;new L;new ot;new Se;new Ji;Le(Wr.x.oneMinus(),Wr.y);class Wt extends be{constructor(e=Wt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===Wt.GEOMETRY?n=ko.cross(Wo):t===Wt.LOCAL?n=ai.cross(da):t===Wt.VIEW?n=Qi.cross(fa):t===Wt.WORLD&&(n=uf.cross(CT));const s=n.mul(Wo.w).xyz;return Pn(Ct(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Wt.GEOMETRY="geometry";Wt.LOCAL="local";Wt.VIEW="view";Wt.WORLD="world";se(Wt,Wt.GEOMETRY);se(Wt,Wt.LOCAL);const xE=se(Wt,Wt.VIEW);se(Wt,Wt.WORLD);const yE=Pn(It.cross(_f).mul(Wo.w));Pn(yE.transformDirection(ns));J("BitangentNode",Wt);const Jf=ri(fa,xE,Qi);zt.mul(Jf);class ME extends aa{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new ot(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}J("VertexColorNode",ME);class Qf extends Mr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const SE=(i,e,t)=>me(new Qf(i,e,t));J("RendererReferenceNode",Qf);const ma=1/6,ep=i=>st(ma,st(i,st(i,i.negate().add(3)).sub(3)).add(1)),Wc=i=>st(ma,st(i,st(i,st(3,i).sub(6))).add(4)),tp=i=>st(ma,st(i,st(i,st(-3,i).add(3)).add(3)).add(1)),Xc=i=>st(ma,pi(i,3)),Th=i=>ep(i).add(Wc(i)),Eh=i=>tp(i).add(Xc(i)),Ah=i=>Ln(-1,Wc(i).div(ep(i).add(Wc(i)))),Nh=i=>Ln(1,Xc(i).div(tp(i).add(Xc(i)))),bh=(i,e,t)=>{const n=i.uvNode,s=st(n,e.zw).add(.5),r=vr(s),o=ca(s),a=Th(o.x),c=Eh(o.x),l=Ah(o.x),u=Nh(o.x),h=Ah(o.y),d=Nh(o.y),m=Le(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),_=Le(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),v=Le(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),p=Le(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),f=Th(o.y).mul(Ln(a.mul(i.uv(m).level(t)),c.mul(i.uv(_).level(t)))),b=Eh(o.y).mul(Ln(a.mul(i.uv(v).level(t)),c.mul(i.uv(p).level(t))));return f.add(b)},TE=(i,e)=>{const t=Le(i.size(w(e))),n=Le(i.size(w(e.add(1)))),s=fr(1,t),r=fr(1,n),o=bh(i,Ae(s,t),vr(e)),a=bh(i,Ae(r,n),Jd(e));return ca(e).mix(o,a)};class np extends xt{constructor(e,t=N(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return TE(this.textureNode,this.blurNode)}}const EE=H(np);D("bicubic",EE);J("TextureBicubicNode",np);class ip extends be{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}se(ip);J("PointUVNode",ip);class ii extends be{constructor(e=ii.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===ii.BACKGROUND_BLURRINESS?s=oi("backgroundBlurriness","float",n):t===ii.BACKGROUND_INTENSITY?s=oi("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}ii.BACKGROUND_BLURRINESS="backgroundBlurriness";ii.BACKGROUND_INTENSITY="backgroundIntensity";se(ii,ii.BACKGROUND_BLURRINESS);se(ii,ii.BACKGROUND_INTENSITY);J("SceneNode",ii);class AE extends ua{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null}getInputType(){return"storageBuffer"}element(e){return Kf(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=ha(this.value),this._varying=Ct(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}J("StorageBufferNode",AE);class sp extends yr{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}H(sp);J("TextureStoreNode",sp);class NE extends Mr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}J("UserDataNode",NE);const bE=$(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Kd).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return O(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),wE=$(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return O(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),RE=$(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return O(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),CE=$(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return O(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Qt extends xt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===Qt.BURN?r=bE(s):e===Qt.DODGE?r=wE(s):e===Qt.SCREEN?r=RE(s):e===Qt.OVERLAY&&(r=CE(s)),r}}Qt.BURN="burn";Qt.DODGE="dodge";Qt.SCREEN="screen";Qt.OVERLAY="overlay";const LE=H(Qt,Qt.BURN),PE=H(Qt,Qt.DODGE),IE=H(Qt,Qt.OVERLAY),DE=H(Qt,Qt.SCREEN);D("burn",LE);D("dodge",PE);D("overlay",IE);D("screen",DE);J("BlendModeNode",Qt);const UE=$(({textureNode:i,bumpScale:e})=>{let t=i;if(t.isTextureNode!==!0&&t.traverse(o=>{o.isTextureNode===!0&&(t=o)}),t.isTextureNode!==!0)throw new Error("THREE.TSL: dHdxy_fwd() requires a TextureNode.");const n=N(i),s=t.uvNode||_i(),r=o=>i.cache().context({getUV:()=>o,forceUVContext:!0});return Le(N(r(s.add(s.dFdx()))).sub(n),N(r(s.add(s.dFdy()))).sub(n)).mul(e)}),OE=$(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(Yo),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class rp extends xt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=UE({textureNode:this.textureNode,bumpScale:e});return OE({surf_pos:wn,surf_norm:Qi,dHdxy:t})}}const FE=H(rp);D("bumpMap",FE);J("BumpMapNode",rp);const VE=$(({color:i,adjustment:e})=>e.mix(op(i.rgb),i.rgb)),zE=$(({color:i,adjustment:e})=>{const t=Ln(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Dn(i.rgb,n,s)}),BE=$(({color:i,adjustment:e})=>{const t=O(.57735,.57735,.57735),n=e.cos();return O(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(xr(t,i.rgb).mul(n.oneMinus())))))});class yn extends xt{constructor(e,t,n=N(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===yn.SATURATION?r=VE(s):e===yn.VIBRANCE?r=zE(s):e===yn.HUE?r=BE(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}yn.SATURATION="saturation";yn.VIBRANCE="vibrance";yn.HUE="hue";const HE=H(yn,yn.SATURATION),GE=H(yn,yn.VIBRANCE),kE=H(yn,yn.HUE),WE=O(.2125,.7154,.0721),op=(i,e=WE)=>xr(i,e),ap=(i,e)=>Dn(O(0),i,op(i).sub(e).max(0));D("saturation",HE);D("vibrance",GE);D("hue",kE);D("threshold",ap);J("ColorAdjustmentNode",yn);const XE=$(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),m=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(m.dot(m)),v=Yo.mul(_.inverseSqrt());return Ln(d.mul(n.x,v),m.mul(n.y,v),l.mul(n.z)).normalize()});class cp extends xt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=xs}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=O(s.xy.mul(n),s.z));let r=null;return t===Jh?r=lf.mul(s).normalize():t===xs&&(e.hasGeometryAttribute("tangent")===!0?r=Jf.mul(s).normalize():r=XE({eye_pos:wn,surf_norm:Qi,mapN:s,uv:_i()})),r}}const qE=H(cp);D("normalMap",qE);J("NormalMapNode",cp);class lp extends xt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const YE=H(lp);D("posterize",YE);J("PosterizeNode",lp);const jE=$(({color:i,exposure:e})=>i.mul(e).clamp()),$E=$(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),KE=$(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),ZE=$(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),JE=$(({color:i,exposure:e})=>{const t=ri(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=ri(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=ZE({color:i}),i=n.mul(i),i.clamp()}),QE=ri(O(1.6605,-.1246,-.0182),O(-.5876,1.1329,-.1006),O(-.0728,-.0083,1.1187)),eA=ri(O(.6274,.0691,.0164),O(.3293,.9195,.088),O(.0433,.0113,.8956)),tA=$(([i])=>{const e=O(i).toVar(),t=O(e.mul(e)).toVar(),n=O(t.mul(t)).toVar();return N(15.5).mul(n.mul(t)).sub(st(40.14,n.mul(e))).add(st(31.96,n).sub(st(6.868,t.mul(e))).add(st(.4298,t).add(st(.1191,e).sub(.00232))))}),nA=$(({color:i,exposure:e})=>{const t=O(i).toVar(),n=ri(O(.856627153315983,.137318972929847,.11189821299995),O(.0951212405381588,.761241990602591,.0767994186031903),O(.0482516061458583,.101439036467562,.811302368396859)),s=ri(O(1.1271005818144368,-.1413297634984383,-.14132976349843826),O(-.11060664309660323,1.157823702216272,-.11060664309660294),O(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=N(-12.47393),o=N(4.026069);return t.mulAssign(e),t.assign(eA.mul(t)),t.assign(n.mul(t)),t.assign(In(t,1e-10)),t.assign(gl(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(Gr(t,0,1)),t.assign(tA(t)),t.assign(s.mul(t)),t.assign(pi(In(O(0),t),O(2.2))),t.assign(QE.mul(t)),t.assign(Gr(t,0,1)),t}),iA={[Vh]:jE,[zh]:$E,[Bh]:KE,[Hh]:JE,[Gh]:nA};class up extends xt{constructor(e=ni,t=rA,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ni)return t;const s={exposure:this.exposureNode,color:t},r=iA[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const sA=(i,e,t)=>me(new up(i,me(e),me(t))),rA=SE("toneMappingExposure","float");D("toneMapping",(i,e,t)=>sA(e,t,i));J("ToneMappingNode",up);let _c=null;class hp extends Jr{constructor(e=Wr,t=null){_c===null&&(_c=new Md),super(e,t,_c)}updateReference(){return this}}const oA=H(hp);D("viewportSharedTexture",oA);J("ViewportSharedTextureNode",hp);class qc extends yr{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Qr extends xt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new $r;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Ji(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vr});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=vt.FRAME,this._textureNode=me(new qc(this,r.texture)),this._depthTextureNode=me(new qc(this,s)),this._depthNode=null,this._viewZNode=null,this._cameraNear=yt(0),this._cameraFar=yt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=Pf(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=Hc(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===Qr.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Se);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=ni,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Qr.COLOR="color";Qr.DEPTH="depth";const Ml=(i,e)=>me(new qc(i,e));J("PassNode",Qr);const vc=new tl(-1,1,1,-1,0,1);class aA extends ts{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ii(t,2))}}const cA=new aA;class ga extends ti{constructor(e=null){super(cA,e),this.camera=vc}renderAsync(e){return e.renderAsync(this,vc)}render(e){e.render(this,vc)}}const wh=new ga,Rh=new ga;class lA extends xt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Le(1),this._invSize=yt(new Se),this._passDirection=yt(new Se),this._horizontalRT=new Ji,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Ji,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Ml(this,this._verticalRT.texture),this.updateBeforeType=vt.RENDER,this.resolution=new Se(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;wh.material=this._material,Rh.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),wh.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Rh.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ae();const n=t.uvNode||_i(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=$(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Le(this.directionNode).mul(this._passDirection),d=N(l[0]).toVar(),m=Ae(s(n).mul(d)).toVar();for(let _=1;_<c;_++){const v=N(_),p=N(l[_]),f=Le(h.mul(u.mul(v))).toVar(),b=Ae(s(n.add(f))),y=Ae(s(n.sub(f)));m.addAssign(b.add(y).mul(p)),d.addAssign(st(2,p))}return m.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const uA=(i,e)=>me(new lA(me(i),e));D("gaussianBlur",uA);const Ch=new ga;class hA extends xt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Cn(),this.damp=yt(t),this._compRT=new Ji,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Ji,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Ml(this,this._compRT.texture),this.updateBeforeType=vt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=s.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),Ch.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(o),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ae();const s=t.uvNode||_i();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=$(([u,h])=>{const d=N(h).toVar(),m=Ae(u).toVar();return In(_l(m.sub(d)),0)}),a=$(()=>{const u=Ae(n),h=Ae(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),In(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),Ch.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const dA=(i,e)=>me(new hA(me(i),e));D("afterImage",dA);const Lh=new ga;class fA extends xt{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=O(.1,0,1),this.samples=s,this.resolution=new Se(1,1),this._renderTarget=new Ji,this._renderTarget.texture.name="anamorphic",this._invSize=yt(new Se),this._textureNode=Ml(this,this._renderTarget.texture),this.updateBeforeType=vt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Lh.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Lh.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ae();const n=t.uvNode||_i(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=$(()=>{const c=this.samples,l=Math.floor(c/2),u=O(0).toVar();return Mt({start:-l,end:l},({i:h})=>{const d=N(h).abs().div(l).oneMinus(),m=Le(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),_=s(m),v=ap(_,this.tresholdNode).mul(d);u.addAssign(v)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const pA=(i,e=.9,t=3,n=32)=>me(new fA(me(i),me(e),me(t),n));D("anamorphic",pA);class dp extends xt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=s[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of s){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const mA=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?tr(e):oa(e[0]),me(new dp(me(i),e)));D("call",mA);J("FunctionCallNode",dp);class fp extends be{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Fi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:N()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=wd(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Rd(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Lo=H(fp);D("scriptableValue",Lo);J("ScriptableValueNode",fp);class pp extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class gA{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const xc=new pp;class mp extends be{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new pp,this._output=Lo(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Lo(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Lo(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new gA(this),s=xc.get("THREE"),r=xc.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,xc,e,t,s,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:N()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const _A=H(mp);D("scriptable",_A);J("ScriptableNode",mp);class _a extends be{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||wn.z).negate()}setup(){return this.factorNode}}const vA=H(_a);D("fog",vA);J("FogNode",_a);class gp extends _a{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Oi(this.nearNode,this.farNode,t)}}const xA=H(gp);D("rangeFog",xA);J("FogRangeNode",gp);class _p extends _a{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const yA=H(_p);D("densityFog",yA);J("FogExp2Node",_p);let hs=null,ds=null;class vp extends be{constructor(e=N(),t=N()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(ji(this.minNode.value)),n=e.getTypeLength(ji(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(ji(s)),a=e.getTypeLength(ji(r));hs=hs||new ot,ds=ds||new ot,hs.setScalar(0),ds.setScalar(0),o===1?hs.setScalar(s):s.isColor?hs.set(s.r,s.g,s.b):hs.set(s.x,s.y,s.z||0,s.w||0),a===1?ds.setScalar(r):r.isColor?ds.set(r.r,r.g,r.b):ds.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const m=d%c,_=hs.getComponent(m),v=ds.getComponent(m);u[d]=Kc.lerp(_,v,Math.random())}const h=this.getNodeType(e);n=vl(u,"vec4",t.count).element(Hd).convert(h)}else n=N(0);return n}}H(vp);J("RangeNode",vp);class xp extends be{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=vt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const MA=(i,e,t)=>me(new xp(me(i),e,t));D("compute",MA);J("ComputeNode",xp);class Es extends be{constructor(e=Es.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Es.TARGET_DIRECTION&&(n=ns.transformDirection(Fc(t).sub(Fc(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Es.TARGET_DIRECTION="targetDirection";const yp=H(Es,Es.TARGET_DIRECTION);J("LightNode",Es);const Mp=$(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class Sp extends bs{constructor(e=null){super(e),this.cutoffDistanceNode=yt(0),this.decayExponentNode=yt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=cf(r).sub(wn),c=a.normalize(),l=a.length(),u=Mp({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d},e.stack,e)}}J("PointLightNode",Sp);Sr(Ky,Sp);class Tp extends bs{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=yp(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r},e.stack,e)}}J("DirectionalLightNode",Tp);Sr(Ed,Tp);class Sl extends bs{constructor(e=null){super(e),this.coneCosNode=yt(0),this.penumbraCosNode=yt(0),this.cutoffDistanceNode=yt(0),this.decayExponentNode=yt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Oi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=cf(o).sub(wn),c=a.normalize(),l=c.dot(yp(o)),u=this.getSpotAttenuation(l),h=a.length(),d=Mp({lightDistance:h,cutoffDistance:s,decayExponent:r}),m=n.mul(u).mul(d),_=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:m,reflectedLight:_},e.stack,e)}}J("SpotLightNode",Sl);Sr(Td,Sl);class Ep extends Sl{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Cn(t,Le(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}J("IESSpotLightNode",Ep);Sr(nM,Ep);class Ap extends bs{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}J("AmbientLightNode",Ap);Sr(Ad,Ap);class Np extends bs{constructor(e=null){super(e),this.lightPositionNode=Fc(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=yt(new Ve)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=Qi.dot(s).mul(.5).add(.5),a=Dn(n,t,o);e.context.irradiance.addAssign(a)}}J("HemisphereLightNode",Np);Sr(Yy,Np);const SA=$(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class bp extends xt{constructor(e=_i()){super("float"),this.uvNode=e}setup(){return SA({uv:this.uvNode})}}const TA=H(bp);D("checker",TA);J("CheckerNode",bp);const EA=new yd;class AA extends Yn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(EA),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=$(()=>{Ct(Le(),"vUv").assign(_i());const n=ln("instancePosition"),s=tn("vec4","mvPos");s.assign(Ts.mul(Ae(n,1)));const r=sr.z.div(sr.w),o=wi.mul(s),a=tn("vec2","offset");return a.assign(mn.xy),a.assign(a.mul(AT)),a.assign(a.div(sr.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Ae(a,0,0))),o})(),this.fragmentNode=$(()=>{const n=Ct(Le(),"vUv"),s=tn("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=tn("float","dlen");l.assign(a.fwidth()),s.assign(Oi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=ln("instanceColor").mul(kr):c=kr,Ae(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Sn("InstancedPointsNodeMaterial",AA);const NA=new xd;class bA extends Yn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(NA),this.setValues(e)}}Sn("LineBasicNodeMaterial",bA);const wA=new Sd;class RA extends Yn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(wA),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?N(this.dashScaleNode):Vc,n=this.dashSizeNode?N(this.dashSizeNode):df,s=this.dashSizeNode?N(this.dashGapNode):ff;ir.assign(n),Ho.assign(s);const r=Ct(ln("lineDistance").mul(t));(e?r.add(e):r).mod(ir.add(Ho)).greaterThan(ir).discard()}}Sn("LineDashedNodeMaterial",RA);const CA=new Sd;class LA extends Yn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(CA),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=$(({start:a,end:c})=>{const l=wi.element(2).element(2),d=wi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Ae(Dn(a.xyz,c.xyz,d),c.w)});this.vertexNode=$(()=>{ci("vec2","vUv").assign(_i());const a=ln("instanceStart"),c=ln("instanceEnd"),l=tn("vec4","start"),u=tn("vec4","end");l.assign(Ts.mul(Ae(a,1))),u.assign(Ts.mul(Ae(c,1))),s&&(ci("vec3","worldStart").assign(l.xyz),ci("vec3","worldEnd").assign(u.xyz));const h=sr.z.div(sr.w),d=wi.element(2).element(3).equal(-1);tt(d,()=>{tt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const m=wi.mul(l),_=wi.mul(u),v=m.xyz.div(m.w),p=_.xyz.div(_.w),f=p.xy.sub(v.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const b=Br(Ae());if(s){const y=u.xyz.sub(l.xyz).normalize(),R=Dn(l.xyz,u.xyz,.5).normalize(),F=y.cross(R).normalize(),C=y.cross(F),A=ci("vec4","worldPos");A.assign(mn.y.lessThan(.5).cond(l,u));const z=ac.mul(.5);A.addAssign(Ae(mn.x.lessThan(0).cond(F.mul(z),F.mul(z).negate()),0)),n||(A.addAssign(Ae(mn.y.lessThan(.5).cond(y.mul(z).negate(),y.mul(z)),0)),A.addAssign(Ae(C.mul(z),0)),tt(mn.y.greaterThan(1).or(mn.y.lessThan(0)),()=>{A.subAssign(Ae(C.mul(2).mul(z),0))})),b.assign(wi.mul(A));const T=Br(O());T.assign(mn.y.lessThan(.5).cond(v,p)),b.z.assign(T.z.mul(b.w))}else{const y=tn("vec2","offset");y.assign(Le(f.y,f.x.negate())),f.x.assign(f.x.div(h)),y.x.assign(y.x.div(h)),y.assign(mn.x.lessThan(0).cond(y.negate(),y)),tt(mn.y.lessThan(0),()=>{y.assign(y.sub(f))}).elseif(mn.y.greaterThan(1),()=>{y.assign(y.add(f))}),y.assign(y.mul(ac)),y.assign(y.div(sr.w)),b.assign(mn.y.lessThan(.5).cond(m,_)),y.assign(y.mul(b.w)),b.assign(b.add(Ae(y,0,0)))}return b})();const o=$(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),m=c.sub(a),_=h.dot(d),v=d.dot(m),p=h.dot(m),f=d.dot(d),y=m.dot(m).mul(f).sub(v.mul(v)),F=_.mul(v).sub(p.mul(f)).div(y).clamp(),C=_.add(v.mul(F)).div(f).clamp();return Le(F,C)});this.fragmentNode=$(()=>{const a=ci("vec2","vUv");if(n){const u=this.offsetNode?N(this.offsetNodeNode):hh,h=this.dashScaleNode?N(this.dashScaleNode):Vc,d=this.dashSizeNode?N(this.dashSizeNode):df,m=this.dashSizeNode?N(this.dashGapNode):ff;ir.assign(d),Ho.assign(m);const _=ln("instanceDistanceStart"),v=ln("instanceDistanceEnd"),p=mn.y.lessThan(.5).cond(h.mul(_),Vc.mul(v)),f=Ct(p.add(hh)),b=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),b.mod(ir.add(Ho)).greaterThan(ir).discard()}const c=tn("float","alpha");if(c.assign(1),s){const u=ci("vec3","worldStart"),h=ci("vec3","worldEnd"),d=ci("vec4","worldPos").xyz.normalize().mul(1e5),m=h.sub(u),_=o({p1:u,p2:h,p3:O(0,0,0),p4:d}),v=u.add(m.mul(_.x)),p=d.mul(_.y),y=v.sub(p).length().div(ac);if(!n)if(e){const R=y.fwidth();c.assign(Oi(R.negate().add(.5),R.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),m=tn("float","dlen");m.assign(d.fwidth()),tt(a.y.abs().greaterThan(1),()=>{c.assign(Oi(m.oneMinus(),m.add(1),d).oneMinus())})}else tt(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=ln("instanceColorStart"),h=ln("instanceColorEnd");l=mn.y.lessThan(.5).cond(u,h).mul(kr)}else l=kr;return Ae(l,c)})(),this.needsUpdate=!0}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.setupShaders())}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.setupShaders())}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Sn("Line2NodeMaterial",LA);const PA=new Xy;class IA extends Yn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.colorSpaced=!1,this.setDefaultValues(PA),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?N(this.opacityNode):hf;Jt.assign(Ae(Xf(It),e))}}Sn("MeshNormalNodeMaterial",IA);const DA=new Qc;class UA extends Yn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(DA),this.setValues(e)}}Sn("MeshBasicNodeMaterial",UA);const Xr=$(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),jo=$(i=>i.diffuseColor.mul(1/Math.PI)),OA=()=>N(.25),FA=$(({dotNH:i})=>Dc.mul(.5/Math.PI).add(1).mul(i.pow(Dc))),VA=$(({lightDirection:i})=>{const e=i.add(zt).normalize(),t=It.dot(e).clamp(),n=zt.dot(e).clamp(),s=Xr({f0:Ni,f90:1,dotVH:n}),r=OA(),o=FA({dotNH:t});return s.mul(r).mul(o)});class wp extends Gd{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=It.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(jo({diffuseColor:Jt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(VA({lightDirection:e})).mul(dT))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(jo({diffuseColor:Jt})))}}const zA=new qy;class BA extends Yn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(zA),this.setValues(e)}setupLightingModel(){return new wp(!1)}}Sn("MeshLambertNodeMaterial",BA);const HA=new Wy;class GA extends Yn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(HA),this.setValues(e)}setupLightingModel(){return new wp}setupVariants(){const e=(this.shininessNode?N(this.shininessNode):lT).max(1e-4);Dc.assign(e);const t=this.specularNode||hT;Ni.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Sn("MeshPhongNodeMaterial",GA);const kA=$(()=>{const i=ko.dFdx().abs().max(ko.dFdy().abs());return i.x.max(i.y).max(i.z)}),WA=$(i=>{const{roughness:e}=i,t=kA();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),XA=$(i=>{const{alpha:e,dotNL:t,dotNV:n}=i,s=e.pow2(),r=t.mul(s.add(s.oneMinus().mul(n.pow2())).sqrt()),o=n.mul(s.add(s.oneMinus().mul(t.pow2())).sqrt());return fr(.5,r.add(o).max(Kd))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),qA=$(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),Ph=$(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,iridescenceFresnel:r}=i,o=i.normalView||It,a=s.pow2(),c=e.add(zt).normalize(),l=o.dot(e).clamp(),u=o.dot(zt).clamp(),h=o.dot(c).clamp(),d=zt.dot(c).clamp();let m=Xr({f0:t,f90:n,dotVH:d});r&&(m=dl.mix(m,r));const _=XA({alpha:a,dotNL:l,dotNV:u}),v=qA({alpha:a,dotNH:h});return m.mul(_).mul(v)}),Rp=$(({roughness:i,dotNV:e})=>{const t=Ae(-1,-.0275,-.572,.022),n=Ae(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Le(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),YA=$(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=Rp({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),jA=$(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(O(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),$A=$(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=N(1).div(t),r=e.pow2().oneMinus().max(.0078125);return N(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),KA=$(({dotNV:i,dotNL:e})=>N(1).div(N(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),ZA=$(({lightDirection:i})=>{const e=i.add(zt).normalize(),t=It.dot(i).clamp(),n=It.dot(zt).clamp(),s=It.dot(e).clamp(),r=$A({roughness:hl,dotNH:s}),o=KA({dotNV:n,dotNL:t});return Ks.mul(r).mul(o)}),JA=ri(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),QA=i=>{const e=i.sqrt();return O(1).add(e).div(O(1).sub(e))},Ih=(i,e)=>i.sub(e).div(i.add(e)).pow2(),eN=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=O(54856e-17,44201e-17,52481e-17),s=O(1681e3,1795300,2208400),r=O(43278e5,93046e5,66121e5),o=N(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=O(a.x.add(o),a.y,a.z).div(10685e-11),JA.mul(a)},tN=$(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Dn(i,e,Oi(0,.03,n)),o=i.div(r).pow2().mul(N(1).sub(t.pow2())),c=N(1).sub(o).sqrt(),l=Ih(r,i),u=Xr({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(i).cond(Math.PI,0),m=N(Math.PI).sub(d),_=QA(s.clamp(0,.9999)),v=Ih(_,r.vec3()),p=Xr({f0:v,f90:1,dotVH:c}),f=O(_.x.lessThan(r).cond(Math.PI,0),_.y.lessThan(r).cond(Math.PI,0),_.z.lessThan(r).cond(Math.PI,0)),b=r.mul(n,c,2),y=O(m).add(f),R=u.mul(p).clamp(1e-5,.9999),F=R.sqrt(),C=h.pow2().mul(p).div(O(1).sub(R));let z=u.add(C),T=C.sub(h);for(let M=1;M<=2;++M){T=T.mul(F);const B=eN(N(M).mul(b),N(M).mul(y)).mul(2);z=z.add(T.mul(B))}return z.max(O(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),nN=$(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Rn(t.lessThan(.25),N(-339.2).mul(s).add(N(161.4).mul(t)).sub(25.9),N(-8.48).mul(s).add(N(14.3).mul(t)).sub(9.95)),o=Rn(t.lessThan(.25),N(44).mul(s).sub(N(23.7).mul(t)).add(3.26),N(1.97).mul(s).sub(N(3.27).mul(t)).add(.72));return Rn(t.lessThan(.25),0,N(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),yc=O(.04),Mc=O(1);class Tl extends Gd{constructor(e=!1,t=!1,n=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(){if(this.clearcoat===!0&&(this.clearcoatRadiance=O().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=O().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=O().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=O().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=O().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=It.dot(zt).clamp();this.iridescenceFresnel=tN({outsideIOR:N(1),eta2:Wd,cosTheta1:e,thinFilmThickness:Xd,baseF0:Ni}),this.iridescenceF0=jA({f:this.iridescenceFresnel,f90:1,dotVH:e})}}computeMultiscattering(e,t,n=N(1)){const s=It.dot(zt).clamp(),r=Rp({roughness:Fr,dotNV:s}),a=(this.iridescenceF0?dl.mix(Ni,this.iridescenceF0):Ni).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Ni.add(Ni.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=It.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(ZA({lightDirection:e}))),this.clearcoat===!0){const a=Zs.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Ph({lightDirection:e,f0:yc,f90:Mc,roughness:Bo,normalView:Zs})))}n.directDiffuse.addAssign(r.mul(jo({diffuseColor:Jt.rgb}))),n.directSpecular.addAssign(r.mul(Ph({lightDirection:e,f0:Ni,f90:1,roughness:Fr,iridescence:this.iridescence,iridescenceFresnel:this.iridescenceFresnel})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(jo({diffuseColor:Jt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Ks,nN({normal:It,viewDir:zt,roughness:hl}))),this.clearcoat===!0){const l=Zs.dot(zt).clamp(),u=YA({dotNV:l,specularColor:yc,specularF90:Mc,roughness:Bo});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=O().temp("singleScattering"),r=O().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r);const a=s.add(r),c=Jt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=It.dot(zt).clamp().add(e),r=Fr.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Zs.dot(zt).clamp(),s=Xr({dotVH:n,f0:yc,f90:Mc}),r=t.mul(Ic.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Ic));t.assign(r)}if(this.sheen===!0){const n=Ks.r.max(Ks.g).max(Ks.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const iN=new sl;class Cp extends Yn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(iN),this.setValues(e)}setupLightingModel(){return new Tl}setupVariants(){const e=this.metalnessNode?N(this.metalnessNode):pT;XM.assign(e);let t=this.roughnessNode?N(this.roughnessNode):fT;t=WA({roughness:t}),Fr.assign(t);const n=Dn(O(.04),Jt.rgb,e);Ni.assign(n),Jt.assign(Ae(Jt.rgb.mul(e.oneMinus()),Jt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Sn("MeshStandardNodeMaterial",Cp);const sN=new ky;class Lp extends Cp{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.setDefaultValues(sN),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}setupLightingModel(){return new Tl(this.useClearcoat,this.useSheen,this.useIridescence)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?N(this.clearcoatNode):gT,n=this.clearcoatRoughnessNode?N(this.clearcoatRoughnessNode):_T;Ic.assign(t),Bo.assign(n)}if(this.useSheen){const t=this.sheenNode?O(this.sheenNode):yT,n=this.sheenRoughnessNode?N(this.sheenRoughnessNode):MT;Ks.assign(t),hl.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?N(this.iridescenceNode):ST,n=this.iridescenceIORNode?N(this.iridescenceIORNode):TT,s=this.iridescenceThicknessNode?N(this.iridescenceThicknessNode):ET;dl.assign(t),Wd.assign(n),Xd.assign(s)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?O(this.clearcoatNormalNode):vT;Zs.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,super.copy(e)}}Sn("MeshPhysicalNodeMaterial",Lp);class rN extends Tl{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,m=e.add(It.mul(c)).normalize(),_=N(zt.dot(m.negate()).saturate().pow(h).mul(d)),v=O(_.add(l).mul(a));n.directDiffuse.addAssign(v.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class oN extends Lp{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=N(.1),this.thicknessAmbientNode=N(0),this.thicknessAttenuationNode=N(.1),this.thicknessPowerNode=N(2),this.thicknessScaleNode=N(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new rN(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Sn("MeshSSSNodeMaterial",oN);const aN=new yd;class cN extends Yn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(aN),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Sn("PointsNodeMaterial",cN);const lN=new Hy;class uN extends Yn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(lN),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=hn;let a=Ts.mul(O(n||0)),c=Le(Go[0].xyz.length(),Go[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(yt(e.center).sub(.5))),l=l.mul(c);const u=N(s||xT),h=l.rotate(u);a=Ae(a.xy.add(h),a.zw);const d=wi.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Sn("SpriteNodeMaterial",uN);const rr=$(([i,e,t])=>{const n=N(t).toVar(),s=N(e).toVar(),r=Ss(i).toVar();return Rn(r,s,n)}),qr=$(([i,e])=>{const t=Ss(e).toVar(),n=N(i).toVar();return Rn(t,n.negate(),n)}),Lt=$(([i])=>{const e=N(i).toVar();return w(vr(e))}),Tt=$(([i,e])=>{const t=N(i).toVar();return e.assign(Lt(t)),t.sub(N(e))}),Pp=$(([i,e,t,n,s,r])=>{const o=N(r).toVar(),a=N(s).toVar(),c=N(n).toVar(),l=N(t).toVar(),u=N(e).toVar(),h=N(i).toVar(),d=N(Dt(1,a)).toVar();return Dt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Ip=$(([i,e,t,n,s,r])=>{const o=N(r).toVar(),a=N(s).toVar(),c=O(n).toVar(),l=O(t).toVar(),u=O(e).toVar(),h=O(i).toVar(),d=N(Dt(1,a)).toVar();return Dt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Dp=jn([Pp,Ip]),Up=$(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=N(u).toVar(),d=N(l).toVar(),m=N(c).toVar(),_=N(a).toVar(),v=N(o).toVar(),p=N(r).toVar(),f=N(s).toVar(),b=N(n).toVar(),y=N(t).toVar(),R=N(e).toVar(),F=N(i).toVar(),C=N(Dt(1,m)).toVar(),A=N(Dt(1,d)).toVar();return N(Dt(1,h)).toVar().mul(A.mul(F.mul(C).add(R.mul(m))).add(d.mul(y.mul(C).add(b.mul(m))))).add(h.mul(A.mul(f.mul(C).add(p.mul(m))).add(d.mul(v.mul(C).add(_.mul(m))))))}),Op=$(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=N(u).toVar(),d=N(l).toVar(),m=N(c).toVar(),_=O(a).toVar(),v=O(o).toVar(),p=O(r).toVar(),f=O(s).toVar(),b=O(n).toVar(),y=O(t).toVar(),R=O(e).toVar(),F=O(i).toVar(),C=N(Dt(1,m)).toVar(),A=N(Dt(1,d)).toVar();return N(Dt(1,h)).toVar().mul(A.mul(F.mul(C).add(R.mul(m))).add(d.mul(y.mul(C).add(b.mul(m))))).add(h.mul(A.mul(f.mul(C).add(p.mul(m))).add(d.mul(v.mul(C).add(_.mul(m))))))}),Fp=jn([Up,Op]),Vp=$(([i,e,t])=>{const n=N(t).toVar(),s=N(e).toVar(),r=pe(i).toVar(),o=pe(r.bitAnd(pe(7))).toVar(),a=N(rr(o.lessThan(pe(4)),s,n)).toVar(),c=N(st(2,rr(o.lessThan(pe(4)),n,s))).toVar();return qr(a,Ss(o.bitAnd(pe(1)))).add(qr(c,Ss(o.bitAnd(pe(2)))))}),zp=$(([i,e,t,n])=>{const s=N(n).toVar(),r=N(t).toVar(),o=N(e).toVar(),a=pe(i).toVar(),c=pe(a.bitAnd(pe(15))).toVar(),l=N(rr(c.lessThan(pe(8)),o,r)).toVar(),u=N(rr(c.lessThan(pe(4)),r,rr(c.equal(pe(12)).or(c.equal(pe(14))),o,s))).toVar();return qr(l,Ss(c.bitAnd(pe(1)))).add(qr(u,Ss(c.bitAnd(pe(2)))))}),Zt=jn([Vp,zp]),Bp=$(([i,e,t])=>{const n=N(t).toVar(),s=N(e).toVar(),r=Zr(i).toVar();return O(Zt(r.x,s,n),Zt(r.y,s,n),Zt(r.z,s,n))}),Hp=$(([i,e,t,n])=>{const s=N(n).toVar(),r=N(t).toVar(),o=N(e).toVar(),a=Zr(i).toVar();return O(Zt(a.x,o,r,s),Zt(a.y,o,r,s),Zt(a.z,o,r,s))}),zn=jn([Bp,Hp]),Gp=$(([i])=>{const e=N(i).toVar();return st(.6616,e)}),kp=$(([i])=>{const e=N(i).toVar();return st(.982,e)}),Wp=$(([i])=>{const e=O(i).toVar();return st(.6616,e)}),Xp=jn([Gp,Wp]),qp=$(([i])=>{const e=O(i).toVar();return st(.982,e)}),Yp=jn([kp,qp]),gn=$(([i,e])=>{const t=w(e).toVar(),n=pe(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(w(32).sub(t)))}),jp=$(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(gn(t,w(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(gn(i,w(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(gn(e,w(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(gn(t,w(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(gn(i,w(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(gn(e,w(4))),e.addAssign(i)}),Tr=$(([i,e,t])=>{const n=pe(t).toVar(),s=pe(e).toVar(),r=pe(i).toVar();return n.bitXorAssign(s),n.subAssign(gn(s,w(14))),r.bitXorAssign(n),r.subAssign(gn(n,w(11))),s.bitXorAssign(r),s.subAssign(gn(r,w(25))),n.bitXorAssign(s),n.subAssign(gn(s,w(16))),r.bitXorAssign(n),r.subAssign(gn(n,w(4))),s.bitXorAssign(r),s.subAssign(gn(r,w(14))),n.bitXorAssign(s),n.subAssign(gn(s,w(24))),n}),sn=$(([i])=>{const e=pe(i).toVar();return N(e).div(N(pe(w(4294967295))))}),si=$(([i])=>{const e=N(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),$p=$(([i])=>{const e=w(i).toVar(),t=pe(pe(1)).toVar(),n=pe(pe(w(3735928559)).add(t.shiftLeft(pe(2)).add(pe(13)))).toVar();return Tr(n.add(pe(e)),n,n)}),Kp=$(([i,e])=>{const t=w(e).toVar(),n=w(i).toVar(),s=pe(pe(2)).toVar(),r=pe().toVar(),o=pe().toVar(),a=pe().toVar();return r.assign(o.assign(a.assign(pe(w(3735928559)).add(s.shiftLeft(pe(2)).add(pe(13)))))),r.addAssign(pe(n)),o.addAssign(pe(t)),Tr(r,o,a)}),Zp=$(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),r=w(i).toVar(),o=pe(pe(3)).toVar(),a=pe().toVar(),c=pe().toVar(),l=pe().toVar();return a.assign(c.assign(l.assign(pe(w(3735928559)).add(o.shiftLeft(pe(2)).add(pe(13)))))),a.addAssign(pe(r)),c.addAssign(pe(s)),l.addAssign(pe(n)),Tr(a,c,l)}),Jp=$(([i,e,t,n])=>{const s=w(n).toVar(),r=w(t).toVar(),o=w(e).toVar(),a=w(i).toVar(),c=pe(pe(4)).toVar(),l=pe().toVar(),u=pe().toVar(),h=pe().toVar();return l.assign(u.assign(h.assign(pe(w(3735928559)).add(c.shiftLeft(pe(2)).add(pe(13)))))),l.addAssign(pe(a)),u.addAssign(pe(o)),h.addAssign(pe(r)),jp(l,u,h),l.addAssign(pe(s)),Tr(l,u,h)}),Qp=$(([i,e,t,n,s])=>{const r=w(s).toVar(),o=w(n).toVar(),a=w(t).toVar(),c=w(e).toVar(),l=w(i).toVar(),u=pe(pe(5)).toVar(),h=pe().toVar(),d=pe().toVar(),m=pe().toVar();return h.assign(d.assign(m.assign(pe(w(3735928559)).add(u.shiftLeft(pe(2)).add(pe(13)))))),h.addAssign(pe(l)),d.addAssign(pe(c)),m.addAssign(pe(a)),jp(h,d,m),h.addAssign(pe(o)),d.addAssign(pe(r)),Tr(h,d,m)}),ut=jn([$p,Kp,Zp,Jp,Qp]),em=$(([i,e])=>{const t=w(e).toVar(),n=w(i).toVar(),s=pe(ut(n,t)).toVar(),r=Zr().toVar();return r.x.assign(s.bitAnd(w(255))),r.y.assign(s.shiftRight(w(8)).bitAnd(w(255))),r.z.assign(s.shiftRight(w(16)).bitAnd(w(255))),r}),tm=$(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),r=w(i).toVar(),o=pe(ut(r,s,n)).toVar(),a=Zr().toVar();return a.x.assign(o.bitAnd(w(255))),a.y.assign(o.shiftRight(w(8)).bitAnd(w(255))),a.z.assign(o.shiftRight(w(16)).bitAnd(w(255))),a}),Bn=jn([em,tm]),nm=$(([i])=>{const e=Le(i).toVar(),t=w().toVar(),n=w().toVar(),s=N(Tt(e.x,t)).toVar(),r=N(Tt(e.y,n)).toVar(),o=N(si(s)).toVar(),a=N(si(r)).toVar(),c=N(Dp(Zt(ut(t,n),s,r),Zt(ut(t.add(w(1)),n),s.sub(1),r),Zt(ut(t,n.add(w(1))),s,r.sub(1)),Zt(ut(t.add(w(1)),n.add(w(1))),s.sub(1),r.sub(1)),o,a)).toVar();return Xp(c)}),im=$(([i])=>{const e=O(i).toVar(),t=w().toVar(),n=w().toVar(),s=w().toVar(),r=N(Tt(e.x,t)).toVar(),o=N(Tt(e.y,n)).toVar(),a=N(Tt(e.z,s)).toVar(),c=N(si(r)).toVar(),l=N(si(o)).toVar(),u=N(si(a)).toVar(),h=N(Fp(Zt(ut(t,n,s),r,o,a),Zt(ut(t.add(w(1)),n,s),r.sub(1),o,a),Zt(ut(t,n.add(w(1)),s),r,o.sub(1),a),Zt(ut(t.add(w(1)),n.add(w(1)),s),r.sub(1),o.sub(1),a),Zt(ut(t,n,s.add(w(1))),r,o,a.sub(1)),Zt(ut(t.add(w(1)),n,s.add(w(1))),r.sub(1),o,a.sub(1)),Zt(ut(t,n.add(w(1)),s.add(w(1))),r,o.sub(1),a.sub(1)),Zt(ut(t.add(w(1)),n.add(w(1)),s.add(w(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Yp(h)}),hN=jn([nm,im]),sm=$(([i])=>{const e=Le(i).toVar(),t=w().toVar(),n=w().toVar(),s=N(Tt(e.x,t)).toVar(),r=N(Tt(e.y,n)).toVar(),o=N(si(s)).toVar(),a=N(si(r)).toVar(),c=O(Dp(zn(Bn(t,n),s,r),zn(Bn(t.add(w(1)),n),s.sub(1),r),zn(Bn(t,n.add(w(1))),s,r.sub(1)),zn(Bn(t.add(w(1)),n.add(w(1))),s.sub(1),r.sub(1)),o,a)).toVar();return Xp(c)}),rm=$(([i])=>{const e=O(i).toVar(),t=w().toVar(),n=w().toVar(),s=w().toVar(),r=N(Tt(e.x,t)).toVar(),o=N(Tt(e.y,n)).toVar(),a=N(Tt(e.z,s)).toVar(),c=N(si(r)).toVar(),l=N(si(o)).toVar(),u=N(si(a)).toVar(),h=O(Fp(zn(Bn(t,n,s),r,o,a),zn(Bn(t.add(w(1)),n,s),r.sub(1),o,a),zn(Bn(t,n.add(w(1)),s),r,o.sub(1),a),zn(Bn(t.add(w(1)),n.add(w(1)),s),r.sub(1),o.sub(1),a),zn(Bn(t,n,s.add(w(1))),r,o,a.sub(1)),zn(Bn(t.add(w(1)),n,s.add(w(1))),r.sub(1),o,a.sub(1)),zn(Bn(t,n.add(w(1)),s.add(w(1))),r,o.sub(1),a.sub(1)),zn(Bn(t.add(w(1)),n.add(w(1)),s.add(w(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Yp(h)}),dN=jn([sm,rm]),fN=$(([i])=>{const e=N(i).toVar(),t=w(Lt(e)).toVar();return sn(ut(t))}),pN=$(([i])=>{const e=Le(i).toVar(),t=w(Lt(e.x)).toVar(),n=w(Lt(e.y)).toVar();return sn(ut(t,n))}),mN=$(([i])=>{const e=O(i).toVar(),t=w(Lt(e.x)).toVar(),n=w(Lt(e.y)).toVar(),s=w(Lt(e.z)).toVar();return sn(ut(t,n,s))}),gN=$(([i])=>{const e=Ae(i).toVar(),t=w(Lt(e.x)).toVar(),n=w(Lt(e.y)).toVar(),s=w(Lt(e.z)).toVar(),r=w(Lt(e.w)).toVar();return sn(ut(t,n,s,r))}),om=$(([i])=>{const e=N(i).toVar(),t=w(Lt(e)).toVar();return O(sn(ut(t,w(0))),sn(ut(t,w(1))),sn(ut(t,w(2))))}),am=$(([i])=>{const e=Le(i).toVar(),t=w(Lt(e.x)).toVar(),n=w(Lt(e.y)).toVar();return O(sn(ut(t,n,w(0))),sn(ut(t,n,w(1))),sn(ut(t,n,w(2))))}),cm=$(([i])=>{const e=O(i).toVar(),t=w(Lt(e.x)).toVar(),n=w(Lt(e.y)).toVar(),s=w(Lt(e.z)).toVar();return O(sn(ut(t,n,s,w(0))),sn(ut(t,n,s,w(1))),sn(ut(t,n,s,w(2))))}),lm=$(([i])=>{const e=Ae(i).toVar(),t=w(Lt(e.x)).toVar(),n=w(Lt(e.y)).toVar(),s=w(Lt(e.z)).toVar(),r=w(Lt(e.w)).toVar();return O(sn(ut(t,n,s,r,w(0))),sn(ut(t,n,s,r,w(1))),sn(ut(t,n,s,r,w(2))))}),um=jn([om,am,cm,lm]),$o=$(([i,e,t,n])=>{const s=N(n).toVar(),r=N(t).toVar(),o=w(e).toVar(),a=O(i).toVar(),c=N(0).toVar(),l=N(1).toVar();return Mt({start:w(0),end:o},({i:u})=>{c.addAssign(l.mul(hN(a))),l.mulAssign(s),a.mulAssign(r)}),c}),hm=$(([i,e,t,n])=>{const s=N(n).toVar(),r=N(t).toVar(),o=w(e).toVar(),a=O(i).toVar(),c=O(0).toVar(),l=N(1).toVar();return Mt({start:w(0),end:o},({i:u})=>{c.addAssign(l.mul(dN(a))),l.mulAssign(s),a.mulAssign(r)}),c}),_N=$(([i,e,t,n])=>{const s=N(n).toVar(),r=N(t).toVar(),o=w(e).toVar(),a=O(i).toVar();return Le($o(a,o,r,s),$o(a.add(O(w(19),w(193),w(17))),o,r,s))}),vN=$(([i,e,t,n])=>{const s=N(n).toVar(),r=N(t).toVar(),o=w(e).toVar(),a=O(i).toVar(),c=O(hm(a,o,r,s)).toVar(),l=N($o(a.add(O(w(19),w(193),w(17))),o,r,s)).toVar();return Ae(c,l)}),dm=$(([i,e,t,n,s,r,o])=>{const a=w(o).toVar(),c=N(r).toVar(),l=w(s).toVar(),u=w(n).toVar(),h=w(t).toVar(),d=w(e).toVar(),m=Le(i).toVar(),_=O(um(Le(d.add(u),h.add(l)))).toVar(),v=Le(_.x,_.y).toVar();v.subAssign(.5),v.mulAssign(c),v.addAssign(.5);const p=Le(Le(N(d),N(h)).add(v)).toVar(),f=Le(p.sub(m)).toVar();return tt(a.equal(w(2)),()=>Vt(f.x).add(Vt(f.y))),tt(a.equal(w(3)),()=>In(Vt(f.x),Vt(f.y))),xr(f,f)}),fm=$(([i,e,t,n,s,r,o,a,c])=>{const l=w(c).toVar(),u=N(a).toVar(),h=w(o).toVar(),d=w(r).toVar(),m=w(s).toVar(),_=w(n).toVar(),v=w(t).toVar(),p=w(e).toVar(),f=O(i).toVar(),b=O(um(O(p.add(m),v.add(d),_.add(h)))).toVar();b.subAssign(.5),b.mulAssign(u),b.addAssign(.5);const y=O(O(N(p),N(v),N(_)).add(b)).toVar(),R=O(y.sub(f)).toVar();return tt(l.equal(w(2)),()=>Vt(R.x).add(Vt(R.y).add(Vt(R.z)))),tt(l.equal(w(3)),()=>In(In(Vt(R.x),Vt(R.y)),Vt(R.z))),xr(R,R)}),Er=jn([dm,fm]),xN=$(([i,e,t])=>{const n=w(t).toVar(),s=N(e).toVar(),r=Le(i).toVar(),o=w().toVar(),a=w().toVar(),c=Le(Tt(r.x,o),Tt(r.y,a)).toVar(),l=N(1e6).toVar();return Mt({start:-1,end:w(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:w(1),name:"y",condition:"<="},({y:h})=>{const d=N(Er(c,u,h,o,a,s,n)).toVar();l.assign(Hr(l,d))})}),tt(n.equal(w(0)),()=>{l.assign(Ns(l))}),l}),yN=$(([i,e,t])=>{const n=w(t).toVar(),s=N(e).toVar(),r=Le(i).toVar(),o=w().toVar(),a=w().toVar(),c=Le(Tt(r.x,o),Tt(r.y,a)).toVar(),l=Le(1e6,1e6).toVar();return Mt({start:-1,end:w(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:w(1),name:"y",condition:"<="},({y:h})=>{const d=N(Er(c,u,h,o,a,s,n)).toVar();tt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),tt(n.equal(w(0)),()=>{l.assign(Ns(l))}),l}),MN=$(([i,e,t])=>{const n=w(t).toVar(),s=N(e).toVar(),r=Le(i).toVar(),o=w().toVar(),a=w().toVar(),c=Le(Tt(r.x,o),Tt(r.y,a)).toVar(),l=O(1e6,1e6,1e6).toVar();return Mt({start:-1,end:w(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:w(1),name:"y",condition:"<="},({y:h})=>{const d=N(Er(c,u,h,o,a,s,n)).toVar();tt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),tt(n.equal(w(0)),()=>{l.assign(Ns(l))}),l}),SN=$(([i,e,t])=>{const n=w(t).toVar(),s=N(e).toVar(),r=O(i).toVar(),o=w().toVar(),a=w().toVar(),c=w().toVar(),l=O(Tt(r.x,o),Tt(r.y,a),Tt(r.z,c)).toVar(),u=N(1e6).toVar();return Mt({start:-1,end:w(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:w(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:w(1),name:"z",condition:"<="},({z:m})=>{const _=N(Er(l,h,d,m,o,a,c,s,n)).toVar();u.assign(Hr(u,_))})})}),tt(n.equal(w(0)),()=>{u.assign(Ns(u))}),u}),TN=$(([i,e,t])=>{const n=w(t).toVar(),s=N(e).toVar(),r=O(i).toVar(),o=w().toVar(),a=w().toVar(),c=w().toVar(),l=O(Tt(r.x,o),Tt(r.y,a),Tt(r.z,c)).toVar(),u=Le(1e6,1e6).toVar();return Mt({start:-1,end:w(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:w(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:w(1),name:"z",condition:"<="},({z:m})=>{const _=N(Er(l,h,d,m,o,a,c,s,n)).toVar();tt(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),tt(n.equal(w(0)),()=>{u.assign(Ns(u))}),u}),EN=$(([i,e,t])=>{const n=w(t).toVar(),s=N(e).toVar(),r=O(i).toVar(),o=w().toVar(),a=w().toVar(),c=w().toVar(),l=O(Tt(r.x,o),Tt(r.y,a),Tt(r.z,c)).toVar(),u=O(1e6,1e6,1e6).toVar();return Mt({start:-1,end:w(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:w(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:w(1),name:"z",condition:"<="},({z:m})=>{const _=N(Er(l,h,d,m,o,a,c,s,n)).toVar();tt(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).elseif(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),tt(n.equal(w(0)),()=>{u.assign(Ns(u))}),u});rr.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});qr.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Lt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});Pp.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});Ip.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});Up.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Op.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Vp.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});zp.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Bp.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});Hp.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Gp.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});kp.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});Wp.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});qp.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});gn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Tr.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});sn.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});si.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});$p.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});Kp.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Zp.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Jp.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});Qp.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});em.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});tm.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});nm.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});im.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});sm.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});rm.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});fN.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});pN.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});mN.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});gN.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});om.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});am.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});cm.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});lm.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});$o.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});hm.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});_N.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});vN.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});dm.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});fm.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});xN.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});yN.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});MN.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});SN.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});TN.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});EN.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const AN=$(([i])=>{const e=O(i).toVar(),t=N(e.x).toVar(),n=N(e.y).toVar(),s=N(e.z).toVar();tt(n.lessThan(1e-4),()=>O(s,s,s)).else(()=>{t.assign(st(6,t.sub(vr(t))));const r=w(Qd(t)).toVar(),o=N(t.sub(N(r))).toVar(),a=N(s.mul(Dt(1,n))).toVar(),c=N(s.mul(Dt(1,n.mul(o)))).toVar(),l=N(s.mul(Dt(1,n.mul(Dt(1,o))))).toVar();return tt(r.equal(w(0)),()=>O(s,l,a)).elseif(r.equal(w(1)),()=>O(c,s,a)).elseif(r.equal(w(2)),()=>O(a,s,l)).elseif(r.equal(w(3)),()=>O(a,c,s)).elseif(r.equal(w(4)),()=>O(l,a,s)),O(s,a,c)})}),NN=$(([i])=>{const e=O(i).toVar(),t=N(e.x).toVar(),n=N(e.y).toVar(),s=N(e.z).toVar(),r=N(Hr(t,Hr(n,s))).toVar(),o=N(In(t,In(n,s))).toVar(),a=N(o.sub(r)).toVar(),c=N().toVar(),l=N().toVar(),u=N().toVar();return u.assign(o),tt(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),tt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{tt(t.greaterThanEqual(o),()=>{c.assign(n.sub(s).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(Ln(2,s.sub(t).div(a)))}).else(()=>{c.assign(Ln(4,t.sub(n).div(a)))}),c.mulAssign(1/6),tt(c.lessThan(0),()=>{c.addAssign(1)})}),O(c,l,u)});AN.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});NN.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const bN=$(([i])=>{const e=O(i).toVar(),t=Dd($d(e,O(.04045))).toVar(),n=O(e.div(12.92)).toVar(),s=O(pi(In(e.add(O(.055)),O(0)).div(1.055),O(2.4))).toVar();return Dn(n,s,t)});bN.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});class El extends ti{constructor(e,t,n,s=65280,r={x:0,y:0,z:0},o={x:0,y:0,z:0},a=!1){super(new mr(e,t,n),new sl({color:s})),this.width=e,this.height=t,this.depth=n,this.position.set(o.x,o.y,o.z),this.detectSides(),this.velocity=r,this.gravity=-.002,this.zAceleratio=a}detectSides(){this.right=this.position.x+this.width/2,this.left=this.position.x-this.width/2,this.front=this.position.z+this.depth/2,this.back=this.position.z-this.depth/2,this.bottom=this.position.y-this.height/2,this.top=this.position.y+this.height/2}updateBoTo(e,t=!1){this.detectSides(),t&&(this.velocity.z+=3e-4),this.position.x+=this.velocity.x,this.position.z+=this.velocity.z,this.applyGravity(e)}applyGravity(e){this.velocity.y+=this.gravity,this.boxCollicion(this,e)?(this.velocity.y*=.8,this.velocity.y=-this.velocity.y):this.position.y+=this.velocity.y}boxCollicion(e,t){const n=e.right>=t.left&&e.left<=t.right,s=e.front>=t.back&&e.back<=t.front,r=e.bottom+e.velocity.y<=t.top&&e.top>=t.bottom;return n&&s&&r}}const pr=new By,va=new _n(75,window.innerWidth/window.innerHeight,.1,1e3),eo=new zy(!0,!0);eo.shadowMap.enabled=!0;eo.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(eo.domElement);new eM(va,eo.domElement);const Vn=new El(1,1,1,"#00ff00",{x:0,y:-.01,z:0},{x:0,y:0,z:20});Vn.castShadow=!0;pr.add(Vn);const Ko=new El(5,.5,40,"#0000ff",{x:0,y:0,z:0},{x:0,y:-2,z:0});Ko.receiveShadow=!0;pr.add(Ko);pr.add(new Ad(16777215,.3));const xa=new Ed(16777215,1);xa.position.y=2;xa.position.z=1;xa.castShadow=!0;pr.add(xa);va.position.z=30;va.position.y=5;const Hn={a:{pressed:!1},d:{pressed:!1},s:{pressed:!1},w:{pressed:!1},space:{pressed:!1}};let Dh=0;const wN=2050;window.addEventListener("keydown",i=>{switch(i.code){case"KeyA":Hn.a.pressed=!0;break;case"KeyD":Hn.d.pressed=!0;break;case"KeyS":Hn.w.pressed=!0;break;case"KeyW":Hn.s.pressed=!0;break;case"Space":const e=performance.now();e-Dh>wN&&(Vn.velocity.y=.1,Dh=e);break}});window.addEventListener("keyup",i=>{switch(i.code){case"KeyA":Hn.a.pressed=!1;break;case"KeyD":Hn.d.pressed=!1;break;case"KeyS":Hn.w.pressed=!1;break;case"KeyW":Hn.s.pressed=!1;break}});const Uh=[];let Oh=0,Sc=200;function pm(){const i=requestAnimationFrame(pm);if(eo.render(pr,va),Vn.velocity.x=0,Hn.a.pressed?Vn.velocity.x=-.05:Hn.d.pressed&&(Vn.velocity.x=.05),Vn.velocity.z=0,Hn.s.pressed?Vn.velocity.z=-.05:Hn.w.pressed&&(Vn.velocity.z=.05),Vn.updateBoTo(Ko),Uh.forEach(e=>{e.updateBoTo(Ko,!0),Vn.boxCollicion(Vn,e)&&window.cancelAnimationFrame(i)}),Oh%Sc===0){Sc>20&&(Sc-=1);const e=new El(1,1,1,"red",{x:0,y:0,z:.005},{x:(Math.random()-.5)*5,y:0,z:-20},!0);e.castShadow=!0,pr.add(e),Uh.push(e)}Oh++}pm();
