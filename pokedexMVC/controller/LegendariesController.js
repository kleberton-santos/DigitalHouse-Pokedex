const LegendayModel = require('../models/LegendaryModel')
const controller = {
    getOneLegendary: (request, response) => {
        const model = new LegendayModel('123', 'Pineco', 'Bagworm', 'Bug');
        return response.json(model);
    },
    getAllLegendaries: (request, response) => {
        const legendary1 = new LegendayModel('123', 'Pineco', 'Bagworm', 'Bug');
        const legendary2 = new LegendayModel('124', 'Pikachu', 'Bagworm', 'Eletric');
        return response.json([
            legendary1,
            legendary2
        ])
    }
}

module.exports = controller;