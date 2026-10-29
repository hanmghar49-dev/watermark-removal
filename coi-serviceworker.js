/* Same-origin service worker bootstrap for cross-origin isolation on static hosting. */
(async()=>{
 if(!('serviceWorker' in navigator) || !isSecureContext)return;
 try {
   await navigator.serviceWorker.register('./coi-sw.js',{scope:'./'});
   await navigator.serviceWorker.ready;
   if(!navigator.serviceWorker.controller && !sessionStorage.getItem('cleanpix-coi-reloaded')) {
     sessionStorage.setItem('cleanpix-coi-reloaded','1');
     location.reload();
   }
 } catch(e) {console.warn('Isolation setup failed',e)}
})();
