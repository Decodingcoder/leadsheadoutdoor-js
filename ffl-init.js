// Define initGMap so Maps is loaded only once, then init the widget
FFL.initGMap = function() {
  FFL.init({
    container: 'ffl_container',
    apiKey:    'V5ThVSNeQHwXMLESio6ed7HE9JwyEacfRe7TtOJR458y0GnhsZU7xMwkhyvKKRRz6814c201e7b07',
    geoKey:    'AIzaSyBeWDDQUtesS9aAYT7Y4BSw_MCv6ItnS4k',
    cBack:     data => console.log('chosen dealer:', data)
  });
};
