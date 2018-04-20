

self.addEventListener('fetch', event => {
  console.log(event.request);

  return
});

self.addEventListener('message', function(event) {
  console.log(event.data)
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});