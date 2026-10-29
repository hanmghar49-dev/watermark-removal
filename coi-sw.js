self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  if(event.request.cache==='only-if-cached' && event.request.mode!=='same-origin')return;
  event.respondWith((async()=>{
    const request=event.request;
    const response=await fetch(request);
    if(response.type==='opaque'||response.type==='opaqueredirect')return response;
    const headers=new Headers(response.headers);
    headers.set('Cross-Origin-Embedder-Policy','require-corp');
    headers.set('Cross-Origin-Opener-Policy','same-origin');
    headers.set('Cross-Origin-Resource-Policy','cross-origin');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  })());
});
