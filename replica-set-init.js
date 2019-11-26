rs.initiate({
    _id: "rs0",
    members: [
        {
            _id: 0,
            host: "mongo1.eventhorizon.com.br:27017",
            priority: 1
        }, {
            _id: 1,
            host: "mongo2.eventhorizon.com.br:27017",
            priority: 0.5
        }, {
            _id: 2,
            host: "mongo3.eventhorizon.com.br:27017",
            priority: 0.5
        }, {
            _id: 3,
            host: "mongo4.eventhorizon.com.br:27017",
            priority: 0,
            hidden: true
        }, {
            _id: 4,
            host: "mongo5.eventhorizon.com.br:27017",
            priority: 0
        }
    ]
})
