const CACHE='my-routine-v6-meetings-ios';
const FILES=['./','./index.html','./tasks.html','./habits.html','./calendar.html','./more.html','./style.css','./app.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('my-routine-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.open(CACHE).then(async c=>{const r=await c.match(e.request,{ignoreSearch:true});if(r)return r;try{return await fetch(e.request)}catch(err){if(e.request.mode==='navigate')return c.match('./index.html');throw err}}))});
