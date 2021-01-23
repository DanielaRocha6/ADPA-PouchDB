const { remote } = require('electron');
const { app } = remote;
const appName = 'adpa-demo-project';
const appData = `${app.getPath('appData')}/${appName}`;
var NodePouchDB = require('pouchdb');
var leveldbDB = new NodePouchDB(`${appData}/mydb-leveldb-adpa`);
var $ = document.querySelector.bind(document);

(function () {
'use strict';
// LevelDB
leveldbDB.info().then(function (info) {
  console.log(info)
  $('#leveldb').innerHTML = '&#10004; Se instaló correctamente PouchDB con LevelDB!';
}).catch(function (err) {
  $('#leveldb').innerHTML = 'Error al intentar usar LevelDB';
});
})();

function getItems() {
  leveldbDB.allDocs({
    include_docs: true,
    attachments: true
  }).then(function (result) {
  $('#listdb').innerHTML = "Hay "+result.rows.length+" items en la DB";
  }).catch(function (err) {
    console.log(err);
  });
}

function addItem() {
var doc = {
  "_id": ""+Math.random(),
  "name": "Paciente",
  "rango": "Sargento",
  "edad": 57,
  "protesis": "Transfemoral"
};
leveldbDB.put(doc);
console.log("Añadido: ", doc)
getItems()
}