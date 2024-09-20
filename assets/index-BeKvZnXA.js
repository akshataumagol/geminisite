(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var $={},rt={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=Symbol.for("react.element"),vt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),mt=Symbol.for("react.strict_mode"),Ot=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),It=Symbol.for("react.context"),At=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),Nt=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),k=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var it={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},at=Object.assign,ct={};function O(t,e,n){this.props=t,this.context=e,this.refs=ct,this.updater=n||it}O.prototype.isReactComponent={};O.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};O.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ut(){}ut.prototype=O.prototype;function D(t,e,n){this.props=t,this.context=e,this.refs=ct,this.updater=n||it}var G=D.prototype=new ut;G.constructor=D;at(G,O.prototype);G.isPureReactComponent=!0;var H=Array.isArray,lt=Object.prototype.hasOwnProperty,U={current:null},ft={key:!0,ref:!0,__self:!0,__source:!0};function dt(t,e,n){var o,s={},r=null,i=null;if(e!=null)for(o in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(r=""+e.key),e)lt.call(e,o)&&!ft.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];s.children=c}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:w,type:t,key:r,ref:i,props:s,_owner:U.current}}function Mt(t,e){return{$$typeof:w,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function j(t){return typeof t=="object"&&t!==null&&t.$$typeof===w}function Lt(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var P=/\/+/g;function x(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Lt(""+t.key):e.toString(36)}function b(t,e,n,o,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case w:case vt:i=!0}}if(i)return i=t,s=s(i),t=o===""?"."+x(i,0):o,H(s)?(n="",t!=null&&(n=t.replace(P,"$&/")+"/"),b(s,e,n,"",function(f){return f})):s!=null&&(j(s)&&(s=Mt(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+t)),e.push(s)),1;if(i=0,o=o===""?".":o+":",H(t))for(var a=0;a<t.length;a++){r=t[a];var c=o+x(r,a);i+=b(r,e,n,c,s)}else if(c=bt(t),typeof c=="function")for(t=c.call(t),a=0;!(r=t.next()).done;)r=r.value,c=o+x(r,a++),i+=b(r,e,n,c,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function T(t,e,n){if(t==null)return t;var o=[],s=0;return b(t,o,"","",function(r){return e.call(n,r,s++)}),o}function xt(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var h={current:null},M={transition:null},$t={ReactCurrentDispatcher:h,ReactCurrentBatchConfig:M,ReactCurrentOwner:U};function ht(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:T,forEach:function(t,e,n){T(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return T(t,function(){e++}),e},toArray:function(t){return T(t,function(e){return e})||[]},only:function(t){if(!j(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};u.Component=O;u.Fragment=Rt;u.Profiler=Ot;u.PureComponent=D;u.StrictMode=mt;u.Suspense=wt;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$t;u.act=ht;u.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=at({},t.props),s=t.key,r=t.ref,i=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,i=U.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)lt.call(e,c)&&!ft.hasOwnProperty(c)&&(o[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:w,type:t.type,key:s,ref:r,props:o,_owner:i}};u.createContext=function(t){return t={$$typeof:It,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:St,_context:t},t.Consumer=t};u.createElement=dt;u.createFactory=function(t){var e=dt.bind(null,t);return e.type=t,e};u.createRef=function(){return{current:null}};u.forwardRef=function(t){return{$$typeof:At,render:t}};u.isValidElement=j;u.lazy=function(t){return{$$typeof:Tt,_payload:{_status:-1,_result:t},_init:xt}};u.memo=function(t,e){return{$$typeof:Nt,type:t,compare:e===void 0?null:e}};u.startTransition=function(t){var e=M.transition;M.transition={};try{t()}finally{M.transition=e}};u.unstable_act=ht;u.useCallback=function(t,e){return h.current.useCallback(t,e)};u.useContext=function(t){return h.current.useContext(t)};u.useDebugValue=function(){};u.useDeferredValue=function(t){return h.current.useDeferredValue(t)};u.useEffect=function(t,e){return h.current.useEffect(t,e)};u.useId=function(){return h.current.useId()};u.useImperativeHandle=function(t,e,n){return h.current.useImperativeHandle(t,e,n)};u.useInsertionEffect=function(t,e){return h.current.useInsertionEffect(t,e)};u.useLayoutEffect=function(t,e){return h.current.useLayoutEffect(t,e)};u.useMemo=function(t,e){return h.current.useMemo(t,e)};u.useReducer=function(t,e,n){return h.current.useReducer(t,e,n)};u.useRef=function(t){return h.current.useRef(t)};u.useState=function(t){return h.current.useState(t)};u.useSyncExternalStore=function(t,e,n){return h.current.useSyncExternalStore(t,e,n)};u.useTransition=function(){return h.current.useTransition()};u.version="18.3.1";rt.exports=u;var pt=rt.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=pt,Gt=Symbol.for("react.element"),Ut=Symbol.for("react.fragment"),jt=Object.prototype.hasOwnProperty,Ft=Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kt={key:!0,ref:!0,__self:!0,__source:!0};function Et(t,e,n){var o,s={},r=null,i=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(i=e.ref);for(o in e)jt.call(e,o)&&!kt.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Gt,type:t,key:r,ref:i,props:s,_owner:Ft.current}}$.Fragment=Ut;$.jsx=Et;$.jsxs=Et;var B;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(B||(B={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var K;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(K||(K={}));var q;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(q||(q={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Y=["user","model","function","system"];var V;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(V||(V={}));var J;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(J||(J={}));var W;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(W||(W={}));var X;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(X||(X={}));var S;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(S||(S={}));var z;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(z||(z={}));var Q;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Q||(Q={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class E extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class m extends E{constructor(e,n){super(e),this.response=n}}class gt extends E{constructor(e,n,o,s){super(e),this.status=n,this.statusText=o,this.errorDetails=s}}class _ extends E{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Ht="https://generativelanguage.googleapis.com",Pt="v1beta",Bt="0.17.0",Kt="genai-js";var y;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(y||(y={}));class qt{constructor(e,n,o,s,r){this.model=e,this.task=n,this.apiKey=o,this.stream=s,this.requestOptions=r}toString(){var e,n;const o=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||Pt;let r=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||Ht}/${o}/${this.model}:${this.task}`;return this.stream&&(r+="?alt=sse"),r}}function Yt(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${Kt}/${Bt}`),e.join(" ")}async function Vt(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Yt(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new _(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,r]of o.entries()){if(s==="x-goog-api-key")throw new _(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new _(`Header name ${s} can only be set using the apiClient field`);n.append(s,r)}}return n}async function Jt(t,e,n,o,s,r){const i=new qt(t,e,n,o,r);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},Qt(r)),{method:"POST",headers:await Vt(i),body:s})}}async function N(t,e,n,o,s,r={},i=fetch){const{url:a,fetchOptions:c}=await Jt(t,e,n,o,s,r);return Wt(a,c,i)}async function Wt(t,e,n=fetch){let o;try{o=await n(t,e)}catch(s){Xt(s,t)}return o.ok||await zt(o,t),o}function Xt(t,e){let n=t;throw t instanceof gt||t instanceof _||(n=new E(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function zt(t,e){let n="",o;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new gt(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,o)}function Qt(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function F(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),L(t.candidates[0]))throw new m(`${g(t)}`,t);return Zt(t)}else if(t.promptFeedback)throw new m(`Text not available. ${g(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),L(t.candidates[0]))throw new m(`${g(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Z(t)[0]}else if(t.promptFeedback)throw new m(`Function call not available. ${g(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),L(t.candidates[0]))throw new m(`${g(t)}`,t);return Z(t)}else if(t.promptFeedback)throw new m(`Function call not available. ${g(t)}`,t)},t}function Zt(t){var e,n,o,s;const r=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const i of(s=(o=t.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)i.text&&r.push(i.text),i.executableCode&&r.push("\n```python\n"+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&r.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return r.length>0?r.join(""):""}function Z(t){var e,n,o,s;const r=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const i of(s=(o=t.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)i.functionCall&&r.push(i.functionCall);if(r.length>0)return r}const te=[S.RECITATION,S.SAFETY,S.LANGUAGE];function L(t){return!!t.finishReason&&te.includes(t.finishReason)}function g(t){var e,n,o;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((o=t.candidates)===null||o===void 0)&&o[0]){const r=t.candidates[0];L(r)&&(s+=`Candidate was blocked due to ${r.finishReason}`,r.finishMessage&&(s+=`: ${r.finishMessage}`))}return s}function I(t){return this instanceof I?(this.v=t,this):new I(t)}function ee(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(t,e||[]),s,r=[];return s={},i("next"),i("throw"),i("return"),s[Symbol.asyncIterator]=function(){return this},s;function i(d){o[d]&&(s[d]=function(l){return new Promise(function(p,R){r.push([d,l,p,R])>1||a(d,l)})})}function a(d,l){try{c(o[d](l))}catch(p){v(r[0][3],p)}}function c(d){d.value instanceof I?Promise.resolve(d.value.v).then(f,C):v(r[0][2],d)}function f(d){a("next",d)}function C(d){a("throw",d)}function v(d,l){d(l),r.shift(),r.length&&a(r[0][0],r[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const tt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ne(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=re(e),[o,s]=n.tee();return{stream:se(o),response:oe(s)}}async function oe(t){const e=[],n=t.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return F(ie(e));e.push(s)}}function se(t){return ee(this,arguments,function*(){const n=t.getReader();for(;;){const{value:o,done:s}=yield I(n.read());if(s)break;yield yield I(F(o))}})}function re(t){const e=t.getReader();return new ReadableStream({start(o){let s="";return r();function r(){return e.read().then(({value:i,done:a})=>{if(a){if(s.trim()){o.error(new E("Failed to parse stream"));return}o.close();return}s+=i;let c=s.match(tt),f;for(;c;){try{f=JSON.parse(c[1])}catch{o.error(new E(`Error parsing JSON response: "${c[1]}"`));return}o.enqueue(f),s=s.substring(c[0].length),c=s.match(tt)}return r()})}}})}function ie(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const o of t){if(o.candidates)for(const s of o.candidates){const r=s.index;if(n.candidates||(n.candidates=[]),n.candidates[r]||(n.candidates[r]={index:s.index}),n.candidates[r].citationMetadata=s.citationMetadata,n.candidates[r].finishReason=s.finishReason,n.candidates[r].finishMessage=s.finishMessage,n.candidates[r].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[r].content||(n.candidates[r].content={role:s.content.role||"user",parts:[]});const i={};for(const a of s.content.parts)a.text&&(i.text=a.text),a.functionCall&&(i.functionCall=a.functionCall),a.executableCode&&(i.executableCode=a.executableCode),a.codeExecutionResult&&(i.codeExecutionResult=a.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),n.candidates[r].content.parts.push(i)}}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function _t(t,e,n,o){const s=await N(e,y.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o);return ne(s)}async function yt(t,e,n,o){const r=await(await N(e,y.GENERATE_CONTENT,t,!1,JSON.stringify(n),o)).json();return{response:F(r)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Ct(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function A(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return ae(e)}function ae(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const r of t)"functionResponse"in r?(n.parts.push(r),s=!0):(e.parts.push(r),o=!0);if(o&&s)throw new E("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new E("No content is provided for sending chat message.");return o?e:n}function ce(t,e){var n;let o={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new _("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{const r=A(t);o.contents=[r]}return{generateContentRequest:o}}function et(t){let e;return t.contents?e=t:e={contents:[A(t)]},t.systemInstruction&&(e.systemInstruction=Ct(t.systemInstruction)),e}function ue(t){return typeof t=="string"||Array.isArray(t)?{content:A(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const nt=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],le={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function fe(t){let e=!1;for(const n of t){const{role:o,parts:s}=n;if(!e&&o!=="user")throw new E(`First content should be with role 'user', got ${o}`);if(!Y.includes(o))throw new E(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(Y)}`);if(!Array.isArray(s))throw new E("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new E("Each Content should have at least one part");const r={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of s)for(const c of nt)c in a&&(r[c]+=1);const i=le[o];for(const a of nt)if(!i.includes(a)&&r[a]>0)throw new E(`Content with role '${o}' can't contain '${a}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ot="SILENT_ERROR";class de{constructor(e,n,o,s={}){this.model=n,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,o!=null&&o.history&&(fe(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var o,s,r,i,a,c;await this._sendPromise;const f=A(e),C={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(r=this.params)===null||r===void 0?void 0:r.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,f]},v=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>yt(this._apiKey,this.model,C,v)).then(l=>{var p;if(l.response.candidates&&l.response.candidates.length>0){this._history.push(f);const R=Object.assign({parts:[],role:"model"},(p=l.response.candidates)===null||p===void 0?void 0:p[0].content);this._history.push(R)}else{const R=g(l.response);R&&console.warn(`sendMessage() was unsuccessful. ${R}. Inspect response object for details.`)}d=l}),await this._sendPromise,d}async sendMessageStream(e,n={}){var o,s,r,i,a,c;await this._sendPromise;const f=A(e),C={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(r=this.params)===null||r===void 0?void 0:r.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,f]},v=Object.assign(Object.assign({},this._requestOptions),n),d=_t(this._apiKey,this.model,C,v);return this._sendPromise=this._sendPromise.then(()=>d).catch(l=>{throw new Error(ot)}).then(l=>l.response).then(l=>{if(l.candidates&&l.candidates.length>0){this._history.push(f);const p=Object.assign({},l.candidates[0].content);p.role||(p.role="model"),this._history.push(p)}else{const p=g(l);p&&console.warn(`sendMessageStream() was unsuccessful. ${p}. Inspect response object for details.`)}}).catch(l=>{l.message!==ot&&console.error(l)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function he(t,e,n,o){return(await N(e,y.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function pe(t,e,n,o){return(await N(e,y.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}async function Ee(t,e,n,o){const s=n.requests.map(i=>Object.assign(Object.assign({},i),{model:e}));return(await N(e,y.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class st{constructor(e,n,o={}){this.apiKey=e,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ct(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var o;const s=et(e),r=Object.assign(Object.assign({},this._requestOptions),n);return yt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),r)}async generateContentStream(e,n={}){var o;const s=et(e),r=Object.assign(Object.assign({},this._requestOptions),n);return _t(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),r)}startChat(e){var n;return new de(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this.requestOptions)}async countTokens(e,n={}){const o=ce(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return he(this.apiKey,this.model,o,s)}async embedContent(e,n={}){const o=ue(e),s=Object.assign(Object.assign({},this._requestOptions),n);return pe(this.apiKey,this.model,o,s)}async batchEmbedContents(e,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return Ee(this.apiKey,this.model,e,o)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ge{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new E("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new st(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n){if(!e.name)throw new _("Cached content must contain a `name` field.");if(!e.model)throw new _("Cached content must contain a `model` field.");const o={model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e};return new st(this.apiKey,o,n)}}const _e="AIzaSyDmSbC2ySYORMBAO5llcUCJE0Ah-aEMVU0",ye=new ge(_e);ye.getGenerativeModel({model:"gemini-1.5-flash"});pt.createContext();
