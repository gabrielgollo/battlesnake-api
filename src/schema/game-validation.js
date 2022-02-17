const yup = require('yup');

const startSchema = yup.object().shape({
    gameState: yup.object().shape({
        game: yup.object().shape({
            id: yup.string().required('Game id is required!')
        })
    })
})

function startValidation(data) {
    return startSchema.validateSync(data);
}

module.exports = {
    startValidation
};