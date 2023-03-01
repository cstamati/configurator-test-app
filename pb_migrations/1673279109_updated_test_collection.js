migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8t1yw1ijxae7t1f")

  collection.name = "notes"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nicg8wym",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8t1yw1ijxae7t1f")

  collection.name = "test_collection"

  // remove
  collection.schema.removeField("nicg8wym")

  return dao.saveCollection(collection)
})
