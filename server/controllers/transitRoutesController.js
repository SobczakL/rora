const axios = require('axios');

//limit stop processing to manage api rate limit
const max_stop_size = 3;

const currentTime = Math.floor(Date.now() / 1000);

exports.getNearbyRoutes = ((req, res) => {
    const { lat, lon } = req.body;
    axios.get(`https://external.transitapp.com/v3/public/nearby_stops?lat=${lat}&lon=${lon}&max_distance=350`, {
        headers: {
        'apiKey': '7a24d152ab61c207fb15f519b96e64026bdcc20a6eb6c5cb215386c9438f7109'
        }

    })
    .then(response => {
        const stops = response.data.stops;
        const sortedStops = stops.sort((a, b) => a.distance - b.distance)
        const closestStops = sortedStops.slice(0, max_stop_size);
        const stopIds = closestStops.map(stop => stop.global_stop_id)

        const allRoutes = []

        const stopRoutes = stopIds.map(stopId => {
            return axios
                .get(`https://external.transitapp.com/v3/public/stop_departures?global_stop_id=${stopId}&time=${currentTime}`, {
                headers: {
                    'apiKey': '7a24d152ab61c207fb15f519b96e64026bdcc20a6eb6c5cb215386c9438f7109'
                    }
                })
                .then(response => {
                    allRoutes.push(response.data)
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).send('An error occurred while fetching stop routes.');
                })
        })
        Promise.all(stopRoutes)
            .then(() => {
            res.send(allRoutes);
            })
            .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred while fetching stop routes.');
            });
        })
    .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred while fetching nearby stops.');
    });

});

exports.searchRoutes = ((req, res) => {
    const { searchInput } = req.body;
    axios.get(`https://external.transitapp.com/v3/public/routes_for_network?network_id=TTC|Toronto`, {
        headers: {
            'apiKey': '7a24d152ab61c207fb15f519b96e64026bdcc20a6eb6c5cb215386c9438f7109'
        }
    })
    .then(response => {
        const searchResults = response.data;
        const closestRoutes = [];
        searchResults.routes.forEach((route) => {
            if (route.route_long_name.toLowerCase().includes(searchInput.toLowerCase()) || route.route_short_name.includes(searchInput)) {
                closestRoutes.push(route);
            }
        });

        const finalRoutes = [];
        const bool = true;
        const errorResponses = [];

        const querryClosestRoutes = closestRoutes.map((route) => {
            return axios.get(`https://external.transitapp.com/v3/public/route_details?global_route_id=${route.global_route_id}&include_next_departure=${bool}`, {
                headers: {
                    'apiKey': '7a24d152ab61c207fb15f519b96e64026bdcc20a6eb6c5cb215386c9438f7109'
                }
            })
            .then((response) => {
                finalRoutes.push(response.data);
            })
            .catch((err) => {
                errorResponses.push(err);
            });
        });

        Promise.all(querryClosestRoutes)
            .then(() => {
                if (errorResponses.length > 0) {
                    res.status(500).send(errorResponses);
                } else {
                    res.status(200).send(finalRoutes);
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .catch(error => {
        res.status(500).send(error);
    });
});