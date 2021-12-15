(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?s(t,e):function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return os})),n.d(e,"b",(function(){return ls})),n.d(e,"c",(function(){return xs})),n.d(e,"d",(function(){return Cs}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class O{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class S{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class k{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),new C(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R.I=-1;class N{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=x(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function j(t,e){return t<e?-1:t>e?1:0}function D(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new P(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends V{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends V{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new _(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new z(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function G(t){if(y(!!t),"string"==typeof t){let e=0;const n=$.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:K(t.seconds),nanos:K(t.nanos)}}function K(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=t.mapValue.fields.__previous_value__;return J(e)?X(e):e}function Q(t){const e=G(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return null==t}function Z(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt{constructor(t){this.path=t}static fromPath(t){return new tt(B.fromString(t))}static fromName(t){return new tt(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?J(t)?4:10:v()}function nt(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Q(t).isEqual(Q(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=G(t.timestampValue),r=G(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return K(t.geoPointValue.latitude)===K(e.geoPointValue.latitude)&&K(t.geoPointValue.longitude)===K(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return K(t.integerValue)===K(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=K(t.doubleValue),r=K(e.doubleValue);return n===r?Z(n)===Z(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return D(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!nt(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>nt(t,e))}function it(t,e){const n=et(t),r=et(e);if(n!==r)return j(n,r);switch(n){case 0:return 0;case 1:return j(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=K(t.integerValue||t.doubleValue),r=K(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return st(t.timestampValue,e.timestampValue);case 4:return st(Q(t),Q(e));case 5:return j(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),r=W(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=j(n[i],r[i]);if(0!==t)return t}return j(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=j(K(t.latitude),K(e.latitude));return 0!==n?n:j(K(t.longitude),K(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=it(n[i],r[i]);if(t)return t}return j(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=j(r[o],s[o]);if(0!==t)return t;const e=it(n[r[o]],i[s[o]]);if(0!==e)return e}return j(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function st(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return j(t,e);const n=G(t),r=G(e),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function ot(t){return at(t)}function at(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=G(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,tt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=at(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${at(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function ct(t){return!!t&&"integerValue"in t}function ut(t){return!!t&&"arrayValue"in t}function lt(t){return!!t&&"nullValue"in t}function ht(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dt(t){return!!t&&"mapValue"in t}function ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ft(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!dt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ft(e)}setAll(t){let e=H.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ft(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());dt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];dt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){F(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new pt(ft(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new gt(t,0,L.min(),pt.empty(),0)}static newFoundDocument(t,e,n){return new gt(t,1,e,n,0)}static newNoDocument(t,e){return new gt(t,2,e,pt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new gt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function vt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mt(t,e,n,r,i,s,o)}function yt(t){const e=b(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Tt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Y(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=jt(e.startAt)),e.endAt&&(t+="|ub:",t+=jt(e.endAt)),e.R=t}return e.R}function bt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),Y(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+jt(t.startAt)),t.endAt&&(e+=", endAt: "+jt(t.endAt)),`Target(${e})`}function wt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Pt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!nt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mt(t.startAt,e.startAt)&&Mt(t.endAt,e.endAt)}function _t(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Et extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new It(t,e,n):"array-contains"===e?new Ct(t,n):"in"===e?new At(t,n):"not-in"===e?new Rt(t,n):"array-contains-any"===e?new xt(t,n):new Et(t,e,n)}static P(t,e,n){return"in"===e?new Ot(t,n):new St(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(it(e,this.value)):null!==e&&et(this.value)===et(e)&&this.v(it(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Tt(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class It extends Et{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.v(e)}}class Ot extends Et{constructor(t,e){super(t,"in",e),this.keys=kt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class St extends Et{constructor(t,e){super(t,"not-in",e),this.keys=kt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function kt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>tt.fromName(t.referenceValue))}class Ct extends Et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ut(e)&&rt(e.arrayValue,this.value)}}class At extends Et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Rt extends Et{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class xt extends Et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ut(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Nt{constructor(t,e){this.position=t,this.before=e}}function jt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class Dt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Lt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):it(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Mt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Ut(t,e,n,r,i,s,o,a){return new Ft(t,e,n,r,i,s,o,a)}function Vt(t){return new Ft(t)}function Bt(t){return!Y(t.limit)&&"F"===t.limitType}function qt(t){return!Y(t.limit)&&"L"===t.limitType}function Ht(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zt(t){for(const e of t.filters)if(e.V())return e.field;return null}function $t(t){return null!==t.collectionGroup}function Gt(t){const e=b(t);if(null===e.S){e.S=[];const t=zt(e),n=Ht(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Dt(t)),e.S.push(new Dt(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Dt(H.keyField(),t))}}}return e.S}function Kt(t){const e=b(t);if(!e.D)if("F"===e.limitType)e.D=vt(e.path,e.collectionGroup,Gt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Gt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Dt(i.field,e))}const n=e.endAt?new Nt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Nt(e.startAt.position,!e.startAt.before):null;e.D=vt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function Wt(t,e,n){return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jt(t,e){return wt(Kt(t),Kt(e))&&t.limitType===e.limitType}function Xt(t){return`${yt(Kt(t))}|lt:${t.limitType}`}function Qt(t){return`Query(target=${bt(Kt(t))}; limitType=${t.limitType})`}function Yt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Lt(t.startAt,Gt(t),e))&&(!t.endAt||!Lt(t.endAt,Gt(t),e))}(t,e)}function Zt(t){return(e,n)=>{let r=!1;for(const i of Gt(t)){const t=te(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function te(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?it(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function ne(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this._=void 0}}function ie(t,e,n){return t instanceof ae?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ce?ue(t,e):t instanceof le?he(t,e):function(t,e){const n=oe(t,e),r=fe(n)+fe(t.N);return ct(n)&&ct(t.N)?ne(r):ee(t.k,r)}(t,e)}function se(t,e,n){return t instanceof ce?ue(t,e):t instanceof le?he(t,e):n}function oe(t,e){return t instanceof de?ct(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ae extends re{}class ce extends re{constructor(t){super(),this.elements=t}}function ue(t,e){const n=pe(e);for(const r of t.elements)n.some(t=>nt(t,r))||n.push(r);return{arrayValue:{values:n}}}class le extends re{constructor(t){super(),this.elements=t}}function he(t,e){let n=pe(e);for(const r of t.elements)n=n.filter(t=>!nt(t,r));return{arrayValue:{values:n}}}class de extends re{constructor(t,e){super(),this.k=t,this.N=e}}function fe(t){return K(t.integerValue||t.doubleValue)}function pe(t){return ut(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ce&&e instanceof ce||t instanceof le&&e instanceof le?D(t.elements,e.elements,nt):t instanceof de&&e instanceof de?nt(t.N,e.N):t instanceof ae&&e instanceof ae}(t.transform,e.transform)}function me(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ve{}function ye(t,e,n){t instanceof Ee?function(t,e,n){const r=t.value.clone(),i=Oe(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Te?function(t,e,n){if(!me(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Oe(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ie(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function be(t,e,n){t instanceof Ee?function(t,e,n){if(!me(t.precondition,e))return;const r=t.value.clone(),i=Se(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(_e(e),r).setHasLocalMutations()}(t,e,n):t instanceof Te?function(t,e,n){if(!me(t.precondition,e))return;const r=Se(t.fieldTransforms,n,e),i=e.data;i.setAll(Ie(t)),i.setAll(r),e.convertToFoundDocument(_e(e),i).setHasLocalMutations()}(t,e,n):function(t,e){me(t.precondition,e)&&e.convertToNoDocument(L.min())}(t,e)}function we(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&D(t,e,(t,e)=>ge(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function _e(t){return t.isFoundDocument()?t.version:L.min()}class Ee extends ve{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Te extends ve{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ie(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Oe(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,se(o,a,n[i]))}return r}function Se(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ie(t,s,e))}return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,Ae;function Re(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ce.OK:return w.OK;case Ce.CANCELLED:return w.CANCELLED;case Ce.UNKNOWN:return w.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return w.INTERNAL;case Ce.UNAVAILABLE:return w.UNAVAILABLE;case Ce.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ce.NOT_FOUND:return w.NOT_FOUND;case Ce.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ce.ABORTED:return w.ABORTED;case Ce.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ce.DATA_LOSS:return w.DATA_LOSS;default:return v()}}(Ae=Ce||(Ce={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(t,e){this.comparator=t,this.root=e||je.EMPTY}insert(t,e){return new xe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new xe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ne(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ne(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ne(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ne(this.root,t,this.comparator,!0)}}class Ne{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:je.RED,this.left=null!=r?r:je.EMPTY,this.right=null!=i?i:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new je(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return je.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1,je.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t){this.comparator=t,this.data=new xe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pe(this.data.getIterator())}getIteratorFrom(t){return new Pe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof De))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new De(this.comparator);return e.data=t,e}}class Pe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new xe(tt.comparator);function Me(){return Le}const Fe=new xe(tt.comparator);function Ue(){return Fe}new xe(tt.comparator);const Ve=new De(tt.comparator);function Be(...t){let e=Ve;for(const n of t)e=e.add(n);return e}const qe=new De(j);function He(){return qe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,$e.createSynthesizedTargetChangeForCurrentChange(t,e)),new ze(L.min(),n,He(),Me(),Be())}}class $e{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new $e(z.EMPTY_BYTE_STRING,e,Be(),Be(),Be())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Ke{constructor(t,e){this.targetId=t,this.O=e}}class We{constructor(t,e,n=z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Je{constructor(){this.M=0,this.L=Ye(),this.B=z.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Be(),e=Be(),n=Be();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new $e(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=Ye()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Xe{constructor(t){this.et=t,this.nt=new Map,this.st=Me(),this.it=Qe(),this.rt=new De(j)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,r=this.wt(e);if(r){const t=r.target;if(_t(t))if(0===n){const n=new tt(t.path);this.ct(e,n,gt.newNoDocument(n,L.min()))}else y(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&_t(i.target)){const e=new tt(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,gt.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=Be();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new ze(t,e,this.rt,this.st,n);return this.st=Me(),this.it=Qe(),this.rt=new De(j),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Je,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new De(j),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Je),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function Qe(){return new xe(tt.comparator)}function Ye(){return new xe(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),tn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class en{constructor(t,e){this.databaseId=t,this.C=e}}function nn(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rn(t,e){return t.C?e.toBase64():e.toUint8Array()}function sn(t){return y(!!t),L.fromTimestamp(function(t){const e=G(t);return new P(e.seconds,e.nanos)}(t))}function on(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function an(t){const e=B.fromString(t);return y(kn(e)),e}function cn(t,e){const n=an(e);if(n.get(1)!==t.databaseId.projectId)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(dn(n))}function un(t,e){return on(t.databaseId,e)}function ln(t){const e=an(t);return 4===e.length?B.emptyPath():dn(e)}function hn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dn(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function fn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.C?(y(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:Re(t.code);return new _(e,t.message||"")}(o);n=new We(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cn(t,r.document.name),s=sn(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=gt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ge(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cn(t,r.document),s=r.readTime?sn(r.readTime):L.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ge([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cn(t,r.document),s=r.removedTargetIds||[];n=new Ge([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new ke(r),s=t.targetId;n=new Ke(s,i)}}return n}function pn(t,e){return{documents:[un(t,e.path)]}}function gn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=un(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=un(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ht(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ht(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:En(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Tn(t.field),direction:_n(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||Y(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=bn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=bn(e.endAt)),n}function mn(t){let e=ln(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=yn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Dt(In(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Y(e)?null:e}(n.limit));let c=null;n.startAt&&(c=wn(n.startAt));let u=null;return n.endAt&&(u=wn(n.endAt)),Ut(e,i,o,s,a,"F",c,u)}function vn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function yn(t){return t?void 0!==t.unaryFilter?[Sn(t)]:void 0!==t.fieldFilter?[On(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>yn(t)).reduce((t,e)=>t.concat(e)):v():[]}function bn(t){return{before:t.before,values:t.position}}function wn(t){const e=!!t.before,n=t.values||[];return new Nt(n,e)}function _n(t){return Ze[t]}function En(t){return tn[t]}function Tn(t){return{fieldPath:t.canonicalString()}}function In(t){return H.fromServerFormat(t.fieldPath)}function On(t){return Et.create(In(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Sn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=In(t.unaryFilter.field);return Et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=In(t.unaryFilter.field);return Et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=In(t.unaryFilter.field);return Et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=In(t.unaryFilter.field);return Et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function kn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Rn(e)),e=An(t.get(n),e);return Rn(e)}function An(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Rn(t){return t+""}class xn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}xn.store="owner",xn.key="owner";class Nn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Nn.store="mutationQueues",Nn.keyPath="userId";class jn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}jn.store="mutations",jn.keyPath="batchId",jn.userMutationsIndex="userMutationsIndex",jn.userMutationsKeyPath=["userId","batchId"];class Dn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Cn(e)]}static key(t,e,n){return[t,Cn(e),n]}}Dn.store="documentMutations",Dn.PLACEHOLDER=new Dn;class Pn{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Pn.store="remoteDocuments",Pn.readTimeIndex="readTimeIndex",Pn.readTimeIndexPath="readTime",Pn.collectionReadTimeIndex="collectionReadTimeIndex",Pn.collectionReadTimeIndexPath=["parentPath","readTime"];class Ln{constructor(t){this.byteSize=t}}Ln.store="remoteDocumentGlobal",Ln.key="remoteDocumentGlobalKey";class Mn{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Mn.store="targets",Mn.keyPath="targetId",Mn.queryTargetsIndexName="queryTargetsIndex",Mn.queryTargetsKeyPath=["canonicalId","targetId"];class Fn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Fn.store="targetDocuments",Fn.keyPath=["targetId","path"],Fn.documentTargetsIndex="documentTargetsIndex",Fn.documentTargetsKeyPath=["path","targetId"];class Un{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Un.key="targetGlobalKey",Un.store="targetGlobal";class Vn{constructor(t,e){this.collectionId=t,this.parent=e}}Vn.store="collectionParents",Vn.keyPath=["collectionId","parent"];class Bn{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Bn.store="clientMetadata",Bn.keyPath="clientId";class qn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}qn.store="bundles",qn.keyPath="bundleId";class Hn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Hn.store="namedQueries",Hn.keyPath="name";Nn.store,jn.store,Dn.store,Pn.store,Mn.store,xn.store,Un.store,Fn.store,Bn.store,Ln.store,Vn.store,qn.store,Hn.store;const zn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $n{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Gn((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Gn?e:Gn.resolve(e)}catch(t){return Gn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Gn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Gn.reject(e)}static resolve(t){return new Gn((e,n)=>{e(t)})}static reject(t){return new Gn((e,n)=>{n(t)})}static waitFor(t){return new Gn((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Gn.resolve(!1);for(const n of t)e=e.next(t=>t?Gn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ye(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&be(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&be(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(L.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Be())}isEqual(t){return this.batchId===t.batchId&&D(this.mutations,t.mutations,(t,e)=>we(t,e))&&D(this.baseMutations,t.baseMutations,(t,e)=>we(t,e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(t,e,n,r,i=L.min(),s=L.min(),o=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t){this.Gt=t}}function Qn(t){const e=mn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Wt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(){this.zt=new Zn}addToCollectionParentIndex(t,e){return this.zt.add(e),Gn.resolve()}getCollectionParents(t,e){return Gn.resolve(this.zt.getEntries(e))}}class Zn{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new De(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new De(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new tr(t,tr.DEFAULT_COLLECTION_PERCENTILE,tr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr.DEFAULT_COLLECTION_PERCENTILE=10,tr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tr.DEFAULT=new tr(41943040,tr.DEFAULT_COLLECTION_PERCENTILE,tr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tr.DISABLED=new tr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new er(0)}static re(){return new er(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==zn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){F(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return U(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.changes=new rr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:L.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:gt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Gn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):$t(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new tt(e)).next(t=>{let e=Ue();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let i=Ue();return this.Jt.getCollectionParents(t,r).next(s=>Gn.forEach(s,s=>{const o=function(t,e){return new Ft(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=gt.newInvalidDocument(n),r=r.insert(n,i)),be(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Yt(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=Be();for(const s of e)for(const t of s.mutations)t instanceof Te&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=Be(),r=Be();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new or(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(L.min())?this.Mn(t,e):this.On.vn(t,r).next(i=>{const o=this.Ln(e,i);return(Bt(e)||qt(e))&&this.Bn(e.limitType,o,r,n)?this.Mn(t,e):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Qt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new De(Zt(t));return e.forEach((e,r)=>{Yt(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(t,e){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Qt(e)),this.On.getDocumentsMatchingQuery(t,e,L.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new xe(j),this.Kn=new rr(t=>yt(t),wt),this.jn=L.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new sr(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function ur(t,e,n,r){return new cr(t,e,n,r)}async function lr(t,e){const n=b(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new sr(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Be();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function hr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function dr(t,e){const n=b(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return y(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=Me();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(fr(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(L.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Gn.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}function fr(t,e,n,r,i){let s=Be();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Me();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(L.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function pr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(i=>i?(r=i,Gn.resolve(r)):n.He.allocateTargetId(t).next(i=>(r=new Jn(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function gr(t,e,n){const r=b(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Kn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function mr(t,e,n){const r=b(t);let i=L.min(),s=Be();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.Kn.get(n);return void 0!==i?Gn.resolve(r.qn.get(i)):r.He.getTargetData(e,n)}(r,t,Kt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:L.min(),n?s:Be())).next(t=>({documents:t,zn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Gn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:sn(n.createTime)}),Gn.resolve()}getNamedQuery(t,e){return Gn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Qn(t.bundledQuery),readTime:sn(t.readTime)}}(e)),Gn.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.ts=new De(br.es),this.ns=new De(br.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new br(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new br(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new tt(new B([])),n=new br(e,t),r=new br(e,t+1),i=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new tt(new B([])),n=new br(e,t),r=new br(e,t+1);let i=Be();return this.ns.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new br(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class br{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return tt.comparator(t.key,e.key)||j(t.fs,e.fs)}static ss(t,e){return j(t.fs,e.fs)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new De(br.es)}checkEmpty(t){return Gn.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Wn(i,e,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new br(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Gn.resolve(s)}lookupMutationBatch(t,e){return Gn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return Gn.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Gn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Gn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new br(e,0),r=new br(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);i.push(e)}),Gn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new De(j);return e.forEach(t=>{const e=new br(t,0),r=new br(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),Gn.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;tt.isDocumentKey(i)||(i=i.child(""));const s=new br(new tt(i),0);let o=new De(j);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},s),Gn.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Gn.forEach(e.mutations,r=>{const i=new br(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new br(e,0),r=this.ws.firstAfterOrEqual(n);return Gn.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,Gn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new xe(tt.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Gn.resolve(n?n.document.clone():gt.newInvalidDocument(e))}getEntries(t,e){let n=Me();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():gt.newInvalidDocument(t))}),Gn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Me();const i=new tt(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Yt(e,i)&&(r=r.insert(i.key,i.clone()))}return Gn.resolve(r)}Es(t,e){return Gn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Er(this)}getSize(t){return Gn.resolve(this.size)}}class Er extends ir{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),Gn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.persistence=t,this.Is=new rr(t=>yt(t),wt),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.As=0,this.Rs=new yr,this.targetCount=0,this.Ps=er.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Gn.resolve()}getLastRemoteSnapshotVersion(t){return Gn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Gn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Gn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Gn.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new er(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Gn.resolve()}updateTargetData(t,e){return this.ce(e),Gn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Gn.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Gn.waitFor(i).next(()=>r)}getTargetCount(t){return Gn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Gn.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Gn.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Gn.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Gn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Gn.resolve(n)}containsKey(t,e){return Gn.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.bs={},this.Be=new R(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Tr(this),this.Jt=new Yn,this.Je=function(t,e){return new _r(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Xn(e),this.Ye=new vr(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new wr(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Or(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return Gn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class Or extends $n{constructor(t){super(),this.currentSequenceNumber=t}}class Sr{constructor(t){this.persistence=t,this.Cs=new yr,this.Ns=null}static ks(t){return new Sr(t)}get xs(){if(this.Ns)return this.Ns;throw v()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Gn.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Gn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Gn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Gn.forEach(this.xs,n=>{const r=tt.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Gn.or([()=>Gn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.activeTargetIds=He()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cr{constructor(){this.pi=new kr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new kr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=xr[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new _(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new _(e,t.message))}else s(new _(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new _(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const p=new Nr({Vi:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),l.open(),h=!0),f("Connection","WebChannel sending:",t),l.send(t))},Si:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Fi())}),m(l,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),p.Fi(new _(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ce[t];if(void 0!==e)return Re(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,p.Fi(new _(e,n)),l.close()}else f("Connection","WebChannel received:",n),p.Oi(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){return new en(t,!0)}class Lr{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,r,i,s,o,a){this.Oe=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Lr(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new _(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fr extends Mr{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=fn(this.k,t),n=function(t){if(!("targetChange"in t))return L.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?L.min():e.readTime?sn(e.readTime):L.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=hn(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=_t(r)?{documents:pn(t,r)}:{query:gn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=rn(t,e.resumeToken):e.snapshotVersion.compareTo(L.min())>0&&(n.readTime=nn(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=vn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=hn(this.k),e.removeTarget=t,this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(w.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(w.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Vr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(e),this.Lr=!1):f("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Xr(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Gr.add(4),await Hr(e),e.Jr.set("Unknown"),e.Gr.delete(4),await qr(e)}(this))})}),this.Jr=new Vr(n,r)}}async function qr(t){if(Xr(t))for(const e of t.zr)await e(!0)}async function Hr(t){for(const e of t.zr)await e(!1)}function zr(t,e){const n=b(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Jr(n)?Wr(n):ri(n).lr()&&Gr(n,e))}function $r(t,e){const n=b(t),r=ri(n);n.Wr.delete(e),r.lr()&&Kr(n,e),0===n.Wr.size&&(r.lr()?r._r():Xr(n)&&n.Jr.set("Unknown"))}function Gr(t,e){t.Yr.X(e.targetId),ri(t).br(e)}function Kr(t,e){t.Yr.X(e),ri(t).vr(e)}function Wr(t){t.Yr=new Xe({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),ri(t).start(),t.Jr.Br()}function Jr(t){return Xr(t)&&!ri(t).hr()&&t.Wr.size>0}function Xr(t){return 0===b(t).Gr.size}function Qr(t){t.Yr=void 0}async function Yr(t){t.Wr.forEach((e,n)=>{Gr(t,e)})}async function Zr(t,e){Qr(t),Jr(t)?(t.Jr.Kr(e),Wr(t)):t.Jr.set("Unknown")}async function ti(t,e,n){if(t.Jr.set("Online"),e instanceof We&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ei(t,n)}else if(e instanceof Ge?t.Yr.ot(e):e instanceof Ke?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(L.min()))try{const e=await hr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),Kr(t,e);const r=new Jn(n.target,e,1,n.sequenceNumber);Gr(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ei(t,e)}}async function ei(t,e,n){if(!Kn(e))throw e;t.Gr.add(1),await Hr(t),t.Jr.set("Offline"),n||(n=()=>hr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await qr(t)})}async function ni(t,e){const n=b(t);e?(n.Gr.delete(2),await qr(n)):e||(n.Gr.add(2),await Hr(n),n.Jr.set("Unknown"))}function ri(t){return t.Xr||(t.Xr=function(t,e,n){const r=b(t);return r.Fr(),new Fr(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:Yr.bind(null,t),Ni:Zr.bind(null,t),Pr:ti.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Jr(t)?Wr(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Qr(t))})),t.Xr}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ii(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function si(t,e){if(p("AsyncQueue",`${e}: ${t}`),Kn(t))return new _(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ue(),this.sortedSet=new xe(this.comparator)}static emptySet(t){return new oi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof oi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new oi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.eo=new xe(tt.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):v():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class ci{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new ci(t,e,oi.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.so=void 0,this.listeners=[]}}class li{constructor(){this.queries=new rr(t=>Xt(t),Jt),this.onlineState="Unknown",this.io=new Set}}async function hi(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ui),i)try{s.so=await n.onListen(r)}catch(t){const n=si(t,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&gi(n)}async function di(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fi(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(r=!0);e.so=i}}r&&gi(n)}function pi(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function gi(t){t.io.forEach(t=>{t.next()})}class mi{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ci(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=ci.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(t){this.key=t}}class yi{constructor(t){this.key=t}}class bi{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Be(),this.mutatedKeys=Be(),this.Ao=Zt(t),this.Ro=new oi(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new ai,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Bt(this.query)&&r.size===this.query.limit?r.last():null,c=qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Yt(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Bt(this.query)||qt(this.query))for(;s.size>this.query.limit;){const t=Bt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new ci(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ai,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Be(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new yi(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new vi(n))}),e}ko(t){this.To=t.zn,this.Io=Be();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return ci.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class wi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _i{constructor(t){this.key=t,this.$o=!1}}class Ei{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new rr(t=>Xt(t),Jt),this.Mo=new Map,this.Lo=new Set,this.Bo=new xe(tt.comparator),this.Uo=new Map,this.qo=new yr,this.Ko={},this.jo=new Map,this.Qo=er.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Ti(t,e){const n=Mi(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await pr(n.localStore,Kt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ii(n,e,r,"current"===s),n.isPrimaryClient&&zr(n.remoteStore,t)}return i}async function Ii(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Bn&&(i=await mr(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return xi(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const i=await mr(t.localStore,e,!0),s=new bi(e,i.zn),o=s.bo(i.documents),a=$e.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);xi(t,n,c.Co);const u=new wi(e,n,s);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function Oi(t,e){const n=b(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(t=>!Jt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$r(n.remoteStore,r.targetId),Ai(n,r.targetId)}).catch(nr)):(Ai(n,r.targetId),await gr(n.localStore,r.targetId,!0))}async function Si(t,e){const n=b(t);try{const t=await dr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?y(r.$o):t.removedDocuments.size>0&&(y(r.$o),r.$o=!1))}),await Di(n,t,e)}catch(t){await nr(t)}}function ki(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.ro(e)&&(r=!0)}),r&&gi(n)}(r.eventManager,e),t.length&&r.Fo.Pr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ci(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new xe(tt.comparator);t=t.insert(s,gt.newNoDocument(s,L.min()));const n=Be().add(s),i=new ze(L.min(),new Map,new De(j),t,n);await Si(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),ji(r)}else await gr(r.localStore,e,!1).then(()=>Ai(r,e,n)).catch(nr)}function Ai(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Ri(t,e)})}function Ri(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&($r(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),ji(t))}function xi(t,e,n){for(const r of n)r instanceof vi?(t.qo.addReference(r.key,e),Ni(t,r)):r instanceof yi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Ri(t,r.key)):v()}function Ni(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(f("SyncEngine","New document in limbo: "+n),t.Lo.add(r),ji(t))}function ji(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new tt(B.fromString(e)),r=t.Qo.next();t.Uo.set(r,new _i(n)),t.Bo=t.Bo.insert(n,r),zr(t.remoteStore,new Jn(Kt(Vt(n.path)),r,2,R.I))}}async function Di(t,e,n){const r=b(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=or.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Gn.forEach(e,e=>Gn.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Gn.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Kn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function Pi(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await lr(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new _(w.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Di(n,t.Gn)}}function Li(t,e){const n=b(t),r=n.Uo.get(e);if(r&&r.$o)return Be().add(r.key);{let t=Be();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Po)}return t}}function Mi(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Si.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Li.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ci.bind(null,e),e.Fo.Pr=fi.bind(null,e.eventManager),e.Fo.zo=pi.bind(null,e.eventManager),e}class Fi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Pr(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return ur(this.persistence,new ar,t.initialUser,this.k)}Yo(t){return new Ir(Sr.ks,this.k)}Jo(t){return new Cr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ui{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ki(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pi.bind(null,this.syncEngine),await ni(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new li}createDatastore(t){const e=Pr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new jr(r));var r;return function(t,e,n,r){return new Ur(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>ki(this.syncEngine,t,0),s=Rr.bt()?new Rr:new Ar,new Br(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ei(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);f("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Hr(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=si(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function qi(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await lr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Hi(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zi(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Xr(n);n.Gr.add(3),await Hr(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await qr(n)}(e.remoteStore,t)),t.onlineComponents=e}async function zi(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await qi(t,new Fi)),t.offlineComponents}async function $i(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Hi(t,new Ui)),t.onlineComponents}async function Gi(t){const e=await $i(t),n=e.eventManager;return n.onListen=Ti.bind(null,e.syncEngine),n.onUnlisten=Oi.bind(null,e.syncEngine),n}class Ki{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Wi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e,n){if(!n)throw new _(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qi(t,e,n,r){if(!0===e&&!0===r)throw new _(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yi(t){if(tt.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function ts(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zi(t);throw new _(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new _(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new es({}),this._settingsFrozen=!1,t instanceof Wi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(t.options.projectId)}(t))}get app(){if(!this._app)throw new _(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new es(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new I;switch(t.type){case"gapi":const e=t.client;return y(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new k(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new _(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ji.get(t);e&&(f("ComponentProvider","Removing Datastore"),Ji.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rs(this.firestore,t,this._key)}}class is{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new is(this.firestore,t,this._query)}}class ss extends is{constructor(t,e,n){super(t,e,Vt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rs(this.firestore,null,new tt(t))}withConverter(t){return new ss(this.firestore,t,this._path)}}function os(t,e,...n){if(t=Object(o["i"])(t),Xi("collection","path",e),t instanceof ns){const r=B.fromString(e,...n);return Yi(r),new ss(t,null,r)}{if(!(t instanceof rs||t instanceof ss))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Yi(r),new ss(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Lr(this,"async_queue_retry"),this.Ra=()=>{const t=Dr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Dr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Dr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new E;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Kn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const r=ii.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(r),r}Pa(){this.Ta&&v()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}function cs(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class us extends ns{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new as,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ds(this),this._firestoreClient.terminate()}}function ls(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function hs(t){return t._firestoreClient||ds(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ds(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ki(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Bi(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ps{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ps(z.fromBase64String(t))}catch(t){throw new _(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ps(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new RegExp("[~\\*/\\[\\]]");function vs(t,e,n){if(e.search(ms)>=0)throw ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fs(...e.split("."))._internalPath}catch(r){throw ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ys(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new _(w.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ws(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_s("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ws extends bs{data(){return super.data()}}function _s(t,e){return"string"==typeof e?vs(t,e):e instanceof fs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ts extends bs{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_s("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Is extends Ts{data(t={}){return super.data(t)}}class Os{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Es(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Is(this._firestore,this._userDataWriter,n.key,n,new Es(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Is(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Es(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Is(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Es(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Ss(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ss(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ks(t){if(qt(t)&&0===t.explicitOrderBy.length)throw new _(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Cs(t,...e){for(const n of e)t=n._apply(t);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return F(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new gs(K(t.latitude),K(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=X(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Q(t));default:return null}}convertTimestamp(t){const e=G(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);y(kn(n));const r=new Wi(n.get(1),n.get(3)),i=new tt(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends As{constructor(t){super(),this.firestore=t}convertBytes(t){return new ps(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rs(this.firestore,null,e)}}function xs(t,...e){var n,r,i;t=Object(o["i"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||cs(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(cs(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof rs)l=ts(t.firestore,us),h=Vt(t._key.path),u={next:n=>{e[a]&&e[a](Ns(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=ts(t,is);l=ts(n.firestore,us),h=n._query;const r=new Rs(l);u={next:t=>{e[a]&&e[a](new Os(l,r,n,t))},error:e[a+1],complete:e[a+2]},ks(t._query)}return function(t,e,n,r){const i=new Vi(r),s=new mi(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>hi(await Gi(t),s)),()=>{i.na(),t.asyncQueue.enqueueAndForget(async()=>di(await Gi(t),s))}}(hs(l),h,c,u)}function Ns(t,e,n){const r=n.docs.get(e._key),i=new Rs(t);return new Ts(t,i,e._key,r,new Es(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new us(r,new O(t.getProvider("auth-internal")),new A(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.1",t),Object(r["g"])(c,"3.4.1","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,s(e)&&(e===u||i(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),s=n("e330"),o=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),d=n("50c4"),f=n("577e"),p=n("dc4a"),g=n("4dae"),m=n("14c3"),v=n("9263"),y=n("9f7f"),b=n("d039"),w=y.UNSUPPORTED_Y,_=4294967295,E=Math.min,T=[].push,I=s(/./.exec),O=s(T),S=s("".slice),k=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=f(u(this)),o=void 0===n?_:n>>>0;if(0===o)return[];if(void 0===t)return[s];if(!a(t))return i(e,s,t,o);var c,l,h,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,y=new RegExp(t.source,p+"g");while(c=i(v,y,s)){if(l=y.lastIndex,l>m&&(O(d,S(s,m,c.index)),c.length>1&&c.index<s.length&&r(T,d,g(c,1)),h=c[0].length,m=l,d.length>=o))break;y.lastIndex===c.index&&y.lastIndex++}return m===s.length?!h&&I(y,"")||O(d,""):O(d,S(s,m)),d.length>o?g(d,0,o):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var r=u(this),o=void 0==e?void 0:p(e,t);return o?i(o,e,r,n):i(s,f(r),e,n)},function(t,r){var i=c(this),o=f(t),a=n(s,i,o,r,s!==e);if(a.done)return a.value;var u=l(i,RegExp),p=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),v=new u(w?"^(?:"+i.source+")":i,g),y=void 0===r?_:r>>>0;if(0===y)return[];if(0===o.length)return null===m(v,o)?[o]:[];var b=0,T=0,I=[];while(T<o.length){v.lastIndex=w?0:T;var k,C=m(v,w?S(o,T):o);if(null===C||(k=E(d(v.lastIndex+(w?T:0)),o.length))===b)T=h(o,T,p);else{if(O(I,S(o,b,T)),I.length===y)return I;for(var A=1;A<=C.length-1;A++)if(O(I,C[A]),I.length===y)return I;T=b=k}}return O(I,S(o,b)),I}]}),!k,w)},"14c3":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("825a"),o=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var r=i(n,t,e);return null!==r&&s(r),r}if("RegExp"===a(t))return i(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return N})),n.d(e,"g",(function(){return k})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return L})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return S})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return w})),n.d(e,"p",(function(){return d})),n.d(e,"q",(function(){return g})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return y})),n.d(e,"t",(function(){return A})),n.d(e,"u",(function(){return R}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function v(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return h().indexOf("MSAppHost/")>=0}function b(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?I(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new E(r,o,n);return a}}function I(t,e){return t.replace(O,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(C(n)&&C(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function R(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function x(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){const n=new j(t,e);return n.subscribe.bind(n)}class j{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(t,e){this.stopped=t,this.result=e},m=g.prototype;t.exports=function(t,e,n){var r,v,y,b,w,_,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),k=i(e,T),C=function(t){return r&&f(r,"normal",t),new g(!0,t)},A=function(t){return I?(o(t),S?k(t[0],t[1],C):k(t[0],t[1])):S?k(t,C):k(t)};if(O)r=t;else{if(v=d(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,b=u(t);b>y;y++)if(w=A(t[y]),w&&l(m,w))return w;return new g(!1)}r=h(t,v)}_=r.next;while(!(E=s(_,r)).done){try{w=A(E.value)}catch(R){f(r,"throw",R)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,s,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,s=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,E=a.Function,T=a.MessageChannel,I=a.String,O=0,S={},k="onreadystatechange";try{r=a.location}catch(N){}var C=function(t){if(h(S,t)){var e=S[t];delete S[t],e()}},A=function(t){return function(){C(t)}},R=function(t){C(t.data)},x=function(t){a.postMessage(I(t),r.protocol+"//"+r.host)};y&&b||(y=function(t){var e=p(arguments,1);return S[++O]=function(){c(l(t)?t:E(t),void 0,e)},i(O),O},b=function(t){delete S[t]},v?i=function(t){w.nextTick(A(t))}:_&&_.now?i=function(t){_.now(A(t))}:T&&!m?(s=new T,o=s.port2,s.port1.onmessage=R,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(x)?(i=x,a.addEventListener("message",R,!1)):i=k in g("script")?function(t){f.appendChild(g("script"))[k]=function(){f.removeChild(this),C(t)}}:function(t){setTimeout(A(t),0)}),t.exports={set:y,clear:b}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");t.exports=r?Object.defineProperties:function(t,e){s(t);var n,r=o(e),c=a(e),u=c.length,l=0;while(u>l)i.f(t,n=c[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return o}));var r=n("abc5"),i=n("b774"),s=n("f30a");function o(t,e){const n=Object(r["b"])(),o=Object(r["a"])(),a=r["c"]&&t.enableEarlyProxy;if(!o||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new s["a"](t,o):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}else o.emit(i["b"],t,e)}},"3f8c":function(t,e){t.exports={}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),s=n("b622"),o=s("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=s(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,t[u]);return h.length=d,h}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return H})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return X}));var r=n("22e5"),i=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.11",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",O="@firebase/messaging-compat",S="@firebase/performance",k="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",R="@firebase/storage",x="@firebase/storage-compat",N="@firebase/firestore",j="@firebase/firestore-compat",D="firebase",P="9.6.1",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[O]:"fire-fcm-compat",[S]:"fire-perf",[k]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[R]:"fire-gcs",[x]:"fire-gcs-compat",[N]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function q(t,e){return t.container.getProvider(e)}function H(t,e,n=L){q(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$=new s["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=P;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw $.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["g"])(t,o.options)&&Object(s["g"])(n,o.config))return o;throw $.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new G(t,n,a);return F.set(i,c),c}function J(t=L){const e=F.get(t);if(!e)throw $.create("no-app",{appName:t});return e}function X(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),X(c,u,t),X(c,u,"esm2017"),X("fire-js","")}Q("")},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);t.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||a(d({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var g,m=h(arguments[o++]),v=d?p(a(m),d(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},6547:function(t,e,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=s(o(e)),d=i(n),f=h.length;return d<0||d>=f?t?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?t?a(h,d):r:t?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},m=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f(d,c(t))};t.exports=!h||i((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?m:g},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),E=c(w.has),T=c(w.set);r=function(t,e){if(E(w,t))throw new m(g);return e.facade=t,T(w,t,e),e},i=function(t){return _(w,t)||{}},s=function(t){return E(w,t)}}else{var I=f("state");p[I]=!0,r=function(t,e){if(h(t,I))throw new m(g);return e.facade=t,l(t,I,e),e},i=function(t){return h(t,I)?t[I]:{}},s=function(t){return h(t,I)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return z}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>i?Symbol(t):"_vr_"+t,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function d(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const f=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const m=/\/$/,v=t=>t.replace(m,"");function y(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function _(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(e.matched[r],n.matched[i])&&T(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function E(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!I(t[n],e[n]))return!1;return!0}function I(t,e){return Array.isArray(t)?O(t,e):Array.isArray(e)?O(e,t):t===e}function O(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,C;(function(t){t["pop"]="pop",t["push"]="push"})(k||(k={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(C||(C={}));function A(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const R=/^[^#]+#/;function x(t,e){return t.replace(R,"#")+e}function N(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const j=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=N(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function P(t,e){const n=history.state?history.state.position-e:-1;return n+t}const L=new Map;function M(t,e){L.set(t,e)}function F(t){const e=L.get(t);return L.delete(t),e}let U=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:k.pop,direction:l?l>0?C.forward:C.back:C.unknown})})};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(f({},t.state,{scroll:j()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?j():null}}function H(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:U()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=f({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=f({},i.value,e.state,{forward:t,scroll:j()});s(o.current,o,!0);const a=f({},q(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function z(t){t=A(t);const e=H(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=f({location:"",base:t,go:r,createHref:x.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function $(t){return"string"===typeof t||t&&"object"===typeof t}function G(t){return"string"===typeof t||"symbol"===typeof t}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=s("nf");var J;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(J||(J={}));function X(t,e){return f(new Error,{type:t,[W]:!0},e)}function Q(t,e){return t instanceof Error&&W in t&&(null==e||!!(t.type&e))}const Y="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=f({},Z,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||Y;if(h!==Y){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},st=/[a-zA-Z0-9_]/;function ot(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:st.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function at(t,e,n){const r=et(ot(t.path),n);const i=f(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(f({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,d;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&t.name&&!dt(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(t){if(G(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!dt(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw X(1,{location:t});o=i.record.name,a=f(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find(t=>t.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw X(1,{location:t,currentLocation:e});o=i.record.name,a=f({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:ft(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function dt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ft(t){return t.reduce((t,e)=>f(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const gt=/#/g,mt=/&/g,vt=/\//g,yt=/=/g,bt=/\?/g,wt=/\+/g,_t=/%5B/g,Et=/%5D/g,Tt=/%5E/g,It=/%60/g,Ot=/%7B/g,St=/%7C/g,kt=/%7D/g,Ct=/%20/g;function At(t){return encodeURI(""+t).replace(St,"|").replace(_t,"[").replace(Et,"]")}function Rt(t){return At(t).replace(Ot,"{").replace(kt,"}").replace(Tt,"^")}function xt(t){return At(t).replace(wt,"%2B").replace(Ct,"+").replace(gt,"%23").replace(mt,"%26").replace(It,"`").replace(Ot,"{").replace(kt,"}").replace(Tt,"^")}function Nt(t){return xt(t).replace(yt,"%3D")}function jt(t){return At(t).replace(gt,"%23").replace(bt,"%3F")}function Dt(t){return null==t?"":jt(t).replace(vt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(wt," "),n=t.indexOf("="),s=Pt(n<0?t:t.slice(0,n)),o=n<0?null:Pt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Nt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&xt(t)):[r&&xt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(X(4,{from:n,to:e})):t instanceof Error?a(t):$(t)?a(X(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(qt(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(Vt(c,n,r,s,t))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&Vt(c,n,r,s,t)()}))}}return i}function qt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=Object(r["j"])(c),n=Object(r["j"])(u),i=Object(r["b"])(()=>e.resolve(Object(r["A"])(t.to))),s=Object(r["b"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(E.bind(null,r));if(o>-1)return o;const a=Wt(t[e-2]);return e>1&&Wt(r)===a&&s[s.length-1].path!==a?s.findIndex(E.bind(null,t[e-2])):o}),o=Object(r["b"])(()=>s.value>-1&&Kt(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&T(n.params,i.value.params));function l(n={}){return Gt(n)?e[Object(r["A"])(t.replace)?"replace":"push"](Object(r["A"])(t.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const zt=Object(r["g"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=Object(r["u"])(Ht(t)),{options:i}=Object(r["j"])(c),s=Object(r["b"])(()=>({[Jt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["i"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$t=zt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Wt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=Object(r["g"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["j"])(l),s=Object(r["b"])(()=>t.route||i.value),c=Object(r["j"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["s"])(a,c+1),Object(r["s"])(o,u),Object(r["s"])(l,s);const h=Object(r["v"])();return Object(r["B"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&E(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[t.name],c=t.name;if(!a)return Qt(n.default,{Component:a,route:i});const l=o.props[t.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["i"])(a,f({},d,e,{onVnodeUnmounted:p,ref:h}));return Qt(n.default,{Component:g,route:i})||g}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Yt=Xt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||Lt,i=t.stringifyQuery||Mt,s=t.history;const o=Ut(),a=Ut(),d=Ut(),m=Object(r["y"])(K);let v=K;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),E=p.bind(null,Dt),T=p.bind(null,Pt);function I(t,n){let r,i;return G(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function O(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function C(t){return!!e.getRecordMatcher(t)}function A(t,r){if(r=f({},r||m.value),"string"===typeof t){const i=y(n,t,r.path),o=e.resolve({path:i.path},r),a=s.createHref(i.fullPath);return f(i,o,{params:T(o.params),hash:Pt(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=f({},t,{path:y(n,t.path,r.path).path});else{const e=f({},t.params);for(const t in e)null==e[t]&&delete e[t];o=f({},t,{params:E(t.params)}),r.params=E(r.params)}const a=e.resolve(o,r),c=t.hash||"";a.params=w(T(a.params));const u=b(i,f({},t,{hash:Rt(c),path:a.path})),l=s.createHref(u);return f({fullPath:u,hash:c,query:i===Mt?Ft(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function R(t){return"string"===typeof t?y(n,t,m.value.path):f({},t)}function x(t,e){if(v!==t)return X(8,{from:e,to:t})}function N(t){return V(t)}function L(t){return N(f(R(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),f({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=v=A(t),r=m.value,s=t.state,o=t.force,a=!0===t.replace,c=U(n);if(c)return V(f(R(c),{state:s,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&_(i,r,n)&&(l=X(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(t=>Q(t)?t:tt(t,u,r)).then(t=>{if(t){if(Q(t,2))return V(f(R(t.to),{state:s,force:o,replace:a}),e||u)}else t=z(u,r,!0,a,s);return H(u,r,t),t})}function B(t,e){const n=x(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Vt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of o.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Vt(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Vt(i,t,e));else n.push(Vt(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(s,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).catch(t=>Q(t,8)?t:Promise.reject(t))}function H(t,e,n){for(const r of d.list())r(t,e,n)}function z(t,e,n,r,i){const o=x(t,e);if(o)return o;const a=e===K,c=h?history.state:{};n&&(r||a?s.replace(t.fullPath,f({scroll:a&&c&&c.scroll},i)):s.push(t.fullPath,i)),m.value=t,rt(t,e,n,a),nt()}let $;function W(){$=s.listen((t,e,n)=>{const r=A(t),i=U(r);if(i)return void V(f(i,{replace:!0}),r).catch(g);v=r;const o=m.value;h&&M(P(o.fullPath,n.delta),j()),q(r,o).catch(t=>Q(t,12)?t:Q(t,2)?(V(t.to,r).then(t=>{Q(t,20)&&!n.delta&&n.type===k.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||z(r,o,!1),t&&(n.delta?s.go(-n.delta,!1):n.type===k.pop&&Q(t,20)&&s.go(-1,!1)),H(r,o,t)}).catch(g)})}let J,Y=Ut(),Z=Ut();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return J&&m.value!==K?Promise.resolve():new Promise((t,e)=>{Y.add([t,e])})}function nt(t){J||(J=!0,W(),Y.list().forEach(([e,n])=>t?n(t):e()),Y.reset())}function rt(e,n,i,s){const{scrollBehavior:o}=t;if(!h||!o)return Promise.resolve();const a=!i&&F(P(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["k"])().then(()=>o(e,n,a)).then(t=>t&&D(t)).catch(t=>tt(t,e,n))}const it=t=>s.go(t);let st;const ot=new Set,at={currentRoute:m,addRoute:I,removeRoute:O,hasRoute:C,getRoutes:S,resolve:A,options:t,push:N,replace:L,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",$t),t.component("RouterView",Yt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["A"])(m)}),h&&!st&&m.value===K&&(st=!0,N(s.location).catch(t=>{0}));const n={};for(const s in K)n[s]=Object(r["b"])(()=>m.value[s]);t.provide(c,e),t.provide(u,Object(r["u"])(n)),t.provide(l,m);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(v=K,$&&$(),m.value=K,st=!1,J=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>E(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>E(t,a))||i.push(a))}return[n,r,i]}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7a23":function(t,e,n){"use strict";n.d(e,"b",(function(){return $t})),n.d(e,"u",(function(){return Tt})),n.d(e,"v",(function(){return Mt})),n.d(e,"y",(function(){return Ft})),n.d(e,"A",(function(){return Bt})),n.d(e,"l",(function(){return r["I"]})),n.d(e,"m",(function(){return r["J"]})),n.d(e,"z",(function(){return r["L"]})),n.d(e,"a",(function(){return Fn})),n.d(e,"d",(function(){return Jn})),n.d(e,"e",(function(){return er})),n.d(e,"f",(function(){return nr})),n.d(e,"g",(function(){return _e})),n.d(e,"h",(function(){return br})),n.d(e,"i",(function(){return mi})),n.d(e,"j",(function(){return le})),n.d(e,"k",(function(){return Yr})),n.d(e,"n",(function(){return Oe})),n.d(e,"o",(function(){return Se})),n.d(e,"p",(function(){return Fe})),n.d(e,"q",(function(){return zn})),n.d(e,"r",(function(){return Zt})),n.d(e,"s",(function(){return ue})),n.d(e,"t",(function(){return Yt})),n.d(e,"w",(function(){return hr})),n.d(e,"x",(function(){return Dn})),n.d(e,"B",(function(){return hi})),n.d(e,"c",(function(){return gs}));var r=n("9ff4");let i;const s=[];class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},f=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const b=Symbol(""),w=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),S(),g=1<<++p,p<=m?h(this):E(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,k(),v.pop();const t=v.length;y=t>0?v[t-1]:void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let T=!0;const I=[];function O(){I.push(T),T=!1}function S(){I.push(T),T=!0}function k(){const t=I.pop();T=void 0===t||t}function C(t,e,n){if(!A())return;let r=f.get(t);r||f.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;R(i,s)}function A(){return T&&void 0!==y}function R(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function x(t,e,n,i,s,o){const a=f.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["o"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["o"])(t)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(w)));break;case"delete":Object(r["o"])(t)||(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(w)));break;case"set":Object(r["t"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&N(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);N(c(t))}}function N(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const j=Object(r["H"])("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["E"])),P=V(),L=V(!1,!0),M=V(!0),F=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Rt(this);for(let e=0,i=this.length;e<i;e++)C(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Rt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){O();const n=Rt(this)[e].apply(this,t);return k(),n}}),t}function V(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&s===(t?e?wt:bt:e?yt:vt).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if(Object(r["E"])(i)?D.has(i):j(i))return a;if(t||C(n,"get",i),e)return a;if(Lt(a)){const t=!o||!Object(r["s"])(i);return t?a.value:a}return Object(r["v"])(a)?t?Ot(a):Tt(a):a}}const B=H(),q=H(!0);function H(t=!1){return function(e,n,i,s){let o=e[n];if(!t&&!Ct(i)&&(i=Rt(i),o=Rt(o),!Object(r["o"])(e)&&Lt(o)&&!Lt(i)))return o.value=i,!0;const a=Object(r["o"])(e)&&Object(r["s"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,s);return e===Rt(s)&&(a?Object(r["j"])(i,o)&&x(e,"set",n,i,o):x(e,"add",n,i)),c}}function z(t,e){const n=Object(r["k"])(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&x(t,"delete",e,void 0,i),s}function $(t,e){const n=Reflect.has(t,e);return Object(r["E"])(e)&&D.has(e)||C(t,"has",e),n}function G(t){return C(t,"iterate",Object(r["o"])(t)?"length":b),Reflect.ownKeys(t)}const K={get:P,set:B,deleteProperty:z,has:$,ownKeys:G},W={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},J=Object(r["h"])({},K,{get:L,set:q}),X=t=>t,Q=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Rt(t),s=Rt(e);e!==s&&!n&&C(i,"get",e),!n&&C(i,"get",s);const{has:o}=Q(i),a=r?X:n?jt:Nt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=Rt(n),i=Rt(t);return t!==i&&!e&&C(r,"has",t),!e&&C(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function tt(t,e=!1){return t=t["__v_raw"],!e&&C(Rt(t),"iterate",b),Reflect.get(t,"size",t)}function et(t){t=Rt(t);const e=Rt(this),n=Q(e),r=n.has.call(e,t);return r||(e.add(t),x(e,"add",t,t)),this}function nt(t,e){e=Rt(e);const n=Rt(this),{has:i,get:s}=Q(n);let o=i.call(n,t);o||(t=Rt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&x(n,"set",t,e,a):x(n,"add",t,e),this}function rt(t){const e=Rt(this),{has:n,get:r}=Q(e);let i=n.call(e,t);i||(t=Rt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&x(e,"delete",t,void 0,s),o}function it(){const t=Rt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&x(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Rt(s),a=e?X:t?jt:Nt;return!t&&C(o,"iterate",b),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=Rt(s),a=Object(r["t"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?X:e?jt:Nt;return!e&&C(o,"iterate",u?w:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}function ct(){const t={get(t){return Y(this,t)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ot(i,!1,!1),n[i]=ot(i,!0,!1),e[i]=ot(i,!1,!0),r[i]=ot(i,!0,!0)}),[t,n,e,r]}const[ut,lt,ht,dt]=ct();function ft(t,e){const n=e?t?dt:ht:t?lt:ut;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,s)}const pt={get:ft(!1,!1)},gt={get:ft(!1,!0)},mt={get:ft(!0,!1)};const vt=new WeakMap,yt=new WeakMap,bt=new WeakMap,wt=new WeakMap;function _t(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:_t(Object(r["O"])(t))}function Tt(t){return t&&t["__v_isReadonly"]?t:St(t,!1,K,pt,vt)}function It(t){return St(t,!1,J,gt,yt)}function Ot(t){return St(t,!0,W,mt,bt)}function St(t,e,n,i,s){if(!Object(r["v"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function kt(t){return Ct(t)?kt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ct(t){return!(!t||!t["__v_isReadonly"])}function At(t){return kt(t)||Ct(t)}function Rt(t){const e=t&&t["__v_raw"];return e?Rt(e):t}function xt(t){return Object(r["g"])(t,"__v_skip",!0),t}const Nt=t=>Object(r["v"])(t)?Tt(t):t,jt=t=>Object(r["v"])(t)?Ot(t):t;function Dt(t){A()&&(t=Rt(t),t.dep||(t.dep=c()),R(t.dep))}function Pt(t,e){t=Rt(t),t.dep&&N(t.dep)}function Lt(t){return Boolean(t&&!0===t.__v_isRef)}function Mt(t){return Ut(t,!1)}function Ft(t){return Ut(t,!0)}function Ut(t,e){return Lt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Rt(t),this._value=e?t:Nt(t)}get value(){return Dt(this),this._value}set value(t){t=this._shallow?t:Rt(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Nt(t),Pt(this,t))}}function Bt(t){return Lt(t)?t.value:t}const qt={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ht(t){return kt(t)?t:new Proxy(t,qt)}class zt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(t,()=>{this._dirty||(this._dirty=!0,Pt(this))}),this["__v_isReadonly"]=n}get value(){const t=Rt(this);return Dt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function $t(t,e){let n,i;const s=Object(r["p"])(t);s?(n=t,i=r["d"]):(n=t.get,i=t.set);const o=new zt(n,i,s||!i);return o}Promise.resolve();new Set;new Map;function Gt(t,e,...n){const i=t.vnode.props||r["b"];let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=i[t]||r["b"];o?s=n.map(t=>t.trim()):e&&(s=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(e)]||i[c=Object(r["M"])(Object(r["e"])(e))];!u&&o&&(u=i[c=Object(r["M"])(Object(r["l"])(e))]),u&&Lr(u,t,6,s);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Lr(l,t,6,s)}}function Kt(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!Object(r["p"])(t)){const i=t=>{const n=Kt(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),i.set(t,a),a):(i.set(t,null),null)}function Wt(t,e){return!(!t||!Object(r["w"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let Jt=null,Xt=null;function Qt(t){const e=Jt;return Jt=t,Xt=t&&t.type.__scopeId||null,e}function Yt(t){Xt=t}function Zt(){Xt=null}function te(t,e=Jt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Kn(-1);const i=Qt(e),s=t(...n);return Qt(i),r._d&&Kn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ee(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=t;let v,y;const b=Qt(t);try{if(4&n.shapeFlag){const t=s||i;v=ar(h.call(t,t,d,o,p,f,g)),y=u}else{const t=e;0,v=ar(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),y=e.props?u:ne(u)}}catch(_){qn.length=0,Mr(_,t,1),v=nr(Vn)}let w=v;if(y&&!1!==m){const t=Object.keys(y),{shapeFlag:e}=w;t.length&&7&e&&(a&&t.some(r["u"])&&(y=re(y,a)),w=sr(w,y))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,Qt(b),v}const ne=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["w"])(n))&&((e||(e={}))[n]=t[n]);return e},re=(t,e)=>{const n={};for(const i in t)Object(r["u"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function ie(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||se(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?se(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Wt(u,n))return!0}}return!1}function se(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Wt(n,s))return!0}return!1}function oe({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const ae=t=>t.__isSuspense;function ce(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):si(t)}function ue(t,e){if(yr){let n=yr.provides;const r=yr.parent&&yr.parent.provides;r===n&&(n=yr.provides=Object.create(r)),n[t]=e}else 0}function le(t,e,n=!1){const i=yr||Jt;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Object(r["p"])(e)?e.call(i.proxy):e}else 0}function he(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De(()=>{t.isMounted=!0}),Me(()=>{t.isUnmounting=!0}),t}const de=[Function,Array],fe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},setup(t,{slots:e}){const n=br(),r=he();let i;return()=>{const s=e.default&&we(e.default(),!0);if(!s||!s.length)return;const o=Rt(t),{mode:a}=o;const c=s[0];if(r.isLeaving)return ve(c);const u=ye(c);if(!u)return ve(c);const l=me(u,o,r,n);be(u,l);const h=n.subTree,d=h&&ye(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,f=!0)}if(d&&d.type!==Vn&&(!Qn(u,d)||f)){const t=me(d,o,r,n);if(be(d,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},ve(c);"in-out"===a&&u.type!==Vn&&(t.delayLeave=(t,e,n)=>{const i=ge(r,d);i[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},pe=fe;function ge(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function me(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=e,b=String(t.key),w=ge(n,t),_=(t,e)=>{t&&Lr(t,r,9,e)},E={mode:s,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const s=w[b];s&&Qn(t,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[e])},enter(t){let e=c,r=u,s=l;if(!n.isMounted){if(!i)return;e=m||c,r=v||u,s=y||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?s:r,[t]),E.delayedLeave&&E.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(h,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,d?(d(e,o),d.length<=1&&o()):o()},clone(t){return me(t,e,n,r)}};return E}function ve(t){if(Te(t))return t=sr(t),t.children=null,t}function ye(t){return Te(t)?t.children?t.children[0]:void 0:t}function be(t,e){6&t.shapeFlag&&t.component?be(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function we(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===Fn?(128&s.patchFlag&&r++,n=n.concat(we(s.children,e))):(e||s.type!==Vn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function _e(t){return Object(r["p"])(t)?{setup:t,name:t.name}:t}const Ee=t=>!!t.type.__asyncLoader;const Te=t=>t.type.__isKeepAlive;RegExp,RegExp;function Ie(t,e){return Object(r["o"])(t)?t.some(t=>Ie(t,e)):Object(r["D"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function Oe(t,e){ke(t,"a",e)}function Se(t,e){ke(t,"da",e)}function ke(t,e,n=yr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(xe(e,r,n),n){let t=n.parent;while(t&&t.parent)Te(t.parent.vnode)&&Ce(r,e,n,t),t=t.parent}}function Ce(t,e,n,i){const s=xe(e,t,i,!0);Fe(()=>{Object(r["K"])(i[e],s)},n)}function Ae(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Re(t){return 128&t.shapeFlag?t.ssContent:t}function xe(t,e,n=yr,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;O(),wr(n);const i=Lr(e,n,t,r);return _r(),k(),i});return r?i.unshift(s):i.push(s),s}}const Ne=t=>(e,n=yr)=>(!Or||"sp"===t)&&xe(t,e,n),je=Ne("bm"),De=Ne("m"),Pe=Ne("bu"),Le=Ne("u"),Me=Ne("bum"),Fe=Ne("um"),Ue=Ne("sp"),Ve=Ne("rtg"),Be=Ne("rtc");function qe(t,e=yr){xe("ec",t,e)}let He=!0;function ze(t){const e=We(t),n=t.proxy,i=t.ctx;He=!1,e.beforeCreate&&Ge(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:_,render:E,renderTracked:T,renderTriggered:I,errorCaptured:O,serverPrefetch:S,expose:k,inheritAttrs:C,components:A,directives:R,filters:x}=e,N=null;if(l&&$e(l,i,N,t.appContext.config.unwrapInjectedRef),a)for(const D in a){const t=a[D];Object(r["p"])(t)&&(i[D]=t.bind(n))}if(s){0;const e=s.call(n,n);0,Object(r["v"])(e)&&(t.data=Tt(e))}if(He=!0,o)for(const D in o){const t=o[D],e=Object(r["p"])(t)?t.bind(n,n):Object(r["p"])(t.get)?t.get.bind(n,n):r["d"];0;const s=!Object(r["p"])(t)&&Object(r["p"])(t.set)?t.set.bind(n):r["d"],a=$t({get:e,set:s});Object.defineProperty(i,D,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Ke(c[r],i,n,r);if(u){const t=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{ue(e,t[e])})}function j(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&Ge(h,t,"c"),j(je,d),j(De,f),j(Pe,p),j(Le,g),j(Oe,m),j(Se,v),j(qe,O),j(Be,T),j(Ve,I),j(Me,b),j(Fe,_),j(Ue,S),Object(r["o"])(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});E&&t.render===r["d"]&&(t.render=E),null!=C&&(t.inheritAttrs=C),A&&(t.components=A),R&&(t.directives=R)}function $e(t,e,n=r["d"],i=!1){Object(r["o"])(t)&&(t=Ze(t));for(const s in t){const n=t[s];let o;o=Object(r["v"])(n)?"default"in n?le(n.from||s,n.default,!0):le(n.from||s):le(n),Lt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Ge(t,e,n){Lr(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ke(t,e,n,i){const s=i.includes(".")?pi(n,i):()=>n[i];if(Object(r["D"])(t)){const n=e[t];Object(r["p"])(n)&&hi(s,n)}else if(Object(r["p"])(t))hi(s,t.bind(n));else if(Object(r["v"])(t))if(Object(r["o"])(t))t.forEach(t=>Ke(t,e,n,i));else{const i=Object(r["p"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["p"])(i)&&hi(s,i,t)}else 0}function We(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Je(c,t,o,!0)),Je(c,e,o)):c=e,s.set(e,c),c}function Je(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Je(t,s,n,!0),i&&i.forEach(e=>Je(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Xe[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Xe={data:Qe,props:en,emits:en,methods:en,computed:en,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:en,directives:en,watch:nn,provide:Qe,inject:Ye};function Qe(t,e){return e?t?function(){return Object(r["h"])(Object(r["p"])(t)?t.call(this,this):t,Object(r["p"])(e)?e.call(this,this):e)}:e:t}function Ye(t,e){return en(Ze(t),Ze(e))}function Ze(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function nn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=tn(t[r],e[r]);return n}function rn(t,e,n,i=!1){const s={},o={};Object(r["g"])(o,Yn,1),t.propsDefaults=Object.create(null),on(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:It(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function sn(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=Rt(s),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;on(t,e,s,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(e,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=an(u,c,o,void 0,t,!0)):delete s[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);s[e]=an(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&x(t,"set","$attrs")}function on(t,e,n,i){const[s,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["z"])(u))continue;const l=e[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:Wt(t.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(o){const e=Rt(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=an(s,e,c,i[c],t,!Object(r["k"])(i,c))}}return c}function an(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["p"])(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(wr(s),i=r[n]=t.call(null,e),_r())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function cn(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!Object(r["p"])(t)){const i=t=>{u=!0;const[n,i]=cn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);un(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(un(e)){const n=o[t],i=a[e]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const t=dn(Boolean,i.type),n=dn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["k"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function un(t){return"$"!==t[0]}function ln(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function hn(t,e){return ln(t)===ln(e)}function dn(t,e){return Object(r["o"])(e)?e.findIndex(e=>hn(e,t)):Object(r["p"])(e)&&hn(e,t)?0:-1}const fn=t=>"_"===t[0]||"$stable"===t,pn=t=>Object(r["o"])(t)?t.map(ar):[ar(t)],gn=(t,e,n)=>{const r=te((...t)=>pn(e(...t)),n);return r._c=!1,r},mn=(t,e,n)=>{const i=t._ctx;for(const s in t){if(fn(s))continue;const n=t[s];if(Object(r["p"])(n))e[s]=gn(s,n,i);else if(null!=n){0;const t=pn(n);e[s]=()=>t}}},vn=(t,e)=>{const n=pn(e);t.slots.default=()=>n},yn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Rt(e),Object(r["g"])(e,"_",n)):mn(e,t.slots={})}else t.slots={},e&&vn(t,e);Object(r["g"])(t.slots,Yn,1)},bn=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(s,e),n||1!==t||delete s._):(o=!e.$stable,mn(e,s)),a=e}else e&&(vn(t,e),a={default:1});if(o)for(const r in s)fn(r)||r in a||delete s[r]};function wn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(O(),Lr(c,n,8,[t.el,a,t,e]),k())}}function _n(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let En=0;function Tn(t,e){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const s=_n(),o=new Set;let a=!1;const c=s.app={_uid:En++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:vi,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["p"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["p"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,u){if(!a){const l=nr(n,i);return l.appContext=s,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Nr(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function In(){}const On=ce;function Sn(t){return kn(t)}function kn(t,e){In();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Qn(t,e)&&(r=W(t),H(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Un:y(t,e,n,r);break;case Vn:b(t,e,n,r);break;case Bn:null==t&&w(e,n,r,o);break;case Fn:j(t,e,n,r,i,s,o,a,c);break;default:1&h?I(t,e,n,r,i,s,o,a,c):6&h?D(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,X)}null!=l&&i&&Cn(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)i(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r)},E=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=f(t),i(t,n,r),t=s;i(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),s(t),t=n;s(e)},I=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?S(e,n,r,i,s,o,a,c):R(t,e,i,s,o,a,c)},S=(t,e,n,s,c,u,l,d)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:_}=t;if(t.el&&void 0!==g&&-1===w)f=t.el=g(t.el);else{if(f=t.el=a(t.type,u,v&&v.is,v),8&y?h(f,t.children):16&y&&A(t.children,f,null,s,c,u&&"foreignObject"!==m,l,d),_&&wn(t,null,s,"created"),v){for(const e in v)"value"===e||Object(r["z"])(e)||o(f,e,null,v[e],u,t.children,s,c,K);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&An(p,s,t)}C(f,t,t.scopeId,l,s)}_&&wn(t,null,s,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;E&&b.beforeEnter(f),i(f,e,n),((p=v&&v.onVnodeMounted)||E||_)&&On(()=>{p&&An(p,s,t),E&&b.enter(f),_&&wn(t,null,s,"mounted")},c)},C=(t,e,n,r,i)=>{if(n&&p(t,n),r)for(let s=0;s<r.length;s++)p(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;C(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},A=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cr(t[u]):ar(t[u]);v(null,c,e,n,r,i,s,o,a)}},R=(t,e,n,i,s,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;(m=g.onVnodeBeforeUpdate)&&An(m,n,e,t),f&&wn(e,t,n,"beforeUpdate");const v=s&&"foreignObject"!==e.type;if(d?x(t.dynamicChildren,d,u,n,i,v,a):c||U(t,e,u,null,n,i,v,a,!1),l>0){if(16&l)N(u,e,p,g,n,i,s);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,s),4&l&&o(u,"style",p.style,g.style,s),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,i,K)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=d||N(u,e,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&On(()=>{m&&An(m,n,e,t),f&&wn(e,t,n,"updated")},i)},x=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fn||!Qn(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},N=(t,e,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,K)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||o(t,u,n[u],null,c,e.children,s,a,K);"value"in i&&o(t,"value",n.value,i.value)}},j=(t,e,n,r,s,o,a,u,l)=>{const h=e.el=t?t.el:c(""),d=e.anchor=t?t.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(i(h,n,r),i(d,n,r),A(e.children,n,d,s,o,a,u,l)):f>0&&64&f&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,n,s,o,a,u),(null!=e.key||s&&e===s.subTree)&&Rn(t,e,!0)):U(t,e,n,d,s,o,a,u,l)},D=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):P(e,n,r,i,s,o,c):L(t,e,c)},P=(t,e,n,r,i,s,o)=>{const a=t.component=vr(t,r,i);if(Te(t)&&(a.ctx.renderer=X),Sr(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=nr(Vn);b(null,t,e,n)}}else M(a,t,e,n,i,s,o)},L=(t,e,n)=>{const r=e.component=t.component;if(ie(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,ni(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,s,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:h}=t,f=n;0,u.allowRecurse=!1,n?(n.el=h.el,F(t,n,a)):n=h,i&&Object(r["n"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&An(e,l,n,h),u.allowRecurse=!0;const p=ee(t);0;const g=t.subTree;t.subTree=p,v(g,p,d(g.el),W(g),t,s,o),n.el=p.el,null===f&&oe(t,p.el),c&&On(c,s),(e=n.props&&n.props.onVnodeUpdated)&&On(()=>An(e,l,n,h),s)}else{let a;const{el:c,props:l}=e,{bm:h,m:d,parent:f}=t,p=Ee(e);if(u.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&An(a,f,e),u.allowRecurse=!0,c&&Y){const n=()=>{t.subTree=ee(t),Y(c,t.subTree,t,s,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=ee(t);0,v(null,r,n,i,t,s,o),e.el=r.el}if(d&&On(d,s),!p&&(a=l&&l.onVnodeMounted)){const t=e;On(()=>An(a,f,t),s)}256&e.shapeFlag&&t.a&&On(t.a,s),t.isMounted=!0,e=n=i=null}},u=new _(c,()=>ti(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},F=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,sn(t,e.props,r,n),bn(t,e.children,n),O(),oi(void 0,t.update),k()},U=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,d=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void B(u,d,n,r,i,s,o,a,c);if(256&f)return void V(u,d,n,r,i,s,o,a,c)}8&p?(16&l&&K(u,i,s),d!==u&&h(n,d)):16&l?16&p?B(u,d,n,r,i,s,o,a,c):K(u,i,s,!0):(8&l&&h(n,""),16&p&&A(d,n,r,i,s,o,a,c))},V=(t,e,n,i,s,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?cr(e[f]):ar(e[f]);v(t[f],r,n,null,s,o,a,c,u)}l>h?K(t,s,o,!0,!1,d):A(e,n,i,s,o,a,c,u,d)},B=(t,e,n,i,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?cr(e[l]):ar(e[l]);if(!Qn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?cr(e[f]):ar(e[f]);if(!Qn(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,r=t<h?e[t].el:i;while(l<=f)v(null,e[l]=u?cr(e[l]):ar(e[l]),n,r,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?cr(e[l]):ar(e[l]);null!=t.key&&m.set(t.key,l)}let y,b=0;const w=f-g+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(b>=w){H(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Qn(r,e[y])){i=y;break}void 0===i?H(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,v(r,e[i],n,null,s,o,a,c,u),b++)}const I=_?xn(T):r["a"];for(y=I.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],d=t+1<h?e[t+1].el:i;0===T[l]?v(null,r,n,d,s,o,a,c,u):_&&(y<0||l!==I[y]?q(r,n,d,2):y--)}}},q=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void q(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,X);if(a===Fn){i(o,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Bn)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),On(()=>c.enter(o),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,e,n)},H=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&Cn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!Ee(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&An(g,e,t),6&l)G(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&wn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,X,r):u&&(s!==Fn||h>0&&64&h)?K(u,e,n,!1,!0):(s===Fn&&384&h||!i&&16&l)&&K(c,e,n),r&&z(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&On(()=>{g&&An(g,e,t),f&&wn(t,null,e,"unmounted")},n)},z=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fn)return void $(n,r);if(e===Bn)return void T(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},$=(t,e)=>{let n;while(t!==e)n=f(t),s(t),t=n;s(e)},G=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,H(a,t,e,n)),c&&On(c,e),On(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},K=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)H(t[o],e,n,r,i)},W=t=>6&t.shapeFlag?W(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),J=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),ai(),e._vnode=t},X={p:v,um:H,m:q,r:z,mt:P,mc:A,pc:U,pbc:x,n:W,o:t};let Q,Y;return e&&([Q,Y]=e(X)),{render:J,hydrate:Q,createApp:Tn(J,Q)}}function Cn(t,e,n,i,s=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>Cn(t,e&&(Object(r["o"])(e)?e[o]:e),n,i,s));if(Ee(i)&&!s)return;const o=4&i.shapeFlag?Nr(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):Lt(l)&&(l.value=null)),Object(r["D"])(u)){const t=()=>{h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)};a?(t.id=-1,On(t,n)):t()}else if(Lt(u)){const t=()=>{u.value=a};a?(t.id=-1,On(t,n)):t()}else Object(r["p"])(u)&&Pr(u,c,12,[a,h])}function An(t,e,n,r=null){Lr(t,e,7,[n,r])}function Rn(t,e,n=!1){const i=t.children,s=e.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=cr(s[r]),e.el=t.el),n||Rn(t,e))}}function xn(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Nn=t=>t.__isTeleport;const jn="components";function Dn(t,e){return Ln(jn,t,!0,e)||t}const Pn=Symbol();function Ln(t,e,n=!0,i=!1){const s=Jt||yr;if(s){const n=s.type;if(t===jn){const t=jr(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=Mn(s[t]||n[t],e)||Mn(s.appContext[t],e);return!o&&i?n:o}}function Mn(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Fn=Symbol(void 0),Un=Symbol(void 0),Vn=Symbol(void 0),Bn=Symbol(void 0),qn=[];let Hn=null;function zn(t=!1){qn.push(Hn=t?null:[])}function $n(){qn.pop(),Hn=qn[qn.length-1]||null}let Gn=1;function Kn(t){Gn+=t}function Wn(t){return t.dynamicChildren=Gn>0?Hn||r["a"]:null,$n(),Gn>0&&Hn&&Hn.push(t),t}function Jn(t,e,n,r,i,s){return Wn(er(t,e,n,r,i,s,!0))}function Xn(t){return!!t&&!0===t.__v_isVNode}function Qn(t,e){return t.type===e.type&&t.key===e.key}const Yn="__vInternal",Zn=({key:t})=>null!=t?t:null,tr=({ref:t})=>null!=t?Object(r["D"])(t)||Lt(t)||Object(r["p"])(t)?{i:Jt,r:t}:t:null;function er(t,e=null,n=null,i=0,s=null,o=(t===Fn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zn(e),ref:e&&tr(e),scopeId:Xt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(ur(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Gn>0&&!a&&Hn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Hn.push(u),u}const nr=rr;function rr(t,e=null,n=null,i=0,s=null,o=!1){if(t&&t!==Pn||(t=Vn),Xn(t)){const r=sr(t,e,!0);return n&&ur(r,n),r}if(Dr(t)&&(t=t.__vccOpts),e){e=ir(e);let{class:t,style:n}=e;t&&!Object(r["D"])(t)&&(e.class=Object(r["I"])(t)),Object(r["v"])(n)&&(At(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["J"])(n))}const a=Object(r["D"])(t)?1:ae(t)?128:Nn(t)?64:Object(r["v"])(t)?4:Object(r["p"])(t)?2:0;return er(t,e,n,i,s,a,o,!0)}function ir(t){return t?At(t)||Yn in t?Object(r["h"])({},t):t:null}function sr(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,c=e?lr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zn(c),ref:e&&e.ref?n&&s?Object(r["o"])(s)?s.concat(tr(e)):[s,tr(e)]:tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fn?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),el:t.el,anchor:t.anchor};return u}function or(t=" ",e=0){return nr(Un,null,t,e)}function ar(t){return null==t||"boolean"===typeof t?nr(Vn):Object(r["o"])(t)?nr(Fn,null,t.slice()):"object"===typeof t?cr(t):nr(Un,null,String(t))}function cr(t){return null===t.el||t.memo?t:sr(t)}function ur(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),ur(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Yn in e?3===r&&Jt&&(1===Jt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Jt}}else Object(r["p"])(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),64&i?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function lr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["I"])([e.class,i.class]));else if("style"===t)e.style=Object(r["J"])([e.style,i.style]);else if(Object(r["w"])(t)){const n=e[t],s=i[t];n===s||Object(r["o"])(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function hr(t,e,n,i){let s;const o=n&&n[i];if(Object(r["o"])(t)||Object(r["D"])(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(r["v"])(t))if(t[Symbol.iterator])s=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const dr=t=>t?Er(t)?Nr(t)||t.proxy:dr(t.parent):null,fr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dr(t.parent),$root:t=>dr(t.root),$emit:t=>t.emit,$options:t=>We(t),$forceUpdate:t=>()=>ti(t.update),$nextTick:t=>Yr.bind(t.proxy),$watch:t=>fi.bind(t)}),pr={get({_:t},e){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=1,i[e];if(s!==r["b"]&&Object(r["k"])(s,e))return a[e]=2,s[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=3,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=4,n[e];He&&(a[e]=0)}}const h=fr[e];let d,f;return h?("$attrs"===e&&C(t,"get",e),h(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=4,n[e]):(f=u.config.globalProperties,Object(r["k"])(f,e)?f[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;if(s!==r["b"]&&Object(r["k"])(s,e))s[e]=n;else if(i!==r["b"]&&Object(r["k"])(i,e))i[e]=n;else if(Object(r["k"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(fr,a)||Object(r["k"])(s.config.globalProperties,a)}};const gr=_n();let mr=0;function vr(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||gr,a={uid:mr++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(i,s),emitsOptions:Kt(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Gt.bind(null,a),t.ce&&t.ce(a),a}let yr=null;const br=()=>yr||Jt,wr=t=>{yr=t,t.scope.on()},_r=()=>{yr&&yr.scope.off(),yr=null};function Er(t){return 4&t.vnode.shapeFlag}let Tr,Ir,Or=!1;function Sr(t,e=!1){Or=e;const{props:n,children:r}=t.vnode,i=Er(t);rn(t,n,i,e),yn(t,r);const s=i?kr(t,e):void 0;return Or=!1,s}function kr(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xt(new Proxy(t.ctx,pr));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?xr(t):null;wr(t),O();const s=Pr(i,t,0,[t.props,n]);if(k(),_r(),Object(r["y"])(s)){if(s.then(_r,_r),e)return s.then(n=>{Cr(t,n,e)}).catch(e=>{Mr(e,t,0)});t.asyncDep=s}else Cr(t,s,e)}else Ar(t,e)}function Cr(t,e,n){Object(r["p"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["v"])(e)&&(t.setupState=Ht(e)),Ar(t,n)}function Ar(t,e,n){const i=t.type;if(!t.render){if(!e&&Tr&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=Tr(e,c)}}t.render=i.render||r["d"],Ir&&Ir(t)}wr(t),O(),ze(t),k(),_r()}function Rr(t){return new Proxy(t.attrs,{get(e,n){return C(t,"get","$attrs"),e[n]}})}function xr(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Rr(t))},slots:t.slots,emit:t.emit,expose:e}}function Nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ht(xt(t.exposed)),{get(e,n){return n in e?e[n]:n in fr?fr[n](t):void 0}}))}function jr(t){return Object(r["p"])(t)&&t.displayName||t.name}function Dr(t){return Object(r["p"])(t)&&"__vccOpts"in t}function Pr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Mr(s,e,n)}return i}function Lr(t,e,n,i){if(Object(r["p"])(t)){const s=Pr(t,e,n,i);return s&&Object(r["y"])(s)&&s.catch(t=>{Mr(t,e,n)}),s}const s=[];for(let r=0;r<t.length;r++)s.push(Lr(t[r],e,n,i));return s}function Mr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Pr(o,null,10,[t,i,s])}Fr(t,n,i,r)}function Fr(t,e,n,r=!0){console.error(t)}let Ur=!1,Vr=!1;const Br=[];let qr=0;const Hr=[];let zr=null,$r=0;const Gr=[];let Kr=null,Wr=0;const Jr=Promise.resolve();let Xr=null,Qr=null;function Yr(t){const e=Xr||Jr;return t?e.then(this?t.bind(this):t):e}function Zr(t){let e=qr+1,n=Br.length;while(e<n){const r=e+n>>>1,i=ci(Br[r]);i<t?e=r+1:n=r}return e}function ti(t){Br.length&&Br.includes(t,Ur&&t.allowRecurse?qr+1:qr)||t===Qr||(null==t.id?Br.push(t):Br.splice(Zr(t.id),0,t),ei())}function ei(){Ur||Vr||(Vr=!0,Xr=Jr.then(ui))}function ni(t){const e=Br.indexOf(t);e>qr&&Br.splice(e,1)}function ri(t,e,n,i){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),ei()}function ii(t){ri(t,zr,Hr,$r)}function si(t){ri(t,Kr,Gr,Wr)}function oi(t,e=null){if(Hr.length){for(Qr=e,zr=[...new Set(Hr)],Hr.length=0,$r=0;$r<zr.length;$r++)zr[$r]();zr=null,$r=0,Qr=null,oi(t,e)}}function ai(t){if(Gr.length){const t=[...new Set(Gr)];if(Gr.length=0,Kr)return void Kr.push(...t);for(Kr=t,Kr.sort((t,e)=>ci(t)-ci(e)),Wr=0;Wr<Kr.length;Wr++)Kr[Wr]();Kr=null,Wr=0}}const ci=t=>null==t.id?1/0:t.id;function ui(t){Vr=!1,Ur=!0,oi(t),Br.sort((t,e)=>ci(t)-ci(e));r["d"];try{for(qr=0;qr<Br.length;qr++){const t=Br[qr];t&&!1!==t.active&&Pr(t,null,14)}}finally{qr=0,Br.length=0,ai(t),Ur=!1,Xr=null,(Br.length||Hr.length||Gr.length)&&ui(t)}}const li={};function hi(t,e,n){return di(t,e,n)}function di(t,e,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=yr;let u,l,h=!1,d=!1;if(Lt(t)?(u=()=>t.value,h=!!t._shallow):kt(t)?(u=()=>t,i=!0):Object(r["o"])(t)?(d=!0,h=t.some(kt),u=()=>t.map(t=>Lt(t)?t.value:kt(t)?gi(t):Object(r["p"])(t)?Pr(t,c,2):void 0)):u=Object(r["p"])(t)?e?()=>Pr(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Lr(t,c,3,[f])}:r["d"],e&&i){const t=u;u=()=>gi(t())}let f=t=>{l=v.onStop=()=>{Pr(t,c,4)}};if(Or)return f=r["d"],e?n&&Lr(e,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:li;const g=()=>{if(v.active)if(e){const t=v.run();(i||h||(d?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Lr(e,c,3,[t,p===li?void 0:p,f]),p=t)}else v.run()};let m;g.allowRecurse=!!e,m="sync"===s?g:"post"===s?()=>On(g,c&&c.suspense):()=>{!c||c.isMounted?ii(g):g()};const v=new _(u,m);return e?n?g():p=v.run():"post"===s?On(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function fi(t,e,n){const i=this.proxy,s=Object(r["D"])(t)?t.includes(".")?pi(i,t):()=>i[t]:t.bind(i,i);let o;Object(r["p"])(e)?o=e:(o=e.handler,n=e);const a=yr;wr(this);const c=di(s,o.bind(i),n);return a?wr(a):_r(),c}function pi(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function gi(t,e){if(!Object(r["v"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Lt(t))gi(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)gi(t[n],e);else if(Object(r["B"])(t)||Object(r["t"])(t))t.forEach(t=>{gi(t,e)});else if(Object(r["x"])(t))for(const n in t)gi(t[n],e);return t}function mi(t,e,n){const i=arguments.length;return 2===i?Object(r["v"])(e)&&!Object(r["o"])(e)?Xn(e)?nr(t,null,[e]):nr(t,e):nr(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Xn(n)&&(n=[n]),nr(t,e,n))}Symbol("");const vi="3.2.24",yi="http://www.w3.org/2000/svg",bi="undefined"!==typeof document?document:null,wi=new Map,_i={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?bi.createElementNS(yi,t):bi.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>bi.createTextNode(t),createComment:t=>bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=wi.get(t);if(!s){const e=bi.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,s=e.content,r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}wi.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ei(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ti(t,e,n){const i=t.style,s=Object(r["D"])(n);if(n&&!s){for(const t in n)Oi(i,t,n[t]);if(e&&!Object(r["D"])(e))for(const t in e)null==n[t]&&Oi(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Ii=/\s*!important$/;function Oi(t,e,n){if(Object(r["o"])(n))n.forEach(n=>Oi(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Ci(t,e);Ii.test(n)?t.setProperty(Object(r["l"])(i),n.replace(Ii,""),"important"):t[i]=n}}const Si=["Webkit","Moz","ms"],ki={};function Ci(t,e){const n=ki[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return ki[e]=i;i=Object(r["f"])(i);for(let r=0;r<Si.length;r++){const n=Si[r]+i;if(n in t)return ki[e]=n}return e}const Ai="http://www.w3.org/1999/xlink";function Ri(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Ai,e.slice(6,e.length)):t.setAttributeNS(Ai,e,n);else{const i=Object(r["C"])(e);null==n||i&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xi(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["m"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Ni=Date.now,ji=!1;if("undefined"!==typeof window){Ni()>document.createEvent("Event").timeStamp&&(Ni=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ji=!!(t&&Number(t[1])<=53)}let Di=0;const Pi=Promise.resolve(),Li=()=>{Di=0},Mi=()=>Di||(Pi.then(Li),Di=Ni());function Fi(t,e,n,r){t.addEventListener(e,n,r)}function Ui(t,e,n,r){t.removeEventListener(e,n,r)}function Vi(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=qi(e);if(r){const o=s[e]=Hi(r,i);Fi(t,n,o,a)}else o&&(Ui(t,n,o,a),s[e]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function qi(t){let e;if(Bi.test(t)){let n;e={};while(n=t.match(Bi))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function Hi(t,e){const n=t=>{const r=t.timeStamp||Ni();(ji||r>=n.attached-1)&&Lr(zi(t,n.value),e,5,[t])};return n.value=t,n.attached=Mi(),n}function zi(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const $i=/^on[a-z]/,Gi=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?Ei(t,i,s):"style"===e?Ti(t,n,i):Object(r["w"])(e)?Object(r["u"])(e)||Vi(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Ki(t,e,i,s))?xi(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),Ri(t,e,i,s))};function Ki(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&$i.test(e)&&Object(r["p"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!$i.test(e)||!Object(r["D"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Wi="transition",Ji="animation",Xi=(t,{slots:e})=>mi(pe,ts(t),e);Xi.displayName="Transition";const Qi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yi=(Xi.props=Object(r["h"])({},pe.props,Qi),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),Zi=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function ts(t){const e={};for(const r in t)r in Qi||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=es(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:I=b,onAppearCancelled:O=w}=e,S=(t,e,n)=>{is(t,e?h:c),is(t,e?l:a),n&&n()},k=(t,e)=>{is(t,p),is(t,f),e&&e()},C=t=>(e,n)=>{const r=t?I:b,s=()=>S(e,t,n);Yi(r,[e,s]),ss(()=>{is(e,t?u:o),rs(e,t?h:c),Zi(r)||as(e,i,m,s)})};return Object(r["h"])(e,{onBeforeEnter(t){Yi(y,[t]),rs(t,o),rs(t,a)},onBeforeAppear(t){Yi(T,[t]),rs(t,u),rs(t,l)},onEnter:C(!1),onAppear:C(!0),onLeave(t,e){const n=()=>k(t,e);rs(t,d),hs(),rs(t,f),ss(()=>{is(t,d),rs(t,p),Zi(_)||as(t,i,v,n)}),Yi(_,[t,n])},onEnterCancelled(t){S(t,!1),Yi(w,[t])},onAppearCancelled(t){S(t,!0),Yi(O,[t])},onLeaveCancelled(t){k(t),Yi(E,[t])}})}function es(t){if(null==t)return null;if(Object(r["v"])(t))return[ns(t.enter),ns(t.leave)];{const e=ns(t);return[e,e]}}function ns(t){const e=Object(r["N"])(t);return e}function rs(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ss(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let os=0;function as(t,e,n,r){const i=t._endId=++os,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=cs(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function cs(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Wi+"Delay"),s=r(Wi+"Duration"),o=us(i,s),a=r(Ji+"Delay"),c=r(Ji+"Duration"),u=us(a,c);let l=null,h=0,d=0;e===Wi?o>0&&(l=Wi,h=o,d=s.length):e===Ji?u>0&&(l=Ji,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Wi:Ji:null,d=l?l===Wi?s.length:c.length:0);const f=l===Wi&&/\b(transform|all)(,|$)/.test(n[Wi+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function us(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>ls(e)+ls(t[n])))}function ls(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function hs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ds=Object(r["h"])({patchProp:Gi},_i);let fs;function ps(){return fs||(fs=Sn(ds))}const gs=(...t)=>{const e=ps().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=ms(t);if(!i)return;const s=e._component;Object(r["p"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ms(t){if(Object(r["D"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),s=r.Object;t.exports=function(t){return s(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=w(),void 0===e?n:s(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),E="keys",T="values",I="entries",O=function(){return this};t.exports=function(t,e,n,o,p,m,S){c(n,e,o);var k,C,A,R=function(t){if(t===p&&P)return P;if(!w&&t in j)return j[t];switch(t){case E:return function(){return new n(this,t)};case T:return function(){return new n(this,t)};case I:return function(){return new n(this,t)}}return function(){return new n(this)}},x=e+" Iterator",N=!1,j=t.prototype,D=j[_]||j["@@iterator"]||p&&j[p],P=!w&&D||R(p),L="Array"==e&&j.entries||D;if(L&&(k=u(L.call(new t)),k!==Object.prototype&&k.next&&(s||u(k)===b||(l?l(k,b):a(k[_])||f(k,_,O)),h(k,x,!0,!0),s&&(g[x]=O))),v&&p==T&&D&&D.name!==T&&(!s&&y?d(j,"name",T):(N=!0,P=function(){return i(D,this)})),p)if(C={values:R(T),keys:m?P:R(E),entries:R(I)},S)for(A in C)(w||N||!(A in j))&&f(j,A,C[A]);else r({target:e,proto:!0,forced:w||N},C);return s&&!S||j[_]===P||f(j,_,P,{name:p}),g[e]=P,C}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Cr})),n.d(e,"b",(function(){return Rr})),n.d(e,"c",(function(){return Ar})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return xr})),n.d(e,"f",(function(){return jr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return kr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function I(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t){return/^[\s\xa0]*$/.test(t)}var C,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function R(t,e){return-1!=t.indexOf(e)}function x(t,e){return t<e?-1:t>e?1:0}t:{var N=a.navigator;if(N){var j=N.userAgent;if(j){C=j;break t}}C=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=Y;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var V,B=R(C,"Opera"),q=R(C,"Trident")||R(C,"MSIE"),H=R(C,"Edge"),z=H||q,$=R(C,"Gecko")&&!(R(C.toLowerCase(),"webkit")&&!R(C,"Edge"))&&!(R(C,"Trident")||R(C,"MSIE"))&&!R(C,"Edge"),G=R(C.toLowerCase(),"webkit")&&!R(C,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",J=function(){var t=C;return $?/rv:([^\);]+)(\)|;)/.exec(t):H?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):G?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(W=J?J[1]:""),q){var X=K();if(null!=X&&X>parseFloat(W)){V=String(X);break t}}V=W}var Q,Y={};function Z(){return U((function(){let t=0;const e=A(String(V)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=K();Q=tt||(parseInt(V,10)||void 0)}else Q=void 0;var et=Q,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Ot(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof lt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function St(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ct(o,r,!0,e)&&i}if(o=e.g=t,i=Ct(o,r,!0,e)&&i,i=Ct(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ct(o,r,!1,e)&&i}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(St,b),St.prototype[ot]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=a.JSON.stringify;function Rt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=jt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,jt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dt,t=>t.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){a.setTimeout(()=>{throw t},0)}function Lt(t,e){Nt||Mt(),Ft||(Nt(),Ft=!0),Ut.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Nt=function(){t.then(Vt)}}var Ft=!1,Ut=new xt;function Vt(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=jt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=Ht(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Bt,St),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kt(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class $t extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){b.call(this),this.h=t,this.g={}}y(Gt,b);var Kt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var s=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Jt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.Z.M.call(this),Jt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();kt(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();kt(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(se,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Gt(this),this.P=Te,t=z?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Te=45e3,Ie={},Oe={};function Se(t,e,n){t.K=1,t.v=Qe($e(e)),t.s=n,t.U=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),xe(t),t.A=$e(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $t(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Qt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Re(t,n),r==Oe){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Le(t,r)}Ce(t)&&r!=Oe&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),De(t))}function Re(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Oe:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Oe:(e=e.substr(r,n),t.C=r+n,e)))}function xe(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function je(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||pr(t.l,t)}function Pe(t){je(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!k(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(R(t,"spdy")||R(t,"quic")||R(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(je(a),xe(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),je(this);var n=this.g.ba();this.N=n;e:if(Ce(this)){var r=Jn(this.g);t="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),De(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Pe(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.U?(Ae(this,h,o),z&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Le(this,o)),4==h&&Pe(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),De(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(je(this),Ae(this,t,e),this.i&&4!=t&&xe(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,De(this)):Ne(this,this.Y-t)},r=Ue.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,Ge(this,t.j),this.s=t.s,Ke(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Ge(this,n[1]||"",!0),this.s=tn(n[2]||""),Ke(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function $e(t){return new ze(t)}function Ge(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Qe(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ye(t){return t instanceof ze?$e(t):new ze(t,void 0)}function Ze(t,e,n,r){var i=new ze(null,void 0);return t&&Ge(i,t),e&&Ke(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&He(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function dn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=O(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function On(){}function Sn(){this.g=new On}function kn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=v(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(An,n,r,"TestLoadImage: error",!1,e),r.onabort=v(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(An,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Rn(t){this.l=t.$b||null,this.j=t.ib||!1}function xn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},On.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(Rn,fe),Rn.prototype.g=function(){return new xn(this.l,this.j)},Rn.prototype.i=function(t){return function(){return t}}({}),y(xn,St);var Nn=0;function jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pn(t)}function Pn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=xn.prototype,r.open=function(t,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Nn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Pn(this),3==this.readyState&&jn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(t){St.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,St);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),Gn(t)}function zn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function $n(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Ht(t.Fa,0,t);else if(kt(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{Gn(t)}}}function Gn(t,e){if(t.g){Kn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Kn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yn("baseRetryDelayMs",5e3,t),this.$a=Yn("retryDelaySeedMs",1e4,t),this.Ya=Yn("forwardChannelMaxRetries",2,t),this.ra=Yn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=$e(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Qe($e(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xe(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Lt(t.Ha,t),t.C=0)}function sr(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=$e(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Qn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{kn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Lt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=$e(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qe($e(e)),n.s=null,n.U=!0,ke(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),kt(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ge(n,"https"),Qe(n)),Cn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Ye(n);if(""!=r.i)e&&Ke(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new Rn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function wr(){}function _r(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}function Tr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ir(){be.call(this),this.status=1}function Or(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Hn(this,s)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=I(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ht(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?$n(this):this.cb())},r.cb=function(){$n(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ln(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=P(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=$e(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Qn(n,this.o,s),En(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Er(t,e)},y(Er,St),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=At(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},y(Tr,ye),y(Ir,be),y(Or,wr),Or.prototype.xa=function(){kt(this.g,"a")},Or.prototype.wa=function(t){kt(this.g,new Tr(t))},Or.prototype.va=function(t){kt(this.g,new Ir(t))},Or.prototype.ua=function(){kt(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",St.prototype.listen=St.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=s.createWebChannelTransport=function(){return new _r},kr=s.getStatEventTarget=function(){return ie()},Cr=s.ErrorCode=he,Ar=s.EventType=de,Rr=s.Event=ne,xr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=s.FetchXmlHttpFactory=Rn,jr=s.WebChannel=ge,Dr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),s=n("577e"),o=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],T=w||E||_||h||d;T&&(g=function(t){var e,n,i,a,c,h,d,T=this,I=l(T),O=s(t),S=I.raw;if(S)return S.lastIndex=T.lastIndex,e=r(g,S,O),T.lastIndex=S.lastIndex,e;var k=I.groups,C=_&&T.sticky,A=r(o,T),R=T.source,x=0,N=O;if(C&&(A=y(A,"y",""),-1===v(A,"g")&&(A+="g"),N=b(O,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==m(O,T.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,x++),n=new RegExp("^(?:"+R+")",A)),E&&(n=new RegExp("^"+R+"$(?!\\s)",A)),w&&(i=T.lastIndex),a=r(p,C?n:T,N),C?a?(a.input=b(a.input,x),a[0]=b(a[0],x),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:w&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&k)for(a.groups=h=u(null),c=0;c<k.length;c++)d=k[c],h[d[0]]=a[d[1]];return a}),t.exports=g},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",y=i.TypeError,b=p>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),w=d("concat"),_=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},E=!b||!w;r({target:"Array",proto:!0,forced:E},{concat:function(t){var e,n,r,i,s,o=c(this),a=h(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?o:arguments[e],_(s)){if(i=u(s),d+i>m)throw y(v);for(n=0;n<i;n++,d++)n in s&&l(a,d,s[n])}else{if(d>=m)throw y(v);l(a,d++,s)}return a.length=d,a}})},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(i(n,t));throw u(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;e.f=i?u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:s(+!u,n)}),o(t,l,!1,!0),a[l]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp,o=r((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return tt})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return R})),n.d(e,"i",(function(){return at})),n.d(e,"j",(function(){return nt})),n.d(e,"k",(function(){return j})),n.d(e,"l",(function(){return Z})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return rt})),n.d(e,"o",(function(){return D})),n.d(e,"p",(function(){return F})),n.d(e,"q",(function(){return s})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return K})),n.d(e,"t",(function(){return P})),n.d(e,"u",(function(){return A})),n.d(e,"v",(function(){return B})),n.d(e,"w",(function(){return C})),n.d(e,"x",(function(){return G})),n.d(e,"y",(function(){return q})),n.d(e,"z",(function(){return W})),n.d(e,"A",(function(){return v})),n.d(e,"B",(function(){return L})),n.d(e,"C",(function(){return a})),n.d(e,"D",(function(){return U})),n.d(e,"E",(function(){return V})),n.d(e,"F",(function(){return b})),n.d(e,"G",(function(){return w})),n.d(e,"H",(function(){return r})),n.d(e,"I",(function(){return f})),n.d(e,"J",(function(){return u})),n.d(e,"K",(function(){return x})),n.d(e,"L",(function(){return _})),n.d(e,"M",(function(){return et})),n.d(e,"N",(function(){return st})),n.d(e,"O",(function(){return $}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=U(r)?d(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return U(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function f(t){let e="";if(U(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=D(t),r=D(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const _=t=>null==t?"":D(t)||B(t)&&(t.toString===H||!F(t.toString))?JSON.stringify(t,E,2):String(t),E=(t,e)=>e&&e.__v_isRef?E(t,e.value):P(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:L(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||D(e)||G(e)?e:String(e),T={},I=[],O=()=>{},S=()=>!1,k=/^on[^a-z]/,C=t=>k.test(t),A=t=>t.startsWith("onUpdate:"),R=Object.assign,x=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},N=Object.prototype.hasOwnProperty,j=(t,e)=>N.call(t,e),D=Array.isArray,P=t=>"[object Map]"===z(t),L=t=>"[object Set]"===z(t),M=t=>t instanceof Date,F=t=>"function"===typeof t,U=t=>"string"===typeof t,V=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,q=t=>B(t)&&F(t.then)&&F(t.catch),H=Object.prototype.toString,z=t=>H.call(t),$=t=>z(t).slice(8,-1),G=t=>"[object Object]"===z(t),K=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,W=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},X=/-(\w)/g,Q=J(t=>t.replace(X,(t,e)=>e?e.toUpperCase():"")),Y=/\B([A-Z])/g,Z=J(t=>t.replace(Y,"-$1").toLowerCase()),tt=J(t=>t.charAt(0).toUpperCase()+t.slice(1)),et=J(t=>t?"on"+tt(t):""),nt=(t,e)=>!Object.is(t,e),rt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ot;const at=()=>ot||(ot="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,E=h.Promise,T=f(h,"queueMicrotask"),I=T&&T.value;I||(r=function(){var t,e;y&&(t=_.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},g||y||v||!b||!w?!m&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=d(u.then,u),o=function(){l(r)}):y?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=I||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},b727:function(t,e,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,g,m,v){for(var y,b,w=o(p),_=s(w),E=r(g,m),T=a(_),I=0,O=v||c,S=e?O(p,T):n||d?O(p,0):void 0;T>I;I++)if((f||I in _)&&(y=_[I],b=E(y,I,w),t))if(e)S[I]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return I;case 2:u(S,y)}else switch(t){case 4:return!1;case 7:u(S,y)}return h?-1:i||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b774:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));const r="devtools-plugin:setup",i="plugin:settings:set"},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),s=n("9263"),o=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,h){var d=a(t),f=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!p||n){var g=r(/./[d]),m=e(d,""[t],(function(t,e,n,i,o){var a=r(t),c=e.exec;return c===s||c===l.exec?f&&!o?{done:!0,value:g(e,n,i)}:{done:!0,value:a(n,e,i)}:{done:!1}}));i(String.prototype,t,m[0]),i(l,d,m[1])}h&&c(l[d],"sham",!0)}},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,s=r&&r.bind(i);t.exports=r?function(t){return t&&s(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),E=n("8925"),T=n("2266"),I=n("1c7e"),O=n("4840"),S=n("2cf4").set,k=n("b575"),C=n("cdf9"),A=n("44de"),R=n("f069"),x=n("e667"),N=n("69f3"),j=n("94ca"),D=n("b622"),P=n("6069"),L=n("605d"),M=n("2d00"),F=D("species"),U="Promise",V=N.getterFor(U),B=N.set,q=N.getterFor(U),H=d&&d.prototype,z=d,$=H,G=u.TypeError,K=u.document,W=u.process,J=R.f,X=J,Q=!!(K&&K.createEvent&&u.dispatchEvent),Y=b(u.PromiseRejectionEvent),Z="unhandledrejection",tt="rejectionhandled",et=0,nt=1,rt=2,it=1,st=2,ot=!1,at=j(U,(function(){var t=E(z),e=t!==String(z);if(!e&&66===M)return!0;if(c&&!$["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new z((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,ot=n.then((function(){}))instanceof r,!ot||!e&&P&&!Y})),ct=at||!I((function(t){z.all(t)["catch"]((function(){}))})),ut=function(t){var e;return!(!w(t)||!b(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;k((function(){var r=t.value,i=t.state==nt,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,d=u.resolve,f=u.reject,p=u.domain;try{l?(i||(t.rejection===st&&pt(t),t.rejection=it),!0===l?o=r:(p&&p.enter(),o=l(r),p&&(p.exit(),c=!0)),o===u.promise?f(G("Promise-chain cycle")):(a=ut(o))?h(a,o,d,f):d(o)):f(r)}catch(g){p&&!c&&p.exit(),f(g)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&dt(t)}))}},ht=function(t,e,n){var r,i;Q?(r=K.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Y&&(i=u["on"+t])?i(r):t===Z&&A("Unhandled promise rejection",n)},dt=function(t){h(S,u,(function(){var e,n=t.facade,r=t.value,i=ft(t);if(i&&(e=x((function(){L?W.emit("unhandledRejection",r,n):ht(Z,n,r)})),t.rejection=L||ft(t)?st:it,e.error))throw e.value}))},ft=function(t){return t.rejection!==it&&!t.parent},pt=function(t){h(S,u,(function(){var e=t.facade;L?W.emit("rejectionHandled",e):ht(tt,e,t.value)}))},gt=function(t,e,n){return function(r){t(e,r,n)}},mt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,lt(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=ut(e);r?k((function(){var n={done:!1};try{h(r,e,gt(vt,n,t),gt(mt,n,t))}catch(i){mt(n,i,t)}})):(t.value=e,t.state=nt,lt(t,!1))}catch(i){mt({done:!1},i,t)}}};if(at&&(z=function(t){_(this,$),y(t),h(r,this);var e=V(this);try{t(gt(vt,e),gt(mt,e))}catch(n){mt(e,n)}},$=z.prototype,r=function(t){B(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:et,value:void 0})},r.prototype=p($,{then:function(t,e){var n=q(this),r=n.reactions,i=J(O(this,z));return i.ok=!b(t)||t,i.fail=b(e)&&e,i.domain=L?W.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=et&&lt(n,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=V(t);this.promise=t,this.resolve=gt(vt,e),this.reject=gt(mt,e)},R.f=J=function(t){return t===z||t===s?new i(t):X(t)},!c&&b(d)&&H!==Object.prototype)){o=H.then,ot||(f(H,"then",(function(t,e){var n=this;return new z((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),f(H,"catch",$["catch"],{unsafe:!0}));try{delete H.constructor}catch(yt){}g&&g(H,$)}a({global:!0,wrap:!0,forced:at},{Promise:z}),m(z,U,!1,!0),v(U),s=l(U),a({target:U,stat:!0,forced:at},{reject:function(t){var e=J(this);return h(e.reject,void 0,t),e.promise}}),a({target:U,stat:!0,forced:c||at},{resolve:function(t){return C(c&&this===s?z:this,t)}}),a({target:U,stat:!0,forced:ct},{all:function(t){var e=this,n=J(e),r=n.resolve,i=n.reject,s=x((function(){var n=y(e.resolve),s=[],o=0,a=1;T(t,(function(t){var c=o++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=J(e),r=n.reject,i=x((function(){var i=y(e.resolve);T(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["b"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return nr}));var r=n("1fd5"),i=n("589b");function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r["b"]("auth","Firebase",i);return s.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw m(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function O(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["p"])()||Object(r["q"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,s={}){return L(t,s,async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r["t"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(s){if(s instanceof r["c"])throw s;f(t,"network-request-failed")}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?R(t.config,i):`${t.config.apiScheme}://${i}`}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),j.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e=!1){const n=Object(r["i"])(t),i=await n.getIdToken(e),s=G(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:H($(s.auth_time)),issuedAtTime:H($(s.iat)),expirationTime:H($(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function G(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function K(t){const e=G(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&J(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,q(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=Object(r["i"])(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await L(t,{},async()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return z(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:T}=e;v(b&&T,t,"internal-error");const I=rt.fromJSON(this.name,T);v("string"===typeof b,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(g,t.name),it(m,t.name),it(y,t.name);const O=new st({uid:b,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(O.providerData=E.map(t=>Object.assign({},t))),g&&(O._redirectEventId=g),O}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(_(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||_(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(gt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["j"])()){return/firefox\//i.test(t)}function dt(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=Object(r["j"])()){return/crios\//i.test(t)}function pt(t=Object(r["j"])()){return/iemobile/i.test(t)}function gt(t=Object(r["j"])()){return/android/i.test(t)}function mt(t=Object(r["j"])()){return/blackberry/i.test(t)}function vt(t=Object(r["j"])()){return/webos/i.test(t)}function yt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function bt(t=Object(r["j"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return Object(r["n"])()&&10===document.documentMode}function _t(t=Object(r["j"])()){return yt(t)||gt(t)||vt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt(Object(r["j"])());break;case"Worker":n=`${lt(Object(r["j"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function Ot(t){return Object(r["i"])(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function xt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends kt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Nt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Nt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ct(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="http://localhost";class Pt extends kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Pt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,jt(t,e)}buildRequest(){const t={requestUri:Dt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["t"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function Mt(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function Ft(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Ut={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),Ut)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends kt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Mt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Bt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(t){const e=Object(r["u"])(Object(r["h"])(t))["link"],n=e?Object(r["u"])(Object(r["h"])(e))["deep_link_id"]:null,i=Object(r["u"])(Object(r["h"])(t))["deep_link_id"],s=i?Object(r["u"])(Object(r["h"])(i))["link"]:null;return s||i||n||e||t}class zt{constructor(t){var e,n,i,s,o,a;const c=Object(r["u"])(Object(r["h"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ht(t);try{return new zt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(){this.providerId=$t.PROVIDER_ID}static credential(t,e){return Nt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=zt.parseLink(e);return v(n,"argument-error"),Nt._fromEmailAndCode(t,n.code,n.tenantId)}}$t.PROVIDER_ID="password",$t.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Kt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com",Jt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Kt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Kt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=Zt(n),o=new Yt({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Zt(n);return new Yt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Zt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,te.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new te(t,e,n,r)}}function ee(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw te._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await W(t,ee(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=G(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),Yt._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const r="signIn",i=await ee(t,r,e),s=await Yt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function oe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const ae="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ae,"1"),this.storage.removeItem(ae),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){const t=Object(r["j"])();return dt(t)||yt(t)}const le=1e3,he=10;class de extends ce{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ue()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,he):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},le)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}de.type="LOCAL";const fe=de;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends ce{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}pe.type="SESSION";const ge=pe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new ve(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await me(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.receivers=[];class be{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=ye("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function _e(t){we().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return"undefined"!==typeof we()["WorkerGlobalScope"]&&"function"===typeof we()["importScripts"]}async function Te(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ie(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Oe(){return Ee()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebaseLocalStorageDb",ke=1,Ce="firebaseLocalStorage",Ae="fbase_key";class Re{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function xe(t,e){return t.transaction([Ce],e?"readwrite":"readonly").objectStore(Ce)}function Ne(){const t=indexedDB.deleteDatabase(Se);return new Re(t).toPromise()}function je(){const t=indexedDB.open(Se,ke);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ce,{keyPath:Ae})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ce)?e(n):(n.close(),await Ne(),e(await je()))})})}async function De(t,e,n){const r=xe(t,!0).put({[Ae]:e,value:n});return new Re(r).toPromise()}async function Pe(t,e){const n=xe(t,!1).get(e),r=await new Re(n).toPromise();return void 0===r?null:r.value}function Le(t,e){const n=xe(t,!0).delete(e);return new Re(n).toPromise()}const Me=800,Fe=3;class Ue{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await je()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Fe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ee()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ve._getInstance(Oe()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Te(),!this.activeServiceWorker)return;this.sender=new be(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ie()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await je();return await De(t,ae,"1"),await Le(t,ae),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>De(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Pe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Le(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=xe(t,!1).getAll();return new Re(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ue.type="LOCAL";const Ve=Ue;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function qe(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function ze(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",He().appendChild(r)})}function $e(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge="recaptcha";async function Ke(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===Ge,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await se(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Be(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Lt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t){this.providerId=We.PROVIDER_ID,this.auth=Ot(t)}verifyPhoneNumber(t,e){return Ke(this.auth,t,Object(r["i"])(e))}static credential(t,e){return Bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return We.credentialFromTaggedObject(e)}static credentialFromError(t){return We.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Bt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(t,e){return e?_(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We.PROVIDER_ID="phone",We.PHONE_SIGN_IN_METHOD="phone";class Xe extends kt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Qe(t){return ie(t.auth,new Xe(t),t.bypassAuthState)}function Ye(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),re(n,new Xe(t),t.bypassAuthState)}async function Ze(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ne(n,new Xe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Qe;case"linkViaPopup":case"linkViaRedirect":return Ze;case"reauthViaPopup":case"reauthViaRedirect":return Ye;default:f(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new A(2e3,1e4);class nn extends tn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,en.get())};t()}}nn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn="pendingRedirect",sn=new Map;class on extends tn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=sn.get(this.auth._key());if(!t){try{const e=await an(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}sn.set(this.auth._key(),t)}return this.bypassAuthState||sn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function an(t,e){const n=un(e),r=cn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function cn(t){return _(t._redirectPersistence)}function un(t){return ct(rn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(t,e,n=!1){const r=Ot(t),i=Je(r,e),s=new on(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn=6e5;class dn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!gn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!pn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(fn(t))}saveEventToCache(t){this.cachedEventUids.add(fn(t)),this.lastProcessedEventTime=Date.now()}}function fn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function pn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function gn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yn=/^https?/;async function bn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mn(t);for(const r of e)try{if(wn(r))return}catch(n){}f(t,"unauthorized-domain")}function wn(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!yn.test(n))return!1;if(vn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new A(3e4,6e4);function En(){const t=we().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Tn(t){return new Promise((e,n)=>{var r,i,s;function o(){En(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{En(),n(p(t,"network-request-failed"))},timeout:_n.get()})}if(null===(i=null===(r=we().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=we().gapi)||void 0===s?void 0:s.load)){const e=$e("iframefcb");return we()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},ze("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw In=null,t})}let In=null;function On(t){return In=In||Tn(t),In}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new A(5e3,15e3),kn="__/auth/iframe",Cn="emulator/auth/iframe",An={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?R(e,Cn):`https://${t.config.authDomain}/${kn}`,s={apiKey:e.apiKey,appName:t.name,v:i["a"]},o=Rn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["t"])(s).slice(1)}`}async function Nn(t){const e=await On(t),n=we().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:xn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:An,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=we().setTimeout(()=>{r(i)},Sn.get());function o(){we().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dn=500,Pn=600,Ln="_blank",Mn="http://localhost";class Fn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Un(t,e,n,i=Dn,s=Pn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},jn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=ft(l)?Ln:n),ht(l)&&(e=e||Mn,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(bt(l)&&"_self"!==c)return Vn(e||"",c),new Fn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Fn(d)}function Vn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="__/auth/handler",qn="emulator/auth/handler";function Hn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(e instanceof Gt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["m"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Kt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${zn(t)}?${Object(r["t"])(u).slice(1)}`}function zn({config:t}){return t.emulator?R(t,qn):`https://${t.authDomain}/${Bn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="webStorageSupport";class Gn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ge,this._completeRedirectFn=ln}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Hn(t,e,n,I(),r);return Un(t,s,ye())}async _openRedirect(t,e,n,r){return await this._originValidation(t),_e(Hn(t,e,n,I(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Nn(t),n=new dn(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send($n,{type:$n},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[$n];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=bn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||dt()||yt()}}const Kn=Gn;class Wn{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class Jn extends Wn{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Jn(t)}_finalizeEnroll(t,e,n){return oe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return qe(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Xn{constructor(){}static assertion(t){return Jn._fromCredential(t)}}Xn.FACTOR_ID="phone";var Qn="@firebase/auth",Yn="0.19.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function er(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(e=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},o=new It(e,r);return T(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=Ot(t.getProvider("auth").getImmediate());return(t=>new Zn(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(Qn,Yn,tr(t)),Object(i["g"])(Qn,Yn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:Kn,persistence:[Ve,fe,ge]})}er("Browser")},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f30a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("b774");class i{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const r in t.settings){const e=t.settings[r];n[r]=e.defaultValue}const i="__vue-devtools-plugin-settings__"+t.id;let s={...n};try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(s,e)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(o){}s=t}},e.on(r["a"],(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.2c2236b4.js.map