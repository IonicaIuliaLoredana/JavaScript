

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 44.4181, lng: 26.1032},
          mapTypeId: 'terrain'
        });

        var sect1Coords = [
          {lat: 44.5229, lng: 26.0290},
          {lat: 44.5400, lng: 26.1018},
          {lat: 44.4891, lng: 26.1097},
          {lat: 44.4371, lng: 26.1025},
          {lat: 44.4337, lng: 26.0594},
          {lat: 44.4712, lng: 26.0355},
          {lat: 44.4786, lng: 25.9930},
          
    
        ];

        var firstSector = new google.maps.Polygon({
          paths: sect1Coords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: 'red',
          fillOpacity: 0.5
        });
        firstSector.setMap(map);


        var sect2Coords = [
          {lat: 44.4891, lng: 26.1097},
          {lat: 44.4793, lng: 26.1822},
          {lat: 44.4559, lng: 26.1577},
          {lat: 44.4427, lng: 26.1957},
          {lat: 44.4371, lng: 26.1025},
         ];

        var secondSector = new google.maps.Polygon({
          paths: sect2Coords,
          strokeColor: 'orange',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: 'orange',
          fillOpacity: 0.5
        });
        secondSector.setMap(map);

        var sect3Coords = [
          {lat: 44.4371, lng: 26.1025},
          {lat: 44.4427, lng: 26.1957},
          {lat: 44.4317, lng: 26.2251},
          {lat: 44.3954, lng: 26.2119},
          {lat: 44.3963, lng: 26.1695},
          {lat: 44.4298, lng: 26.0962},
          {lat: 44.4296, lng: 26.0974},
          
         ];

        var thirdSector = new google.maps.Polygon({
          paths: sect3Coords,
          strokeColor: 'yellow',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: 'yellow',
          fillOpacity: 0.5
        });
        thirdSector.setMap(map);

        var sect4Coords = [
          {lat: 44.4298, lng: 26.0962},
          {lat: 44.3963, lng: 26.1695},
          {lat: 44.3696, lng: 26.1420},
          {lat: 44.3433, lng: 26.1650},
          {lat: 44.3362, lng: 26.1485},
          {lat: 44.3673, lng: 26.0919},
          {lat: 44.4037, lng: 26.0960},
         ];

        var fourthSector = new google.maps.Polygon({
          paths: sect4Coords,
          strokeColor: 'green',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: 'green',
          fillOpacity: 0.5
        });
        fourthSector.setMap(map);

        var sect5Coords = [
          {lat:44.4296, lng: 26.0974},
          {lat: 44.4298, lng: 26.0962},
          {lat: 44.4037, lng: 26.0960},
          {lat: 44.3673, lng: 26.0919},
          {lat: 44.3887, lng: 26.0301},
          {lat: 44.4058, lng: 25.9991},
          {lat: 44.4184, lng: 26.0587},
          {lat: 44.4337, lng: 26.0594},
          {lat: 44.4371, lng: 26.1025},
         ];

        var fifthSector = new google.maps.Polygon({
          paths: sect5Coords,
          strokeColor: 'blue',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: 'blue',
          fillOpacity: 0.5
        });
        fifthSector.setMap(map);

        var sect6Coords = [
          
          
            {lat: 44.4337, lng: 26.0594},
            {lat: 44.4184, lng: 26.0587},
            {lat: 44.4058, lng: 25.9991},
            {lat: 44.4409, lng: 25.9673},
            {lat: 44.4455, lng: 26.0188},
            {lat: 44.4575, lng: 26.0133},
            {lat: 44.4676, lng: 25.9776},
            {lat: 44.4786, lng: 25.9930},
            {lat: 44.4712, lng: 26.0355},
          ];

        var sixthSector = new google.maps.Polygon({
          paths: sect6Coords,
          strokeColor: '#2E006C',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#791CF8',
          fillOpacity: 0.5
        });
        sixthSector.setMap(map);
      }