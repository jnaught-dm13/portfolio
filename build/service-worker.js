"use strict";var precacheConfig=[["/index.html","daf860f081c9569649a65f14dc345488"],["/static/css/main.b8958e2b.css","2a7d9955dd420c6145e0f6bd5af69ac9"],["/static/js/main.cf53c45d.js","1b2f475cbc62488cd2cd14106dd3c4bf"],["/static/media/Montserrat-Regular.91696e09.otf","91696e0984cfab74ff344325e5015da5"],["/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/static/media/agile_git_mamp.49cba46a.png","49cba46a71907f045184d2db76839179"],["/static/media/creative.9f22e533.png","9f22e533a3a020fe569b9aa9f8529028"],["/static/media/css_logo.670c0bec.png","670c0bec96ca809688b07d72b8335b15"],["/static/media/database.3b5c5ad3.png","3b5c5ad3ac02b6376a20cce965b3b9d8"],["/static/media/github.56aa79c1.png","56aa79c13096e30dc2f09a7d0118c2b2"],["/static/media/html_logo.fc4b15b5.png","fc4b15b53ceeed7a3b9361840d02d316"],["/static/media/javascript_logo.c4cea1c3.png","c4cea1c3f81ffc3ea8df7bda146b5462"],["/static/media/linkedin.f6eaf68b.jpg","f6eaf68b925e626e37d1815b383e8a1d"],["/static/media/node_php.9fec8901.png","9fec8901286eb4503ce7556532e9f567"],["/static/media/react-logo.9978c2e2.png","9978c2e272cc80f71ac7fb4b8010c7cc"],["/static/media/redux.26d55a43.png","26d55a4397630dcdafa50e16e93f9e0a"],["/static/media/responsive-design.e759a1e3.png","e759a1e372e83660b25b2a4ad2b89d05"],["/static/media/streamguide.03209419.png","03209419b389766ae4a868c9ba9118d4"],["/static/media/vs_code_npm_postman.0d4b0d27.png","0d4b0d27d17323bffb718304406c92d8"],["/static/media/wishtrip.9810aa44.png","9810aa4482655a750b2ae27a1454a17f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});