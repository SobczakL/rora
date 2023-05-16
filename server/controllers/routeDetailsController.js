const axios = require('axios');

const bool = true

exports.routeDetails = (req, res) => {
    const id = req.params.id;
    return axios.get(`https://external.transitapp.com/v3/public/route_details?global_route_id=${id}&include_next_departure=${bool}`, {
        headers: {
        'apiKey': '7a24d152ab61c207fb15f519b96e64026bdcc20a6eb6c5cb215386c9438f7109'
        }
    })
    .then((response) => {
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}