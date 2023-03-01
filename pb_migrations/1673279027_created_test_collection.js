migrate((db) => {
  const collection = new Collection({
    "id": "8t1yw1ijxae7t1f",
    "created": "2023-01-09 15:43:47.294Z",
    "updated": "2023-01-09 15:43:47.294Z",
    "name": "test_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m7iebesn",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8t1yw1ijxae7t1f");

  return dao.deleteCollection(collection);
})
