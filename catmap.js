  
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
                                '<strong>Place For Cats Inc </strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-73.96873677883994, 40.75643800829952]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong> ASPCA Kitten Nursery</strong> ',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-73.97753898121023, 40.7815427235341]
                        }
                    },
                  
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Anjellicle Cats Rescue </strong>  ',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.98863853130617, 40.76193586464448]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong> KittyKind </strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.98895389694212, 40.73635253021057]
                        }
                    },
               
              
					 {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Frankie`s Feline Fund</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [  -73.98044116868653, 40.7792212297845]
                        }
                    },
			
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>The Brooklyn Cat Cafe </strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-73.99639136998843, 40.695253452952606]
                        }
                    },
					{
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Heart and Hand Society</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.96758822404702, 40.75461257777432]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Whiskers Holistic Pet Care</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-73.91710064273158, 40.78081852330703]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ollie`s Place</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.98356967733825, 40.727559166563694]
                        }
                  },
                    
                      {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Wildlife Freedom Foundation</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [  -73.9567702657198, 40.75399778527291]
                        }
                      },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Best Friends Lifesaving Center</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [  -74.00427413895191, 40.72159008374247]
                        }
                  },
                     {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>City Critters</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.98965684281464, 40.74262684193378]
                        }
                     },
                      {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Koneko</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.98420968693844, 40.72048845425314]
                        }
                      },
                        {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Meow Parlour</strong>',
                            'icon': 'veterinary'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [ -73.98959172255707, 40.71634616781453]
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
  