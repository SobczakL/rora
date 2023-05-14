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

