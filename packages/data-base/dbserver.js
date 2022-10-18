
const express         = require('express')
const PORT            = 4000
const SensorData      = require("./sensorData.json")
const { graphqlHTTP } = require('express-graphql')
const { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLList, GraphQLInt } = require('graphql')

const SensorType = new GraphQLObjectType({
    name: "Sensor",
    fields: () => ({
        id: {type: GraphQLID},
        sensorName: {type: GraphQLList}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllSensors: {
            type: new GraphQLList(SensorType),
            args: { 
                id: { type: GraphQLID}
            },
            
            resolve(parent, args) {
                return SensorData
            }
        }
    }
})


const Mutation  = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        _dummy: { type: GraphQLString },
        createSensor: {
            type: SensorType,
            args: {
                id: { type: GraphQLID},
                sensorName: {type: GraphQLList}
            },
            resolve(parent, args) {
                SensorData.push({ 
                    id: Math.random(), sensorName: args.sensorName
                })
                return args
            }
        }
    }
})

const schema = new GraphQLSchema({quert: RootQuery, mutation: Mutation})

var app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: RootQuery,
  graphiql: true,
}))
app.listen(PORT, () => console.log(`Now browse to http://localhost:${PORT}/graphql`))