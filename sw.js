

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

function send_message_to_all_clients(msg){
  clients.matchAll().then(clients => {
      clients.forEach(client => {
          send_message_to_client(client, msg).then(m => console.log("SW Received Message: "+m));
      })
  })
}