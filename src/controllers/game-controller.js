const { startValidation } = require('../schema/game-validation')

class GameController {
    static start(request, response) {
        try {
            const requestBody = request.body;

            startValidation(requestBody);

            const { gameState } = requestBody;
            const { game: { id: gameId } } = gameState;
            console.log(`${gameId} START`);


            response.status(200).json({
                message: 'Game started'
            });
        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        }
    }

    static move(req, response) {
        try {

        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = GameController;