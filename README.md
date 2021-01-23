# Electron APP with PouchDB + LevelDB

This is a demo app for 'Proyecto ADPA' in which we create an Electron app using PouchDB + LevelDB as local DB.

## Install and run

Firstable:

    git clone https://github.com/DanielaRocha6/ADPA-PouchDB.git
    cd ADPA-PouchDB

Then install dependencies:

    npm install

And run:

    npm start

If it doesn't work, you might not have the latest version of Node/npm. Try installing the latest using [nvm](https://github.com/creationix/nvm).

## Other dependencies

In order to get LevelDB to work propertly, we use [electron-rebuild](https://github.com/electron/electron-rebuild)

See [pouchdb-electron](https://github.com/nolanlawson/pouchdb-electron) for more installation instructions.

### node-websql (sqlite3) adpater

Like LevelDB, this requires reinstalling a native module (in this case, [SQLite3](https://github.com/mapbox/node-sqlite3)).
