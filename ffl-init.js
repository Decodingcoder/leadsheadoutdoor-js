// ffl-init.js

// Initialize the FFL widget when the SDK is ready
FFL.init({
  container: 'ffl_container',
  apiKey: 'V5ThVSNeQHwXMLESio6ed7HE9JwyEacfRe7TtOJR458y0GnhsZU7xMwkhyvKKRRz6814c201e7b07',
  geoKey: 'AIzaSyBeWDDQUtesS9aAYT7Y4BSw_MCv6ItnS4k',
  cBack: getSelected
});

function getSelected(data) {
  // handle selected data here
  console.log('FFL callback data:', data);
}
