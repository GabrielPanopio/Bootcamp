from connect import *

dbCursor.execute(""" 
CREATE TABLE "tblfilms" (
	"filmID"	INTEGER,
	"title"	TEXT,
	"yearReleased"	INTEGER,
	"rating"	TEXT,
    "duration"   INTEGER,
    "genre" TEXT,
	PRIMARY KEY("filmID" AUTOINCREMENT)
)""")