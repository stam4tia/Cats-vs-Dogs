mapboxgl.accessToken = 'pk.eyJ1IjoibWhyMTIzNCIsImEiOiJja2VoNGNmMjMwN2cxMnhtcDhmczhkejk1In0.rV_j8ObNnxnglm1YuwdNtw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.94437799663514,40.764542683396144],
    zoom: 10
});



map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Andrew Haswell Green Dog Park </strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.9568405895412, 40.76027195114415,]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Carl Schurz Park Dog Runs </strong> ',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.94413641261352, 40.77450663720728]
                    }
                },
              
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Tom`s Dog Run </strong>  ',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.93508444135747, 40.79250630334812]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Morningside Park Dog Run </strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.95817557728837, 40.806411221716225]
                    }
                },
           
          
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Octagon Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.9413996853029, 40.76940041427458]
                    }
                },
                
                 {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Torsney Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.921693600014, 40.74739369697943]
                    }
                },
        
              {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>McGrowl-Lick Park Dog Run </strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.94360571315816, 40.723302246874084]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Jemmy`s Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.98859267397785, 40.74236081880755]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Pier 84 Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -74.00040564165681, 40.76353144088595]
                    }
                },
              {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Devoe Park Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.90855954598673, 40.863054293430665]
                    }
              },
                
                  {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Soundview Park Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.87769733479006, 40.81931276221309]
                    }
                  },
              {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>St. Mary`s Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.91213094140994, 40.809652975136544]
                    }
              },
                 {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Hillside Dog Park</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.99438857932957, 40.701538786518896]
                    }
                 },
                  {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Prospect Park Dog Beach</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.97194450385796, 40.66260533714163]
                    }
                  },
                    {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Triborough Bridge Playground C Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -73.92213914131436, 40.77366431279418]
                    }
                    },
      {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Torsney Dog Run</strong>',
                        'icon': 'dog-park'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.9216951102452, 40.74740674813336]
                    }
                
                }
            ]
        }
    });
    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
    });
});