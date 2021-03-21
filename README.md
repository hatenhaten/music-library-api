# Music Library API Project

A Manchester Codes Project to build a music library API using an ExpressJS app connected to a MySQL database using Sequelize.

## Concepts Covered

- Database & DB design
- SQL & MySQL
- Using Sequelize to interact with the database
- Building an application within a Docker container
- MySQL Workbench for initial database setup
- Postman to run API requests
- Mocha / Chai for testing
- The use of environment variables to shield sensitive information from view
- Using Nodemon to auto-restart your Node applications

## The database

we used a MySQL table inside a Docker container. The database has the following structure:

*Arist table*
name-string
genre-string

*Album table*
name-string
year-integer
artistId-foreign key

*Song table*
name-string
artistId-foreign key
albumId-foreign key

## API endpoints

ACTION | URI | BODY CONTENT
-------|-----|-------------
Add ARTIST | `POST /artists` | name [string], genre [string]
Edit ARTIST | `PATCH /artists/:artistId` | name [string] and/or genre [string]
Delete ARTIST | `DELETE /artists/:artistId` | n/a
Get all ARTISTS | `GET /artists` | n/a
Get a single ARTIST | `GET /artists/:artistId` | n/a
Add ALBUM | `POST /artists/:artistId/albums` | name [string], year [integer]
Edit ALBUM | `PATCH /albums/:albumId` | name [string] and/or year [integer]
Delete ALBUM | `DELETE /albums/:albumId` | n/a
Get all ALBUMS | `GET /albums` | n/a
Get a single ALBUM | `GET /albums/:albumId` | n/a
Get all ALBUMS by an artist | `GET /artists/:artistId/albums` | n/a
Add SONG | `POST /albums/:albumId/song` | "name" [string]
Get all SONGS | `GET /songs` | n/a
Get a single SONG | `GET /songs/:songId` | n/a
Get all SONGS by an artist | `GET /artists/:artistId/songs` | n/a

## Status

Completed Project