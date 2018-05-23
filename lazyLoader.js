const lazyLoadImages = (function() {
   let images, iframes, toLoad;

   function inView(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) return true;
   }

   function loadImages() {
      images  = [].slice.call(document.getElementsByTagName('img'));
      iframes = [].slice.call(document.getElementsByTagName('iframe'));
      toLoad  = [...images, ...iframes];
      toLoad.forEach(function(image) {
         if (inView(image)) {
            if (image.hasAttribute('data-src')) {
               image.hasAttribute('src') ? image.removeAttribute('data-src') : image.setAttribute('src', image.getAttribute('data-src'));
            }
         }
      });
   }

   return {
      loadImages: loadImages
   };
})();

lazyLoadImages.loadImages();

