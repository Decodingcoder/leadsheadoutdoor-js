//add before our js sdk your page's b body tag
<script src="https://app.fflapi.com/sdk/widget.js"></script>

//add that script and initialize widget with parameters

<script type="text/javascript">

    FFL.init({
        container : 'ffl_container', // container id
        apiKey: 'Your API Key', // your API Key
        geoKey: 'Your own Google Maps API Key', // Make sure you have Google Maps API Key
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

</script>