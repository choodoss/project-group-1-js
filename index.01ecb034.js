function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequire1995;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire1995=s),s.register("fSDyF",(function(t,n){e(t.exports,"FirebaseApp",(()=>o)),e(t.exports,"FirebaseStorage",(()=>a)),s("fhN3L");var i=s("7xvHX");s("ilpIi");var r=s("9HrqM");const o=(0,i.initializeApp)({apiKey:"AIzaSyAlAtEL7zCWp_C_EyJztwCHo0AP8-f6-Uk",authDomain:"filmoteka-jsgroup.firebaseapp.com",databaseURL:"https://filmoteka-jsgroup-default-rtdb.firebaseio.com",projectId:"filmoteka-jsgroup",storageBucket:"filmoteka-jsgroup.appspot.com",messagingSenderId:"836192879664",appId:"1:836192879664:web:b40668c536b01de0d159f5",measurementId:"G-Q34JZ61PV1"}),a=(0,r.getFirestore)(o)})),s.register("fhN3L",(function(t,n){e(t.exports,"initializeApp",(()=>s("7xvHX").initializeApp)),e(t.exports,"registerVersion",(()=>s("7xvHX").registerVersion));s("7xvHX");
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
(0,s("7xvHX").registerVersion)("firebase","9.19.1","app")})),s.register("7xvHX",(function(t,n){e(t.exports,"_registerComponent",(()=>y)),e(t.exports,"_getProvider",(()=>_)),e(t.exports,"_removeServiceInstance",(()=>v)),e(t.exports,"SDK_VERSION",(()=>E)),e(t.exports,"initializeApp",(()=>T)),e(t.exports,"getApp",(()=>C)),e(t.exports,"registerVersion",(()=>S));var i=s("eryG9"),r=s("5Z2ef"),o=s("gMVVg"),a=s("iItpQ");o=s("gMVVg");
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
class c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const l="@firebase/app",h="0.9.7",u=new(0,r.Logger)("@firebase/app"),d="[DEFAULT]",f={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){const t=e.name;if(g.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of p.values())m(t,e);return!0}function _(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function v(e,t,n="[DEFAULT]"){_(e,t).clearInstance(n)}
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
const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",w);
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
class I{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
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
 */const E="9.19.1";function T(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw b.create("bad-app-name",{appName:String(r)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=p.get(r);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(s,a.config))return a;throw b.create("duplicate-app",{appName:r})}const c=new(0,i.ComponentContainer)(r);for(const e of g.values())c.addComponent(e);const l=new I(n,s,c);return p.set(r,l),l}function C(e="[DEFAULT]"){const t=p.get(e);if(!t&&e===d)return T();if(!t)throw b.create("no-app",{appName:e});return t}function S(e,t,n){var s;let r=null!==(s=f[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}y(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
const k="firebase-heartbeat-store";let N=null;function A(){return N||(N=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(k)}}).catch((e=>{throw b.create("idb-open",{originalErrorMessage:e.message})}))),N}async function R(e,t){try{const n=(await A()).transaction(k,"readwrite"),i=n.objectStore(k);return await i.put(t,D(e)),n.done}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}
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
 */class P{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new x(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=O(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),L(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),L(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function O(){return(new Date).toISOString().substring(0,10)}class x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await A()).transaction(k).objectStore(k).get(D(e))}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function L(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var M;M="",y(new(0,i.Component)("platform-logger",(e=>new c(e)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(e=>new P(e)),"PRIVATE")),S(l,h,M),S(l,h,"esm2017"),S("fire-js","")})),s.register("eryG9",(function(t,n){e(t.exports,"Component",(()=>r)),e(t.exports,"ComponentContainer",(()=>c));var i=s("gMVVg");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const o="[DEFAULT]";
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),s.register("gMVVg",(function(n,i){e(n.exports,"assert",(()=>l)),e(n.exports,"assertionError",(()=>h)),e(n.exports,"base64",(()=>d)),e(n.exports,"base64Encode",(()=>p)),e(n.exports,"base64urlEncodeWithoutPadding",(()=>g)),e(n.exports,"base64Decode",(()=>m)),e(n.exports,"deepCopy",(()=>y)),e(n.exports,"getDefaultEmulatorHost",(()=>b)),e(n.exports,"getDefaultEmulatorHostnameAndPort",(()=>I)),e(n.exports,"getDefaultAppConfig",(()=>E)),e(n.exports,"getExperimentalSetting",(()=>T)),e(n.exports,"Deferred",(()=>C)),e(n.exports,"createMockUserToken",(()=>S)),e(n.exports,"getUA",(()=>k)),e(n.exports,"isMobileCordova",(()=>N)),e(n.exports,"isBrowserExtension",(()=>A)),e(n.exports,"isReactNative",(()=>R)),e(n.exports,"isIE",(()=>D)),e(n.exports,"isNodeSdk",(()=>P)),e(n.exports,"isSafari",(()=>O)),e(n.exports,"isIndexedDBAvailable",(()=>x)),e(n.exports,"validateIndexedDBOpenable",(()=>L)),e(n.exports,"FirebaseError",(()=>M)),e(n.exports,"ErrorFactory",(()=>F)),e(n.exports,"jsonEval",(()=>V)),e(n.exports,"stringify",(()=>j)),e(n.exports,"isValidFormat",(()=>B)),e(n.exports,"isAdmin",(()=>H)),e(n.exports,"contains",(()=>$)),e(n.exports,"safeGet",(()=>z)),e(n.exports,"isEmpty",(()=>W)),e(n.exports,"map",(()=>K)),e(n.exports,"deepEqual",(()=>G)),e(n.exports,"querystring",(()=>X)),e(n.exports,"querystringDecode",(()=>Y)),e(n.exports,"extractQuerystring",(()=>J)),e(n.exports,"Sha1",(()=>Z)),e(n.exports,"createSubscribe",(()=>ee)),e(n.exports,"errorPrefix",(()=>ie)),e(n.exports,"stringToByteArray",(()=>se)),e(n.exports,"stringLength",(()=>re)),e(n.exports,"getModularInstance",(()=>oe));var r=s("hPtJY");
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
 */const o=!1,a=!1,c="${JSCORE_VERSION}",l=function(e,t){if(!e)throw h(t)},h=function(e){return new Error("Firebase Database ("+c+") INTERNAL ASSERT FAILED: "+e)},u=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new f;const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p=function(e){const t=u(e);return d.encodeByteArray(t,!0)},g=function(e){return p(e).replace(/\./g,"")},m=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function y(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=_(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
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
const v=()=>
/**
 * @license
 * Copyright 2022 Google LLC
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,w=()=>{try{return v()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&m(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
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
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[g(JSON.stringify({alg:"none",type:"JWT"})),g(JSON.stringify(r)),""].join(".")}
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
 */function k(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function N(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function A(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function R(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function D(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function P(){return!0===o||!0===a}function O(){return!function(){var e;const n=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"==typeof indexedDB}catch(e){return!1}}function L(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(U,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new M(i,o,n)}}const U=/\{\$([^}]+)}/g;
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
 */function V(e){return JSON.parse(e)}function j(e){return JSON.stringify(e)}
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
 */const q=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=V(m(r[0])||""),n=V(m(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},B=function(e){const t=q(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},H=function(e){const t=q(e).claims;return"object"==typeof t&&!0===t.admin};
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
function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function W(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function K(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function G(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Q(n)&&Q(r)){if(!G(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Q(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
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
function X(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Y(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function J(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):e<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const t=(r<<5|r>>>27)+i+l+s+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function ee(e,t){const n=new te(e,t);return n.subscribe.bind(n)}class te{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ne),void 0===i.error&&(i.error=ne),void 0===i.complete&&(i.complete=ne);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ne(){}
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
 */function ie(e,t){return`${e} failed: ${t} argument `}
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
const se=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,l(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},re=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function oe(e){return e&&e._delegate?e._delegate:e}})),s.register("hPtJY",(function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var c,l=[],h=!1,u=-1;function d(){h&&c&&(h=!1,c.length?l=c.concat(l):u=-1,l.length&&f())}function f(){if(!h){var e=a(d);h=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),s.register("5Z2ef",(function(t,n){e(t.exports,"LogLevel",(()=>s)),e(t.exports,"Logger",(()=>h)),e(t.exports,"setLogLevel",(()=>u)),e(t.exports,"setUserLogHandler",(()=>d));
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
const i=[];var s,r;(r=s||(s={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,c={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=c[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class h{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function u(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}})),s.register("iItpQ",(function(t,n){e(t.exports,"openDB",(()=>r));var i=s("jMRra");i=s("jMRra");function r(e,t,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),c=(0,i.w)(a);return s&&a.addEventListener("upgradeneeded",(e=>{s((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function l(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return c.set(t,r),r}(0,i.r)((e=>({...e,get:(t,n,i)=>l(t,n)||e.get(t,n,i),has:(t,n)=>!!l(t,n)||e.has(t,n)})))})),s.register("jMRra",(function(t,n){e(t.exports,"w",(()=>p)),e(t.exports,"r",(()=>u));let i,s;const r=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){h=e(h)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(r.get(this))}:function(...t){return p(e.apply(g(this),t))}:function(t,...n){const i=e.call(g(this),t,...n);return a.set(i,t.sort?t.sort():[t]),p(i)}}function f(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));o.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,h):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(p(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&r.set(t,e)})).catch((()=>{})),l.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),l.set(t,e)),t}const g=e=>l.get(e)})),s.register("ilpIi",(function(t,n){e(t.exports,"addDoc",(()=>s("9HrqM").addDoc)),e(t.exports,"collection",(()=>s("9HrqM").collection)),e(t.exports,"getFirestore",(()=>s("9HrqM").getFirestore)),s("9HrqM")})),s.register("9HrqM",(function(t,n){e(t.exports,"collection",(()=>Os)),e(t.exports,"getFirestore",(()=>Ms)),e(t.exports,"addDoc",(()=>or));var i=s("7xvHX"),r=s("eryG9"),o=s("5Z2ef"),a=s("gMVVg"),c=s("i4D38");s("hPtJY");const l="@firebase/firestore";
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
 */class h{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
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
let u="9.19.0";
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
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(e,...t){if(d.logLevel<=o.LogLevel.DEBUG){const n=t.map(y);d.debug(`Firestore (${u}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.LogLevel.ERROR){const n=t.map(y);d.error(`Firestore (${u}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.LogLevel.WARN){const n=t.map(y);d.warn(`Firestore (${u}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function _(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function v(e,t){e||_()}function w(e,t){return e}
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class E{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(h.UNAUTHENTICATED)))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new E;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new E,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new E)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new h(e)}}class N{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(v("string"==typeof e.token),this.T=e.token,new R(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function P(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class O{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=P(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
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
class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new M(0,0))}static max(){return new F(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&_(),void 0===n?n=e.length-t:n>e.length-t&&_(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class V extends U{construct(e,t,n){return new V(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new I(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new V(t)}static emptyPath(){return new V([])}}const j=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(e,t,n){return new q(e,t,n)}static isValidIdentifier(e){return j.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new I(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new I(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new I(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new I(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(V.fromString(e))}static fromName(e){return new B(V.fromString(e).popFirst(5))}static empty(){return new B(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===V.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new V(e.slice()))}}
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
 */class H{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}H.UNKNOWN_ID=-1;function $(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=F.fromTimestamp(1e9===i?new M(n+1,0):new M(n,i));return new W(s,B.empty(),t)}function z(e){return new W(e.readTime,e.key,-1)}class W{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new W(F.min(),B.empty(),-1)}static max(){return new W(F.max(),B.empty(),-1)}}function K(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=B.comparator(e.documentKey,t.documentKey),0!==n?n:x(e.largestBatchId,t.largestBatchId))}
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
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function X(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==G)throw e;p("LocalStore","Unexpectedly lost primary lease")}
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(e){return Y.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,n)=>{t(e)}))}static reject(e){return new Y(((t,n)=>{n(e)}))}static waitFor(e){return new Y(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=Y.resolve(!1);for(const n of e)t=t.next((e=>e?Y.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Y(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new Y(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}}
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
 */function J(e){return"IndexedDbTransactionError"===e.name}
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
class Z{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ee(e){return null==e}function te(e){return 0===e&&1/e==-1/0}function ne(e){return"number"==typeof e&&Number.isInteger(e)&&!te(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */Z.ct=-1;const ie=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],se=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],re=se;
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
function oe(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ae(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ce(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new he(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new he(this.root,e,this.comparator,!1)}getReverseIterator(){return new he(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new he(this.root,e,this.comparator,!0)}}class he{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:ue.RED,this.left=null!=i?i:ue.EMPTY,this.right=null!=s?s:ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new ue(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return ue.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _();if(this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1,ue.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,n,i,s){return this}insert(e,t,n){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class de{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fe(this.data.getIterator())}getIteratorFrom(e){return new fe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof de))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class fe{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class pe{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new pe([])}unionWith(e){let t=new de(q.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ge extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ge("Invalid base64 string: "+e):e}}(e);return new me(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const ye=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _e(e){if(v(!!e),"string"==typeof e){let t=0;const n=ye.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ve(e.seconds),nanos:ve(e.nanos)}}function ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function we(e){return"string"==typeof e?me.fromBase64String(e):me.fromUint8Array(e)}
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
 */function be(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ie(e){const t=_e(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}
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
 */class Ee{constructor(e,t,n,i,s,r,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Te{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Te("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Te&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const Ce={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Se(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?be(e)?4:Fe(e)?9007199254740991:10:_()}function ke(e,t){if(e===t)return!0;const n=Se(e);if(n!==Se(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ie(e).isEqual(Ie(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=_e(e.timestampValue),i=_e(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,we(e.bytesValue).isEqual(we(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ve(e.geoPointValue.latitude)===ve(t.geoPointValue.latitude)&&ve(e.geoPointValue.longitude)===ve(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ve(e.integerValue)===ve(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ve(e.doubleValue),i=ve(t.doubleValue);return n===i?te(n)===te(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],ke);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(oe(n)!==oe(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!ke(n[e],i[e])))return!1;return!0}(e,t);default:return _()}var i}function Ne(e,t){return void 0!==(e.values||[]).find((e=>ke(e,t)))}function Ae(e,t){if(e===t)return 0;const n=Se(e),i=Se(t);if(n!==i)return x(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ve(e.integerValue||e.doubleValue),i=ve(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Re(e.timestampValue,t.timestampValue);case 4:return Re(Ie(e),Ie(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){const n=we(e),i=we(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=x(n[e],i[e]);if(0!==t)return t}return x(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=x(ve(e.latitude),ve(t.latitude));return 0!==n?n:x(ve(e.longitude),ve(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Ae(n[e],i[e]);if(t)return t}return x(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ce.mapValue&&t===Ce.mapValue)return 0;if(e===Ce.mapValue)return 1;if(t===Ce.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=x(i[e],r[e]);if(0!==t)return t;const o=Ae(n[i[e]],s[r[e]]);if(0!==o)return o}return x(i.length,r.length)}(e.mapValue,t.mapValue);default:throw _()}}function Re(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);const n=_e(e),i=_e(t),s=x(n.seconds,i.seconds);return 0!==s?s:x(n.nanos,i.nanos)}function De(e){return Pe(e)}function Pe(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=_e(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?we(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,B.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Pe(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Pe(e.fields[s])}`;return n+"}"}(e.mapValue):_()}function Oe(e){return!!e&&"integerValue"in e}function xe(e){return!!e&&"arrayValue"in e}function Le(e){return!!e&&"mapValue"in e}function Me(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ae(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Me(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Me(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Fe(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Le(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Me(t)}setAll(e){let t=q.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=Me(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Le(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Le(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ae(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ue(Me(this.value))}}function Ve(e){const t=[];return ae(e.fields,((e,n)=>{const i=new q([e]);if(Le(n)){const e=Ve(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new pe(t)
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
 */}class je{constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new je(e,0,F.min(),F.min(),F.min(),Ue.empty(),0)}static newFoundDocument(e,t,n,i){return new je(e,1,t,F.min(),n,i,0)}static newNoDocument(e,t){return new je(e,2,t,F.min(),F.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,F.min(),F.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class qe{constructor(e,t){this.position=e,this.inclusive=t}}function Be(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?B.comparator(B.fromName(o.referenceValue),n.key):Ae(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function He(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ke(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class $e{constructor(e,t="asc"){this.field=e,this.dir=t}}function ze(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class We{}class Ke extends We{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tt(e,t,n):"array-contains"===t?new rt(e,n):"in"===t?new ot(e,n):"not-in"===t?new at(e,n):"array-contains-any"===t?new ct(e,n):new Ke(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new nt(e,n):new it(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ae(t,this.value)):null!==t&&Se(this.value)===Se(t)&&this.matchesComparison(Ae(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ge extends We{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Ge(e,t)}matches(e){return Qe(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Qe(e){return"and"===e.op}function Xe(e){return Ye(e)&&Qe(e)}function Ye(e){for(const t of e.filters)if(t instanceof Ge)return!1;return!0}function Je(e){if(e instanceof Ke)return e.field.canonicalString()+e.op.toString()+De(e.value);if(Xe(e))return e.filters.map((e=>Je(e))).join(",");{const t=e.filters.map((e=>Je(e))).join(",");return`${e.op}(${t})`}}function Ze(e,t){return e instanceof Ke?(n=e,(i=t)instanceof Ke&&n.op===i.op&&n.field.isEqual(i.field)&&ke(n.value,i.value)):e instanceof Ge?function(e,t){return t instanceof Ge&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Ze(n,t.filters[i])),!0)}(e,t):void _();var n,i}function et(e){return e instanceof Ke?`${(t=e).field.canonicalString()} ${t.op} ${De(t.value)}`:e instanceof Ge?function(e){return e.op.toString()+" {"+e.getFilters().map(et).join(" ,")+"}"}(e):"Filter";var t}class tt extends Ke{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class nt extends Ke{constructor(e,t){super(e,"in",t),this.keys=st("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class it extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=st("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function st(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>B.fromName(e.referenceValue)))}class rt extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xe(t)&&Ne(t.arrayValue,this.value)}}class ot extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ne(this.value.arrayValue,t)}}class at extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ne(this.value.arrayValue,t)}}class ct extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xe(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ne(this.value.arrayValue,e)))}}
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
 */class lt{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ft=null}}function ht(e,t=null,n=[],i=[],s=null,r=null,o=null){return new lt(e,t,n,i,s,r,o)}function ut(e){const t=w(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Je(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),ee(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>De(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>De(e))).join(",")),t.ft=e}return t.ft}function dt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ze(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ze(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!He(e.startAt,t.startAt)&&He(e.endAt,t.endAt)}
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
class ft{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function pt(e,t,n,i,s,r,o,a){return new ft(e,t,n,i,s,r,o,a)}function gt(e){return new ft(e)}function mt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function yt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function _t(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function vt(e){return null!==e.collectionGroup}function wt(e){const t=w(e);if(null===t.dt){t.dt=[];const e=_t(t),n=yt(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new $e(e)),t.dt.push(new $e(q.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new $e(q.keyField(),e))}}}return t.dt}function bt(e){const t=w(e);if(!t.wt)if("F"===t.limitType)t.wt=ht(t.path,t.collectionGroup,wt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of wt(t)){const t="desc"===n.dir?"asc":"desc";e.push(new $e(n.field,t))}const n=t.endAt?new qe(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new qe(t.startAt.position,t.startAt.inclusive):null;t.wt=ht(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function It(e,t,n){return new ft(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Et(e,t){return dt(bt(e),bt(t))&&e.limitType===t.limitType}function Tt(e){return`${ut(bt(e))}|lt:${e.limitType}`}function Ct(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>et(e))).join(", ")}]`),ee(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>De(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>De(e))).join(",")),`Target(${t})`}(bt(e))}; limitType=${e.limitType})`}function St(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):B.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of wt(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=Be(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,wt(n),i)||n.endAt&&!function(e,t,n){const i=Be(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,wt(n),i)));var n,i}function kt(e){return(t,n)=>{let i=!1;for(const s of wt(e)){const e=Nt(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Nt(e,t,n){const i=e.field.isKeyField()?B.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Ae(i,s):_()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return _()}}
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
 */class At{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ae(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return ce(this.inner)}size(){return this.innerSize}}
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
 */const Rt=new le(B.comparator);function Dt(){return Rt}const Pt=new le(B.comparator);function Ot(...e){let t=Pt;for(const n of e)t=t.insert(n.key,n);return t}function xt(e){let t=Pt;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Lt(){return Ft()}function Mt(){return Ft()}function Ft(){return new At((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ut=new le(B.comparator),Vt=new de(B.comparator);function jt(...e){let t=Vt;for(const n of e)t=t.add(n);return t}const qt=new de(x);function Bt(){return qt}
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
 */function Ht(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:te(t)?"-0":t}}function $t(e){return{integerValue:""+e}}function zt(e,t){return ne(t)?$t(t):Ht(e,t)}
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
 */class Wt{constructor(){this._=void 0}}function Kt(e,t,n){return e instanceof Xt?Yt(e,t):e instanceof Jt?Zt(e,t):n}function Gt(e,t){var n,i;return e instanceof en?Oe(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class Qt extends Wt{}class Xt extends Wt{constructor(e){super(),this.elements=e}}function Yt(e,t){const n=nn(t);for(const t of e.elements)n.some((e=>ke(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Jt extends Wt{constructor(e){super(),this.elements=e}}function Zt(e,t){let n=nn(t);for(const t of e.elements)n=n.filter((e=>!ke(e,t)));return{arrayValue:{values:n}}}class en extends Wt{constructor(e,t){super(),this.serializer=e,this._t=t}}function tn(e){return ve(e.integerValue||e.doubleValue)}function nn(e){return xe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class sn{constructor(e,t){this.version=e,this.transformResults=t}}class rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function on(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class an{}function cn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new _n(e.key,rn.none()):new fn(e.key,e.data,rn.none());{const n=e.data,i=Ue.empty();let s=new de(q.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new pn(e.key,i,new pe(s.toArray()),rn.none())}}function ln(e,t,n){var i;e instanceof fn?function(e,t,n){const i=e.value.clone(),s=mn(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof pn?function(e,t,n){if(!on(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=mn(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(gn(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function hn(e,t,n,i){return e instanceof fn?function(e,t,n,i){if(!on(e.precondition,t))return n;const s=e.value.clone(),r=yn(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof pn?function(e,t,n,i){if(!on(e.precondition,t))return n;const s=yn(e.fieldTransforms,i,t),r=t.data;return r.setAll(gn(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,r=n,on(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function un(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=Gt(i.transform,e||null);null!=s&&(null===n&&(n=Ue.empty()),n.set(i.field,s))}return n||null}function dn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&L(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof Xt&&i instanceof Xt||n instanceof Jt&&i instanceof Jt?L(n.elements,i.elements,ke):n instanceof en&&i instanceof en?ke(n._t,i._t):n instanceof Qt&&i instanceof Qt);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class fn extends an{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pn extends an{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function mn(e,t,n){const i=new Map;v(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Kt(o,a,n[s]))}return i}function yn(e,t,n){const i=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);i.set(a.field,(r=c,o=t,(s=e)instanceof Qt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof Xt?Yt(s,r):s instanceof Jt?Zt(s,r):function(e,t){const n=Gt(e,t),i=tn(n)+tn(e._t);return Oe(n)&&Oe(e._t)?$t(i):Ht(e.serializer,i)}(s,r)))}var s,r,o;return i}class _n extends an{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vn extends an{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class wn{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&ln(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=hn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=hn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Mt();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=cn(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),jt())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,((e,t)=>dn(e,t)))&&L(this.baseMutations,e.baseMutations,((e,t)=>dn(e,t)))}}class bn{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){v(e.mutations.length===n.length);let i=Ut;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new bn(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class In{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
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
var En,Tn;function Cn(e){switch(e){default:return _();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Sn(e){if(void 0===e)return g("GRPC error has no .code"),b.UNKNOWN;switch(e){case En.OK:return b.OK;case En.CANCELLED:return b.CANCELLED;case En.UNKNOWN:return b.UNKNOWN;case En.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case En.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case En.INTERNAL:return b.INTERNAL;case En.UNAVAILABLE:return b.UNAVAILABLE;case En.UNAUTHENTICATED:return b.UNAUTHENTICATED;case En.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case En.NOT_FOUND:return b.NOT_FOUND;case En.ALREADY_EXISTS:return b.ALREADY_EXISTS;case En.PERMISSION_DENIED:return b.PERMISSION_DENIED;case En.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case En.ABORTED:return b.ABORTED;case En.OUT_OF_RANGE:return b.OUT_OF_RANGE;case En.UNIMPLEMENTED:return b.UNIMPLEMENTED;case En.DATA_LOSS:return b.DATA_LOSS;default:return _()}}(Tn=En||(En={}))[Tn.OK=0]="OK",Tn[Tn.CANCELLED=1]="CANCELLED",Tn[Tn.UNKNOWN=2]="UNKNOWN",Tn[Tn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tn[Tn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tn[Tn.NOT_FOUND=5]="NOT_FOUND",Tn[Tn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tn[Tn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tn[Tn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tn[Tn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tn[Tn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tn[Tn.ABORTED=10]="ABORTED",Tn[Tn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tn[Tn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tn[Tn.INTERNAL=13]="INTERNAL",Tn[Tn.UNAVAILABLE=14]="UNAVAILABLE",Tn[Tn.DATA_LOSS=15]="DATA_LOSS";class kn{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function An(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Rn(e,t){return Nn(e,t.toTimestamp())}function Dn(e){return v(!!e),F.fromTimestamp(function(e){const t=_e(e);return new M(t.seconds,t.nanos)}(e))}function Pn(e,t){return(n=e,new V(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function On(e){const t=V.fromString(e);return v($n(t)),t}function xn(e,t){return Pn(e.databaseId,t.path)}function Ln(e){const t=On(e);return 4===t.length?V.emptyPath():Fn(t)}function Mn(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fn(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Un(e,t,n){return{name:xn(e,t),fields:n.value.mapValue.fields}}function Vn(e,t){let n;if(t instanceof fn)n={update:Un(e,t.key,t.value)};else if(t instanceof _n)n={delete:xn(e,t.key)};else if(t instanceof pn)n={update:Un(e,t.key,t.data),updateMask:Hn(t.fieldMask)};else{if(!(t instanceof vn))return _();n={verify:xn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Qt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof en)return{fieldPath:t.field.canonicalString(),increment:n._t};throw _()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:Rn(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:_())),n;var i,s}function jn(e){let t=Ln(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){v(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=qn(e);return t instanceof Ge&&Xe(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new $e(Bn((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ee(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new qe(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new qe(n,t)}(n.endAt)),pt(t,s,o,r,a,"F",c,l)}function qn(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Bn(e.unaryFilter.field);return Ke.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(e.unaryFilter.field);return Ke.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(e.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Bn(e.unaryFilter.field);return Ke.create(s,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(e):void 0!==e.fieldFilter?(n=e,Ke.create(Bn(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Ge.create(t.compositeFilter.filters.map((e=>qn(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op))):_();var t,n}function Bn(e){return q.fromServerFormat(e.fieldPath)}function Hn(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function $n(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class zn{constructor(e){this.se=e}}function Wn(e){const t=jn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?It(t,t.limit,"L"):t}
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
 */class Kn{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(ve(e.integerValue));else if("doubleValue"in e){const n=ve(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),te(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(we(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Fe(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):_()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),B.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}Kn.pe=new Kn;
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
class Gn{constructor(){this.He=new Qn}addToCollectionParentIndex(e,t){return this.He.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(W.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(W.min())}updateCollectionGroup(e,t,n){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class Qn{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new de(V.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new de(V.comparator)).toArray()}}
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
 */new Uint8Array(0);class Xn{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Xn(e,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Xn.DEFAULT_COLLECTION_PERCENTILE=10,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xn.DEFAULT=new Xn(41943040,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xn.DISABLED=new Xn(-1,0,0);
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
class Yn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Yn(0)}static bn(){return new Yn(-1)}}
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
class Jn{constructor(){this.changes=new At((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Y.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
/**
 * @license
 * Copyright 2022 Google LLC
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
class Zn{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class ei{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&hn(n.mutation,e,pe.empty(),M.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,jt()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=jt()){const i=Lt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Ot();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Lt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,jt())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Dt();const r=Ft(),o=Ft();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof pn)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),hn(o.mutation,t,o.mutation.getFieldMask(),M.now())):r.set(t.key,pe.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Zn(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ft();let i=new le(((e,t)=>e-t)),s=jt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||pe.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||jt()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Mt();c.forEach((e=>{if(!s.has(e)){const i=cn(t.get(e),n.get(e));null!==i&&l.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Y.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,B.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):vt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):Y.resolve(Lt());let o=-1,a=s;return r.next((t=>Y.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Y.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,jt()))).next((e=>({batchId:o,changes:xt(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((e=>{let t=Ot();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=Ot();return this.indexManager.getCollectionParents(e,i).next((r=>Y.forEach(r,(r=>{const o=(a=t,c=r.child(i),new ft(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,je.newInvalidDocument(i)))}));let n=Ot();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&hn(r.mutation,s,pe.empty(),M.now()),St(t,s)&&(n=n.insert(e,s))})),n}))}}
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
 */class ti{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return Y.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Dn(n.createTime)}),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:Wn(n.bundledQuery),readTime:Dn(n.readTime)}),Y.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ni{constructor(){this.overlays=new le(B.comparator),this.ts=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Lt();return Y.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.re(e,t,i)})),Y.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),Y.resolve()}getOverlaysForCollection(e,t,n){const i=Lt(),s=t.length+1,r=new B(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new le(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Lt(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Lt(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return Y.resolve(o)}re(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new In(t,n));let s=this.ts.get(t);void 0===s&&(s=jt(),this.ts.set(t,s)),this.ts.set(t,s.add(n.key))}}
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
 */class ii{constructor(){this.es=new de(si.ns),this.ss=new de(si.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new si(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new si(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new B(new V([])),n=new si(t,e),i=new si(t,e+1),s=[];return this.ss.forEachInRange([n,i],(e=>{this.us(e),s.push(e.key)})),s}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new B(new V([])),n=new si(t,e),i=new si(t,e+1);let s=jt();return this.ss.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new si(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class si{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return B.comparator(e.key,t.key)||x(e.ds,t.ds)}static rs(e,t){return x(e.ds,t.ds)||B.comparator(e.key,t.key)}}
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
 */class ri{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new de(si.ns)}checkEmpty(e){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new wn(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this._s=this._s.add(new si(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Y.resolve(r)}lookupMutationBatch(e,t){return Y.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ys(n),s=i<0?0:i;return Y.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new si(t,0),i=new si(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([n,i],(e=>{const t=this.gs(e.ds);s.push(t)})),Y.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(x);return t.forEach((e=>{const t=new si(e,0),i=new si(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,i],(e=>{n=n.add(e.ds)}))})),Y.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;B.isDocumentKey(s)||(s=s.child(""));const r=new si(new B(s),0);let o=new de(x);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.ds)),!0)}),r),Y.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){v(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Y.forEach(t.mutations,(i=>{const s=new si(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new si(t,0),i=this._s.firstAfterOrEqual(n);return Y.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class oi{constructor(e){this.Ts=e,this.docs=new le(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Y.resolve(n?n.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let n=Dt();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():je.newInvalidDocument(e))})),Y.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Dt();const r=t.path,o=new B(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||K(z(o),n)<=0||(i.has(o.key)||St(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Y.resolve(s)}getAllFromCollectionGroup(e,t,n,i){_()}Es(e,t){return Y.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ai(this)}getSize(e){return Y.resolve(this.size)}}class ai extends Jn{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(n)})),Y.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
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
 */class ci{constructor(e){this.persistence=e,this.As=new At((e=>ut(e)),dt),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ii,this.targetCount=0,this.bs=Yn.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),Y.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Sn(t),Y.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.As.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Y.waitFor(s).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return Y.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),Y.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),Y.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return Y.resolve(n)}containsKey(e,t){return Y.resolve(this.vs.containsKey(t))}}
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
 */class li{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Z(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ci(this),this.indexManager=new Gn,this.remoteDocumentCache=new oi((e=>this.referenceDelegate.Cs(e))),this.serializer=new zn(t),this.xs=new ti(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ni,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new ri(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new hi(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((e=>this.referenceDelegate.ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Os(e,t){return Y.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class hi extends Q{constructor(e){super(),this.currentSequenceNumber=e}}class ui{constructor(e){this.persistence=e,this.$s=new ii,this.Ms=null}static Fs(e){return new ui(e)}get Bs(){if(this.Ms)return this.Ms;throw _()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),Y.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),Y.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Bs,(n=>{const i=B.fromPath(n);return this.Ls(e,i).next((e=>{e||t.removeEntry(i,F.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return Y.or([()=>Y.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
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
class di{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=i}static Di(e,t){let n=jt(),i=jt();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new di(e,t.fromCache,n,i)}}
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
 */class fi{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ni(e,t).next((s=>s||this.ki(e,t,i,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(mt(t))return Y.resolve(null);let n=bt(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=It(t,null,"F"),n=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=jt(...i);return this.xi.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.$i(t,i);return this.Mi(t,r,s,n.readTime)?this.Ni(e,It(t,null,"F")):this.Fi(e,r,t,n)}))))})))))}ki(e,t,n,i){return mt(t)||i.isEqual(F.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((s=>{const r=this.$i(t,s);return this.Mi(t,r,n,i)?this.Oi(e,t):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ct(t)),this.Fi(e,r,t,$(i,-1)))}))}$i(e,t){let n=new de(kt(e));return t.forEach(((t,i)=>{St(e,i)&&(n=n.add(i))})),n}Mi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Ct(t)),this.xi.getDocumentsMatchingQuery(e,t,W.min())}Fi(e,t,n,i){return this.xi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class pi{constructor(e,t,n,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new le(x),this.qi=new At((e=>ut(e)),dt),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ei(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function gi(e,t,n,i){return new pi(e,t,n,i)}async function mi(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=jt();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function yi(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function _i(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}class vi{constructor(){this.activeTargetIds=Bt()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wi{constructor(){this.Br=new vi,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new vi,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class bi{qr(e){}shutdown(){}}
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
 */class Ii{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ei=null;function Ti(){return null===Ei?Ei=268435456+Math.round(2147483648*Math.random()):Ei++,"0x"+Ei.toString(16)
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
 */}const Ci={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Si{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
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
 */const ki="WebChannelConnection";class Ni extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,i,s){const r=Ti(),o=this.ao(e,t);p("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.ho(a,i,s),this.lo(e,o,a,n).then((t=>(p("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw m("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,i,s,r){return this.co(e,t,n,i,s)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+u,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=Ci[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,i){const s=Ti();return new Promise(((r,o)=>{const a=new(0,c.XhrIo);a.setWithCredentials(!0),a.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const t=a.getResponseJson();p(ki,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case c.ErrorCode.TIMEOUT:p(ki,`RPC '${e}' ${s} timed out`),o(new I(b.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(p(ki,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(t)>=0?t:b.UNKNOWN}(t.status);o(new I(e,t.message))}else o(new I(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(b.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{p(ki,`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(i);p(ki,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,n,15)}))}wo(e,t,n){const i=Ti(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=(0,c.createWebChannelTransport)(),o=(0,c.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=s.join("");p(ki,`Creating RPC '${e}' stream ${i}: ${l}`,a);const h=r.createWebChannel(l,a);let u=!1,d=!1;const f=new Si({Wr:t=>{d?p(ki,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(u||(p(ki,`Opening RPC '${e}' stream ${i} transport.`),h.open(),u=!0),p(ki,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},Hr:()=>h.close()}),g=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return g(h,c.WebChannel.EventType.OPEN,(()=>{d||p(ki,`RPC '${e}' stream ${i} transport opened.`)})),g(h,c.WebChannel.EventType.CLOSE,(()=>{d||(d=!0,p(ki,`RPC '${e}' stream ${i} transport closed`),f.so())})),g(h,c.WebChannel.EventType.ERROR,(t=>{d||(d=!0,m(ki,`RPC '${e}' stream ${i} transport errored:`,t),f.so(new I(b.UNAVAILABLE,"The operation could not be completed")))})),g(h,c.WebChannel.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];v(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){p(ki,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=En[e];if(void 0!==t)return Sn(t)}(t),s=o.message;void 0===n&&(n=b.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.so(new I(n,s)),h.close()}else p(ki,`RPC '${e}' stream ${i} received:`,s),f.io(s)}})),g(o,c.Event.STAT_EVENT,(t=>{t.stat===c.Stat.PROXY?p(ki,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===c.Stat.NOPROXY&&p(ki,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.no()}),0),f}}
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
 */function Ai(){return"undefined"!=typeof document?document:null}
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
 */function Ri(e){return new kn(e,!0)}
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
 */class Di{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */class Pi{constructor(e,t,n,i,s,r,o,a){this.Ws=e,this.bo=n,this.Po=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Di(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new I(b.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Oi extends Pi{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(v(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Dn(e.updateTime):Dn(t);return n.isEqual(F.min())&&(n=Dn(t)),new sn(n,e.transformResults||[])}(e,n)))):[]),s=Dn(e.commitTime);return this.listener.Zo(s,i)}var t,n;return v(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Mn(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Vn(this.serializer,e)))};this.Fo(t)}}
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
 */class xi extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new I(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.co(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(b.UNKNOWN,e.toString())}))}fo(e,t,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.fo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(b.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class Li{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(g(t),this.ru=!1):p("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
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
 */class Mi{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr((e=>{n.enqueueAndForget((async()=>{Vi(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t.du.add(4),await Ui(t),t.mu.set("Unknown"),t.du.delete(4),await Fi(t)}(this))}))})),this.mu=new Li(n,i)}}async function Fi(e){if(Vi(e))for(const t of e.wu)await t(!0)}async function Ui(e){for(const t of e.wu)await t(!1)}function Vi(e){return 0===w(e).du.size}async function ji(e,t,n){if(!J(t))throw t;e.du.add(1),await Ui(e),e.mu.set("Offline"),n||(n=()=>yi(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Fi(e)}))}function qi(e,t){return t().catch((n=>ji(e,n,t)))}async function Bi(e){const t=w(e),n=Zi(t);let i=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Hi(t);)try{const e=await _i(t.localStore,i);if(null===e){0===t.lu.length&&n.$o();break}i=e.batchId,$i(t,e)}catch(e){await ji(t,e)}zi(t)&&Wi(t)}function Hi(e){return Vi(e)&&e.lu.length<10}function $i(e,t){e.lu.push(t);const n=Zi(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function zi(e){return Vi(e)&&!Zi(e).xo()&&e.lu.length>0}function Wi(e){Zi(e).start()}async function Ki(e){Zi(e).tu()}async function Gi(e){const t=Zi(e);for(const n of e.lu)t.Yo(n.mutations)}async function Qi(e,t,n){const i=e.lu.shift(),s=bn.from(i,t,n);await qi(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Bi(e)}async function Xi(e,t){t&&Zi(e).Jo&&await async function(e,t){if(Cn(n=t.code)&&n!==b.ABORTED){const n=e.lu.shift();Zi(e).Oo(),await qi(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Bi(e)}var n}(e,t),zi(e)&&Wi(e)}async function Yi(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Vi(n);n.du.add(3),await Ui(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Fi(n)}async function Ji(e,t){const n=w(e);t?(n.du.delete(2),await Fi(n)):t||(n.du.add(2),await Ui(n),n.mu.set("Unknown"))}function Zi(e){return e.pu||(e.pu=function(e,t,n){const i=w(e);return i.nu(),new Oi(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Ki.bind(null,e),Zr:Xi.bind(null,e),Xo:Gi.bind(null,e),Zo:Qi.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Bi(e)):(await e.pu.stop(),e.lu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
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
 */}class es{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new es(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ts(e,t){if(g("AsyncQueue",`${t}: ${e}`),J(e))return new I(b.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class ns{constructor(){this.queries=new At((e=>Tt(e)),Et),this.onlineState="Unknown",this.Au=new Set}}function is(e){e.Au.forEach((e=>{e.next()}))}class ss{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new At((e=>Tt(e)),Et),this.ic=new Map,this.rc=new Set,this.oc=new le(B.comparator),this.uc=new Map,this.cc=new ii,this.ac={},this.hc=new Map,this.lc=Yn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}function rs(e,t,n){const i=w(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.sc.forEach(((n,i)=>{const s=i.view.Ru(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=w(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(i=!0)})),i&&is(n)}(i.eventManager,t),e.length&&i.nc.zo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function os(e,t){const n=w(e),i=t.batch.batchId;try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=Y.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);v(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=jt();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);ls(n,i,null),cs(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await hs(n,e)}catch(e){await X(e)}}async function as(e,t,n){const i=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(v(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);ls(i,t,n),cs(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await hs(i,e)}catch(e){await X(e)}}function cs(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function ls(e,t,n){const i=w(e);let s=i.ac[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.ac[i.currentUser.toKey()]=s}}async function hs(e,t,n){const i=w(e),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((e,a)=>{o.push(i.dc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=di.Di(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.nc.zo(s),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Y.forEach(t,(t=>Y.forEach(t.Vi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Y.forEach(t.Si,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!J(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(t,s)}}}(i.localStore,r))}async function us(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await mi(n.localStore,t);n.currentUser=t,(i=n).hc.forEach((e=>{e.forEach((e=>{e.reject(new I(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await hs(n,e.Qi)}var i}function ds(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=os.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=as.bind(null,t),t}class fs{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ri(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return gi(this.persistence,new fi,e.initialUser,this.serializer)}createPersistence(e){return new li(ui.Fs,this.serializer)}createSharedClientState(e){return new wi}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ps{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rs(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=us.bind(null,this.syncEngine),await Ji(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ns}createDatastore(e){const t=Ri(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Ni(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new xi(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>rs(this.syncEngine,e,0),r=Ii.D()?new Ii:new bi,new Mi(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new ss(e,t,n,i,s,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);p("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Ui(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
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
class gs{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=h.UNAUTHENTICATED,this.clientId=O.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ts(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ms(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await mi(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ys(e,t){e.asyncQueue.verifyOperationInProgress();const n=await vs(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Yi(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Yi(t.remoteStore,n))),e._onlineComponents=t}function _s(e){return"FirebaseError"===e.name?e.code===b.FAILED_PRECONDITION||e.code===b.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function vs(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await ms(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!_s(n))throw n;m("Error using user provided cache. Falling back to memory cache: "+n),await ms(e,new fs)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await ms(e,new fs);return e._offlineComponents}async function ws(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await ys(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await ys(e,new ps))),e._onlineComponents}function bs(e){return ws(e).then((e=>e.syncEngine))}
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
const Is=new Map;
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
 */function Es(e,t,n){if(!n)throw new I(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ts(e){if(!B.isDocumentKey(e))throw new I(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Cs(e){if(B.isDocumentKey(e))throw new I(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ss(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":_()}function ks(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ss(e);throw new I(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Ns{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new I(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new I(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new I(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class As{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ns({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new I(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ns(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"firstParty":return new A(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new I(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Is.get(e);t&&(p("ComponentProvider","Removing Datastore"),Is.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class Rs{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rs(this.firestore,e,this._key)}}class Ds{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class Ps extends Ds{constructor(e,t,n){super(e,t,gt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rs(this.firestore,null,new B(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function Os(e,t,...n){if(e=(0,a.getModularInstance)(e),Es("collection","path",t),e instanceof As){const i=V.fromString(t,...n);return Cs(i),new Ps(e,null,i)}{if(!(e instanceof Rs||e instanceof Ps))throw new I(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(V.fromString(t,...n));return Cs(i),new Ps(e.firestore,null,i)}}
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
class xs{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Di(this,"async_queue_retry"),this.qc=()=>{const e=Ai();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=Ai();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Ai();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new E;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!J(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=es.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(i),i}Uc(){this.Mc&&_()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class Ls extends As{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new xs,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Us(this),this._firestoreClient.terminate()}}function Ms(e,t){const n="object"==typeof e?e:(0,i.getApp)(),s="string"==typeof e?e:t||"(default)",r=(0,i._getProvider)(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const e=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var s;const r=(e=ks(e,As))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=h.MOCK_USER;else{t=(0,a.createMockUserToken)(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new I(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(r)}e._authCredentials=new S(new T(t,n))}}(r,...e)}return r}function Fs(e){return e._firestoreClient||Us(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Us(e){var t,n,i;const s=e._freezeSettings(),r=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new Ee(o,a,c,(l=s).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams));var o,a,c,l;e._firestoreClient=new gs(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
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
class Vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vs(me.fromBase64String(e))}catch(e){throw new I(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Vs(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class js{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new I(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class qs{constructor(e){this._methodName=e}}
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
 */class Bs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}
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
 */const Hs=/^__.*__$/;class $s{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new fn(e,this.data,t,this.fieldTransforms)}}function zs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class Ws{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Ws(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Zc({path:n,ta:!1});return i.ea(e),i}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Zc({path:n,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ir(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(zs(this.Yc)&&Hs.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Ks{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ri(e)}ua(e,t,n,i=!1){return new Ws({Yc:e,methodName:t,oa:n,path:q.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gs(e){const t=e._freezeSettings(),n=Ri(e._databaseId);return new Ks(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Qs(e,t,n,i,s,r={}){const o=e.ua(r.merge||r.mergeFields?2:0,t,n,s);Zs("Data must be an object, but it was:",o,i);const a=Ys(i,o);let c,l;if(r.merge)c=new pe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=er(t,i,n);if(!o.contains(s))throw new I(b.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);sr(e,s)||e.push(s)}c=new pe(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new $s(new Ue(a),c,l)}function Xs(e,t){if(Js(e=(0,a.getModularInstance)(e)))return Zs("Unsupported field value:",t,e),Ys(e,t);if(e instanceof qs)return function(e,t){if(!zs(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=Xs(s,t.sa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zt(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=M.fromDate(e);return{timestampValue:Nn(t.serializer,n)}}if(e instanceof M){const n=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Nn(t.serializer,n)}}if(e instanceof Bs)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Vs)return{bytesValue:An(t.serializer,e._byteString)};if(e instanceof Rs){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Pn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${Ss(e)}`)}(e,t)}function Ys(e,t){const n={};return ce(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(e,((e,i)=>{const s=Xs(i,t.Xc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Js(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof Bs||e instanceof Vs||e instanceof Rs||e instanceof qs)}function Zs(e,t,n){if(!Js(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Ss(n);throw"an object"===i?t.ia(e+" a custom object"):t.ia(e+" "+i)}var i}function er(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof js)return t._internalPath;if("string"==typeof t)return nr(e,t);throw ir("Field path arguments must be of type string or ",e,!1,void 0,n)}const tr=new RegExp("[~\\*/\\[\\]]");function nr(e,t,n){if(t.search(tr)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new js(...t.split("."))._internalPath}catch(i){throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ir(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new I(b.INVALID_ARGUMENT,a+e+c)}function sr(e,t){return e.some((e=>e.isEqual(t)))}
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
function rr(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function or(e,t){const n=ks(e.firestore,Ls),i=function(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=O.A()),Es("doc","path",t),e instanceof As){const i=V.fromString(t,...n);return Ts(i),new Rs(e,null,new B(i))}{if(!(e instanceof Rs||e instanceof Ps))throw new I(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(V.fromString(t,...n));return Ts(i),new Rs(e.firestore,e instanceof Ps?e.converter:null,new B(i))}}(e),s=rr(e.converter,t);return ar(n,[Qs(Gs(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,rn.exists(!1))]).then((()=>i))}function ar(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=ds(e);try{const e=await function(e,t){const n=w(e),i=M.now(),s=t.reduce(((e,t)=>e.add(t.key)),jt());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Dt(),c=jt();return n.Ki.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=un(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new pn(e.key,t,Ve(t.value.mapValue),rn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:xt(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.ac[e.currentUser.toKey()];i||(i=new le(x)),i=i.insert(t,n),e.ac[e.currentUser.toKey()]=i}(i,e.batchId,n),await hs(i,e.changes),await Bi(i.remoteStore)}catch(e){const t=ts(e,"Failed to persist write");n.reject(t)}}(await bs(e),t,n))),n.promise}(Fs(e),t)}!function(e,t=!0){var n;n=i.SDK_VERSION,u=n,(0,i._registerComponent)(new(0,r.Component)("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new Ls(new k(e.getProvider("auth-internal")),new D(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new I(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Te(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(l,"3.10.0",e),(0,i.registerVersion)(l,"3.10.0","esm2017")}()})),s.register("i4D38",(function(n,i){e(n.exports,"createWebChannelTransport",(()=>Jn)),e(n.exports,"getStatEventTarget",(()=>Zn)),e(n.exports,"ErrorCode",(()=>ei)),e(n.exports,"EventType",(()=>ti)),e(n.exports,"Event",(()=>ni)),e(n.exports,"Stat",(()=>ii)),e(n.exports,"FetchXmlHttpFactory",(()=>si)),e(n.exports,"WebChannel",(()=>ri)),e(n.exports,"XhrIo",(()=>oi));var s,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o={},a=a||{},c=r||self;function l(){}function h(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f))},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function b(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function I(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(h(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function E(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",l,t),c.removeEventListener("test",l,t)}catch(e){}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}var S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function k(e,t){return e<t?-1:e>t?1:0}function N(){var e=c.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return-1!=N().indexOf(e)}function R(e){return R[" "](e),e}R[" "]=l;var D,P,O=A("Opera"),x=A("Trident")||A("MSIE"),L=A("Edge"),M=L||x,F=A("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),U=-1!=N().toLowerCase().indexOf("webkit")&&!A("Edge");function V(){var e=c.document;return e?e.documentMode:void 0}e:{var j="",q=(P=N(),F?/rv:([^\);]+)(\)|;)/.exec(P):L?/Edge\/([\d\.]+)/.exec(P):x?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(P):U?/WebKit\/(\S+)/.exec(P):O?/(?:Version)[ \/]?(\S+)/.exec(P):void 0);if(q&&(j=q?q[1]:""),x){var B=V();if(null!=B&&B>parseFloat(j)){D=String(B);break e}}D=j}var H,$={};function z(){return function(e){var t=$;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=S(String(D)).split("."),n=S("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=k(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||k(0==s[2].length,0==r[2].length)||k(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(c.document&&x){var W=V();H=W||(parseInt(D,10)||void 0)}else H=void 0;var K=H;function G(e,t){if(E.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(F){e:{try{R(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.X.h.call(this)}}_(G,E);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++Y,this.ba=this.ea=!1}function Z(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e){const t={};for(const n in e)t[n]=e[n];return t}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function se(e){this.src=e,this.g={},this.h=0}function re(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=w(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oe(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}se.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=oe(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new J(t,this.src,r,!!i,s)).ea=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),ce={};function le(e,t,n,i,s){if(i&&i.once)return ue(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)le(e,t[r],n,i,s);return null}return n=_e(n),e&&e[X]?e.N(t,n,u(i)?!!i.capture:!!i,s):he(e,t,n,!1,i,s)}function he(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=u(s)?!!s.capture:!!s,a=me(e);if(a||(e[ae]=a=new se(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)T||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(pe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ue(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ue(e,t[r],n,i,s);return null}return n=_e(n),e&&e[X]?e.O(t,n,u(i)?!!i.capture:!!i,s):he(e,t,n,!0,i,s)}function de(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)de(e,t[r],n,i,s);else i=u(i)?!!i.capture:!!i,n=_e(n),e&&e[X]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=oe(r=e.g[t],n,i,s))&&(Z(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=me(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oe(t,n,i,s)),(n=-1<e?t[e]:null)&&fe(n))}function fe(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[X])re(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(pe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=me(t))?(re(n,e),0==n.h&&(n.src=null,t[ae]=null)):Z(e)}}}function pe(e){return e in ce?ce[e]:ce[e]="on"+e}function ge(e,t){if(e.ba)e=!0;else{t=new G(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&fe(e),e=n.call(i,t)}return e}function me(e){return(e=e[ae])instanceof se?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"==typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function ve(){v.call(this),this.i=new se(this),this.P=this,this.I=null}function we(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new E(t,e);else if(t instanceof E)t.target=t.target||e;else{var s=t;ie(t=new E(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=be(o,i,!0,t)&&s}if(s=be(o=t.g=e,i,!0,t)&&s,s=be(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=be(o=t.g=n[r],i,!1,t)&&s}function be(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&re(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}_(ve,v),ve.prototype[X]=!0,ve.prototype.removeEventListener=function(e,t,n,i){de(this,e,t,n,i)},ve.prototype.M=function(){if(ve.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Z(n[i]);delete t.g[e],t.h--}}this.I=null},ve.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ve.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ie=c.JSON.stringify;function Ee(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Te,Ce=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Se),(e=>e.reset()));class Se{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ke(e){c.setTimeout((()=>{throw e}),0)}function Ne(e,t){Te||function(){var e=c.Promise.resolve(void 0);Te=function(){e.then(De)}}(),Ae||(Te(),Ae=!0),Re.add(e,t)}var Ae=!1,Re=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ce.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function De(){for(var e;e=Ee();){try{e.h.call(e.g)}catch(e){ke(e)}var t=Ce;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ae=!1}function Pe(e,t){ve.call(this),this.h=e||1,this.g=t||c,this.j=m(this.lb,this),this.l=Date.now()}function Oe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function xe(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}function Le(e){e.g=xe((()=>{e.g=null,e.i&&(e.i=!1,Le(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_(Pe,ve),(s=Pe.prototype).ca=!1,s.R=null,s.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(Oe(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Pe.X.M.call(this),Oe(this),delete this.g};class Me extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Le(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){v.call(this),this.h=e,this.g={}}_(Fe,v);var Ue=[];function Ve(e,t,n,i){Array.isArray(n)||(n&&(Ue[0]=n.toString()),n=Ue);for(var s=0;s<n.length;s++){var r=le(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function je(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fe(e)}),e),e.g={}}function qe(){this.g=!0}function Be(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Ie(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Fe.prototype.M=function(){Fe.X.M.call(this),je(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qe.prototype.Aa=function(){this.g=!1},qe.prototype.info=function(){};var He={},$e=null;function ze(){return $e=$e||new ve}function We(e){E.call(this,He.Pa,e)}function Ke(e){const t=ze();we(t,new We(t))}function Ge(e,t){E.call(this,He.STAT_EVENT,e),this.stat=t}function Qe(e){const t=ze();we(t,new Ge(t,e))}function Xe(e,t){E.call(this,He.Qa,e),this.size=t}function Ye(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){e()}),t)}He.Pa="serverreachability",_(We,E),He.STAT_EVENT="statevent",_(Ge,E),He.Qa="timingevent",_(Xe,E);var Je={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ze={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function et(){}function tt(e){return e.h||(e.h=e.i())}function nt(){}et.prototype.h=null;var it,st={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function rt(){E.call(this,"d")}function ot(){E.call(this,"c")}function at(){}function ct(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new Fe(this),this.O=ht,e=M?125:void 0,this.T=new Pe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lt}function lt(){this.i=null,this.g="",this.h=!1}_(rt,E),_(ot,E),_(at,et),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},it=new at;var ht=45e3,ut={},dt={};function ft(e,t,n){e.K=1,e.v=Pt(kt(t)),e.s=n,e.P=!0,pt(e,null)}function pt(e,t){e.F=Date.now(),_t(e),e.A=kt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),zt(n.i,"t",i),e.C=0,n=e.l.H,e.h=new lt,e.g=zn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Me(m(e.La,e,e.g),e.N)),Ve(e.S,e.g,"readystatechange",e.ib),t=e.H?te(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ke(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+l+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function gt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function mt(e,t,n){let i,s=!0;for(;!e.I&&e.C<n.length;){if(i=yt(e,n),i==dt){4==t&&(e.o=4,Qe(14),s=!1),Be(e.j,e.m,null,"[Incomplete Response]");break}if(i==ut){e.o=4,Qe(15),Be(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Be(e.j,e.m,i,null),Et(e,i)}gt(e)&&i!=dt&&i!=ut&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Qe(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(t),t.K=!0,Qe(11))):(Be(e.j,e.m,n,"[Invalid Chunked Response]"),It(e),bt(e))}function yt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?dt:(n=Number(t.substring(n,i)),isNaN(n)?ut:(i+=1)+n>t.length?dt:(t=t.substr(i,n),e.C=i+n,t))}function _t(e){e.V=Date.now()+e.O,vt(e,e.O)}function vt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ye(m(e.gb,e),t)}function wt(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function bt(e){0==e.l.G||e.I||jn(e.l,e)}function It(e){wt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Oe(e.T),je(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Et(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Yt(n.h,e)))if(!e.J&&Yt(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Vn(n),An(n)}Mn(n),Qe(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ye(m(n.cb,n),6e3));if(1>=Xt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Bn(n,11)}else if((e.J||n.g==e)&&Vn(n),!C(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const t=l[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=l[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const h=l[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Jt(r,r.h),r.h=null))}if(i.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Dt(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((i=n).sa=$n(i,i.H?i.ka:null,i.V),o.J){Zt(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(wt(a),_t(a)),i.g=o}else Ln(i);0<n.i.length&&Dn(n)}else"stop"!=l[0]&&"close"!=l[0]||Bn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Bn(n,7):Nn(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}Ke()}catch(e){}}function Tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(h(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(h(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(h(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(s=ct.prototype).setTimeout=function(e){this.O=e},s.ib=function(e){e=e.target;const t=this.L;t&&3==In(e)?t.l():this.La(e)},s.La=function(e){try{if(e==this.g)e:{const u=In(this.g);var t=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||M||this.g&&(this.h.h||this.g.fa()||En(this.g)))){this.I||4!=u||7==t||Ke(),wt(this);var n=this.g.aa();this.Y=n;t:if(gt(this)){var i=En(this.g);e="";var s=i.length,r=4==In(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){It(this),bt(this);var o="";break t}this.h.i=new c.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(a)){var h=a;break t}}h=null}if(!(n=h)){this.i=!1,this.o=3,Qe(12),It(this),bt(this);break e}Be(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Et(this,n)}this.P?(mt(this,u,o),M&&this.i&&3==u&&(Ve(this.S,this.T,"tick",this.hb),this.T.start())):(Be(this.j,this.m,o,null),Et(this,o)),4==u&&It(this),this.i&&!this.I&&(4==u?jn(this.l,this):(this.i=!1,_t(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),It(this),bt(this)}}}catch(e){}},s.hb=function(){if(this.g){var e=In(this.g),t=this.g.fa();this.C<t.length&&(wt(this),mt(this,e,t),this.i&&4!=e&&_t(this))}},s.cancel=function(){this.I=!0,It(this)},s.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ke(),Qe(17)),It(this),this.o=2,bt(this)):vt(this,this.V-e)};var Ct=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function St(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof St){this.h=void 0!==t?t:e.h,Nt(this,e.j),this.s=e.s,this.g=e.g,At(this,e.m),this.l=e.l,t=e.i;var n=new qt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Rt(this,n),this.o=e.o}else e&&(n=String(e).match(Ct))?(this.h=!!t,Nt(this,n[1]||"",!0),this.s=Ot(n[2]||""),this.g=Ot(n[3]||"",!0),At(this,n[4]),this.l=Ot(n[5]||"",!0),Rt(this,n[6]||"",!0),this.o=Ot(n[7]||"")):(this.h=!!t,this.i=new qt(null,this.h))}function kt(e){return new St(e)}function Nt(e,t,n){e.j=n?Ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function At(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Rt(e,t,n){t instanceof qt?(e.i=t,function(e,t){t&&!e.j&&(Bt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ht(this,t),zt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=xt(t,Vt)),e.i=new qt(t,e.h))}function Dt(e,t,n){e.i.set(t,n)}function Pt(e){return Dt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Lt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Lt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xt(t,Mt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(xt(t,Mt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(xt(n,"/"==n.charAt(0)?Ut:Ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",xt(n,jt)),e.join("")};var Mt=/[#\/\?@]/g,Ft=/[#\?:]/g,Ut=/[#\?]/g,Vt=/[#\?@]/g,jt=/#/g;function qt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ht(e,t){Bt(e),t=Wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $t(e,t){return Bt(e),t=Wt(e,t),e.g.has(t)}function zt(e,t,n){Ht(e,t),0<n.length&&(e.i=null,e.g.set(Wt(e,t),b(n)),e.h+=n.length)}function Wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(s=qt.prototype).add=function(e,t){Bt(this),this.i=null,e=Wt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},s.forEach=function(e,t){Bt(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},s.oa=function(){Bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},s.W=function(e){Bt(this);let t=[];if("string"==typeof e)$t(this,e)&&(t=t.concat(this.g.get(Wt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},s.set=function(e,t){return Bt(this),this.i=null,$t(this,e=Wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Kt(e){this.l=e||Gt,c.PerformanceNavigationTiming?e=0<(e=c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(c.g&&c.g.Ga&&c.g.Ga()&&c.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gt=10;function Qt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xt(e){return e.h?1:e.g?e.g.size:0}function Yt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Zt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function en(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return b(e.i)}function tn(){}function nn(){this.g=new tn}function sn(e,t,n){const i=n||"";try{Tt(e,(function(e,n){let s=e;u(e)&&(s=Ie(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function rn(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function on(e){this.l=e.ac||null,this.j=e.jb||!1}function an(e,t){ve.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Kt.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},tn.prototype.stringify=function(e){return c.JSON.stringify(e,void 0)},tn.prototype.parse=function(e){return c.JSON.parse(e,void 0)},_(on,et),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),_(an,ve);var cn=0;function ln(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function hn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(s=an.prototype).open=function(e,t){if(this.readyState!=cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,un(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||c).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,hn(this)),this.readyState=cn},s.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ln(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?hn(this):un(this),3==this.readyState&&ln(this)}},s.Va=function(e){this.g&&(this.response=this.responseText=e,hn(this))},s.Ua=function(e){this.g&&(this.response=e,hn(this))},s.ga=function(){this.g&&hn(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dn=c.JSON.parse;function fn(e){ve.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}_(fn,ve);var pn="",gn=/^https?$/i,mn=["POST","PUT"];function yn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_n(e),wn(e)}function _n(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}function vn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=In(e)||2!=e.aa()))if(e.v&&4==In(e))xe(e.Ha,0,e);else if(we(e,"readystatechange"),4==In(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.H).match(Ct)[1]||null;if(!s&&c.self&&c.self.location){var r=c.self.location.protocol;s=r.substr(0,r.length-1)}i=!gn.test(s?s.toLowerCase():"")}n=i}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var o=2<In(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",_n(e)}}finally{wn(e)}}}function wn(e,t){if(e.g){bn(e);const n=e.g,i=e.C[0]?l:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function bn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function In(e){return e.g?e.g.readyState:0}function En(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Tn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Cn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Tn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Dt(e,t,n))}function Sn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kn(e){this.Ca=0,this.i=[],this.j=new qe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Sn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Sn("baseRetryDelayMs",5e3,e),this.bb=Sn("retryDelaySeedMs",1e4,e),this.$a=Sn("forwardChannelMaxRetries",2,e),this.ta=Sn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Kt(e&&e.concurrentRequestLimit),this.Fa=new nn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Nn(e){if(Rn(e),3==e.G){var t=e.U++,n=kt(e.F);Dt(n,"SID",e.I),Dt(n,"RID",t),Dt(n,"TYPE","terminate"),On(e,n),(t=new ct(e,e.j,t,void 0)).K=2,t.v=Pt(kt(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(t.v.toString(),"")),!n&&c.Image&&((new Image).src=t.v,n=!0),n||(t.g=zn(t.l,null),t.g.da(t.v)),t.F=Date.now(),_t(t)}Hn(e)}function An(e){e.g&&(Fn(e),e.g.cancel(),e.g=null)}function Rn(e){An(e),e.u&&(c.clearTimeout(e.u),e.u=null),Vn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&c.clearTimeout(e.m),e.m=null)}function Dn(e){Qt(e.h)||e.m||(e.m=!0,Ne(e.Ja,e),e.C=0)}function Pn(e,t){var n;n=t?t.m:e.U++;const i=kt(e.F);Dt(i,"SID",e.I),Dt(i,"RID",n),Dt(i,"AID",e.T),On(e,i),e.o&&e.s&&Cn(i,e.o,e.s),n=new ct(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=xn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Jt(e.h,n),ft(n,i,t)}function On(e,t){e.ia&&ee(e.ia,(function(e,n){Dt(t,n,e)})),e.l&&Tt({},(function(e,n){Dt(t,n,e)}))}function xn(e,t,n){n=Math.min(e.i.length,n);var i=e.l?m(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{sn(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Ln(e){e.g||e.u||(e.Z=1,Ne(e.Ia,e),e.A=0)}function Mn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Ye(m(e.Ia,e),qn(e,e.A)),e.A++,!0)}function Fn(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function Un(e){e.g=new ct(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=kt(e.sa);Dt(t,"RID","rpc"),Dt(t,"SID",e.I),Dt(t,"CI",e.L?"0":"1"),Dt(t,"AID",e.T),Dt(t,"TYPE","xmlhttp"),On(e,t),e.o&&e.s&&Cn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Pt(kt(t)),n.s=null,n.P=!0,pt(n,e)}function Vn(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function jn(e,t){var n=null;if(e.g==t){Vn(e),Fn(e),e.g=null;var i=2}else{if(!Yt(e.h,t))return;n=t.D,Zt(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;we(i=ze(),new Xe(i,n)),Dn(e)}else Ln(e);else if(3==(s=t.o)||0==s&&0<e.pa||!(1==i&&function(e,t){return!(Xt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Ye(m(e.Ja,e,t),qn(e,e.C)),e.C++,0)))}(e,t)||2==i&&Mn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Bn(e,5);break;case 4:Bn(e,10);break;case 3:Bn(e,6);break;default:Bn(e,2)}}function qn(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Bn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=m(e.kb,e);n||(n=new St("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Nt(n,"https"),Pt(n)),function(e,t){const n=new qe;if(c.Image){const i=new Image;i.onload=y(rn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=y(rn,n,i,"TestLoadImage: error",!1,t),i.onabort=y(rn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=y(rn,n,i,"TestLoadImage: timeout",!1,t),c.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Qe(2);e.G=0,e.l&&e.l.va(t),Hn(e),Rn(e)}function Hn(e){if(e.G=0,e.la=[],e.l){const t=en(e.h);0==t.length&&0==e.i.length||(I(e.la,t),I(e.la,e.i),e.h.i.length=0,b(e.i),e.i.length=0),e.l.ua()}}function $n(e,t,n){var i=n instanceof St?kt(n):new St(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),At(i,i.m);else{var s=c.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new St(null,void 0);i&&Nt(r,i),t&&(r.g=t),s&&At(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&Dt(i,n,t),Dt(i,"VER",e.ma),On(e,i),i}function zn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new fn(new on({jb:!0})):new fn(e.ra)).Ka(e.H),t}function Wn(){}function Kn(){if(x&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function Gn(e,t){ve.call(this),this.g=new kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!C(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Yn(this)}function Qn(e){rt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Xn(){ot.call(this),this.status=1}function Yn(e){this.g=e}(s=fn.prototype).Ka=function(e){this.L=e},s.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():it.g(),this.C=this.u?tt(this.u):tt(it),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void yn(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=c.FormData&&e instanceof c.FormData,!(0<=w(mn,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bn(this),0<this.B&&((this.K=function(e){return x&&z()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=xe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yn(this,e)}},s.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),wn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wn(this,!0)),fn.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?vn(this):this.fb())},s.fb=function(){vn(this)},s.aa=function(){try{return 2<In(this)?this.g.status:-1}catch(e){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dn(t)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(s=kn.prototype).ma=8,s.G=1,s.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new ct(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=te(r),ie(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=xn(this,s,t),Dt(n=kt(this.F),"RID",e),Dt(n,"CVER",22),this.D&&Dt(n,"X-HTTP-Session-Id",this.D),On(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Tn(r)))+"&"+t:this.o&&Cn(n,this.o,r)),Jt(this.h,s),this.Ya&&Dt(n,"TYPE","init"),this.O?(Dt(n,"$req",t),Dt(n,"SID","null"),s.Z=!0,ft(s,n,null)):ft(s,n,t),this.G=2}}else 3==this.G&&(e?Pn(this,e):0==this.i.length||Qt(this.h)||Pn(this))},s.Ia=function(){if(this.u=null,Un(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ye(m(this.eb,this),e)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qe(10),An(this),Un(this))},s.cb=function(){null!=this.v&&(this.v=null,An(this),Mn(this),Qe(19))},s.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))},(s=Wn.prototype).xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},Kn.prototype.g=function(e,t){return new Gn(e,t)},_(Gn,ve),Gn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Qe(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=$n(e,null,e.V),Dn(e)},Gn.prototype.close=function(){Nn(this.g)},Gn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ie(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Dn(t)},Gn.prototype.M=function(){this.g.l=null,delete this.j,Nn(this.g),delete this.g,Gn.X.M.call(this)},_(Qn,rt),_(Xn,ot),_(Yn,Wn),Yn.prototype.xa=function(){we(this.g,"a")},Yn.prototype.wa=function(e){we(this.g,new Qn(e))},Yn.prototype.va=function(e){we(this.g,new Xn)},Yn.prototype.ua=function(){we(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Gn.prototype.send=Gn.prototype.u,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,Ze.COMPLETE="complete",nt.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",ve.prototype.listen=ve.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Jn=o.createWebChannelTransport=function(){return new Kn},Zn=o.getStatEventTarget=function(){return ze()},ei=o.ErrorCode=Je,ti=o.EventType=Ze,ni=o.Event=He,ii=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},si=o.FetchXmlHttpFactory=on,ri=o.WebChannel=nt,oi=o.XhrIo=fn}));var r=s("fSDyF"),o=s("7xvHX"),a=s("eryG9"),c=s("gMVVg"),l=s("5Z2ef"),h=s("hPtJY");
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
 */let u="";
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
class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,c.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,c.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,c.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new f},g=p("localStorage"),m=p("sessionStorage"),y=new(0,l.Logger)("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,c.stringToByteArray)(e),n=new(0,c.Sha1);n.update(t);const i=n.digest();return c.base64.encodeByteArray(i)},w=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=w.apply(null,i):t+="object"==typeof i?(0,c.stringify)(i):i,t+=" "}return t};let b=null,I=!0;const E=function(e,t){(0,c.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(y.logLevel=l.LogLevel.VERBOSE,b=y.log.bind(y),t&&m.set("logging_enabled",!0)):"function"==typeof e?b=e:(b=null,m.remove("logging_enabled"))},T=function(...e){if(!0===I&&(I=!1,null===b&&!0===m.get("logging_enabled")&&E(!0)),b){const t=w.apply(null,e);b(t)}},C=function(e){return function(...t){T(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+w(...e);y.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${w(...e)}`;throw y.error(t),new Error(t)},N=function(...e){const t="FIREBASE WARNING: "+w(...e);y.warn(t)},A=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=U(e),i=U(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},P=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,c.stringify)(t))},O=function(e){if("object"!=typeof e||null===e)return(0,c.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,c.stringify)(t[i]),n+=":",n+=O(e[t[i]]);return n+="}",n},x=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const M=function(e){(0,c.assert)(!A(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let h="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),h+=e}return h.toLowerCase()};const F=new RegExp("^-?(0*)\\d{1,10}$"),U=function(e){if(F.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},V=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw N("Exception was thrown by user callback.",t),e}),Math.floor(0))}},j=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){N(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class B{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',N(e)}}class H{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}H.OWNER="owner";
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
const $=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class z{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=g.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&g.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function W(e,t,n){let i;if((0,c.assert)("string"==typeof t,"typeof type must == string"),(0,c.assert)("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return L(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
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
 */class K{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,c.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,c.deepCopy)(this.counters_)}}
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
 */const G={},Q={};function X(e){const t=e.toString();return G[t]||(G[t]=new K),G[t]}
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
class Y{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&V((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */class J{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=X(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),W(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Y(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,c.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Z(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){J.forceAllow_=!0}static forceDisallow(){J.forceDisallow_=!0}static isAvailable(){return!(0,c.isNodeSdk)()&&(!!J.forceAllow_||!(J.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,c.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,c.base64Encode)(t),i=x(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,c.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,c.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Z{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,c.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Z.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){T("frame writing exception"),e.stack&&T(e.stack),T(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,c.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let ee=null;"undefined"!=typeof MozWebSocket?ee=MozWebSocket:"undefined"!=typeof WebSocket&&(ee=WebSocket);class te{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=X(t),this.connURL=te.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return!(0,c.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),W(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,g.set("previous_websocket_failure",!0);try{let e;if((0,c.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${u}/${h.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ee(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){te.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ee&&!te.forceDisallow_}static previouslyFailed(){return g.isInMemoryStorage||!0===g.get("previous_websocket_failure")}markConnectionHealthy(){g.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,c.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,c.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,c.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=x(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}te.responsesRequiredToBeHealthy=2,te.healthyTimeout=3e4;
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
class ne{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[J,te]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=te&&te.isAvailable();let n=t&&!te.previouslyFailed();if(e.webSocketOnly&&(t||N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[te];else{const e=this.transports_=[];for(const t of ne.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ne.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ne.globalTransportInitialized_=!1;class ie{constructor(e,t,n,i,s,r,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new ne(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=j((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=P("t",e),n=P("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=P("t",e),n=P("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=P("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&N("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),j((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):j((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(g.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class se{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class re{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,c.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,c.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class oe extends re{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,c.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new oe}getInitialEvent(e){return(0,c.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */class ae{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ce(){return new ae("")}function le(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function he(e){return e.pieces_.length-e.pieceNum_}function ue(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ae(e.pieces_,t)}function de(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function fe(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function pe(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ae(t,0)}function ge(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ae)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ae(n,0)}function me(e){return e.pieceNum_>=e.pieces_.length}function ye(e,t){const n=le(e),i=le(t);if(null===n)return t;if(n===i)return ye(ue(e),ue(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function _e(e,t){if(he(e)!==he(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function ve(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(he(e)>he(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class we{constructor(e,t){this.errorPrefix_=t,this.parts_=fe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,c.stringLength)(this.parts_[e]);be(this)}}function be(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ie(e))}function Ie(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Ee extends re{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ee}getInitialEvent(e){return(0,c.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */class Te extends se{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Te.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,c.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ee.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,c.stringify)(s)),(0,c.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new(0,c.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,c.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,c.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Te.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,c.contains)(e,"w")){const n=(0,c.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();N(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,c.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,c.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,c.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,c.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,c.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,c.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Te.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){(0,c.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new ie(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{N(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&N(e),a())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,c.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>O(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ae(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,c.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,c.isMobileCordova)()?e["framework.cordova"]=1:(0,c.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oe.getInstance().currentlyOnline();return(0,c.isEmpty)(this.interruptReasons_)&&e}}Te.nextPersistentConnectionId_=0,Te.nextConnectionId_=0;
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
class Ce{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ce(e,t)}}
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
 */class Se{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ce("[MIN_NAME]",e),i=new Ce("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Ce.MIN}}
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
 */let ke;class Ne extends Se{static get __EMPTY_NODE(){return ke}static set __EMPTY_NODE(e){ke=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw(0,c.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce("[MAX_NAME]",ke)}makePost(e,t){return(0,c.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ce(e,ke)}toString(){return".key"}}const Ae=new Ne;
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
 */class Re{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:De.RED,this.left=null!=i?i:Pe.EMPTY_NODE,this.right=null!=s?s:Pe.EMPTY_NODE}copy(e,t,n,i,s){return new De(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Pe.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0,De.BLACK=!1;class Pe{constructor(e,t=Pe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Pe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Re(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Re(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Re(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Re(this.root_,null,this.comparator_,!0,e)}}
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
function Oe(e,t){return R(e.name,t.name)}function xe(e,t){return R(e,t)}
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
 */let Le;Pe.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new De(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Me=function(e){return"number"==typeof e?"number:"+M(e):"string:"+e},Fe=function(e){if(e.isLeafNode()){const t=e.val();(0,c.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,c.contains)(t,".sv"),"Priority must be a string or number.")}else(0,c.assert)(e===Le||e.isEmpty(),"priority of unexpected type.");(0,c.assert)(e===Le||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ue,Ve,je;class qe{constructor(e,t=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,c.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Fe(this.priorityNode_)}static set __childrenNodeConstructor(e){Ue=e}static get __childrenNodeConstructor(){return Ue}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:".priority"===le(e)?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=le(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,c.assert)(".priority"!==n||1===he(e),".priority must be the last token in a path"),this.updateImmediateChild(n,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Me(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?M(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:((0,c.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(t),s=qe.VALUE_TYPE_ORDER.indexOf(n);return(0,c.assert)(i>=0,"Unknown leaf type: "+t),(0,c.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Be=new class extends Se{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?R(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce("[MAX_NAME]",new qe("[PRIORITY-POST]",je))}makePost(e,t){const n=Ve(e);return new Ce(t,new qe("[PRIORITY-POST]",n))}toString(){return".priority"}},He=Math.log(2);
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
 */class $e{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/He,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ze=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new De(a,o.node,De.BLACK,null,null);{const c=parseInt(r/2,10)+t,l=s(t,c),h=s(c+1,i);return o=e[c],a=n?n(o):o,new De(a,o.node,De.BLACK,l,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),h=e[r],u=n?n(h):h;c(new De(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,De.BLACK):(a(i,De.BLACK),a(i,De.RED))}return r}(new $e(e.length));return new Pe(i||t,r)};
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
 */let We;const Ke={};class Ge{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,c.assert)(Ke&&Be,"ChildrenNode.ts has not been loaded"),We=We||new Ge({".priority":Ke},{".priority":Be}),We}get(e){const t=(0,c.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Pe?t:null}hasIndex(e){return(0,c.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,c.assert)(e!==Ae,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Ce.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ze(n,e.getCompare()):Ke;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const h=Object.assign({},this.indexes_);return h[a]=r,new Ge(h,l)}addToIndexes(e,t){const n=(0,c.map)(this.indexes_,((n,i)=>{const s=(0,c.safeGet)(this.indexSet_,i);if((0,c.assert)(s,"Missing index implementation for "+i),n===Ke){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ce.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ze(n,s.getCompare())}return Ke}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Ce(e.name,i))),s.insert(e,e.node)}}));return new Ge(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,c.map)(this.indexes_,(n=>{if(n===Ke)return n;{const i=t.get(e.name);return i?n.remove(new Ce(e.name,i)):n}}));return new Ge(n,this.indexSet_)}}
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
 */let Qe;class Xe{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Fe(this.priorityNode_),this.children_.isEmpty()&&(0,c.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qe||(Qe=new Xe(new Pe(xe),null,Ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qe}updatePriority(e){return this.children_.isEmpty()?this:new Xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Qe:t}}getChild(e){const t=le(e);return null===t?this:this.getImmediateChild(t).getChild(ue(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,c.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ce(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Qe:this.priorityNode_;return new Xe(i,r,s)}}updateChild(e,t){const n=le(e);if(null===n)return t;{(0,c.assert)(".priority"!==le(e)||1===he(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ue(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Be,((r,o)=>{t[r]=o.val(e),n++,s&&Xe.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Me(this.getPriority().val())+":"),this.forEachChild(Be,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ce(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ce(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ce.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ye?-1:0}withIndex(e){if(e===Ae||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ae||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Be),n=t.getIterator(Be);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Ae?null:this.indexMap_.get(e.toString())}}Xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ye=new class extends Xe{constructor(){super(new Pe(xe),Xe.EMPTY_NODE,Ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Xe.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Ce,{MIN:{value:new Ce("[MIN_NAME]",Xe.EMPTY_NODE)},MAX:{value:new Ce("[MAX_NAME]",Ye)}}),Ne.__EMPTY_NODE=Xe.EMPTY_NODE,qe.__childrenNodeConstructor=Xe,Le=Ye,function(e){je=e}(Ye);function Je(e,t=null){if(null===e)return Xe.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,c.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new qe(e,Je(t))}if(e instanceof Array){let n=Xe.EMPTY_NODE;return L(e,((t,i)=>{if((0,c.contains)(e,t)&&"."!==t.substring(0,1)){const e=Je(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Je(t))}{const n=[];let i=!1;if(L(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Je(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Ce(e,s)))}})),0===n.length)return Xe.EMPTY_NODE;const s=ze(n,Oe,(e=>e.name),xe);if(i){const e=ze(n,Be.getCompare());return new Xe(s,Je(t),new Ge({".priority":e},{".priority":Be}))}return new Xe(s,Je(t),Ge.Default)}}!function(e){Ve=e}(Je);
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
class Ze extends Se{constructor(e){super(),this.indexPath_=e,(0,c.assert)(!me(e)&&".priority"!==le(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?R(e.name,t.name):s}makePost(e,t){const n=Je(e),i=Xe.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ce(t,i)}maxPost(){const e=Xe.EMPTY_NODE.updateChild(this.indexPath_,Ye);return new Ce("[MAX_NAME]",e)}toString(){return fe(this.indexPath_,0).join("/")}}
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
 */const et=new class extends Se{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,t){const n=Je(e);return new Ce(t,n)}toString(){return".value"}};
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
 */function tt(e){return{type:"value",snapshotNode:e}}function nt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function it(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function st(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class rt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,c.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,c.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,c.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,c.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,c.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new rt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ot(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Be?n="$priority":e.index_===et?n="$value":e.index_===Ae?n="$key":((0,c.assert)(e.index_ instanceof Ze,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,c.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,c.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,c.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,c.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,c.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function at(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Be&&(t.i=e.index_.toString()),t}
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
 */class ct extends se{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,c.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=ct.getListenId_(e,n),o={};this.listens_[r]=o;const a=ot(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),(0,c.safeGet)(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=ct.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ot(e._queryParams),n=e._path.toString(),i=new(0,c.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,c.querystring)(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,c.jsonEval)(o.responseText)}catch(e){N("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&N("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
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
 */class lt{constructor(){this.rootNode_=Xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function ht(){return{value:null,children:new Map}}function ut(e,t,n){if(me(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=le(t);e.children.has(i)||e.children.set(i,ht());ut(e.children.get(i),t=ue(t),n)}}function dt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{dt(i,new ae(t.toString()+"/"+e),n)}))}class ft{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class pt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ft(e);const n=1e4+2e4*Math.random();j(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,((e,i)=>{i>0&&(0,c.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),j(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var gt,mt;function yt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(mt=gt||(gt={}))[mt.OVERWRITE=0]="OVERWRITE",mt[mt.MERGE=1]="MERGE",mt[mt.ACK_USER_WRITE=2]="ACK_USER_WRITE",mt[mt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class _t{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=gt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(me(this.path)){if(null!=this.affectedTree.value)return(0,c.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new _t(ce(),t,this.revert)}}return(0,c.assert)(le(this.path)===e,"operationForChild called for unrelated child."),new _t(ue(this.path),this.affectedTree,this.revert)}}
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
class vt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=gt.OVERWRITE}operationForChild(e){return me(this.path)?new vt(this.source,ce(),this.snap.getImmediateChild(e)):new vt(this.source,ue(this.path),this.snap)}}
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
 */class wt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=gt.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new vt(this.source,ce(),t.value):new wt(this.source,ce(),t)}return(0,c.assert)(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wt(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class bt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const t=le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */function It(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,c.assertionError)("Should only compare child_ events.");const i=new Ce(t.childName,t.snapshotNode),s=new Ce(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Et(e,t){return{eventCache:e,serverCache:t}}function Tt(e,t,n,i){return Et(new bt(t,n,i),e.serverCache)}function Ct(e,t,n,i){return Et(e.eventCache,new bt(t,n,i))}function St(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function kt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Nt;class At{constructor(e,t=(()=>(Nt||(Nt=new Pe(D)),Nt))()){this.value=e,this.children=t}static fromObject(e){let t=new At(null);return L(e,((e,n)=>{t=t.set(new ae(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ce(),value:this.value};if(me(e))return null;{const n=le(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(ue(e),t);if(null!=s){return{path:ge(new ae(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(me(e))return this;{const t=le(e),n=this.children.get(t);return null!==n?n.subtree(ue(e)):new At(null)}}set(e,t){if(me(e))return new At(t,this.children);{const n=le(e),i=(this.children.get(n)||new At(null)).set(ue(e),t),s=this.children.insert(n,i);return new At(this.value,s)}}remove(e){if(me(e))return this.children.isEmpty()?new At(null):new At(null,this.children);{const t=le(e),n=this.children.get(t);if(n){const i=n.remove(ue(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new At(null):new At(this.value,s)}return this}}get(e){if(me(e))return this.value;{const t=le(e),n=this.children.get(t);return n?n.get(ue(e)):null}}setTree(e,t){if(me(e))return t;{const n=le(e),i=(this.children.get(n)||new At(null)).setTree(ue(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new At(this.value,s)}}fold(e){return this.fold_(ce(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(ge(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ce(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(me(e))return null;{const i=le(e),s=this.children.get(i);return s?s.findOnPath_(ue(e),ge(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ce(),t)}foreachOnPath_(e,t,n){if(me(e))return this;{this.value&&n(t,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),ge(t,i),n):new At(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(ge(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new At(null))}}function Dt(e,t,n){if(me(t))return new Rt(new At(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=ye(s,t);return r=r.updateChild(o,n),new Rt(e.writeTree_.set(s,r))}{const i=new At(n),s=e.writeTree_.setTree(t,i);return new Rt(s)}}}function Pt(e,t,n){let i=e;return L(n,((e,n)=>{i=Dt(i,ge(t,e),n)})),i}function Ot(e,t){if(me(t))return Rt.empty();{const n=e.writeTree_.setTree(t,new At(null));return new Rt(n)}}function xt(e,t){return null!=Lt(e,t)}function Lt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ye(n.path,t)):null}function Mt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Be,((e,n)=>{t.push(new Ce(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ce(e,n.value))})),t}function Ft(e,t){if(me(t))return e;{const n=Lt(e,t);return new Rt(null!=n?new At(n):e.writeTree_.subtree(t))}}function Ut(e){return e.writeTree_.isEmpty()}function Vt(e,t){return jt(ce(),e.writeTree_,t)}function jt(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,c.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=jt(ge(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(ge(e,".priority"),i)),n}}
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
 */function qt(e,t){return en(t,e)}function Bt(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,c.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ht(t,i.path)?s=!1:ve(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=zt(e.allWrites,$t,ce()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ot(e.visibleWrites,i.path);else{L(i.children,(t=>{e.visibleWrites=Ot(e.visibleWrites,ge(i.path,t))}))}return!0}return!1}function Ht(e,t){if(e.snap)return ve(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ve(ge(e.path,n),t))return!0;return!1}function $t(e){return e.visible}function zt(e,t,n){let i=Rt.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)ve(n,e)?(t=ye(n,e),i=Dt(i,t,r.snap)):ve(e,n)&&(t=ye(e,n),i=Dt(i,ce(),r.snap.getChild(t)));else{if(!r.children)throw(0,c.assertionError)("WriteRecord should have .snap or .children");if(ve(n,e))t=ye(n,e),i=Pt(i,t,r.children);else if(ve(e,n))if(t=ye(e,n),me(t))i=Pt(i,ce(),r.children);else{const e=(0,c.safeGet)(r.children,le(t));if(e){const n=e.getChild(ue(t));i=Dt(i,ce(),n)}}}}}return i}function Wt(e,t,n,i,s){if(i||s){const r=Ft(e.visibleWrites,t);if(!s&&Ut(r))return n;if(s||null!=n||xt(r,ce())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(ve(e.path,t)||ve(t,e.path))};return Vt(zt(e.allWrites,r,t),n||Xe.EMPTY_NODE)}return null}{const i=Lt(e.visibleWrites,t);if(null!=i)return i;{const i=Ft(e.visibleWrites,t);if(Ut(i))return n;if(null!=n||xt(i,ce())){return Vt(i,n||Xe.EMPTY_NODE)}return null}}}function Kt(e,t,n,i){return Wt(e.writeTree,e.treePath,t,n,i)}function Gt(e,t){return function(e,t,n){let i=Xe.EMPTY_NODE;const s=Lt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Be,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Ft(e.visibleWrites,t);return n.forEachChild(Be,((e,t)=>{const n=Vt(Ft(s,new ae(e)),t);i=i.updateImmediateChild(e,n)})),Mt(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Mt(Ft(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Qt(e,t,n,i){return function(e,t,n,i,s){(0,c.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ge(t,n);if(xt(e.visibleWrites,r))return null;{const t=Ft(e.visibleWrites,r);return Ut(t)?s.getChild(n):Vt(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Xt(e,t){return function(e,t){return Lt(e.visibleWrites,t)}(e.writeTree,ge(e.treePath,t))}function Yt(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const c=Ft(e.visibleWrites,t),l=Lt(c,ce());if(null!=l)a=l;else{if(null==n)return[];a=Vt(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<s;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function Jt(e,t,n){return function(e,t,n,i){const s=ge(t,n),r=Lt(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Vt(Ft(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Zt(e,t){return en(ge(e.treePath,t),e.writeTree)}function en(e,t){return{treePath:e,writeTree:t}}
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
 */class tn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,c.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,c.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,st(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,it(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,nt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,c.assertionError)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,st(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const nn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class sn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jt(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:kt(this.viewCache_),s=Yt(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
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
 */function rn(e,t,n,i,s){const r=new tn;let o,a;if(n.type===gt.OVERWRITE){const l=n;l.source.fromUser?o=cn(e,t,l.path,l.snap,i,s,r):((0,c.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!me(l.path),o=an(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===gt.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,c)=>{const l=ge(n,i);ln(t,le(l))&&(a=cn(e,a,l,c,s,r,o))})),i.foreach(((i,c)=>{const l=ge(n,i);ln(t,le(l))||(a=cn(e,a,l,c,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):((0,c.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=un(e,t,l.path,l.children,i,s,a,r))}else if(n.type===gt.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=Xt(i,n))return t;{const a=new sn(i,t,s),l=t.eventCache.getNode();let h;if(me(n)||".priority"===le(n)){let n;if(t.serverCache.isFullyInitialized())n=Kt(i,kt(t));else{const e=t.serverCache.getNode();(0,c.assert)(e instanceof Xe,"serverChildren would be complete if leaf node"),n=Gt(i,e)}h=e.filter.updateFullNode(l,n,r)}else{const s=le(n);let c=Jt(i,s,t.serverCache);null==c&&t.serverCache.isCompleteForChild(s)&&(c=l.getImmediateChild(s)),h=null!=c?e.filter.updateChild(l,s,c,ue(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Xe.EMPTY_NODE,ue(n),a,r):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Kt(i,kt(t)),o.isLeafNode()&&(h=e.filter.updateFullNode(h,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Xt(i,ce()),Tt(t,h,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=Xt(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(me(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return an(e,t,n,c.getNode().getChild(n),s,r,a,o);if(me(n)){let i=new At(null);return c.getNode().forEachChild(Ae,((e,t)=>{i=i.set(new ae(e),t)})),un(e,t,n,i,s,r,a,o)}return t}{let l=new At(null);return i.foreach(((e,t)=>{const i=ge(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),un(e,t,n,l,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==gt.LISTEN_COMPLETE)throw(0,c.assertionError)("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=Ct(t,r.getNode(),r.isFullyInitialized()||me(n),r.isFiltered());return on(e,o,n,i,nn,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=St(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tt(St(t)))}}(t,o,l),{viewCache:o,changes:l}}function on(e,t,n,i,s,r){const o=t.eventCache;if(null!=Xt(i,n))return t;{let a,l;if(me(n))if((0,c.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=kt(t),s=Gt(i,n instanceof Xe?n:Xe.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=Kt(i,kt(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const h=le(n);if(".priority"===h){(0,c.assert)(1===he(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=Qt(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const c=ue(n);let u;if(o.isCompleteForChild(h)){l=t.serverCache.getNode();const e=Qt(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else u=Jt(i,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,c,s,r):o.getNode()}}return Tt(t,a,o.isFullyInitialized()||me(n),e.filter.filtersNodes())}}function an(e,t,n,i,s,r,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(me(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=le(n);if(!c.isCompleteForPath(n)&&he(n)>1)return t;const s=ue(n),r=c.getNode().getImmediateChild(e).updateChild(s,i);l=".priority"===e?h.updatePriority(c.getNode(),r):h.updateChild(c.getNode(),e,r,s,nn,null)}const u=Ct(t,l,c.isFullyInitialized()||me(n),h.filtersNodes());return on(e,u,n,s,new sn(s,u,r),a)}function cn(e,t,n,i,s,r,o){const a=t.eventCache;let c,l;const h=new sn(s,t,r);if(me(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Tt(t,l,!0,e.filter.filtersNodes());else{const s=le(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Tt(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=ue(n),l=a.getNode().getImmediateChild(s);let u;if(me(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===de(r)&&e.getChild(pe(r)).isEmpty()?e:e.updateChild(r,i):Xe.EMPTY_NODE}if(l.equals(u))c=t;else{c=Tt(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ln(e,t){return e.eventCache.isCompleteForChild(t)}function hn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function un(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=me(n)?i:new At(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=hn(0,t.serverCache.getNode().getImmediateChild(n),i);l=an(e,l,new ae(n),c,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=hn(0,t.serverCache.getNode().getImmediateChild(n),i);l=an(e,l,new ae(n),c,s,r,o,a)}})),l}function dn(e,t){const n=kt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!me(t)&&!n.getImmediateChild(le(t)).isEmpty())?n.getChild(t):null}function fn(e,t,n,i){t.type===gt.MERGE&&null!==t.source.queryId&&((0,c.assert)(kt(e.viewCache_),"We should always have a full cache before handling merges"),(0,c.assert)(St(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=rn(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,(0,c.assert)(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),(0,c.assert)(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),(0,c.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,pn(e,r.changes,r.viewCache.eventCache.getNode(),null)}function pn(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),It(e,s,"child_removed",t,i,n),It(e,s,"child_added",t,i,n),It(e,s,"child_moved",r,i,n),It(e,s,"child_changed",t,i,n),It(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
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
 */let gn,mn;function yn(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,c.assert)(null!=r,"SyncTree gave us an op for an invalid query."),fn(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(fn(r,t,n,i));return s}}function _n(e,t){let n=null;for(const i of e.views.values())n=n||dn(i,t);return n}class vn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new At(null),this.pendingWriteTree_={visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wn(e,t,n,i,s){return function(e,t,n,i,s){(0,c.assert)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Dt(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Cn(e,new vt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function bn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Bt(e.pendingWriteTree_,t)){let t=new At(null);return null!=i.snap?t=t.set(ce(),!0):L(i.children,(e=>{t=t.set(new ae(e),!0)})),Cn(e,new _t(i.path,t,n))}return[]}function In(e,t,n){return Cn(e,new vt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function En(e,t,n,i){const s=Nn(e,i);if(null!=s){const i=An(s),r=i.path,o=i.queryId,a=ye(r,t);return Rn(e,r,new vt(yt(o),a,n))}return[]}function Tn(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=_n(n,ye(e,t));if(i)return i}));return Wt(i,t,s,n,!0)}function Cn(e,t){return Sn(t,e.syncPointTree_,null,qt(e.pendingWriteTree_,ce()))}function Sn(e,t,n,i){if(me(e.path))return kn(e,t,n,i);{const s=t.get(ce());null==n&&null!=s&&(n=_n(s,ce()));let r=[];const o=le(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Zt(i,o);r=r.concat(Sn(a,c,e,t))}return s&&(r=r.concat(yn(s,e,i,n))),r}}function kn(e,t,n,i){const s=t.get(ce());null==n&&null!=s&&(n=_n(s,ce()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Zt(i,t),c=e.operationForChild(t);c&&(r=r.concat(kn(c,s,o,a)))})),s&&(r=r.concat(yn(s,e,i,n))),r}function Nn(e,t){return e.tagToQueryMap.get(t)}function An(e){const t=e.indexOf("$");return(0,c.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ae(e.substr(0,t))}}function Rn(e,t,n){const i=e.syncPointTree_.get(t);(0,c.assert)(i,"Missing sync point for query tag that we're tracking");return yn(i,n,qt(e.pendingWriteTree_,t),null)}
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
class Dn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Dn(t)}node(){return this.node_}}class Pn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ge(this.path_,e);return new Pn(this.syncTree_,t)}node(){return Tn(this.syncTree_,this.path_)}}const On=function(e,t,n){return e&&"object"==typeof e?((0,c.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?xn(e[".sv"],t,n):"object"==typeof e[".sv"]?Ln(e[".sv"],t):void(0,c.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},xn=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,c.assert)(!1,"Unexpected server value: "+e)},Ln=function(e,t,n){e.hasOwnProperty("increment")||(0,c.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&(0,c.assert)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,c.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Mn=function(e,t,n,i){return Un(t,new Pn(n,e),i)},Fn=function(e,t,n){return Un(e,new Dn(t),n)};function Un(e,t,n){const i=e.getPriority().val(),s=On(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=On(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new qe(r,Je(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new qe(s))),i.forEachChild(Be,((e,i)=>{const s=Un(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
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
 */class Vn{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function jn(e,t){let n=t instanceof ae?t:new ae(t),i=e,s=le(n);for(;null!==s;){const e=(0,c.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new Vn(s,i,e),n=ue(n),s=le(n)}return i}function qn(e){return e.node.value}function Bn(e,t){e.node.value=t,Kn(e)}function Hn(e){return e.node.childCount>0}function $n(e,t){L(e.node.children,((n,i)=>{t(new Vn(n,e,i))}))}function zn(e,t,n,i){n&&!i&&t(e),$n(e,(e=>{zn(e,t,!0,i)})),n&&i&&t(e)}function Wn(e){return new ae(null===e.parent?e.name:Wn(e.parent)+"/"+e.name)}function Kn(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===qn(e)&&!Hn(e)}(n),s=(0,c.contains)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Kn(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Kn(e))}
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
 */(e.parent,e.name,e)}const Gn=/[\[\].#$\/\u0000-\u001F\u007F]/,Qn=/[\[\].#$\u0000-\u001F\u007F]/,Xn=function(e){return"string"==typeof e&&0!==e.length&&!Gn.test(e)},Yn=function(e){return"string"==typeof e&&0!==e.length&&!Qn.test(e)},Jn=function(e,t,n){const i=n instanceof ae?new we(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ie(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ie(i)+" with contents = "+t.toString());if(A(t))throw new Error(e+"contains "+t.toString()+" "+Ie(i));if("string"==typeof t&&t.length>10485760/3&&(0,c.stringLength)(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Ie(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(L(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Xn(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ie(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=(0,c.stringLength)(a),be(o),Jn(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=(0,c.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Ie(i)+" in addition to actual children.")}},Zn=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Xn(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Yn(e)}(n))throw new Error((0,c.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ei{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ti(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||_e(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function ni(e,t,n){ti(e,n),ii(e,(e=>ve(e,t)||ve(t,e)))}function ii(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(si(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function si(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&T("event: "+n.toString()),V(i)}}}
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
 */class ri{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ei,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ht(),this.transactionQueueTree_=new Vn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oi(e,t,n){if(e.stats_=X(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ct(e.repoInfo_,((t,n,i,s)=>{li(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>hi(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,c.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Te(e.repoInfo_,t,((t,n,i,s)=>{li(e,t,n,i,s)}),(t=>{hi(e,t)}),(t=>{!function(e,t){L(t,((t,n)=>{ui(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Q[n]||(Q[n]=t()),Q[n]}(e.repoInfo_,(()=>new pt(e.stats_,e.server_))),e.infoData_=new lt,e.infoSyncTree_=new vn({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=In(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ui(e,"connected",!1),e.serverSyncTree_=new vn({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);ni(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ai(e){const t=e.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ci(e){return(t=(t={timestamp:ai(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function li(e,t,n,i,s){e.dataUpdateCount++;const r=new ae(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=(0,c.map)(n,(e=>Je(e)));o=function(e,t,n,i){const s=Nn(e,i);if(s){const i=An(s),r=i.path,o=i.queryId,a=ye(r,t),c=At.fromObject(n);return Rn(e,r,new wt(yt(o),a,c))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Je(n);o=En(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,c.map)(n,(e=>Je(e)));o=function(e,t,n){const i=At.fromObject(n);return Cn(e,new wt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Je(n);o=In(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=yi(e,r)),ni(e.eventQueue_,a,o)}function hi(e,t){ui(e,"connected",t),!1===t&&function(e){pi(e,"onDisconnectEvents");const t=ci(e),n=ht();dt(e.onDisconnect_,ce(),((i,s)=>{const r=Mn(i,s,e.serverSyncTree_,t);ut(n,i,r)}));let i=[];dt(n,ce(),((t,n)=>{i=i.concat(In(e.serverSyncTree_,t,n));const s=Ii(e,t);yi(e,s)})),e.onDisconnect_=ht(),ni(e.eventQueue_,ce(),i)}(e)}function ui(e,t,n){const i=new ae("/.info/"+t),s=Je(n);e.infoData_.updateSnapshot(i,s);const r=In(e.infoSyncTree_,i,s);ni(e.eventQueue_,i,r)}function di(e){return e.nextWriteId_++}function fi(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function pi(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function gi(e,t,n){return Tn(e.serverSyncTree_,t,n)||Xe.EMPTY_NODE}function mi(e,t=e.transactionQueueTree_){if(t||bi(e,t),qn(t)){const n=vi(e,t);(0,c.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=gi(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];(0,c.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=ye(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{pi(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(bn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();bi(e,jn(e.transactionQueueTree_,t)),mi(e,e.transactionQueueTree_),ni(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)V(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{N("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}yi(e,t)}}),o)}(e,Wn(t),n)}else Hn(t)&&$n(t,(t=>{mi(e,t)}))}function yi(e,t){const n=_i(e,t),i=Wn(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],h=ye(n,l.path);let u,d=!1;if((0,c.assert)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,s=s.concat(bn(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",s=s.concat(bn(e.serverSyncTree_,l.currentWriteId,!0));else{const n=gi(e,l.path,r);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Jn("transaction failed: Data returned ",i,l.path);let t=Je(i);"object"==typeof i&&null!=i&&(0,c.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=ci(e),h=Fn(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=h,l.currentWriteId=di(e),r.splice(r.indexOf(o),1),s=s.concat(wn(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),s=s.concat(bn(e.serverSyncTree_,o,!0))}else d=!0,u="nodata",s=s.concat(bn(e.serverSyncTree_,l.currentWriteId,!0))}ni(e.eventQueue_,n,s),s=[],d&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;bi(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)V(i[e]);mi(e,e.transactionQueueTree_)}(e,vi(e,n),i),i}function _i(e,t){let n,i=e.transactionQueueTree_;for(n=le(t);null!==n&&void 0===qn(i);)i=jn(i,n),n=le(t=ue(t));return i}function vi(e,t){const n=[];return wi(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function wi(e,t,n){const i=qn(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);$n(t,(t=>{wi(e,t,n)}))}function bi(e,t){const n=qn(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Bn(t,n.length>0?n:void 0)}$n(t,(t=>{bi(e,t)}))}function Ii(e,t){const n=Wn(_i(e,t)),i=jn(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Ei(e,t)})),Ei(e,i),zn(i,(t=>{Ei(e,t)})),n}function Ei(e,t){const n=qn(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,c.assert)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,c.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(bn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Bn(t,void 0):n.length=r+1,ni(e.eventQueue_,Wn(t),s);for(let e=0;e<i.length;e++)V(i[e])}}
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
 */const Ti=function(e,t){const n=Ci(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new z(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ae(n.pathString)}},Ci=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):N(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};!function(){let e=0;const t=[]}();
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
class Si{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return me(this._path)?null:de(this._path)}get ref(){return new ki(this._repo,this._path)}get _queryIdentifier(){const e=at(this._queryParams),t=O(e);return"{}"===t?"default":t}get _queryObject(){return at(this._queryParams)}isEqual(e){if(!((e=(0,c.getModularInstance)(e))instanceof Si))return!1;const t=this._repo===e._repo,n=_e(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class ki extends Si{constructor(e,t){super(e,t,new rt,!1)}get parent(){const e=pe(this._path);return null===e?null:new ki(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}!function(e){(0,c.assert)(!gn,"__referenceConstructor has already been defined"),gn=e}(ki),function(e){(0,c.assert)(!mn,"__referenceConstructor has already been defined"),mn=e}(ki);
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
const Ni={};let Ai=!1;function Ri(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Ti(r,s),l=c.repoInfo;void 0!==h&&h.env&&(a=h.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,c=Ti(r,s),l=c.repoInfo):o=!c.repoInfo.secure;const u=s&&o?new H(H.OWNER):new B(e.name,e.options,t);Zn("Invalid Firebase Database URL",c),me(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let s=Ni[t.name];s||(s={},Ni[t.name]=s);let r=s[e.toURLString()];r&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new ri(e,Ai,n,i),s[e.toURLString()]=r,r}(l,e,u,new q(e.name,n));return new Di(d,e)}class Di{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ki(this._repo,ce())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ni[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),fi(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}Te.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Te.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
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
var Pi,Oi;
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
 */Oi=o.SDK_VERSION,u=Oi,(0,o._registerComponent)(new(0,a.Component)("database",((e,{instanceIdentifier:t})=>Ri(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,o.registerVersion)("@firebase/database","0.14.4",Pi),(0,o.registerVersion)("@firebase/database","0.14.4","esm2017"),s("gMVVg"),s("7xvHX"),s("5Z2ef"),s("eryG9");c=s("gMVVg"),o=s("7xvHX"),l=s("5Z2ef");function xi(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;a=s("eryG9");
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
 */function Li(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mi=Li,Fi=new(0,c.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ui=new(0,l.Logger)("@firebase/auth");function Vi(e,...t){Ui.logLevel<=l.LogLevel.ERROR&&Ui.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}
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
 */function ji(e,...t){throw Hi(e,...t)}function qi(e,...t){return Hi(e,...t)}function Bi(e,t,n){const i=Object.assign(Object.assign({},Mi()),{[t]:n});return new(0,c.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function Hi(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Fi.create(e,...t)}function $i(e,t,...n){if(!e)throw Hi(t,...n)}function zi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vi(t),new Error(t)}function Wi(e,t){e||zi(t)}
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
 */const Ki=new Map;function Gi(e){Wi(e instanceof Function,"Expected a class definition");let t=Ki.get(e);return t?(Wi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ki.set(e,t),t)}
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
function Qi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Xi(){return"http:"===Yi()||"https:"===Yi()}function Yi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class Ji{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wi(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,c.isMobileCordova)()||(0,c.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Xi()||(0,c.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function Zi(e,t){Wi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class es{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ts={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ns=new Ji(3e4,6e4);
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
 */function is(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ss(e,t,n,i,s={}){return rs(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=(0,c.querystring)(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),es.fetch()(as(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function rs(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ts),t);try{const t=new cs(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw ls(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ls(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw ls(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw ls(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Bi(e,a,o);ji(e,a)}}catch(t){if(t instanceof c.FirebaseError)throw t;ji(e,"network-request-failed",{message:String(t)})}}async function os(e,t,n,i,s={}){const r=await ss(e,t,n,i,s);return"mfaPendingCredential"in r&&ji(e,"multi-factor-auth-required",{_serverResponse:r}),r}function as(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Zi(e.config,s):`${e.config.apiScheme}://${s}`}class cs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(qi(this.auth,"network-request-failed"))),ns.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ls(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=qi(e,t,i);return s.customData._tokenResponse=n,s}
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
function hs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function us(e){return 1e3*Number(e)}function ds(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,c.base64Decode)(n);return e?JSON.parse(e):(Vi("Failed to decode base64 JWT payload"),null)}catch(e){return Vi("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function fs(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof c.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ps{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class gs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ms(e){var t;const n=e.auth,i=await e.getIdToken(),s=await fs(e,async function(e,t){return ss(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));$i(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=xi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new gs(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$i(e.idToken,"internal-error"),$i(void 0!==e.idToken,"internal-error"),$i(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ds(e);return $i(t,"internal-error"),$i(void 0!==t.exp,"internal-error"),$i(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $i(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
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
async function(e,t){const n=await rs(e,{},(async()=>{const n=(0,c.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=as(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",es.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new ys;return n&&($i("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&($i("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&($i("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return zi("not implemented")}}
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
 */function _s(e,t){$i("string"==typeof e||void 0===e,"internal-error",{appName:t})}class vs{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ps(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gs(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fs(this,this.stsTokenManager.getToken(this.auth,e));return $i(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,c.getModularInstance)(e),i=await n.getIdToken(t),s=ds(i);$i(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:hs(us(s.auth_time)),issuedAtTime:hs(us(s.iat)),expirationTime:hs(us(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,c.getModularInstance)(e);await ms(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&($i(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$i(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ms(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fs(this,async function(e,t){return ss(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:_,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:I}=t;$i(_&&I,e,"internal-error");const E=ys.fromJSON(this.name,I);$i("string"==typeof _,e,"internal-error"),_s(h,e.name),_s(u,e.name),$i("boolean"==typeof v,e,"internal-error"),$i("boolean"==typeof w,e,"internal-error"),_s(d,e.name),_s(f,e.name),_s(p,e.name),_s(g,e.name),_s(m,e.name),_s(y,e.name);const T=new vs({uid:_,auth:e,email:u,emailVerified:v,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ys;i.updateFromServerResponse(t);const s=new vs({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ms(s),s}}
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
 */class ws{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ws.type="NONE";const bs=ws;
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
 */function Is(e,t,n){return`firebase:${e}:${t}:${n}`}class Es{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,s),this.fullPersistenceKey=Is("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Es(Gi(bs),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||Gi(bs);const r=Is(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=vs._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Es(s,e,n)):new Es(s,e,n)}}
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
 */function Ts(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ns(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cs(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rs(t))return"Blackberry";if(Ds(t))return"Webos";if(Ss(t))return"Safari";if((t.includes("chrome/")||ks(t))&&!t.includes("edge/"))return"Chrome";if(As(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Cs(e=(0,c.getUA)()){return/firefox\//i.test(e)}function Ss(e=(0,c.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ks(e=(0,c.getUA)()){return/crios\//i.test(e)}function Ns(e=(0,c.getUA)()){return/iemobile/i.test(e)}function As(e=(0,c.getUA)()){return/android/i.test(e)}function Rs(e=(0,c.getUA)()){return/blackberry/i.test(e)}function Ds(e=(0,c.getUA)()){return/webos/i.test(e)}function Ps(e=(0,c.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Os(e=(0,c.getUA)()){return Ps(e)||As(e)||Ds(e)||Rs(e)||/windows phone/i.test(e)||Ns(e)}
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
function xs(e,t=[]){let n;switch(e){case"Browser":n=Ts((0,c.getUA)());break;case"Worker":n=`${Ts((0,c.getUA)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ls{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Ms{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Us(this),this.idTokenSubscription=new Us(this),this.beforeStateQueue=new Ls(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gi(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $i(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ms(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,c.getModularInstance)(e):null;return t&&$i(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$i(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Gi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,c.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gi(e)||this._popupRedirectResolver;$i(t,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Gi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return $i(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $i(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Fs(e){return(0,c.getModularInstance)(e)}class Us{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,c.createSubscribe)((e=>this.observer=e))}get next(){return $i(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Vs(e,t,n){const i=Fs(e);$i(i._canInitEmulator,i,"emulator-config-failed"),$i(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=js(t),{host:o,port:a}=function(e){const t=js(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:qs(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:qs(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function js(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qs(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Bs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zi("not implemented")}_getIdTokenResponse(e){return zi("not implemented")}_linkToIdToken(e,t){return zi("not implemented")}_getReauthenticationResolver(e){return zi("not implemented")}}
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
 */async function Hs(e,t){return ss(e,"POST","/v1/accounts:update",t)}
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
class $s extends Bs{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new $s(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new $s(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return os(e,"POST","/v1/accounts:signInWithPassword",is(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return os(e,"POST","/v1/accounts:signInWithEmailLink",is(e,t))}(e,{email:this._email,oobCode:this._password});default:ji(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Hs(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return os(e,"POST","/v1/accounts:signInWithEmailLink",is(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ji(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function zs(e,t){return os(e,"POST","/v1/accounts:signInWithIdp",is(e,t))}
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
 */class Ws extends Bs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ji("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=xi(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Ws(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return zs(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zs(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,c.querystring)(t)}return e}}
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
 */const Ks={USER_NOT_FOUND:"user-not-found"};
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
class Gs extends Bs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Gs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Gs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return os(e,"POST","/v1/accounts:signInWithPhoneNumber",is(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await os(e,"POST","/v1/accounts:signInWithPhoneNumber",is(e,t));if(n.temporaryProof)throw ls(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return os(e,"POST","/v1/accounts:signInWithPhoneNumber",is(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ks)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Gs({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
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
 */class Qs{constructor(e){var t,n,i,s,r,o;const a=(0,c.querystringDecode)((0,c.extractQuerystring)(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);$i(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).link,n=t?(0,c.querystringDecode)((0,c.extractQuerystring)(t)).deep_link_id:null,i=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).deep_link_id;return(i?(0,c.querystringDecode)((0,c.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Qs(t)}catch(e){return null}}}
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
class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,t){return $s._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qs.parseLink(t);return $i(n,"argument-error"),$s._fromEmailAndCode(e,n.code,n.tenantId)}}Xs.PROVIDER_ID="password",Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ys{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Js extends Ys{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Zs extends Js{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:Zs.PROVIDER_ID,signInMethod:Zs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zs.credentialFromTaggedObject(e)}static credentialFromError(e){return Zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Zs.credential(e.oauthAccessToken)}catch(e){return null}}}Zs.FACEBOOK_SIGN_IN_METHOD="facebook.com",Zs.PROVIDER_ID="facebook.com";
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
class er extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ws._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return er.credential(t,n)}catch(e){return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com",er.PROVIDER_ID="google.com";
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
class tr extends Js{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch(e){return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com",tr.PROVIDER_ID="github.com";
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
class nr extends Js{constructor(){super("twitter.com")}static credential(e,t){return Ws._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nr.credential(t,n)}catch(e){return null}}}
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
async function ir(e,t){return os(e,"POST","/v1/accounts:signUp",is(e,t))}
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
 */nr.TWITTER_SIGN_IN_METHOD="twitter.com",nr.PROVIDER_ID="twitter.com";class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await vs._fromIdTokenResponse(e,n,i),r=rr(n);return new sr({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=rr(n);return new sr({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function rr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class or extends c.FirebaseError{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,or.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new or(e,t,n,i)}}function ar(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw or._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function cr(e,t,n=!1){const i=await fs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sr._forOperation(e,"link",i)}
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
async function lr(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await fs(e,ar(i,s,t,e),n);$i(r.idToken,i,"internal-error");const o=ds(r.idToken);$i(o,i,"internal-error");const{sub:a}=o;return $i(e.uid===a,i,"user-mismatch"),sr._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ji(i,"user-mismatch"),e}}
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
 */async function hr(e,t,n=!1){const i="signIn",s=await ar(e,i,t),r=await sr._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function ur(e,t){return hr(Fs(e),t)}async function dr(e,t,n){const i=Fs(e),s=await ir(i,{returnSecureToken:!0,email:t,password:n}),r=await sr._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function fr(e,t,n){return ur((0,c.getModularInstance)(e),Xs.credential(t,n))}
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
 */new WeakMap;
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
class pr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class gr extends pr{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,c.getUA)();return Ss(e)||Ps(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Os(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,c.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gr.type="LOCAL";const mr=gr;
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
 */class yr extends pr{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yr.type="SESSION";const _r=yr;
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
class vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new vr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function wr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */vr.receivers=[];class br{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=wr("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
 */function Ir(){return window}
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
 */
function Er(){return void 0!==Ir().WorkerGlobalScope&&"function"==typeof Ir().importScripts}class Tr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Cr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Sr(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Tr(e).toPromise()}(),t(await Sr()))}))}))}async function kr(e,t,n){const i=Cr(e,!0).put({fbase_key:t,value:n});return new Tr(i).toPromise()}function Nr(e,t){const n=Cr(e,!0).delete(t);return new Tr(n).toPromise()}class Ar{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Sr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Er()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vr._getInstance(Er()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new br(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sr();return await kr(e,"__sak","1"),await Nr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>kr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Cr(e,!1).get(t),i=await new Tr(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Nr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Cr(e,!1).getAll();return new Tr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ar.type="LOCAL";const Rr=Ar;
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
 */function Dr(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=qi("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function Pr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Pr("rcb"),new Ji(3e4,6e4);async function Or(e,t,n){var i;const s=await n.verify();try{let r;if($i("string"==typeof s,e,"argument-error"),$i("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){$i("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return ss(e,"POST","/v2/accounts/mfaEnrollment:start",is(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{$i("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;$i(n,e,"missing-multi-factor-info");const o=await function(e,t){return ss(e,"POST","/v2/accounts/mfaSignIn:start",is(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ss(e,"POST","/v1/accounts:sendVerificationCode",is(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
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
class xr{constructor(e){this.providerId=xr.PROVIDER_ID,this.auth=Fs(e)}verifyPhoneNumber(e,t){return Or(this.auth,e,(0,c.getModularInstance)(t))}static credential(e,t){return Gs._fromVerification(e,t)}static credentialFromResult(e){const t=e;return xr.credentialFromTaggedObject(t)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Gs._fromTokenResponse(t,n):null}}
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
function Lr(e,t){return t?Gi(t):($i(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */xr.PROVIDER_ID="phone",xr.PHONE_SIGN_IN_METHOD="phone";class Mr extends Bs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){return hr(e.auth,new Mr(e),e.bypassAuthState)}function Ur(e){const{auth:t,user:n}=e;return $i(n,t,"internal-error"),lr(n,new Mr(e),e.bypassAuthState)}async function Vr(e){const{auth:t,user:n}=e;return $i(n,t,"internal-error"),cr(n,new Mr(e),e.bypassAuthState)}
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
 */class jr{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return Vr;case"reauthViaPopup":case"reauthViaRedirect":return Ur;default:ji(this.auth,"internal-error")}}resolve(e){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const qr=new Ji(2e3,1e4);class Br extends jr{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $i(e,this.auth,"internal-error"),e}async onExecution(){Wi(1===this.filter.length,"Popup operations only handle one event");const e=wr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(qi(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(qi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(qi(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qr.get())};e()}}Br.currentPopupAction=null;
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
const Hr=new Map;class $r extends jr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Kr(t),i=Wr(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function zr(e,t){Hr.set(e._key(),t)}function Wr(e){return Gi(e._redirectPersistence)}function Kr(e){return Is("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Gr(e,t,n=!1){const i=Fs(e),s=Lr(i,t),r=new $r(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Qr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yr(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yr(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(qi(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xr(e))}saveEventToCache(e){this.cachedEventUids.add(Xr(e)),this.lastProcessedEventTime=Date.now()}}function Xr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Jr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zr=/^https?/;async function eo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ss(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(to(e))return}catch(e){}ji(e,"unauthorized-domain")}function to(e){const t=Qi(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Zr.test(n))return!1;if(Jr.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */const no=new Ji(3e4,6e4);function io(){const e=Ir().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let so=null;function ro(e){return so=so||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){io(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{io(),n(qi(e,"network-request-failed"))},timeout:no.get()})}if(null===(s=null===(i=Ir().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Ir().gapi)||void 0===r?void 0:r.load)){const t=Pr("iframefcb");return Ir()[t]=()=>{gapi.load?o():n(qi(e,"network-request-failed"))},Dr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw so=null,e}))}(e),so}
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
 */const oo=new Ji(5e3,15e3),ao={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},co=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lo(e){const t=e.config;$i(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zi(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},s=co.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${(0,c.querystring)(i).slice(1)}`}
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
 */
const ho={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class uo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function fo(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ho),{width:i.toString(),height:s.toString(),top:r,left:o}),h=(0,c.getUA)().toLowerCase();n&&(a=ks(h)?"_blank":n),Cs(h)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,c.getUA)()){var t;return Ps(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new uo(null);const d=window.open(t||"",a,u);$i(d,e,"popup-blocked");try{d.focus()}catch(e){}return new uo(d)}function po(e,t,n,i,s,r){$i(e.config.authDomain,e,"auth-domain-config-required"),$i(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.SDK_VERSION,eventId:s};if(t instanceof Ys){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",(0,c.isEmpty)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))a[e]=t}if(t instanceof Js){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const e of Object.keys(l))void 0===l[e]&&delete l[e];return`${function({config:e}){return e.emulator?Zi(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${(0,c.querystring)(l).slice(1)}`}const go=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_r,this._completeRedirectFn=Gr,this._overrideRedirectResult=zr}async _openPopup(e,t,n,i){var s;Wi(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return fo(e,po(e,t,n,Qi(),i),wr())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=po(e,t,n,Qi(),i),Ir().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Wi(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ro(e),n=Ir().gapi;return $i(n,e,"internal-error"),t.open({where:document.body,url:lo(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ao,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=qi(e,"network-request-failed"),r=Ir().setTimeout((()=>{i(s)}),oo.get());function o(){Ir().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Qr(e);return t.register("authEvent",(t=>{$i(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),ji(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Os()||Ss()||Ps()}};
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
class mo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$i(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const yo=(0,c.getExperimentalSetting)("authIdTokenMaxAge")||300;let _o=null;var vo;vo="Browser",(0,o._registerComponent)(new(0,a.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{$i(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),$i(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:vo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xs(vo)},o=new Ms(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Gi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,o._registerComponent)(new(0,a.Component)("auth-internal",(e=>{const t=Fs(e.getProvider("auth").getImmediate());return new mo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)("@firebase/auth","0.22.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vo)),(0,o.registerVersion)("@firebase/auth","0.22.0","esm2017");const wo=function(e=(0,o.getApp)()){const t=(0,o._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,o._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,c.deepEqual)(i,null!=t?t:{}))return e;ji(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:go,persistence:[Rr,mr,_r]}),i=(0,c.getExperimentalSetting)("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>yo)return;const i=null==t?void 0:t.token;_o!==i&&(_o=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,c.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){(0,c.getModularInstance)(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=(0,c.getDefaultEmulatorHost)("auth");return r&&Vs(n,`http://${r}`),n}(r.FirebaseApp);var bo,Io,Eo,To;bo=wo,Io=e=>{e?(e.uid,document.querySelector(".button--signin")):console.log("nope uid")},(0,c.getModularInstance)(bo).onAuthStateChanged(Io,Eo,To);document.querySelector(".registration-submit").addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector("#email").value.toString(),n=document.querySelector("#password").value.toString();try{dr(wo,t,n).then((e=>{const t=e.user;console.log("Signed up successfully:",t),window.location.href="#"}))}catch(e){e.code;console.log("nopenopenope")}}));document.querySelector("#SignIn-modal").addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector("#emailSingIn").value.toString(),n=document.querySelector("#passwordSingIn").value.toString();fr(wo,t,n).then((t=>{t.user;console.log("yeap you are here"),e.target.reset()})).catch((e=>{e.code,e.message}))}));
//# sourceMappingURL=index.01ecb034.js.map
