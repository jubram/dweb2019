var Prize = require('../models/prizes');

module.exports.listar = () => {
    return Prize
        .find({}, 'year category', function(err, docs) {})
        .exec()
}

module.exports.consultar = id => {
    return Prize
        .findOne({_id: id})
        .exec()
}

module.exports.listarCategorias = () => {
    return Prize
        .distinct('category', function(err, docs) {})
        .exec()
}

module.exports.consultarCategoria = cat => {
    return Prize
        .find({category: cat})
        .exec()
}

module.exports.consultarData = (cat, date) => {
    return Prize
        .find({$and: {category: cat, $gt: {year: date}}})
        .exec()
}

module.exports.listarLaureados = () => {
    return Prize
        .aggregate([
            { $unwind: '$laureates' },
            { 
                $project: {
                    _id: 0,
                    year: 1,
                    category: 1,
                    name: {
                        $concat: [
                            "$laureates.firstname", " ", "$laureates.surname"
                        ]
                    }
                }
            },
            { $sort: { name: 1 } }
        ])
        .exec()
    }

    module.exports.listarLaureados2 = () => {
        return Prize
            .aggregate([
                { $unwind: '$laureates' },
                { $group: { _id: '$_id', laureates: { $addToSet: '$laureates' } } }
            ])
    }