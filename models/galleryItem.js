// auch hier brauchen wir mongoose!
const mongoose = require('mongoose')

// Schema aus mongoose holen mongoose
const Schema = mongoose.Schema

// unseren Datensatz zu konfigurieren 
const galleryItemSchema = new Schema({
    // hier drin ist nun alles was unser Datensatz bekommen soll 
    // Mongoose Validierung 
    url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true 
    },
    rating: {
        type: Number,
        required: true, 
        min: 0,
        max: 10
    }
// timestamps erstellen ein feld, wann der datensatz erstellt/modifiziert wurde 
}, {timestamps: true})
// in dem Schema ist nun die Struktur des Datensatzes festgelegt

// Nun müssen wir aus dem Schema ein Model erstellen, dieses umgibt das Schema und stellt die Methoden zum arbeiten mit der DB zur Verfügung. CRUD-Operationen 

// der Name ist wichtig! Er wird in der DB mit dem Plural des Namens arbeiten (hier GalleryDBs)
const GalleryItem = mongoose.model("GalleryDB", galleryItemSchema)

// EXPORTIEREN!
module.exports = GalleryItem