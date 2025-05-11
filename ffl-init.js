//add before our js sdk your page's b body tag


//add that script and initialize widget with parameters



    FFL.init({
        container : 'ffl_container', // container id
        apiKey: 'V5ThVSNeQHwXMLESio6ed7HE9JwyEacfRe7TtOJR458y0GnhsZU7xMwkhyvKKRRz6814c201e7b07
', // your API Key
        geoKey: 'AIzaSyBeWDDQUtesS9aAYT7Y4BSw_MCv6ItnS4k', // Make sure you have Google Maps API Key
        cBack : getSelected // callback function
    });


    function getSelected(data) {
        let license_name = data.license_name;
        let premise_city = data.premise_city;
        let premise_state = data.premise_state;
        let premise_street = data.premise_street;
        let premise_zip_code = data.premise_zip_code;
        let voice_phone = data.voice_phone;
    }


