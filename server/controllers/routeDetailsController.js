const axios = require("axios");

const bool = true;

exports.routeDetails = (req, res) => {
    const id = req.params.id;
    return axios
        .get(
            `https://external.transitapp.com/v3/public/route_details?global_route_id=${id}&include_next_departure=${bool}`,
            {
                headers: {
                    apiKey:
                        process.env.LOCAL_TRANSIT_API_KEY,
                },
            }
        )
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
