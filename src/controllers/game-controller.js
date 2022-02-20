const { startValidation } = require('../schema/game-validation')

const moveService = require('../services/move-service')

class GameController {
    static start(request, response) {
        try {
            const requestBody = request.body;
            startValidation(requestBody);

            const gameState = requestBody;
            const { game: { id: gameId } } = gameState;
            console.log(`${gameId} START`);


            response.status(200).json({
                message: 'Game started'
            });
        } catch (error) {
            console.log(error.message)
            response.status(500).json({
                message: error.message
            });
        }
    }

    static move(req, res) {
        try {
            const requestBody = req.body;

            const gameState = requestBody;
            startValidation(gameState);

            const moveResponse = moveService(gameState);

            res.status(200).json({
                message: 'Move made',
                move: moveResponse.move
            });


        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = GameController;