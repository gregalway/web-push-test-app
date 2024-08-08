"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{10218:function(e,t,n){n.d(t,{qX:function(){return H},Xd:function(){return x},Mq:function(){return z},ZF:function(){return q},KN:function(){return W}});var r=n(46387);const a=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=c[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};var d=n(83395);const l=(e,t)=>t.some((t=>e instanceof t));let f,p;const h=new WeakMap,g=new WeakMap,m=new WeakMap,b=new WeakMap,v=new WeakMap;let w={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return g.get(e);if("objectStoreNames"===t)return e.objectStoreNames||m.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function I(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(p||(p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(E(this),t),D(h.get(this))}:function(...t){return D(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return m.set(r,t.sort?t.sort():[t]),D(r)}}function y(e){return"function"===typeof e?I(e):(e instanceof IDBTransaction&&function(e){if(g.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));g.set(e,t)}(e),l(e,f||(f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,w):e)}function D(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(D(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),v.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=y(e);return t!==e&&(b.set(e,t),v.set(t,e)),t}const E=e=>v.get(e);const C=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],B=new Map;function L(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(B.get(t))return B.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!C.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return B.set(t,i),i}w=(e=>({...e,get:(t,n,r)=>L(t,n)||e.get(t,n,r),has:(t,n)=>!!L(t,n)||e.has(t,n)}))(w);class k{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const _="@firebase/app",O="0.10.5",P=new class{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}("@firebase/app"),j="[DEFAULT]",N={[_]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},T=new Map,A=new Map,M=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function x(e){const t=e.name;if(M.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;M.set(t,e);for(const n of T.values())$(n,e);for(const n of A.values())$(n,e);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},V=new d.LL("app","Firebase",R);class F{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}function q(e,t={}){let n=e;if("object"!==typeof t){t={name:t}}const a=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!==typeof i||!i)throw V.create("bad-app-name",{appName:String(i)});if(n||(n=(0,d.aH)()),!n)throw V.create("no-options");const s=T.get(i);if(s){if((0,d.vZ)(n,s.options)&&(0,d.vZ)(a,s.config))return s;throw V.create("duplicate-app",{appName:i})}const o=new r.H0(i);for(const r of M.values())o.addComponent(r);const c=new F(n,a,o);return T.set(i,c),c}function z(e=j){const t=T.get(e);if(!t&&e===j&&(0,d.aH)())return q();if(!t)throw V.create("no-app",{appName:e});return t}function W(e,t,n){var a;let i=null!==(a=N[e])&&void 0!==a?a:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}x(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}const K="firebase-heartbeat-database",U=1,X="firebase-heartbeat-store";let G=null;function Z(){return G||(G=function(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=D(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(D(s.result),e.oldVersion,e.newVersion,D(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}(K,U,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(X)}catch(n){console.warn(n)}}}).catch((e=>{throw V.create("idb-open",{originalErrorMessage:e.message})}))),G}async function J(e,t){try{const n=(await Z()).transaction(X,"readwrite"),r=n.objectStore(X);await r.put(t,Y(e)),await n.done}catch(n){if(n instanceof d.ZR)P.warn(n.message);else{const e=V.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(e.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}class Q{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new te(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ee();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ee(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),ne(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),a=(0,d.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ee(){return(new Date).toISOString().substring(0,10)}class te{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,d.hl)()&&(0,d.eu)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Z()).transaction(X),n=await t.objectStore(X).get(Y(e));return await t.done,n}catch(t){if(t instanceof d.ZR)P.warn(t.message);else{const e=V.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});P.warn(e.message)}}}(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ne(e){return(0,d.L)(JSON.stringify({version:2,heartbeats:e})).length}var re;re="",x(new r.wA("platform-logger",(e=>new k(e)),"PRIVATE")),x(new r.wA("heartbeat",(e=>new Q(e)),"PRIVATE")),W(_,O,re),W(_,O,"esm2017"),W("fire-js","")},46387:function(e,t,n){n.d(t,{H0:function(){return o},wA:function(){return a}});var r=n(83395);class a{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const i="[DEFAULT]";class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(a)&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===i?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(a){}var r;return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},65612:function(e,t,n){var r=n(10218),a=n(46387),i=n(83395);const s=(e,t)=>t.some((t=>e instanceof t));let o,c;const u=new WeakMap,d=new WeakMap,l=new WeakMap,f=new WeakMap,p=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),b(u.get(this))}:function(...t){return b(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return l.set(r,t.sort?t.sort():[t]),b(r)}}function m(e){return"function"===typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,t)}(e),s(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)}function b(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(b(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&u.set(t,e)})).catch((()=>{})),p.set(t,e),t}(e);if(f.has(e))return f.get(e);const t=m(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}const v=e=>p.get(e);const w=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],y=new Map;function D(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(y.get(t))return y.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!w.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return y.set(t,i),i}h=(e=>({...e,get:(t,n,r)=>D(t,n)||e.get(t,n,r),has:(t,n)=>!!D(t,n)||e.has(t,n)}))(h);const E="@firebase/installations",C="0.6.7",S=1e4,B=`w:${C}`,L="FIS_v2",k="https://firebaseinstallations.googleapis.com/v1",_=36e5,O={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},P=new i.LL("installations","Installations",O);function j(e){return e instanceof i.ZR&&e.code.includes("request-failed")}function N({projectId:e}){return`${k}/projects/${e}/installations`}function T(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function A(e,t){const n=(await t.json()).error;return P.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function M({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $(e,{refreshToken:t}){const n=M(e);return n.append("Authorization",function(e){return`${L} ${e}`}(t)),n}async function x(e){const t=await e();return t.status>=500&&t.status<600?e():t}function H(e){return new Promise((t=>{setTimeout(t,e)}))}const R=/^[cdef][\w-]{21}$/,V="";function F(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}(e);return R.test(t)?t:V}catch(e){return V}}function q(e){return`${e.appName}!${e.appId}`}const z=new Map;function W(e,t){const n=q(e);K(n,t),function(e,t){const n=X();n&&n.postMessage({key:e,fid:t});G()}(n,t)}function K(e,t){const n=z.get(e);if(n)for(const r of n)r(t)}let U=null;function X(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=e=>{K(e.data.key,e.data.fid)}),U}function G(){0===z.size&&U&&(U.close(),U=null)}const Z="firebase-installations-database",J=1,Y="firebase-installations-store";let Q=null;function ee(){return Q||(Q=function(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=b(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(b(s.result),e.oldVersion,e.newVersion,b(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}(Z,J,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Y)}})),Q}async function te(e,t){const n=q(e),r=(await ee()).transaction(Y,"readwrite"),a=r.objectStore(Y),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||W(e,t.fid),t}async function ne(e){const t=q(e),n=(await ee()).transaction(Y,"readwrite");await n.objectStore(Y).delete(t),await n.done}async function re(e,t){const n=q(e),r=(await ee()).transaction(Y,"readwrite"),a=r.objectStore(Y),i=await a.get(n),s=t(i);return void 0===s?await a.delete(n):await a.put(s,n),await r.done,!s||i&&i.fid===s.fid||W(e,s.fid),s}async function ae(e){let t;const n=await re(e.appConfig,(n=>{const r=function(e){const t=e||{fid:F(),registrationStatus:0};return oe(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(P.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=N(e),a=M(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={fid:n,authVersion:L,appId:e.appId,sdkVersion:B},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await x((()=>fetch(r,o)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:T(e.authToken)}}throw await A("Create Installation",c)}(e,t);return te(e.appConfig,n)}catch(n){throw j(n)&&409===n.customData.serverCode?await ne(e.appConfig):await te(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ie(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry}));return n.fid===V?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ie(e){let t=await se(e.appConfig);for(;1===t.registrationStatus;)await H(100),t=await se(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ae(e);return n||t}return t}function se(e){return re(e,(e=>{if(!e)throw P.create("installation-not-found");return oe(e)}))}function oe(e){return 1===(t=e).registrationStatus&&t.registrationTime+S<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function ce({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${N(e)}/${t}/authTokens:generate`}(e,n),a=$(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={installation:{sdkVersion:B,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await x((()=>fetch(r,o)));if(c.ok){return T(await c.json())}throw await A("Generate Auth Token",c)}async function ue(e,t=!1){let n;const r=await re(e.appConfig,(r=>{if(!le(r))throw P.create("not-registered");const a=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_}(e)}(a))return r;if(1===a.requestStatus)return n=async function(e,t){let n=await de(e.appConfig);for(;1===n.authToken.requestStatus;)await H(100),n=await de(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ue(e,t):r}(e,t),r;{if(!navigator.onLine)throw P.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await ce(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await te(e.appConfig,r),n}catch(n){if(!j(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await te(e.appConfig,n)}else await ne(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function de(e){return re(e,(e=>{if(!le(e))throw P.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+S<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n}))}function le(e){return void 0!==e&&2===e.registrationStatus}async function fe(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await ae(e);t&&await t}(n);return(await ue(n,t)).token}function pe(e){return P.create("missing-app-config-values",{valueName:e})}const he="installations",ge=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw pe("App Configuration");if(!e.name)throw pe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,r.qX)(t,"heartbeat"),_delete:()=>Promise.resolve()}},me=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,he).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await ae(t);return r?r.catch(console.error):ue(t).catch(console.error),n.fid}(n),getToken:e=>fe(n,e)}};(0,r.Xd)(new a.wA(he,ge,"PUBLIC")),(0,r.Xd)(new a.wA("installations-internal",me,"PRIVATE")),(0,r.KN)(E,C),(0,r.KN)(E,C,"esm2017")},84125:function(e,t,n){n.d(t,{Lj:function(){return b},X3:function(){return m}});const r=(e,t)=>t.some((t=>e instanceof t));let a,i;const s=new WeakMap,o=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),h(s.get(this))}:function(...t){return h(e.apply(g(this),t))}:function(t,...n){const r=e.call(g(this),t,...n);return c.set(r,t.sort?t.sort():[t]),h(r)}}function p(e){return"function"===typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));o.set(e,t)}(e),r(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,l):e)}function h(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(h(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),d.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=p(e);return t!==e&&(u.set(e,t),d.set(t,e)),t}const g=e=>d.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=h(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(h(s.result),e.oldVersion,e.newVersion,h(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}function b(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),h(n).then((()=>{}))}const v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],I=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(I.get(t))return I.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!v.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return I.set(t,i),i}l=(e=>({...e,get:(t,n,r)=>y(t,n)||e.get(t,n,r),has:(t,n)=>!!y(t,n)||e.has(t,n)}))(l)},18762:function(e,t,n){n.d(t,{X3:function(){return g}});const r=(e,t)=>t.some((t=>e instanceof t));let a,i;const s=new WeakMap,o=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){u=e(u)}function l(e){return(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(h(this),t),p(this.request)}:function(...t){return p(e.apply(h(this),t))}}function f(e){return"function"===typeof e?l(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));s.set(e,t)}(e),r(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(p(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return c.set(t,e),t}(e);if(o.has(e))return o.get(e);const t=f(e);return t!==e&&(o.set(e,t),c.set(t,e)),t}const h=e=>c.get(e);function g(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=p(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(p(s.result),e.oldVersion,e.newVersion,p(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const m=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],v=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(v.get(t))return v.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!m.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return v.set(t,i),i}d((e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)})));const I=["continue","continuePrimaryKey","advance"],y={},D=new WeakMap,E=new WeakMap,C={get(e,t){if(!I.includes(t))return e[t];let n=y[t];return n||(n=y[t]=function(...e){D.set(this,E.get(this)[t](...e))}),n}};async function*S(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const n=new Proxy(t,C);for(E.set(n,t),c.set(n,h(t));t;)yield n,t=await(D.get(n)||t.continue()),D.delete(n)}function B(e,t){return t===Symbol.asyncIterator&&r(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&r(e,[IDBIndex,IDBObjectStore])}d((e=>({...e,get:(t,n,r)=>B(t,n)?S:e.get(t,n,r),has:(t,n)=>B(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=205-6c3103fd29f92c0f.js.map