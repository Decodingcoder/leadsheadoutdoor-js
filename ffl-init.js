// ffl-init.js
document.addEventListener('DOMContentLoaded', function() {
  FFL.init({
    container: 'ffl_container',
    apiKey:    'V5ThVSNeQHwXMLESio6ed7HE9JwyEacfRe7TtOJR458y0GnhsZU7xMwkhyvKKRRz6814c201e7b07',
    geoKey:    'AIzaSyBeWDDQUtesS9aAYT7Y4BSw_MCv6ItnS4k',
    cBack:     getSelected
  });
});

function getSelected(data) {
  console.log('FFL callback data:', data);
}
