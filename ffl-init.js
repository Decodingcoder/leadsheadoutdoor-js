document.addEventListener('DOMContentLoaded', () => {
  FFL.init({
    container: 'ffl_container',
    apiKey: 'YOUR_API_KEY',
    geoKey: 'YOUR_MAPS_KEY',
    cBack: (data) => console.log('chosen dealer:', data)
  });
});
