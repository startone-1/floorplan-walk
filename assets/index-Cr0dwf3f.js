(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="172",Dc=0,uo=1,Uc=2,_l=1,xl=2,vn=3,Tn=0,Re=1,Ve=2,Fn=0,Pi=1,ho=2,fo=3,po=4,zc=5,ni=100,Nc=101,Fc=102,Oc=103,Bc=104,Hc=200,kc=201,Vc=202,Gc=203,Zs=204,$s=205,Wc=206,Xc=207,Yc=208,qc=209,Zc=210,$c=211,Kc=212,jc=213,Jc=214,Ks=0,js=1,Js=2,Di=3,Qs=4,ta=5,ea=6,na=7,vl=0,Qc=1,tu=2,On=0,eu=1,nu=2,iu=3,Ml=4,ru=5,su=6,au=7,Sl=300,Ui=301,zi=302,ia=303,ra=304,is=306,Kr=1e3,ri=1001,sa=1002,tn=1003,ou=1004,_r=1005,ln=1006,ms=1007,Un=1008,wn=1009,yl=1010,El=1011,ir=1012,Ba=1013,si=1014,Mn=1015,cr=1016,Ha=1017,ka=1018,Ni=1020,bl=35902,Tl=1021,wl=1022,Qe=1023,Al=1024,Rl=1025,Li=1026,Fi=1027,Cl=1028,Va=1029,Pl=1030,Ga=1031,Wa=1033,Vr=33776,Gr=33777,Wr=33778,Xr=33779,aa=35840,oa=35841,la=35842,ca=35843,ua=36196,da=37492,ha=37496,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,xa=37813,va=37814,Ma=37815,Sa=37816,ya=37817,Ea=37818,ba=37819,Ta=37820,wa=37821,Yr=36492,Aa=36494,Ra=36495,Ll=36283,Ca=36284,Pa=36285,La=36286,lu=3200,cu=3201,Il=0,uu=1,Dn="",Ae="srgb",Oi="srgb-linear",jr="linear",te="srgb",ci=7680,mo=519,du=512,hu=513,fu=514,Dl=515,pu=516,mu=517,gu=518,_u=519,Ia=35044,go="300 es",Sn=2e3,Jr=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const er=Math.PI/180,rr=180/Math.PI;function En(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function Ot(n,t,e){return Math.max(t,Math.min(e,n))}function Xa(n,t){return(n%t+t)%t}function xu(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function vu(n,t,e){return n!==t?(e-n)/(t-n):0}function nr(n,t,e){return(1-e)*n+e*t}function Mu(n,t,e,i){return nr(n,t,1-Math.exp(-e*i))}function Su(n,t=1){return t-Math.abs(Xa(n,t*2)-t)}function yu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Eu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tu(n,t){return n+Math.random()*(t-n)}function wu(n){return n*(.5-Math.random())}function Au(n){n!==void 0&&(_o=n);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ru(n){return n*er}function Cu(n){return n*rr}function Pu(n){return(n&n-1)===0&&n!==0}function Lu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Iu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Du(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),f=s((t-i)/2),d=a((t-i)/2),m=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gs={DEG2RAD:er,RAD2DEG:rr,generateUUID:En,clamp:Ot,euclideanModulo:Xa,mapLinear:xu,inverseLerp:vu,lerp:nr,damp:Mu,pingpong:Su,smoothstep:yu,smootherstep:Eu,randInt:bu,randFloat:Tu,randFloatSpread:wu,seededRandom:Au,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Lu,floorPowerOfTwo:Iu,setQuaternionFromProperEuler:Du,normalize:jt,denormalize:Ke};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,i,r,s,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],v=r[0],p=r[3],h=r[6],R=r[1],A=r[4],g=r[7],T=r[2],b=r[5],E=r[8];return s[0]=a*v+o*R+l*T,s[3]=a*p+o*A+l*b,s[6]=a*h+o*g+l*E,s[1]=c*v+u*R+f*T,s[4]=c*p+u*A+f*b,s[7]=c*h+u*g+f*E,s[2]=d*v+m*R+_*T,s[5]=d*p+m*A+_*b,s[8]=d*h+m*g+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=e*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=d*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_s.makeScale(t,e)),this}rotate(t){return this.premultiply(_s.makeRotation(-t)),this}translate(t,e){return this.premultiply(_s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new Lt;function Ul(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uu(){const n=Qr("canvas");return n.style.display="block",n}const xo={};function Ai(n){n in xo||(xo[n]=!0,console.warn(n))}function zu(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Nu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vo=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mo=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){const n={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(r.r=bn(r.r),r.g=bn(r.g),r.b=bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dn?jr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Oi]:{primaries:t,whitePoint:i,transfer:jr,toXYZ:vo,fromXYZ:Mo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:i,transfer:te,toXYZ:vo,fromXYZ:Mo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),n}const qt=Ou();function bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ii(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ui;class Bu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=Qr("canvas")),ui.width=t.width,ui.height=t.height;const i=ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bn(e[i]/255)*255):e[i]=bn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hu=0;class zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xs(r[a].image)):s.push(xs(r[a]))}else s=xs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function xs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ku=0;class Ce extends Hi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=ri,r=ri,s=ln,a=Un,o=Qe,l=wn,c=Ce.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=En(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kr:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kr:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Sl;Ce.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,i=0,r=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,g=(m+1)/2,T=(h+1)/2,b=(u+d)/4,E=(f+v)/4,C=(_+p)/4;return A>g&&A>T?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=E/i):g>T?g<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),i=b/r,s=C/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=E/s,r=C/s),this.set(i,r,s,e),this}let R=Math.sqrt((p-_)*(p-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(p-_)/R,this.y=(f-v)/R,this.z=(d-u)/R,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ce(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Vu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Nl extends Ce{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends Ce{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(f!==v||l!==d||c!==m||u!==_){let p=1-o;const h=l*d+c*m+u*_+f*v,R=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const T=Math.sqrt(A),b=Math.atan2(T,h*R);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T}const g=o*R;if(l=l*p+d*g,c=c*p+m*g,u=u*p+_*g,f=f*p+v*g,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+u*f+l*m-c*d,t[e+1]=l*_+u*d+c*f-o*m,t[e+2]=c*_+u*m+o*d-l*f,t[e+3]=u*_-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ot(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vs.copy(this).projectOnVector(t),this.sub(vs)}reflect(t){return this.sub(vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new z,So=new ur;class dr{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(s,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),vr.subVectors(this.max,Xi),di.subVectors(t.a,Xi),hi.subVectors(t.b,Xi),fi.subVectors(t.c,Xi),An.subVectors(hi,di),Rn.subVectors(fi,hi),Zn.subVectors(di,fi);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Zn.z,Zn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Zn.z,0,-Zn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Zn.y,Zn.x,0];return!Ms(e,di,hi,fi,vr)||(e=[1,0,0,0,1,0,0,0,1],!Ms(e,di,hi,fi,vr))?!1:(Mr.crossVectors(An,Rn),e=[Mr.x,Mr.y,Mr.z],Ms(e,di,hi,fi,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new z,new z,new z,new z,new z,new z,new z,new z],qe=new z,xr=new dr,di=new z,hi=new z,fi=new z,An=new z,Rn=new z,Zn=new z,Xi=new z,vr=new z,Mr=new z,$n=new z;function Ms(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$n.fromArray(n,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=i.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wu=new dr,Yi=new z,Ss=new z;class Ya{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Wu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Yi,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(Ss)),this.expandByPoint(Yi.copy(t.center).sub(Ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new z,ys=new z,Sr=new z,Cn=new z,Es=new z,yr=new z,bs=new z;class Xu{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ys.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(ys);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=Cn.dot(this.direction),l=-Cn.dot(Sr),c=Cn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ys).addScaledVector(Sr,d),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const i=mn.dot(this.direction),r=mn.dot(mn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,r,s){Es.subVectors(e,t),yr.subVectors(i,t),bs.crossVectors(Es,yr);let a=this.direction.dot(bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);const l=o*this.direction.dot(yr.crossVectors(Cn,yr));if(l<0)return null;const c=o*this.direction.dot(Es.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(bs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,r,s,a,o,l,c,u,f,d,m,_,v,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,d,m,_,v,p)}set(t,e,i,r,s,a,o,l,c,u,f,d,m,_,v,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/pi.setFromMatrixColumn(t,0).length(),s=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*f,_=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*f,_=c*u,v=c*f;e[0]=d+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*f,_=c*u,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*f,_=o*u,v=o*f;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-d*f,e[8]=_*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+_,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+v,e[5]=a*u,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yu,t,qu)}lookAt(t,e,i){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Pn.crossVectors(i,Ie),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Pn.crossVectors(i,Ie)),Pn.normalize(),Er.crossVectors(Ie,Pn),r[0]=Pn.x,r[4]=Er.x,r[8]=Ie.x,r[1]=Pn.y,r[5]=Er.y,r[9]=Ie.y,r[2]=Pn.z,r[6]=Er.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],v=i[6],p=i[10],h=i[14],R=i[3],A=i[7],g=i[11],T=i[15],b=r[0],E=r[4],C=r[8],x=r[12],M=r[1],P=r[5],N=r[9],O=r[13],G=r[2],q=r[6],W=r[10],K=r[14],k=r[3],nt=r[7],dt=r[11],Mt=r[15];return s[0]=a*b+o*M+l*G+c*k,s[4]=a*E+o*P+l*q+c*nt,s[8]=a*C+o*N+l*W+c*dt,s[12]=a*x+o*O+l*K+c*Mt,s[1]=u*b+f*M+d*G+m*k,s[5]=u*E+f*P+d*q+m*nt,s[9]=u*C+f*N+d*W+m*dt,s[13]=u*x+f*O+d*K+m*Mt,s[2]=_*b+v*M+p*G+h*k,s[6]=_*E+v*P+p*q+h*nt,s[10]=_*C+v*N+p*W+h*dt,s[14]=_*x+v*O+p*K+h*Mt,s[3]=R*b+A*M+g*G+T*k,s[7]=R*E+A*P+g*q+T*nt,s[11]=R*C+A*N+g*W+T*dt,s[15]=R*x+A*O+g*K+T*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],m=t[14],_=t[3],v=t[7],p=t[11],h=t[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+e*c*f-e*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-e*l*f+e*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],m=t[11],_=t[12],v=t[13],p=t[14],h=t[15],R=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,A=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,g=u*v*c-_*f*c+_*o*m-a*v*m-u*o*h+a*f*h,T=_*f*l-u*v*l-_*o*d+a*v*d+u*o*p-a*f*p,b=e*R+i*A+r*g+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=R*E,t[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*E,t[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*E,t[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*E,t[4]=A*E,t[5]=(u*p*s-_*d*s+_*r*m-e*p*m-u*r*h+e*d*h)*E,t[6]=(_*l*s-a*p*s-_*r*c+e*p*c+a*r*h-e*l*h)*E,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*E,t[8]=g*E,t[9]=(_*f*s-u*v*s-_*i*m+e*v*m+u*i*h-e*f*h)*E,t[10]=(a*v*s-_*o*s+_*i*c-e*v*c-a*i*h+e*o*h)*E,t[11]=(u*o*s-a*f*s-u*i*c+e*f*c+a*i*m-e*o*m)*E,t[12]=T*E,t[13]=(u*v*r-_*f*r+_*i*d-e*v*d-u*i*p+e*f*p)*E,t[14]=(_*o*r-a*v*r-_*i*l+e*v*l+a*i*p-e*o*p)*E,t[15]=(a*f*r-u*o*r+u*i*l-e*f*l-a*i*d+e*o*d)*E,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,_=s*f,v=a*u,p=a*f,h=o*f,R=l*c,A=l*u,g=l*f,T=i.x,b=i.y,E=i.z;return r[0]=(1-(v+h))*T,r[1]=(m+g)*T,r[2]=(_-A)*T,r[3]=0,r[4]=(m-g)*b,r[5]=(1-(d+h))*b,r[6]=(p+R)*b,r[7]=0,r[8]=(_+A)*E,r[9]=(p-R)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ze.copy(this);const c=1/s,u=1/a,f=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=f,Ze.elements[9]*=f,Ze.elements[10]*=f,e.setFromRotationMatrix(Ze),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Sn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let m,_;if(o===Sn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Jr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Sn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(a-s),d=(e+t)*c,m=(i+r)*u;let _,v;if(o===Sn)_=(a+s)*f,v=-2*f;else if(o===Jr)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const pi=new z,Ze=new ae,Yu=new z(0,0,0),qu=new z(1,1,1),Pn=new z,Er=new z,Ie=new z,yo=new ae,Eo=new ur;class cn{constructor(t=0,e=0,i=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zu=0;const bo=new z,mi=new ur,gn=new ae,br=new z,qi=new z,$u=new z,Ku=new ur,To=new z(1,0,0),wo=new z(0,1,0),Ao=new z(0,0,1),Ro={type:"added"},ju={type:"removed"},gi={type:"childadded",child:null},Ts={type:"childremoved",child:null};class xe extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new z,e=new cn,i=new ur,r=new z(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new Lt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(wo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return bo.copy(t).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(wo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?br.copy(t):br.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(qi,br,this.up):gn.lookAt(br,qi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(gn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ro),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ro),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,$u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}xe.DEFAULT_UP=new z(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new z,_n=new z,ws=new z,xn=new z,_i=new z,xi=new z,Co=new z,As=new z,Rs=new z,Cs=new z,Ps=new ee,Ls=new ee,Is=new ee;class Ge{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),$e.subVectors(t,e),r.cross($e);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){$e.subVectors(r,e),_n.subVectors(i,e),ws.subVectors(t,e);const a=$e.dot($e),o=$e.dot(_n),l=$e.dot(ws),c=_n.dot(_n),u=_n.dot(ws),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ps.setScalar(0),Ls.setScalar(0),Is.setScalar(0),Ps.fromBufferAttribute(t,e),Ls.fromBufferAttribute(t,i),Is.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ps,s.x),a.addScaledVector(Ls,s.y),a.addScaledVector(Is,s.z),a}static isFrontFacing(t,e,i,r){return $e.subVectors(i,e),_n.subVectors(t,e),$e.cross(_n).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),$e.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ge.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,i),xi.subVectors(s,i),As.subVectors(t,i);const l=_i.dot(As),c=xi.dot(As);if(l<=0&&c<=0)return e.copy(i);Rs.subVectors(t,r);const u=_i.dot(Rs),f=xi.dot(Rs);if(u>=0&&f<=u)return e.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(_i,a);Cs.subVectors(t,s);const m=_i.dot(Cs),_=xi.dot(Cs);if(_>=0&&m<=_)return e.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(xi,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Co.subVectors(s,r),o=(f-u)/(f-u+(m-_)),e.copy(r).addScaledVector(Co,o);const h=1/(p+v+d);return a=v*h,o=d*h,e.copy(i).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Ds(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=Xa(t,1),e=Ot(e,0,1),i=Ot(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ds(a,s,t+1/3),this.g=Ds(a,s,t),this.b=Ds(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ae){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const i=Ol[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ot(ye.r*255,0,255))*65536+Math.round(Ot(ye.g*255,0,255))*256+Math.round(Ot(ye.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,r=ye.g,s=ye.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Ae){qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,r=ye.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Tr);const i=nr(Ln.h,Tr.h,e),r=nr(Ln.s,Tr.s,e),s=nr(Ln.l,Tr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Bt;Bt.NAMES=Ol;let Ju=0;class ki extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Pi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zs,this.blendDst=$s,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(i.blending=this.blending),this.side!==Tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zs&&(i.blendSrc=this.blendSrc),this.blendDst!==$s&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sr extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new z,wr=new Ut;class en{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ia,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ke(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class Bl extends en{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hl extends en{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends en{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Qu=0;const He=new ae,Us=new xe,vi=new z,De=new dr,Zi=new dr,_e=new z;class rn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ul(t)?Hl:Bl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Lt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,i){return He.makeTranslation(t,e,i),this.applyMatrix4(He),this}scale(t,e,i){return He.makeScale(t,e,i),this.applyMatrix4(He),this}lookAt(t){return Us.lookAt(t),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];De.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(De.min,Zi.min),De.expandByPoint(_e),_e.addVectors(De.max,Zi.max),De.expandByPoint(_e)):(De.expandByPoint(Zi.min),De.expandByPoint(Zi.max))}De.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)_e.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(_e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_e.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),_e.add(vi)),r=Math.max(r,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new z,l[C]=new z;const c=new z,u=new z,f=new z,d=new Ut,m=new Ut,_=new Ut,v=new z,p=new z;function h(C,x,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,x),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(v),o[x].add(v),o[M].add(v),l[C].add(p),l[x].add(p),l[M].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,x=R.length;C<x;++C){const M=R[C],P=M.start,N=M.count;for(let O=P,G=P+N;O<G;O+=3)h(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const A=new z,g=new z,T=new z,b=new z;function E(C){T.fromBufferAttribute(r,C),b.copy(T);const x=o[C];A.copy(x),A.sub(T.multiplyScalar(T.dot(x))).normalize(),g.crossVectors(b,x);const P=g.dot(l[C])<0?-1:1;a.setXYZW(C,A.x,A.y,A.z,P)}for(let C=0,x=R.length;C<x;++C){const M=R[C],P=M.start,N=M.count;for(let O=P,G=P+N;O<G;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new en(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new ae,Kn=new Xu,Ar=new Ya,Lo=new z,Rr=new z,Cr=new z,Pr=new z,zs=new z,Lr=new z,Io=new z,Ir=new z;class zt extends xe{constructor(t=new rn,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Lr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(zs.fromBufferAttribute(f,t),a?Lr.addScaledVector(zs,u):Lr.addScaledVector(zs.sub(e),u))}e.add(Lr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(s),Kn.copy(t.ray).recast(t.near),!(Ar.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ar,Lo)===null||Kn.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Po.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(Po),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const p=d[_],h=a[p.materialIndex],R=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let g=R,T=A;g<T;g+=3){const b=o.getX(g),E=o.getX(g+1),C=o.getX(g+2);r=Dr(this,h,t,i,c,u,f,b,E,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const R=o.getX(p),A=o.getX(p+1),g=o.getX(p+2);r=Dr(this,a,t,i,c,u,f,R,A,g),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const p=d[_],h=a[p.materialIndex],R=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=R,T=A;g<T;g+=3){const b=g,E=g+1,C=g+2;r=Dr(this,h,t,i,c,u,f,b,E,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const R=p,A=p+1,g=p+2;r=Dr(this,a,t,i,c,u,f,R,A,g),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function td(n,t,e,i,r,s,a,o){let l;if(t.side===Re?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Tn,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:n}}function Dr(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Rr),n.getVertexPosition(l,Cr),n.getVertexPosition(c,Pr);const u=td(n,t,e,i,Rr,Cr,Pr,Io);if(u){const f=new z;Ge.getBarycoord(Io,Rr,Cr,Pr,f),r&&(u.uv=Ge.getInterpolatedAttribute(r,o,l,c,f,new Ut)),s&&(u.uv1=Ge.getInterpolatedAttribute(s,o,l,c,f,new Ut)),a&&(u.normal=Ge.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};Ge.getNormal(Rr,Cr,Pr,d.normal),u.face=d,u.barycoord=f}return u}class le extends rn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2));function _(v,p,h,R,A,g,T,b,E,C,x){const M=g/E,P=T/C,N=g/2,O=T/2,G=b/2,q=E+1,W=C+1;let K=0,k=0;const nt=new z;for(let dt=0;dt<W;dt++){const Mt=dt*P-O;for(let Nt=0;Nt<q;Nt++){const ne=Nt*M-N;nt[v]=ne*R,nt[p]=Mt*A,nt[h]=G,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[p]=0,nt[h]=b>0?1:-1,u.push(nt.x,nt.y,nt.z),f.push(Nt/E),f.push(1-dt/C),K+=1}}for(let dt=0;dt<C;dt++)for(let Mt=0;Mt<E;Mt++){const Nt=d+Mt+q*dt,ne=d+Mt+q*(dt+1),Y=d+(Mt+1)+q*(dt+1),et=d+(Mt+1)+q*dt;l.push(Nt,ne,et),l.push(ne,Y,et),k+=6}o.addGroup(m,k,x),m+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function we(n){const t={};for(let e=0;e<n.length;e++){const i=Bi(n[e]);for(const r in i)t[r]=i[r]}return t}function ed(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const nd={clone:Bi,merge:we};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new z,Do=new Ut,Uo=new Ut;class ze extends Vl{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Do,Uo),e.subVectors(Uo,Do)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class sd extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ze(Mi,Si,t,e);r.layers=this.layers,this.add(r);const s=new ze(Mi,Si,t,e);s.layers=this.layers,this.add(s);const a=new ze(Mi,Si,t,e);a.layers=this.layers,this.add(a);const o=new ze(Mi,Si,t,e);o.layers=this.layers,this.add(o);const l=new ze(Mi,Si,t,e);l.layers=this.layers,this.add(l);const c=new ze(Mi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gl extends Ce{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ad extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Gl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new le(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:Fn});s.uniforms.tEquirect.value=e;const a=new zt(r,s),o=e.minFilter;return e.minFilter===Un&&(e.minFilter=ln),new sd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class qa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wl extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class od{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ia,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Te=new z;class ts{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ke(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=jt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ts(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xl extends ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yi;const $i=new z,Ei=new z,bi=new z,Ti=new Ut,Ki=new Ut,Yl=new ae,Ur=new z,ji=new z,zr=new z,zo=new Ut,Ns=new Ut,No=new Ut;class ld extends xe{constructor(t=new Xl){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new rn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new od(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new ts(i,3,0,!1)),yi.setAttribute("uv",new ts(i,2,3,!1))}this.geometry=yi,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Yl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-bi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Nr(Ur.set(-.5,-.5,0),bi,a,Ei,r,s),Nr(ji.set(.5,-.5,0),bi,a,Ei,r,s),Nr(zr.set(.5,.5,0),bi,a,Ei,r,s),zo.set(0,0),Ns.set(1,0),No.set(1,1);let o=t.ray.intersectTriangle(Ur,ji,zr,!1,$i);if(o===null&&(Nr(ji.set(-.5,.5,0),bi,a,Ei,r,s),Ns.set(0,1),o=t.ray.intersectTriangle(Ur,zr,ji,!1,$i),o===null))return;const l=t.ray.origin.distanceTo($i);l<t.near||l>t.far||e.push({distance:l,point:$i.clone(),uv:Ge.getInterpolation($i,Ur,ji,zr,zo,Ns,No,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nr(n,t,e,i,r,s){Ti.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ki.x=s*Ti.x-r*Ti.y,Ki.y=r*Ti.x+s*Ti.y):Ki.copy(Ti),n.copy(t),n.x+=Ki.x,n.y+=Ki.y,n.applyMatrix4(Yl)}const Fs=new z,cd=new z,ud=new Lt;class ti{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Fs.subVectors(i,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Fs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ud.getNormalMatrix(t),r=this.coplanarPoint(Fs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Ya,Fr=new z;class Za{constructor(t=new ti,e=new ti,i=new ti,r=new ti,s=new ti,a=new ti){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Sn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],v=r[10],p=r[11],h=r[12],R=r[13],A=r[14],g=r[15];if(i[0].setComponents(l-s,d-c,p-m,g-h).normalize(),i[1].setComponents(l+s,d+c,p+m,g+h).normalize(),i[2].setComponents(l+a,d+u,p+_,g+R).normalize(),i[3].setComponents(l-a,d-u,p-_,g-R).normalize(),i[4].setComponents(l-o,d-f,p-v,g-A).normalize(),e===Sn)i[5].setComponents(l+o,d+f,p+v,g+A).normalize();else if(e===Jr)i[5].setComponents(o,f,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Fr.x=r.normal.x>0?t.max.x:t.min.x,Fr.y=r.normal.y>0?t.max.y:t.min.y,Fr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ql extends Ce{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zl extends Ce{constructor(t,e,i,r,s,a,o,l,c,u=Li){if(u!==Li&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Li&&(i=si),i===void 0&&u===Fi&&(i=Ni),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rs extends rn{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new z,u=new Ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=i+f/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vi extends rn{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let _=0;const v=[],p=i/2;let h=0;R(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(m,2));function R(){const g=new z,T=new z;let b=0;const E=(e-t)/i;for(let C=0;C<=s;C++){const x=[],M=C/s,P=M*(e-t)+t;for(let N=0;N<=r;N++){const O=N/r,G=O*l+o,q=Math.sin(G),W=Math.cos(G);T.x=P*q,T.y=-M*i+p,T.z=P*W,f.push(T.x,T.y,T.z),g.set(q,E,W).normalize(),d.push(g.x,g.y,g.z),m.push(O,1-M),x.push(_++)}v.push(x)}for(let C=0;C<r;C++)for(let x=0;x<s;x++){const M=v[x][C],P=v[x+1][C],N=v[x+1][C+1],O=v[x][C+1];(t>0||x!==0)&&(u.push(M,P,O),b+=3),(e>0||x!==s-1)&&(u.push(P,N,O),b+=3)}c.addGroup(h,b,0),h+=b}function A(g){const T=_,b=new Ut,E=new z;let C=0;const x=g===!0?t:e,M=g===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),_++;const P=_;for(let N=0;N<=r;N++){const G=N/r*l+o,q=Math.cos(G),W=Math.sin(G);E.x=x*W,E.y=p*M,E.z=x*q,f.push(E.x,E.y,E.z),d.push(0,M,0),b.x=q*.5+.5,b.y=W*.5*M+.5,m.push(b.x,b.y),_++}for(let N=0;N<r;N++){const O=T+N,G=P+N;g===!0?u.push(G,G+1,O):u.push(G+1,G,O),C+=3}c.addGroup(h,C,g===!0?1:2),h+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Vi{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new hr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fr extends rn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,d=e/l,m=[],_=[],v=[],p=[];for(let h=0;h<u;h++){const R=h*d-a;for(let A=0;A<c;A++){const g=A*f-s;_.push(g,-R,0),v.push(0,0,1),p.push(A/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<o;R++){const A=R+c*h,g=R+c*(h+1),T=R+1+c*(h+1),b=R+1+c*h;m.push(A,g,b),m.push(g,T,b)}this.setIndex(m),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ar extends rn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new z,d=new z,m=[],_=[],v=[],p=[];for(let h=0;h<=i;h++){const R=[],A=h/i;let g=0;h===0&&a===0?g=.5/e:h===i&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){const b=T/e;f.x=-t*Math.cos(r+b*s)*Math.sin(a+A*o),f.y=t*Math.cos(a+A*o),f.z=t*Math.sin(r+b*s)*Math.sin(a+A*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(b+g,1-A),R.push(c++)}u.push(R)}for(let h=0;h<i;h++)for(let R=0;R<e;R++){const A=u[h][R+1],g=u[h][R],T=u[h+1][R],b=u[h+1][R+1];(h!==0||a>0)&&m.push(A,g,b),(h!==i-1||l<Math.PI)&&m.push(g,T,b)}this.setIndex(m),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dd extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hd extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fd extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ss extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $l extends ss{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Os=new ae,Fo=new z,Oo=new z;class Kl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),Oo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oo),e.updateMatrixWorld(),Os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Os)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bo=new ae,Ji=new z,Bs=new z;class pd extends Kl{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ji),Bs.copy(i.position),Bs.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Bs),i.updateMatrixWorld(),r.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Bo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo)}}class Da extends ss{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jl extends Vl{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class md extends Kl{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $a extends ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new md}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gd extends ss{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _d extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ho();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ho(){return performance.now()}function ko(n,t,e,i){const r=vd(i);switch(e){case Tl:return n*t;case Al:return n*t;case Rl:return n*t*2;case Cl:return n*t/r.components*r.byteLength;case Va:return n*t/r.components*r.byteLength;case Pl:return n*t*2/r.components*r.byteLength;case Ga:return n*t*2/r.components*r.byteLength;case wl:return n*t*3/r.components*r.byteLength;case Qe:return n*t*4/r.components*r.byteLength;case Wa:return n*t*4/r.components*r.byteLength;case Vr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oa:case ca:return Math.max(n,16)*Math.max(t,8)/4;case aa:case la:return Math.max(n,8)*Math.max(t,8)/2;case ua:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ma:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ga:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ba:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yr:case Aa:case Ra:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ll:case Ca:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pa:case La:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vd(n){switch(n){case wn:case yl:return{byteLength:1,components:1};case ir:case El:case cr:return{byteLength:2,components:1};case Ha:case ka:return{byteLength:2,components:4};case si:case Ba:case Mn:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jl(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Md(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],v=f[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eh=`#ifdef USE_ENVMAP
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
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
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
}`,ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xh=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,vh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Mh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
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
#endif`,yh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Th=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ah=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ph=`#if defined( USE_POINTS_UV )
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
#endif`,Lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gh=`#ifdef USE_NORMALMAP
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
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
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
}`,Pf=`#define DISTANCE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,Hf=`#define MATCAP
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
}`,kf=`#define NORMAL
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
}`,Vf=`#define NORMAL
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
}`,Gf=`#define PHONG
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define STANDARD
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
}`,Yf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,qf=`#define TOON
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
}`,Zf=`#define TOON
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
}`,$f=`uniform float size;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,jf=`#include <common>
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
}`,Jf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,tp=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Sd,alphahash_pars_fragment:yd,alphamap_fragment:Ed,alphamap_pars_fragment:bd,alphatest_fragment:Td,alphatest_pars_fragment:wd,aomap_fragment:Ad,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Id,bsdfs:Dd,iridescence_fragment:Ud,bumpmap_pars_fragment:zd,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Bd,color_fragment:Hd,color_pars_fragment:kd,color_pars_vertex:Vd,color_vertex:Gd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:qd,displacementmap_vertex:Zd,emissivemap_fragment:$d,emissivemap_pars_fragment:Kd,colorspace_fragment:jd,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:th,envmap_pars_fragment:eh,envmap_pars_vertex:nh,envmap_physical_pars_fragment:fh,envmap_vertex:ih,fog_vertex:rh,fog_pars_vertex:sh,fog_fragment:ah,fog_pars_fragment:oh,gradientmap_pars_fragment:lh,lightmap_pars_fragment:ch,lights_lambert_fragment:uh,lights_lambert_pars_fragment:dh,lights_pars_begin:hh,lights_toon_fragment:ph,lights_toon_pars_fragment:mh,lights_phong_fragment:gh,lights_phong_pars_fragment:_h,lights_physical_fragment:xh,lights_physical_pars_fragment:vh,lights_fragment_begin:Mh,lights_fragment_maps:Sh,lights_fragment_end:yh,logdepthbuf_fragment:Eh,logdepthbuf_pars_fragment:bh,logdepthbuf_pars_vertex:Th,logdepthbuf_vertex:wh,map_fragment:Ah,map_pars_fragment:Rh,map_particle_fragment:Ch,map_particle_pars_fragment:Ph,metalnessmap_fragment:Lh,metalnessmap_pars_fragment:Ih,morphinstance_vertex:Dh,morphcolor_vertex:Uh,morphnormal_vertex:zh,morphtarget_pars_vertex:Nh,morphtarget_vertex:Fh,normal_fragment_begin:Oh,normal_fragment_maps:Bh,normal_pars_fragment:Hh,normal_pars_vertex:kh,normal_vertex:Vh,normalmap_pars_fragment:Gh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:Xh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:qh,opaque_fragment:Zh,packing:$h,premultiplied_alpha_fragment:Kh,project_vertex:jh,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:rf,shadowmap_vertex:sf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:hf,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:xf,uv_vertex:vf,worldpos_vertex:Mf,background_vert:Sf,background_frag:yf,backgroundCube_vert:Ef,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:wf,depth_vert:Af,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:Lf,equirect_frag:If,linedashed_vert:Df,linedashed_frag:Uf,meshbasic_vert:zf,meshbasic_frag:Nf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:Hf,meshnormal_vert:kf,meshnormal_frag:Vf,meshphong_vert:Gf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:Yf,meshtoon_vert:qf,meshtoon_frag:Zf,points_vert:$f,points_frag:Kf,shadow_vert:jf,shadow_frag:Jf,sprite_vert:Qf,sprite_frag:tp},it={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},on={basic:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:we([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:we([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:we([it.points,it.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:we([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:we([it.common,it.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:we([it.sprite,it.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:we([it.common,it.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:we([it.lights,it.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};on.physical={uniforms:we([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Or={r:0,b:0,g:0},Jn=new cn,ep=new ae;function np(n,t,e,i,r,s,a){const o=new Bt(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function _(A){let g=A.isScene===!0?A.background:null;return g&&g.isTexture&&(g=(A.backgroundBlurriness>0?e:t).get(g)),g}function v(A){let g=!1;const T=_(A);T===null?h(o,l):T&&T.isColor&&(h(T,1),g=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,g){const T=_(g);T&&(T.isCubeTexture||T.mapping===is)?(u===void 0&&(u=new zt(new le(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Bi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jn.copy(g.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Jn)),u.material.toneMapped=qt.getTransfer(T.colorSpace)!==te,(f!==T||d!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new zt(new fr(2,2),new Vn({name:"BackgroundMaterial",uniforms:Bi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=qt.getTransfer(T.colorSpace)!==te,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,g){A.getRGB(Or,kl(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,g,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,g=1){o.set(A),l=g,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:v,addToRenderList:p,dispose:R}}function ip(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,P,N,O,G){let q=!1;const W=f(O,N,P);s!==W&&(s=W,c(s.object)),q=m(M,O,N,G),q&&_(M,O,N,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,g(M,P,N,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,P,N){const O=N.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let W=q[O];return W===void 0&&(W=d(l()),q[O]=W),W}function d(M){const P=[],N=[],O=[];for(let G=0;G<e;G++)P[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,P,N,O){const G=s.attributes,q=P.attributes;let W=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){const dt=G[k];let Mt=q[k];if(Mt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function _(M,P,N,O){const G={},q=P.attributes;let W=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){let dt=q[k];dt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),G[k]=Mt,W++}s.attributes=G,s.attributesNum=W,s.index=O}function v(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function p(M){h(M,0)}function h(M,P){const N=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;N[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),G[M]!==P&&(n.vertexAttribDivisor(M,P),G[M]=P)}function R(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==M[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function A(M,P,N,O,G,q,W){W===!0?n.vertexAttribIPointer(M,P,N,G,q):n.vertexAttribPointer(M,P,N,O,G,q)}function g(M,P,N,O){v();const G=O.attributes,q=N.getAttributes(),W=P.defaultAttributeValues;for(const K in q){const k=q[K];if(k.location>=0){let nt=G[K];if(nt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const dt=nt.normalized,Mt=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;const ne=Nt.buffer,Y=Nt.type,et=Nt.bytesPerElement,_t=Y===n.INT||Y===n.UNSIGNED_INT||nt.gpuType===Ba;if(nt.isInterleavedBufferAttribute){const at=nt.data,Tt=at.stride,Rt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)h(k.location+Ft,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Ft=0;Ft<k.locationSize;Ft++)A(k.location+Ft,Mt/k.locationSize,Y,dt,Tt*et,(Rt+Mt/k.locationSize*Ft)*et,_t)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<k.locationSize;at++)h(k.location+at,nt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<k.locationSize;at++)p(k.location+at);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let at=0;at<k.locationSize;at++)A(k.location+at,Mt/k.locationSize,Y,dt,Mt*et,Mt/k.locationSize*at*et,_t)}}else if(W!==void 0){const dt=W[K];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(k.location,dt);break;case 3:n.vertexAttrib3fv(k.location,dt);break;case 4:n.vertexAttrib4fv(k.location,dt);break;default:n.vertexAttrib1fv(k.location,dt)}}}}R()}function T(){C();for(const M in i){const P=i[M];for(const N in P){const O=P[N];for(const G in O)u(O[G].object),delete O[G];delete P[N]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const N in P){const O=P[N];for(const G in O)u(O[G].object),delete O[G];delete P[N]}delete i[M.id]}function E(M){for(const P in i){const N=i[P];if(N[M.id]===void 0)continue;const O=N[M.id];for(const G in O)u(O[G].object),delete O[G];delete N[M.id]}}function C(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:R}}function rp(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];e.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Qe&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mn&&!C)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:g,vertexTextures:T,maxSamples:b}}function ap(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ti,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const R=s?0:i,A=R*4;let g=h.clippingState||null;l.value=g,g=u(_,d,A,m);for(let T=0;T!==A;++T)g[T]=e[T];h.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,_){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const h=m+v*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<h)&&(p=new Float32Array(h));for(let A=0,g=m;A!==v;++A,g+=4)a.copy(f[A]).applyMatrix4(R,o),a.normal.toArray(p,g),p[g+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function op(n){let t=new WeakMap;function e(a,o){return o===ia?a.mapping=Ui:o===ra&&(a.mapping=zi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ia||o===ra)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ad(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ri=4,Vo=[.125,.215,.35,.446,.526,.582],ii=20,Hs=new jl,Go=new Bt;let ks=null,Vs=0,Gs=0,Ws=!1;const ei=(1+Math.sqrt(5))/2,wi=1/ei,Wo=[new z(-ei,wi,0),new z(ei,wi,0),new z(-wi,0,ei),new z(wi,0,ei),new z(0,ei,-wi),new z(0,ei,wi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ks=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ks,Vs,Gs),this._renderer.xr.enabled=Ws,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ks=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:cr,format:Qe,colorSpace:Oi,depthBuffer:!1},r=Xo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,t,e)}return r}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,i,r){const o=new ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Go),u.toneMapping=On,u.autoClear=!1;const m=new sr({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),_=new zt(new le,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Go),v=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):R===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const A=this._cubeSize;Br(r,R*A,h>2?A:0,A,A),u.setRenderTarget(r),v&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ui||t.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Br(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Hs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wo[(r-s-1)%Wo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):ii;p>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const h=[];let R=0;for(let E=0;E<ii;++E){const C=E/v,x=Math.exp(-C*C/2);h.push(x),E===0?R+=x:E<p&&(R+=2*x)}for(let E=0;E<h.length;E++)h[E]=h[E]/R;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const g=this._sizeLods[r],T=3*g*(r>A-Ri?r-A+Ri:0),b=4*(this._cubeSize-g);Br(e,T,b,3*g,2*g),l.setRenderTarget(e),l.render(f,Hs)}}function lp(n){const t=[],e=[],i=[];let r=n;const s=n-Ri+1+Vo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ri?l=Vo[a-n+Ri-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,v=3,p=2,h=1,R=new Float32Array(v*_*m),A=new Float32Array(p*_*m),g=new Float32Array(h*_*m);for(let b=0;b<m;b++){const E=b%3*2/3-1,C=b>2?0:-1,x=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];R.set(x,v*_*b),A.set(d,p*_*b);const M=[b,b,b,b,b,b];g.set(M,h*_*b)}const T=new rn;T.setAttribute("position",new en(R,v)),T.setAttribute("uv",new en(A,p)),T.setAttribute("faceIndex",new en(g,h)),t.push(T),r>Ri&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xo(n,t,e){const i=new ai(n,t,e);return i.texture.mapping=is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function cp(n,t,e){const i=new Float32Array(ii),r=new z(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Yo(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function qo(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function up(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===ra,u=l===Ui||l===zi;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ua(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Ua(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function dp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ai("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hp(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let v=0;if(m!==null){const R=m.array;v=m.version;for(let A=0,g=R.length;A<g;A+=3){const T=R[A+0],b=R[A+1],E=R[A+2];d.push(T,b,b,E,E,T)}}else if(_!==void 0){const R=_.array;v=_.version;for(let A=0,g=R.length/3-1;A<g;A+=3){const T=A+0,b=A+1,E=A+2;d.push(T,b,b,E,E,T)}}else return;const p=new(Ul(d)?Hl:Bl)(d,1);p.version=v;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function fp(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),e.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,d*a,_),e.update(m,i,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];e.update(p,i,1)}function f(d,m,_,v){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,_);let h=0;for(let R=0;R<_;R++)h+=m[R]*v[R];e.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function mp(n,t,e){const i=new WeakMap,r=new ee;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),v===!0&&(g=2),p===!0&&(g=3);let T=o.attributes.position.count*g,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const E=new Float32Array(T*b*4*f),C=new Nl(E,T,b,f);C.type=Mn,C.needsUpdate=!0;const x=g*4;for(let P=0;P<f;P++){const N=h[P],O=R[P],G=A[P],q=T*b*4*P;for(let W=0;W<N.count;W++){const K=W*x;_===!0&&(r.fromBufferAttribute(N,W),E[q+K+0]=r.x,E[q+K+1]=r.y,E[q+K+2]=r.z,E[q+K+3]=0),v===!0&&(r.fromBufferAttribute(O,W),E[q+K+4]=r.x,E[q+K+5]=r.y,E[q+K+6]=r.z,E[q+K+7]=0),p===!0&&(r.fromBufferAttribute(G,W),E[q+K+8]=r.x,E[q+K+9]=r.y,E[q+K+10]=r.z,E[q+K+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ut(T,b)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function gp(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Ql=new Ce,Zo=new Zl(1,1),tc=new Nl,ec=new Gu,nc=new Gl,$o=[],Ko=[],jo=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function Gi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=$o[r];if(s===void 0&&(s=new Float32Array(r),$o[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function as(n,t){let e=Ko[t];e===void 0&&(e=new Int32Array(t),Ko[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _p(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function Mp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function Sp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Qo.set(i),n.uniformMatrix2fv(this.addr,!1,Qo),ge(e,i)}}function yp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Jo.set(i),n.uniformMatrix3fv(this.addr,!1,Jo),ge(e,i)}}function Ep(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;jo.set(i),n.uniformMatrix4fv(this.addr,!1,jo),ge(e,i)}}function bp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function Ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function Rp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function Pp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function Lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function Ip(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Zo.compareFunction=Dl,s=Zo):s=Ql,e.setTexture2D(t||s,r)}function Dp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ec,r)}function Up(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||nc,r)}function zp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||tc,r)}function Np(n){switch(n){case 5126:return _p;case 35664:return xp;case 35665:return vp;case 35666:return Mp;case 35674:return Sp;case 35675:return yp;case 35676:return Ep;case 5124:case 35670:return bp;case 35667:case 35671:return Tp;case 35668:case 35672:return wp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return zp}}function Fp(n,t){n.uniform1fv(this.addr,t)}function Op(n,t){const e=Gi(t,this.size,2);n.uniform2fv(this.addr,e)}function Bp(n,t){const e=Gi(t,this.size,3);n.uniform3fv(this.addr,e)}function Hp(n,t){const e=Gi(t,this.size,4);n.uniform4fv(this.addr,e)}function kp(n,t){const e=Gi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Vp(n,t){const e=Gi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gp(n,t){const e=Gi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wp(n,t){n.uniform1iv(this.addr,t)}function Xp(n,t){n.uniform2iv(this.addr,t)}function Yp(n,t){n.uniform3iv(this.addr,t)}function qp(n,t){n.uniform4iv(this.addr,t)}function Zp(n,t){n.uniform1uiv(this.addr,t)}function $p(n,t){n.uniform2uiv(this.addr,t)}function Kp(n,t){n.uniform3uiv(this.addr,t)}function jp(n,t){n.uniform4uiv(this.addr,t)}function Jp(n,t,e){const i=this.cache,r=t.length,s=as(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ql,s[a])}function Qp(n,t,e){const i=this.cache,r=t.length,s=as(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ec,s[a])}function tm(n,t,e){const i=this.cache,r=t.length,s=as(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||nc,s[a])}function em(n,t,e){const i=this.cache,r=t.length,s=as(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||tc,s[a])}function nm(n){switch(n){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return Hp;case 35674:return kp;case 35675:return Vp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return qp;case 5125:return Zp;case 36294:return $p;case 36295:return Kp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Np(e.type)}}class rm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Xs=/(\w+)(\])?(\[|\.)?/g;function tl(n,t){n.seq.push(t),n.map[t.id]=t}function am(n,t,e){const i=n.name,r=i.length;for(Xs.lastIndex=0;;){const s=Xs.exec(i),a=Xs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tl(e,c===void 0?new im(o,n,t):new rm(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new sm(o),tl(e,f)),e=f}}}class qr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);am(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function el(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const om=37297;let lm=0;function cm(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const nl=new Lt;function um(n){qt._getMatrix(nl,qt.workingColorSpace,n);const t=`mat3( ${nl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case jr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function il(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+cm(n.getShaderSource(t),a)}else return r}function dm(n,t){const e=um(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hm(n,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case iu:e="Cineon";break;case Ml:e="ACESFilmic";break;case su:e="AgX";break;case au:e="Neutral";break;case ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new z;function fm(){qt.getLuminanceCoefficients(Hr);const n=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function mm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function tr(n){return n!==""}function rl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(n){return n.replace(_m,vm)}const xm=new Map;function vm(n,t){let e=Dt[t];if(e===void 0){const i=xm.get(t);if(i!==void 0)e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(n){return n.replace(Mm,Sm)}function Sm(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ol(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ym(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ui:case zi:t="ENVMAP_TYPE_CUBE";break;case is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qc:t="ENVMAP_BLENDING_MIX";break;case tu:t="ENVMAP_BLENDING_ADD";break}return t}function wm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Am(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ym(e),c=Em(e),u=bm(e),f=Tm(e),d=wm(e),m=pm(e),_=mm(s),v=r.createProgram();let p,h,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(tr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(tr).join(`
`),h.length>0&&(h+=`
`)):(p=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),h=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Dt.tonemapping_pars_fragment:"",e.toneMapping!==On?hm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,dm("linearToOutputTexel",e.outputColorSpace),fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=za(a),a=rl(a,e),a=sl(a,e),o=za(o),o=rl(o,e),o=sl(o,e),a=al(a),o=al(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=R+p+a,g=R+h+o,T=el(r,r.VERTEX_SHADER,A),b=el(r,r.FRAGMENT_SHADER,g);r.attachShader(v,T),r.attachShader(v,b),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(T).trim(),G=r.getShaderInfoLog(b).trim();let q=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,b);else{const K=il(r,T,"vertex"),k=il(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:q,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:h}})}r.deleteShader(T),r.deleteShader(b),C=new qr(r,v),x=gm(r,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,om)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Pm(t),e.set(t,i)),i}}class Pm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Lm(n,t,e,i,r,s,a){const o=new Fl,l=new Cm,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,P,N,O){const G=N.fog,q=O.geometry,W=x.isMeshStandardMaterial?N.environment:null,K=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),k=K&&K.mapping===is?K.image.height:null,nt=_[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let ne,Y,et,_t;if(nt){const Kt=on[nt];ne=Kt.vertexShader,Y=Kt.fragmentShader}else ne=x.vertexShader,Y=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),_t=l.getFragmentShaderID(x);const at=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),Rt=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,oe=!!x.map,Gt=!!x.matcap,de=!!K,L=!!x.aoMap,Fe=!!x.lightMap,Ht=!!x.bumpMap,kt=!!x.normalMap,St=!!x.displacementMap,re=!!x.emissiveMap,vt=!!x.metalnessMap,w=!!x.roughnessMap,S=x.anisotropy>0,F=x.clearcoat>0,Z=x.dispersion>0,j=x.iridescence>0,X=x.sheen>0,xt=x.transmission>0,ot=S&&!!x.anisotropyMap,ht=F&&!!x.clearcoatMap,Wt=F&&!!x.clearcoatNormalMap,tt=F&&!!x.clearcoatRoughnessMap,ft=j&&!!x.iridescenceMap,bt=j&&!!x.iridescenceThicknessMap,wt=X&&!!x.sheenColorMap,pt=X&&!!x.sheenRoughnessMap,Vt=!!x.specularMap,It=!!x.specularColorMap,ie=!!x.specularIntensityMap,I=xt&&!!x.transmissionMap,rt=xt&&!!x.thicknessMap,V=!!x.gradientMap,$=!!x.alphaMap,ct=x.alphaTest>0,lt=!!x.alphaHash,Pt=!!x.extensions;let ce=On;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Me={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:Y,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&O.instanceColor!==null,instancingMorph:Rt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Oi,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:Gt,envMap:de,envMapMode:de&&K.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:Fe,bumpMap:Ht,normalMap:kt,displacementMap:d&&St,emissiveMap:re,normalMapObjectSpace:kt&&x.normalMapType===uu,normalMapTangentSpace:kt&&x.normalMapType===Il,metalnessMap:vt,roughnessMap:w,anisotropy:S,anisotropyMap:ot,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:X,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:It,specularIntensityMap:ie,transmission:xt,transmissionMap:I,thicknessMap:rt,gradientMap:V,opaque:x.transparent===!1&&x.blending===Pi&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:lt,combine:x.combine,mapUv:oe&&v(x.map.channel),aoMapUv:L&&v(x.aoMap.channel),lightMapUv:Fe&&v(x.lightMap.channel),bumpMapUv:Ht&&v(x.bumpMap.channel),normalMapUv:kt&&v(x.normalMap.channel),displacementMapUv:St&&v(x.displacementMap.channel),emissiveMapUv:re&&v(x.emissiveMap.channel),metalnessMapUv:vt&&v(x.metalnessMap.channel),roughnessMapUv:w&&v(x.roughnessMap.channel),anisotropyMapUv:ot&&v(x.anisotropyMap.channel),clearcoatMapUv:ht&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(x.sheenRoughnessMap.channel),specularMapUv:Vt&&v(x.specularMap.channel),specularColorMapUv:It&&v(x.specularColorMap.channel),specularIntensityMapUv:ie&&v(x.specularIntensityMap.channel),transmissionMapUv:I&&v(x.transmissionMap.channel),thicknessMapUv:rt&&v(x.thicknessMap.channel),alphaMapUv:$&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(kt||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(oe||$),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:re&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ve,flipSided:x.side===Re,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&x.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function h(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(R(M,x),A(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function R(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function A(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function g(x){const M=_[x.type];let P;if(M){const N=on[M];P=nd.clone(N.uniforms)}else P=x.uniforms;return P}function T(x,M){let P;for(let N=0,O=u.length;N<O;N++){const G=u[N];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Am(n,M,x,s),u.push(P)),P}function b(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:g,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:C}}function Im(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Dm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ll(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,m,_,v,p){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:v,group:p},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=p),t++,h}function o(f,d,m,_,v,p){const h=a(f,d,m,_,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(f,d,m,_,v,p){const h=a(f,d,m,_,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||Dm),i.length>1&&i.sort(d||ll),r.length>1&&r.sort(d||ll)}function u(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Um(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new cl,n.set(i,[a])):r>=s.length?(a=new cl,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function zm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Bt};break;case"SpotLight":e={position:new z,direction:new z,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function Nm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Fm=0;function Om(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Bm(n){const t=new zm,e=Nm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new ae,a=new ae;function o(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,_=0,v=0,p=0,h=0,R=0,A=0,g=0,T=0,b=0,E=0;c.sort(Om);for(let x=0,M=c.length;x<M;x++){const P=c[x],N=P.color,O=P.intensity,G=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*O,f+=N.g*O,d+=N.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],O);E++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=P.shadow.matrix,R++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const K=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[v]=K.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=q,g++}v++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(N).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,A++}i.point[_]=W,_++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[h]=W,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==h||C.numDirectionalShadows!==R||C.numPointShadows!==A||C.numSpotShadows!==g||C.numSpotMaps!==T||C.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=g+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,C.directionalLength=m,C.pointLength=_,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=h,C.numDirectionalShadows=R,C.numPointShadows=A,C.numSpotShadows=g,C.numSpotMaps=T,C.numLightProbes=E,i.version=Fm++)}function l(c,u){let f=0,d=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){const A=c[h];if(A.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(p),f++}else if(A.isSpotLight){const g=i.spot[m];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),g.halfWidth.set(A.width*.5,0,0),g.halfHeight.set(0,A.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const g=i.point[d];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){const g=i.hemi[v];g.direction.setFromMatrixPosition(A.matrixWorld),g.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function ul(n){const t=new Bm(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Hm(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ul(n),t.set(r,[o])):s>=a.length?(o=new ul(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vm=`uniform sampler2D shadow_pass;
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
}`;function Gm(n,t,e){let i=new Za;const r=new Ut,s=new Ut,a=new ee,o=new hd({depthPacking:cu}),l=new fd,c={},u=e.maxTextureSize,f={[Tn]:Re,[Re]:Tn,[Ve]:Ve},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:km,fragmentShader:Vm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let h=this.type;this.render=function(b,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Fn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=h!==vn&&this.type===vn,G=h===vn&&this.type!==vn;for(let q=0,W=b.length;q<W;q++){const K=b[q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const nt=k.getFrameExtents();if(r.multiply(nt),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/nt.x),r.x=s.x*nt.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/nt.y),r.y=s.y*nt.y,k.mapSize.y=s.y)),k.map===null||O===!0||G===!0){const Mt=this.type!==vn?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new ai(r.x,r.y,Mt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const dt=k.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Nt=k.getViewport(Mt);a.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),N.viewport(a),k.updateMatrices(K,Mt),i=k.getFrustum(),g(E,C,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===vn&&R(k,C),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,M,P)};function R(b,E){const C=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ai(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,C,m,v,null)}function A(b,E,C,x){let M=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=M.uuid,O=E.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let q=G[O];q===void 0&&(q=M.clone(),G[O]=q,E.addEventListener("dispose",T)),M=q}if(M.visible=E.visible,M.wireframe=E.wireframe,x===vn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:f[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=C}return M}function g(b,E,C,x,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===vn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const O=t.update(b),G=b.material;if(Array.isArray(G)){const q=O.groups;for(let W=0,K=q.length;W<K;W++){const k=q[W],nt=G[k.materialIndex];if(nt&&nt.visible){const dt=A(b,nt,x,M);b.onBeforeShadow(n,b,E,C,O,dt,k),n.renderBufferDirect(C,null,O,dt,b,k),b.onAfterShadow(n,b,E,C,O,dt,k)}}}else if(G.visible){const q=A(b,G,x,M);b.onBeforeShadow(n,b,E,C,O,q,null),n.renderBufferDirect(C,null,O,q,b,null),b.onAfterShadow(n,b,E,C,O,q,null)}}const N=b.children;for(let O=0,G=N.length;O<G;O++)g(N[O],E,C,x,M)}function T(b){b.target.removeEventListener("dispose",T);for(const C in c){const x=c[C],M=b.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Wm={[Ks]:js,[Js]:ea,[Qs]:na,[Di]:ta,[js]:Ks,[ea]:Js,[na]:Qs,[ta]:Di};function Xm(n,t){function e(){let I=!1;const rt=new ee;let V=null;const $=new ee(0,0,0,0);return{setMask:function(ct){V!==ct&&!I&&(n.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){I=ct},setClear:function(ct,lt,Pt,ce,Me){Me===!0&&(ct*=ce,lt*=ce,Pt*=ce),rt.set(ct,lt,Pt,ce),$.equals(rt)===!1&&(n.clearColor(ct,lt,Pt,ce),$.copy(rt))},reset:function(){I=!1,V=null,$.set(-1,0,0,0)}}}function i(){let I=!1,rt=!1,V=null,$=null,ct=null;return{setReversed:function(lt){if(rt!==lt){const Pt=t.get("EXT_clip_control");rt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ct;ct=null,this.setClear(ce)}rt=lt},getReversed:function(){return rt},setTest:function(lt){lt?at(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(lt){V!==lt&&!I&&(n.depthMask(lt),V=lt)},setFunc:function(lt){if(rt&&(lt=Wm[lt]),$!==lt){switch(lt){case Ks:n.depthFunc(n.NEVER);break;case js:n.depthFunc(n.ALWAYS);break;case Js:n.depthFunc(n.LESS);break;case Di:n.depthFunc(n.LEQUAL);break;case Qs:n.depthFunc(n.EQUAL);break;case ta:n.depthFunc(n.GEQUAL);break;case ea:n.depthFunc(n.GREATER);break;case na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=lt}},setLocked:function(lt){I=lt},setClear:function(lt){ct!==lt&&(rt&&(lt=1-lt),n.clearDepth(lt),ct=lt)},reset:function(){I=!1,V=null,$=null,ct=null,rt=!1}}}function r(){let I=!1,rt=null,V=null,$=null,ct=null,lt=null,Pt=null,ce=null,Me=null;return{setTest:function(Kt){I||(Kt?at(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Kt){rt!==Kt&&!I&&(n.stencilMask(Kt),rt=Kt)},setFunc:function(Kt,Xe,fn){(V!==Kt||$!==Xe||ct!==fn)&&(n.stencilFunc(Kt,Xe,fn),V=Kt,$=Xe,ct=fn)},setOp:function(Kt,Xe,fn){(lt!==Kt||Pt!==Xe||ce!==fn)&&(n.stencilOp(Kt,Xe,fn),lt=Kt,Pt=Xe,ce=fn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){Me!==Kt&&(n.clearStencil(Kt),Me=Kt)},reset:function(){I=!1,rt=null,V=null,$=null,ct=null,lt=null,Pt=null,ce=null,Me=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,v=!1,p=null,h=null,R=null,A=null,g=null,T=null,b=null,E=new Bt(0,0,0),C=0,x=!1,M=null,P=null,N=null,O=null,G=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=K>=2);let nt=null,dt={};const Mt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),ne=new ee().fromArray(Mt),Y=new ee().fromArray(Nt);function et(I,rt,V,$){const ct=new Uint8Array(4),lt=n.createTexture();n.bindTexture(I,lt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<V;Pt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(rt+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return lt}const _t={};_t[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(Di),Ht(!1),kt(uo),at(n.CULL_FACE),L(Fn);function at(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Tt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Rt(I,rt){return f[I]!==rt?(n.bindFramebuffer(I,rt),f[I]=rt,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=rt),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ft(I,rt){let V=m,$=!1;if(I){V=d.get(rt),V===void 0&&(V=[],d.set(rt,V));const ct=I.textures;if(V.length!==ct.length||V[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Pt=ct.length;lt<Pt;lt++)V[lt]=n.COLOR_ATTACHMENT0+lt;V.length=ct.length,$=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,$=!0);$&&n.drawBuffers(V)}function oe(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Gt={[ni]:n.FUNC_ADD,[Nc]:n.FUNC_SUBTRACT,[Fc]:n.FUNC_REVERSE_SUBTRACT};Gt[Oc]=n.MIN,Gt[Bc]=n.MAX;const de={[Hc]:n.ZERO,[kc]:n.ONE,[Vc]:n.SRC_COLOR,[Zs]:n.SRC_ALPHA,[Zc]:n.SRC_ALPHA_SATURATE,[Yc]:n.DST_COLOR,[Wc]:n.DST_ALPHA,[Gc]:n.ONE_MINUS_SRC_COLOR,[$s]:n.ONE_MINUS_SRC_ALPHA,[qc]:n.ONE_MINUS_DST_COLOR,[Xc]:n.ONE_MINUS_DST_ALPHA,[$c]:n.CONSTANT_COLOR,[Kc]:n.ONE_MINUS_CONSTANT_COLOR,[jc]:n.CONSTANT_ALPHA,[Jc]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,rt,V,$,ct,lt,Pt,ce,Me,Kt){if(I===Fn){v===!0&&(Tt(n.BLEND),v=!1);return}if(v===!1&&(at(n.BLEND),v=!0),I!==zc){if(I!==p||Kt!==x){if((h!==ni||g!==ni)&&(n.blendEquation(n.FUNC_ADD),h=ni,g=ni),Kt)switch(I){case Pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ho:n.blendFunc(n.ONE,n.ONE);break;case fo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case po:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ho:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case po:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,A=null,T=null,b=null,E.set(0,0,0),C=0,p=I,x=Kt}return}ct=ct||rt,lt=lt||V,Pt=Pt||$,(rt!==h||ct!==g)&&(n.blendEquationSeparate(Gt[rt],Gt[ct]),h=rt,g=ct),(V!==R||$!==A||lt!==T||Pt!==b)&&(n.blendFuncSeparate(de[V],de[$],de[lt],de[Pt]),R=V,A=$,T=lt,b=Pt),(ce.equals(E)===!1||Me!==C)&&(n.blendColor(ce.r,ce.g,ce.b,Me),E.copy(ce),C=Me),p=I,x=!1}function Fe(I,rt){I.side===Ve?Tt(n.CULL_FACE):at(n.CULL_FACE);let V=I.side===Re;rt&&(V=!V),Ht(V),I.blending===Pi&&I.transparent===!1?L(Fn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function kt(I){I!==Dc?(at(n.CULL_FACE),I!==P&&(I===uo?n.cullFace(n.BACK):I===Uc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),P=I}function St(I){I!==N&&(W&&n.lineWidth(I),N=I)}function re(I,rt,V){I?(at(n.POLYGON_OFFSET_FILL),(O!==rt||G!==V)&&(n.polygonOffset(rt,V),O=rt,G=V)):Tt(n.POLYGON_OFFSET_FILL)}function vt(I){I?at(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+q-1),nt!==I&&(n.activeTexture(I),nt=I)}function S(I,rt,V){V===void 0&&(nt===null?V=n.TEXTURE0+q-1:V=nt);let $=dt[V];$===void 0&&($={type:void 0,texture:void 0},dt[V]=$),($.type!==I||$.texture!==rt)&&(nt!==V&&(n.activeTexture(V),nt=V),n.bindTexture(I,rt||_t[I]),$.type=I,$.texture=rt)}function F(){const I=dt[nt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(I){ne.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function pt(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Vt(I,rt){let V=c.get(rt);V===void 0&&(V=new WeakMap,c.set(rt,V));let $=V.get(I);$===void 0&&($=n.getUniformBlockIndex(rt,I.name),V.set(I,$))}function It(I,rt){const $=c.get(rt).get(I);l.get(rt)!==$&&(n.uniformBlockBinding(rt,$,I.__bindingPointIndex),l.set(rt,$))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},nt=null,dt={},f={},d=new WeakMap,m=[],_=null,v=!1,p=null,h=null,R=null,A=null,g=null,T=null,b=null,E=new Bt(0,0,0),C=0,x=!1,M=null,P=null,N=null,O=null,G=null,ne.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:Tt,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:oe,setBlending:L,setMaterial:Fe,setFlipSided:Ht,setCullFace:kt,setLineWidth:St,setPolygonOffset:re,setScissorTest:vt,activeTexture:w,bindTexture:S,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:ft,texImage3D:bt,updateUBOMapping:Vt,uniformBlockBinding:It,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:wt,viewport:pt,reset:ie}}function Ym(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return m?new OffscreenCanvas(w,S):Qr("canvas")}function v(w,S,F){let Z=1;const j=vt(w);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(Z*j.width),xt=Math.floor(Z*j.height);f===void 0&&(f=_(X,xt));const ot=S?_(X,xt):f;return ot.width=X,ot.height=xt,ot.getContext("2d").drawImage(w,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+xt+")."),ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(w,S,F,Z,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=S;if(S===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),S===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),S===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),S===n.RGBA){const xt=j?jr:qt.getTransfer(Z);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=xt===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function g(w,S){let F;return w?S===null||S===si||S===Ni?F=n.DEPTH24_STENCIL8:S===Mn?F=n.DEPTH32F_STENCIL8:S===ir&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===si||S===Ni?F=n.DEPTH_COMPONENT24:S===Mn?F=n.DEPTH_COMPONENT32F:S===ir&&(F=n.DEPTH_COMPONENT16),F}function T(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function b(w){const S=w.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&u.delete(S)}function E(w){const S=w.target;S.removeEventListener("dispose",E),M(S)}function C(w){const S=i.get(w);if(S.__webglInit===void 0)return;const F=w.source,Z=d.get(F);if(Z){const j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(w),Object.keys(Z).length===0&&d.delete(F)}i.remove(w)}function x(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const F=w.source,Z=d.get(F);delete Z[S.__cacheKey],a.memory.textures--}function M(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=w.textures;for(let Z=0,j=F.length;Z<j;Z++){const X=i.get(F[Z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(w)}let P=0;function N(){P=0}function O(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function q(w,S){const F=i.get(w);if(w.isVideoTexture&&St(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,S);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function W(w,S){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function K(w,S){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,S);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function k(w,S){const F=i.get(w);if(w.version>0&&F.__version!==w.version){et(F,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const nt={[Kr]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[sa]:n.MIRRORED_REPEAT},dt={[tn]:n.NEAREST,[ou]:n.NEAREST_MIPMAP_NEAREST,[_r]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[ms]:n.LINEAR_MIPMAP_NEAREST,[Un]:n.LINEAR_MIPMAP_LINEAR},Mt={[du]:n.NEVER,[_u]:n.ALWAYS,[hu]:n.LESS,[Dl]:n.LEQUAL,[fu]:n.EQUAL,[gu]:n.GEQUAL,[pu]:n.GREATER,[mu]:n.NOTEQUAL};function Nt(w,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===ms||S.magFilter===_r||S.magFilter===Un||S.minFilter===ln||S.minFilter===ms||S.minFilter===_r||S.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,nt[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,nt[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,nt[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,dt[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==_r&&S.minFilter!==Un||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ne(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",b));const Z=S.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const X=G(S);if(X!==w.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[X].usedTimes++;const xt=j[w.__cacheKey];xt!==void 0&&(j[w.__cacheKey].usedTimes--,xt.usedTimes===0&&x(S)),w.__cacheKey=X,w.__webglTexture=j[X].texture}return F}function Y(w,S,F){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const j=ne(w,S),X=S.source;e.bindTexture(Z,w.__webglTexture,n.TEXTURE0+F);const xt=i.get(X);if(X.version!==xt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const ot=qt.getPrimaries(qt.workingColorSpace),ht=S.colorSpace===Dn?null:qt.getPrimaries(S.colorSpace),Wt=S.colorSpace===Dn||ot===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=v(S.image,!1,r.maxTextureSize);tt=re(S,tt);const ft=s.convert(S.format,S.colorSpace),bt=s.convert(S.type);let wt=A(S.internalFormat,ft,bt,S.colorSpace,S.isVideoTexture);Nt(Z,S);let pt;const Vt=S.mipmaps,It=S.isVideoTexture!==!0,ie=xt.__version===void 0||j===!0,I=X.dataReady,rt=T(S,tt);if(S.isDepthTexture)wt=g(S.format===Fi,S.type),ie&&(It?e.texStorage2D(n.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,wt,tt.width,tt.height,0,ft,bt,null));else if(S.isDataTexture)if(Vt.length>0){It&&ie&&e.texStorage2D(n.TEXTURE_2D,rt,wt,Vt[0].width,Vt[0].height);for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],It?I&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(n.TEXTURE_2D,V,wt,pt.width,pt.height,0,ft,bt,pt.data);S.generateMipmaps=!1}else It?(ie&&e.texStorage2D(n.TEXTURE_2D,rt,wt,tt.width,tt.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,bt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,wt,tt.width,tt.height,0,ft,bt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,wt,Vt[0].width,Vt[0].height,tt.depth);for(let V=0,$=Vt.length;V<$;V++)if(pt=Vt[V],S.format!==Qe)if(ft!==null)if(It){if(I)if(S.layerUpdates.size>0){const ct=ko(pt.width,pt.height,S.format,S.type);for(const lt of S.layerUpdates){const Pt=pt.data.subarray(lt*ct/pt.data.BYTES_PER_ELEMENT,(lt+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,lt,pt.width,pt.height,1,ft,Pt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,wt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,tt.depth,ft,bt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,wt,pt.width,pt.height,tt.depth,0,ft,bt,pt.data)}else{It&&ie&&e.texStorage2D(n.TEXTURE_2D,rt,wt,Vt[0].width,Vt[0].height);for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],S.format!==Qe?ft!==null?It?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?I&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(n.TEXTURE_2D,V,wt,pt.width,pt.height,0,ft,bt,pt.data)}else if(S.isDataArrayTexture)if(It){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,wt,tt.width,tt.height,tt.depth),I)if(S.layerUpdates.size>0){const V=ko(tt.width,tt.height,S.format,S.type);for(const $ of S.layerUpdates){const ct=tt.data.subarray($*V/tt.data.BYTES_PER_ELEMENT,($+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,ft,bt,ct)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,bt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,ft,bt,tt.data);else if(S.isData3DTexture)It?(ie&&e.texStorage3D(n.TEXTURE_3D,rt,wt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,bt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,ft,bt,tt.data);else if(S.isFramebufferTexture){if(ie)if(It)e.texStorage2D(n.TEXTURE_2D,rt,wt,tt.width,tt.height);else{let V=tt.width,$=tt.height;for(let ct=0;ct<rt;ct++)e.texImage2D(n.TEXTURE_2D,ct,wt,V,$,0,ft,bt,null),V>>=1,$>>=1}}else if(Vt.length>0){if(It&&ie){const V=vt(Vt[0]);e.texStorage2D(n.TEXTURE_2D,rt,wt,V.width,V.height)}for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],It?I&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft,bt,pt):e.texImage2D(n.TEXTURE_2D,V,wt,ft,bt,pt);S.generateMipmaps=!1}else if(It){if(ie){const V=vt(tt);e.texStorage2D(n.TEXTURE_2D,rt,wt,V.width,V.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,bt,tt)}else e.texImage2D(n.TEXTURE_2D,0,wt,ft,bt,tt);p(S)&&h(Z),xt.__version=X.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function et(w,S,F){if(S.image.length!==6)return;const Z=ne(w,S),j=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const X=i.get(j);if(j.version!==X.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const xt=qt.getPrimaries(qt.workingColorSpace),ot=S.colorSpace===Dn?null:qt.getPrimaries(S.colorSpace),ht=S.colorSpace===Dn||xt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Wt&&!tt?ft[$]=v(S.image[$],!0,r.maxCubemapSize):ft[$]=tt?S.image[$].image:S.image[$],ft[$]=re(S,ft[$]);const bt=ft[0],wt=s.convert(S.format,S.colorSpace),pt=s.convert(S.type),Vt=A(S.internalFormat,wt,pt,S.colorSpace),It=S.isVideoTexture!==!0,ie=X.__version===void 0||Z===!0,I=j.dataReady;let rt=T(S,bt);Nt(n.TEXTURE_CUBE_MAP,S);let V;if(Wt){It&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Vt,bt.width,bt.height);for(let $=0;$<6;$++){V=ft[$].mipmaps;for(let ct=0;ct<V.length;ct++){const lt=V[ct];S.format!==Qe?wt!==null?It?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,wt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,wt,pt,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,lt.width,lt.height,0,wt,pt,lt.data)}}}else{if(V=S.mipmaps,It&&ie){V.length>0&&rt++;const $=vt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){It?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,wt,pt,ft[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,ft[$].width,ft[$].height,0,wt,pt,ft[$].data);for(let ct=0;ct<V.length;ct++){const Pt=V[ct].image[$].image;It?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Pt.width,Pt.height,wt,pt,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,Pt.width,Pt.height,0,wt,pt,Pt.data)}}else{It?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt,pt,ft[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,wt,pt,ft[$]);for(let ct=0;ct<V.length;ct++){const lt=V[ct];It?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,wt,pt,lt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,wt,pt,lt.image[$])}}}p(S)&&h(n.TEXTURE_CUBE_MAP),X.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function _t(w,S,F,Z,j,X){const xt=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),ht=A(F.internalFormat,xt,ot,F.colorSpace),Wt=i.get(S),tt=i.get(F);if(tt.__renderTarget=S,!Wt.__hasExternalTextures){const ft=Math.max(1,S.width>>X),bt=Math.max(1,S.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,X,ht,ft,bt,S.depth,0,xt,ot,null):e.texImage2D(j,X,ht,ft,bt,0,xt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),kt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,tt.__webglTexture,0,Ht(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,tt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(w,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,X=g(S.stencilBuffer,j),xt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Ht(S);kt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,X,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,w)}else{const Z=S.textures;for(let j=0;j<Z.length;j++){const X=Z[j],xt=s.convert(X.format,X.colorSpace),ot=s.convert(X.type),ht=A(X.internalFormat,xt,ot,X.colorSpace),Wt=Ht(S);F&&kt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,ht,S.width,S.height):kt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt,ht,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ht,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const j=Z.__webglTexture,X=Ht(S);if(S.depthTexture.format===Li)kt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===Fi)kt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(w){const S=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),at(S.__webglDepthbuffer[Z],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),at(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(w,S,F){const Z=i.get(w);S!==void 0&&_t(Z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Rt(w)}function oe(w){const S=w.texture,F=i.get(w),Z=i.get(S);w.addEventListener("dispose",E);const j=w.textures,X=w.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ht=0;ht<S.mipmaps.length;ht++)F.__webglFramebuffer[ot][ht]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ot=0,ht=j.length;ot<ht;ot++){const Wt=i.get(j[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&kt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const ht=j[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Wt=s.convert(ht.format,ht.colorSpace),tt=s.convert(ht.type),ft=A(ht.internalFormat,Wt,tt,ht.colorSpace,w.isXRRenderTarget===!0),bt=Ht(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,ft,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),at(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)_t(F.__webglFramebuffer[ot][ht],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else _t(F.__webglFramebuffer[ot],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ht=j.length;ot<ht;ot++){const Wt=j[ot],tt=i.get(Wt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Nt(n.TEXTURE_2D,Wt),_t(F.__webglFramebuffer,w,Wt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Wt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Nt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)_t(F.__webglFramebuffer[ht],w,S,n.COLOR_ATTACHMENT0,ot,ht);else _t(F.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,ot,0);p(S)&&h(ot),e.unbindTexture()}w.depthBuffer&&Rt(w)}function Gt(w){const S=w.textures;for(let F=0,Z=S.length;F<Z;F++){const j=S[F];if(p(j)){const X=R(w),xt=i.get(j).__webglTexture;e.bindTexture(X,xt),h(X),e.unbindTexture()}}}const de=[],L=[];function Fe(w){if(w.samples>0){if(kt(w)===!1){const S=w.textures,F=w.width,Z=w.height;let j=n.COLOR_BUFFER_BIT;const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(w),ot=S.length>1;if(ot)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);const Wt=i.get(S[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Wt,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,n.NEAREST),l===!0&&(de.length=0,L.length=0,de.push(n.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.resolveDepthBuffer===!1&&(de.push(X),L.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);const Wt=i.get(S[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ht(w){return Math.min(r.maxSamples,w.samples)}function kt(w){const S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function re(w,S){const F=w.colorSpace,Z=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Oi&&F!==Dn&&(qt.getTransfer(F)===te?(Z!==Qe||j!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function vt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=kt}function qm(n,t){function e(i,r=Dn){let s;const a=qt.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===Ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yl)return n.BYTE;if(i===El)return n.SHORT;if(i===ir)return n.UNSIGNED_SHORT;if(i===Ba)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===cr)return n.HALF_FLOAT;if(i===Tl)return n.ALPHA;if(i===wl)return n.RGB;if(i===Qe)return n.RGBA;if(i===Al)return n.LUMINANCE;if(i===Rl)return n.LUMINANCE_ALPHA;if(i===Li)return n.DEPTH_COMPONENT;if(i===Fi)return n.DEPTH_STENCIL;if(i===Cl)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===Pl)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Wa)return n.RGBA_INTEGER;if(i===Vr||i===Gr||i===Wr||i===Xr)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===aa||i===oa||i===la||i===ca)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===la)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ua||i===da||i===ha)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ua||i===da)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ha)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fa||i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===Ma||i===Sa||i===ya||i===Ea||i===ba||i===Ta||i===wa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ma)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ga)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_a)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===va)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ma)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ya)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ea)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ba)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ta)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yr||i===Aa||i===Ra)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Yr)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Ca||i===Pa||i===La)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===La)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ni?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Zm={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new yn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
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

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ce,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vn({vertexShader:$m,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends Hi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const v=new jm,p=e.getContextAttributes();let h=null,R=null;const A=[],g=[],T=new Ut;let b=null;const E=new ze;E.viewport=new ee;const C=new ze;C.viewport=new ee;const x=[E,C],M=new _d;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=A[Y];return et===void 0&&(et=new Ys,A[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=A[Y];return et===void 0&&(et=new Ys,A[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=A[Y];return et===void 0&&(et=new Ys,A[Y]=et),et.getHandSpace()};function O(Y){const et=g.indexOf(Y.inputSource);if(et===-1)return;const _t=A[et];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<A.length;Y++){const et=g[Y];et!==null&&(g[Y]=null,A[Y].disconnect(et))}P=null,N=null,v.reset(),t.setRenderTarget(h),m=null,d=null,f=null,r=null,R=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let _t=null,at=null,Tt=null;p.depth&&(Tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=p.stencil?Fi:Li,at=p.stencil?Ni:si);const Rt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Rt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new ai(d.textureWidth,d.textureHeight,{format:Qe,type:wn,depthTexture:new Zl(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new ai(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(Y){for(let et=0;et<Y.removed.length;et++){const _t=Y.removed[et],at=g.indexOf(_t);at>=0&&(g[at]=null,A[at].disconnect(_t))}for(let et=0;et<Y.added.length;et++){const _t=Y.added[et];let at=g.indexOf(_t);if(at===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=g.length){g.push(_t),at=Rt;break}else if(g[Rt]===null){g[Rt]=_t,at=Rt;break}if(at===-1)break}const Tt=A[at];Tt&&Tt.connect(_t)}}const W=new z,K=new z;function k(Y,et,_t){W.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const at=W.distanceTo(K),Tt=et.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,Ft=Tt[14]/(Tt[10]-1),oe=Tt[14]/(Tt[10]+1),Gt=(Tt[9]+1)/Tt[5],de=(Tt[9]-1)/Tt[5],L=(Tt[8]-1)/Tt[0],Fe=(Rt[8]+1)/Rt[0],Ht=Ft*L,kt=Ft*Fe,St=at/(-L+Fe),re=St*-L;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(re),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const vt=Ft+St,w=oe+St,S=Ht-re,F=kt+(at-re),Z=Gt*oe/w*vt,j=de*oe/w*vt;Y.projectionMatrix.makePerspective(S,F,Z,j,vt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let et=Y.near,_t=Y.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),M.near=C.near=E.near=et,M.far=C.far=E.far=_t,(P!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),E.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const at=Y.parent,Tt=M.cameras;nt(M,at);for(let Rt=0;Rt<Tt.length;Rt++)nt(Tt[Rt],at);Tt.length===2?k(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),dt(Y,M,at)};function dt(Y,et,_t){_t===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Mt=null;function Nt(Y,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const _t=u.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let at=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Rt=0;Rt<_t.length;Rt++){const Ft=_t[Rt];let oe=null;if(m!==null)oe=m.getViewport(Ft);else{const de=f.getViewSubImage(d,Ft);oe=de.viewport,Rt===0&&(t.setRenderTargetTextures(R,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(R))}let Gt=x[Rt];Gt===void 0&&(Gt=new ze,Gt.layers.enable(Rt),Gt.viewport=new ee,x[Rt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(oe.x,oe.y,oe.width,oe.height),Rt===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Gt)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Rt=f.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,r.renderState)}}for(let _t=0;_t<A.length;_t++){const at=g[_t],Tt=A[_t];at!==null&&Tt!==void 0&&Tt.update(at,et,c||a)}Mt&&Mt(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const ne=new Jl;ne.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}}const Qn=new cn,Qm=new ae;function t0(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,kl(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,R,A,g){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,g)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,R,A):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Re&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Re&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const R=t.get(h),A=R.envMap,g=R.envMapRotation;A&&(p.envMap.value=A,Qn.copy(g),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(Qn)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,R,A){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*R,p.scale.value=A*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,R){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Re&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const R=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const g=A.program;i.uniformBlockBinding(R,g)}function c(R,A){let g=r[R.id];g===void 0&&(_(R),g=u(R),r[R.id]=g,R.addEventListener("dispose",p));const T=A.program;i.updateUBOMapping(R,T);const b=t.render.frame;s[R.id]!==b&&(d(R),s[R.id]=b)}function u(R){const A=f();R.__bindingPointIndex=A;const g=n.createBuffer(),T=R.__size,b=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,g),g}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=r[R.id],g=R.uniforms,T=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let b=0,E=g.length;b<E;b++){const C=Array.isArray(g[b])?g[b]:[g[b]];for(let x=0,M=C.length;x<M;x++){const P=C[x];if(m(P,b,x,T)===!0){const N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let q=0;q<O.length;q++){const W=O[q],K=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,A,g,T){const b=R.value,E=A+"_"+g;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const C=T[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return T[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(R){const A=R.uniforms;let g=0;const T=16;for(let E=0,C=A.length;E<C;E++){const x=Array.isArray(A[E])?A[E]:[A[E]];for(let M=0,P=x.length;M<P;M++){const N=x[M],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,q=O.length;G<q;G++){const W=O[G],K=v(W),k=g%T,nt=k%K.boundary,dt=k+nt;g+=nt,dt!==0&&T-dt<K.storage&&(g+=T-dt),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=g,g+=K.storage}}}const b=g%T;return b>0&&(g+=T-b),R.__size=g,R.__cache={},this}function v(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function p(R){const A=R.target;A.removeEventListener("dispose",p);const g=a.indexOf(A.__bindingPointIndex);a.splice(g,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function h(){for(const R in r)n.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class n0{constructor(t={}){const{canvas:e=Uu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=On,this.toneMappingExposure=1;const g=this;let T=!1,b=0,E=0,C=null,x=-1,M=null;const P=new ee,N=new ee;let O=null;const G=new Bt(0);let q=0,W=e.width,K=e.height,k=1,nt=null,dt=null;const Mt=new ee(0,0,W,K),Nt=new ee(0,0,W,K);let ne=!1;const Y=new Za;let et=!1,_t=!1;this.transmissionResolutionScale=1;const at=new ae,Tt=new ae,Rt=new z,Ft=new ee,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function de(){return C===null?k:1}let L=i;function Fe(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const D="webgl2";if(L=Fe(D,y),L===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ht,kt,St,re,vt,w,S,F,Z,j,X,xt,ot,ht,Wt,tt,ft,bt,wt,pt,Vt,It,ie,I;function rt(){Ht=new dp(L),Ht.init(),It=new qm(L,Ht),kt=new sp(L,Ht,t,It),St=new Xm(L,Ht),kt.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),re=new pp(L),vt=new Im,w=new Ym(L,Ht,St,vt,kt,It,re),S=new op(g),F=new up(g),Z=new Md(L),ie=new ip(L,Z),j=new hp(L,Z,re,ie),X=new gp(L,j,Z,re),wt=new mp(L,kt,w),tt=new ap(vt),xt=new Lm(g,S,F,Ht,kt,ie,tt),ot=new t0(g,vt),ht=new Um,Wt=new Hm(Ht),bt=new np(g,S,F,St,X,m,l),ft=new Gm(g,X,kt),I=new e0(L,re,kt,St),pt=new rp(L,Ht,re),Vt=new fp(L,Ht,re),re.programs=xt.programs,g.capabilities=kt,g.extensions=Ht,g.properties=vt,g.renderLists=ht,g.shadowMap=ft,g.state=St,g.info=re}rt();const V=new Jm(g,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ht.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ht.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(W,K,!1))},this.getSize=function(y){return y.set(W,K)},this.setSize=function(y,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,K=D,e.width=Math.floor(y*k),e.height=Math.floor(D*k),B===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*k,K*k).floor()},this.setDrawingBufferSize=function(y,D,B){W=y,K=D,k=B,e.width=Math.floor(y*B),e.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,D,B,H){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,D,B,H),St.viewport(P.copy(Mt).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,D,B,H){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,D,B,H),St.scissor(N.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(y){St.setScissorTest(ne=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(y=!0,D=!0,B=!0){let H=0;if(y){let U=!1;if(C!==null){const Q=C.texture.format;U=Q===Wa||Q===Ga||Q===Va}if(U){const Q=C.texture.type,st=Q===wn||Q===si||Q===ir||Q===Ni||Q===Ha||Q===ka,ut=bt.getClearColor(),mt=bt.getClearAlpha(),At=ut.r,Ct=ut.g,yt=ut.b;st?(_[0]=At,_[1]=Ct,_[2]=yt,_[3]=mt,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=At,v[1]=Ct,v[2]=yt,v[3]=mt,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT),B&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),bt.dispose(),ht.dispose(),Wt.dispose(),vt.dispose(),S.dispose(),F.dispose(),X.dispose(),ie.dispose(),I.dispose(),xt.dispose(),V.dispose(),V.removeEventListener("sessionstart",io),V.removeEventListener("sessionend",ro),Yn.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=re.autoReset,D=ft.enabled,B=ft.autoUpdate,H=ft.needsUpdate,U=ft.type;rt(),re.autoReset=y,ft.enabled=D,ft.autoUpdate=B,ft.needsUpdate=H,ft.type=U}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pt(y){const D=y.target;D.removeEventListener("dispose",Pt),ce(D)}function ce(y){Me(y),vt.remove(y)}function Me(y){const D=vt.get(y).programs;D!==void 0&&(D.forEach(function(B){xt.releaseProgram(B)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,H,U,Q){D===null&&(D=oe);const st=U.isMesh&&U.matrixWorld.determinant()<0,ut=Ac(y,D,B,H,U);St.setMaterial(H,st);let mt=B.index,At=1;if(H.wireframe===!0){if(mt=j.getWireframeAttribute(B),mt===void 0)return;At=2}const Ct=B.drawRange,yt=B.attributes.position;let Xt=Ct.start*At,Zt=(Ct.start+Ct.count)*At;Q!==null&&(Xt=Math.max(Xt,Q.start*At),Zt=Math.min(Zt,(Q.start+Q.count)*At)),mt!==null?(Xt=Math.max(Xt,0),Zt=Math.min(Zt,mt.count)):yt!=null&&(Xt=Math.max(Xt,0),Zt=Math.min(Zt,yt.count));const he=Zt-Xt;if(he<0||he===1/0)return;ie.setup(U,H,ut,B,mt);let ue,Yt=pt;if(mt!==null&&(ue=Z.get(mt),Yt=Vt,Yt.setIndex(ue)),U.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*de()),Yt.setMode(L.LINES)):Yt.setMode(L.TRIANGLES);else if(U.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),St.setLineWidth(Et*de()),U.isLineSegments?Yt.setMode(L.LINES):U.isLineLoop?Yt.setMode(L.LINE_LOOP):Yt.setMode(L.LINE_STRIP)}else U.isPoints?Yt.setMode(L.POINTS):U.isSprite&&Yt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,ve=U._multiDrawCounts,$t=U._multiDrawCount,Ye=mt?Z.get(mt).bytesPerElement:1,li=vt.get(H).currentProgram.getUniforms();for(let Le=0;Le<$t;Le++)li.setValue(L,"_gl_DrawID",Le),Yt.render(Et[Le]/Ye,ve[Le])}else if(U.isInstancedMesh)Yt.renderInstances(Xt,he,U.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ve=Math.min(B.instanceCount,Et);Yt.renderInstances(Xt,he,ve)}else Yt.render(Xt,he)};function Kt(y,D,B){y.transparent===!0&&y.side===Ve&&y.forceSinglePass===!1?(y.side=Re,y.needsUpdate=!0,gr(y,D,B),y.side=Tn,y.needsUpdate=!0,gr(y,D,B),y.side=Ve):gr(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),h=Wt.get(B),h.init(D),A.push(h),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){const ut=Q[st];Kt(ut,B,U),H.add(ut)}else Kt(Q,B,U),H.add(Q)}),A.pop(),h=null,H},this.compileAsync=function(y,D,B=null){const H=this.compile(y,D,B);return new Promise(U=>{function Q(){if(H.forEach(function(st){vt.get(st).currentProgram.isReady()&&H.delete(st)}),H.size===0){U(y);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Xe=null;function fn(y){Xe&&Xe(y)}function io(){Yn.stop()}function ro(){Yn.start()}const Yn=new Jl;Yn.setAnimationLoop(fn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(y){Xe=y,V.setAnimationLoop(y),y===null?Yn.stop():Yn.start()},V.addEventListener("sessionstart",io),V.addEventListener("sessionend",ro),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),y.isScene===!0&&y.onBeforeRender(g,y,D,C),h=Wt.get(y,A.length),h.init(D),A.push(h),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,et=tt.init(this.clippingPlanes,_t),p=ht.get(y,R.length),p.init(),R.push(p),V.enabled===!0&&V.isPresenting===!0){const Q=g.xr.getDepthSensingMesh();Q!==null&&fs(Q,D,-1/0,g.sortObjects)}fs(y,D,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(nt,dt),Gt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Gt&&bt.addToRenderList(p,y),this.info.render.frame++,et===!0&&tt.beginShadows();const B=h.state.shadowsArray;ft.render(B,y,D),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,U=p.transmissive;if(h.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let st=0,ut=Q.length;st<ut;st++){const mt=Q[st];ao(H,U,y,mt)}Gt&&bt.render(y);for(let st=0,ut=Q.length;st<ut;st++){const mt=Q[st];so(p,y,mt,mt.viewport)}}else U.length>0&&ao(H,U,y,D),Gt&&bt.render(y),so(p,y,D);C!==null&&E===0&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(g,y,D),ie.resetDefaultState(),x=-1,M=null,A.pop(),A.length>0?(h=A[A.length-1],et===!0&&tt.setGlobalState(g.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function fs(y,D,B,H){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){H&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);const st=X.update(y),ut=y.material;ut.visible&&p.push(y,st,ut,B,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const st=X.update(y),ut=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ft.copy(st.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(ut)){const mt=st.groups;for(let At=0,Ct=mt.length;At<Ct;At++){const yt=mt[At],Xt=ut[yt.materialIndex];Xt&&Xt.visible&&p.push(y,st,Xt,B,Ft.z,yt)}}else ut.visible&&p.push(y,st,ut,B,Ft.z,null)}}const Q=y.children;for(let st=0,ut=Q.length;st<ut;st++)fs(Q[st],D,B,H)}function so(y,D,B,H){const U=y.opaque,Q=y.transmissive,st=y.transparent;h.setupLightsView(B),et===!0&&tt.setGlobalState(g.clippingPlanes,B),H&&St.viewport(P.copy(H)),U.length>0&&mr(U,D,B),Q.length>0&&mr(Q,D,B),st.length>0&&mr(st,D,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ao(y,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?cr:wn,minFilter:Un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[H.id],st=H.viewport||P;Q.setSize(st.z*g.transmissionResolutionScale,st.w*g.transmissionResolutionScale);const ut=g.getRenderTarget();g.setRenderTarget(Q),g.getClearColor(G),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),Gt&&bt.render(B);const mt=g.toneMapping;g.toneMapping=On;const At=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),et===!0&&tt.setGlobalState(g.clippingPlanes,H),mr(y,B,H),w.updateMultisampleRenderTarget(Q),w.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let yt=0,Xt=D.length;yt<Xt;yt++){const Zt=D[yt],he=Zt.object,ue=Zt.geometry,Yt=Zt.material,Et=Zt.group;if(Yt.side===Ve&&he.layers.test(H.layers)){const ve=Yt.side;Yt.side=Re,Yt.needsUpdate=!0,oo(he,B,H,ue,Yt,Et),Yt.side=ve,Yt.needsUpdate=!0,Ct=!0}}Ct===!0&&(w.updateMultisampleRenderTarget(Q),w.updateRenderTargetMipmap(Q))}g.setRenderTarget(ut),g.setClearColor(G,q),At!==void 0&&(H.viewport=At),g.toneMapping=mt}function mr(y,D,B){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const st=y[U],ut=st.object,mt=st.geometry,At=H===null?st.material:H,Ct=st.group;ut.layers.test(B.layers)&&oo(ut,D,B,mt,At,Ct)}}function oo(y,D,B,H,U,Q){y.onBeforeRender(g,D,B,H,U,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(g,D,B,H,y,Q),U.transparent===!0&&U.side===Ve&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,g.renderBufferDirect(B,D,H,U,y,Q),U.side=Tn,U.needsUpdate=!0,g.renderBufferDirect(B,D,H,U,y,Q),U.side=Ve):g.renderBufferDirect(B,D,H,U,y,Q),y.onAfterRender(g,D,B,H,U,Q)}function gr(y,D,B){D.isScene!==!0&&(D=oe);const H=vt.get(y),U=h.state.lights,Q=h.state.shadowsArray,st=U.state.version,ut=xt.getParameters(y,U.state,Q,D,B),mt=xt.getProgramCacheKey(ut);let At=H.programs;H.environment=y.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(y.isMeshStandardMaterial?F:S).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",Pt),At=new Map,H.programs=At);let Ct=At.get(mt);if(Ct!==void 0){if(H.currentProgram===Ct&&H.lightsStateVersion===st)return co(y,ut),Ct}else ut.uniforms=xt.getUniforms(y),y.onBeforeCompile(ut,g),Ct=xt.acquireProgram(ut,mt),At.set(mt,Ct),H.uniforms=ut.uniforms;const yt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=tt.uniform),co(y,ut),H.needsLights=Cc(y),H.lightsStateVersion=st,H.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ct,H.uniformsList=null,Ct}function lo(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=qr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function co(y,D){const B=vt.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Ac(y,D,B,H,U){D.isScene!==!0&&(D=oe),w.resetTextureUnits();const Q=D.fog,st=H.isMeshStandardMaterial?D.environment:null,ut=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Oi,mt=(H.isMeshStandardMaterial?F:S).get(H.envMap||st),At=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let he=On;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=g.toneMapping);const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=ue!==void 0?ue.length:0,Et=vt.get(H),ve=h.state.lights;if(et===!0&&(_t===!0||y!==M)){const be=y===M&&H.id===x;tt.setState(H,y,be)}let $t=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ve.state.version||Et.outputColorSpace!==ut||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==mt||H.fog===!0&&Et.fog!==Q||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==At||Et.vertexTangents!==Ct||Et.morphTargets!==yt||Et.morphNormals!==Xt||Et.morphColors!==Zt||Et.toneMapping!==he||Et.morphTargetsCount!==Yt)&&($t=!0):($t=!0,Et.__version=H.version);let Ye=Et.currentProgram;$t===!0&&(Ye=gr(H,D,U));let li=!1,Le=!1,Wi=!1;const se=Ye.getUniforms(),Oe=Et.uniforms;if(St.useProgram(Ye.program)&&(li=!0,Le=!0,Wi=!0),H.id!==x&&(x=H.id,Le=!0),li||M!==y){St.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),Nu(at),Fu(at),se.setValue(L,"projectionMatrix",at)):se.setValue(L,"projectionMatrix",y.projectionMatrix),se.setValue(L,"viewMatrix",y.matrixWorldInverse);const Pe=se.map.cameraPosition;Pe!==void 0&&Pe.setValue(L,Rt.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&se.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&se.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Le=!0,Wi=!0)}if(U.isSkinnedMesh){se.setOptional(L,U,"bindMatrix"),se.setOptional(L,U,"bindMatrixInverse");const be=U.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),se.setValue(L,"boneTexture",be.boneTexture,w))}U.isBatchedMesh&&(se.setOptional(L,U,"batchingTexture"),se.setValue(L,"batchingTexture",U._matricesTexture,w),se.setOptional(L,U,"batchingIdTexture"),se.setValue(L,"batchingIdTexture",U._indirectTexture,w),se.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&se.setValue(L,"batchingColorTexture",U._colorsTexture,w));const Be=B.morphAttributes;if((Be.position!==void 0||Be.normal!==void 0||Be.color!==void 0)&&wt.update(U,B,Ye),(Le||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,se.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Oe.envMap.value=mt,Oe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Oe.envMapIntensity.value=D.environmentIntensity),Le&&(se.setValue(L,"toneMappingExposure",g.toneMappingExposure),Et.needsLights&&Rc(Oe,Wi),Q&&H.fog===!0&&ot.refreshFogUniforms(Oe,Q),ot.refreshMaterialUniforms(Oe,H,k,K,h.state.transmissionRenderTarget[y.id]),qr.upload(L,lo(Et),Oe,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qr.upload(L,lo(Et),Oe,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&se.setValue(L,"center",U.center),se.setValue(L,"modelViewMatrix",U.modelViewMatrix),se.setValue(L,"normalMatrix",U.normalMatrix),se.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const be=H.uniformsGroups;for(let Pe=0,ps=be.length;Pe<ps;Pe++){const qn=be[Pe];I.update(qn,Ye),I.bind(qn,Ye)}}return Ye}function Rc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Cc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,D,B){vt.get(y.texture).__webglTexture=D,vt.get(y.depthTexture).__webglTexture=B;const H=vt.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const B=vt.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const Pc=L.createFramebuffer();this.setRenderTarget=function(y,D=0,B=0){C=y,b=D,E=B;let H=!0,U=null,Q=!1,st=!1;if(y){const mt=vt.get(y);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(mt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(mt.__hasExternalTextures)w.rebindTextures(y,vt.get(y.texture).__webglTexture,vt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(mt.__boundDepthTexture!==yt){if(yt!==null&&vt.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const At=y.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(st=!0);const Ct=vt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?U=Ct[D][B]:U=Ct[D],Q=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?U=vt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[B]:U=Ct,P.copy(y.viewport),N.copy(y.scissor),O=y.scissorTest}else P.copy(Mt).multiplyScalar(k).floor(),N.copy(Nt).multiplyScalar(k).floor(),O=ne;if(B!==0&&(U=Pc),St.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&St.drawBuffers(y,U),St.viewport(P),St.scissor(N),St.setScissorTest(O),Q){const mt=vt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,B)}else if(st){const mt=vt.get(y.texture),At=D;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,B,At)}else if(y!==null&&B!==0){const mt=vt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,B)}x=-1},this.readRenderTargetPixels=function(y,D,B,H,U,Q,st){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){St.bindFramebuffer(L.FRAMEBUFFER,ut);try{const mt=y.texture,At=mt.format,Ct=mt.type;if(!kt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-H&&B>=0&&B<=y.height-U&&L.readPixels(D,B,H,U,It.convert(At),It.convert(Ct),Q)}finally{const mt=C!==null?vt.get(C).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,H,U,Q,st){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){const mt=y.texture,At=mt.format,Ct=mt.type;if(!kt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-H&&B>=0&&B<=y.height-U){St.bindFramebuffer(L.FRAMEBUFFER,ut);const yt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,yt),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),L.readPixels(D,B,H,U,It.convert(At),It.convert(Ct),0);const Xt=C!==null?vt.get(C).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Xt);const Zt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zu(L,Zt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,yt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(yt),L.deleteSync(Zt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,B=0){y.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-B),U=Math.floor(y.image.width*H),Q=Math.floor(y.image.height*H),st=D!==null?D.x:0,ut=D!==null?D.y:0;w.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,st,ut,U,Q),St.unbindTexture()};const Lc=L.createFramebuffer(),Ic=L.createFramebuffer();this.copyTextureToTexture=function(y,D,B=null,H=null,U=0,Q=null){y.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],D=arguments[2],Q=arguments[3]||0,B=null),Q===null&&(U!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let st,ut,mt,At,Ct,yt,Xt,Zt,he;const ue=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(B!==null)st=B.max.x-B.min.x,ut=B.max.y-B.min.y,mt=B.isBox3?B.max.z-B.min.z:1,At=B.min.x,Ct=B.min.y,yt=B.isBox3?B.min.z:0;else{const Be=Math.pow(2,-U);st=Math.floor(ue.width*Be),ut=Math.floor(ue.height*Be),y.isDataArrayTexture?mt=ue.depth:y.isData3DTexture?mt=Math.floor(ue.depth*Be):mt=1,At=0,Ct=0,yt=0}H!==null?(Xt=H.x,Zt=H.y,he=H.z):(Xt=0,Zt=0,he=0);const Yt=It.convert(D.format),Et=It.convert(D.type);let ve;D.isData3DTexture?(w.setTexture3D(D,0),ve=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(w.setTexture2DArray(D,0),ve=L.TEXTURE_2D_ARRAY):(w.setTexture2D(D,0),ve=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const $t=L.getParameter(L.UNPACK_ROW_LENGTH),Ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),li=L.getParameter(L.UNPACK_SKIP_PIXELS),Le=L.getParameter(L.UNPACK_SKIP_ROWS),Wi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yt);const se=y.isDataArrayTexture||y.isData3DTexture,Oe=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Be=vt.get(y),be=vt.get(D),Pe=vt.get(Be.__renderTarget),ps=vt.get(be.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,Pe.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let qn=0;qn<mt;qn++)se&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(y).__webglTexture,U,yt+qn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(D).__webglTexture,Q,he+qn)),L.blitFramebuffer(At,Ct,st,ut,Xt,Zt,st,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||vt.has(y)){const Be=vt.get(y),be=vt.get(D);St.bindFramebuffer(L.READ_FRAMEBUFFER,Lc),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ic);for(let Pe=0;Pe<mt;Pe++)se?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,U,yt+Pe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,U),Oe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.__webglTexture,Q,he+Pe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,Q),U!==0?L.blitFramebuffer(At,Ct,st,ut,Xt,Zt,st,ut,L.COLOR_BUFFER_BIT,L.NEAREST):Oe?L.copyTexSubImage3D(ve,Q,Xt,Zt,he+Pe,At,Ct,st,ut):L.copyTexSubImage2D(ve,Q,Xt,Zt,At,Ct,st,ut);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Oe?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(ve,Q,Xt,Zt,he,st,ut,mt,Yt,Et,ue.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,Q,Xt,Zt,he,st,ut,mt,Yt,ue.data):L.texSubImage3D(ve,Q,Xt,Zt,he,st,ut,mt,Yt,Et,ue):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,Xt,Zt,st,ut,Yt,Et,ue.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,Xt,Zt,ue.width,ue.height,Yt,ue.data):L.texSubImage2D(L.TEXTURE_2D,Q,Xt,Zt,st,ut,Yt,Et,ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,$t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,li),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wi),Q===0&&D.generateMipmaps&&L.generateMipmap(ve),St.unbindTexture()},this.copyTextureToTexture3D=function(y,D,B=null,H=null,U=0){return y.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0),Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,B,H,U)},this.initRenderTarget=function(y){vt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){b=0,E=0,C=null,St.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const nn=2.45,ke=2.1,dl=.22,os=1.6,oi=2.85;function i0(n,t,e,i,r,s){const a=r-e,o=s-i,l=a*a+o*o;if(l<1e-10)return Math.hypot(n-e,t-i);let c=((n-e)*a+(t-i)*o)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(n-(e+c*a),t-(i+c*o))}function hl(n,t,e,i,r=0){let s=n,a=t;for(let o=0;o<3;o++)for(const l of i){const c=l.h??nn;if(c<1.05)continue;const u=l.baseY??0;if(r+1.85<u||r>u+c+.15)continue;const f=i0(s,a,l.a.x,l.a.z,l.b.x,l.b.z);if(f<e){const d=l.b.x-l.a.x,m=l.b.z-l.a.z,_=Math.hypot(d,m)||1;let v=((s-l.a.x)*d+(a-l.a.z)*m)/(_*_);v=Math.max(0,Math.min(1,v));const p=l.a.x+v*d,h=l.a.z+v*m;let R=s-p,A=a-h;const g=Math.hypot(R,A);g<1e-8?(R=-m/_,A=d/_):(R/=g,A/=g);const T=e-f+.002;s+=R*T,a+=A*T}}return{x:s,z:a}}function r0(n,t,e){let i=!1;for(let r=0,s=e.length-1;r<e.length;s=r++){const a=e[r].x,o=e[r].z,l=e[s].x,c=e[s].z;o>t!=c>t&&n<(l-a)*(t-o)/(c-o+1e-12)+a&&(i=!i)}return i}function ic(n,t,e){for(const i of e)if(r0(n,t,i.points))return i.name;return"屋外"}function or(n){const t=n.rooms||[];let e=1/0,i=-1/0,r=1/0,s=-1/0;for(const a of t)for(const o of a.points)e=Math.min(e,o.x),i=Math.max(i,o.x),r=Math.min(r,o.z),s=Math.max(s,o.z);return isFinite(e)||(e=0,i=5,r=0,s=5),{minX:e,maxX:i,minZ:r,maxZ:s,cx:(e+i)/2,cz:(r+s)/2}}function rc(n){let t=1/0,e=-1/0,i=1/0,r=-1/0;for(const s of n.levels||[]){const a=or(s);t=Math.min(t,a.minX),e=Math.max(e,a.maxX),i=Math.min(i,a.minZ),r=Math.max(r,a.maxZ)}return isFinite(t)?{minX:t,maxX:e,minZ:i,maxZ:r,cx:(t+e)/2,cz:(i+r)/2}:{minX:0,maxX:5,minZ:0,maxZ:5,cx:2.5,cz:2.5}}function ls(n,t){var e;return(n.levels||[]).find(i=>i.level===t)||((e=n.levels)==null?void 0:e[0])}function s0(n){const t=new Map;for(const e of n.levels||[])for(const i of e.stairs||[]){const r=i.id||`${i.minX},${i.minZ}`;t.has(r)||t.set(r,i)}return[...t.values()]}function a0(n,t,e){const i=e.floorHeight||oi;for(const r of s0(e)){if(n<r.minX+.06||n>r.maxX-.06||t<r.minZ+.06||t>r.maxZ-.06)continue;const a=r.lowZ??r.minZ,l=(r.highZ??r.maxZ)-a||.01;let c=(t-a)/l;c=Math.max(0,Math.min(1,c));const u=Math.min(r.fromLevel,r.toLevel),f=Math.max(r.fromLevel,r.toLevel),d=u*i+c*i*(f-u||1);return{stair:r,t:c,footY:d,lowLevel:u,highLevel:f,level:c>=.5?f:u}}return null}function o0(n,t){const e=t.floorHeight||oi,i=Math.max(0,...(t.levels||[]).map(l=>l.level||0));let r=Math.max(0,Math.min(i,n.level|0)),s=n.footY,a=!!n.onStairs;const o=a0(n.x,n.z,t);if(a)return o?(s=o.footY,o.t<=.04?(a=!1,r=o.lowLevel,s=r*e):o.t>=.96?(a=!1,r=o.highLevel,s=r*e):r=o.level,{footY:s,level:r,onStairs:a}):(a=!1,r=s>=e*.5?Math.min(i,Math.round(s/e)):0,s=r*e,{footY:s,level:r,onStairs:a});if(o){if(r===o.lowLevel&&o.t<=.22)return{footY:o.footY,level:o.lowLevel,onStairs:!0};if(r===o.highLevel&&o.t>=.78)return{footY:o.footY,level:o.highLevel,onStairs:!0}}if(s=r*e,r===0){const l=ls(t,0);ic(n.x,n.z,(l==null?void 0:l.rooms)||[])==="屋外"&&(s=0)}return{footY:s,level:r,onStairs:!1}}const sc={id:"1ldk",wallHeight:nn,entrance:{x:5.275,z:.15,facing:Math.PI},spawn:{x:5.275,z:-2.2,yaw:0},rooms:[{name:"玄関",color:"#c4b5a0",floor:"#b8a990",points:[{x:4.7,z:.15},{x:6.15,z:.15},{x:6.15,z:1.7},{x:4.7,z:1.7}]},{name:"廊下",color:"#e8e0d4",floor:"#e5ddd0",points:[{x:4.7,z:1.7},{x:6.15,z:1.7},{x:6.15,z:4},{x:4.7,z:4}]},{name:"トイレ",color:"#dce8f0",floor:"#d0e0ec",points:[{x:5.1,z:4},{x:6.15,z:4},{x:6.15,z:5.2},{x:5.1,z:5.2}]},{name:"洗面",color:"#e8f0f5",floor:"#dce8f0",points:[{x:4,z:5.2},{x:5.4,z:5.2},{x:5.4,z:6.55},{x:4,z:6.55}]},{name:"浴室",color:"#d0e8f0",floor:"#b8d8e8",points:[{x:5.4,z:5.2},{x:6.15,z:5.2},{x:6.15,z:6.55},{x:5.4,z:6.55}]},{name:"洋室",color:"#f0ebe3",floor:"#e8dfd2",points:[{x:.15,z:4.85},{x:3.55,z:4.85},{x:3.55,z:7.35},{x:.15,z:7.35}]},{name:"リビング・ダイニング",color:"#f5f0e8",floor:"#efe6d8",points:[{x:.15,z:2},{x:4.7,z:2},{x:4.7,z:4.85},{x:.15,z:4.85}]},{name:"キッチン",color:"#f0ece4",floor:"#e8e0d4",points:[{x:.15,z:.15},{x:4.7,z:.15},{x:4.7,z:2},{x:.15,z:2}]},{name:"バルコニー",color:"#c8d0d8",floor:"#b0bcc8",points:[{x:.15,z:7.35},{x:3.55,z:7.35},{x:3.55,z:8.1},{x:.15,z:8.1}]},{name:"収納",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:3.55,z:5.5},{x:4,z:5.5},{x:4,z:6.55},{x:3.55,z:6.55}]}],walls:[{a:{x:.15,z:.15},b:{x:4.85,z:.15}},{a:{x:5.7,z:.15},b:{x:6.15,z:.15}},{a:{x:6.15,z:.15},b:{x:6.15,z:6.55}},{a:{x:4,z:6.55},b:{x:6.15,z:6.55}},{a:{x:.15,z:7.35},b:{x:.5,z:7.35}},{a:{x:2,z:7.35},b:{x:3.55,z:7.35}},{a:{x:.15,z:8.1},b:{x:3.55,z:8.1},h:1},{a:{x:.15,z:7.35},b:{x:.15,z:8.1},h:1},{a:{x:3.55,z:7.35},b:{x:3.55,z:8.1},h:1},{a:{x:.15,z:.15},b:{x:.15,z:7.35}},{a:{x:.15,z:4.85},b:{x:1.4,z:4.85}},{a:{x:2.2,z:4.85},b:{x:3.55,z:4.85}},{a:{x:3.55,z:4.85},b:{x:3.55,z:5.5}},{a:{x:3.55,z:6.55},b:{x:3.55,z:7.35}},{a:{x:3.55,z:5.5},b:{x:4,z:5.5}},{a:{x:4,z:5.5},b:{x:4,z:5.2}},{a:{x:4,z:5.2},b:{x:4,z:6.55}},{a:{x:5.4,z:5.2},b:{x:5.4,z:5.55}},{a:{x:5.4,z:6.25},b:{x:5.4,z:6.55}},{a:{x:4,z:5.2},b:{x:4.55,z:5.2}},{a:{x:5.35,z:5.2},b:{x:6.15,z:5.2}},{a:{x:5.1,z:4},b:{x:5.1,z:5.2}},{a:{x:5.1,z:4},b:{x:5.35,z:4}},{a:{x:5.9,z:4},b:{x:6.15,z:4}},{a:{x:4.7,z:.15},b:{x:4.7,z:1.55}},{a:{x:4.7,z:2.35},b:{x:4.7,z:4}},{a:{x:4.7,z:4},b:{x:5.1,z:4}},{a:{x:4.7,z:1.7},b:{x:5,z:1.7}},{a:{x:5.85,z:1.7},b:{x:6.15,z:1.7}}],doors:[{a:{x:4.85,z:.15},b:{x:5.7,z:.15},label:"玄関",exterior:!0},{a:{x:1.4,z:4.85},b:{x:2.2,z:4.85},label:"洋室"},{a:{x:4.55,z:5.2},b:{x:5.35,z:5.2},label:"洗面"},{a:{x:5.4,z:5.55},b:{x:5.4,z:6.25},label:"浴室"},{a:{x:5.35,z:4},b:{x:5.9,z:4},label:"トイレ"},{a:{x:4.7,z:1.55},b:{x:4.7,z:2.35},label:"LD"},{a:{x:.5,z:7.35},b:{x:2,z:7.35},label:"バルコニー"}],windows:[{a:{x:.15,z:5.5},b:{x:.15,z:6.8},sill:.9,h:1.2},{a:{x:.15,z:2.8},b:{x:.15,z:4.2},sill:.9,h:1.2},{a:{x:1,z:.15},b:{x:2.4,z:.15},sill:.9,h:1.1},{a:{x:6.15,z:2.5},b:{x:6.15,z:3.5},sill:.9,h:1.1}],furniture:[{type:"bed",x:1,z:6.3,rot:0,w:1.4,d:2,h:.45},{type:"desk",x:2.9,z:6.7,rot:0,w:.9,d:.5,h:.72},{type:"closet",x:3.2,z:5.3,rot:0,w:.55,d:1,h:2},{type:"sofa",x:1.3,z:3.6,rot:0,w:2,d:.85,h:.75},{type:"table",x:1.3,z:2.7,rot:0,w:1,d:.55,h:.4},{type:"tv",x:3.9,z:3.5,rot:Math.PI/2,w:1.1,d:.15,h:.7},{type:"table",x:2.8,z:2.5,rot:0,w:1.1,d:.7,h:.72},{type:"kitchen",x:.55,z:1,rot:0,w:.6,d:2.4,h:.9},{type:"fridge",x:4.2,z:.55,rot:0,w:.6,d:.6,h:1.7},{type:"toilet",x:5.65,z:4.75,rot:0,w:.4,d:.6,h:.4},{type:"sink",x:4.7,z:6.2,rot:0,w:1,d:.5,h:.85},{type:"bath",x:5.78,z:5.9,rot:0,w:.7,d:1.2,h:.55},{type:"closet",x:5.9,z:1.2,rot:0,w:.4,d:.9,h:1.8},{type:"plant",x:.6,z:4.4,rot:0,w:.35,d:.35,h:.9},{type:"plant",x:3.3,z:7.7,rot:0,w:.3,d:.3,h:.6}],exterior:{style:"apartment",floors:5,unitFloor:3,facadeColor:"#e8e4dc",accentColor:"#6b8cae"}},Ci={id:"house1f",wallHeight:nn,entrance:{x:11.2,z:.2,facing:Math.PI},spawn:{x:11.2,z:-1.7,yaw:0},rooms:[{name:"玄関",color:"#d0c8b8",floor:"#c8c0b0",points:[{x:10.2,z:.2},{x:12.4,z:.2},{x:12.4,z:2},{x:10.2,z:2}]},{name:"ホール",color:"#f0e8d8",floor:"#ebe0cc",points:[{x:8.6,z:2},{x:12.4,z:2},{x:12.4,z:5},{x:8.6,z:5}]},{name:"トイレ",color:"#e0f0e8",floor:"#d0e8dc",points:[{x:10.6,z:5},{x:12.4,z:5},{x:12.4,z:6.4},{x:10.6,z:6.4}]},{name:"洗面脱衣室",color:"#e8f0f5",floor:"#dce8f0",points:[{x:8,z:6.4},{x:10.6,z:6.4},{x:10.6,z:8.2},{x:8,z:8.2}]},{name:"浴室",color:"#d0e8f0",floor:"#b8d8e8",points:[{x:10.6,z:6.4},{x:12.4,z:6.4},{x:12.4,z:8.2},{x:10.6,z:8.2}]},{name:"収納",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:8,z:5},{x:9.4,z:5},{x:9.4,z:6.4},{x:8,z:6.4}]},{name:"SIC",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:9.4,z:2},{x:10.2,z:2},{x:10.2,z:3.6},{x:9.4,z:3.6}]},{name:"LDK",color:"#f5efe4",floor:"#efe4d4",points:[{x:.3,z:2.4},{x:8.6,z:2.4},{x:8.6,z:8.2},{x:.3,z:8.2}]},{name:"和室",color:"#d8e8c8",floor:"#c8d8a8",points:[{x:5,z:.2},{x:8.6,z:.2},{x:8.6,z:2.4},{x:5,z:2.4}]},{name:"板の間",color:"#e8dcc8",floor:"#d8c8a8",points:[{x:8,z:.2},{x:9.4,z:.2},{x:9.4,z:2},{x:8,z:2}]},{name:"パントリー",color:"#e8e0d4",floor:"#ddd5c8",points:[{x:5.5,z:7.2},{x:7.2,z:7.2},{x:7.2,z:8.2},{x:5.5,z:8.2}]},{name:"ウッドデッキ",color:"#a08050",floor:"#8b6914",points:[{x:.3,z:-1.2},{x:4.5,z:-1.2},{x:4.5,z:.2},{x:.3,z:.2}]},{name:"ポーチ",color:"#c0b8a8",floor:"#b0a898",points:[{x:10.4,z:-1.4},{x:12.4,z:-1.4},{x:12.4,z:.2},{x:10.4,z:.2}]}],walls:[{a:{x:.3,z:.2},b:{x:5,z:.2}},{a:{x:5,z:.2},b:{x:10.55,z:.2}},{a:{x:11.85,z:.2},b:{x:12.4,z:.2}},{a:{x:12.4,z:.2},b:{x:12.4,z:8.2}},{a:{x:.3,z:8.2},b:{x:12.4,z:8.2}},{a:{x:.3,z:.2},b:{x:.3,z:8.2}},{a:{x:8.6,z:2.4},b:{x:8.6,z:4.3}},{a:{x:8.6,z:5.1},b:{x:8.6,z:8.2}},{a:{x:5,z:.2},b:{x:5,z:1.5}},{a:{x:5,z:2.1},b:{x:5,z:2.4}},{a:{x:5,z:2.4},b:{x:8.6,z:2.4}},{a:{x:8,z:.2},b:{x:8,z:2}},{a:{x:9.4,z:.2},b:{x:9.4,z:2}},{a:{x:10.2,z:.2},b:{x:10.2,z:2}},{a:{x:8.6,z:2},b:{x:10.2,z:2}},{a:{x:8.6,z:5},b:{x:10.6,z:5}},{a:{x:11.3,z:5},b:{x:12.4,z:5}},{a:{x:10.6,z:5},b:{x:10.6,z:6.4}},{a:{x:8,z:6.4},b:{x:10.6,z:6.4}},{a:{x:10.6,z:6.4},b:{x:10.6,z:7}},{a:{x:10.6,z:7.7},b:{x:10.6,z:8.2}},{a:{x:8,z:5},b:{x:8,z:6.4}},{a:{x:9.4,z:5},b:{x:9.4,z:6.4}},{a:{x:5.5,z:7.2},b:{x:7.2,z:7.2}},{a:{x:5.5,z:7.2},b:{x:5.5,z:8.2}},{a:{x:7.2,z:7.2},b:{x:7.2,z:8.2}},{a:{x:.3,z:-1.2},b:{x:4.5,z:-1.2},h:.95},{a:{x:.3,z:-1.2},b:{x:.3,z:.2},h:.95},{a:{x:4.5,z:-1.2},b:{x:4.5,z:.2},h:.95}],doors:[{a:{x:10.55,z:.2},b:{x:11.85,z:.2},label:"玄関",exterior:!0},{a:{x:8.6,z:4.3},b:{x:8.6,z:5.1},label:"LDK"},{a:{x:5,z:1.5},b:{x:5,z:2.1},label:"和室"},{a:{x:10.6,z:5},b:{x:11.3,z:5},label:"トイレ"},{a:{x:8.8,z:6.4},b:{x:9.6,z:6.4},label:"洗面"},{a:{x:10.6,z:7},b:{x:10.6,z:7.7},label:"浴室"},{a:{x:1.5,z:.2},b:{x:3.2,z:.2},label:"デッキ"}],windows:[{a:{x:.3,z:4},b:{x:.3,z:6.5},sill:.5,h:1.6},{a:{x:1,z:8.2},b:{x:3.5,z:8.2},sill:.9,h:1.2},{a:{x:12.4,z:2.5},b:{x:12.4,z:4},sill:.9,h:1.1},{a:{x:6,z:.2},b:{x:7.5,z:.2},sill:.4,h:1.5}],furniture:[{type:"sofa",x:2.2,z:3.5,rot:Math.PI/2,w:2.2,d:.9,h:.75},{type:"table",x:3.5,z:3.5,rot:0,w:.9,d:.9,h:.4},{type:"table",x:2,z:6.2,rot:0,w:1.4,d:.85,h:.74},{type:"chair",x:1.3,z:6.2,rot:Math.PI/2,w:.45,d:.45,h:.85},{type:"chair",x:2.7,z:6.2,rot:-Math.PI/2,w:.45,d:.45,h:.85},{type:"kitchen",x:6.5,z:6.8,rot:0,w:.65,d:2.4,h:.9},{type:"island",x:5,z:5.5,rot:0,w:1.6,d:.8,h:.9},{type:"tv",x:4.5,z:2.8,rot:Math.PI,w:1.2,d:.12,h:.7},{type:"plant",x:.8,z:7.5,rot:0,w:.4,d:.4,h:1.1},{type:"tatami",x:6.8,z:1.3,rot:0,w:3.4,d:2,h:.05},{type:"toilet",x:11.5,z:5.7,rot:0,w:.4,d:.6,h:.4},{type:"sink",x:9.3,z:7.6,rot:0,w:1.4,d:.5,h:.85},{type:"bath",x:11.5,z:7.3,rot:0,w:.75,d:1.3,h:.55},{type:"closet",x:8.7,z:5.7,rot:0,w:.55,d:1.1,h:2},{type:"closet",x:9.8,z:2.8,rot:0,w:.35,d:.9,h:2},{type:"closet",x:11.9,z:1.2,rot:0,w:.35,d:.9,h:1.8}],exterior:{style:"house",floors:2,unitFloor:1,facadeColor:"#f2ebe0",accentColor:"#5c4033",roofColor:"#4a5568"}},l0={id:"house2f",level:1,name:"2F",wallHeight:nn,rooms:[{name:"階段ホール",color:"#f0e8d8",floor:"#ebe0cc",points:[{x:6.8,z:3.2},{x:9.2,z:3.2},{x:9.2,z:5.6},{x:6.8,z:5.6}]},{name:"廊下",color:"#e8e0d4",floor:"#e5ddd0",points:[{x:3,z:3.8},{x:6.8,z:3.8},{x:6.8,z:5},{x:3,z:5}]},{name:"主寝室",color:"#f0ebe3",floor:"#e8dfd2",points:[{x:.3,z:5},{x:6.8,z:5},{x:6.8,z:8.2},{x:.3,z:8.2}]},{name:"子供室A",color:"#e8f0f5",floor:"#dce8f0",points:[{x:.3,z:.2},{x:4.8,z:.2},{x:4.8,z:3.8},{x:.3,z:3.8}]},{name:"子供室B",color:"#f5efe4",floor:"#efe4d4",points:[{x:4.8,z:.2},{x:9.2,z:.2},{x:9.2,z:3.2},{x:6.8,z:3.2},{x:6.8,z:3.8},{x:4.8,z:3.8}]},{name:"WIC",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:9.2,z:3.2},{x:12.4,z:3.2},{x:12.4,z:5.6},{x:9.2,z:5.6}]},{name:"トイレ",color:"#e0f0e8",floor:"#d0e8dc",points:[{x:9.2,z:5.6},{x:11,z:5.6},{x:11,z:7},{x:9.2,z:7}]},{name:"バルコニー",color:"#c8d0d8",floor:"#b0bcc8",points:[{x:.3,z:8.2},{x:6.8,z:8.2},{x:6.8,z:9},{x:.3,z:9}]}],walls:[{a:{x:.3,z:.2},b:{x:9.2,z:.2}},{a:{x:9.2,z:.2},b:{x:9.2,z:3.2}},{a:{x:9.2,z:3.2},b:{x:12.4,z:3.2}},{a:{x:12.4,z:3.2},b:{x:12.4,z:5.6}},{a:{x:11,z:5.6},b:{x:12.4,z:5.6}},{a:{x:11,z:5.6},b:{x:11,z:7}},{a:{x:9.2,z:7},b:{x:11,z:7}},{a:{x:9.2,z:5.6},b:{x:9.2,z:8.2}},{a:{x:.3,z:8.2},b:{x:.5,z:8.2}},{a:{x:2.2,z:8.2},b:{x:6.8,z:8.2}},{a:{x:6.8,z:8.2},b:{x:6.8,z:9}},{a:{x:.3,z:9},b:{x:6.8,z:9},h:1},{a:{x:.3,z:8.2},b:{x:.3,z:9},h:1},{a:{x:.3,z:.2},b:{x:.3,z:8.2}},{a:{x:4.8,z:.2},b:{x:4.8,z:3}},{a:{x:4.8,z:3.6},b:{x:4.8,z:3.8}},{a:{x:.3,z:3.8},b:{x:3,z:3.8}},{a:{x:3.8,z:3.8},b:{x:6.8,z:3.8}},{a:{x:3,z:3.8},b:{x:3,z:5}},{a:{x:.3,z:5},b:{x:3,z:5}},{a:{x:3.8,z:5},b:{x:6.8,z:5}},{a:{x:6.8,z:5},b:{x:6.8,z:5.6}},{a:{x:6.8,z:3.2},b:{x:6.8,z:3.8}},{a:{x:6.8,z:5.6},b:{x:9.2,z:5.6}},{a:{x:9.2,z:3.2},b:{x:9.2,z:5}},{a:{x:9.2,z:5.4},b:{x:9.2,z:5.6}}],doors:[{a:{x:3,z:3.8},b:{x:3.8,z:3.8},label:"廊下"},{a:{x:3,z:5},b:{x:3.8,z:5},label:"主寝室"},{a:{x:4.8,z:3},b:{x:4.8,z:3.6},label:"子供室A"},{a:{x:6.8,z:3.5},b:{x:7.4,z:3.5},label:"子供室B"},{a:{x:9.2,z:5},b:{x:9.2,z:5.4},label:"WIC"},{a:{x:9.2,z:6},b:{x:9.2,z:6.6},label:"トイレ"},{a:{x:.5,z:8.2},b:{x:2.2,z:8.2},label:"バルコニー"}],windows:[{a:{x:.3,z:6},b:{x:.3,z:7.5},sill:.9,h:1.2},{a:{x:1,z:.2},b:{x:3,z:.2},sill:.9,h:1.1},{a:{x:5.5,z:.2},b:{x:7.5,z:.2},sill:.9,h:1.1},{a:{x:12.4,z:4},b:{x:12.4,z:5},sill:.9,h:1}],furniture:[{type:"bed",x:2.5,z:6.8,rot:0,w:1.8,d:2.1,h:.45},{type:"closet",x:6,z:7.4,rot:0,w:.55,d:1.4,h:2},{type:"desk",x:5.5,z:5.6,rot:0,w:1,d:.5,h:.72},{type:"bed",x:2,z:1.8,rot:0,w:1.2,d:2,h:.45},{type:"desk",x:3.8,z:2.8,rot:0,w:.9,d:.5,h:.72},{type:"bed",x:6.5,z:1.6,rot:0,w:1.2,d:2,h:.45},{type:"closet",x:10.5,z:4.4,rot:0,w:1.5,d:.55,h:2},{type:"toilet",x:10.1,z:6.3,rot:0,w:.4,d:.55,h:.4},{type:"plant",x:1,z:8.5,rot:0,w:.3,d:.3,h:.7}],stairs:[{id:"main-stair",minX:7.35,maxX:8.55,minZ:3.55,maxZ:5.15,lowZ:3.55,highZ:5.15,fromLevel:0,toLevel:1,upIsHighZ:!0}],railWalls:[{a:{x:7.25,z:3.55},b:{x:7.25,z:5}},{a:{x:8.65,z:3.55},b:{x:8.65,z:5}},{a:{x:7.25,z:3.55},b:{x:8.65,z:3.55}}]},ac=2.85,c0={...Ci,level:0,name:"1F",stairs:[{id:"main-stair",minX:7.35,maxX:8.55,minZ:3.55,maxZ:5.15,lowZ:3.55,highZ:5.15,fromLevel:0,toLevel:1,upIsHighZ:!0}],walls:[...Ci.walls,{a:{x:7.25,z:3.5},b:{x:7.25,z:5.2}},{a:{x:8.65,z:3.5},b:{x:8.65,z:4.15}},{a:{x:8.65,z:4.85},b:{x:8.65,z:5.2}},{a:{x:7.25,z:3.5},b:{x:8.65,z:3.5}}],rooms:[...Ci.rooms,{name:"階段",color:"#d4c4a8",floor:"#c8b898",noFloor:!0,points:[{x:7.25,z:3.5},{x:8.65,z:3.5},{x:8.65,z:5.2},{x:7.25,z:5.2}]}],doors:[...Ci.doors,{a:{x:8.65,z:4.15},b:{x:8.65,z:4.85},label:"階段"}]},u0={id:"house-building",multiFloor:!0,floorHeight:ac,wallHeight:nn,entrance:Ci.entrance,spawn:Ci.spawn,exterior:{style:"house",floors:2,unitFloor:1,facadeColor:"#f2ebe0",accentColor:"#5c4033",roofColor:"#4a5568"},levels:[c0,{...l0,level:1,name:"2F"}]};function d0(n){return n?n.multiFloor&&n.levels?n:{id:n.id,multiFloor:!0,floorHeight:n.floorHeight||ac,wallHeight:n.wallHeight||nn,entrance:n.entrance,spawn:n.spawn,exterior:n.exterior,levels:[{level:0,name:"1F",wallHeight:n.wallHeight||nn,rooms:n.rooms||[],walls:n.walls||[],doors:n.doors||[],windows:n.windows||[],furniture:n.furniture||[],stairs:n.stairs||[]}]}:null}const oc="floorplan-walk-props-v2",lc="floorplan-walk-traced-v1",fl={"apt-1ldk":{label:"マンション 1LDK",plan:sc},"house-2f":{label:"戸建て 2階建（階段あり）",plan:u0}},cc=[{id:"apt-shibuya",builtin:!0,title:"パークサイド神宮前",unit:"305号室",type:"マンション",layout:"1LDK",area:"約40㎡",price:"月額 12.8万円",priceNote:"管理費 8,000円 別",address:"東京都渋谷区神宮前3丁目25-18",lat:35.6702,lng:139.7065,built:"2018年3月",structure:"RC造 5階建 / 3階部分",access:"東京メトロ「明治神宮前」徒歩6分",exteriorNotes:"タイル張りの落ち着いた外観。オートロック・宅配ボックス付き。エントランスは石張りで清潔感があります。",features:["南向きバルコニー","オートロック","宅配BOX","室内洗濯機置場","インターネット無料"],description:"コンパクトながら動線の良い1LDK。リビングから洋室へのアクセスがスムーズで、単身〜DINKS向けです。",planImage:null,planTemplateId:"apt-1ldk",accent:"#3b82f6"},{id:"house-setagaya",builtin:!0,title:"桜丘の家",unit:"1〜2階（戸建て）",type:"戸建て",layout:"4LDK相当",area:"延床 約95㎡",price:"販売 6,280万円",priceNote:"土地付き戸建て",address:"東京都世田谷区桜丘2丁目15-8",lat:35.6418,lng:139.6275,built:"2022年1月",structure:"木造2階建",access:"小田急線「千歳船橋」徒歩9分",exteriorNotes:"白い外壁にウッドデッキが映える現代和風の外観。玄関ポーチから入り、階段で2階の居室へ上がれます。",features:["2階建て","階段歩行可","ウッドデッキ","パントリー","SIC","和室"],description:"1階に広々LDKと和室、2階に主寝室・子供室。階段を歩いて階を移動できます。",planImage:"/plans/house1f.jpg",planTemplateId:"house-2f",accent:"#059669"}];function pr(){try{const n=localStorage.getItem(oc);return n?JSON.parse(n):[]}catch{return[]}}function ja(n){localStorage.setItem(oc,JSON.stringify(n))}function Ja(){try{return JSON.parse(localStorage.getItem(lc)||"[]")}catch{return[]}}function h0(n,t={}){const e=Ja(),i={id:n.id||`traced-${Date.now()}`,name:t.name||n.title||"トレース物件",savedAt:new Date().toISOString(),plan:n},r=e.findIndex(s=>s.id===i.id);return r>=0?e[r]=i:e.unshift(i),localStorage.setItem(lc,JSON.stringify(e.slice(0,30))),i}function uc(){return[...pr(),...cc]}function f0(n){return uc().find(t=>t.id===n)||cc[0]}function p0(n){if(n.floorPlan)return n.floorPlan;if(n.planTemplateId&&fl[n.planTemplateId])return fl[n.planTemplateId].plan;if(n.tracedPlanId){const t=Ja().find(e=>e.id===n.tracedPlanId);if(t)return t.plan}return sc}function dc(n){if(n.builtin)throw new Error("組み込み物件は編集できません");const t=pr(),e=n.id||`prop-${Date.now()}`,i={...n,id:e,builtin:!1,updatedAt:new Date().toISOString(),createdAt:n.createdAt||new Date().toISOString()};i.planTemplateId&&i.floorPlan&&delete i.floorPlan;const r=t.findIndex(s=>s.id===e);return r>=0?t[r]=i:t.unshift(i),ja(t),i}function m0(n){const t=pr().filter(e=>e.id!==n);ja(t)}function g0(){return JSON.stringify({version:2,exportedAt:new Date().toISOString(),properties:pr()},null,2)}function _0(n){const t=JSON.parse(n),e=t.properties||t;if(!Array.isArray(e))throw new Error("不正なJSONです");const i=pr();for(const r of e){if(!r.id||r.builtin)continue;const s=i.findIndex(a=>a.id===r.id);s>=0?i[s]=r:i.push(r)}return ja(i),i.length}async function x0(n){if(!n||!n.trim())throw new Error("住所を入力してください");const t="https://nominatim.openstreetmap.org/search?"+new URLSearchParams({q:n,format:"json",limit:"1",countrycodes:"jp"}),e=await fetch(t,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error("ジオコーディングに失敗しました");const i=await e.json();if(!i.length)throw new Error("住所が見つかりませんでした。緯度経度を手入力してください");return{lat:parseFloat(i[0].lat),lng:parseFloat(i[0].lon),displayName:i[0].display_name}}function v0(n){return n.lat&&n.lng?`https://maps.google.com/maps?q=${n.lat},${n.lng}&z=17&hl=ja&output=embed`:`https://maps.google.com/maps?q=${encodeURIComponent(n.address||"")}&z=17&hl=ja&output=embed`}function M0(n){const t=n.lat||35.6812,e=n.lng||139.7671;return`https://maps.google.com/maps?q=&layer=c&cbll=${t},${e}&cbp=11,0,0,0,0&hl=ja&output=svembed`}function S0(n){return n.lat&&n.lng?`https://www.google.com/maps/search/?api=1&query=${n.lat},${n.lng}`:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.address||"")}`}function y0(n){const t=n.lat||35.6812,e=n.lng||139.7671;return`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${t},${e}`}function E0(){return{id:"",title:"",unit:"",type:"マンション",layout:"",area:"",price:"",priceNote:"",address:"",lat:"",lng:"",built:"",structure:"",access:"",exteriorNotes:"",description:"",features:"",planTemplateId:"apt-1ldk",tracedPlanId:"",accent:"#3b82f6"}}function Gn(n=512){const t=document.createElement("canvas");return t.width=t.height=n,t}function Wn(n,t=2){const e=new ql(n);return e.colorSpace=Ae,e.wrapS=e.wrapT=Kr,e.repeat.set(t,t),e.anisotropy=8,e.generateMipmaps=!0,e.minFilter=Un,e}function cs(n,t,e=.06){const i=n.getImageData(0,0,t,t),r=i.data;for(let s=0;s<r.length;s+=4){const a=(Math.random()-.5)*255*e*2;r[s]=Math.max(0,Math.min(255,r[s]+a)),r[s+1]=Math.max(0,Math.min(255,r[s+1]+a)),r[s+2]=Math.max(0,Math.min(255,r[s+2]+a))}n.putImageData(i,0,0)}function b0(){const t=Gn(512),e=t.getContext("2d");e.fillStyle="#c4a06a",e.fillRect(0,0,512,512);const i=48;for(let r=0;r<512;r+=i){const s=165+Math.random()*35,a=s-45+Math.random()*10,o=s-90+Math.random()*12,l=e.createLinearGradient(0,r,0,r+i);l.addColorStop(0,`rgb(${s+8},${a+5},${o})`),l.addColorStop(.5,`rgb(${s},${a},${o})`),l.addColorStop(1,`rgb(${s-12},${a-8},${o-4})`),e.fillStyle=l,e.fillRect(0,r+1,512,i-2),e.strokeStyle="rgba(60,35,12,0.35)",e.lineWidth=2,e.beginPath(),e.moveTo(0,r+i),e.lineTo(512,r+i),e.stroke();let c=Math.random()*80;for(;c<512;)e.strokeStyle="rgba(50,30,10,0.2)",e.beginPath(),e.moveTo(c,r+1),e.lineTo(c,r+i-1),e.stroke(),c+=90+Math.random()*120;for(let u=0;u<6;u++){const f=Math.random()*512;e.strokeStyle=`rgba(90,55,20,${.06+Math.random()*.08})`,e.lineWidth=1+Math.random(),e.beginPath(),e.moveTo(f,r+4),e.bezierCurveTo(f+30,r+16,f-20,r+28,f+40,r+i-4),e.stroke()}}return cs(e,512,.04),Wn(t,3.5)}function T0(){const t=Gn(256),e=t.getContext("2d");e.fillStyle="#888",e.fillRect(0,0,256,256);for(let i=0;i<256;i+=32)e.fillStyle=`rgb(${100+Math.random()*40},${100+Math.random()*40},${100+Math.random()*40})`,e.fillRect(0,i,256,30);return Wn(t,3.5)}function w0(n="#d0d8e0"){const e=Gn(512),i=e.getContext("2d");i.fillStyle="#a8b0b8",i.fillRect(0,0,512,512);const r=64;for(let s=0;s<512;s+=r)for(let a=0;a<512;a+=r){const o=6-Math.random()*14;i.fillStyle=I0(n,o),i.fillRect(a+2,s+2,r-4,r-4),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(a+4,s+4,r*.4,3),i.strokeStyle="rgba(40,45,50,0.25)",i.strokeRect(a+1.5,s+1.5,r-3,r-3)}return cs(i,512,.03),Wn(e,4)}function A0(){const t=Gn(512),e=t.getContext("2d");e.fillStyle="#c8d890",e.fillRect(0,0,512,512);for(let i=0;i<512;i+=3)e.strokeStyle=i%6===0?"rgba(80,90,35,0.22)":"rgba(100,110,50,0.1)",e.beginPath(),e.moveTo(0,i),e.lineTo(512,i),e.stroke();return e.fillStyle="#3a2818",e.fillRect(0,0,14,512),e.fillRect(498,0,14,512),cs(e,512,.04),Wn(t,1.8)}function R0(){const t=Gn(512),e=t.getContext("2d"),i=e.createLinearGradient(0,0,512,512);i.addColorStop(0,"#f6f3ed"),i.addColorStop(1,"#ebe6dc"),e.fillStyle=i,e.fillRect(0,0,512,512);for(let r=0;r<4e3;r++){const s=Math.random()*512,a=Math.random()*512,o=.015+Math.random()*.03;e.fillStyle=Math.random()>.5?`rgba(0,0,0,${o})`:`rgba(255,255,255,${o})`,e.fillRect(s,a,1.5+Math.random()*2,1.5+Math.random()*2)}return Wn(t,2.2)}function C0(){const t=Gn(256),e=t.getContext("2d");e.fillStyle="#3d6b32",e.fillRect(0,0,256,256);for(let i=0;i<1200;i++){const r=40+Math.random()*50,s=90+Math.random()*70,a=30+Math.random()*40;e.fillStyle=`rgb(${r},${s},${a})`;const o=Math.random()*256,l=Math.random()*256;e.fillRect(o,l,1+Math.random()*2,2+Math.random()*4)}return Wn(t,14)}function P0(){const t=Gn(256),e=t.getContext("2d");e.fillStyle="#9a9a96",e.fillRect(0,0,256,256);for(let i=0;i<600;i++){const r=130+Math.random()*50;e.fillStyle=`rgb(${r},${r},${r-4})`,e.fillRect(Math.random()*256,Math.random()*256,2+Math.random()*4,2+Math.random()*4)}return cs(e,256,.05),Wn(t,3)}function L0(){const t=Gn(512),e=t.getContext("2d");for(let i=0;i<512;i+=36){const r=110+Math.random()*40;e.fillStyle=`rgb(${r},${r-45},${r-75})`,e.fillRect(0,i,512,34),e.strokeStyle="rgba(40,25,10,0.4)",e.strokeRect(.5,i+.5,511,33);for(let s=0;s<3;s++){const a=Math.random()*512;e.strokeStyle="rgba(60,35,15,0.15)",e.beginPath(),e.moveTo(a,i+2),e.lineTo(a+40,i+32),e.stroke()}}return Wn(t,2.5)}function I0(n,t){const e=parseInt(n.slice(1),16);let i=(e>>16)+t,r=(e>>8&255)+t,s=(e&255)+t;return i=Math.max(0,Math.min(255,i)),r=Math.max(0,Math.min(255,r)),s=Math.max(0,Math.min(255,s)),`rgb(${i},${r},${s})`}function D0(n){const t=new Ua(n),e=new Wl;e.add(new $l(14544639,8943462,1));const i=new $a(16773853,1.2);i.position.set(5,10,3),e.add(i);const r=new ar(20,16,12),s=new sr({color:8892108,side:Re});e.add(new zt(r,s));const a=new zt(new rs(30,24),new sr({color:5929541}));a.rotation.x=-Math.PI/2,a.position.y=-1,e.add(a);const o=t.fromScene(e,.04);return t.dispose(),e.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),o.texture}let kr=null;function U0(){return kr||(kr={wood:b0(),woodRough:T0(),tile:w0(),tatami:A0(),plaster:R0(),grass:C0(),concrete:P0(),deck:L0()},kr)}const hc=.12;function Jt(n,t={}){return new dd({color:n,map:t.map||null,roughnessMap:t.roughnessMap||null,normalMap:t.normalMap||null,roughness:t.roughness??.75,metalness:t.metalness??.04,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Tn,envMapIntensity:t.envMapIntensity??.65})}function Qi(n,t,e,i,r,s,a){const o=e-n,l=i-t,c=Math.hypot(o,l);if(c<.01)return null;const u=new le(c,r,hc),f=new zt(u,a);return f.position.set((n+e)/2,s+r/2,(t+i)/2),f.rotation.y=-Math.atan2(l,o),f.castShadow=!0,f.receiveShadow=!0,f}function z0(n,t){if(n.noFloor||n.name==="階段")return null;let e=1/0,i=-1/0,r=1/0,s=-1/0;for(const v of n.points)e=Math.min(e,v.x),i=Math.max(i,v.x),r=Math.min(r,v.z),s=Math.max(s,v.z);const a=Math.max(.05,i-e),o=Math.max(.05,s-r);let l=null,c=n.floor||n.color||"#e8e0d4",u=.72,f=.04;const d=n.name;d.includes("和室")?(l=t.tatami,c="#c5d48a",u=.92):d.includes("バス")||d.includes("洗面")||d.includes("トイレ")||d.includes("玄関")||d.includes("ポーチ")?(l=t.tile,c=d.includes("玄関")||d.includes("ポーチ")?"#c4b8a8":"#d8e4ee",u=.35,f=.08):d.includes("デッキ")||d.includes("バルコニー")?(l=d.includes("デッキ")?t.deck:t.concrete,c=d.includes("デッキ")?"#9a7340":"#b0b8c0",u=.8):(l=t.wood,c="#c9a87c",u=.55);const m=Jt(c,{map:l,roughness:u,metalness:f,envMapIntensity:.55,side:Ve});l&&t.woodRough&&l===t.wood&&(m.roughnessMap=t.woodRough);const _=new zt(new le(a,.05,o),m);return _.position.set((e+i)/2,.025,(r+s)/2),_.receiveShadow=!0,_.castShadow=!1,_}function N0(n){const t=new yn;t.position.set(n.x,0,n.z),t.rotation.y=n.rot||0;const e=(i,r,s,a,o,l={})=>{const c=new zt(new le(i,r,s),Jt(o,l));return c.position.y=a,c.castShadow=!0,c.receiveShadow=!0,t.add(c),c};switch(n.type){case"bed":{e(n.w,n.h,n.d,n.h/2,"#6a7f98",{roughness:.65}),e(n.w*.96,.12,n.d*.92,n.h+.07,"#eef2f6",{roughness:.85}),e(n.w*.9,.08,n.d*.45,n.h+.12,"#d8e0e8",{roughness:.9}).position.z=n.d*.12,e(n.w*.95,.45,.12,n.h/2+.2,"#4a5f78",{roughness:.55}).position.z=-n.d/2+.06,e(n.w*.36,.14,.3,n.h+.18,"#f5f5f5",{roughness:.9}).position.set(-n.w*.2,0,-n.d*.32),e(n.w*.36,.14,.3,n.h+.18,"#f5f5f5",{roughness:.9}).position.set(n.w*.2,0,-n.d*.32);break}case"sofa":{e(n.w,.4,n.d,.24,"#6f8f62",{roughness:.8});const i=e(n.w,.52,.18,.6,"#5f7f52",{roughness:.75});i.position.z=-n.d/2+.09;const r=e(.18,.4,n.d*.92,.55,"#5f7f52",{roughness:.75});r.position.x=-n.w/2+.09;const s=e(.18,.4,n.d*.92,.55,"#5f7f52",{roughness:.75});s.position.x=n.w/2-.09,e(n.w*.42,.14,n.d*.55,.5,"#92b080",{roughness:.85}).position.x=-n.w*.18,e(n.w*.42,.14,n.d*.55,.5,"#92b080",{roughness:.85}).position.x=n.w*.18;break}case"table":{e(n.w,.05,n.d,n.h,"#c9a66b");const i=.055;for(const[r,s]of[[-n.w/2+.08,-n.d/2+.08],[n.w/2-.08,-n.d/2+.08],[-n.w/2+.08,n.d/2-.08],[n.w/2-.08,n.d/2-.08]]){const a=e(i,n.h-.02,i,(n.h-.02)/2,"#a8844a");a.position.x=r,a.position.z=s}break}case"desk":{e(n.w,.05,n.d,n.h,"#8b7355"),e(n.w,n.h-.05,.05,(n.h-.05)/2,"#7a6348").position.z=n.d/2-.03;break}case"chair":{e(n.w,.06,n.d,.45,"#a08050"),e(n.w*.9,.4,.06,.7,"#906f40").position.z=-n.d/2+.03;for(const[i,r]of[[-n.w/2+.05,-n.d/2+.05],[n.w/2-.05,-n.d/2+.05],[-n.w/2+.05,n.d/2-.05],[n.w/2-.05,n.d/2-.05]])e(.04,.42,.04,.21,"#806040").position.set(i,0,r);break}case"kitchen":{e(n.w,n.h,n.d,n.h/2,"#f4f4f2"),e(n.w+.04,.04,n.d+.04,n.h+.02,"#2c3338",{metalness:.45,roughness:.35});const i=e(n.w*.75,.03,.42,n.h+.05,"#1a1a1a");i.position.z=n.d*.12;for(let r=0;r<3;r++)e(.03,.12,.02,n.h*.45,"#888",{metalness:.6}).position.set(n.w/2-.01,0,-n.d/2+.3+r*.55);break}case"island":{e(n.w,n.h,n.d,n.h/2,"#f0ebe3"),e(n.w+.05,.04,n.d+.05,n.h+.02,"#3a3f44",{metalness:.3,roughness:.4});break}case"fridge":{e(n.w,n.h,n.d,n.h/2,"#eef1f4",{metalness:.35,roughness:.35}),e(.02,n.h*.28,.06,n.h*.6,"#999",{metalness:.5}).position.x=n.w/2,e(n.w*.9,.01,n.d*.95,n.h*.55,"#ccc");break}case"tv":{e(n.w,.35,n.d+.25,.22,"#3d3428"),e(n.w*.95,n.h*.72,.04,.55+n.h*.25,"#111"),e(n.w*.88,n.h*.62,.02,.55+n.h*.25,"#1a3355",{metalness:.2,roughness:.3});break}case"closet":{e(n.w,n.h,n.d,n.h/2,"#d8cbb5"),e(.01,n.h*.92,n.d*.95,n.h/2,"#c4b49a"),e(.02,.08,.02,n.h*.5,"#888").position.x=n.w/2;break}case"toilet":{e(n.w,n.h,n.d,n.h/2,"#f7f7f7"),e(n.w*.75,.32,.22,n.h+.14,"#eee").position.z=-n.d*.22;break}case"sink":{e(n.w,n.h*.72,n.d,n.h*.72/2,"#f2f2f0"),e(n.w*.92,.06,n.d*.72,n.h*.72+.03,"#c5d8e8"),e(n.w*.88,.75,.03,n.h+.55,"#a8c8e0",{metalness:.55,roughness:.15}).position.z=-n.d*.28;break}case"bath":{e(n.w,n.h,n.d,n.h/2,"#e4f0f6"),e(n.w*.88,.04,n.d*.78,n.h-.02,"#b5d4e8");break}case"plant":{e(n.w*.55,.25,n.d*.55,.12,"#a07050");const i=new zt(new hr(n.w*.45,n.h*.7,8),Jt("#2d6a3e"));i.position.y=.25+n.h*.35,i.castShadow=!0,t.add(i);break}case"tatami":{e(n.w,.04,n.d,.03,"#c8d890");break}default:e(n.w||.5,n.h||.5,n.d||.5,(n.h||.5)/2,"#888")}return t}function us(n,t,e,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.clearRect(0,0,256,64),s.fillStyle="rgba(15, 20, 25, 0.55)",s.beginPath();const a=12;s.moveTo(8+a,8),s.arcTo(248,8,248,56,a),s.arcTo(248,56,8,56,a),s.arcTo(8,56,8,8,a),s.arcTo(8,8,248,8,a),s.closePath(),s.fill(),s.font="bold 26px 'Hiragino Sans', 'Noto Sans JP', sans-serif",s.fillStyle="#f1f5f9",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,32);const o=new ql(r);o.colorSpace=Ae;const l=new Xl({map:o,transparent:!0,depthWrite:!1,opacity:.88}),c=new ld(l);return c.position.set(t,e,i),c.scale.set(1.5,.38,1),c.userData.isLabel=!0,c}function F0(n,t,e,i){const r=t.exterior||{style:"apartment",facadeColor:"#e8e4dc"},s=or(t),a=t.entrance||{x:(s.minX+s.maxX)/2,z:s.minZ};{const o=new zt(new fr(60,60),Jt("#5a8a45",{map:e.grass,roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(s.cx,-.12,s.cz),o.receiveShadow=!0,n.add(o)}{const o=new zt(new le(s.maxX-s.minX+.6,.12,s.maxZ-s.minZ+.6),Jt("#8a8680",{roughness:1}));o.position.set(s.cx,-.05,s.cz),o.receiveShadow=!0,n.add(o)}{const l=Math.abs(t.spawn.z-a.z)+.5,c=new zt(new le(1.6,.04,l),Jt("#a0a098",{map:e.concrete,roughness:.95}));c.position.set(a.x,0,(t.spawn.z+a.z)/2),c.receiveShadow=!0,n.add(c);for(const u of[-.95,.95]){const f=new zt(new le(.2,1.1,.2),Jt("#6a6a68"));f.position.set(a.x+u,.55,t.spawn.z+.3),f.castShadow=!0,n.add(f)}}{const o=new zt(new le(2.4,.08,1.6),Jt("#b8b0a0",{map:e.tile,roughness:.9}));o.position.set(a.x,.02,a.z-.7),o.receiveShadow=!0,n.add(o)}{const o=new zt(new le(.08,ke-.05,.7),Jt(r.accentColor||"#4a6a8a",{roughness:.55}));o.position.set(a.x+.45,(ke-.05)/2,a.z+.08),o.rotation.y=.65,o.castShadow=!0,n.add(o);const l=Jt("#3d3428");for(const[c,u,f,d,m,_]of[[-.48,ke/2,0,.08,ke,.14],[.48,ke/2,0,.08,ke,.14],[0,ke+.04,0,1.05,.1,.14]]){const v=new zt(new le(d,m,_),l);v.position.set(a.x+c,u,a.z+f),n.add(v)}}if(r.style==="apartment"){const o=r.floors||5,l=r.unitFloor||3,c=o*2.8,u=Jt(r.facadeColor||"#e0dcd4",{roughness:.88}),f=new yn;f.userData.hideInBird=!0;const d=s.maxX-s.minX+.35,m=s.maxZ-s.minZ+.35,_=(o-l)*2.8+.2,v=nn+.05,p=.2,h=[{x:s.cx,z:s.minZ-.12,sx:d,sz:p},{x:s.cx,z:s.maxZ+.12,sx:d,sz:p},{x:s.minX-.12,z:s.cz,sx:p,sz:m},{x:s.maxX+.12,z:s.cz,sx:p,sz:m}];for(const T of h){const b=new zt(new le(T.sx,_,T.sz),u);b.position.set(T.x,v+_/2,T.z),b.castShadow=!0,f.add(b)}const R=new zt(new le(d+.15,.15,m+.15),Jt("#c8c4bc",{roughness:.95}));R.position.set(s.cx,v+_+.05,s.cz),f.add(R);const A=Jt("#7eb8e0",{transparent:!0,opacity:.55,metalness:.2,roughness:.2});for(let T=l+1;T<=o;T++){const b=(T-l-1)*2.8+v+1.3;for(let E=0;E<3;E++){const C=new zt(new le(.9,1,.06),A);C.position.set(s.minX+1.2+E*1.5,b,s.minZ-.16),f.add(C);const x=C.clone();x.position.set(s.minX+1.2+E*1.5,b,s.maxZ+.16),f.add(x)}}n.add(f);const g=us(`${l}F 内覧中`,s.cx,c*.55,s.minZ-1.2);g.userData.hideInBird=!0,n.add(g)}else if((r.floors||1)<=1){const l=new zt(new hr(Math.max(s.maxX-s.minX,s.maxZ-s.minZ)*.7,1.6,4),Jt(r.roofColor||"#4a5568",{roughness:.85}));l.position.set(s.cx,nn+1.6/2+.15,s.cz),l.rotation.y=Math.PI/4,l.castShadow=!0,l.userData.hideInBird=!0,n.add(l)}{const o=new zt(new Vi(.05,.06,2.4,8),Jt("#444"));o.position.set(a.x+1.4,1.2,a.z-1.5),n.add(o);const l=new Da(16771272,4,8,2);l.position.set(a.x+1.4,2.3,a.z-1.5),n.add(l);const c=new zt(new ar(.12,12,12),Jt("#fff4d0",{roughness:.3,metalness:.1}));c.position.copy(l.position),n.add(c)}for(const[o,l]of[[a.x-2.2,a.z-1.8],[a.x+2.2,a.z-1.8],[s.minX-1.2,s.cz],[s.maxX+1.2,s.cz]]){const c=new zt(new ar(.55,10,10),Jt("#3d7a3a",{roughness:1}));c.position.set(o,.4,l),c.scale.y=.75,c.castShadow=!0,n.add(c)}}function O0(n,t,e){const i=new yn,r=14,s=n.maxX-n.minX,a=(n.highZ??n.maxZ)-(n.lowZ??n.minZ),o=a/r,l=t/r,c=Jt("#8a6a45",{roughness:.55,metalness:.06,envMapIntensity:.5}),u=Jt("#7a5e3a",{roughness:.7});for(let d=0;d<r;d++){const m=(n.lowZ??n.minZ)+(d+.5)*o,_=e+(d+.5)*l,v=new zt(new le(s*.94,Math.max(.04,l*.35),o*.95),c);v.position.set((n.minX+n.maxX)/2,_+l*.2,m),v.castShadow=!0,v.receiveShadow=!0,i.add(v);const p=new zt(new le(s*.94,l*.85,.03),u);p.position.set((n.minX+n.maxX)/2,_-l*.15,m-o*.4),p.castShadow=!0,i.add(p)}const f=Jt("#4a5560",{metalness:.55,roughness:.35});for(const d of[n.minX+.04,n.maxX-.04]){for(let _=0;_<=r;_++){const v=_/r,p=(n.lowZ??n.minZ)+v*a,h=e+v*t+.9,R=new zt(new Vi(.025,.025,.95,8),f);R.position.set(d,h-.35,p),R.castShadow=!0,i.add(R)}const m=new zt(new le(.05,.05,a),f);m.position.set(d,e+t*.55+.45,(n.minZ+n.maxZ)/2),m.rotation.x=Math.atan2(t,a),i.add(m)}return i.add(us("階段",(n.minX+n.maxX)/2,e+t*.5,(n.minZ+n.maxZ)/2)),i}function B0(n,t,e,i,r){const s=new yn;s.position.y=t;const a=n.wallHeight||nn;for(const l of n.rooms||[]){const c=z0(l,i);c&&s.add(c)}const o=(l,c)=>{r.push({a:{...l.a},b:{...l.b},h:c,baseY:t})};for(const l of n.walls||[]){const c=l.h??a,u=Qi(l.a.x,l.a.z,l.b.x,l.b.z,c,0,c<1.5?e.rail:e.wall);if(u&&s.add(u),o(l,c),c>1.5){const f=Qi(l.a.x,l.a.z,l.b.x,l.b.z,.08,0,e.baseboard);f&&(f.scale.z=1.4,s.add(f))}}for(const l of n.railWalls||[]){const c=l.h??1.05,u=Qi(l.a.x,l.a.z,l.b.x,l.b.z,c,0,e.rail);u&&s.add(u),o(l,c)}for(const l of n.doors||[]){const c=l.b.x-l.a.x,u=l.b.z-l.a.z,f=Math.hypot(c,u),d=(l.a.x+l.b.x)/2,m=(l.a.z+l.b.z)/2,_=-Math.atan2(u,c),v=new zt(new le(f+.1,.12,hc+.04),e.doorFrame);v.position.set(d,ke+.06,m),v.rotation.y=_,v.castShadow=!0,s.add(v);const p=Qi(l.a.x,l.a.z,l.b.x,l.b.z,a-ke-.12,ke+.12,e.wall);if(p&&s.add(p),!l.exterior&&l.label!=="バルコニー"&&l.label!=="デッキ"&&l.label!=="階段"){const h=new zt(new le(.04,ke-.05,Math.max(.2,f*.55)),Jt("#d2c0a0",{roughness:.72})),R=-u/(f||1),A=c/(f||1);h.position.set(l.a.x+c*.15+R*.06,(ke-.05)/2,l.a.z+u*.15+A*.06),h.rotation.y=_+.55,h.castShadow=!0,s.add(h)}}for(const l of n.windows||[]){const c=l.h??1.2,u=l.sill??.9,f=Qi(l.a.x,l.a.z,l.b.x,l.b.z,c,u,e.glass);f&&(f.castShadow=!1,s.add(f))}{const l=or(n),c=new zt(new le(l.maxX-l.minX+.4,.06,l.maxZ-l.minZ+.4),e.ceiling);c.position.set(l.cx,a,l.cz),c.receiveShadow=!0,c.userData.isCeiling=!0,s.add(c)}for(const l of n.furniture||[])s.add(N0(l));for(const l of n.rooms||[]){if(["収納","SIC","廊下","板の間","パントリー","WIC","階段"].includes(l.name))continue;const c=l.points.reduce((p,h)=>p+h.x,0)/l.points.length,u=l.points.reduce((p,h)=>p+h.z,0)/l.points.length,f=l.name.includes("LD")||l.name==="リビング・ダイニング"||l.name==="LDK",d=new Da(16773341,f?14:7,f?9:6,1.8);d.position.set(c,a-.25,u),s.add(d);const m=new Da(15266047,f?3:1.5,5,2);m.position.set(c+.8,1.4,u-.5),s.add(m);const _=new zt(new Vi(.22,.28,.06,20),Jt("#fff8f0",{roughness:.35,metalness:.15,envMapIntensity:.8}));_.position.set(c,a-.04,u),_.userData.isCeiling=!0,s.add(_);const v=new zt(new rs(.35,24),new sr({color:16774368,transparent:!0,opacity:.35}));v.rotation.x=-Math.PI/2,v.position.set(c,a-.08,u),v.userData.isCeiling=!0,s.add(v),s.add(us(l.name,c,2.05,u))}return s}function H0(n){var u,f;const t=d0(n),e=new yn,i=[],r=U0(),s=t.floorHeight||oi,a={wall:Jt("#f3efe8",{map:r.plaster,roughness:.88,envMapIntensity:.35,side:Ve}),rail:Jt("#5a6570",{metalness:.45,roughness:.4}),doorFrame:Jt("#6b5344",{roughness:.55,metalness:.08}),glass:Jt("#b8d4ec",{roughness:.08,metalness:.25,transparent:!0,opacity:.28,side:Ve,envMapIntensity:1.2}),ceiling:Jt("#f7f5f2",{roughness:.95}),baseboard:Jt("#e8e2d8",{roughness:.7})},o={...t.levels[0],spawn:t.spawn,entrance:t.entrance,exterior:{...t.exterior,floors:((u=t.exterior)==null?void 0:u.floors)||t.levels.length}};F0(e,o,r);const l=new Set;for(const d of t.levels){const m=(d.level||0)*s,_=B0(d,m,a,r,i);e.add(_);for(const p of d.stairs||[]){if(l.has(p.id))continue;const h=Math.min(p.fromLevel,p.toLevel);(d.level||0)===h&&(e.add(O0(p,s,m)),l.add(p.id||`${p.minX}-${p.minZ}`))}const v=or(d);e.add(us(d.name||`${(d.level||0)+1}F`,v.minX-.8,m+1.5,v.cz))}if(((f=t.exterior)==null?void 0:f.style)==="house"&&t.levels.length>1){const d=t.levels[t.levels.length-1],m=or(d),_=(d.level||0)*s+(d.wallHeight||nn),v=new zt(new hr(Math.max(m.maxX-m.minX,m.maxZ-m.minZ)*.7,1.6,4),Jt(t.exterior.roofColor||"#4a5568",{roughness:.85}));v.position.set(m.cx,_+.9,m.cz),v.rotation.y=Math.PI/4,v.castShadow=!0,v.userData.hideInBird=!0,e.add(v)}const c=rc(t);return{group:e,colliders:i,bounds:c,building:t}}function k0(n,t,e,i=""){const r=n.getContext("2d"),s=n.width,a=n.height;r.clearRect(0,0,s,a);const o=(t==null?void 0:t.rooms)||[];if(!o.length){r.fillStyle="#1e293b",r.fillRect(0,0,s,a);return}let l=1/0,c=-1/0,u=1/0,f=-1/0;for(const x of o)for(const M of x.points)l=Math.min(l,M.x),c=Math.max(c,M.x),u=Math.min(u,M.z),f=Math.max(f,M.z);u=Math.min(u,e.z-1),f=Math.max(f,e.z+1),l=Math.min(l,e.x-1),c=Math.max(c,e.x+1);const d=.5;l-=d,c+=d,u-=d,f+=d;const m=c-l,_=f-u,v=Math.min((s-14)/m,(a-14)/_),p=(s-m*v)/2,h=(a-_*v)/2,R=x=>p+(x-l)*v,A=x=>h+(f-x)*v;r.fillStyle="#1e293b",r.fillRect(0,0,s,a),r.fillStyle="rgba(74, 122, 58, 0.3)",r.fillRect(0,0,s,a);for(const x of o)r.beginPath(),x.points.forEach((M,P)=>{P===0?r.moveTo(R(M.x),A(M.z)):r.lineTo(R(M.x),A(M.z))}),r.closePath(),r.fillStyle=x.floor||x.color||"#334155",r.globalAlpha=.9,r.fill(),r.globalAlpha=1,r.strokeStyle="rgba(255,255,255,0.12)",r.lineWidth=1,r.stroke();r.strokeStyle="rgba(20,20,20,0.65)",r.lineWidth=1.8;for(const x of t.walls||[])r.beginPath(),r.moveTo(R(x.a.x),A(x.a.z)),r.lineTo(R(x.b.x),A(x.b.z)),r.stroke();for(const x of t.stairs||[])r.fillStyle="rgba(251, 191, 36, 0.35)",r.fillRect(R(x.minX),A(x.maxZ),(x.maxX-x.minX)*v,(x.maxZ-x.minZ)*v);const g=R(e.x),T=A(e.z);r.fillStyle="#3b82f6",r.beginPath(),r.arc(g,T,5,0,Math.PI*2),r.fill(),r.strokeStyle="#fff",r.lineWidth=1.5,r.stroke();const b=11,E=g+Math.sin(e.yaw)*b,C=T-Math.cos(e.yaw)*b;r.strokeStyle="#60a5fa",r.lineWidth=2,r.beginPath(),r.moveTo(g,T),r.lineTo(E,C),r.stroke(),i&&(r.fillStyle="rgba(15,20,25,0.75)",r.fillRect(4,4,36,16),r.fillStyle="#e2e8f0",r.font="bold 11px sans-serif",r.fillText(i,10,15))}function V0(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function fc(n,t=8){const e=[];for(const r of n)e.push(r.a,r.b);const i=[];for(const r of e){let s=null;for(const a of i)if(V0(r,a)<=t){s=a;break}if(s)s.x=(s.x*s.n+r.x)/(s.n+1),s.y=(s.y*s.n+r.y)/(s.n+1),s.n++,r._c=s;else{const a={x:r.x,y:r.y,n:1};r._c=a,i.push(a)}}return n.map(r=>({a:{x:r.a._c.x,y:r.a._c.y},b:{x:r.b._c.x,y:r.b._c.y},door:!!r.door}))}function pc(n,t=12){const e=t*Math.PI/180;return n.map(i=>{const r=i.b.x-i.a.x,s=i.b.y-i.a.y,a=Math.atan2(Math.abs(s),Math.abs(r));if(a<e){const o=(i.a.y+i.b.y)/2;return{...i,a:{x:i.a.x,y:o},b:{x:i.b.x,y:o}}}if(Math.PI/2-a<e){const o=(i.a.x+i.b.x)/2;return{...i,a:{x:o,y:i.a.y},b:{x:o,y:i.b.y}}}return i})}function G0(n,t,e,i,r){n=Math.round(n),t=Math.round(t),e=Math.round(e),i=Math.round(i);const s=Math.abs(e-n),a=Math.abs(i-t),o=n<e?1:-1,l=t<i?1:-1;let c=s-a;for(;r(n,t),!(n===e&&t===i);){const u=2*c;u>-a&&(c-=a,n+=o),u<s&&(c+=s,t+=l)}}function mc(n,t={}){const e=t.cellSize||6,i=t.minAreaCells||80;let r=pc(n);r=fc(r,e*1.2);let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const g of r)for(const T of[g.a,g.b])s=Math.min(s,T.x),a=Math.max(a,T.x),o=Math.min(o,T.y),l=Math.max(l,T.y);const c=e*3;s-=c,a+=c,o-=c,l+=c;const u=Math.ceil((a-s)/e)+1,f=Math.ceil((l-o)/e)+1;if(u*f>2e6)return mc(n,{...t,cellSize:e*2});const d=new Uint8Array(u*f),m=(g,T)=>T*u+g,_=(g,T)=>({cx:Math.round((g-s)/e),cy:Math.round((T-o)/e)});for(const g of r){const T=_(g.a.x,g.a.y),b=_(g.b.x,g.b.y),E=g.door?2:1;G0(T.cx,T.cy,b.cx,b.cy,(C,x)=>{if(C>=0&&x>=0&&C<u&&x<f&&E===1){d[m(C,x)]=1;for(const[M,P]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const N=C+M,O=x+P;N>=0&&O>=0&&N<u&&O<f&&(d[m(N,O)]=1)}}})}for(let g=0;g<u;g++)d[m(g,0)]=1,d[m(g,f-1)]=1;for(let g=0;g<f;g++)d[m(0,g)]=1,d[m(u-1,g)]=1;const v=new Int32Array(u*f);let p=0;const h=[];for(let g=1;g<f-1;g++)for(let T=1;T<u-1;T++){if(d[m(T,g)]===1||v[m(T,g)]!==0)continue;p++;const b=[[T,g]];v[m(T,g)]=p;let E=T,C=T,x=g,M=g,P=0;const N=[];for(;b.length;){const[G,q]=b.pop();P++,N.push([G,q]),E=Math.min(E,G),C=Math.max(C,G),x=Math.min(x,q),M=Math.max(M,q);for(const[W,K]of[[1,0],[-1,0],[0,1],[0,-1]]){const k=G+W,nt=q+K;k<0||nt<0||k>=u||nt>=f||d[m(k,nt)]!==1&&v[m(k,nt)]===0&&(v[m(k,nt)]=p,b.push([k,nt]))}}const O=E<=1||x<=1||C>=u-2||M>=f-2;P>=i&&!O&&h.push({label:p,count:P,minCX:E,maxCX:C,minCY:x,maxCY:M,cells:N})}h.sort((g,T)=>T.count-g.count);const R=["#efe6d8","#e8dfd2","#dce8f0","#d0e8dc","#e8e0d4","#f0ebe3","#d8e8c8","#c8d0d8","#ddd5c8","#f5efe4"];return{rooms:h.map((g,T)=>{const b=s+g.minCX*e,E=o+g.minCY*e,C=s+(g.maxCX+1)*e,x=o+(g.maxCY+1)*e,M=g.count*e*e;return{name:W0(T,g,h),color:R[T%R.length],floor:R[T%R.length],pointsPx:[{x:b,y:E},{x:C,y:E},{x:C,y:x},{x:b,y:x}],areaPx:M,_bbox:{x0:b,y0:E,x1:C,y1:x}}}),walls:r,bounds:{minX:s,maxX:a,minY:o,maxY:l},cellSize:e,gridMeta:{W:u,H:f}}}function W0(n,t,e){if(n===0)return"LDK";const i=t.maxCX-t.minCX,r=t.maxCY-t.minCY,s=i/(r||1),a=t.count;return a<e[0].count*.12?s>1.4||s<.7?"廊下":`収納${n}`:a<e[0].count*.25?`水回り${n}`:`洋室${n}`}function X0(n,t){const e=t.scaleMPerPx,i=t.maxY,r=(p,h)=>({x:p*e,z:(i-h)*e}),s=n.walls.filter(p=>!p.door).map(p=>({a:r(p.a.x,p.a.y),b:r(p.b.x,p.b.y)})),a=(t.doors||n.walls.filter(p=>p.door)).map(p=>({a:r(p.a.x,p.a.y),b:r(p.b.x,p.b.y),label:"ドア",exterior:!1})),o=n.rooms.map(p=>({name:p.name,color:p.color,floor:p.floor,points:p.pointsPx.map(h=>r(h.x,h.y))}));let l=1/0,c=-1/0,u=1/0,f=-1/0;for(const p of o)for(const h of p.points)l=Math.min(l,h.x),c=Math.max(c,h.x),u=Math.min(u,h.z),f=Math.max(f,h.z);isFinite(l)||(l=0,c=5,u=0,f=5);const d=(l+c)/2,m=.9;s.push({a:{x:l,z:u},b:{x:d-m/2,z:u}},{a:{x:d+m/2,z:u},b:{x:c,z:u}}),a.unshift({a:{x:d-m/2,z:u},b:{x:d+m/2,z:u},label:"玄関",exterior:!0}),s.length>=3,o.push({name:"ポーチ",color:"#c0b8a8",floor:"#b0a898",points:[{x:d-1.3,z:u-1.6},{x:d+1.3,z:u-1.6},{x:d+1.3,z:u},{x:d-1.3,z:u}]});const _=o[0];let v=[];if(_){const p=_.points.reduce((R,A)=>R+A.x,0)/_.points.length,h=_.points.reduce((R,A)=>R+A.z,0)/_.points.length;v=[{type:"sofa",x:p-.8,z:h,rot:0,w:1.8,d:.8,h:.75},{type:"table",x:p+.9,z:h,rot:0,w:.9,d:.9,h:.4}]}return{id:`traced-${Date.now()}`,title:t.name||"トレース物件",wallHeight:2.45,entrance:{x:d,z:u,facing:Math.PI},spawn:{x:d,z:u-2.2,yaw:0},rooms:o,walls:s,doors:a,windows:[],furniture:v,exterior:{style:"house",floors:1,unitFloor:1,facadeColor:"#f0ebe3",accentColor:"#5c4033",roofColor:"#4a5568"}}}let J={image:null,imageUrl:null,walls:[],drawing:!1,start:null,mode:"wall",scaleMPerPx:.02,calibratePts:[],name:"アップロード物件",segPreview:null};function Y0(n){n.innerHTML=`
    <div class="tracer">
      <div class="tracer-toolbar">
        <label class="btn secondary file-btn">
          画像を選ぶ
          <input type="file" id="tracer-file" accept="image/*" hidden />
        </label>
        <div class="tracer-modes">
          <button type="button" class="btn secondary mode-btn active" data-mode="wall">壁</button>
          <button type="button" class="btn secondary mode-btn" data-mode="door">ドア開口</button>
          <button type="button" class="btn secondary mode-btn" data-mode="calibrate">スケール校正</button>
        </div>
        <button type="button" class="btn secondary" id="tracer-undo" disabled>戻す</button>
        <button type="button" class="btn secondary" id="tracer-clear" disabled>クリア</button>
        <label class="scale-label">
          <span id="scale-display">50</span> px = 1m
        </label>
        <button type="button" class="btn secondary" id="tracer-segment" disabled>部屋を自動分割</button>
        <button type="button" class="btn primary" id="tracer-build" disabled>3D化して内覧</button>
      </div>
      <div class="tracer-stage">
        <canvas id="tracer-canvas"></canvas>
        <p class="tracer-empty" id="tracer-empty">間取り図の画像をアップロードしてください</p>
      </div>
      <div class="tracer-meta">
        <input type="text" id="tracer-name" class="tracer-name-input" placeholder="物件名（例: ○○マンション 201）" />
        <p class="tracer-note" id="tracer-status">
          壁モード: ドラッグで壁線。軸にスナップされます。スケール校正で既知寸法の2点を指定し、実長(m)を入力してください。
        </p>
        <div id="tracer-rooms-list" class="tracer-rooms-list"></div>
      </div>
    </div>
  `;const t=n.querySelector("#tracer-file"),e=n.querySelector("#tracer-canvas"),i=n.querySelector("#tracer-empty"),r=n.querySelector("#tracer-undo"),s=n.querySelector("#tracer-clear"),a=n.querySelector("#tracer-build"),o=n.querySelector("#tracer-segment"),l=n.querySelector("#tracer-status"),c=n.querySelector("#tracer-rooms-list"),u=n.querySelector("#tracer-name"),f=n.querySelector("#scale-display"),d=e.getContext("2d");let m=1;function _(g){J.mode=g,J.calibratePts=[],n.querySelectorAll(".mode-btn").forEach(T=>{T.classList.toggle("active",T.dataset.mode===g)}),g==="calibrate"?l.textContent="スケール校正: 図面上の既知寸法の一端をクリック → もう一端をクリック → 実長(m)を入力":g==="door"?l.textContent="ドア開口モード: 壁の開口部をドラッグで指定（通過可能）":l.textContent="壁モード: ドラッグで壁線。ほぼ水平・垂直は自動スナップ。端点も吸着します。"}n.querySelectorAll(".mode-btn").forEach(g=>{g.addEventListener("click",()=>_(g.dataset.mode))});function v(g){const T=12/m;let b=null,E=T;for(const C of J.walls)for(const x of[C.a,C.b]){const M=Math.hypot(g.x-x.x,g.y-x.y);M<E&&(E=M,b=x)}return b?{x:b.x,y:b.y}:g}function p(g,T){const b=T.x-g.x,E=T.y-g.y,C=Math.atan2(Math.abs(E),Math.abs(b)),x=12*Math.PI/180;return C<x?{x:T.x,y:g.y}:Math.PI/2-C<x?{x:g.x,y:T.y}:T}function h(g=null){var b;if(!J.image)return;if(m=Math.min(960,n.clientWidth-32||800)/J.image.width,e.width=J.image.width*m,e.height=J.image.height*m,e.style.display="block",i.style.display="none",d.setTransform(m,0,0,m,0,0),d.drawImage(J.image,0,0),(b=J.segPreview)!=null&&b.rooms)for(const E of J.segPreview.rooms){d.fillStyle=E.color+"99";const C=E.pointsPx;d.beginPath(),C.forEach((P,N)=>N===0?d.moveTo(P.x,P.y):d.lineTo(P.x,P.y)),d.closePath(),d.fill(),d.fillStyle="#0f172a",d.font=`${14/m}px sans-serif`;const x=C.reduce((P,N)=>P+N.x,0)/C.length,M=C.reduce((P,N)=>P+N.y,0)/C.length;d.fillText(E.name,x-20/m,M)}d.lineCap="round",d.lineWidth=3/m,J.walls.forEach(E=>{d.strokeStyle=E.door?"#22c55e":"#ef4444",E.door?d.setLineDash([8/m,6/m]):d.setLineDash([]),d.beginPath(),d.moveTo(E.a.x,E.a.y),d.lineTo(E.b.x,E.b.y),d.stroke(),d.setLineDash([]),d.fillStyle=E.door?"#16a34a":"#dc2626";for(const C of[E.a,E.b])d.beginPath(),d.arc(C.x,C.y,4/m,0,Math.PI*2),d.fill()}),J.drawing&&J.start&&g&&(d.strokeStyle=J.mode==="door"?"#4ade80":"#60a5fa",d.lineWidth=3/m,d.setLineDash([6/m,4/m]),d.beginPath(),d.moveTo(J.start.x,J.start.y),d.lineTo(g.x,g.y),d.stroke(),d.setLineDash([]));for(const E of J.calibratePts)d.fillStyle="#fbbf24",d.beginPath(),d.arc(E.x,E.y,6/m,0,Math.PI*2),d.fill();J.calibratePts.length===2&&(d.strokeStyle="#fbbf24",d.lineWidth=2/m,d.beginPath(),d.moveTo(J.calibratePts[0].x,J.calibratePts[0].y),d.lineTo(J.calibratePts[1].x,J.calibratePts[1].y),d.stroke()),r.disabled=J.walls.length===0,s.disabled=J.walls.length===0,o.disabled=J.walls.length<3,a.disabled=J.walls.length<3,f.textContent=String(Math.round(1/J.scaleMPerPx))}function R(g){var M,P,N,O;const T=e.getBoundingClientRect(),b=J.image.width/e.width,E=J.image.height/e.height,C=g.clientX??((P=(M=g.touches)==null?void 0:M[0])==null?void 0:P.clientX),x=g.clientY??((O=(N=g.touches)==null?void 0:N[0])==null?void 0:O.clientY);return{x:(C-T.left)*b,y:(x-T.top)*E}}t.addEventListener("change",g=>{var E;const T=(E=g.target.files)==null?void 0:E[0];if(!T)return;J.imageUrl&&URL.revokeObjectURL(J.imageUrl),J.imageUrl=URL.createObjectURL(T),J.name=T.name.replace(/\.[^.]+$/,""),u.value=J.name,J.walls=[],J.segPreview=null,c.innerHTML="";const b=new Image;b.onload=()=>{J.image=b,h()},b.src=J.imageUrl}),e.addEventListener("mousedown",g=>{if(J.image){if(J.mode==="calibrate"){const T=v(R(g));if(J.calibratePts.push(T),J.calibratePts.length>=2){const b=J.calibratePts[0],E=J.calibratePts[1],C=Math.hypot(E.x-b.x,E.y-b.y),x=prompt(`この線分の実長（メートル）を入力
（図上 ${C.toFixed(0)} px）`,"1.8");x&&Number(x)>0&&(J.scaleMPerPx=Number(x)/C,l.textContent=`スケール設定: ${Math.round(1/J.scaleMPerPx)} px = 1m（${Number(x)}m / ${C.toFixed(0)}px）`),J.calibratePts=[]}h();return}J.drawing=!0,J.start=v(R(g))}}),e.addEventListener("mousemove",g=>{if(!J.drawing||!J.start)return;let T=R(g);T=p(J.start,T),T=v(T),h(T)}),e.addEventListener("mouseup",g=>{if(!J.drawing||!J.start)return;let T=R(g);T=p(J.start,T),T=v(T),Math.hypot(T.x-J.start.x,T.y-J.start.y)>6&&(J.walls.push({a:{x:J.start.x,y:J.start.y},b:{x:T.x,y:T.y},door:J.mode==="door"}),J.segPreview=null),J.drawing=!1,J.start=null,h()}),e.addEventListener("touchstart",g=>{g.preventDefault(),e.dispatchEvent(new MouseEvent("mousedown",{clientX:g.touches[0].clientX,clientY:g.touches[0].clientY}))},{passive:!1}),e.addEventListener("touchmove",g=>{g.preventDefault(),e.dispatchEvent(new MouseEvent("mousemove",{clientX:g.touches[0].clientX,clientY:g.touches[0].clientY}))},{passive:!1}),e.addEventListener("touchend",g=>{const T=g.changedTouches[0];e.dispatchEvent(new MouseEvent("mouseup",{clientX:T.clientX,clientY:T.clientY}))},{passive:!1}),r.addEventListener("click",()=>{J.walls.pop(),J.segPreview=null,c.innerHTML="",h()}),s.addEventListener("click",()=>{J.walls=[],J.segPreview=null,c.innerHTML="",h()});function A(){if(J.walls.length<3)return null;let g=pc(J.walls);g=fc(g,10);const T=mc(g,{cellSize:6,minAreaCells:60});return J.segPreview=T,c.innerHTML=`<p class="rooms-count">${T.rooms.length} 部屋を検出</p>`+T.rooms.map((b,E)=>`
      <label class="room-rename">
        <span class="swatch" style="background:${b.color}"></span>
        <input data-idx="${E}" value="${b.name}" />
      </label>`).join(""),c.querySelectorAll("input").forEach(b=>{b.addEventListener("change",()=>{const E=Number(b.dataset.idx);J.segPreview.rooms[E]&&(J.segPreview.rooms[E].name=b.value||`部屋${E+1}`),h()})}),l.textContent=`${T.rooms.length} 部屋を分割しました。名前を編集してから「3D化して内覧」を押してください。`,h(),T}return o.addEventListener("click",()=>A()),u.addEventListener("change",()=>{J.name=u.value||J.name}),{onBuild(g){a.addEventListener("click",()=>{var E;J.segPreview||A(),(!J.segPreview||J.segPreview.rooms.length===0)&&(l.textContent="部屋を検出できませんでした。外周の壁が閉じているか確認してください。"),J.name=u.value||J.name;const T=((E=J.image)==null?void 0:E.height)||1e3,b=X0(J.segPreview||{rooms:[],walls:J.walls},{scaleMPerPx:J.scaleMPerPx,maxY:T,name:J.name,doors:J.walls.filter(C=>C.door)});if(J.walls.length>=3){const C=J.scaleMPerPx,x=(P,N)=>({x:P*C,z:(T-N)*C});b.walls=[...J.walls.filter(P=>!P.door).map(P=>({a:x(P.a.x,P.a.y),b:x(P.b.x,P.b.y)})),...b.walls.filter(P=>!0)];const M=b.entrance;b.walls=J.walls.filter(P=>!P.door).map(P=>({a:x(P.a.x,P.a.y),b:x(P.b.x,P.b.y)})),M&&(b.doors=[{a:{x:M.x-.45,z:M.z},b:{x:M.x+.45,z:M.z},label:"玄関",exterior:!0},...J.walls.filter(P=>P.door).map(P=>({a:x(P.a.x,P.a.y),b:x(P.b.x,P.b.y),label:"ドア"}))])}g(b,J)})}}}function q0(n){const t=document.createElement("div");t.id="mobile-controls",t.innerHTML=`
    <div class="m-zone m-zone-move" id="m-zone-move" aria-label="移動エリア">
      <div class="joy-float hidden" id="joy-move-float">
        <div class="joy-ring"></div>
        <div class="joy-knob"></div>
      </div>
      <span class="m-zone-hint">ここをタッチして歩く</span>
    </div>
    <div class="m-zone m-zone-look" id="m-zone-look" aria-label="視点エリア">
      <span class="m-zone-hint">ここをスワイプして見回す</span>
    </div>
    <div class="m-quick-bar">
      <button type="button" class="m-btn" id="m-btn-bird" title="俯瞰">🗺️ 上から</button>
      <button type="button" class="m-btn" id="m-btn-map" title="地図">📍 地図</button>
      <button type="button" class="m-btn m-btn-exit" id="m-btn-exit" title="終了">やめる</button>
    </div>
  `,n.appendChild(t);const e={moveX:0,moveZ:0,lookX:0,lookY:0,lookDeltaX:0,lookDeltaY:0,active:!1},i=t.querySelector("#m-zone-move"),r=t.querySelector("#m-zone-look"),s=t.querySelector("#joy-move-float"),a=t.querySelector(".joy-knob"),o=56;let l=null,c=null,u=0,f=0,d=0,m=0;function _(b){t.classList.toggle("visible",b),e.active=b,document.body.classList.toggle("is-mobile-tour",b)}function v(){return"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(max-width: 900px)").matches}function p(b,E){if(b.changedTouches){for(const C of b.changedTouches)if(C.identifier===E)return C}if(b.touches){for(const C of b.touches)if(C.identifier===E)return C}return null}i.addEventListener("touchstart",b=>{if(l!==null)return;const E=b.changedTouches[0];b.preventDefault(),l=E.identifier,d=E.clientX,m=E.clientY,s.classList.remove("hidden"),s.style.left=`${d}px`,s.style.top=`${m}px`,a.style.transform="translate(-50%, -50%)",e.moveX=0,e.moveZ=0,i.classList.add("active")},{passive:!1}),window.addEventListener("touchmove",b=>{if(l!==null){const E=p(b,l);if(E){b.preventDefault();let C=E.clientX-d,x=E.clientY-m;const M=Math.hypot(C,x);if(M>o){C=C/o*o,x=x/o*o;const P=M-o;d+=(E.clientX-d)*.08*(P/M),m+=(E.clientY-m)*.08*(P/M),s.style.left=`${d}px`,s.style.top=`${m}px`,C=E.clientX-d,x=E.clientY-m;const N=Math.hypot(C,x)||1;N>o&&(C=C/N*o,x=x/N*o)}a.style.transform=`translate(calc(-50% + ${C}px), calc(-50% + ${x}px))`,e.moveX=C/o,e.moveZ=-x/o}}if(c!==null){const E=p(b,c);if(E){b.preventDefault();const C=E.clientX-u,x=E.clientY-f;u=E.clientX,f=E.clientY,e.lookDeltaX+=C,e.lookDeltaY+=x}}},{passive:!1});function h(b){if(l!==null){if(b.changedTouches){let E=!1;for(const C of b.changedTouches)C.identifier===l&&(E=!0);if(!E)return}l=null,e.moveX=0,e.moveZ=0,s.classList.add("hidden"),i.classList.remove("active")}}function R(b){if(c!==null)return;const E=b.changedTouches?b.changedTouches[0]:b;b.changedTouches&&b.preventDefault(),c=E.identifier??"mouse",u=E.clientX,f=E.clientY,r.classList.add("active")}function A(b){if(c!==null){if(b.changedTouches){let E=!1;for(const C of b.changedTouches)C.identifier===c&&(E=!0);if(!E&&c!=="mouse")return}c=null,r.classList.remove("active")}}r.addEventListener("touchstart",R,{passive:!1}),r.addEventListener("touchend",A),r.addEventListener("touchcancel",A),window.addEventListener("touchend",b=>{h(b),A(b)}),window.addEventListener("touchcancel",b=>{h(b),A(b)}),window.addEventListener("orientationchange",()=>{e.moveX=e.moveZ=0,e.lookDeltaX=e.lookDeltaY=0,l=c=null,s.classList.add("hidden")});function g(){const b=e.lookDeltaX,E=e.lookDeltaY;return e.lookDeltaX=0,e.lookDeltaY=0,{dx:b,dy:E}}function T(b){b.addEventListener("touchstart",E=>{if(e.active)for(const C of E.changedTouches)C.clientX<window.innerWidth*.42||c===null&&(E.preventDefault(),c=C.identifier,u=C.clientX,f=C.clientY)},{passive:!1})}return{state:e,setVisible:_,isTouchDevice:v,showIfTouch(){_(v())},hide(){_(!1),document.body.classList.remove("is-mobile-tour"),e.moveX=e.moveZ=0,e.lookDeltaX=e.lookDeltaY=0},consumeLookDelta:g,bindCanvasLook:T,el:t}}const Bn=document.getElementById("c"),gc=document.getElementById("screen-catalog"),_c=document.getElementById("screen-detail"),xc=document.getElementById("screen-tracer"),vc=document.getElementById("screen-register"),qs=document.getElementById("catalog-grid"),Mc=document.getElementById("hud"),Z0=document.getElementById("room-label"),$0=document.getElementById("floor-badge"),K0=document.getElementById("minimap"),lr=document.getElementById("view-toggle"),Hn=document.getElementById("click-hint"),ds=document.getElementById("maps-overlay"),Sc=document.getElementById("overlay-iframe"),j0=document.getElementById("overlay-address"),kn=document.getElementById("register-form");let Qt=null,pe=null,Na=[],zn=null,Ne=!1,Zr="map",Nn=0;const un=new n0({canvas:Bn,antialias:!0,powerPreference:"high-performance"});un.setPixelRatio(Math.min(window.devicePixelRatio,2));un.setSize(window.innerWidth,window.innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=xl;un.outputColorSpace=Ae;un.toneMapping=Ml;un.toneMappingExposure=1.12;const dn=new Wl;dn.background=new Bt("#8eb4d4");dn.fog=new qa(10205392,.018);try{dn.environment=D0(un)}catch{}dn.add(new $l(15266559,7035464,.55));const We=new $a(16773590,2.2);We.position.set(14,22,10);We.castShadow=!0;We.shadow.mapSize.set(2048,2048);We.shadow.bias=-25e-5;We.shadow.normalBias=.03;We.shadow.camera.near=1;We.shadow.camera.far=60;We.shadow.camera.left=-24;We.shadow.camera.right=24;We.shadow.camera.top=24;We.shadow.camera.bottom=-24;dn.add(We);dn.add(new gd(16774635,.22));const yc=new $a(13164543,.45);yc.position.set(-8,10,-6);dn.add(yc);const je=new ze(68,window.innerWidth/window.innerHeight,.08,100),gt={x:0,y:os,z:0,yaw:0,pitch:0,footY:0,onStairs:!1},sn=new Set;let es=!1,Je=!1,ns=0,$r={x:0,y:16,z:0};const Ue=q0(document.getElementById("mobile-root"));Ue.bindCanvasLook(Bn);function J0(){const n=document.getElementById("m-btn-bird"),t=document.getElementById("m-btn-map"),e=document.getElementById("m-btn-exit");n==null||n.addEventListener("click",i=>{i.stopPropagation(),Ne&&eo()}),t==null||t.addEventListener("click",i=>{var r;i.stopPropagation(),(r=document.getElementById("btn-maps-overlay"))==null||r.click()}),e==null||e.addEventListener("click",i=>{i.stopPropagation(),Ne&&Tc()})}J0();function hn(n){gc.classList.toggle("hidden",n!=="catalog"),_c.classList.toggle("hidden",n!=="detail"),xc.classList.toggle("hidden",n!=="tracer"),vc.classList.toggle("hidden",n!=="register")}function Xn(){var t;const n=uc();if(!n.length){qs.innerHTML=`
      <div class="catalog-empty">
        <p>まだ物件がありません</p>
        <button type="button" class="btn primary" id="btn-empty-register">＋ 最初の物件を登録</button>
      </div>`,(t=document.getElementById("btn-empty-register"))==null||t.addEventListener("click",()=>to());return}qs.innerHTML=n.map(e=>{const i=e.planTemplateId==="house-2f"||e.unit&&String(e.unit).includes("2階");return`
    <button type="button" class="prop-card" data-id="${e.id}">
      <div class="prop-thumb" style="background: linear-gradient(135deg, ${e.accent||"#3b82f6"}88, #0f172a);">
        <span class="type-pill">${an(e.type||"")}${e.builtin?"":" · 登録"}${i?" · 2階OK":""}</span>
        <span class="price-pill">${an(e.price||"")}</span>
      </div>
      <div class="prop-body">
        <h3>${an(e.title)}</h3>
        <p class="unit">${an(e.unit||"")}</p>
        <div class="prop-meta">
          <span>${an(e.layout||"")}</span>
          <span>${an(e.area||"")}</span>
          <span>${an(e.built||"")}</span>
        </div>
        <p class="prop-addr">📍 ${an(e.address||"")}</p>
      </div>
    </button>`}).join(""),qs.querySelectorAll(".prop-card").forEach(e=>{e.addEventListener("click",()=>Qa(e.dataset.id))})}function an(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function hs(n,t,e){n.src=t==="street"?M0(e):v0(e)}function Qa(n){Qt=f0(n);const t=Qt;document.getElementById("detail-title").textContent=t.title,document.getElementById("detail-type").textContent=t.type||"",document.getElementById("detail-name").textContent=t.title,document.getElementById("detail-unit").textContent=t.unit||"",document.getElementById("detail-price").textContent=t.price||"",document.getElementById("detail-price-note").textContent=t.priceNote||"",document.getElementById("detail-address").textContent=t.address||"",document.getElementById("detail-layout").textContent=t.layout||"",document.getElementById("detail-area").textContent=t.area||"",document.getElementById("detail-built").textContent=[t.built,t.structure].filter(Boolean).join(" / "),document.getElementById("detail-access").textContent=t.access||"",document.getElementById("detail-exterior").textContent=t.exteriorNotes||"",document.getElementById("detail-desc").textContent=t.description||"";const e=Array.isArray(t.features)?t.features:String(t.features||"").split(",").map(o=>o.trim()).filter(Boolean);document.getElementById("detail-features").innerHTML=e.map(o=>`<li>${an(o)}</li>`).join("");const i=document.getElementById("detail-plan-wrap"),r=document.getElementById("detail-plan-img");t.planImage?(i.hidden=!1,r.src=t.planImage):i.hidden=!0;const s=document.getElementById("btn-edit-prop"),a=document.getElementById("btn-delete-prop");s.style.display=t.builtin?"none":"",a.style.display=t.builtin?"none":"",Zr="map",document.querySelectorAll("#screen-detail .map-tabs .tab").forEach(o=>{o.classList.toggle("active",o.dataset.map==="map")}),hs(document.getElementById("map-iframe"),"map",t),document.getElementById("link-maps").href=S0(t),document.getElementById("link-street").href=y0(t),hn("detail")}document.getElementById("btn-back-catalog").addEventListener("click",()=>{hn("catalog"),Xn()});document.querySelectorAll("#screen-detail .map-tabs .tab").forEach(n=>{n.addEventListener("click",()=>{Qt&&(Zr=n.dataset.map,document.querySelectorAll("#screen-detail .map-tabs .tab").forEach(t=>{t.classList.toggle("active",t.dataset.map===Zr)}),hs(document.getElementById("map-iframe"),Zr,Qt))})});function to(n=null){kn.reset(),document.getElementById("register-heading").textContent=n?"物件を編集":"物件を登録";const t=n?{...n,features:Array.isArray(n.features)?n.features.join(", "):n.features||"",lat:n.lat??"",lng:n.lng??""}:E0();for(const[s,a]of Object.entries(t)){const o=kn.elements.namedItem(s);o&&"value"in o&&(o.value=a??"")}const e=document.getElementById("traced-plan-select"),i=Ja();e.innerHTML=i.length===0?'<option value="">（トレース済みなし — 先に間取り取込）</option>':i.map(s=>`<option value="${s.id}">${an(s.name)}</option>`).join("");const r=kn.elements.namedItem("planTemplateId");Ec(r.value),hn("register")}function Ec(n){document.getElementById("traced-select-wrap").classList.toggle("hidden",n!=="traced")}document.getElementById("plan-template-select").addEventListener("change",n=>{Ec(n.target.value)});document.getElementById("btn-open-register").addEventListener("click",()=>to());document.getElementById("btn-back-from-register").addEventListener("click",()=>{hn("catalog"),Xn()});document.getElementById("btn-geocode").addEventListener("click",async()=>{const n=kn.elements.namedItem("address").value,t=document.getElementById("geocode-status");t.textContent="住所を検索中…";try{const e=await x0(n);kn.elements.namedItem("lat").value=e.lat,kn.elements.namedItem("lng").value=e.lng,t.textContent=`✓ ${e.displayName}`}catch(e){t.textContent="✗ "+(e.message||"検索失敗")}});kn.addEventListener("submit",n=>{n.preventDefault();const t=new FormData(kn),e=Object.fromEntries(t.entries());if(e.lat=e.lat===""?null:parseFloat(e.lat),e.lng=e.lng===""?null:parseFloat(e.lng),e.features=String(e.features||"").split(",").map(r=>r.trim()).filter(Boolean),e.planTemplateId==="traced"){if(e.planTemplateId=null,!e.tracedPlanId){alert("トレース済み間取りを選ぶか、先に「間取り取込」を行ってください");return}}else e.tracedPlanId=null;e.id||delete e.id;const i=dc(e);Qa(i.id),Xn()});document.getElementById("btn-edit-prop").addEventListener("click",()=>{Qt&&!Qt.builtin&&to(Qt)});document.getElementById("btn-delete-prop").addEventListener("click",()=>{!Qt||Qt.builtin||confirm(`「${Qt.title}」を削除しますか？`)&&(m0(Qt.id),Qt=null,hn("catalog"),Xn())});document.getElementById("btn-export").addEventListener("click",()=>{const n=new Blob([g0()],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=`floorplan-walk-properties-${Date.now()}.json`,t.click()});document.getElementById("import-json").addEventListener("change",async n=>{var e;const t=(e=n.target.files)==null?void 0:e[0];if(t){try{const i=await t.text(),r=_0(i);alert(`${r} 件のユーザー物件を読み込みました`),Xn()}catch(i){alert("読込失敗: "+i.message)}n.target.value=""}});function Q0(){zn&&(dn.remove(zn),zn.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})}),zn=null)}function tg(n){Q0();const t=H0(n);zn=t.group,Na=t.colliders,pe=t.building,dn.add(zn);const e=t.bounds,i=Math.max(...pe.levels.map(a=>a.level||0)),r=pe.floorHeight||oi;$r={x:e.cx,y:14+i*r,z:e.cz-3};const s=pe.spawn||n.spawn;gt.x=s.x,gt.z=s.z,gt.footY=0,gt.onStairs=!1,gt.y=os,gt.yaw=s.yaw??0,gt.pitch=0,Nn=0,Je=!1,ns=0,lr.classList.remove("active"),lr.textContent="上から見る"}function bc(n,t){var r;t&&(Qt=t),tg(n),Ne=!0,hn("none"),gc.classList.add("hidden"),_c.classList.add("hidden"),xc.classList.add("hidden"),vc.classList.add("hidden"),Mc.classList.remove("hidden"),Hn.classList.remove("hidden");const e=document.getElementById("tour-prop-title");e&&(e.textContent=(t==null?void 0:t.title)||(Qt==null?void 0:Qt.title)||""),no();const i=document.getElementById("tour-guide");i&&(clearTimeout(i._t),sessionStorage.getItem("tour-guide-dismissed")==="1"?i.classList.add("hidden"):(i.classList.remove("hidden"),i._t=setTimeout(()=>i.classList.add("hidden"),8e3))),Ue.isTouchDevice()?(Ue.showIfTouch(),document.body.classList.add("is-touch-ui"),Hn.classList.remove("hidden"),setTimeout(()=>{Ne&&Hn.classList.add("hidden")},3500)):(document.body.classList.remove("is-touch-ui"),(r=Bn.requestPointerLock)==null||r.call(Bn))}document.getElementById("btn-start-tour").addEventListener("click",()=>{Qt&&bc(p0(Qt),Qt)});document.getElementById("btn-exit-tour").addEventListener("click",()=>Tc());function Tc(){Ne=!1,Mc.classList.add("hidden"),Hn.classList.add("hidden"),ds.classList.add("hidden"),Ue.hide(),document.pointerLockElement&&document.exitPointerLock(),Qt?Qa(Qt.id):(hn("catalog"),Xn())}document.getElementById("btn-open-tracer").addEventListener("click",()=>hn("tracer"));document.getElementById("btn-back-from-tracer").addEventListener("click",()=>{hn("catalog"),Xn()});const eg=Y0(document.getElementById("tracer-root"));eg.onBuild((n,t)=>{var r;const e=h0(n,{name:t.name}),i=dc({title:t.name||"トレース物件",unit:"トレース生成",type:"カスタム",layout:`${((r=n.rooms)==null?void 0:r.length)||0}室`,area:"—",price:"要確認",address:"住所未設定（登録画面で実住所を入力）",lat:35.6812,lng:139.7671,exteriorNotes:"間取り図トレースから生成。物件登録で住所・価格を追記できます。",description:"壁トレース＋部屋自動分割",features:["ユーザー作成","トレース"],tracedPlanId:e.id,planTemplateId:null,accent:"#8b5cf6"});Qt=i,bc(n,i)});document.getElementById("btn-maps-overlay").addEventListener("click",()=>{Qt&&(document.pointerLockElement&&document.exitPointerLock(),j0.textContent=Qt.address||"",hs(Sc,"map",Qt),ds.classList.remove("hidden"))});document.getElementById("btn-close-maps").addEventListener("click",()=>{ds.classList.add("hidden")});document.querySelectorAll("[data-overlay-map]").forEach(n=>{n.addEventListener("click",()=>{if(!Qt)return;const t=n.dataset.overlayMap;document.querySelectorAll("[data-overlay-map]").forEach(e=>{e.classList.toggle("active",e.dataset.overlayMap===t)}),hs(Sc,t,Qt)})});window.addEventListener("keydown",n=>{Ne&&(n.code==="ArrowUp"||n.code==="ArrowDown"||n.code==="ArrowLeft"||n.code==="ArrowRight"||n.code==="Space")&&n.preventDefault(),sn.add(n.code),n.code==="KeyB"&&Ne&&eo(),Ne&&pe&&!Je&&((n.code==="Digit1"||n.code==="Numpad1")&&Fa(0),(n.code==="Digit2"||n.code==="Numpad2")&&Fa(1))});window.addEventListener("keyup",n=>sn.delete(n.code));document.addEventListener("pointerlockchange",()=>{es=document.pointerLockElement===Bn,es?Hn.classList.add("hidden"):Ne&&!Ue.isTouchDevice()&&Hn.classList.remove("hidden")});Bn.addEventListener("click",()=>{!Ne||Je||ds.classList.contains("hidden")&&(Ue.isTouchDevice()?Hn.classList.add("hidden"):Bn.requestPointerLock())});document.addEventListener("mousemove",n=>{if(!es||Je||!Ne)return;const t=.0022;gt.yaw-=n.movementX*t,gt.pitch-=n.movementY*t,gt.pitch=Math.max(-1.2,Math.min(1.2,gt.pitch))});lr.addEventListener("click",()=>eo());function eo(){Je=!Je,lr.classList.toggle("active",Je),lr.textContent=Je?"歩いて見る":"上から見る",Je&&es&&document.exitPointerLock()}function Fa(n){var s,a,o,l,c;if(!(pe!=null&&pe.levels))return;const t=ls(pe,n);if(!t)return;const e=pe.floorHeight||oi;let r=(n===0?["LDK","リビング・ダイニング","ホール","玄関"]:["主寝室","階段ホール","廊下","洋室"]).map(u=>{var f;return(f=t.rooms)==null?void 0:f.find(d=>d.name===u||d.name.includes(u))}).find(Boolean)||((s=t.rooms)==null?void 0:s.find(u=>!["階段","バルコニー","ポーチ","屋外","ウッドデッキ"].includes(u.name)))||((a=t.rooms)==null?void 0:a[0]);if((o=r==null?void 0:r.points)!=null&&o.length)gt.x=r.points.reduce((u,f)=>u+f.x,0)/r.points.length,gt.z=r.points.reduce((u,f)=>u+f.z,0)/r.points.length;else if((l=t.stairs)!=null&&l[0]){const u=t.stairs[0];gt.x=(u.minX+u.maxX)/2,gt.z=(u.minZ+u.maxZ)/2}Nn=n,gt.footY=n*e,gt.onStairs=!1,gt.y=gt.footY+os,gt.pitch=0,no(),(c=document.getElementById("tour-guide"))==null||c.classList.add("hidden")}function no(){const n=document.getElementById("floor-jumps");if(!n||!pe)return;if((pe.levels||[]).length<2){n.classList.add("hidden");return}n.classList.remove("hidden"),n.querySelectorAll("[data-floor]").forEach(e=>{const i=Number(e.dataset.floor);e.classList.toggle("active",i===Nn),e.disabled=!ls(pe,i)})}function ng(n){zn&&zn.traverse(t=>{var e,i;((e=t.userData)!=null&&e.isCeiling||(i=t.userData)!=null&&i.hideInBird)&&(t.visible=n)})}function ig(){const n=ns;if(ng(n<.45),n>.01)if(je.position.set(gs.lerp(gt.x,$r.x,n),gs.lerp(gt.y,$r.y,n),gs.lerp(gt.z,$r.z,n)),je.up.set(0,1,0),n>.4&&pe){const t=rc(pe),e=pe.floorHeight||oi;je.lookAt(t.cx,Nn*e*.5,t.cz)}else pl();else je.up.set(0,1,0),je.position.set(gt.x,gt.y,gt.z),pl()}function pl(){const n=gt.x+Math.sin(gt.yaw)*Math.cos(gt.pitch),t=gt.y+Math.sin(gt.pitch),e=gt.z+Math.cos(gt.yaw)*Math.cos(gt.pitch);je.lookAt(n,t,e)}window.addEventListener("resize",()=>{je.aspect=window.innerWidth/window.innerHeight,je.updateProjectionMatrix(),un.setSize(window.innerWidth,window.innerHeight)});const rg=new xd,sg=2.8;function wc(){var t,e;requestAnimationFrame(wc);const n=Math.min(rg.getDelta(),.05);if(Ne&&pe){if(ns+=((Je?1:0)-ns)*Math.min(1,n*4),pe.floorHeight,!Je){if(Ue.state.active){const d=Ue.consumeLookDelta(),m=.0045;gt.yaw-=d.dx*m,gt.pitch-=d.dy*m,gt.pitch=Math.max(-1.15,Math.min(1.15,gt.pitch)),(Ue.state.moveX||Ue.state.moveZ||d.dx||d.dy)&&(Hn.classList.add("hidden"),(t=document.getElementById("tour-guide"))==null||t.classList.add("hidden"))}let l=0,c=0;if((sn.has("KeyW")||sn.has("ArrowUp"))&&(c+=1),(sn.has("KeyS")||sn.has("ArrowDown"))&&(c-=1),(sn.has("KeyA")||sn.has("ArrowLeft"))&&(l-=1),(sn.has("KeyD")||sn.has("ArrowRight"))&&(l+=1),l+=Ue.state.moveX,c+=Ue.state.moveZ,l!==0||c!==0){const d=Math.hypot(l,c)||1;l/=d,c/=d;const m=Math.sin(gt.yaw),_=Math.cos(gt.yaw),v=sg*(Ue.state.active?1.15:1),p=(m*c-_*l)*v*n,h=(_*c+m*l)*v*n;let R=hl(gt.x+p,gt.z,dl,Na,gt.footY);R=hl(R.x,gt.z+h,dl,Na,gt.footY),gt.x=R.x,gt.z=R.z,(e=document.getElementById("tour-guide"))==null||e.classList.add("hidden")}const u=o0({x:gt.x,z:gt.z,footY:gt.footY,level:Nn,onStairs:gt.onStairs},pe);gt.footY=u.footY,Nn=u.level,gt.onStairs=u.onStairs;const f=gt.footY+os;gt.y+=(f-gt.y)*Math.min(1,n*14),Math.abs(gt.y-f)>.6&&(gt.y=f)}ig();const r=ls(pe,Nn),s=ic(gt.x,gt.z,(r==null?void 0:r.rooms)||[]),a=(r==null?void 0:r.name)||`${Nn+1}F`;Z0.textContent=s==="屋外"?"屋外（玄関へ進んでください）":`${a} · ${s}`,$0.textContent=a,k0(K0,r,gt,a),no();const o=document.getElementById("tour-prop-title");o&&Qt&&(o.textContent=Qt.title||"")}else je.position.set(0,8,12),je.lookAt(0,0,0);un.render(dn,je)}var ml;(ml=document.getElementById("floor-jumps"))==null||ml.addEventListener("click",n=>{const t=n.target.closest("[data-floor]");!t||!Ne||Fa(Number(t.dataset.floor))});var gl;(gl=document.getElementById("btn-dismiss-guide"))==null||gl.addEventListener("click",()=>{const n=document.getElementById("tour-guide");n&&(clearTimeout(n._t),n.classList.add("hidden"));try{sessionStorage.setItem("tour-guide-dismissed","1")}catch{}});Xn();hn("catalog");wc();
