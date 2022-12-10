import mongoose from 'mongoose'

const ThingSchema = new mongoose.Schema({
  name: String,
})

const Thing = mongoose.model('Thing', ThingSchema)

export default Thing;