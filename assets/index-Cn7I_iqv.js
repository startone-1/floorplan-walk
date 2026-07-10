(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="172",Fc=0,po=1,Oc=2,Ml=1,Sl=2,Mn=3,wn=0,Ct=1,Xt=2,On=0,Li=1,mo=2,go=3,_o=4,Bc=5,ii=100,Hc=101,kc=102,Vc=103,Gc=104,Wc=200,Xc=201,Yc=202,qc=203,Ks=204,js=205,Zc=206,$c=207,Kc=208,jc=209,Jc=210,Qc=211,eu=212,tu=213,nu=214,Js=0,Qs=1,ea=2,Ui=3,ta=4,na=5,ia=6,ra=7,yl=0,iu=1,ru=2,Bn=0,su=1,au=2,ou=3,El=4,lu=5,cu=6,uu=7,bl=300,zi=301,Ni=302,sa=303,aa=304,rs=306,jr=1e3,si=1001,oa=1002,nn=1003,du=1004,xr=1005,un=1006,gs=1007,zn=1008,An=1009,Tl=1010,wl=1011,sr=1012,ka=1013,ai=1014,Sn=1015,ur=1016,Va=1017,Ga=1018,Fi=1020,Al=35902,Rl=1021,Cl=1022,tn=1023,Pl=1024,Ll=1025,Ii=1026,Oi=1027,Il=1028,Wa=1029,Dl=1030,Xa=1031,Ya=1033,Gr=33776,Wr=33777,Xr=33778,Yr=33779,la=35840,ca=35841,ua=35842,da=35843,ha=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,xa=37811,va=37812,Ma=37813,Sa=37814,ya=37815,Ea=37816,ba=37817,Ta=37818,wa=37819,Aa=37820,Ra=37821,qr=36492,Ca=36494,Pa=36495,Ul=36283,La=36284,Ia=36285,Da=36286,hu=3200,fu=3201,zl=0,pu=1,Un="",Rt="srgb",Bi="srgb-linear",Jr="linear",et="srgb",ui=7680,xo=519,mu=512,gu=513,_u=514,Nl=515,xu=516,vu=517,Mu=518,Su=519,Ua=35044,vo="300 es",yn=2e3,Qr=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mo=1234567;const ir=Math.PI/180,ar=180/Math.PI;function bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Oe(n,e,t){return Math.max(e,Math.min(t,n))}function qa(n,e){return(n%e+e)%e}function yu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Eu(n,e,t){return n!==e?(t-n)/(e-n):0}function rr(n,e,t){return(1-t)*n+t*e}function bu(n,e,t,i){return rr(n,e,1-Math.exp(-t*i))}function Tu(n,e=1){return e-Math.abs(qa(n,e*2)-e)}function wu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Au(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ru(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cu(n,e){return n+Math.random()*(e-n)}function Pu(n){return n*(.5-Math.random())}function Lu(n){n!==void 0&&(Mo=n);let e=Mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iu(n){return n*ir}function Du(n){return n*ar}function Uu(n){return(n&n-1)===0&&n!==0}function zu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _s={DEG2RAD:ir,RAD2DEG:ar,generateUUID:bn,clamp:Oe,euclideanModulo:qa,mapLinear:yu,inverseLerp:Eu,lerp:rr,damp:bu,pingpong:Tu,smoothstep:wu,smootherstep:Au,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Lu,degToRad:Iu,radToDeg:Du,isPowerOfTwo:Uu,ceilPowerOfTwo:zu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Fu,normalize:je,denormalize:Jt};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,r,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],f=r[6],R=r[1],w=r[4],g=r[7],b=r[2],T=r[5],E=r[8];return s[0]=a*x+o*R+l*b,s[3]=a*m+o*w+l*T,s[6]=a*f+o*g+l*E,s[1]=c*x+u*R+h*b,s[4]=c*m+u*w+h*T,s[7]=c*f+u*g+h*E,s[2]=d*x+p*R+_*b,s[5]=d*m+p*w+_*T,s[8]=d*f+p*g+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,_=t*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Le;function Fl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ou(){const n=es("canvas");return n.style.display="block",n}const So={};function Ri(n){n in So||(So[n]=!0,console.warn(n))}function Bu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Hu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ku(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yo=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){const n={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Un?Jr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bi]:{primaries:e,whitePoint:i,transfer:Jr,toXYZ:yo,fromXYZ:Eo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:yo,fromXYZ:Eo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const qe=Vu();function Tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Di(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let di;class Gu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=es("canvas")),di.width=e.width,di.height=e.height;const i=di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wu=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vs(r[a].image)):s.push(vs(r[a]))}else s=vs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Pt extends Vi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=si,r=si,s=un,a=zn,o=tn,l=An,c=Pt.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=bn(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=bl;Pt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,g=(p+1)/2,b=(f+1)/2,T=(u+d)/4,E=(h+x)/4,C=(_+m)/4;return w>g&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=E/i):g>b?g<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),i=T/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=C/s),this.set(i,r,s,t),this}let R=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(h-x)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends Vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Yu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bl extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*x,R=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const b=Math.sqrt(w),T=Math.atan2(b,f*R);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}const g=o*R;if(l=l*m+d*g,c=c*m+p*g,u=u*m+_*g,h=h*m+x*g,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ms=new z,bo=new dr;class hr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),Mr.subVectors(this.max,qi),hi.subVectors(e.a,qi),fi.subVectors(e.b,qi),pi.subVectors(e.c,qi),Rn.subVectors(fi,hi),Cn.subVectors(pi,fi),$n.subVectors(hi,pi);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-$n.z,$n.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,$n.z,0,-$n.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-$n.y,$n.x,0];return!Ss(t,hi,fi,pi,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,hi,fi,pi,Mr))?!1:(Sr.crossVectors(Rn,Cn),t=[Sr.x,Sr.y,Sr.z],Ss(t,hi,fi,pi,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new z,new z,new z,new z,new z,new z,new z,new z],$t=new z,vr=new hr,hi=new z,fi=new z,pi=new z,Rn=new z,Cn=new z,$n=new z,qi=new z,Mr=new z,Sr=new z,Kn=new z;function Ss(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Kn.fromArray(n,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=i.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zu=new hr,Zi=new z,ys=new z;class Za{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(ys)),this.expandByPoint(Zi.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new z,Es=new z,yr=new z,Pn=new z,bs=new z,Er=new z,Ts=new z;class $u{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Es.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Pn.dot(this.direction),l=-Pn.dot(yr),c=Pn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Es).addScaledVector(yr,d),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){bs.subVectors(t,e),Er.subVectors(i,e),Ts.crossVectors(bs,Er);let a=this.direction.dot(Ts),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(Er.crossVectors(Pn,Er));if(l<0)return null;const c=o*this.direction.dot(bs.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(Ts);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,l,c,u,h,d,p,_,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,p,_,x,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,x=c*h;t[0]=d+x*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,ju)}lookAt(e,t,i){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Ln.crossVectors(i,Dt),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Ln.crossVectors(i,Dt)),Ln.normalize(),br.crossVectors(Dt,Ln),r[0]=Ln.x,r[4]=br.x,r[8]=Dt.x,r[1]=Ln.y,r[5]=br.y,r[9]=Dt.y,r[2]=Ln.z,r[6]=br.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],R=i[3],w=i[7],g=i[11],b=i[15],T=r[0],E=r[4],C=r[8],v=r[12],M=r[1],P=r[5],N=r[9],O=r[13],G=r[2],q=r[6],W=r[10],K=r[14],k=r[3],ne=r[7],de=r[11],Me=r[15];return s[0]=a*T+o*M+l*G+c*k,s[4]=a*E+o*P+l*q+c*ne,s[8]=a*C+o*N+l*W+c*de,s[12]=a*v+o*O+l*K+c*Me,s[1]=u*T+h*M+d*G+p*k,s[5]=u*E+h*P+d*q+p*ne,s[9]=u*C+h*N+d*W+p*de,s[13]=u*v+h*O+d*K+p*Me,s[2]=_*T+x*M+m*G+f*k,s[6]=_*E+x*P+m*q+f*ne,s[10]=_*C+x*N+m*W+f*de,s[14]=_*v+x*O+m*K+f*Me,s[3]=R*T+w*M+g*G+b*k,s[7]=R*E+w*P+g*q+b*ne,s[11]=R*C+w*N+g*W+b*de,s[15]=R*v+w*O+g*K+b*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*p-i*l*p)+x*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],R=h*m*c-x*d*c+x*l*p-o*m*p-h*l*f+o*d*f,w=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,g=u*x*c-_*h*c+_*o*p-a*x*p-u*o*f+a*h*f,b=_*h*l-u*x*l-_*o*d+a*x*d+u*o*m-a*h*m,T=t*R+i*w+r*g+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=R*E,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*E,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*f+i*l*f)*E,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*p-i*l*p)*E,e[4]=w*E,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*f+t*d*f)*E,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*f-t*l*f)*E,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*E,e[8]=g*E,e[9]=(_*h*s-u*x*s-_*i*p+t*x*p+u*i*f-t*h*f)*E,e[10]=(a*x*s-_*o*s+_*i*c-t*x*c-a*i*f+t*o*f)*E,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*p-t*o*p)*E,e[12]=b*E,e[13]=(u*x*r-_*h*r+_*i*d-t*x*d-u*i*m+t*h*m)*E,e[14]=(_*o*r-a*x*r-_*i*l+t*x*l+a*i*m-t*o*m)*E,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,_=s*h,x=a*u,m=a*h,f=o*h,R=l*c,w=l*u,g=l*h,b=i.x,T=i.y,E=i.z;return r[0]=(1-(x+f))*b,r[1]=(p+g)*b,r[2]=(_-w)*b,r[3]=0,r[4]=(p-g)*T,r[5]=(1-(d+f))*T,r[6]=(m+R)*T,r[7]=0,r[8]=(_+w)*E,r[9]=(m-R)*E,r[10]=(1-(d+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,u=1/a,h=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=yn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(o===yn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Qr)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=yn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,p=(i+r)*u;let _,x;if(o===yn)_=(a+s)*h,x=-2*h;else if(o===Qr)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mi=new z,Kt=new at,Ku=new z(0,0,0),ju=new z(1,1,1),Ln=new z,br=new z,Dt=new z,To=new at,wo=new dr;class dn{constructor(e=0,t=0,i=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return To.makeRotationFromQuaternion(e),this.setFromRotationMatrix(To,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wo.setFromEuler(this),this.setFromQuaternion(wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const Ao=new z,gi=new dr,_n=new at,Tr=new z,$i=new z,Qu=new z,ed=new dr,Ro=new z(1,0,0),Co=new z(0,1,0),Po=new z(0,0,1),Lo={type:"added"},td={type:"removed"},_i={type:"childadded",child:null},ws={type:"childremoved",child:null};class xt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new z,t=new dn,i=new dr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Ro,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ro,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tr.copy(e):Tr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt($i,Tr,this.up):_n.lookAt(Tr,$i,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(_n),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),ws.child=e,this.dispatchEvent(ws),ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new z(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new z,xn=new z,As=new z,vn=new z,xi=new z,vi=new z,Io=new z,Rs=new z,Cs=new z,Ps=new z,Ls=new tt,Is=new tt,Ds=new tt;class Yt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),xn.subVectors(i,t),As.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(xn),l=jt.dot(As),c=xn.dot(xn),u=xn.dot(As),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ls.setScalar(0),Is.setScalar(0),Ds.setScalar(0),Ls.fromBufferAttribute(e,t),Is.fromBufferAttribute(e,i),Ds.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ls,s.x),a.addScaledVector(Is,s.y),a.addScaledVector(Ds,s.z),a}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),xn.subVectors(e,t),jt.cross(xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,i),vi.subVectors(s,i),Rs.subVectors(e,i);const l=xi.dot(Rs),c=vi.dot(Rs);if(l<=0&&c<=0)return t.copy(i);Cs.subVectors(e,r);const u=xi.dot(Cs),h=vi.dot(Cs);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(xi,a);Ps.subVectors(e,s);const p=xi.dot(Ps),_=vi.dot(Ps);if(_>=0&&p<=_)return t.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(vi,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Io.subVectors(s,r),o=(h-u)/(h-u+(p-_)),t.copy(r).addScaledVector(Io,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(xi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Us(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=qa(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Us(a,s,e+1/3),this.g=Us(a,s,e),this.b=Us(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=kl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return qe.fromWorkingColorSpace(Et.copy(this),e),Math.round(Oe(Et.r*255,0,255))*65536+Math.round(Oe(Et.g*255,0,255))*256+Math.round(Oe(Et.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Rt){qe.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(wr);const i=rr(In.h,wr.h,t),r=rr(In.s,wr.s,t),s=rr(In.l,wr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Be;Be.NAMES=kl;let nd=0;class Gi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Li,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=js,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ks&&(i.blendSrc=this.blendSrc),this.blendDst!==js&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class or extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new z,Ar=new Ue;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ua,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ua&&(e.usage=this.usage),e}}class Vl extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gl extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let id=0;const Vt=new at,zs=new xt,Mi=new z,Ut=new hr,Ki=new hr,_t=new z;class an extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?Gl:Vl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return zs.lookAt(e),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ut.min,Ki.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Ki.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Ki.min),Ut.expandByPoint(Ki.max))}Ut.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),_t.add(Mi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new z,l[C]=new z;const c=new z,u=new z,h=new z,d=new Ue,p=new Ue,_=new Ue,x=new z,m=new z;function f(C,v,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,v),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(x),o[v].add(x),o[M].add(x),l[C].add(m),l[v].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let C=0,v=R.length;C<v;++C){const M=R[C],P=M.start,N=M.count;for(let O=P,G=P+N;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new z,g=new z,b=new z,T=new z;function E(C){b.fromBufferAttribute(r,C),T.copy(b);const v=o[C];w.copy(v),w.sub(b.multiplyScalar(b.dot(v))).normalize(),g.crossVectors(T,v);const P=g.dot(l[C])<0?-1:1;a.setXYZW(C,w.x,w.y,w.z,P)}for(let C=0,v=R.length;C<v;++C){const M=R[C],P=M.start,N=M.count;for(let O=P,G=P+N;O<G;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new at,jn=new $u,Rr=new Za,Uo=new z,Cr=new z,Pr=new z,Lr=new z,Ns=new z,Ir=new z,zo=new z,Dr=new z;class ze extends xt{constructor(e=new an,t=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ns.fromBufferAttribute(h,e),a?Ir.addScaledVector(Ns,u):Ir.addScaledVector(Ns.sub(t),u))}t.add(Ir)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),jn.copy(e.ray).recast(e.near),!(Rr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Rr,Uo)===null||jn.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Do.copy(s).invert(),jn.copy(e.ray).applyMatrix4(Do),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],R=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=R,b=w;g<b;g+=3){const T=o.getX(g),E=o.getX(g+1),C=o.getX(g+2);r=Ur(this,f,e,i,c,u,h,T,E,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const R=o.getX(m),w=o.getX(m+1),g=o.getX(m+2);r=Ur(this,a,e,i,c,u,h,R,w,g),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],R=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=R,b=w;g<b;g+=3){const T=g,E=g+1,C=g+2;r=Ur(this,f,e,i,c,u,h,T,E,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const R=m,w=m+1,g=m+2;r=Ur(this,a,e,i,c,u,h,R,w,g),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rd(n,e,t,i,r,s,a,o){let l;if(e.side===Ct?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===wn,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:n}}function Ur(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Cr),n.getVertexPosition(l,Pr),n.getVertexPosition(c,Lr);const u=rd(n,e,t,i,Cr,Pr,Lr,zo);if(u){const h=new z;Yt.getBarycoord(zo,Cr,Pr,Lr,h),r&&(u.uv=Yt.getInterpolatedAttribute(r,o,l,c,h,new Ue)),s&&(u.uv1=Yt.getInterpolatedAttribute(s,o,l,c,h,new Ue)),a&&(u.normal=Yt.getInterpolatedAttribute(a,o,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};Yt.getNormal(Cr,Pr,Lr,d.normal),u.face=d,u.barycoord=h}return u}class lt extends an{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function _(x,m,f,R,w,g,b,T,E,C,v){const M=g/E,P=b/C,N=g/2,O=b/2,G=T/2,q=E+1,W=C+1;let K=0,k=0;const ne=new z;for(let de=0;de<W;de++){const Me=de*P-O;for(let Ne=0;Ne<q;Ne++){const nt=Ne*M-N;ne[x]=nt*R,ne[m]=Me*w,ne[f]=G,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[f]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Ne/E),h.push(1-de/C),K+=1}}for(let de=0;de<C;de++)for(let Me=0;Me<E;Me++){const Ne=d+Me+q*de,nt=d+Me+q*(de+1),Y=d+(Me+1)+q*(de+1),te=d+(Me+1)+q*de;l.push(Ne,nt,te),l.push(nt,Y,te),k+=6}o.addGroup(p,k,v),p+=k,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const r in i)e[r]=i[r]}return e}function sd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const ad={clone:Hi,merge:At};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xl extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new z,No=new Ue,Fo=new Ue;class Nt extends Xl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,No,Fo),t.subVectors(Fo,No)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,yi=1;class cd extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(Si,yi,e,t);r.layers=this.layers,this.add(r);const s=new Nt(Si,yi,e,t);s.layers=this.layers,this.add(s);const a=new Nt(Si,yi,e,t);a.layers=this.layers,this.add(a);const o=new Nt(Si,yi,e,t);o.layers=this.layers,this.add(o);const l=new Nt(Si,yi,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Si,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yl extends Pt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ud extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lt(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:On});s.uniforms.tEquirect.value=t;const a=new ze(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=un),new cd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class $a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new $a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ql extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ua,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new z;class ts{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends Gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ei;const ji=new z,bi=new z,Ti=new z,wi=new Ue,Ji=new Ue,$l=new at,zr=new z,Qi=new z,Nr=new z,Oo=new Ue,Fs=new Ue,Bo=new Ue;class hd extends xt{constructor(e=new Zl){if(super(),this.isSprite=!0,this.type="Sprite",Ei===void 0){Ei=new an;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dd(t,5);Ei.setIndex([0,1,2,0,2,3]),Ei.setAttribute("position",new ts(i,3,0,!1)),Ei.setAttribute("uv",new ts(i,2,3,!1))}this.geometry=Ei,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),$l.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ti.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Fr(zr.set(-.5,-.5,0),Ti,a,bi,r,s),Fr(Qi.set(.5,-.5,0),Ti,a,bi,r,s),Fr(Nr.set(.5,.5,0),Ti,a,bi,r,s),Oo.set(0,0),Fs.set(1,0),Bo.set(1,1);let o=e.ray.intersectTriangle(zr,Qi,Nr,!1,ji);if(o===null&&(Fr(Qi.set(-.5,.5,0),Ti,a,bi,r,s),Fs.set(0,1),o=e.ray.intersectTriangle(zr,Nr,Qi,!1,ji),o===null))return;const l=e.ray.origin.distanceTo(ji);l<e.near||l>e.far||t.push({distance:l,point:ji.clone(),uv:Yt.getInterpolation(ji,zr,Qi,Nr,Oo,Fs,Bo,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fr(n,e,t,i,r,s){wi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ji.x=s*wi.x-r*wi.y,Ji.y=r*wi.x+s*wi.y):Ji.copy(wi),n.copy(e),n.x+=Ji.x,n.y+=Ji.y,n.applyMatrix4($l)}const Os=new z,fd=new z,pd=new Le;class ti{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Os.subVectors(i,t).cross(fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Os),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pd.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Za,Or=new z;class Ka{constructor(e=new ti,t=new ti,i=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],_=r[9],x=r[10],m=r[11],f=r[12],R=r[13],w=r[14],g=r[15];if(i[0].setComponents(l-s,d-c,m-p,g-f).normalize(),i[1].setComponents(l+s,d+c,m+p,g+f).normalize(),i[2].setComponents(l+a,d+u,m+_,g+R).normalize(),i[3].setComponents(l-a,d-u,m-_,g-R).normalize(),i[4].setComponents(l-o,d-h,m-x,g-w).normalize(),t===yn)i[5].setComponents(l+o,d+h,m+x,g+w).normalize();else if(t===Qr)i[5].setComponents(o,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Or.x=r.normal.x>0?e.max.x:e.min.x,Or.y=r.normal.y>0?e.max.y:e.min.y,Or.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class En extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Kl extends Pt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jl extends Pt{constructor(e,t,i,r,s,a,o,l,c,u=Ii){if(u!==Ii&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ii&&(i=ai),i===void 0&&u===Oi&&(i=Fi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ss extends an{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,u=new Ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wi extends an{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let _=0;const x=[],m=i/2;let f=0;R(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(p,2));function R(){const g=new z,b=new z;let T=0;const E=(t-e)/i;for(let C=0;C<=s;C++){const v=[],M=C/s,P=M*(t-e)+e;for(let N=0;N<=r;N++){const O=N/r,G=O*l+o,q=Math.sin(G),W=Math.cos(G);b.x=P*q,b.y=-M*i+m,b.z=P*W,h.push(b.x,b.y,b.z),g.set(q,E,W).normalize(),d.push(g.x,g.y,g.z),p.push(O,1-M),v.push(_++)}x.push(v)}for(let C=0;C<r;C++)for(let v=0;v<s;v++){const M=x[v][C],P=x[v+1][C],N=x[v+1][C+1],O=x[v][C+1];(e>0||v!==0)&&(u.push(M,P,O),T+=3),(t>0||v!==s-1)&&(u.push(P,N,O),T+=3)}c.addGroup(f,T,0),f+=T}function w(g){const b=_,T=new Ue,E=new z;let C=0;const v=g===!0?e:t,M=g===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const P=_;for(let N=0;N<=r;N++){const G=N/r*l+o,q=Math.cos(G),W=Math.sin(G);E.x=v*W,E.y=m*M,E.z=v*q,h.push(E.x,E.y,E.z),d.push(0,M,0),T.x=q*.5+.5,T.y=W*.5*M+.5,p.push(T.x,T.y),_++}for(let N=0;N<r;N++){const O=b+N,G=P+N;g===!0?u.push(G,G+1,O):u.push(G+1,G,O),C+=3}c.addGroup(f,C,g===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fr extends Wi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new fr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends an{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const R=f*d-a;for(let w=0;w<c;w++){const g=w*h-s;_.push(g,-R,0),x.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){const w=R+c*f,g=R+c*(f+1),b=R+1+c*(f+1),T=R+1+c*f;p.push(w,g,T),p.push(g,b,T)}this.setIndex(p),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class lr extends an{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,d=new z,p=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const R=[],w=f/i;let g=0;f===0&&a===0?g=.5/t:f===i&&l===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+w*o),h.y=e*Math.cos(a+w*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+w*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+g,1-w),R.push(c++)}u.push(R)}for(let f=0;f<i;f++)for(let R=0;R<t;R++){const w=u[f][R+1],g=u[f][R],b=u[f+1][R],T=u[f+1][R+1];(f!==0||a>0)&&p.push(w,g,T),(f!==i-1||l<Math.PI)&&p.push(g,b,T)}this.setIndex(p),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class md extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gd extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _d extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class as extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Jl extends as{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bs=new at,Ho=new z,ko=new z;class Ql{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ho),ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ko),t.updateMatrixWorld(),Bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new at,er=new z,Hs=new z;class xd extends Ql{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),i.position.copy(er),Hs.copy(i.position),Hs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hs),i.updateMatrixWorld(),r.makeTranslation(-er.x,-er.y,-er.z),Vo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo)}}class za extends as{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ec extends Xl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends Ql{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ja extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Md extends as{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sd extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Go();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Go(){return performance.now()}function Wo(n,e,t,i){const r=Ed(i);switch(t){case Rl:return n*e;case Pl:return n*e;case Ll:return n*e*2;case Il:return n*e/r.components*r.byteLength;case Wa:return n*e/r.components*r.byteLength;case Dl:return n*e*2/r.components*r.byteLength;case Xa:return n*e*2/r.components*r.byteLength;case Cl:return n*e*3/r.components*r.byteLength;case tn:return n*e*4/r.components*r.byteLength;case Ya:return n*e*4/r.components*r.byteLength;case Gr:case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xr:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ca:case da:return Math.max(n,16)*Math.max(e,8)/4;case la:case ua:return Math.max(n,8)*Math.max(e,8)/2;case ha:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case va:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qr:case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ul:case La:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ia:case Da:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ed(n){switch(n){case An:case Tl:return{byteLength:1,components:1};case sr:case wl:case ur:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case ai:case ka:case Sn:return{byteLength:4,components:1};case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,th="gl_FragColor = linearToOutputTexel( gl_FragColor );",nh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ih=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hh=`#ifdef USE_GRADIENTMAP
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
}`,fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gh=`uniform bool receiveShadow;
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
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yh=`PhysicalMaterial material;
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
#endif`,Eh=`struct PhysicalMaterial {
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
}`,bh=`
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
#endif`,Th=`#if defined( RE_IndirectDiffuse )
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
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ch=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uh=`#if defined( USE_POINTS_UV )
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
#endif`,zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qh=`#ifdef USE_NORMALMAP
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
#endif`,Zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
}`,Df=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,Hf=`uniform vec3 diffuse;
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
}`,kf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Gf=`#define MATCAP
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
}`,qf=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,$f=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
}`,jf=`#define TOON
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
}`,Jf=`#define TOON
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
}`,Qf=`uniform float size;
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,np=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
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
}`,rp=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Td,alphahash_pars_fragment:wd,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Id,batching_pars_vertex:Dd,batching_vertex:Ud,begin_vertex:zd,beginnormal_vertex:Nd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:Yd,color_vertex:qd,common:Zd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Kd,displacementmap_pars_vertex:jd,displacementmap_vertex:Jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:eh,colorspace_fragment:th,colorspace_pars_fragment:nh,envmap_fragment:ih,envmap_common_pars_fragment:rh,envmap_pars_fragment:sh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:_h,envmap_vertex:oh,fog_vertex:lh,fog_pars_vertex:ch,fog_fragment:uh,fog_pars_fragment:dh,gradientmap_pars_fragment:hh,lightmap_pars_fragment:fh,lights_lambert_fragment:ph,lights_lambert_pars_fragment:mh,lights_pars_begin:gh,lights_toon_fragment:xh,lights_toon_pars_fragment:vh,lights_phong_fragment:Mh,lights_phong_pars_fragment:Sh,lights_physical_fragment:yh,lights_physical_pars_fragment:Eh,lights_fragment_begin:bh,lights_fragment_maps:Th,lights_fragment_end:wh,logdepthbuf_fragment:Ah,logdepthbuf_pars_fragment:Rh,logdepthbuf_pars_vertex:Ch,logdepthbuf_vertex:Ph,map_fragment:Lh,map_pars_fragment:Ih,map_particle_fragment:Dh,map_particle_pars_fragment:Uh,metalnessmap_fragment:zh,metalnessmap_pars_fragment:Nh,morphinstance_vertex:Fh,morphcolor_vertex:Oh,morphnormal_vertex:Bh,morphtarget_pars_vertex:Hh,morphtarget_vertex:kh,normal_fragment_begin:Vh,normal_fragment_maps:Gh,normal_pars_fragment:Wh,normal_pars_vertex:Xh,normal_vertex:Yh,normalmap_pars_fragment:qh,clearcoat_normal_fragment_begin:Zh,clearcoat_normal_fragment_maps:$h,clearcoat_pars_fragment:Kh,iridescence_pars_fragment:jh,opaque_fragment:Jh,packing:Qh,premultiplied_alpha_fragment:ef,project_vertex:tf,dithering_fragment:nf,dithering_pars_fragment:rf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:uf,skinbase_vertex:df,skinning_pars_vertex:hf,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:mf,specularmap_pars_fragment:gf,tonemapping_fragment:_f,tonemapping_pars_fragment:xf,transmission_fragment:vf,transmission_pars_fragment:Mf,uv_pars_fragment:Sf,uv_pars_vertex:yf,uv_vertex:Ef,worldpos_vertex:bf,background_vert:Tf,background_frag:wf,backgroundCube_vert:Af,backgroundCube_frag:Rf,cube_vert:Cf,cube_frag:Pf,depth_vert:Lf,depth_frag:If,distanceRGBA_vert:Df,distanceRGBA_frag:Uf,equirect_vert:zf,equirect_frag:Nf,linedashed_vert:Ff,linedashed_frag:Of,meshbasic_vert:Bf,meshbasic_frag:Hf,meshlambert_vert:kf,meshlambert_frag:Vf,meshmatcap_vert:Gf,meshmatcap_frag:Wf,meshnormal_vert:Xf,meshnormal_frag:Yf,meshphong_vert:qf,meshphong_frag:Zf,meshphysical_vert:$f,meshphysical_frag:Kf,meshtoon_vert:jf,meshtoon_frag:Jf,points_vert:Qf,points_frag:ep,shadow_vert:tp,shadow_frag:np,sprite_vert:ip,sprite_frag:rp},ie={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},cn={basic:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([ie.common,ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([ie.lights,ie.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};cn.physical={uniforms:At([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Br={r:0,b:0,g:0},Qn=new dn,sp=new at;function ap(n,e,t,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function _(w){let g=w.isScene===!0?w.background:null;return g&&g.isTexture&&(g=(w.backgroundBlurriness>0?t:e).get(g)),g}function x(w){let g=!1;const b=_(w);b===null?f(o,l):b&&b.isColor&&(f(b,1),g=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,g){const b=_(g);b&&(b.isCubeTexture||b.mapping===rs)?(u===void 0&&(u=new ze(new lt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Hi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qn.copy(g.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Qn)),u.material.toneMapped=qe.getTransfer(b.colorSpace)!==et,(h!==b||d!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ze(new pr(2,2),new Gn({name:"BackgroundMaterial",uniforms:Hi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=qe.getTransfer(b.colorSpace)!==et,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,g){w.getRGB(Br,Wl(n)),i.buffers.color.setClear(Br.r,Br.g,Br.b,g,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(w,g=1){o.set(w),l=g,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:x,addToRenderList:m,dispose:R}}function op(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,P,N,O,G){let q=!1;const W=h(O,N,P);s!==W&&(s=W,c(s.object)),q=p(M,O,N,G),q&&_(M,O,N,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,g(M,P,N,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,N){const O=N.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let W=q[O];return W===void 0&&(W=d(l()),q[O]=W),W}function d(M){const P=[],N=[],O=[];for(let G=0;G<t;G++)P[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,N,O){const G=s.attributes,q=P.attributes;let W=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){const de=G[k];let Me=q[k];if(Me===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function _(M,P,N,O){const G={},q=P.attributes;let W=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){let de=q[k];de===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),G[k]=Me,W++}s.attributes=G,s.attributesNum=W,s.index=O}function x(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const N=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;N[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),G[M]!==P&&(n.vertexAttribDivisor(M,P),G[M]=P)}function R(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==M[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function w(M,P,N,O,G,q,W){W===!0?n.vertexAttribIPointer(M,P,N,G,q):n.vertexAttribPointer(M,P,N,O,G,q)}function g(M,P,N,O){x();const G=O.attributes,q=N.getAttributes(),W=P.defaultAttributeValues;for(const K in q){const k=q[K];if(k.location>=0){let ne=G[K];if(ne===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const de=ne.normalized,Me=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const nt=Ne.buffer,Y=Ne.type,te=Ne.bytesPerElement,_e=Y===n.INT||Y===n.UNSIGNED_INT||ne.gpuType===ka;if(ne.isInterleavedBufferAttribute){const ae=ne.data,Te=ae.stride,Re=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<k.locationSize;Fe++)f(k.location+Fe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)m(k.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Fe=0;Fe<k.locationSize;Fe++)w(k.location+Fe,Me/k.locationSize,Y,de,Te*te,(Re+Me/k.locationSize*Fe)*te,_e)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,ne.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<k.locationSize;ae++)m(k.location+ae);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ae=0;ae<k.locationSize;ae++)w(k.location+ae,Me/k.locationSize,Y,de,Me*te,Me/k.locationSize*ae*te,_e)}}else if(W!==void 0){const de=W[K];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(k.location,de);break;case 3:n.vertexAttrib3fv(k.location,de);break;case 4:n.vertexAttrib4fv(k.location,de);break;default:n.vertexAttrib1fv(k.location,de)}}}}R()}function b(){C();for(const M in i){const P=i[M];for(const N in P){const O=P[N];for(const G in O)u(O[G].object),delete O[G];delete P[N]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const N in P){const O=P[N];for(const G in O)u(O[G].object),delete O[G];delete P[N]}delete i[M.id]}function E(M){for(const P in i){const N=i[P];if(N[M.id]===void 0)continue;const O=N[M.id];for(const G in O)u(O[G].object),delete O[G];delete N[M.id]}}function C(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function lp(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==tn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==An&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Sn&&!C)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:g,vertexTextures:b,maxSamples:T}}function up(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ti,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,w=R*4;let g=f.clippingState||null;l.value=g,g=u(_,d,w,p);for(let b=0;b!==w;++b)g[b]=t[b];f.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,g=p;w!==x;++w,g+=4)a.copy(h[w]).applyMatrix4(R,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dp(n){let e=new WeakMap;function t(a,o){return o===sa?a.mapping=zi:o===aa&&(a.mapping=Ni),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sa||o===aa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ud(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ci=4,Xo=[.125,.215,.35,.446,.526,.582],ri=20,ks=new ec,Yo=new Be;let Vs=null,Gs=0,Ws=0,Xs=!1;const ni=(1+Math.sqrt(5))/2,Ai=1/ni,qo=[new z(-ni,Ai,0),new z(ni,Ai,0),new z(-Ai,0,ni),new z(Ai,0,ni),new z(0,ni,-Ai),new z(0,ni,Ai),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Gs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:ur,format:tn,colorSpace:Bi,depthBuffer:!1},r=Zo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(s)),this._blurMaterial=fp(s,e,t)}return r}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,i,r){const o=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yo),u.toneMapping=Bn,u.autoClear=!1;const p=new or({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),_=new ze(new lt,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Yo),x=!0);for(let f=0;f<6;f++){const R=f%3;R===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):R===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const w=this._cubeSize;Hr(r,R*w,f>2?w:0,w,w),u.setRenderTarget(r),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zi||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qo[(r-s-1)%qo.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ri-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):ri;m>ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const f=[];let R=0;for(let E=0;E<ri;++E){const C=E/x,v=Math.exp(-C*C/2);f.push(v),E===0?R+=v:E<m&&(R+=2*v)}for(let E=0;E<f.length;E++)f[E]=f[E]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const g=this._sizeLods[r],b=3*g*(r>w-Ci?r-w+Ci:0),T=4*(this._cubeSize-g);Hr(t,b,T,3*g,2*g),l.setRenderTarget(t),l.render(h,ks)}}function hp(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+Xo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ci?l=Xo[a-n+Ci-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,R=new Float32Array(x*_*p),w=new Float32Array(m*_*p),g=new Float32Array(f*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,C=T>2?0:-1,v=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];R.set(v,x*_*T),w.set(d,m*_*T);const M=[T,T,T,T,T,T];g.set(M,f*_*T)}const b=new an;b.setAttribute("position",new rn(R,x)),b.setAttribute("uv",new rn(w,m)),b.setAttribute("faceIndex",new rn(g,f)),e.push(b),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zo(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fp(n,e,t){const i=new Float32Array(ri),r=new z(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function $o(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ko(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function pp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sa||l===aa,u=l===zi||l===Ni;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Na(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Na(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function mp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ri("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gp(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const R=p.array;x=p.version;for(let w=0,g=R.length;w<g;w+=3){const b=R[w+0],T=R[w+1],E=R[w+2];d.push(b,T,T,E,E,b)}}else if(_!==void 0){const R=_.array;x=_.version;for(let w=0,g=R.length/3-1;w<g;w+=3){const b=w+0,T=w+1,E=w+2;d.push(b,T,T,E,E,b)}}else return;const m=new(Fl(d)?Gl:Vl)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function _p(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*a,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,_);let f=0;for(let R=0;R<_;R++)f+=p[R]*x[R];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vp(n,e,t){const i=new WeakMap,r=new tt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let b=o.attributes.position.count*g,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*T*4*h),C=new Bl(E,b,T,h);C.type=Sn,C.needsUpdate=!0;const v=g*4;for(let P=0;P<h;P++){const N=f[P],O=R[P],G=w[P],q=b*T*4*P;for(let W=0;W<N.count;W++){const K=W*v;_===!0&&(r.fromBufferAttribute(N,W),E[q+K+0]=r.x,E[q+K+1]=r.y,E[q+K+2]=r.z,E[q+K+3]=0),x===!0&&(r.fromBufferAttribute(O,W),E[q+K+4]=r.x,E[q+K+5]=r.y,E[q+K+6]=r.z,E[q+K+7]=0),m===!0&&(r.fromBufferAttribute(G,W),E[q+K+8]=r.x,E[q+K+9]=r.y,E[q+K+10]=r.z,E[q+K+11]=G.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new Ue(b,T)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Mp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const nc=new Pt,jo=new jl(1,1),ic=new Bl,rc=new qu,sc=new Yl,Jo=[],Qo=[],el=new Float32Array(16),tl=new Float32Array(9),nl=new Float32Array(4);function Xi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jo[r];if(s===void 0&&(s=new Float32Array(r),Jo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function os(n,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function Tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;nl.set(i),n.uniformMatrix2fv(this.addr,!1,nl),gt(t,i)}}function wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;tl.set(i),n.uniformMatrix3fv(this.addr,!1,tl),gt(t,i)}}function Ap(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;el.set(i),n.uniformMatrix4fv(this.addr,!1,el),gt(t,i)}}function Rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function Ip(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Np(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jo.compareFunction=Nl,s=jo):s=nc,t.setTexture2D(e||s,r)}function Fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rc,r)}function Op(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sc,r)}function Bp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ic,r)}function Hp(n){switch(n){case 5126:return Sp;case 35664:return yp;case 35665:return Ep;case 35666:return bp;case 35674:return Tp;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Ip;case 36294:return Dp;case 36295:return Up;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}function kp(n,e){n.uniform1fv(this.addr,e)}function Vp(n,e){const t=Xi(e,this.size,2);n.uniform2fv(this.addr,t)}function Gp(n,e){const t=Xi(e,this.size,3);n.uniform3fv(this.addr,t)}function Wp(n,e){const t=Xi(e,this.size,4);n.uniform4fv(this.addr,t)}function Xp(n,e){const t=Xi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yp(n,e){const t=Xi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qp(n,e){const t=Xi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zp(n,e){n.uniform1iv(this.addr,e)}function $p(n,e){n.uniform2iv(this.addr,e)}function Kp(n,e){n.uniform3iv(this.addr,e)}function jp(n,e){n.uniform4iv(this.addr,e)}function Jp(n,e){n.uniform1uiv(this.addr,e)}function Qp(n,e){n.uniform2uiv(this.addr,e)}function em(n,e){n.uniform3uiv(this.addr,e)}function tm(n,e){n.uniform4uiv(this.addr,e)}function nm(n,e,t){const i=this.cache,r=e.length,s=os(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||nc,s[a])}function im(n,e,t){const i=this.cache,r=e.length,s=os(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||rc,s[a])}function rm(n,e,t){const i=this.cache,r=e.length,s=os(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||sc,s[a])}function sm(n,e,t){const i=this.cache,r=e.length,s=os(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ic,s[a])}function am(n){switch(n){case 5126:return kp;case 35664:return Vp;case 35665:return Gp;case 35666:return Wp;case 35674:return Xp;case 35675:return Yp;case 35676:return qp;case 5124:case 35670:return Zp;case 35667:case 35671:return $p;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hp(t.type)}}class lm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=am(t.type)}}class cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function il(n,e){n.seq.push(e),n.map[e.id]=e}function um(n,e,t){const i=n.name,r=i.length;for(Ys.lastIndex=0;;){const s=Ys.exec(i),a=Ys.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){il(t,c===void 0?new om(o,n,e):new lm(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new cm(o),il(t,h)),t=h}}}class Zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);um(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function rl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dm=37297;let hm=0;function fm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sl=new Le;function pm(n){qe._getMatrix(sl,qe.workingColorSpace,n);const e=`mat3( ${sl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function al(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fm(n.getShaderSource(e),a)}else return r}function mm(n,e){const t=pm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gm(n,e){let t;switch(e){case su:t="Linear";break;case au:t="Reinhard";break;case ou:t="Cineon";break;case El:t="ACESFilmic";break;case cu:t="AgX";break;case uu:t="Neutral";break;case lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new z;function _m(){qe.getLuminanceCoefficients(kr);const n=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function vm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function nr(n){return n!==""}function ol(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ll(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(n){return n.replace(Sm,Em)}const ym=new Map;function Em(n,e){let t=De[e];if(t===void 0){const i=ym.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fa(t)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(n){return n.replace(bm,Tm)}function Tm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ul(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Ni:e="ENVMAP_TYPE_CUBE";break;case rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function Cm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case iu:e="ENVMAP_BLENDING_MIX";break;case ru:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wm(t),c=Am(t),u=Rm(t),h=Cm(t),d=Pm(t),p=xm(t),_=vm(s),x=r.createProgram();let m,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),f.length>0&&(f+=`
`)):(m=[ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),f=[ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?De.tonemapping_pars_fragment:"",t.toneMapping!==Bn?gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),_m(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=Fa(a),a=ol(a,t),a=ll(a,t),o=Fa(o),o=ol(o,t),o=ll(o,t),a=cl(a),o=cl(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=R+m+a,g=R+f+o,b=rl(r,r.VERTEX_SHADER,w),T=rl(r,r.FRAGMENT_SHADER,g);r.attachShader(x,b),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(b).trim(),G=r.getShaderInfoLog(T).trim();let q=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,b,T);else{const K=al(r,b,"vertex"),k=al(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:q,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(b),r.deleteShader(T),C=new Zr(r,x),v=Mm(r,x)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,dm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let Im=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Um(e),t.set(e,i)),i}}class Um{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}}function zm(n,e,t,i,r,s,a){const o=new Hl,l=new Dm,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,P,N,O){const G=N.fog,q=O.geometry,W=v.isMeshStandardMaterial?N.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),k=K&&K.mapping===rs?K.image.height:null,ne=_[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=de!==void 0?de.length:0;let Ne=0;q.morphAttributes.position!==void 0&&(Ne=1),q.morphAttributes.normal!==void 0&&(Ne=2),q.morphAttributes.color!==void 0&&(Ne=3);let nt,Y,te,_e;if(ne){const Ke=cn[ne];nt=Ke.vertexShader,Y=Ke.fragmentShader}else nt=v.vertexShader,Y=v.fragmentShader,l.update(v),te=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const ae=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,ot=!!v.map,Ge=!!v.matcap,dt=!!K,L=!!v.aoMap,Bt=!!v.lightMap,He=!!v.bumpMap,ke=!!v.normalMap,Se=!!v.displacementMap,rt=!!v.emissiveMap,ve=!!v.metalnessMap,A=!!v.roughnessMap,S=v.anisotropy>0,F=v.clearcoat>0,Z=v.dispersion>0,j=v.iridescence>0,X=v.sheen>0,xe=v.transmission>0,oe=S&&!!v.anisotropyMap,he=F&&!!v.clearcoatMap,We=F&&!!v.clearcoatNormalMap,ee=F&&!!v.clearcoatRoughnessMap,fe=j&&!!v.iridescenceMap,be=j&&!!v.iridescenceThicknessMap,we=X&&!!v.sheenColorMap,pe=X&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,Ie=!!v.specularColorMap,it=!!v.specularIntensityMap,I=xe&&!!v.transmissionMap,re=xe&&!!v.thicknessMap,V=!!v.gradientMap,$=!!v.alphaMap,ce=v.alphaTest>0,le=!!v.alphaHash,Pe=!!v.extensions;let ct=Bn;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ct=n.toneMapping);const St={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:Y,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Bi,alphaToCoverage:!!v.alphaToCoverage,map:ot,matcap:Ge,envMap:dt,envMapMode:dt&&K.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:Bt,bumpMap:He,normalMap:ke,displacementMap:d&&Se,emissiveMap:rt,normalMapObjectSpace:ke&&v.normalMapType===pu,normalMapTangentSpace:ke&&v.normalMapType===zl,metalnessMap:ve,roughnessMap:A,anisotropy:S,anisotropyMap:oe,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:We,clearcoatRoughnessMap:ee,dispersion:Z,iridescence:j,iridescenceMap:fe,iridescenceThicknessMap:be,sheen:X,sheenColorMap:we,sheenRoughnessMap:pe,specularMap:Ve,specularColorMap:Ie,specularIntensityMap:it,transmission:xe,transmissionMap:I,thicknessMap:re,gradientMap:V,opaque:v.transparent===!1&&v.blending===Li&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:le,combine:v.combine,mapUv:ot&&x(v.map.channel),aoMapUv:L&&x(v.aoMap.channel),lightMapUv:Bt&&x(v.lightMap.channel),bumpMapUv:He&&x(v.bumpMap.channel),normalMapUv:ke&&x(v.normalMap.channel),displacementMapUv:Se&&x(v.displacementMap.channel),emissiveMapUv:rt&&x(v.emissiveMap.channel),metalnessMapUv:ve&&x(v.metalnessMap.channel),roughnessMapUv:A&&x(v.roughnessMap.channel),anisotropyMapUv:oe&&x(v.anisotropyMap.channel),clearcoatMapUv:he&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(v.sheenRoughnessMap.channel),specularMapUv:Ve&&x(v.specularMap.channel),specularColorMapUv:Ie&&x(v.specularColorMap.channel),specularIntensityMapUv:it&&x(v.specularIntensityMap.channel),transmissionMapUv:I&&x(v.transmissionMap.channel),thicknessMapUv:re&&x(v.thicknessMap.channel),alphaMapUv:$&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ke||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ot||$),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:ot&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:rt&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xt,flipSided:v.side===Ct,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(R(M,v),w(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function R(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function w(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function g(v){const M=_[v.type];let P;if(M){const N=cn[M];P=ad.clone(N.uniforms)}else P=v.uniforms;return P}function b(v,M){let P;for(let N=0,O=u.length;N<O;N++){const G=u[N];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Lm(n,M,v,s),u.push(P)),P}function T(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function Nm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Fm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,p,_,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function o(h,d,p,_,x,m){const f=a(h,d,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,_,x,m){const f=a(h,d,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Fm),i.length>1&&i.sort(d||dl),r.length>1&&r.sort(d||dl)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Om(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hl,n.set(i,[a])):r>=s.length?(a=new hl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Be};break;case"SpotLight":t={position:new z,direction:new z,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Hm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let km=0;function Vm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gm(n){const e=new Bm,t=Hm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new at,a=new at;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,R=0,w=0,g=0,b=0,T=0,E=0;c.sort(Vm);for(let v=0,M=c.length;v<M;v++){const P=c[v],N=P.color,O=P.intensity,G=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*O,h+=N.g*O,d+=N.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],O);E++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,k=t.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,R++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const K=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,K.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=q,g++}x++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(N).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,k=t.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,w++}i.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==R||C.numPointShadows!==w||C.numSpotShadows!==g||C.numSpotMaps!==b||C.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=g+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,C.directionalLength=p,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=R,C.numPointShadows=w,C.numSpotShadows=g,C.numSpotMaps=b,C.numLightProbes=E,i.version=km++)}function l(c,u){let h=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const w=c[f];if(w.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),h++}else if(w.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(w.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(w.matrixWorld),g.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),g.halfWidth.set(w.width*.5,0,0),g.halfHeight.set(0,w.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const g=i.point[d];g.position.setFromMatrixPosition(w.matrixWorld),g.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const g=i.hemi[x];g.direction.setFromMatrixPosition(w.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function fl(n){const e=new Gm(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Wm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fl(n),e.set(r,[o])):s>=a.length?(o=new fl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function qm(n,e,t){let i=new Ka;const r=new Ue,s=new Ue,a=new tt,o=new gd({depthPacking:fu}),l=new _d,c={},u=t.maxTextureSize,h={[wn]:Ct,[Ct]:wn,[Xt]:Xt},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new an;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ze(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let f=this.type;this.render=function(T,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const v=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(On),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==Mn&&this.type===Mn,G=f===Mn&&this.type!==Mn;for(let q=0,W=T.length;q<W;q++){const K=T[q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ne=k.getFrameExtents();if(r.multiply(ne),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||O===!0||G===!0){const Me=this.type!==Mn?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new oi(r.x,r.y,Me),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const de=k.getViewportCount();for(let Me=0;Me<de;Me++){const Ne=k.getViewport(Me);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),N.viewport(a),k.updateMatrices(K,Me),i=k.getFrustum(),g(E,C,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Mn&&R(k,C),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,M,P)};function R(T,E){const C=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,C,p,x,null)}function w(T,E,C,v){let M=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=M.uuid,O=E.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let q=G[O];q===void 0&&(q=M.clone(),G[O]=q,E.addEventListener("dispose",b)),M=q}if(M.visible=E.visible,M.wireframe=E.wireframe,v===Mn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=C}return M}function g(T,E,C,v,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Mn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const O=e.update(T),G=T.material;if(Array.isArray(G)){const q=O.groups;for(let W=0,K=q.length;W<K;W++){const k=q[W],ne=G[k.materialIndex];if(ne&&ne.visible){const de=w(T,ne,v,M);T.onBeforeShadow(n,T,E,C,O,de,k),n.renderBufferDirect(C,null,O,de,T,k),T.onAfterShadow(n,T,E,C,O,de,k)}}}else if(G.visible){const q=w(T,G,v,M);T.onBeforeShadow(n,T,E,C,O,q,null),n.renderBufferDirect(C,null,O,q,T,null),T.onAfterShadow(n,T,E,C,O,q,null)}}const N=T.children;for(let O=0,G=N.length;O<G;O++)g(N[O],E,C,v,M)}function b(T){T.target.removeEventListener("dispose",b);for(const C in c){const v=c[C],M=T.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const Zm={[Js]:Qs,[ea]:ia,[ta]:ra,[Ui]:na,[Qs]:Js,[ia]:ea,[ra]:ta,[na]:Ui};function $m(n,e){function t(){let I=!1;const re=new tt;let V=null;const $=new tt(0,0,0,0);return{setMask:function(ce){V!==ce&&!I&&(n.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){I=ce},setClear:function(ce,le,Pe,ct,St){St===!0&&(ce*=ct,le*=ct,Pe*=ct),re.set(ce,le,Pe,ct),$.equals(re)===!1&&(n.clearColor(ce,le,Pe,ct),$.copy(re))},reset:function(){I=!1,V=null,$.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,V=null,$=null,ce=null;return{setReversed:function(le){if(re!==le){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const ct=ce;ce=null,this.setClear(ct)}re=le},getReversed:function(){return re},setTest:function(le){le?ae(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(le){V!==le&&!I&&(n.depthMask(le),V=le)},setFunc:function(le){if(re&&(le=Zm[le]),$!==le){switch(le){case Js:n.depthFunc(n.NEVER);break;case Qs:n.depthFunc(n.ALWAYS);break;case ea:n.depthFunc(n.LESS);break;case Ui:n.depthFunc(n.LEQUAL);break;case ta:n.depthFunc(n.EQUAL);break;case na:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=le}},setLocked:function(le){I=le},setClear:function(le){ce!==le&&(re&&(le=1-le),n.clearDepth(le),ce=le)},reset:function(){I=!1,V=null,$=null,ce=null,re=!1}}}function r(){let I=!1,re=null,V=null,$=null,ce=null,le=null,Pe=null,ct=null,St=null;return{setTest:function(Ke){I||(Ke?ae(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ke){re!==Ke&&!I&&(n.stencilMask(Ke),re=Ke)},setFunc:function(Ke,qt,pn){(V!==Ke||$!==qt||ce!==pn)&&(n.stencilFunc(Ke,qt,pn),V=Ke,$=qt,ce=pn)},setOp:function(Ke,qt,pn){(le!==Ke||Pe!==qt||ct!==pn)&&(n.stencilOp(Ke,qt,pn),le=Ke,Pe=qt,ct=pn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){St!==Ke&&(n.clearStencil(Ke),St=Ke)},reset:function(){I=!1,re=null,V=null,$=null,ce=null,le=null,Pe=null,ct=null,St=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,R=null,w=null,g=null,b=null,T=null,E=new Be(0,0,0),C=0,v=!1,M=null,P=null,N=null,O=null,G=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=K>=2);let ne=null,de={};const Me=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),nt=new tt().fromArray(Me),Y=new tt().fromArray(Ne);function te(I,re,V,$){const ce=new Uint8Array(4),le=n.createTexture();n.bindTexture(I,le),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<V;Pe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(re+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return le}const _e={};_e[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Ui),He(!1),ke(po),ae(n.CULL_FACE),L(On);function ae(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Te(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Re(I,re){return h[I]!==re?(n.bindFramebuffer(I,re),h[I]=re,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=re),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Fe(I,re){let V=p,$=!1;if(I){V=d.get(re),V===void 0&&(V=[],d.set(re,V));const ce=I.textures;if(V.length!==ce.length||V[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Pe=ce.length;le<Pe;le++)V[le]=n.COLOR_ATTACHMENT0+le;V.length=ce.length,$=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,$=!0);$&&n.drawBuffers(V)}function ot(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Ge={[ii]:n.FUNC_ADD,[Hc]:n.FUNC_SUBTRACT,[kc]:n.FUNC_REVERSE_SUBTRACT};Ge[Vc]=n.MIN,Ge[Gc]=n.MAX;const dt={[Wc]:n.ZERO,[Xc]:n.ONE,[Yc]:n.SRC_COLOR,[Ks]:n.SRC_ALPHA,[Jc]:n.SRC_ALPHA_SATURATE,[Kc]:n.DST_COLOR,[Zc]:n.DST_ALPHA,[qc]:n.ONE_MINUS_SRC_COLOR,[js]:n.ONE_MINUS_SRC_ALPHA,[jc]:n.ONE_MINUS_DST_COLOR,[$c]:n.ONE_MINUS_DST_ALPHA,[Qc]:n.CONSTANT_COLOR,[eu]:n.ONE_MINUS_CONSTANT_COLOR,[tu]:n.CONSTANT_ALPHA,[nu]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,re,V,$,ce,le,Pe,ct,St,Ke){if(I===On){x===!0&&(Te(n.BLEND),x=!1);return}if(x===!1&&(ae(n.BLEND),x=!0),I!==Bc){if(I!==m||Ke!==v){if((f!==ii||g!==ii)&&(n.blendEquation(n.FUNC_ADD),f=ii,g=ii),Ke)switch(I){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _o:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _o:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,w=null,b=null,T=null,E.set(0,0,0),C=0,m=I,v=Ke}return}ce=ce||re,le=le||V,Pe=Pe||$,(re!==f||ce!==g)&&(n.blendEquationSeparate(Ge[re],Ge[ce]),f=re,g=ce),(V!==R||$!==w||le!==b||Pe!==T)&&(n.blendFuncSeparate(dt[V],dt[$],dt[le],dt[Pe]),R=V,w=$,b=le,T=Pe),(ct.equals(E)===!1||St!==C)&&(n.blendColor(ct.r,ct.g,ct.b,St),E.copy(ct),C=St),m=I,v=!1}function Bt(I,re){I.side===Xt?Te(n.CULL_FACE):ae(n.CULL_FACE);let V=I.side===Ct;re&&(V=!V),He(V),I.blending===Li&&I.transparent===!1?L(On):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function ke(I){I!==Fc?(ae(n.CULL_FACE),I!==P&&(I===po?n.cullFace(n.BACK):I===Oc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),P=I}function Se(I){I!==N&&(W&&n.lineWidth(I),N=I)}function rt(I,re,V){I?(ae(n.POLYGON_OFFSET_FILL),(O!==re||G!==V)&&(n.polygonOffset(re,V),O=re,G=V)):Te(n.POLYGON_OFFSET_FILL)}function ve(I){I?ae(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function A(I){I===void 0&&(I=n.TEXTURE0+q-1),ne!==I&&(n.activeTexture(I),ne=I)}function S(I,re,V){V===void 0&&(ne===null?V=n.TEXTURE0+q-1:V=ne);let $=de[V];$===void 0&&($={type:void 0,texture:void 0},de[V]=$),($.type!==I||$.texture!==re)&&(ne!==V&&(n.activeTexture(V),ne=V),n.bindTexture(I,re||_e[I]),$.type=I,$.texture=re)}function F(){const I=de[ne];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){nt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),nt.copy(I))}function pe(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Ve(I,re){let V=c.get(re);V===void 0&&(V=new WeakMap,c.set(re,V));let $=V.get(I);$===void 0&&($=n.getUniformBlockIndex(re,I.name),V.set(I,$))}function Ie(I,re){const $=c.get(re).get(I);l.get(re)!==$&&(n.uniformBlockBinding(re,$,I.__bindingPointIndex),l.set(re,$))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,de={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,R=null,w=null,g=null,b=null,T=null,E=new Be(0,0,0),C=0,v=!1,M=null,P=null,N=null,O=null,G=null,nt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Te,bindFramebuffer:Re,drawBuffers:Fe,useProgram:ot,setBlending:L,setMaterial:Bt,setFlipSided:He,setCullFace:ke,setLineWidth:Se,setPolygonOffset:rt,setScissorTest:ve,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:fe,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:We,texStorage3D:ee,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:we,viewport:pe,reset:it}}function Km(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):es("canvas")}function x(A,S,F){let Z=1;const j=ve(A);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Z*j.width),xe=Math.floor(Z*j.height);h===void 0&&(h=_(X,xe));const oe=S?_(X,xe):h;return oe.width=X,oe.height=xe,oe.getContext("2d").drawImage(A,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+xe+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,S,F,Z,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),S===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),S===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),S===n.RGBA){const xe=j?Jr:qe.getTransfer(Z);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=xe===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(A,S){let F;return A?S===null||S===ai||S===Fi?F=n.DEPTH24_STENCIL8:S===Sn?F=n.DEPTH32F_STENCIL8:S===sr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ai||S===Fi?F=n.DEPTH_COMPONENT24:S===Sn?F=n.DEPTH_COMPONENT32F:S===sr&&(F=n.DEPTH_COMPONENT16),F}function b(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&u.delete(S)}function E(A){const S=A.target;S.removeEventListener("dispose",E),M(S)}function C(A){const S=i.get(A);if(S.__webglInit===void 0)return;const F=A.source,Z=d.get(F);if(Z){const j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(A),Object.keys(Z).length===0&&d.delete(F)}i.remove(A)}function v(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const F=A.source,Z=d.get(F);delete Z[S.__cacheKey],a.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=A.textures;for(let Z=0,j=F.length;Z<j;Z++){const X=i.get(F[Z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(A)}let P=0;function N(){P=0}function O(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function G(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const F=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,S);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function W(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function K(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,S);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function k(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const ne={[jr]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},de={[nn]:n.NEAREST,[du]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[gs]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},Me={[mu]:n.NEVER,[Su]:n.ALWAYS,[gu]:n.LESS,[Nl]:n.LEQUAL,[_u]:n.EQUAL,[Mu]:n.GEQUAL,[xu]:n.GREATER,[vu]:n.NOTEQUAL};function Ne(A,S){if(S.type===Sn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===gs||S.magFilter===xr||S.magFilter===zn||S.minFilter===un||S.minFilter===gs||S.minFilter===xr||S.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ne[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ne[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ne[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==xr&&S.minFilter!==zn||S.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function nt(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const Z=S.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const X=G(S);if(X!==A.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[X].usedTimes++;const xe=j[A.__cacheKey];xe!==void 0&&(j[A.__cacheKey].usedTimes--,xe.usedTimes===0&&v(S)),A.__cacheKey=X,A.__webglTexture=j[X].texture}return F}function Y(A,S,F){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const j=nt(A,S),X=S.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+F);const xe=i.get(X);if(X.version!==xe.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const oe=qe.getPrimaries(qe.workingColorSpace),he=S.colorSpace===Un?null:qe.getPrimaries(S.colorSpace),We=S.colorSpace===Un||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ee=x(S.image,!1,r.maxTextureSize);ee=rt(S,ee);const fe=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let we=w(S.internalFormat,fe,be,S.colorSpace,S.isVideoTexture);Ne(Z,S);let pe;const Ve=S.mipmaps,Ie=S.isVideoTexture!==!0,it=xe.__version===void 0||j===!0,I=X.dataReady,re=b(S,ee);if(S.isDepthTexture)we=g(S.format===Oi,S.type),it&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,be,null));else if(S.isDataTexture)if(Ve.length>0){Ie&&it&&t.texStorage2D(n.TEXTURE_2D,re,we,Ve[0].width,Ve[0].height);for(let V=0,$=Ve.length;V<$;V++)pe=Ve[V],Ie?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,be,pe.data):t.texImage2D(n.TEXTURE_2D,V,we,pe.width,pe.height,0,fe,be,pe.data);S.generateMipmaps=!1}else Ie?(it&&t.texStorage2D(n.TEXTURE_2D,re,we,ee.width,ee.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,be,ee.data)):t.texImage2D(n.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,be,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,we,Ve[0].width,Ve[0].height,ee.depth);for(let V=0,$=Ve.length;V<$;V++)if(pe=Ve[V],S.format!==tn)if(fe!==null)if(Ie){if(I)if(S.layerUpdates.size>0){const ce=Wo(pe.width,pe.height,S.format,S.type);for(const le of S.layerUpdates){const Pe=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,le,pe.width,pe.height,1,fe,Pe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,we,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,ee.depth,fe,be,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,we,pe.width,pe.height,ee.depth,0,fe,be,pe.data)}else{Ie&&it&&t.texStorage2D(n.TEXTURE_2D,re,we,Ve[0].width,Ve[0].height);for(let V=0,$=Ve.length;V<$;V++)pe=Ve[V],S.format!==tn?fe!==null?Ie?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,be,pe.data):t.texImage2D(n.TEXTURE_2D,V,we,pe.width,pe.height,0,fe,be,pe.data)}else if(S.isDataArrayTexture)if(Ie){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,we,ee.width,ee.height,ee.depth),I)if(S.layerUpdates.size>0){const V=Wo(ee.width,ee.height,S.format,S.type);for(const $ of S.layerUpdates){const ce=ee.data.subarray($*V/ee.data.BYTES_PER_ELEMENT,($+1)*V/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,fe,be,ce)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,be,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,fe,be,ee.data);else if(S.isData3DTexture)Ie?(it&&t.texStorage3D(n.TEXTURE_3D,re,we,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,be,ee.data)):t.texImage3D(n.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,fe,be,ee.data);else if(S.isFramebufferTexture){if(it)if(Ie)t.texStorage2D(n.TEXTURE_2D,re,we,ee.width,ee.height);else{let V=ee.width,$=ee.height;for(let ce=0;ce<re;ce++)t.texImage2D(n.TEXTURE_2D,ce,we,V,$,0,fe,be,null),V>>=1,$>>=1}}else if(Ve.length>0){if(Ie&&it){const V=ve(Ve[0]);t.texStorage2D(n.TEXTURE_2D,re,we,V.width,V.height)}for(let V=0,$=Ve.length;V<$;V++)pe=Ve[V],Ie?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,fe,be,pe):t.texImage2D(n.TEXTURE_2D,V,we,fe,be,pe);S.generateMipmaps=!1}else if(Ie){if(it){const V=ve(ee);t.texStorage2D(n.TEXTURE_2D,re,we,V.width,V.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,be,ee)}else t.texImage2D(n.TEXTURE_2D,0,we,fe,be,ee);m(S)&&f(Z),xe.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,F){if(S.image.length!==6)return;const Z=nt(A,S),j=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const X=i.get(j);if(j.version!==X.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const xe=qe.getPrimaries(qe.workingColorSpace),oe=S.colorSpace===Un?null:qe.getPrimaries(S.colorSpace),he=S.colorSpace===Un||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!We&&!ee?fe[$]=x(S.image[$],!0,r.maxCubemapSize):fe[$]=ee?S.image[$].image:S.image[$],fe[$]=rt(S,fe[$]);const be=fe[0],we=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Ve=w(S.internalFormat,we,pe,S.colorSpace),Ie=S.isVideoTexture!==!0,it=X.__version===void 0||Z===!0,I=j.dataReady;let re=b(S,be);Ne(n.TEXTURE_CUBE_MAP,S);let V;if(We){Ie&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Ve,be.width,be.height);for(let $=0;$<6;$++){V=fe[$].mipmaps;for(let ce=0;ce<V.length;ce++){const le=V[ce];S.format!==tn?we!==null?Ie?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,we,pe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ve,le.width,le.height,0,we,pe,le.data)}}}else{if(V=S.mipmaps,Ie&&it){V.length>0&&re++;const $=ve(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,we,pe,fe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,fe[$].width,fe[$].height,0,we,pe,fe[$].data);for(let ce=0;ce<V.length;ce++){const Pe=V[ce].image[$].image;Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Pe.width,Pe.height,we,pe,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ve,Pe.width,Pe.height,0,we,pe,Pe.data)}}else{Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,pe,fe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,we,pe,fe[$]);for(let ce=0;ce<V.length;ce++){const le=V[ce];Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,we,pe,le.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ve,we,pe,le.image[$])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),X.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function _e(A,S,F,Z,j,X){const xe=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),he=w(F.internalFormat,xe,oe,F.colorSpace),We=i.get(S),ee=i.get(F);if(ee.__renderTarget=S,!We.__hasExternalTextures){const fe=Math.max(1,S.width>>X),be=Math.max(1,S.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,he,fe,be,S.depth,0,xe,oe,null):t.texImage2D(j,X,he,fe,be,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ke(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,ee.__webglTexture,0,He(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,ee.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(A,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,X=g(S.stencilBuffer,j),xe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=He(S);ke(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,X,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,A)}else{const Z=S.textures;for(let j=0;j<Z.length;j++){const X=Z[j],xe=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),he=w(X.internalFormat,xe,oe,X.colorSpace),We=He(S);F&&ke(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,he,S.width,S.height):ke(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,he,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,he,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const j=Z.__webglTexture,X=He(S);if(S.depthTexture.format===Ii)ke(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===Oi)ke(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Re(A){const S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),ae(S.__webglDepthbuffer[Z],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ae(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(A,S,F){const Z=i.get(A);S!==void 0&&_e(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Re(A)}function ot(A){const S=A.texture,F=i.get(A),Z=i.get(S);A.addEventListener("dispose",E);const j=A.textures,X=A.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let he=0;he<S.mipmaps.length;he++)F.__webglFramebuffer[oe][he]=n.createFramebuffer()}else F.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)F.__webglFramebuffer[oe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let oe=0,he=j.length;oe<he;oe++){const We=i.get(j[oe]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ke(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const he=j[oe];F.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const We=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),fe=w(he.internalFormat,We,ee,he.colorSpace,A.isXRRenderTarget===!0),be=He(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)_e(F.__webglFramebuffer[oe][he],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else _e(F.__webglFramebuffer[oe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,he=j.length;oe<he;oe++){const We=j[oe],ee=i.get(We);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),Ne(n.TEXTURE_2D,We),_e(F.__webglFramebuffer,A,We,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(We)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Ne(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)_e(F.__webglFramebuffer[he],A,S,n.COLOR_ATTACHMENT0,oe,he);else _e(F.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,oe,0);m(S)&&f(oe),t.unbindTexture()}A.depthBuffer&&Re(A)}function Ge(A){const S=A.textures;for(let F=0,Z=S.length;F<Z;F++){const j=S[F];if(m(j)){const X=R(A),xe=i.get(j).__webglTexture;t.bindTexture(X,xe),f(X),t.unbindTexture()}}}const dt=[],L=[];function Bt(A){if(A.samples>0){if(ke(A)===!1){const S=A.textures,F=A.width,Z=A.height;let j=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),oe=S.length>1;if(oe)for(let he=0;he<S.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let he=0;he<S.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const We=i.get(S[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,n.NEAREST),l===!0&&(dt.length=0,L.length=0,dt.push(n.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push(X),L.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<S.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const We=i.get(S[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function He(A){return Math.min(r.maxSamples,A.samples)}function ke(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function rt(A,S){const F=A.colorSpace,Z=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Bi&&F!==Un&&(qe.getTransfer(F)===et?(Z!==tn||j!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Fe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ke}function jm(n,e){function t(i,r=Un){let s;const a=qe.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===Va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Al)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tl)return n.BYTE;if(i===wl)return n.SHORT;if(i===sr)return n.UNSIGNED_SHORT;if(i===ka)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===ur)return n.HALF_FLOAT;if(i===Rl)return n.ALPHA;if(i===Cl)return n.RGB;if(i===tn)return n.RGBA;if(i===Pl)return n.LUMINANCE;if(i===Ll)return n.LUMINANCE_ALPHA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Il)return n.RED;if(i===Wa)return n.RED_INTEGER;if(i===Dl)return n.RG;if(i===Xa)return n.RG_INTEGER;if(i===Ya)return n.RGBA_INTEGER;if(i===Gr||i===Wr||i===Xr||i===Yr)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===la||i===ca||i===ua||i===da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===la)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ha||i===fa||i===pa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ha||i===fa)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ma||i===ga||i===_a||i===xa||i===va||i===Ma||i===Sa||i===ya||i===Ea||i===ba||i===Ta||i===wa||i===Aa||i===Ra)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ma)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ga)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_a)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===va)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ea)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ba)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ta)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Aa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ra)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qr||i===Ca||i===Pa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qr)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===La||i===Ia||i===Da)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Da)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Jm={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new En;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
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

}`;class t0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:Qm,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n0 extends Vi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const x=new t0,m=t.getContextAttributes();let f=null,R=null;const w=[],g=[],b=new Ue;let T=null;const E=new Nt;E.viewport=new tt;const C=new Nt;C.viewport=new tt;const v=[E,C],M=new Sd;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=w[Y];return te===void 0&&(te=new qs,w[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=w[Y];return te===void 0&&(te=new qs,w[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=w[Y];return te===void 0&&(te=new qs,w[Y]=te),te.getHandSpace()};function O(Y){const te=g.indexOf(Y.inputSource);if(te===-1)return;const _e=w[te];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<w.length;Y++){const te=g[Y];te!==null&&(g[Y]=null,w[Y].disconnect(te))}P=null,N=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,R=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let _e=null,ae=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Oi:Ii,ae=m.stencil?Fi:ai);const Re={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new oi(d.textureWidth,d.textureHeight,{format:tn,type:An,depthTexture:new jl(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new oi(p.framebufferWidth,p.framebufferHeight,{format:tn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Y){for(let te=0;te<Y.removed.length;te++){const _e=Y.removed[te],ae=g.indexOf(_e);ae>=0&&(g[ae]=null,w[ae].disconnect(_e))}for(let te=0;te<Y.added.length;te++){const _e=Y.added[te];let ae=g.indexOf(_e);if(ae===-1){for(let Re=0;Re<w.length;Re++)if(Re>=g.length){g.push(_e),ae=Re;break}else if(g[Re]===null){g[Re]=_e,ae=Re;break}if(ae===-1)break}const Te=w[ae];Te&&Te.connect(_e)}}const W=new z,K=new z;function k(Y,te,_e){W.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const ae=W.distanceTo(K),Te=te.projectionMatrix.elements,Re=_e.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),ot=Te[14]/(Te[10]+1),Ge=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],Bt=(Re[8]+1)/Re[0],He=Fe*L,ke=Fe*Bt,Se=ae/(-L+Bt),rt=Se*-L;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(Se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ve=Fe+Se,A=ot+Se,S=He-rt,F=ke+(ae-rt),Z=Ge*ot/A*ve,j=dt*ot/A*ve;Y.projectionMatrix.makePerspective(S,F,Z,j,ve,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,_e=Y.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),M.near=C.near=E.near=te,M.far=C.far=E.far=_e,(P!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),E.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const ae=Y.parent,Te=M.cameras;ne(M,ae);for(let Re=0;Re<Te.length;Re++)ne(Te[Re],ae);Te.length===2?k(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),de(Y,M,ae)};function de(Y,te,_e){_e===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ar*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Me=null;function Ne(Y,te){if(u=te.getViewerPose(c||a),_=te,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let ae=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Re=0;Re<_e.length;Re++){const Fe=_e[Re];let ot=null;if(p!==null)ot=p.getViewport(Fe);else{const dt=h.getViewSubImage(d,Fe);ot=dt.viewport,Re===0&&(e.setRenderTargetTextures(R,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(R))}let Ge=v[Re];Ge===void 0&&(Ge=new Nt,Ge.layers.enable(Re),Ge.viewport=new tt,v[Re]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ot.x,ot.y,ot.width,ot.height),Re===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Ge)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Re=h.getDepthInformation(_e[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,r.renderState)}}for(let _e=0;_e<w.length;_e++){const ae=g[_e],Te=w[_e];ae!==null&&Te!==void 0&&Te.update(ae,te,c||a)}Me&&Me(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const nt=new tc;nt.setAnimationLoop(Ne),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}const ei=new dn,i0=new at;function r0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Wl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,R,w,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,R,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const R=e.get(f),w=R.envMap,g=R.envMapRotation;w&&(m.envMap.value=w,ei.copy(g),ei.x*=-1,ei.y*=-1,ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(ei)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,R,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,R){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const R=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function s0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const g=w.program;i.uniformBlockBinding(R,g)}function c(R,w){let g=r[R.id];g===void 0&&(_(R),g=u(R),r[R.id]=g,R.addEventListener("dispose",m));const b=w.program;i.updateUBOMapping(R,b);const T=e.render.frame;s[R.id]!==T&&(d(R),s[R.id]=T)}function u(R){const w=h();R.__bindingPointIndex=w;const g=n.createBuffer(),b=R.__size,T=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,g),g}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const w=r[R.id],g=R.uniforms,b=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,E=g.length;T<E;T++){const C=Array.isArray(g[T])?g[T]:[g[T]];for(let v=0,M=C.length;v<M;v++){const P=C[v];if(p(P,T,v,b)===!0){const N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let q=0;q<O.length;q++){const W=O[q],K=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,w,g,b){const T=R.value,E=w+"_"+g;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const C=b[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(R){const w=R.uniforms;let g=0;const b=16;for(let E=0,C=w.length;E<C;E++){const v=Array.isArray(w[E])?w[E]:[w[E]];for(let M=0,P=v.length;M<P;M++){const N=v[M],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,q=O.length;G<q;G++){const W=O[G],K=x(W),k=g%b,ne=k%K.boundary,de=k+ne;g+=ne,de!==0&&b-de<K.storage&&(g+=b-de),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=g,g+=K.storage}}}const T=g%b;return T>0&&(g+=b-T),R.__size=g,R.__cache={},this}function x(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function m(R){const w=R.target;w.removeEventListener("dispose",m);const g=a.indexOf(w.__bindingPointIndex);a.splice(g,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(const R in r)n.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class a0{constructor(e={}){const{canvas:t=Ou(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=Bn,this.toneMappingExposure=1;const g=this;let b=!1,T=0,E=0,C=null,v=-1,M=null;const P=new tt,N=new tt;let O=null;const G=new Be(0);let q=0,W=t.width,K=t.height,k=1,ne=null,de=null;const Me=new tt(0,0,W,K),Ne=new tt(0,0,W,K);let nt=!1;const Y=new Ka;let te=!1,_e=!1;this.transmissionResolutionScale=1;const ae=new at,Te=new at,Re=new z,Fe=new tt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return C===null?k:1}let L=i;function Bt(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const D="webgl2";if(L=Bt(D,y),L===null)throw Bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let He,ke,Se,rt,ve,A,S,F,Z,j,X,xe,oe,he,We,ee,fe,be,we,pe,Ve,Ie,it,I;function re(){He=new mp(L),He.init(),Ie=new jm(L,He),ke=new cp(L,He,e,Ie),Se=new $m(L,He),ke.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),rt=new xp(L),ve=new Nm,A=new Km(L,He,Se,ve,ke,Ie,rt),S=new dp(g),F=new pp(g),Z=new bd(L),it=new op(L,Z),j=new gp(L,Z,rt,it),X=new Mp(L,j,Z,rt),we=new vp(L,ke,A),ee=new up(ve),xe=new zm(g,S,F,He,ke,it,ee),oe=new r0(g,ve),he=new Om,We=new Wm(He),be=new ap(g,S,F,Se,X,p,l),fe=new qm(g,X,ke),I=new s0(L,rt,ke,Se),pe=new lp(L,He,rt),Ve=new _p(L,He,rt),rt.programs=xe.programs,g.capabilities=ke,g.extensions=He,g.properties=ve,g.renderLists=he,g.shadowMap=fe,g.state=Se,g.info=rt}re();const V=new n0(g,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=He.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=He.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(W,K,!1))},this.getSize=function(y){return y.set(W,K)},this.setSize=function(y,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,K=D,t.width=Math.floor(y*k),t.height=Math.floor(D*k),B===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*k,K*k).floor()},this.setDrawingBufferSize=function(y,D,B){W=y,K=D,k=B,t.width=Math.floor(y*B),t.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,D,B,H){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,D,B,H),Se.viewport(P.copy(Me).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Ne)},this.setScissor=function(y,D,B,H){y.isVector4?Ne.set(y.x,y.y,y.z,y.w):Ne.set(y,D,B,H),Se.scissor(N.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){Se.setScissorTest(nt=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(y=!0,D=!0,B=!0){let H=0;if(y){let U=!1;if(C!==null){const Q=C.texture.format;U=Q===Ya||Q===Xa||Q===Wa}if(U){const Q=C.texture.type,se=Q===An||Q===ai||Q===sr||Q===Fi||Q===Va||Q===Ga,ue=be.getClearColor(),me=be.getClearAlpha(),Ae=ue.r,Ce=ue.g,ye=ue.b;se?(_[0]=Ae,_[1]=Ce,_[2]=ye,_[3]=me,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=Ae,x[1]=Ce,x[2]=ye,x[3]=me,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT),B&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),be.dispose(),he.dispose(),We.dispose(),ve.dispose(),S.dispose(),F.dispose(),X.dispose(),it.dispose(),I.dispose(),xe.dispose(),V.dispose(),V.removeEventListener("sessionstart",ao),V.removeEventListener("sessionend",oo),qn.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=rt.autoReset,D=fe.enabled,B=fe.autoUpdate,H=fe.needsUpdate,U=fe.type;re(),rt.autoReset=y,fe.enabled=D,fe.autoUpdate=B,fe.needsUpdate=H,fe.type=U}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pe(y){const D=y.target;D.removeEventListener("dispose",Pe),ct(D)}function ct(y){St(y),ve.remove(y)}function St(y){const D=ve.get(y).programs;D!==void 0&&(D.forEach(function(B){xe.releaseProgram(B)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,H,U,Q){D===null&&(D=ot);const se=U.isMesh&&U.matrixWorld.determinant()<0,ue=Lc(y,D,B,H,U);Se.setMaterial(H,se);let me=B.index,Ae=1;if(H.wireframe===!0){if(me=j.getWireframeAttribute(B),me===void 0)return;Ae=2}const Ce=B.drawRange,ye=B.attributes.position;let Xe=Ce.start*Ae,Ze=(Ce.start+Ce.count)*Ae;Q!==null&&(Xe=Math.max(Xe,Q.start*Ae),Ze=Math.min(Ze,(Q.start+Q.count)*Ae)),me!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,me.count)):ye!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,ye.count));const ht=Ze-Xe;if(ht<0||ht===1/0)return;it.setup(U,H,ue,B,me);let ut,Ye=pe;if(me!==null&&(ut=Z.get(me),Ye=Ve,Ye.setIndex(ut)),U.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*dt()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(U.isLine){let Ee=H.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*dt()),U.isLineSegments?Ye.setMode(L.LINES):U.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else U.isPoints?Ye.setMode(L.POINTS):U.isSprite&&Ye.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,vt=U._multiDrawCounts,$e=U._multiDrawCount,Zt=me?Z.get(me).bytesPerElement:1,ci=ve.get(H).currentProgram.getUniforms();for(let It=0;It<$e;It++)ci.setValue(L,"_gl_DrawID",It),Ye.render(Ee[It]/Zt,vt[It])}else if(U.isInstancedMesh)Ye.renderInstances(Xe,ht,U.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,vt=Math.min(B.instanceCount,Ee);Ye.renderInstances(Xe,ht,vt)}else Ye.render(Xe,ht)};function Ke(y,D,B){y.transparent===!0&&y.side===Xt&&y.forceSinglePass===!1?(y.side=Ct,y.needsUpdate=!0,_r(y,D,B),y.side=wn,y.needsUpdate=!0,_r(y,D,B),y.side=Xt):_r(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),f=We.get(B),f.init(D),w.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const ue=Q[se];Ke(ue,B,U),H.add(ue)}else Ke(Q,B,U),H.add(Q)}),w.pop(),f=null,H},this.compileAsync=function(y,D,B=null){const H=this.compile(y,D,B);return new Promise(U=>{function Q(){if(H.forEach(function(se){ve.get(se).currentProgram.isReady()&&H.delete(se)}),H.size===0){U(y);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let qt=null;function pn(y){qt&&qt(y)}function ao(){qn.stop()}function oo(){qn.start()}const qn=new tc;qn.setAnimationLoop(pn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(y){qt=y,V.setAnimationLoop(y),y===null?qn.stop():qn.start()},V.addEventListener("sessionstart",ao),V.addEventListener("sessionend",oo),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),y.isScene===!0&&y.onBeforeRender(g,y,D,C),f=We.get(y,w.length),f.init(D),w.push(f),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,te=ee.init(this.clippingPlanes,_e),m=he.get(y,R.length),m.init(),R.push(m),V.enabled===!0&&V.isPresenting===!0){const Q=g.xr.getDepthSensingMesh();Q!==null&&ps(Q,D,-1/0,g.sortObjects)}ps(y,D,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ne,de),Ge=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ge&&be.addToRenderList(m,y),this.info.render.frame++,te===!0&&ee.beginShadows();const B=f.state.shadowsArray;fe.render(B,y,D),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let se=0,ue=Q.length;se<ue;se++){const me=Q[se];co(H,U,y,me)}Ge&&be.render(y);for(let se=0,ue=Q.length;se<ue;se++){const me=Q[se];lo(m,y,me,me.viewport)}}else U.length>0&&co(H,U,y,D),Ge&&be.render(y),lo(m,y,D);C!==null&&E===0&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(g,y,D),it.resetDefaultState(),v=-1,M=null,w.pop(),w.length>0?(f=w[w.length-1],te===!0&&ee.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function ps(y,D,B,H){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){H&&Fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);const se=X.update(y),ue=y.material;ue.visible&&m.push(y,se,ue,B,Fe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const se=X.update(y),ue=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Fe.copy(y.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Fe.copy(se.boundingSphere.center)),Fe.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(ue)){const me=se.groups;for(let Ae=0,Ce=me.length;Ae<Ce;Ae++){const ye=me[Ae],Xe=ue[ye.materialIndex];Xe&&Xe.visible&&m.push(y,se,Xe,B,Fe.z,ye)}}else ue.visible&&m.push(y,se,ue,B,Fe.z,null)}}const Q=y.children;for(let se=0,ue=Q.length;se<ue;se++)ps(Q[se],D,B,H)}function lo(y,D,B,H){const U=y.opaque,Q=y.transmissive,se=y.transparent;f.setupLightsView(B),te===!0&&ee.setGlobalState(g.clippingPlanes,B),H&&Se.viewport(P.copy(H)),U.length>0&&gr(U,D,B),Q.length>0&&gr(Q,D,B),se.length>0&&gr(se,D,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function co(y,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new oi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ur:An,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Q=f.state.transmissionRenderTarget[H.id],se=H.viewport||P;Q.setSize(se.z*g.transmissionResolutionScale,se.w*g.transmissionResolutionScale);const ue=g.getRenderTarget();g.setRenderTarget(Q),g.getClearColor(G),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),Ge&&be.render(B);const me=g.toneMapping;g.toneMapping=Bn;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),te===!0&&ee.setGlobalState(g.clippingPlanes,H),gr(y,B,H),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ye=0,Xe=D.length;ye<Xe;ye++){const Ze=D[ye],ht=Ze.object,ut=Ze.geometry,Ye=Ze.material,Ee=Ze.group;if(Ye.side===Xt&&ht.layers.test(H.layers)){const vt=Ye.side;Ye.side=Ct,Ye.needsUpdate=!0,uo(ht,B,H,ut,Ye,Ee),Ye.side=vt,Ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q))}g.setRenderTarget(ue),g.setClearColor(G,q),Ae!==void 0&&(H.viewport=Ae),g.toneMapping=me}function gr(y,D,B){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const se=y[U],ue=se.object,me=se.geometry,Ae=H===null?se.material:H,Ce=se.group;ue.layers.test(B.layers)&&uo(ue,D,B,me,Ae,Ce)}}function uo(y,D,B,H,U,Q){y.onBeforeRender(g,D,B,H,U,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(g,D,B,H,y,Q),U.transparent===!0&&U.side===Xt&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,g.renderBufferDirect(B,D,H,U,y,Q),U.side=wn,U.needsUpdate=!0,g.renderBufferDirect(B,D,H,U,y,Q),U.side=Xt):g.renderBufferDirect(B,D,H,U,y,Q),y.onAfterRender(g,D,B,H,U,Q)}function _r(y,D,B){D.isScene!==!0&&(D=ot);const H=ve.get(y),U=f.state.lights,Q=f.state.shadowsArray,se=U.state.version,ue=xe.getParameters(y,U.state,Q,D,B),me=xe.getProgramCacheKey(ue);let Ae=H.programs;H.environment=y.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(y.isMeshStandardMaterial?F:S).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Pe),Ae=new Map,H.programs=Ae);let Ce=Ae.get(me);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===se)return fo(y,ue),Ce}else ue.uniforms=xe.getUniforms(y),y.onBeforeCompile(ue,g),Ce=xe.acquireProgram(ue,me),Ae.set(me,Ce),H.uniforms=ue.uniforms;const ye=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=ee.uniform),fo(y,ue),H.needsLights=Dc(y),H.lightsStateVersion=se,H.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ce,H.uniformsList=null,Ce}function ho(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Zr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function fo(y,D){const B=ve.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Lc(y,D,B,H,U){D.isScene!==!0&&(D=ot),A.resetTextureUnits();const Q=D.fog,se=H.isMeshStandardMaterial?D.environment:null,ue=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bi,me=(H.isMeshStandardMaterial?F:S).get(H.envMap||se),Ae=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let ht=Bn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ht=g.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ye=ut!==void 0?ut.length:0,Ee=ve.get(H),vt=f.state.lights;if(te===!0&&(_e===!0||y!==M)){const Tt=y===M&&H.id===v;ee.setState(H,y,Tt)}let $e=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==vt.state.version||Ee.outputColorSpace!==ue||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==me||H.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ee.numPlanes||Ee.numIntersection!==ee.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Ce||Ee.morphTargets!==ye||Ee.morphNormals!==Xe||Ee.morphColors!==Ze||Ee.toneMapping!==ht||Ee.morphTargetsCount!==Ye)&&($e=!0):($e=!0,Ee.__version=H.version);let Zt=Ee.currentProgram;$e===!0&&(Zt=_r(H,D,U));let ci=!1,It=!1,Yi=!1;const st=Zt.getUniforms(),Ht=Ee.uniforms;if(Se.useProgram(Zt.program)&&(ci=!0,It=!0,Yi=!0),H.id!==v&&(v=H.id,It=!0),ci||M!==y){Se.buffers.depth.getReversed()?(ae.copy(y.projectionMatrix),Hu(ae),ku(ae),st.setValue(L,"projectionMatrix",ae)):st.setValue(L,"projectionMatrix",y.projectionMatrix),st.setValue(L,"viewMatrix",y.matrixWorldInverse);const Lt=st.map.cameraPosition;Lt!==void 0&&Lt.setValue(L,Re.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&st.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,It=!0,Yi=!0)}if(U.isSkinnedMesh){st.setOptional(L,U,"bindMatrix"),st.setOptional(L,U,"bindMatrixInverse");const Tt=U.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),st.setValue(L,"boneTexture",Tt.boneTexture,A))}U.isBatchedMesh&&(st.setOptional(L,U,"batchingTexture"),st.setValue(L,"batchingTexture",U._matricesTexture,A),st.setOptional(L,U,"batchingIdTexture"),st.setValue(L,"batchingIdTexture",U._indirectTexture,A),st.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&st.setValue(L,"batchingColorTexture",U._colorsTexture,A));const kt=B.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&we.update(U,B,Zt),(It||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,st.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ht.envMap.value=me,Ht.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),It&&(st.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&Ic(Ht,Yi),Q&&H.fog===!0&&oe.refreshFogUniforms(Ht,Q),oe.refreshMaterialUniforms(Ht,H,k,K,f.state.transmissionRenderTarget[y.id]),Zr.upload(L,ho(Ee),Ht,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zr.upload(L,ho(Ee),Ht,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(L,"center",U.center),st.setValue(L,"modelViewMatrix",U.modelViewMatrix),st.setValue(L,"normalMatrix",U.normalMatrix),st.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Tt=H.uniformsGroups;for(let Lt=0,ms=Tt.length;Lt<ms;Lt++){const Zn=Tt[Lt];I.update(Zn,Zt),I.bind(Zn,Zt)}}return Zt}function Ic(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Dc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,D,B){ve.get(y.texture).__webglTexture=D,ve.get(y.depthTexture).__webglTexture=B;const H=ve.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const B=ve.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const Uc=L.createFramebuffer();this.setRenderTarget=function(y,D=0,B=0){C=y,T=D,E=B;let H=!0,U=null,Q=!1,se=!1;if(y){const me=ve.get(y);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(me.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(me.__hasExternalTextures)A.rebindTextures(y,ve.get(y.texture).__webglTexture,ve.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ye=y.depthTexture;if(me.__boundDepthTexture!==ye){if(ye!==null&&ve.has(ye)&&(y.width!==ye.image.width||y.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(se=!0);const Ce=ve.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?U=Ce[D][B]:U=Ce[D],Q=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?U=ve.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[B]:U=Ce,P.copy(y.viewport),N.copy(y.scissor),O=y.scissorTest}else P.copy(Me).multiplyScalar(k).floor(),N.copy(Ne).multiplyScalar(k).floor(),O=nt;if(B!==0&&(U=Uc),Se.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&Se.drawBuffers(y,U),Se.viewport(P),Se.scissor(N),Se.setScissorTest(O),Q){const me=ve.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,B)}else if(se){const me=ve.get(y.texture),Ae=D;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,B,Ae)}else if(y!==null&&B!==0){const me=ve.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,B)}v=-1},this.readRenderTargetPixels=function(y,D,B,H,U,Q,se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue){Se.bindFramebuffer(L.FRAMEBUFFER,ue);try{const me=y.texture,Ae=me.format,Ce=me.type;if(!ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-H&&B>=0&&B<=y.height-U&&L.readPixels(D,B,H,U,Ie.convert(Ae),Ie.convert(Ce),Q)}finally{const me=C!==null?ve.get(C).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,H,U,Q,se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue){const me=y.texture,Ae=me.format,Ce=me.type;if(!ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-H&&B>=0&&B<=y.height-U){Se.bindFramebuffer(L.FRAMEBUFFER,ue);const ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),L.readPixels(D,B,H,U,Ie.convert(Ae),Ie.convert(Ce),0);const Xe=C!==null?ve.get(C).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Xe);const Ze=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bu(L,Ze,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(ye),L.deleteSync(Ze),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,B=0){y.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-B),U=Math.floor(y.image.width*H),Q=Math.floor(y.image.height*H),se=D!==null?D.x:0,ue=D!==null?D.y:0;A.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,se,ue,U,Q),Se.unbindTexture()};const zc=L.createFramebuffer(),Nc=L.createFramebuffer();this.copyTextureToTexture=function(y,D,B=null,H=null,U=0,Q=null){y.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],D=arguments[2],Q=arguments[3]||0,B=null),Q===null&&(U!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let se,ue,me,Ae,Ce,ye,Xe,Ze,ht;const ut=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(B!==null)se=B.max.x-B.min.x,ue=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Ce=B.min.y,ye=B.isBox3?B.min.z:0;else{const kt=Math.pow(2,-U);se=Math.floor(ut.width*kt),ue=Math.floor(ut.height*kt),y.isDataArrayTexture?me=ut.depth:y.isData3DTexture?me=Math.floor(ut.depth*kt):me=1,Ae=0,Ce=0,ye=0}H!==null?(Xe=H.x,Ze=H.y,ht=H.z):(Xe=0,Ze=0,ht=0);const Ye=Ie.convert(D.format),Ee=Ie.convert(D.type);let vt;D.isData3DTexture?(A.setTexture3D(D,0),vt=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),vt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const $e=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=L.getParameter(L.UNPACK_SKIP_PIXELS),It=L.getParameter(L.UNPACK_SKIP_ROWS),Yi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ye);const st=y.isDataArrayTexture||y.isData3DTexture,Ht=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const kt=ve.get(y),Tt=ve.get(D),Lt=ve.get(kt.__renderTarget),ms=ve.get(Tt.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Zn=0;Zn<me;Zn++)st&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.get(y).__webglTexture,U,ye+Zn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,Q,ht+Zn)),L.blitFramebuffer(Ae,Ce,se,ue,Xe,Ze,se,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ve.has(y)){const kt=ve.get(y),Tt=ve.get(D);Se.bindFramebuffer(L.READ_FRAMEBUFFER,zc),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nc);for(let Lt=0;Lt<me;Lt++)st?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,U,ye+Lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,U),Ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,Q,ht+Lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,Q),U!==0?L.blitFramebuffer(Ae,Ce,se,ue,Xe,Ze,se,ue,L.COLOR_BUFFER_BIT,L.NEAREST):Ht?L.copyTexSubImage3D(vt,Q,Xe,Ze,ht+Lt,Ae,Ce,se,ue):L.copyTexSubImage2D(vt,Q,Xe,Ze,Ae,Ce,se,ue);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ht?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(vt,Q,Xe,Ze,ht,se,ue,me,Ye,Ee,ut.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,Q,Xe,Ze,ht,se,ue,me,Ye,ut.data):L.texSubImage3D(vt,Q,Xe,Ze,ht,se,ue,me,Ye,Ee,ut):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,Xe,Ze,se,ue,Ye,Ee,ut.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,Xe,Ze,ut.width,ut.height,Ye,ut.data):L.texSubImage2D(L.TEXTURE_2D,Q,Xe,Ze,se,ue,Ye,Ee,ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,$e),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,It),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yi),Q===0&&D.generateMipmaps&&L.generateMipmap(vt),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,D,B=null,H=null,U=0){return y.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0),Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,B,H,U)},this.initRenderTarget=function(y){ve.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,Se.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const sn=2.45,Wt=2.1,pl=.22,ls=1.6,li=2.85;function o0(n,e,t,i,r,s){const a=r-t,o=s-i,l=a*a+o*o;if(l<1e-10)return Math.hypot(n-t,e-i);let c=((n-t)*a+(e-i)*o)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(n-(t+c*a),e-(i+c*o))}function ml(n,e,t,i,r=0){let s=n,a=e;for(let o=0;o<3;o++)for(const l of i){const c=l.h??sn;if(c<1.05)continue;const u=l.baseY??0;if(r+1.85<u||r>u+c+.15)continue;const h=o0(s,a,l.a.x,l.a.z,l.b.x,l.b.z);if(h<t){const d=l.b.x-l.a.x,p=l.b.z-l.a.z,_=Math.hypot(d,p)||1;let x=((s-l.a.x)*d+(a-l.a.z)*p)/(_*_);x=Math.max(0,Math.min(1,x));const m=l.a.x+x*d,f=l.a.z+x*p;let R=s-m,w=a-f;const g=Math.hypot(R,w);g<1e-8?(R=-p/_,w=d/_):(R/=g,w/=g);const b=t-h+.002;s+=R*b,a+=w*b}}return{x:s,z:a}}function l0(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const a=t[r].x,o=t[r].z,l=t[s].x,c=t[s].z;o>e!=c>e&&n<(l-a)*(e-o)/(c-o+1e-12)+a&&(i=!i)}return i}function ac(n,e,t){for(const i of t)if(l0(n,e,i.points))return i.name;return"屋外"}function ki(n){const e=n.rooms||[];let t=1/0,i=-1/0,r=1/0,s=-1/0;for(const a of e)for(const o of a.points)t=Math.min(t,o.x),i=Math.max(i,o.x),r=Math.min(r,o.z),s=Math.max(s,o.z);return isFinite(t)||(t=0,i=5,r=0,s=5),{minX:t,maxX:i,minZ:r,maxZ:s,cx:(t+i)/2,cz:(r+s)/2}}function oc(n){let e=1/0,t=-1/0,i=1/0,r=-1/0;for(const s of n.levels||[]){const a=ki(s);e=Math.min(e,a.minX),t=Math.max(t,a.maxX),i=Math.min(i,a.minZ),r=Math.max(r,a.maxZ)}return isFinite(e)?{minX:e,maxX:t,minZ:i,maxZ:r,cx:(e+t)/2,cz:(i+r)/2}:{minX:0,maxX:5,minZ:0,maxZ:5,cx:2.5,cz:2.5}}function cs(n,e){var t;return(n.levels||[]).find(i=>i.level===e)||((t=n.levels)==null?void 0:t[0])}function c0(n){const e=new Map;for(const t of n.levels||[])for(const i of t.stairs||[]){const r=i.id||`${i.minX},${i.minZ}`;e.has(r)||e.set(r,i)}return[...e.values()]}function u0(n,e,t){const i=t.floorHeight||li;for(const r of c0(t)){if(n<r.minX+.06||n>r.maxX-.06||e<r.minZ+.06||e>r.maxZ-.06)continue;const a=r.lowZ??r.minZ,l=(r.highZ??r.maxZ)-a||.01;let c=(e-a)/l;c=Math.max(0,Math.min(1,c));const u=Math.min(r.fromLevel,r.toLevel),h=Math.max(r.fromLevel,r.toLevel),d=u*i+c*i*(h-u||1);return{stair:r,t:c,footY:d,lowLevel:u,highLevel:h,level:c>=.5?h:u}}return null}function d0(n,e){const t=e.floorHeight||li,i=Math.max(0,...(e.levels||[]).map(l=>l.level||0));let r=Math.max(0,Math.min(i,n.level|0)),s=n.footY,a=!!n.onStairs;const o=u0(n.x,n.z,e);if(a)return o?(s=o.footY,o.t<=.04?(a=!1,r=o.lowLevel,s=r*t):o.t>=.96?(a=!1,r=o.highLevel,s=r*t):r=o.level,{footY:s,level:r,onStairs:a}):(a=!1,r=s>=t*.5?Math.min(i,Math.round(s/t)):0,s=r*t,{footY:s,level:r,onStairs:a});if(o){if(r===o.lowLevel&&o.t<=.22)return{footY:o.footY,level:o.lowLevel,onStairs:!0};if(r===o.highLevel&&o.t>=.78)return{footY:o.footY,level:o.highLevel,onStairs:!0}}if(s=r*t,r===0){const l=cs(e,0);ac(n.x,n.z,(l==null?void 0:l.rooms)||[])==="屋外"&&(s=0)}return{footY:s,level:r,onStairs:!1}}const lc={id:"1ldk",wallHeight:sn,entrance:{x:5.275,z:.15,facing:Math.PI},spawn:{x:5.275,z:-2.2,yaw:0},rooms:[{name:"玄関",color:"#c4b5a0",floor:"#b8a990",points:[{x:4.7,z:.15},{x:6.15,z:.15},{x:6.15,z:1.7},{x:4.7,z:1.7}]},{name:"廊下",color:"#e8e0d4",floor:"#e5ddd0",points:[{x:4.7,z:1.7},{x:6.15,z:1.7},{x:6.15,z:4},{x:4.7,z:4}]},{name:"トイレ",color:"#dce8f0",floor:"#d0e0ec",points:[{x:5.1,z:4},{x:6.15,z:4},{x:6.15,z:5.2},{x:5.1,z:5.2}]},{name:"洗面",color:"#e8f0f5",floor:"#dce8f0",points:[{x:4,z:5.2},{x:5.4,z:5.2},{x:5.4,z:6.55},{x:4,z:6.55}]},{name:"浴室",color:"#d0e8f0",floor:"#b8d8e8",points:[{x:5.4,z:5.2},{x:6.15,z:5.2},{x:6.15,z:6.55},{x:5.4,z:6.55}]},{name:"洋室",color:"#f0ebe3",floor:"#e8dfd2",points:[{x:.15,z:4.85},{x:3.55,z:4.85},{x:3.55,z:7.35},{x:.15,z:7.35}]},{name:"リビング・ダイニング",color:"#f5f0e8",floor:"#efe6d8",points:[{x:.15,z:2},{x:4.7,z:2},{x:4.7,z:4.85},{x:.15,z:4.85}]},{name:"キッチン",color:"#f0ece4",floor:"#e8e0d4",points:[{x:.15,z:.15},{x:4.7,z:.15},{x:4.7,z:2},{x:.15,z:2}]},{name:"バルコニー",color:"#c8d0d8",floor:"#b0bcc8",points:[{x:.15,z:7.35},{x:3.55,z:7.35},{x:3.55,z:8.1},{x:.15,z:8.1}]},{name:"収納",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:3.55,z:5.5},{x:4,z:5.5},{x:4,z:6.55},{x:3.55,z:6.55}]}],walls:[{a:{x:.15,z:.15},b:{x:4.85,z:.15}},{a:{x:5.7,z:.15},b:{x:6.15,z:.15}},{a:{x:6.15,z:.15},b:{x:6.15,z:6.55}},{a:{x:4,z:6.55},b:{x:6.15,z:6.55}},{a:{x:.15,z:7.35},b:{x:.5,z:7.35}},{a:{x:2,z:7.35},b:{x:3.55,z:7.35}},{a:{x:.15,z:8.1},b:{x:3.55,z:8.1},h:1},{a:{x:.15,z:7.35},b:{x:.15,z:8.1},h:1},{a:{x:3.55,z:7.35},b:{x:3.55,z:8.1},h:1},{a:{x:.15,z:.15},b:{x:.15,z:7.35}},{a:{x:.15,z:4.85},b:{x:1.4,z:4.85}},{a:{x:2.2,z:4.85},b:{x:3.55,z:4.85}},{a:{x:3.55,z:4.85},b:{x:3.55,z:5.5}},{a:{x:3.55,z:6.55},b:{x:3.55,z:7.35}},{a:{x:3.55,z:5.5},b:{x:4,z:5.5}},{a:{x:4,z:5.5},b:{x:4,z:5.2}},{a:{x:4,z:5.2},b:{x:4,z:6.55}},{a:{x:5.4,z:5.2},b:{x:5.4,z:5.55}},{a:{x:5.4,z:6.25},b:{x:5.4,z:6.55}},{a:{x:4,z:5.2},b:{x:4.55,z:5.2}},{a:{x:5.35,z:5.2},b:{x:6.15,z:5.2}},{a:{x:5.1,z:4},b:{x:5.1,z:5.2}},{a:{x:5.1,z:4},b:{x:5.35,z:4}},{a:{x:5.9,z:4},b:{x:6.15,z:4}},{a:{x:4.7,z:.15},b:{x:4.7,z:1.55}},{a:{x:4.7,z:2.35},b:{x:4.7,z:4}},{a:{x:4.7,z:4},b:{x:5.1,z:4}},{a:{x:4.7,z:1.7},b:{x:5,z:1.7}},{a:{x:5.85,z:1.7},b:{x:6.15,z:1.7}}],doors:[{a:{x:4.85,z:.15},b:{x:5.7,z:.15},label:"玄関",exterior:!0},{a:{x:1.4,z:4.85},b:{x:2.2,z:4.85},label:"洋室"},{a:{x:4.55,z:5.2},b:{x:5.35,z:5.2},label:"洗面"},{a:{x:5.4,z:5.55},b:{x:5.4,z:6.25},label:"浴室"},{a:{x:5.35,z:4},b:{x:5.9,z:4},label:"トイレ"},{a:{x:4.7,z:1.55},b:{x:4.7,z:2.35},label:"LD"},{a:{x:.5,z:7.35},b:{x:2,z:7.35},label:"バルコニー"}],windows:[{a:{x:.15,z:5.5},b:{x:.15,z:6.8},sill:.9,h:1.2},{a:{x:.15,z:2.8},b:{x:.15,z:4.2},sill:.9,h:1.2},{a:{x:1,z:.15},b:{x:2.4,z:.15},sill:.9,h:1.1},{a:{x:6.15,z:2.5},b:{x:6.15,z:3.5},sill:.9,h:1.1}],furniture:[{type:"bed",x:1,z:6.3,rot:0,w:1.4,d:2,h:.45},{type:"desk",x:2.9,z:6.7,rot:0,w:.9,d:.5,h:.72},{type:"closet",x:3.2,z:5.3,rot:0,w:.55,d:1,h:2},{type:"sofa",x:1.3,z:3.6,rot:0,w:2,d:.85,h:.75},{type:"table",x:1.3,z:2.7,rot:0,w:1,d:.55,h:.4},{type:"tv",x:3.9,z:3.5,rot:Math.PI/2,w:1.1,d:.15,h:.7},{type:"table",x:2.8,z:2.5,rot:0,w:1.1,d:.7,h:.72},{type:"kitchen",x:.55,z:1,rot:0,w:.6,d:2.4,h:.9},{type:"fridge",x:4.2,z:.55,rot:0,w:.6,d:.6,h:1.7},{type:"toilet",x:5.65,z:4.75,rot:0,w:.4,d:.6,h:.4},{type:"sink",x:4.7,z:6.2,rot:0,w:1,d:.5,h:.85},{type:"bath",x:5.78,z:5.9,rot:0,w:.7,d:1.2,h:.55},{type:"closet",x:5.9,z:1.2,rot:0,w:.4,d:.9,h:1.8},{type:"plant",x:.6,z:4.4,rot:0,w:.35,d:.35,h:.9},{type:"plant",x:3.3,z:7.7,rot:0,w:.3,d:.3,h:.6}],exterior:{style:"apartment",floors:5,unitFloor:3,facadeColor:"#e8e4dc",accentColor:"#6b8cae"}},Pi={id:"house1f",wallHeight:sn,entrance:{x:11.2,z:.2,facing:Math.PI},spawn:{x:11.2,z:-1.7,yaw:0},rooms:[{name:"玄関",color:"#d0c8b8",floor:"#c8c0b0",points:[{x:10.2,z:.2},{x:12.4,z:.2},{x:12.4,z:2},{x:10.2,z:2}]},{name:"ホール",color:"#f0e8d8",floor:"#ebe0cc",points:[{x:8.6,z:2},{x:12.4,z:2},{x:12.4,z:5},{x:8.6,z:5}]},{name:"トイレ",color:"#e0f0e8",floor:"#d0e8dc",points:[{x:10.6,z:5},{x:12.4,z:5},{x:12.4,z:6.4},{x:10.6,z:6.4}]},{name:"洗面脱衣室",color:"#e8f0f5",floor:"#dce8f0",points:[{x:8,z:6.4},{x:10.6,z:6.4},{x:10.6,z:8.2},{x:8,z:8.2}]},{name:"浴室",color:"#d0e8f0",floor:"#b8d8e8",points:[{x:10.6,z:6.4},{x:12.4,z:6.4},{x:12.4,z:8.2},{x:10.6,z:8.2}]},{name:"収納",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:8,z:5},{x:9.4,z:5},{x:9.4,z:6.4},{x:8,z:6.4}]},{name:"SIC",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:9.4,z:2},{x:10.2,z:2},{x:10.2,z:3.6},{x:9.4,z:3.6}]},{name:"LDK",color:"#f5efe4",floor:"#efe4d4",points:[{x:.3,z:2.4},{x:8.6,z:2.4},{x:8.6,z:8.2},{x:.3,z:8.2}]},{name:"和室",color:"#d8e8c8",floor:"#c8d8a8",points:[{x:5,z:.2},{x:8.6,z:.2},{x:8.6,z:2.4},{x:5,z:2.4}]},{name:"板の間",color:"#e8dcc8",floor:"#d8c8a8",points:[{x:8,z:.2},{x:9.4,z:.2},{x:9.4,z:2},{x:8,z:2}]},{name:"パントリー",color:"#e8e0d4",floor:"#ddd5c8",points:[{x:5.5,z:7.2},{x:7.2,z:7.2},{x:7.2,z:8.2},{x:5.5,z:8.2}]},{name:"ウッドデッキ",color:"#a08050",floor:"#8b6914",points:[{x:.3,z:-1.2},{x:4.5,z:-1.2},{x:4.5,z:.2},{x:.3,z:.2}]},{name:"ポーチ",color:"#c0b8a8",floor:"#b0a898",points:[{x:10.4,z:-1.4},{x:12.4,z:-1.4},{x:12.4,z:.2},{x:10.4,z:.2}]}],walls:[{a:{x:.3,z:.2},b:{x:5,z:.2}},{a:{x:5,z:.2},b:{x:10.55,z:.2}},{a:{x:11.85,z:.2},b:{x:12.4,z:.2}},{a:{x:12.4,z:.2},b:{x:12.4,z:8.2}},{a:{x:.3,z:8.2},b:{x:12.4,z:8.2}},{a:{x:.3,z:.2},b:{x:.3,z:8.2}},{a:{x:8.6,z:2.4},b:{x:8.6,z:4.3}},{a:{x:8.6,z:5.1},b:{x:8.6,z:8.2}},{a:{x:5,z:.2},b:{x:5,z:1.5}},{a:{x:5,z:2.1},b:{x:5,z:2.4}},{a:{x:5,z:2.4},b:{x:8.6,z:2.4}},{a:{x:8,z:.2},b:{x:8,z:2}},{a:{x:9.4,z:.2},b:{x:9.4,z:2}},{a:{x:10.2,z:.2},b:{x:10.2,z:2}},{a:{x:8.6,z:2},b:{x:10.2,z:2}},{a:{x:8.6,z:5},b:{x:10.6,z:5}},{a:{x:11.3,z:5},b:{x:12.4,z:5}},{a:{x:10.6,z:5},b:{x:10.6,z:6.4}},{a:{x:8,z:6.4},b:{x:10.6,z:6.4}},{a:{x:10.6,z:6.4},b:{x:10.6,z:7}},{a:{x:10.6,z:7.7},b:{x:10.6,z:8.2}},{a:{x:8,z:5},b:{x:8,z:6.4}},{a:{x:9.4,z:5},b:{x:9.4,z:6.4}},{a:{x:5.5,z:7.2},b:{x:7.2,z:7.2}},{a:{x:5.5,z:7.2},b:{x:5.5,z:8.2}},{a:{x:7.2,z:7.2},b:{x:7.2,z:8.2}},{a:{x:.3,z:-1.2},b:{x:4.5,z:-1.2},h:.95},{a:{x:.3,z:-1.2},b:{x:.3,z:.2},h:.95},{a:{x:4.5,z:-1.2},b:{x:4.5,z:.2},h:.95}],doors:[{a:{x:10.55,z:.2},b:{x:11.85,z:.2},label:"玄関",exterior:!0},{a:{x:8.6,z:4.3},b:{x:8.6,z:5.1},label:"LDK"},{a:{x:5,z:1.5},b:{x:5,z:2.1},label:"和室"},{a:{x:10.6,z:5},b:{x:11.3,z:5},label:"トイレ"},{a:{x:8.8,z:6.4},b:{x:9.6,z:6.4},label:"洗面"},{a:{x:10.6,z:7},b:{x:10.6,z:7.7},label:"浴室"},{a:{x:1.5,z:.2},b:{x:3.2,z:.2},label:"デッキ"}],windows:[{a:{x:.3,z:4},b:{x:.3,z:6.5},sill:.5,h:1.6},{a:{x:1,z:8.2},b:{x:3.5,z:8.2},sill:.9,h:1.2},{a:{x:12.4,z:2.5},b:{x:12.4,z:4},sill:.9,h:1.1},{a:{x:6,z:.2},b:{x:7.5,z:.2},sill:.4,h:1.5}],furniture:[{type:"sofa",x:2.2,z:3.5,rot:Math.PI/2,w:2.2,d:.9,h:.75},{type:"table",x:3.5,z:3.5,rot:0,w:.9,d:.9,h:.4},{type:"table",x:2,z:6.2,rot:0,w:1.4,d:.85,h:.74},{type:"chair",x:1.3,z:6.2,rot:Math.PI/2,w:.45,d:.45,h:.85},{type:"chair",x:2.7,z:6.2,rot:-Math.PI/2,w:.45,d:.45,h:.85},{type:"kitchen",x:6.5,z:6.8,rot:0,w:.65,d:2.4,h:.9},{type:"island",x:5,z:5.5,rot:0,w:1.6,d:.8,h:.9},{type:"tv",x:4.5,z:2.8,rot:Math.PI,w:1.2,d:.12,h:.7},{type:"plant",x:.8,z:7.5,rot:0,w:.4,d:.4,h:1.1},{type:"tatami",x:6.8,z:1.3,rot:0,w:3.4,d:2,h:.05},{type:"toilet",x:11.5,z:5.7,rot:0,w:.4,d:.6,h:.4},{type:"sink",x:9.3,z:7.6,rot:0,w:1.4,d:.5,h:.85},{type:"bath",x:11.5,z:7.3,rot:0,w:.75,d:1.3,h:.55},{type:"closet",x:8.7,z:5.7,rot:0,w:.55,d:1.1,h:2},{type:"closet",x:9.8,z:2.8,rot:0,w:.35,d:.9,h:2},{type:"closet",x:11.9,z:1.2,rot:0,w:.35,d:.9,h:1.8}],exterior:{style:"house",floors:2,unitFloor:1,facadeColor:"#f2ebe0",accentColor:"#5c4033",roofColor:"#4a5568"}},h0={id:"house2f",level:1,name:"2F",wallHeight:sn,rooms:[{name:"階段ホール",color:"#f0e8d8",floor:"#ebe0cc",points:[{x:6.8,z:3.2},{x:9.2,z:3.2},{x:9.2,z:5.6},{x:6.8,z:5.6}]},{name:"廊下",color:"#e8e0d4",floor:"#e5ddd0",points:[{x:3,z:3.8},{x:6.8,z:3.8},{x:6.8,z:5},{x:3,z:5}]},{name:"主寝室",color:"#f0ebe3",floor:"#e8dfd2",points:[{x:.3,z:5},{x:6.8,z:5},{x:6.8,z:8.2},{x:.3,z:8.2}]},{name:"子供室A",color:"#e8f0f5",floor:"#dce8f0",points:[{x:.3,z:.2},{x:4.8,z:.2},{x:4.8,z:3.8},{x:.3,z:3.8}]},{name:"子供室B",color:"#f5efe4",floor:"#efe4d4",points:[{x:4.8,z:.2},{x:9.2,z:.2},{x:9.2,z:3.2},{x:6.8,z:3.2},{x:6.8,z:3.8},{x:4.8,z:3.8}]},{name:"WIC",color:"#ddd5c8",floor:"#d0c8b8",points:[{x:9.2,z:3.2},{x:12.4,z:3.2},{x:12.4,z:5.6},{x:9.2,z:5.6}]},{name:"トイレ",color:"#e0f0e8",floor:"#d0e8dc",points:[{x:9.2,z:5.6},{x:11,z:5.6},{x:11,z:7},{x:9.2,z:7}]},{name:"バルコニー",color:"#c8d0d8",floor:"#b0bcc8",points:[{x:.3,z:8.2},{x:6.8,z:8.2},{x:6.8,z:9},{x:.3,z:9}]}],walls:[{a:{x:.3,z:.2},b:{x:9.2,z:.2}},{a:{x:9.2,z:.2},b:{x:9.2,z:3.2}},{a:{x:9.2,z:3.2},b:{x:12.4,z:3.2}},{a:{x:12.4,z:3.2},b:{x:12.4,z:5.6}},{a:{x:11,z:5.6},b:{x:12.4,z:5.6}},{a:{x:11,z:5.6},b:{x:11,z:7}},{a:{x:9.2,z:7},b:{x:11,z:7}},{a:{x:9.2,z:5.6},b:{x:9.2,z:8.2}},{a:{x:.3,z:8.2},b:{x:.5,z:8.2}},{a:{x:2.2,z:8.2},b:{x:6.8,z:8.2}},{a:{x:6.8,z:8.2},b:{x:6.8,z:9}},{a:{x:.3,z:9},b:{x:6.8,z:9},h:1},{a:{x:.3,z:8.2},b:{x:.3,z:9},h:1},{a:{x:.3,z:.2},b:{x:.3,z:8.2}},{a:{x:4.8,z:.2},b:{x:4.8,z:3}},{a:{x:4.8,z:3.6},b:{x:4.8,z:3.8}},{a:{x:.3,z:3.8},b:{x:3,z:3.8}},{a:{x:3.8,z:3.8},b:{x:6.8,z:3.8}},{a:{x:3,z:3.8},b:{x:3,z:5}},{a:{x:.3,z:5},b:{x:3,z:5}},{a:{x:3.8,z:5},b:{x:6.8,z:5}},{a:{x:6.8,z:5},b:{x:6.8,z:5.6}},{a:{x:6.8,z:3.2},b:{x:6.8,z:3.8}},{a:{x:6.8,z:5.6},b:{x:9.2,z:5.6}},{a:{x:9.2,z:3.2},b:{x:9.2,z:5}},{a:{x:9.2,z:5.4},b:{x:9.2,z:5.6}}],doors:[{a:{x:3,z:3.8},b:{x:3.8,z:3.8},label:"廊下"},{a:{x:3,z:5},b:{x:3.8,z:5},label:"主寝室"},{a:{x:4.8,z:3},b:{x:4.8,z:3.6},label:"子供室A"},{a:{x:6.8,z:3.5},b:{x:7.4,z:3.5},label:"子供室B"},{a:{x:9.2,z:5},b:{x:9.2,z:5.4},label:"WIC"},{a:{x:9.2,z:6},b:{x:9.2,z:6.6},label:"トイレ"},{a:{x:.5,z:8.2},b:{x:2.2,z:8.2},label:"バルコニー"}],windows:[{a:{x:.3,z:6},b:{x:.3,z:7.5},sill:.9,h:1.2},{a:{x:1,z:.2},b:{x:3,z:.2},sill:.9,h:1.1},{a:{x:5.5,z:.2},b:{x:7.5,z:.2},sill:.9,h:1.1},{a:{x:12.4,z:4},b:{x:12.4,z:5},sill:.9,h:1}],furniture:[{type:"bed",x:2.5,z:6.8,rot:0,w:1.8,d:2.1,h:.45},{type:"closet",x:6,z:7.4,rot:0,w:.55,d:1.4,h:2},{type:"desk",x:5.5,z:5.6,rot:0,w:1,d:.5,h:.72},{type:"bed",x:2,z:1.8,rot:0,w:1.2,d:2,h:.45},{type:"desk",x:3.8,z:2.8,rot:0,w:.9,d:.5,h:.72},{type:"bed",x:6.5,z:1.6,rot:0,w:1.2,d:2,h:.45},{type:"closet",x:10.5,z:4.4,rot:0,w:1.5,d:.55,h:2},{type:"toilet",x:10.1,z:6.3,rot:0,w:.4,d:.55,h:.4},{type:"plant",x:1,z:8.5,rot:0,w:.3,d:.3,h:.7}],stairs:[{id:"main-stair",minX:7.35,maxX:8.55,minZ:3.55,maxZ:5.15,lowZ:3.55,highZ:5.15,fromLevel:0,toLevel:1,upIsHighZ:!0}],railWalls:[{a:{x:7.25,z:3.55},b:{x:7.25,z:5}},{a:{x:8.65,z:3.55},b:{x:8.65,z:5}},{a:{x:7.25,z:3.55},b:{x:8.65,z:3.55}}]},cc=2.85,f0={...Pi,level:0,name:"1F",stairs:[{id:"main-stair",minX:7.35,maxX:8.55,minZ:3.55,maxZ:5.15,lowZ:3.55,highZ:5.15,fromLevel:0,toLevel:1,upIsHighZ:!0}],walls:[...Pi.walls,{a:{x:7.25,z:3.5},b:{x:7.25,z:5.2}},{a:{x:8.65,z:3.5},b:{x:8.65,z:4.15}},{a:{x:8.65,z:4.85},b:{x:8.65,z:5.2}},{a:{x:7.25,z:3.5},b:{x:8.65,z:3.5}}],rooms:[...Pi.rooms,{name:"階段",color:"#d4c4a8",floor:"#c8b898",noFloor:!0,points:[{x:7.25,z:3.5},{x:8.65,z:3.5},{x:8.65,z:5.2},{x:7.25,z:5.2}]}],doors:[...Pi.doors,{a:{x:8.65,z:4.15},b:{x:8.65,z:4.85},label:"階段"}]},p0={id:"house-building",multiFloor:!0,floorHeight:cc,wallHeight:sn,entrance:Pi.entrance,spawn:Pi.spawn,exterior:{style:"house",floors:2,unitFloor:1,facadeColor:"#f2ebe0",accentColor:"#5c4033",roofColor:"#4a5568"},levels:[f0,{...h0,level:1,name:"2F"}]};function Qa(n){return n?n.multiFloor&&n.levels?n:{id:n.id,multiFloor:!0,floorHeight:n.floorHeight||cc,wallHeight:n.wallHeight||sn,entrance:n.entrance,spawn:n.spawn,exterior:n.exterior,levels:[{level:0,name:"1F",wallHeight:n.wallHeight||sn,rooms:n.rooms||[],walls:n.walls||[],doors:n.doors||[],windows:n.windows||[],furniture:n.furniture||[],stairs:n.stairs||[]}]}:null}const uc="floorplan-walk-props-v2",dc="floorplan-walk-traced-v1",gl={"apt-1ldk":{label:"マンション 1LDK",plan:lc},"house-2f":{label:"戸建て 2階建（階段あり）",plan:p0}},hc=[{id:"apt-shibuya",builtin:!0,title:"パークサイド神宮前",unit:"305号室",type:"マンション",layout:"1LDK",area:"約40㎡",price:"月額 12.8万円",priceNote:"管理費 8,000円 別",address:"東京都渋谷区神宮前3丁目25-18",lat:35.6702,lng:139.7065,built:"2018年3月",structure:"RC造 5階建 / 3階部分",access:"東京メトロ「明治神宮前」徒歩6分",exteriorNotes:"タイル張りの落ち着いた外観。オートロック・宅配ボックス付き。エントランスは石張りで清潔感があります。",features:["南向きバルコニー","オートロック","宅配BOX","室内洗濯機置場","インターネット無料"],description:"コンパクトながら動線の良い1LDK。リビングから洋室へのアクセスがスムーズで、単身〜DINKS向けです。",planImage:null,planTemplateId:"apt-1ldk",accent:"#3b82f6"},{id:"house-setagaya",builtin:!0,title:"桜丘の家",unit:"1〜2階（戸建て）",type:"戸建て",layout:"4LDK相当",area:"延床 約95㎡",price:"販売 6,280万円",priceNote:"土地付き戸建て",address:"東京都世田谷区桜丘2丁目15-8",lat:35.6418,lng:139.6275,built:"2022年1月",structure:"木造2階建",access:"小田急線「千歳船橋」徒歩9分",exteriorNotes:"白い外壁にウッドデッキが映える現代和風の外観。玄関ポーチから入り、階段で2階の居室へ上がれます。",features:["2階建て","階段歩行可","ウッドデッキ","パントリー","SIC","和室"],description:"1階に広々LDKと和室、2階に主寝室・子供室。階段を歩いて階を移動できます。",planImage:"plans/house1f.jpg",planTemplateId:"house-2f",accent:"#059669"}];function mr(){try{const n=localStorage.getItem(uc);return n?JSON.parse(n):[]}catch{return[]}}function eo(n){localStorage.setItem(uc,JSON.stringify(n))}function to(){try{return JSON.parse(localStorage.getItem(dc)||"[]")}catch{return[]}}function m0(n,e={}){const t=to(),i={id:n.id||`traced-${Date.now()}`,name:e.name||n.title||"トレース物件",savedAt:new Date().toISOString(),plan:n},r=t.findIndex(s=>s.id===i.id);return r>=0?t[r]=i:t.unshift(i),localStorage.setItem(dc,JSON.stringify(t.slice(0,30))),i}function fc(){return[...mr(),...hc]}function g0(n){return fc().find(e=>e.id===n)||hc[0]}function pc(n){if(n.floorPlan)return n.floorPlan;if(n.planTemplateId&&gl[n.planTemplateId])return gl[n.planTemplateId].plan;if(n.tracedPlanId){const e=to().find(t=>t.id===n.tracedPlanId);if(e)return e.plan}return lc}function mc(n){if(n.builtin)throw new Error("組み込み物件は編集できません");const e=mr(),t=n.id||`prop-${Date.now()}`,i={...n,id:t,builtin:!1,updatedAt:new Date().toISOString(),createdAt:n.createdAt||new Date().toISOString()};i.planTemplateId&&i.floorPlan&&delete i.floorPlan;const r=e.findIndex(s=>s.id===t);return r>=0?e[r]=i:e.unshift(i),eo(e),i}function _0(n){const e=mr().filter(t=>t.id!==n);eo(e)}function x0(){return JSON.stringify({version:2,exportedAt:new Date().toISOString(),properties:mr()},null,2)}function v0(n){const e=JSON.parse(n),t=e.properties||e;if(!Array.isArray(t))throw new Error("不正なJSONです");const i=mr();for(const r of t){if(!r.id||r.builtin)continue;const s=i.findIndex(a=>a.id===r.id);s>=0?i[s]=r:i.push(r)}return eo(i),i.length}async function M0(n){if(!n||!n.trim())throw new Error("住所を入力してください");const e="https://nominatim.openstreetmap.org/search?"+new URLSearchParams({q:n,format:"json",limit:"1",countrycodes:"jp"}),t=await fetch(e,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error("ジオコーディングに失敗しました");const i=await t.json();if(!i.length)throw new Error("住所が見つかりませんでした。緯度経度を手入力してください");return{lat:parseFloat(i[0].lat),lng:parseFloat(i[0].lon),displayName:i[0].display_name}}function S0(n){return n.lat&&n.lng?`https://maps.google.com/maps?q=${n.lat},${n.lng}&z=17&hl=ja&output=embed`:`https://maps.google.com/maps?q=${encodeURIComponent(n.address||"")}&z=17&hl=ja&output=embed`}function y0(n){const e=n.lat||35.6812,t=n.lng||139.7671;return`https://maps.google.com/maps?q=&layer=c&cbll=${e},${t}&cbp=11,0,0,0,0&hl=ja&output=svembed`}function E0(n){return n.lat&&n.lng?`https://www.google.com/maps/search/?api=1&query=${n.lat},${n.lng}`:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.address||"")}`}function b0(n){const e=n.lat||35.6812,t=n.lng||139.7671;return`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${e},${t}`}function T0(){return{id:"",title:"",unit:"",type:"マンション",layout:"",area:"",price:"",priceNote:"",address:"",lat:"",lng:"",built:"",structure:"",access:"",exteriorNotes:"",description:"",features:"",planTemplateId:"apt-1ldk",tracedPlanId:"",accent:"#3b82f6"}}function Wn(n=512){const e=document.createElement("canvas");return e.width=e.height=n,e}function Xn(n,e=2){const t=new Kl(n);return t.colorSpace=Rt,t.wrapS=t.wrapT=jr,t.repeat.set(e,e),t.anisotropy=8,t.generateMipmaps=!0,t.minFilter=zn,t}function us(n,e,t=.06){const i=n.getImageData(0,0,e,e),r=i.data;for(let s=0;s<r.length;s+=4){const a=(Math.random()-.5)*255*t*2;r[s]=Math.max(0,Math.min(255,r[s]+a)),r[s+1]=Math.max(0,Math.min(255,r[s+1]+a)),r[s+2]=Math.max(0,Math.min(255,r[s+2]+a))}n.putImageData(i,0,0)}function w0(){const e=Wn(512),t=e.getContext("2d");t.fillStyle="#c4a06a",t.fillRect(0,0,512,512);const i=48;for(let r=0;r<512;r+=i){const s=165+Math.random()*35,a=s-45+Math.random()*10,o=s-90+Math.random()*12,l=t.createLinearGradient(0,r,0,r+i);l.addColorStop(0,`rgb(${s+8},${a+5},${o})`),l.addColorStop(.5,`rgb(${s},${a},${o})`),l.addColorStop(1,`rgb(${s-12},${a-8},${o-4})`),t.fillStyle=l,t.fillRect(0,r+1,512,i-2),t.strokeStyle="rgba(60,35,12,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,r+i),t.lineTo(512,r+i),t.stroke();let c=Math.random()*80;for(;c<512;)t.strokeStyle="rgba(50,30,10,0.2)",t.beginPath(),t.moveTo(c,r+1),t.lineTo(c,r+i-1),t.stroke(),c+=90+Math.random()*120;for(let u=0;u<6;u++){const h=Math.random()*512;t.strokeStyle=`rgba(90,55,20,${.06+Math.random()*.08})`,t.lineWidth=1+Math.random(),t.beginPath(),t.moveTo(h,r+4),t.bezierCurveTo(h+30,r+16,h-20,r+28,h+40,r+i-4),t.stroke()}}return us(t,512,.04),Xn(e,3.5)}function A0(){const e=Wn(256),t=e.getContext("2d");t.fillStyle="#888",t.fillRect(0,0,256,256);for(let i=0;i<256;i+=32)t.fillStyle=`rgb(${100+Math.random()*40},${100+Math.random()*40},${100+Math.random()*40})`,t.fillRect(0,i,256,30);return Xn(e,3.5)}function R0(n="#d0d8e0"){const t=Wn(512),i=t.getContext("2d");i.fillStyle="#a8b0b8",i.fillRect(0,0,512,512);const r=64;for(let s=0;s<512;s+=r)for(let a=0;a<512;a+=r){const o=6-Math.random()*14;i.fillStyle=U0(n,o),i.fillRect(a+2,s+2,r-4,r-4),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(a+4,s+4,r*.4,3),i.strokeStyle="rgba(40,45,50,0.25)",i.strokeRect(a+1.5,s+1.5,r-3,r-3)}return us(i,512,.03),Xn(t,4)}function C0(){const e=Wn(512),t=e.getContext("2d");t.fillStyle="#c8d890",t.fillRect(0,0,512,512);for(let i=0;i<512;i+=3)t.strokeStyle=i%6===0?"rgba(80,90,35,0.22)":"rgba(100,110,50,0.1)",t.beginPath(),t.moveTo(0,i),t.lineTo(512,i),t.stroke();return t.fillStyle="#3a2818",t.fillRect(0,0,14,512),t.fillRect(498,0,14,512),us(t,512,.04),Xn(e,1.8)}function P0(){const e=Wn(512),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,512);i.addColorStop(0,"#f6f3ed"),i.addColorStop(1,"#ebe6dc"),t.fillStyle=i,t.fillRect(0,0,512,512);for(let r=0;r<4e3;r++){const s=Math.random()*512,a=Math.random()*512,o=.015+Math.random()*.03;t.fillStyle=Math.random()>.5?`rgba(0,0,0,${o})`:`rgba(255,255,255,${o})`,t.fillRect(s,a,1.5+Math.random()*2,1.5+Math.random()*2)}return Xn(e,2.2)}function L0(){const e=Wn(256),t=e.getContext("2d");t.fillStyle="#3d6b32",t.fillRect(0,0,256,256);for(let i=0;i<1200;i++){const r=40+Math.random()*50,s=90+Math.random()*70,a=30+Math.random()*40;t.fillStyle=`rgb(${r},${s},${a})`;const o=Math.random()*256,l=Math.random()*256;t.fillRect(o,l,1+Math.random()*2,2+Math.random()*4)}return Xn(e,14)}function I0(){const e=Wn(256),t=e.getContext("2d");t.fillStyle="#9a9a96",t.fillRect(0,0,256,256);for(let i=0;i<600;i++){const r=130+Math.random()*50;t.fillStyle=`rgb(${r},${r},${r-4})`,t.fillRect(Math.random()*256,Math.random()*256,2+Math.random()*4,2+Math.random()*4)}return us(t,256,.05),Xn(e,3)}function D0(){const e=Wn(512),t=e.getContext("2d");for(let i=0;i<512;i+=36){const r=110+Math.random()*40;t.fillStyle=`rgb(${r},${r-45},${r-75})`,t.fillRect(0,i,512,34),t.strokeStyle="rgba(40,25,10,0.4)",t.strokeRect(.5,i+.5,511,33);for(let s=0;s<3;s++){const a=Math.random()*512;t.strokeStyle="rgba(60,35,15,0.15)",t.beginPath(),t.moveTo(a,i+2),t.lineTo(a+40,i+32),t.stroke()}}return Xn(e,2.5)}function U0(n,e){const t=parseInt(n.slice(1),16);let i=(t>>16)+e,r=(t>>8&255)+e,s=(t&255)+e;return i=Math.max(0,Math.min(255,i)),r=Math.max(0,Math.min(255,r)),s=Math.max(0,Math.min(255,s)),`rgb(${i},${r},${s})`}function z0(n){const e=new Na(n),t=new ql;t.add(new Jl(14544639,8943462,1));const i=new ja(16773853,1.2);i.position.set(5,10,3),t.add(i);const r=new lr(20,16,12),s=new or({color:8892108,side:Ct});t.add(new ze(r,s));const a=new ze(new ss(30,24),new or({color:5929541}));a.rotation.x=-Math.PI/2,a.position.y=-1,t.add(a);const o=e.fromScene(t,.04);return e.dispose(),t.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),o.texture}let Vr=null;function N0(){return Vr||(Vr={wood:w0(),woodRough:A0(),tile:R0(),tatami:C0(),plaster:P0(),grass:L0(),concrete:I0(),deck:D0()},Vr)}const gc=.12;function Je(n,e={}){return new md({color:n,map:e.map||null,roughnessMap:e.roughnessMap||null,normalMap:e.normalMap||null,roughness:e.roughness??.75,metalness:e.metalness??.04,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side??wn,envMapIntensity:e.envMapIntensity??.65})}function tr(n,e,t,i,r,s,a){const o=t-n,l=i-e,c=Math.hypot(o,l);if(c<.01)return null;const u=new lt(c,r,gc),h=new ze(u,a);return h.position.set((n+t)/2,s+r/2,(e+i)/2),h.rotation.y=-Math.atan2(l,o),h.castShadow=!0,h.receiveShadow=!0,h}function F0(n,e){if(n.noFloor||n.name==="階段")return null;let t=1/0,i=-1/0,r=1/0,s=-1/0;for(const x of n.points)t=Math.min(t,x.x),i=Math.max(i,x.x),r=Math.min(r,x.z),s=Math.max(s,x.z);const a=Math.max(.05,i-t),o=Math.max(.05,s-r);let l=null,c=n.floor||n.color||"#e8e0d4",u=.72,h=.04;const d=n.name;d.includes("和室")?(l=e.tatami,c="#c5d48a",u=.92):d.includes("バス")||d.includes("洗面")||d.includes("トイレ")||d.includes("玄関")||d.includes("ポーチ")?(l=e.tile,c=d.includes("玄関")||d.includes("ポーチ")?"#c4b8a8":"#d8e4ee",u=.35,h=.08):d.includes("デッキ")||d.includes("バルコニー")?(l=d.includes("デッキ")?e.deck:e.concrete,c=d.includes("デッキ")?"#9a7340":"#b0b8c0",u=.8):(l=e.wood,c="#c9a87c",u=.55);const p=Je(c,{map:l,roughness:u,metalness:h,envMapIntensity:.55,side:Xt});l&&e.woodRough&&l===e.wood&&(p.roughnessMap=e.woodRough);const _=new ze(new lt(a,.05,o),p);return _.position.set((t+i)/2,.025,(r+s)/2),_.receiveShadow=!0,_.castShadow=!1,_}function O0(n){const e=new En;e.position.set(n.x,0,n.z),e.rotation.y=n.rot||0;const t=(i,r,s,a,o,l={})=>{const c=new ze(new lt(i,r,s),Je(o,l));return c.position.y=a,c.castShadow=!0,c.receiveShadow=!0,e.add(c),c};switch(n.type){case"bed":{t(n.w,n.h,n.d,n.h/2,"#6a7f98",{roughness:.65}),t(n.w*.96,.12,n.d*.92,n.h+.07,"#eef2f6",{roughness:.85}),t(n.w*.9,.08,n.d*.45,n.h+.12,"#d8e0e8",{roughness:.9}).position.z=n.d*.12,t(n.w*.95,.45,.12,n.h/2+.2,"#4a5f78",{roughness:.55}).position.z=-n.d/2+.06,t(n.w*.36,.14,.3,n.h+.18,"#f5f5f5",{roughness:.9}).position.set(-n.w*.2,0,-n.d*.32),t(n.w*.36,.14,.3,n.h+.18,"#f5f5f5",{roughness:.9}).position.set(n.w*.2,0,-n.d*.32);break}case"sofa":{t(n.w,.4,n.d,.24,"#6f8f62",{roughness:.8});const i=t(n.w,.52,.18,.6,"#5f7f52",{roughness:.75});i.position.z=-n.d/2+.09;const r=t(.18,.4,n.d*.92,.55,"#5f7f52",{roughness:.75});r.position.x=-n.w/2+.09;const s=t(.18,.4,n.d*.92,.55,"#5f7f52",{roughness:.75});s.position.x=n.w/2-.09,t(n.w*.42,.14,n.d*.55,.5,"#92b080",{roughness:.85}).position.x=-n.w*.18,t(n.w*.42,.14,n.d*.55,.5,"#92b080",{roughness:.85}).position.x=n.w*.18;break}case"table":{t(n.w,.05,n.d,n.h,"#c9a66b");const i=.055;for(const[r,s]of[[-n.w/2+.08,-n.d/2+.08],[n.w/2-.08,-n.d/2+.08],[-n.w/2+.08,n.d/2-.08],[n.w/2-.08,n.d/2-.08]]){const a=t(i,n.h-.02,i,(n.h-.02)/2,"#a8844a");a.position.x=r,a.position.z=s}break}case"desk":{t(n.w,.05,n.d,n.h,"#8b7355"),t(n.w,n.h-.05,.05,(n.h-.05)/2,"#7a6348").position.z=n.d/2-.03;break}case"chair":{t(n.w,.06,n.d,.45,"#a08050"),t(n.w*.9,.4,.06,.7,"#906f40").position.z=-n.d/2+.03;for(const[i,r]of[[-n.w/2+.05,-n.d/2+.05],[n.w/2-.05,-n.d/2+.05],[-n.w/2+.05,n.d/2-.05],[n.w/2-.05,n.d/2-.05]])t(.04,.42,.04,.21,"#806040").position.set(i,0,r);break}case"kitchen":{t(n.w,n.h,n.d,n.h/2,"#f4f4f2"),t(n.w+.04,.04,n.d+.04,n.h+.02,"#2c3338",{metalness:.45,roughness:.35});const i=t(n.w*.75,.03,.42,n.h+.05,"#1a1a1a");i.position.z=n.d*.12;for(let r=0;r<3;r++)t(.03,.12,.02,n.h*.45,"#888",{metalness:.6}).position.set(n.w/2-.01,0,-n.d/2+.3+r*.55);break}case"island":{t(n.w,n.h,n.d,n.h/2,"#f0ebe3"),t(n.w+.05,.04,n.d+.05,n.h+.02,"#3a3f44",{metalness:.3,roughness:.4});break}case"fridge":{t(n.w,n.h,n.d,n.h/2,"#eef1f4",{metalness:.35,roughness:.35}),t(.02,n.h*.28,.06,n.h*.6,"#999",{metalness:.5}).position.x=n.w/2,t(n.w*.9,.01,n.d*.95,n.h*.55,"#ccc");break}case"tv":{t(n.w,.35,n.d+.25,.22,"#3d3428"),t(n.w*.95,n.h*.72,.04,.55+n.h*.25,"#111"),t(n.w*.88,n.h*.62,.02,.55+n.h*.25,"#1a3355",{metalness:.2,roughness:.3});break}case"closet":{t(n.w,n.h,n.d,n.h/2,"#d8cbb5"),t(.01,n.h*.92,n.d*.95,n.h/2,"#c4b49a"),t(.02,.08,.02,n.h*.5,"#888").position.x=n.w/2;break}case"toilet":{t(n.w,n.h,n.d,n.h/2,"#f7f7f7"),t(n.w*.75,.32,.22,n.h+.14,"#eee").position.z=-n.d*.22;break}case"sink":{t(n.w,n.h*.72,n.d,n.h*.72/2,"#f2f2f0"),t(n.w*.92,.06,n.d*.72,n.h*.72+.03,"#c5d8e8"),t(n.w*.88,.75,.03,n.h+.55,"#a8c8e0",{metalness:.55,roughness:.15}).position.z=-n.d*.28;break}case"bath":{t(n.w,n.h,n.d,n.h/2,"#e4f0f6"),t(n.w*.88,.04,n.d*.78,n.h-.02,"#b5d4e8");break}case"plant":{t(n.w*.55,.25,n.d*.55,.12,"#a07050");const i=new ze(new fr(n.w*.45,n.h*.7,8),Je("#2d6a3e"));i.position.y=.25+n.h*.35,i.castShadow=!0,e.add(i);break}case"tatami":{t(n.w,.04,n.d,.03,"#c8d890");break}default:t(n.w||.5,n.h||.5,n.d||.5,(n.h||.5)/2,"#888")}return e}function ds(n,e,t,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.clearRect(0,0,256,64),s.fillStyle="rgba(15, 20, 25, 0.55)",s.beginPath();const a=12;s.moveTo(8+a,8),s.arcTo(248,8,248,56,a),s.arcTo(248,56,8,56,a),s.arcTo(8,56,8,8,a),s.arcTo(8,8,248,8,a),s.closePath(),s.fill(),s.font="bold 26px 'Hiragino Sans', 'Noto Sans JP', sans-serif",s.fillStyle="#f1f5f9",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,32);const o=new Kl(r);o.colorSpace=Rt;const l=new Zl({map:o,transparent:!0,depthWrite:!1,opacity:.88}),c=new hd(l);return c.position.set(e,t,i),c.scale.set(1.5,.38,1),c.userData.isLabel=!0,c}function B0(n,e,t,i){const r=e.exterior||{style:"apartment",facadeColor:"#e8e4dc"},s=ki(e),a=e.entrance||{x:(s.minX+s.maxX)/2,z:s.minZ};{const o=new ze(new pr(60,60),Je("#5a8a45",{map:t.grass,roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(s.cx,-.12,s.cz),o.receiveShadow=!0,n.add(o)}{const o=new ze(new lt(s.maxX-s.minX+.6,.12,s.maxZ-s.minZ+.6),Je("#8a8680",{roughness:1}));o.position.set(s.cx,-.05,s.cz),o.receiveShadow=!0,n.add(o)}{const l=Math.abs(e.spawn.z-a.z)+.5,c=new ze(new lt(1.6,.04,l),Je("#a0a098",{map:t.concrete,roughness:.95}));c.position.set(a.x,0,(e.spawn.z+a.z)/2),c.receiveShadow=!0,n.add(c);for(const u of[-.95,.95]){const h=new ze(new lt(.2,1.1,.2),Je("#6a6a68"));h.position.set(a.x+u,.55,e.spawn.z+.3),h.castShadow=!0,n.add(h)}}{const o=new ze(new lt(2.4,.08,1.6),Je("#b8b0a0",{map:t.tile,roughness:.9}));o.position.set(a.x,.02,a.z-.7),o.receiveShadow=!0,n.add(o)}{const o=new ze(new lt(.08,Wt-.05,.7),Je(r.accentColor||"#4a6a8a",{roughness:.55}));o.position.set(a.x+.45,(Wt-.05)/2,a.z+.08),o.rotation.y=.65,o.castShadow=!0,n.add(o);const l=Je("#3d3428");for(const[c,u,h,d,p,_]of[[-.48,Wt/2,0,.08,Wt,.14],[.48,Wt/2,0,.08,Wt,.14],[0,Wt+.04,0,1.05,.1,.14]]){const x=new ze(new lt(d,p,_),l);x.position.set(a.x+c,u,a.z+h),n.add(x)}}if(r.style==="apartment"){const o=r.floors||5,l=r.unitFloor||3,c=o*2.8,u=Je(r.facadeColor||"#e0dcd4",{roughness:.88}),h=new En;h.userData.hideInBird=!0;const d=s.maxX-s.minX+.35,p=s.maxZ-s.minZ+.35,_=(o-l)*2.8+.2,x=sn+.05,m=.2,f=[{x:s.cx,z:s.minZ-.12,sx:d,sz:m},{x:s.cx,z:s.maxZ+.12,sx:d,sz:m},{x:s.minX-.12,z:s.cz,sx:m,sz:p},{x:s.maxX+.12,z:s.cz,sx:m,sz:p}];for(const b of f){const T=new ze(new lt(b.sx,_,b.sz),u);T.position.set(b.x,x+_/2,b.z),T.castShadow=!0,h.add(T)}const R=new ze(new lt(d+.15,.15,p+.15),Je("#c8c4bc",{roughness:.95}));R.position.set(s.cx,x+_+.05,s.cz),h.add(R);const w=Je("#7eb8e0",{transparent:!0,opacity:.55,metalness:.2,roughness:.2});for(let b=l+1;b<=o;b++){const T=(b-l-1)*2.8+x+1.3;for(let E=0;E<3;E++){const C=new ze(new lt(.9,1,.06),w);C.position.set(s.minX+1.2+E*1.5,T,s.minZ-.16),h.add(C);const v=C.clone();v.position.set(s.minX+1.2+E*1.5,T,s.maxZ+.16),h.add(v)}}n.add(h);const g=ds(`${l}F 内覧中`,s.cx,c*.55,s.minZ-1.2);g.userData.hideInBird=!0,n.add(g)}else if((r.floors||1)<=1){const l=new ze(new fr(Math.max(s.maxX-s.minX,s.maxZ-s.minZ)*.7,1.6,4),Je(r.roofColor||"#4a5568",{roughness:.85}));l.position.set(s.cx,sn+1.6/2+.15,s.cz),l.rotation.y=Math.PI/4,l.castShadow=!0,l.userData.hideInBird=!0,n.add(l)}{const o=new ze(new Wi(.05,.06,2.4,8),Je("#444"));o.position.set(a.x+1.4,1.2,a.z-1.5),n.add(o);const l=new za(16771272,4,8,2);l.position.set(a.x+1.4,2.3,a.z-1.5),n.add(l);const c=new ze(new lr(.12,12,12),Je("#fff4d0",{roughness:.3,metalness:.1}));c.position.copy(l.position),n.add(c)}for(const[o,l]of[[a.x-2.2,a.z-1.8],[a.x+2.2,a.z-1.8],[s.minX-1.2,s.cz],[s.maxX+1.2,s.cz]]){const c=new ze(new lr(.55,10,10),Je("#3d7a3a",{roughness:1}));c.position.set(o,.4,l),c.scale.y=.75,c.castShadow=!0,n.add(c)}}function H0(n,e,t){const i=new En,r=14,s=n.maxX-n.minX,a=(n.highZ??n.maxZ)-(n.lowZ??n.minZ),o=a/r,l=e/r,c=Je("#8a6a45",{roughness:.55,metalness:.06,envMapIntensity:.5}),u=Je("#7a5e3a",{roughness:.7});for(let d=0;d<r;d++){const p=(n.lowZ??n.minZ)+(d+.5)*o,_=t+(d+.5)*l,x=new ze(new lt(s*.94,Math.max(.04,l*.35),o*.95),c);x.position.set((n.minX+n.maxX)/2,_+l*.2,p),x.castShadow=!0,x.receiveShadow=!0,i.add(x);const m=new ze(new lt(s*.94,l*.85,.03),u);m.position.set((n.minX+n.maxX)/2,_-l*.15,p-o*.4),m.castShadow=!0,i.add(m)}const h=Je("#4a5560",{metalness:.55,roughness:.35});for(const d of[n.minX+.04,n.maxX-.04]){for(let _=0;_<=r;_++){const x=_/r,m=(n.lowZ??n.minZ)+x*a,f=t+x*e+.9,R=new ze(new Wi(.025,.025,.95,8),h);R.position.set(d,f-.35,m),R.castShadow=!0,i.add(R)}const p=new ze(new lt(.05,.05,a),h);p.position.set(d,t+e*.55+.45,(n.minZ+n.maxZ)/2),p.rotation.x=Math.atan2(e,a),i.add(p)}return i.add(ds("階段",(n.minX+n.maxX)/2,t+e*.5,(n.minZ+n.maxZ)/2)),i}function k0(n,e,t,i,r){const s=new En;s.position.y=e;const a=n.wallHeight||sn;for(const l of n.rooms||[]){const c=F0(l,i);c&&s.add(c)}const o=(l,c)=>{r.push({a:{...l.a},b:{...l.b},h:c,baseY:e})};for(const l of n.walls||[]){const c=l.h??a,u=tr(l.a.x,l.a.z,l.b.x,l.b.z,c,0,c<1.5?t.rail:t.wall);if(u&&s.add(u),o(l,c),c>1.5){const h=tr(l.a.x,l.a.z,l.b.x,l.b.z,.08,0,t.baseboard);h&&(h.scale.z=1.4,s.add(h))}}for(const l of n.railWalls||[]){const c=l.h??1.05,u=tr(l.a.x,l.a.z,l.b.x,l.b.z,c,0,t.rail);u&&s.add(u),o(l,c)}for(const l of n.doors||[]){const c=l.b.x-l.a.x,u=l.b.z-l.a.z,h=Math.hypot(c,u),d=(l.a.x+l.b.x)/2,p=(l.a.z+l.b.z)/2,_=-Math.atan2(u,c),x=new ze(new lt(h+.1,.12,gc+.04),t.doorFrame);x.position.set(d,Wt+.06,p),x.rotation.y=_,x.castShadow=!0,s.add(x);const m=tr(l.a.x,l.a.z,l.b.x,l.b.z,a-Wt-.12,Wt+.12,t.wall);if(m&&s.add(m),!l.exterior&&l.label!=="バルコニー"&&l.label!=="デッキ"&&l.label!=="階段"){const f=new ze(new lt(.04,Wt-.05,Math.max(.2,h*.55)),Je("#d2c0a0",{roughness:.72})),R=-u/(h||1),w=c/(h||1);f.position.set(l.a.x+c*.15+R*.06,(Wt-.05)/2,l.a.z+u*.15+w*.06),f.rotation.y=_+.55,f.castShadow=!0,s.add(f)}}for(const l of n.windows||[]){const c=l.h??1.2,u=l.sill??.9,h=tr(l.a.x,l.a.z,l.b.x,l.b.z,c,u,t.glass);h&&(h.castShadow=!1,s.add(h))}{const l=ki(n),c=new ze(new lt(l.maxX-l.minX+.4,.06,l.maxZ-l.minZ+.4),t.ceiling);c.position.set(l.cx,a,l.cz),c.receiveShadow=!0,c.userData.isCeiling=!0,s.add(c)}for(const l of n.furniture||[])s.add(O0(l));for(const l of n.rooms||[]){if(["収納","SIC","廊下","板の間","パントリー","WIC","階段"].includes(l.name))continue;const c=l.points.reduce((m,f)=>m+f.x,0)/l.points.length,u=l.points.reduce((m,f)=>m+f.z,0)/l.points.length,h=l.name.includes("LD")||l.name==="リビング・ダイニング"||l.name==="LDK",d=new za(16773341,h?14:7,h?9:6,1.8);d.position.set(c,a-.25,u),s.add(d);const p=new za(15266047,h?3:1.5,5,2);p.position.set(c+.8,1.4,u-.5),s.add(p);const _=new ze(new Wi(.22,.28,.06,20),Je("#fff8f0",{roughness:.35,metalness:.15,envMapIntensity:.8}));_.position.set(c,a-.04,u),_.userData.isCeiling=!0,s.add(_);const x=new ze(new ss(.35,24),new or({color:16774368,transparent:!0,opacity:.35}));x.rotation.x=-Math.PI/2,x.position.set(c,a-.08,u),x.userData.isCeiling=!0,s.add(x),s.add(ds(l.name,c,2.05,u))}return s}function V0(n){var u,h;const e=Qa(n),t=new En,i=[],r=N0(),s=e.floorHeight||li,a={wall:Je("#f3efe8",{map:r.plaster,roughness:.88,envMapIntensity:.35,side:Xt}),rail:Je("#5a6570",{metalness:.45,roughness:.4}),doorFrame:Je("#6b5344",{roughness:.55,metalness:.08}),glass:Je("#b8d4ec",{roughness:.08,metalness:.25,transparent:!0,opacity:.28,side:Xt,envMapIntensity:1.2}),ceiling:Je("#f7f5f2",{roughness:.95}),baseboard:Je("#e8e2d8",{roughness:.7})},o={...e.levels[0],spawn:e.spawn,entrance:e.entrance,exterior:{...e.exterior,floors:((u=e.exterior)==null?void 0:u.floors)||e.levels.length}};B0(t,o,r);const l=new Set;for(const d of e.levels){const p=(d.level||0)*s,_=k0(d,p,a,r,i);t.add(_);for(const m of d.stairs||[]){if(l.has(m.id))continue;const f=Math.min(m.fromLevel,m.toLevel);(d.level||0)===f&&(t.add(H0(m,s,p)),l.add(m.id||`${m.minX}-${m.minZ}`))}const x=ki(d);t.add(ds(d.name||`${(d.level||0)+1}F`,x.minX-.8,p+1.5,x.cz))}if(((h=e.exterior)==null?void 0:h.style)==="house"&&e.levels.length>1){const d=e.levels[e.levels.length-1],p=ki(d),_=(d.level||0)*s+(d.wallHeight||sn),x=new ze(new fr(Math.max(p.maxX-p.minX,p.maxZ-p.minZ)*.7,1.6,4),Je(e.exterior.roofColor||"#4a5568",{roughness:.85}));x.position.set(p.cx,_+.9,p.cz),x.rotation.y=Math.PI/4,x.castShadow=!0,x.userData.hideInBird=!0,t.add(x)}const c=oc(e);return{group:t,colliders:i,bounds:c,building:e}}function G0(n,e,t,i=""){const r=n.getContext("2d"),s=n.width,a=n.height;r.clearRect(0,0,s,a);const o=(e==null?void 0:e.rooms)||[];if(!o.length){r.fillStyle="#1e293b",r.fillRect(0,0,s,a);return}let l=1/0,c=-1/0,u=1/0,h=-1/0;for(const v of o)for(const M of v.points)l=Math.min(l,M.x),c=Math.max(c,M.x),u=Math.min(u,M.z),h=Math.max(h,M.z);u=Math.min(u,t.z-1),h=Math.max(h,t.z+1),l=Math.min(l,t.x-1),c=Math.max(c,t.x+1);const d=.5;l-=d,c+=d,u-=d,h+=d;const p=c-l,_=h-u,x=Math.min((s-14)/p,(a-14)/_),m=(s-p*x)/2,f=(a-_*x)/2,R=v=>m+(v-l)*x,w=v=>f+(h-v)*x;r.fillStyle="#1e293b",r.fillRect(0,0,s,a),r.fillStyle="rgba(74, 122, 58, 0.3)",r.fillRect(0,0,s,a);for(const v of o)r.beginPath(),v.points.forEach((M,P)=>{P===0?r.moveTo(R(M.x),w(M.z)):r.lineTo(R(M.x),w(M.z))}),r.closePath(),r.fillStyle=v.floor||v.color||"#334155",r.globalAlpha=.9,r.fill(),r.globalAlpha=1,r.strokeStyle="rgba(255,255,255,0.12)",r.lineWidth=1,r.stroke();r.strokeStyle="rgba(20,20,20,0.65)",r.lineWidth=1.8;for(const v of e.walls||[])r.beginPath(),r.moveTo(R(v.a.x),w(v.a.z)),r.lineTo(R(v.b.x),w(v.b.z)),r.stroke();for(const v of e.stairs||[])r.fillStyle="rgba(251, 191, 36, 0.35)",r.fillRect(R(v.minX),w(v.maxZ),(v.maxX-v.minX)*x,(v.maxZ-v.minZ)*x);const g=R(t.x),b=w(t.z);r.fillStyle="#3b82f6",r.beginPath(),r.arc(g,b,5,0,Math.PI*2),r.fill(),r.strokeStyle="#fff",r.lineWidth=1.5,r.stroke();const T=11,E=g+Math.sin(t.yaw)*T,C=b-Math.cos(t.yaw)*T;r.strokeStyle="#60a5fa",r.lineWidth=2,r.beginPath(),r.moveTo(g,b),r.lineTo(E,C),r.stroke(),i&&(r.fillStyle="rgba(15,20,25,0.75)",r.fillRect(4,4,36,16),r.fillStyle="#e2e8f0",r.font="bold 11px sans-serif",r.fillText(i,10,15))}function W0(n,e){return Math.hypot(n.x-e.x,n.y-e.y)}function _c(n,e=8){const t=[];for(const r of n)t.push(r.a,r.b);const i=[];for(const r of t){let s=null;for(const a of i)if(W0(r,a)<=e){s=a;break}if(s)s.x=(s.x*s.n+r.x)/(s.n+1),s.y=(s.y*s.n+r.y)/(s.n+1),s.n++,r._c=s;else{const a={x:r.x,y:r.y,n:1};r._c=a,i.push(a)}}return n.map(r=>({a:{x:r.a._c.x,y:r.a._c.y},b:{x:r.b._c.x,y:r.b._c.y},door:!!r.door}))}function xc(n,e=12){const t=e*Math.PI/180;return n.map(i=>{const r=i.b.x-i.a.x,s=i.b.y-i.a.y,a=Math.atan2(Math.abs(s),Math.abs(r));if(a<t){const o=(i.a.y+i.b.y)/2;return{...i,a:{x:i.a.x,y:o},b:{x:i.b.x,y:o}}}if(Math.PI/2-a<t){const o=(i.a.x+i.b.x)/2;return{...i,a:{x:o,y:i.a.y},b:{x:o,y:i.b.y}}}return i})}function X0(n,e,t,i,r){n=Math.round(n),e=Math.round(e),t=Math.round(t),i=Math.round(i);const s=Math.abs(t-n),a=Math.abs(i-e),o=n<t?1:-1,l=e<i?1:-1;let c=s-a;for(;r(n,e),!(n===t&&e===i);){const u=2*c;u>-a&&(c-=a,n+=o),u<s&&(c+=s,e+=l)}}function vc(n,e={}){const t=e.cellSize||6,i=e.minAreaCells||80;let r=xc(n);r=_c(r,t*1.2);let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const g of r)for(const b of[g.a,g.b])s=Math.min(s,b.x),a=Math.max(a,b.x),o=Math.min(o,b.y),l=Math.max(l,b.y);const c=t*3;s-=c,a+=c,o-=c,l+=c;const u=Math.ceil((a-s)/t)+1,h=Math.ceil((l-o)/t)+1;if(u*h>2e6)return vc(n,{...e,cellSize:t*2});const d=new Uint8Array(u*h),p=(g,b)=>b*u+g,_=(g,b)=>({cx:Math.round((g-s)/t),cy:Math.round((b-o)/t)});for(const g of r){const b=_(g.a.x,g.a.y),T=_(g.b.x,g.b.y),E=g.door?2:1;X0(b.cx,b.cy,T.cx,T.cy,(C,v)=>{if(C>=0&&v>=0&&C<u&&v<h&&E===1){d[p(C,v)]=1;for(const[M,P]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const N=C+M,O=v+P;N>=0&&O>=0&&N<u&&O<h&&(d[p(N,O)]=1)}}})}for(let g=0;g<u;g++)d[p(g,0)]=1,d[p(g,h-1)]=1;for(let g=0;g<h;g++)d[p(0,g)]=1,d[p(u-1,g)]=1;const x=new Int32Array(u*h);let m=0;const f=[];for(let g=1;g<h-1;g++)for(let b=1;b<u-1;b++){if(d[p(b,g)]===1||x[p(b,g)]!==0)continue;m++;const T=[[b,g]];x[p(b,g)]=m;let E=b,C=b,v=g,M=g,P=0;const N=[];for(;T.length;){const[G,q]=T.pop();P++,N.push([G,q]),E=Math.min(E,G),C=Math.max(C,G),v=Math.min(v,q),M=Math.max(M,q);for(const[W,K]of[[1,0],[-1,0],[0,1],[0,-1]]){const k=G+W,ne=q+K;k<0||ne<0||k>=u||ne>=h||d[p(k,ne)]!==1&&x[p(k,ne)]===0&&(x[p(k,ne)]=m,T.push([k,ne]))}}const O=E<=1||v<=1||C>=u-2||M>=h-2;P>=i&&!O&&f.push({label:m,count:P,minCX:E,maxCX:C,minCY:v,maxCY:M,cells:N})}f.sort((g,b)=>b.count-g.count);const R=["#efe6d8","#e8dfd2","#dce8f0","#d0e8dc","#e8e0d4","#f0ebe3","#d8e8c8","#c8d0d8","#ddd5c8","#f5efe4"];return{rooms:f.map((g,b)=>{const T=s+g.minCX*t,E=o+g.minCY*t,C=s+(g.maxCX+1)*t,v=o+(g.maxCY+1)*t,M=g.count*t*t;return{name:Y0(b,g,f),color:R[b%R.length],floor:R[b%R.length],pointsPx:[{x:T,y:E},{x:C,y:E},{x:C,y:v},{x:T,y:v}],areaPx:M,_bbox:{x0:T,y0:E,x1:C,y1:v}}}),walls:r,bounds:{minX:s,maxX:a,minY:o,maxY:l},cellSize:t,gridMeta:{W:u,H:h}}}function Y0(n,e,t){if(n===0)return"LDK";const i=e.maxCX-e.minCX,r=e.maxCY-e.minCY,s=i/(r||1),a=e.count;return a<t[0].count*.12?s>1.4||s<.7?"廊下":`収納${n}`:a<t[0].count*.25?`水回り${n}`:`洋室${n}`}function q0(n,e){const t=e.scaleMPerPx,i=e.maxY,r=(m,f)=>({x:m*t,z:(i-f)*t}),s=n.walls.filter(m=>!m.door).map(m=>({a:r(m.a.x,m.a.y),b:r(m.b.x,m.b.y)})),a=(e.doors||n.walls.filter(m=>m.door)).map(m=>({a:r(m.a.x,m.a.y),b:r(m.b.x,m.b.y),label:"ドア",exterior:!1})),o=n.rooms.map(m=>({name:m.name,color:m.color,floor:m.floor,points:m.pointsPx.map(f=>r(f.x,f.y))}));let l=1/0,c=-1/0,u=1/0,h=-1/0;for(const m of o)for(const f of m.points)l=Math.min(l,f.x),c=Math.max(c,f.x),u=Math.min(u,f.z),h=Math.max(h,f.z);isFinite(l)||(l=0,c=5,u=0,h=5);const d=(l+c)/2,p=.9;s.push({a:{x:l,z:u},b:{x:d-p/2,z:u}},{a:{x:d+p/2,z:u},b:{x:c,z:u}}),a.unshift({a:{x:d-p/2,z:u},b:{x:d+p/2,z:u},label:"玄関",exterior:!0}),s.length>=3,o.push({name:"ポーチ",color:"#c0b8a8",floor:"#b0a898",points:[{x:d-1.3,z:u-1.6},{x:d+1.3,z:u-1.6},{x:d+1.3,z:u},{x:d-1.3,z:u}]});const _=o[0];let x=[];if(_){const m=_.points.reduce((R,w)=>R+w.x,0)/_.points.length,f=_.points.reduce((R,w)=>R+w.z,0)/_.points.length;x=[{type:"sofa",x:m-.8,z:f,rot:0,w:1.8,d:.8,h:.75},{type:"table",x:m+.9,z:f,rot:0,w:.9,d:.9,h:.4}]}return{id:`traced-${Date.now()}`,title:e.name||"トレース物件",wallHeight:2.45,entrance:{x:d,z:u,facing:Math.PI},spawn:{x:d,z:u-2.2,yaw:0},rooms:o,walls:s,doors:a,windows:[],furniture:x,exterior:{style:"house",floors:1,unitFloor:1,facadeColor:"#f0ebe3",accentColor:"#5c4033",roofColor:"#4a5568"}}}let J={image:null,imageUrl:null,walls:[],drawing:!1,start:null,mode:"wall",scaleMPerPx:.02,calibratePts:[],name:"アップロード物件",segPreview:null};function Z0(n){n.innerHTML=`
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
  `;const e=n.querySelector("#tracer-file"),t=n.querySelector("#tracer-canvas"),i=n.querySelector("#tracer-empty"),r=n.querySelector("#tracer-undo"),s=n.querySelector("#tracer-clear"),a=n.querySelector("#tracer-build"),o=n.querySelector("#tracer-segment"),l=n.querySelector("#tracer-status"),c=n.querySelector("#tracer-rooms-list"),u=n.querySelector("#tracer-name"),h=n.querySelector("#scale-display"),d=t.getContext("2d");let p=1;function _(g){J.mode=g,J.calibratePts=[],n.querySelectorAll(".mode-btn").forEach(b=>{b.classList.toggle("active",b.dataset.mode===g)}),g==="calibrate"?l.textContent="スケール校正: 図面上の既知寸法の一端をクリック → もう一端をクリック → 実長(m)を入力":g==="door"?l.textContent="ドア開口モード: 壁の開口部をドラッグで指定（通過可能）":l.textContent="壁モード: ドラッグで壁線。ほぼ水平・垂直は自動スナップ。端点も吸着します。"}n.querySelectorAll(".mode-btn").forEach(g=>{g.addEventListener("click",()=>_(g.dataset.mode))});function x(g){const b=12/p;let T=null,E=b;for(const C of J.walls)for(const v of[C.a,C.b]){const M=Math.hypot(g.x-v.x,g.y-v.y);M<E&&(E=M,T=v)}return T?{x:T.x,y:T.y}:g}function m(g,b){const T=b.x-g.x,E=b.y-g.y,C=Math.atan2(Math.abs(E),Math.abs(T)),v=12*Math.PI/180;return C<v?{x:b.x,y:g.y}:Math.PI/2-C<v?{x:g.x,y:b.y}:b}function f(g=null){var T;if(!J.image)return;if(p=Math.min(960,n.clientWidth-32||800)/J.image.width,t.width=J.image.width*p,t.height=J.image.height*p,t.style.display="block",i.style.display="none",d.setTransform(p,0,0,p,0,0),d.drawImage(J.image,0,0),(T=J.segPreview)!=null&&T.rooms)for(const E of J.segPreview.rooms){d.fillStyle=E.color+"99";const C=E.pointsPx;d.beginPath(),C.forEach((P,N)=>N===0?d.moveTo(P.x,P.y):d.lineTo(P.x,P.y)),d.closePath(),d.fill(),d.fillStyle="#0f172a",d.font=`${14/p}px sans-serif`;const v=C.reduce((P,N)=>P+N.x,0)/C.length,M=C.reduce((P,N)=>P+N.y,0)/C.length;d.fillText(E.name,v-20/p,M)}d.lineCap="round",d.lineWidth=3/p,J.walls.forEach(E=>{d.strokeStyle=E.door?"#22c55e":"#ef4444",E.door?d.setLineDash([8/p,6/p]):d.setLineDash([]),d.beginPath(),d.moveTo(E.a.x,E.a.y),d.lineTo(E.b.x,E.b.y),d.stroke(),d.setLineDash([]),d.fillStyle=E.door?"#16a34a":"#dc2626";for(const C of[E.a,E.b])d.beginPath(),d.arc(C.x,C.y,4/p,0,Math.PI*2),d.fill()}),J.drawing&&J.start&&g&&(d.strokeStyle=J.mode==="door"?"#4ade80":"#60a5fa",d.lineWidth=3/p,d.setLineDash([6/p,4/p]),d.beginPath(),d.moveTo(J.start.x,J.start.y),d.lineTo(g.x,g.y),d.stroke(),d.setLineDash([]));for(const E of J.calibratePts)d.fillStyle="#fbbf24",d.beginPath(),d.arc(E.x,E.y,6/p,0,Math.PI*2),d.fill();J.calibratePts.length===2&&(d.strokeStyle="#fbbf24",d.lineWidth=2/p,d.beginPath(),d.moveTo(J.calibratePts[0].x,J.calibratePts[0].y),d.lineTo(J.calibratePts[1].x,J.calibratePts[1].y),d.stroke()),r.disabled=J.walls.length===0,s.disabled=J.walls.length===0,o.disabled=J.walls.length<3,a.disabled=J.walls.length<3,h.textContent=String(Math.round(1/J.scaleMPerPx))}function R(g){var M,P,N,O;const b=t.getBoundingClientRect(),T=J.image.width/t.width,E=J.image.height/t.height,C=g.clientX??((P=(M=g.touches)==null?void 0:M[0])==null?void 0:P.clientX),v=g.clientY??((O=(N=g.touches)==null?void 0:N[0])==null?void 0:O.clientY);return{x:(C-b.left)*T,y:(v-b.top)*E}}e.addEventListener("change",g=>{var E;const b=(E=g.target.files)==null?void 0:E[0];if(!b)return;J.imageUrl&&URL.revokeObjectURL(J.imageUrl),J.imageUrl=URL.createObjectURL(b),J.name=b.name.replace(/\.[^.]+$/,""),u.value=J.name,J.walls=[],J.segPreview=null,c.innerHTML="";const T=new Image;T.onload=()=>{J.image=T,f()},T.src=J.imageUrl}),t.addEventListener("mousedown",g=>{if(J.image){if(J.mode==="calibrate"){const b=x(R(g));if(J.calibratePts.push(b),J.calibratePts.length>=2){const T=J.calibratePts[0],E=J.calibratePts[1],C=Math.hypot(E.x-T.x,E.y-T.y),v=prompt(`この線分の実長（メートル）を入力
（図上 ${C.toFixed(0)} px）`,"1.8");v&&Number(v)>0&&(J.scaleMPerPx=Number(v)/C,l.textContent=`スケール設定: ${Math.round(1/J.scaleMPerPx)} px = 1m（${Number(v)}m / ${C.toFixed(0)}px）`),J.calibratePts=[]}f();return}J.drawing=!0,J.start=x(R(g))}}),t.addEventListener("mousemove",g=>{if(!J.drawing||!J.start)return;let b=R(g);b=m(J.start,b),b=x(b),f(b)}),t.addEventListener("mouseup",g=>{if(!J.drawing||!J.start)return;let b=R(g);b=m(J.start,b),b=x(b),Math.hypot(b.x-J.start.x,b.y-J.start.y)>6&&(J.walls.push({a:{x:J.start.x,y:J.start.y},b:{x:b.x,y:b.y},door:J.mode==="door"}),J.segPreview=null),J.drawing=!1,J.start=null,f()}),t.addEventListener("touchstart",g=>{g.preventDefault(),t.dispatchEvent(new MouseEvent("mousedown",{clientX:g.touches[0].clientX,clientY:g.touches[0].clientY}))},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault(),t.dispatchEvent(new MouseEvent("mousemove",{clientX:g.touches[0].clientX,clientY:g.touches[0].clientY}))},{passive:!1}),t.addEventListener("touchend",g=>{const b=g.changedTouches[0];t.dispatchEvent(new MouseEvent("mouseup",{clientX:b.clientX,clientY:b.clientY}))},{passive:!1}),r.addEventListener("click",()=>{J.walls.pop(),J.segPreview=null,c.innerHTML="",f()}),s.addEventListener("click",()=>{J.walls=[],J.segPreview=null,c.innerHTML="",f()});function w(){if(J.walls.length<3)return null;let g=xc(J.walls);g=_c(g,10);const b=vc(g,{cellSize:6,minAreaCells:60});return J.segPreview=b,c.innerHTML=`<p class="rooms-count">${b.rooms.length} 部屋を検出</p>`+b.rooms.map((T,E)=>`
      <label class="room-rename">
        <span class="swatch" style="background:${T.color}"></span>
        <input data-idx="${E}" value="${T.name}" />
      </label>`).join(""),c.querySelectorAll("input").forEach(T=>{T.addEventListener("change",()=>{const E=Number(T.dataset.idx);J.segPreview.rooms[E]&&(J.segPreview.rooms[E].name=T.value||`部屋${E+1}`),f()})}),l.textContent=`${b.rooms.length} 部屋を分割しました。名前を編集してから「3D化して内覧」を押してください。`,f(),b}return o.addEventListener("click",()=>w()),u.addEventListener("change",()=>{J.name=u.value||J.name}),{onBuild(g){a.addEventListener("click",()=>{var E;J.segPreview||w(),(!J.segPreview||J.segPreview.rooms.length===0)&&(l.textContent="部屋を検出できませんでした。外周の壁が閉じているか確認してください。"),J.name=u.value||J.name;const b=((E=J.image)==null?void 0:E.height)||1e3,T=q0(J.segPreview||{rooms:[],walls:J.walls},{scaleMPerPx:J.scaleMPerPx,maxY:b,name:J.name,doors:J.walls.filter(C=>C.door)});if(J.walls.length>=3){const C=J.scaleMPerPx,v=(P,N)=>({x:P*C,z:(b-N)*C});T.walls=[...J.walls.filter(P=>!P.door).map(P=>({a:v(P.a.x,P.a.y),b:v(P.b.x,P.b.y)})),...T.walls.filter(P=>!0)];const M=T.entrance;T.walls=J.walls.filter(P=>!P.door).map(P=>({a:v(P.a.x,P.a.y),b:v(P.b.x,P.b.y)})),M&&(T.doors=[{a:{x:M.x-.45,z:M.z},b:{x:M.x+.45,z:M.z},label:"玄関",exterior:!0},...J.walls.filter(P=>P.door).map(P=>({a:v(P.a.x,P.a.y),b:v(P.b.x,P.b.y),label:"ドア"}))])}g(T,J)})}}}function $0(n){const e=document.createElement("div");e.id="mobile-controls",e.innerHTML=`
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
  `,n.appendChild(e);const t={moveX:0,moveZ:0,lookX:0,lookY:0,lookDeltaX:0,lookDeltaY:0,active:!1},i=e.querySelector("#m-zone-move"),r=e.querySelector("#m-zone-look"),s=e.querySelector("#joy-move-float"),a=e.querySelector(".joy-knob"),o=56;let l=null,c=null,u=0,h=0,d=0,p=0;function _(T){e.classList.toggle("visible",T),t.active=T,document.body.classList.toggle("is-mobile-tour",T)}function x(){return"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(max-width: 900px)").matches}function m(T,E){if(T.changedTouches){for(const C of T.changedTouches)if(C.identifier===E)return C}if(T.touches){for(const C of T.touches)if(C.identifier===E)return C}return null}i.addEventListener("touchstart",T=>{if(l!==null)return;const E=T.changedTouches[0];T.preventDefault(),l=E.identifier,d=E.clientX,p=E.clientY,s.classList.remove("hidden"),s.style.left=`${d}px`,s.style.top=`${p}px`,a.style.transform="translate(-50%, -50%)",t.moveX=0,t.moveZ=0,i.classList.add("active")},{passive:!1}),window.addEventListener("touchmove",T=>{if(l!==null){const E=m(T,l);if(E){T.preventDefault();let C=E.clientX-d,v=E.clientY-p;const M=Math.hypot(C,v);if(M>o){C=C/o*o,v=v/o*o;const P=M-o;d+=(E.clientX-d)*.08*(P/M),p+=(E.clientY-p)*.08*(P/M),s.style.left=`${d}px`,s.style.top=`${p}px`,C=E.clientX-d,v=E.clientY-p;const N=Math.hypot(C,v)||1;N>o&&(C=C/N*o,v=v/N*o)}a.style.transform=`translate(calc(-50% + ${C}px), calc(-50% + ${v}px))`,t.moveX=C/o,t.moveZ=-v/o}}if(c!==null){const E=m(T,c);if(E){T.preventDefault();const C=E.clientX-u,v=E.clientY-h;u=E.clientX,h=E.clientY,t.lookDeltaX+=C,t.lookDeltaY+=v}}},{passive:!1});function f(T){if(l!==null){if(T.changedTouches){let E=!1;for(const C of T.changedTouches)C.identifier===l&&(E=!0);if(!E)return}l=null,t.moveX=0,t.moveZ=0,s.classList.add("hidden"),i.classList.remove("active")}}function R(T){if(c!==null)return;const E=T.changedTouches?T.changedTouches[0]:T;T.changedTouches&&T.preventDefault(),c=E.identifier??"mouse",u=E.clientX,h=E.clientY,r.classList.add("active")}function w(T){if(c!==null){if(T.changedTouches){let E=!1;for(const C of T.changedTouches)C.identifier===c&&(E=!0);if(!E&&c!=="mouse")return}c=null,r.classList.remove("active")}}r.addEventListener("touchstart",R,{passive:!1}),r.addEventListener("touchend",w),r.addEventListener("touchcancel",w),window.addEventListener("touchend",T=>{f(T),w(T)}),window.addEventListener("touchcancel",T=>{f(T),w(T)}),window.addEventListener("orientationchange",()=>{t.moveX=t.moveZ=0,t.lookDeltaX=t.lookDeltaY=0,l=c=null,s.classList.add("hidden")});function g(){const T=t.lookDeltaX,E=t.lookDeltaY;return t.lookDeltaX=0,t.lookDeltaY=0,{dx:T,dy:E}}function b(T){T.addEventListener("touchstart",E=>{if(t.active)for(const C of E.changedTouches)C.clientX<window.innerWidth*.42||c===null&&(E.preventDefault(),c=C.identifier,u=C.clientX,h=C.clientY)},{passive:!1})}return{state:t,setVisible:_,isTouchDevice:x,showIfTouch(){_(x())},hide(){_(!1),document.body.classList.remove("is-mobile-tour"),t.moveX=t.moveZ=0,t.lookDeltaX=t.lookDeltaY=0},consumeLookDelta:g,bindCanvasLook:b,el:e}}function K0(n){if(!n)return"";if(/^https?:\/\//i.test(n))return n;const e="/floorplan-walk/",t=String(n).replace(/^\//,"");return e.endsWith("/")?e+t:`${e}/${t}`}function Zs(n,e,t=0){var g;if(!n||!e)return;const i=Qa(e),r=i.levels[t]||i.levels[0]||e,s=r.rooms||[],a=r.walls||[];if(!s.length&&!a.length)return;const o=Math.min(window.devicePixelRatio||1,2),l=n.clientWidth||320,c=n.clientHeight||240;n.width=Math.floor(l*o),n.height=Math.floor(c*o);const u=n.getContext("2d");u.setTransform(o,0,0,o,0,0),u.clearRect(0,0,l,c),u.fillStyle="#f8fafc",u.fillRect(0,0,l,c);const h=ki(r),d=16,p=h.maxX-h.minX||1,_=h.maxZ-h.minZ||1,x=Math.min((l-d*2)/p,(c-d*2)/_),m=(l-p*x)/2,f=(c-_*x)/2,R=b=>m+(b-h.minX)*x,w=b=>f+(h.maxZ-b)*x;for(const b of s)if((g=b.points)!=null&&g.length&&(u.beginPath(),b.points.forEach((T,E)=>{E===0?u.moveTo(R(T.x),w(T.z)):u.lineTo(R(T.x),w(T.z))}),u.closePath(),u.fillStyle=b.floor||b.color||"#e8e0d4",u.globalAlpha=.95,u.fill(),u.globalAlpha=1,u.strokeStyle="rgba(30,40,50,0.12)",u.lineWidth=1,u.stroke(),b.name&&b.name!=="階段"&&b.points.length>=3)){const T=b.points.reduce((C,v)=>C+v.x,0)/b.points.length,E=b.points.reduce((C,v)=>C+v.z,0)/b.points.length;u.fillStyle="rgba(30,40,50,0.75)",u.font=`bold ${Math.max(9,Math.min(12,x*.35))}px "Hiragino Sans", "Noto Sans JP", sans-serif`,u.textAlign="center",u.textBaseline="middle",u.fillText(b.name,R(T),w(E))}u.strokeStyle="rgba(25, 30, 40, 0.85)",u.lineWidth=Math.max(2,x*.08),u.lineCap="square";for(const b of a)(b.h??3)<1.2||(u.beginPath(),u.moveTo(R(b.a.x),w(b.a.z)),u.lineTo(R(b.b.x),w(b.b.z)),u.stroke());for(const b of r.stairs||[]){u.fillStyle="rgba(251, 191, 36, 0.35)";const T=R(b.minX),E=w(b.maxZ),C=(b.maxX-b.minX)*x,v=(b.maxZ-b.minZ)*x;u.fillRect(T,E,C,v)}u.strokeStyle="rgba(15, 23, 42, 0.12)",u.lineWidth=1,u.strokeRect(.5,.5,l-1,c-1)}function j0(n,e){if(!n)return;const i=Qa(e).levels||[];n.innerHTML=`
    <div class="plan-preview-head">
      <h4>間取り図</h4>
      <div class="plan-level-tabs" id="plan-level-tabs"></div>
    </div>
    <canvas id="detail-plan-canvas" class="detail-plan-canvas" width="640" height="400"></canvas>
    <p class="plan-preview-note">※ 3Dデータから生成した図です。実寸は内覧で体感してください。</p>
  `;const r=n.querySelector("#plan-level-tabs"),s=n.querySelector("#detail-plan-canvas");let a=0;i.length>1&&(r.innerHTML=i.map((l,c)=>`<button type="button" class="plan-tab ${c===0?"active":""}" data-i="${c}">${l.name||`${c+1}F`}</button>`).join(""),r.querySelectorAll(".plan-tab").forEach(l=>{l.addEventListener("click",()=>{a=Number(l.dataset.i),r.querySelectorAll(".plan-tab").forEach(c=>c.classList.remove("active")),l.classList.add("active"),Zs(s,e,a)})})),requestAnimationFrame(()=>{Zs(s,e,a)}),new ResizeObserver(()=>Zs(s,e,a)).observe(n)}const Hn=document.getElementById("c"),Mc=document.getElementById("screen-catalog"),Sc=document.getElementById("screen-detail"),yc=document.getElementById("screen-tracer"),Ec=document.getElementById("screen-register"),$s=document.getElementById("catalog-grid"),bc=document.getElementById("hud"),J0=document.getElementById("room-label"),Q0=document.getElementById("floor-badge"),eg=document.getElementById("minimap"),cr=document.getElementById("view-toggle"),kn=document.getElementById("click-hint"),hs=document.getElementById("maps-overlay"),Tc=document.getElementById("overlay-iframe"),tg=document.getElementById("overlay-address"),Vn=document.getElementById("register-form");let Qe=null,pt=null,Oa=[],Nn=null,Ft=!1,$r="map",Fn=0;const Ot="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches||window.innerWidth<900;let Mt;try{Mt=new a0({canvas:Hn,antialias:!Ot,powerPreference:Ot?"low-power":"high-performance",alpha:!1,failIfMajorPerformanceCaveat:!1})}catch(n){console.error(n),document.body.insertAdjacentHTML("afterbegin",'<div class="webgl-error">この端末では3D表示に対応していません。間取り図は物件詳細で確認できます。</div>'),Mt=null}Mt&&(Mt.setPixelRatio(Math.min(window.devicePixelRatio||1,Ot?1.5:2)),Mt.setSize(window.innerWidth,window.innerHeight),Mt.shadowMap.enabled=!Ot,Mt.shadowMap.type=Sl,Mt.outputColorSpace=Rt,Mt.toneMapping=El,Mt.toneMappingExposure=1.12);const hn=new ql;hn.background=new Be("#8eb4d4");hn.fog=new $a(10205392,Ot?.022:.018);if(Mt&&!Ot)try{hn.environment=z0(Mt)}catch{}hn.add(new Jl(15266559,7035464,Ot?.85:.55));const Gt=new ja(16773590,Ot?1.4:2.2);Gt.position.set(14,22,10);Gt.castShadow=!Ot;Ot||(Gt.shadow.mapSize.set(2048,2048),Gt.shadow.bias=-25e-5,Gt.shadow.normalBias=.03,Gt.shadow.camera.near=1,Gt.shadow.camera.far=60,Gt.shadow.camera.left=-24,Gt.shadow.camera.right=24,Gt.shadow.camera.top=24,Gt.shadow.camera.bottom=-24);hn.add(Gt);hn.add(new Md(16774635,Ot?.4:.22));const wc=new ja(13164543,Ot?.55:.45);wc.position.set(-8,10,-6);hn.add(wc);const Qt=new Nt(68,window.innerWidth/window.innerHeight,.08,100),ge={x:0,y:ls,z:0,yaw:0,pitch:0,footY:0,onStairs:!1},on=new Set;let ns=!1,en=!1,is=0,Kr={x:0,y:16,z:0};const zt=$0(document.getElementById("mobile-root"));zt.bindCanvasLook(Hn);function ng(){const n=document.getElementById("m-btn-bird"),e=document.getElementById("m-btn-map"),t=document.getElementById("m-btn-exit");n==null||n.addEventListener("click",i=>{i.stopPropagation(),Ft&&ro()}),e==null||e.addEventListener("click",i=>{var r;i.stopPropagation(),(r=document.getElementById("btn-maps-overlay"))==null||r.click()}),t==null||t.addEventListener("click",i=>{i.stopPropagation(),Ft&&Cc()})}ng();function fn(n){Mc.classList.toggle("hidden",n!=="catalog"),Sc.classList.toggle("hidden",n!=="detail"),yc.classList.toggle("hidden",n!=="tracer"),Ec.classList.toggle("hidden",n!=="register")}function Yn(){var e;const n=fc();if(!n.length){$s.innerHTML=`
      <div class="catalog-empty">
        <p>まだ物件がありません</p>
        <button type="button" class="btn primary" id="btn-empty-register">＋ 最初の物件を登録</button>
      </div>`,(e=document.getElementById("btn-empty-register"))==null||e.addEventListener("click",()=>io());return}$s.innerHTML=n.map(t=>{const i=t.planTemplateId==="house-2f"||t.unit&&String(t.unit).includes("2階");return`
    <button type="button" class="prop-card" data-id="${t.id}">
      <div class="prop-thumb" style="background: linear-gradient(135deg, ${t.accent||"#3b82f6"}88, #0f172a);">
        <span class="type-pill">${ln(t.type||"")}${t.builtin?"":" · 登録"}${i?" · 2階OK":""}</span>
        <span class="price-pill">${ln(t.price||"")}</span>
      </div>
      <div class="prop-body">
        <h3>${ln(t.title)}</h3>
        <p class="unit">${ln(t.unit||"")}</p>
        <div class="prop-meta">
          <span>${ln(t.layout||"")}</span>
          <span>${ln(t.area||"")}</span>
          <span>${ln(t.built||"")}</span>
        </div>
        <p class="prop-addr">📍 ${ln(t.address||"")}</p>
      </div>
    </button>`}).join(""),$s.querySelectorAll(".prop-card").forEach(t=>{t.addEventListener("click",()=>no(t.dataset.id))})}function ln(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fs(n,e,t){n.src=e==="street"?y0(t):S0(t)}function no(n){Qe=g0(n);const e=Qe;document.getElementById("detail-title").textContent=e.title,document.getElementById("detail-type").textContent=e.type||"",document.getElementById("detail-name").textContent=e.title,document.getElementById("detail-unit").textContent=e.unit||"",document.getElementById("detail-price").textContent=e.price||"",document.getElementById("detail-price-note").textContent=e.priceNote||"",document.getElementById("detail-address").textContent=e.address||"",document.getElementById("detail-layout").textContent=e.layout||"",document.getElementById("detail-area").textContent=e.area||"",document.getElementById("detail-built").textContent=[e.built,e.structure].filter(Boolean).join(" / "),document.getElementById("detail-access").textContent=e.access||"",document.getElementById("detail-exterior").textContent=e.exteriorNotes||"",document.getElementById("detail-desc").textContent=e.description||"";const t=Array.isArray(e.features)?e.features:String(e.features||"").split(",").map(l=>l.trim()).filter(Boolean);document.getElementById("detail-features").innerHTML=t.map(l=>`<li>${ln(l)}</li>`).join("");const i=document.getElementById("detail-plan-preview"),r=document.getElementById("detail-plan-photo"),s=document.getElementById("detail-plan-img");try{const l=pc(e);j0(i,l)}catch(l){console.warn("plan preview failed",l),i&&(i.innerHTML="")}e.planImage?(r.hidden=!1,s.src=K0(e.planImage),s.onerror=()=>{r.hidden=!0}):(r.hidden=!0,s.removeAttribute("src"));const a=document.getElementById("btn-edit-prop"),o=document.getElementById("btn-delete-prop");a.style.display=e.builtin?"none":"",o.style.display=e.builtin?"none":"",$r="map",document.querySelectorAll("#screen-detail .map-tabs .tab").forEach(l=>{l.classList.toggle("active",l.dataset.map==="map")}),fs(document.getElementById("map-iframe"),"map",e),document.getElementById("link-maps").href=E0(e),document.getElementById("link-street").href=b0(e),fn("detail")}document.getElementById("btn-back-catalog").addEventListener("click",()=>{fn("catalog"),Yn()});document.querySelectorAll("#screen-detail .map-tabs .tab").forEach(n=>{n.addEventListener("click",()=>{Qe&&($r=n.dataset.map,document.querySelectorAll("#screen-detail .map-tabs .tab").forEach(e=>{e.classList.toggle("active",e.dataset.map===$r)}),fs(document.getElementById("map-iframe"),$r,Qe))})});function io(n=null){Vn.reset(),document.getElementById("register-heading").textContent=n?"物件を編集":"物件を登録";const e=n?{...n,features:Array.isArray(n.features)?n.features.join(", "):n.features||"",lat:n.lat??"",lng:n.lng??""}:T0();for(const[s,a]of Object.entries(e)){const o=Vn.elements.namedItem(s);o&&"value"in o&&(o.value=a??"")}const t=document.getElementById("traced-plan-select"),i=to();t.innerHTML=i.length===0?'<option value="">（トレース済みなし — 先に間取り取込）</option>':i.map(s=>`<option value="${s.id}">${ln(s.name)}</option>`).join("");const r=Vn.elements.namedItem("planTemplateId");Ac(r.value),fn("register")}function Ac(n){document.getElementById("traced-select-wrap").classList.toggle("hidden",n!=="traced")}document.getElementById("plan-template-select").addEventListener("change",n=>{Ac(n.target.value)});document.getElementById("btn-open-register").addEventListener("click",()=>io());document.getElementById("btn-back-from-register").addEventListener("click",()=>{fn("catalog"),Yn()});document.getElementById("btn-geocode").addEventListener("click",async()=>{const n=Vn.elements.namedItem("address").value,e=document.getElementById("geocode-status");e.textContent="住所を検索中…";try{const t=await M0(n);Vn.elements.namedItem("lat").value=t.lat,Vn.elements.namedItem("lng").value=t.lng,e.textContent=`✓ ${t.displayName}`}catch(t){e.textContent="✗ "+(t.message||"検索失敗")}});Vn.addEventListener("submit",n=>{n.preventDefault();const e=new FormData(Vn),t=Object.fromEntries(e.entries());if(t.lat=t.lat===""?null:parseFloat(t.lat),t.lng=t.lng===""?null:parseFloat(t.lng),t.features=String(t.features||"").split(",").map(r=>r.trim()).filter(Boolean),t.planTemplateId==="traced"){if(t.planTemplateId=null,!t.tracedPlanId){alert("トレース済み間取りを選ぶか、先に「間取り取込」を行ってください");return}}else t.tracedPlanId=null;t.id||delete t.id;const i=mc(t);no(i.id),Yn()});document.getElementById("btn-edit-prop").addEventListener("click",()=>{Qe&&!Qe.builtin&&io(Qe)});document.getElementById("btn-delete-prop").addEventListener("click",()=>{!Qe||Qe.builtin||confirm(`「${Qe.title}」を削除しますか？`)&&(_0(Qe.id),Qe=null,fn("catalog"),Yn())});document.getElementById("btn-export").addEventListener("click",()=>{const n=new Blob([x0()],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download=`floorplan-walk-properties-${Date.now()}.json`,e.click()});document.getElementById("import-json").addEventListener("change",async n=>{var t;const e=(t=n.target.files)==null?void 0:t[0];if(e){try{const i=await e.text(),r=v0(i);alert(`${r} 件のユーザー物件を読み込みました`),Yn()}catch(i){alert("読込失敗: "+i.message)}n.target.value=""}});function ig(){Nn&&(hn.remove(Nn),Nn.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{t.map&&t.map.dispose(),t.dispose()})}),Nn=null)}function rg(n){ig();const e=V0(n);Nn=e.group,Oa=e.colliders,pt=e.building,hn.add(Nn);const t=e.bounds,i=Math.max(...pt.levels.map(a=>a.level||0)),r=pt.floorHeight||li;Kr={x:t.cx,y:14+i*r,z:t.cz-3};const s=pt.spawn||n.spawn;ge.x=s.x,ge.z=s.z,ge.footY=0,ge.onStairs=!1,ge.y=ls,ge.yaw=s.yaw??0,ge.pitch=0,Fn=0,en=!1,is=0,cr.classList.remove("active"),cr.textContent="上から見る"}function Rc(n,e){var r;e&&(Qe=e),rg(n),Ft=!0,fn("none"),Mc.classList.add("hidden"),Sc.classList.add("hidden"),yc.classList.add("hidden"),Ec.classList.add("hidden"),bc.classList.remove("hidden"),kn.classList.remove("hidden");const t=document.getElementById("tour-prop-title");t&&(t.textContent=(e==null?void 0:e.title)||(Qe==null?void 0:Qe.title)||""),so();const i=document.getElementById("tour-guide");i&&(clearTimeout(i._t),sessionStorage.getItem("tour-guide-dismissed")==="1"?i.classList.add("hidden"):(i.classList.remove("hidden"),i._t=setTimeout(()=>i.classList.add("hidden"),8e3))),zt.isTouchDevice()?(zt.showIfTouch(),document.body.classList.add("is-touch-ui"),kn.classList.remove("hidden"),setTimeout(()=>{Ft&&kn.classList.add("hidden")},3500)):(document.body.classList.remove("is-touch-ui"),(r=Hn.requestPointerLock)==null||r.call(Hn))}document.getElementById("btn-start-tour").addEventListener("click",()=>{Qe&&Rc(pc(Qe),Qe)});document.getElementById("btn-exit-tour").addEventListener("click",()=>Cc());function Cc(){Ft=!1,bc.classList.add("hidden"),kn.classList.add("hidden"),hs.classList.add("hidden"),zt.hide(),document.pointerLockElement&&document.exitPointerLock(),Qe?no(Qe.id):(fn("catalog"),Yn())}document.getElementById("btn-open-tracer").addEventListener("click",()=>fn("tracer"));document.getElementById("btn-back-from-tracer").addEventListener("click",()=>{fn("catalog"),Yn()});const sg=Z0(document.getElementById("tracer-root"));sg.onBuild((n,e)=>{var r;const t=m0(n,{name:e.name}),i=mc({title:e.name||"トレース物件",unit:"トレース生成",type:"カスタム",layout:`${((r=n.rooms)==null?void 0:r.length)||0}室`,area:"—",price:"要確認",address:"住所未設定（登録画面で実住所を入力）",lat:35.6812,lng:139.7671,exteriorNotes:"間取り図トレースから生成。物件登録で住所・価格を追記できます。",description:"壁トレース＋部屋自動分割",features:["ユーザー作成","トレース"],tracedPlanId:t.id,planTemplateId:null,accent:"#8b5cf6"});Qe=i,Rc(n,i)});document.getElementById("btn-maps-overlay").addEventListener("click",()=>{Qe&&(document.pointerLockElement&&document.exitPointerLock(),tg.textContent=Qe.address||"",fs(Tc,"map",Qe),hs.classList.remove("hidden"))});document.getElementById("btn-close-maps").addEventListener("click",()=>{hs.classList.add("hidden")});document.querySelectorAll("[data-overlay-map]").forEach(n=>{n.addEventListener("click",()=>{if(!Qe)return;const e=n.dataset.overlayMap;document.querySelectorAll("[data-overlay-map]").forEach(t=>{t.classList.toggle("active",t.dataset.overlayMap===e)}),fs(Tc,e,Qe)})});window.addEventListener("keydown",n=>{Ft&&(n.code==="ArrowUp"||n.code==="ArrowDown"||n.code==="ArrowLeft"||n.code==="ArrowRight"||n.code==="Space")&&n.preventDefault(),on.add(n.code),n.code==="KeyB"&&Ft&&ro(),Ft&&pt&&!en&&((n.code==="Digit1"||n.code==="Numpad1")&&Ba(0),(n.code==="Digit2"||n.code==="Numpad2")&&Ba(1))});window.addEventListener("keyup",n=>on.delete(n.code));document.addEventListener("pointerlockchange",()=>{ns=document.pointerLockElement===Hn,ns?kn.classList.add("hidden"):Ft&&!zt.isTouchDevice()&&kn.classList.remove("hidden")});Hn.addEventListener("click",()=>{!Ft||en||hs.classList.contains("hidden")&&(zt.isTouchDevice()?kn.classList.add("hidden"):Hn.requestPointerLock())});document.addEventListener("mousemove",n=>{if(!ns||en||!Ft)return;const e=.0022;ge.yaw-=n.movementX*e,ge.pitch-=n.movementY*e,ge.pitch=Math.max(-1.2,Math.min(1.2,ge.pitch))});cr.addEventListener("click",()=>ro());function ro(){en=!en,cr.classList.toggle("active",en),cr.textContent=en?"歩いて見る":"上から見る",en&&ns&&document.exitPointerLock()}function Ba(n){var s,a,o,l,c;if(!(pt!=null&&pt.levels))return;const e=cs(pt,n);if(!e)return;const t=pt.floorHeight||li;let r=(n===0?["LDK","リビング・ダイニング","ホール","玄関"]:["主寝室","階段ホール","廊下","洋室"]).map(u=>{var h;return(h=e.rooms)==null?void 0:h.find(d=>d.name===u||d.name.includes(u))}).find(Boolean)||((s=e.rooms)==null?void 0:s.find(u=>!["階段","バルコニー","ポーチ","屋外","ウッドデッキ"].includes(u.name)))||((a=e.rooms)==null?void 0:a[0]);if((o=r==null?void 0:r.points)!=null&&o.length)ge.x=r.points.reduce((u,h)=>u+h.x,0)/r.points.length,ge.z=r.points.reduce((u,h)=>u+h.z,0)/r.points.length;else if((l=e.stairs)!=null&&l[0]){const u=e.stairs[0];ge.x=(u.minX+u.maxX)/2,ge.z=(u.minZ+u.maxZ)/2}Fn=n,ge.footY=n*t,ge.onStairs=!1,ge.y=ge.footY+ls,ge.pitch=0,so(),(c=document.getElementById("tour-guide"))==null||c.classList.add("hidden")}function so(){const n=document.getElementById("floor-jumps");if(!n||!pt)return;if((pt.levels||[]).length<2){n.classList.add("hidden");return}n.classList.remove("hidden"),n.querySelectorAll("[data-floor]").forEach(t=>{const i=Number(t.dataset.floor);t.classList.toggle("active",i===Fn),t.disabled=!cs(pt,i)})}function ag(n){Nn&&Nn.traverse(e=>{var t,i;((t=e.userData)!=null&&t.isCeiling||(i=e.userData)!=null&&i.hideInBird)&&(e.visible=n)})}function og(){const n=is;if(ag(n<.45),n>.01)if(Qt.position.set(_s.lerp(ge.x,Kr.x,n),_s.lerp(ge.y,Kr.y,n),_s.lerp(ge.z,Kr.z,n)),Qt.up.set(0,1,0),n>.4&&pt){const e=oc(pt),t=pt.floorHeight||li;Qt.lookAt(e.cx,Fn*t*.5,e.cz)}else _l();else Qt.up.set(0,1,0),Qt.position.set(ge.x,ge.y,ge.z),_l()}function _l(){const n=ge.x+Math.sin(ge.yaw)*Math.cos(ge.pitch),e=ge.y+Math.sin(ge.pitch),t=ge.z+Math.cos(ge.yaw)*Math.cos(ge.pitch);Qt.lookAt(n,e,t)}window.addEventListener("resize",()=>{Qt.aspect=window.innerWidth/window.innerHeight,Qt.updateProjectionMatrix(),Mt&&(Mt.setPixelRatio(Math.min(window.devicePixelRatio||1,Ot?1.5:2)),Mt.setSize(window.innerWidth,window.innerHeight))});const lg=new yd,cg=2.8;function Pc(){var e,t;requestAnimationFrame(Pc);const n=Math.min(lg.getDelta(),.05);if(Ft&&pt){if(is+=((en?1:0)-is)*Math.min(1,n*4),pt.floorHeight,!en){if(zt.state.active){const d=zt.consumeLookDelta(),p=.0045;ge.yaw-=d.dx*p,ge.pitch-=d.dy*p,ge.pitch=Math.max(-1.15,Math.min(1.15,ge.pitch)),(zt.state.moveX||zt.state.moveZ||d.dx||d.dy)&&(kn.classList.add("hidden"),(e=document.getElementById("tour-guide"))==null||e.classList.add("hidden"))}let l=0,c=0;if((on.has("KeyW")||on.has("ArrowUp"))&&(c+=1),(on.has("KeyS")||on.has("ArrowDown"))&&(c-=1),(on.has("KeyA")||on.has("ArrowLeft"))&&(l-=1),(on.has("KeyD")||on.has("ArrowRight"))&&(l+=1),l+=zt.state.moveX,c+=zt.state.moveZ,l!==0||c!==0){const d=Math.hypot(l,c)||1;l/=d,c/=d;const p=Math.sin(ge.yaw),_=Math.cos(ge.yaw),x=cg*(zt.state.active?1.15:1),m=(p*c-_*l)*x*n,f=(_*c+p*l)*x*n;let R=ml(ge.x+m,ge.z,pl,Oa,ge.footY);R=ml(R.x,ge.z+f,pl,Oa,ge.footY),ge.x=R.x,ge.z=R.z,(t=document.getElementById("tour-guide"))==null||t.classList.add("hidden")}const u=d0({x:ge.x,z:ge.z,footY:ge.footY,level:Fn,onStairs:ge.onStairs},pt);ge.footY=u.footY,Fn=u.level,ge.onStairs=u.onStairs;const h=ge.footY+ls;ge.y+=(h-ge.y)*Math.min(1,n*14),Math.abs(ge.y-h)>.6&&(ge.y=h)}og();const r=cs(pt,Fn),s=ac(ge.x,ge.z,(r==null?void 0:r.rooms)||[]),a=(r==null?void 0:r.name)||`${Fn+1}F`;J0.textContent=s==="屋外"?"屋外（玄関へ進んでください）":`${a} · ${s}`,Q0.textContent=a,G0(eg,r,ge,a),so();const o=document.getElementById("tour-prop-title");o&&Qe&&(o.textContent=Qe.title||"")}else Qt.position.set(0,8,12),Qt.lookAt(0,0,0);Mt&&Mt.render(hn,Qt)}var xl;(xl=document.getElementById("floor-jumps"))==null||xl.addEventListener("click",n=>{const e=n.target.closest("[data-floor]");!e||!Ft||Ba(Number(e.dataset.floor))});var vl;(vl=document.getElementById("btn-dismiss-guide"))==null||vl.addEventListener("click",()=>{const n=document.getElementById("tour-guide");n&&(clearTimeout(n._t),n.classList.add("hidden"));try{sessionStorage.setItem("tour-guide-dismissed","1")}catch{}});Yn();fn("catalog");Pc();
