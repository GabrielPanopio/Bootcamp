from connect import *

def genre():
    genreField = input("Enter the name of the genre to search for: ")
    dbCursor.execute(f"SELECT * FROM tblFilms WHERE genre = '{genreField}' ")
    records = dbCursor.fetchall()
    for aRecord in records:
        print(aRecord)
genre()


def idField():
    filmIDField = input("Enter filmID of the film to search for: ")
    dbCursor.execute(f"SELECT * FROM tblFilms WHERE genre = '{filmIDField}' ")
    records = dbCursor.fetchall()
    for aRecord in records:
        print(aRecord)
idField()


def year():
    yearField = input("Enter the year of the film to search for: ")
    dbCursor.execute(f"SELECT * FROM tblFilms WHERE yearReleased = '{yearField}' ")
    records = dbCursor.fetchall()
    for aRecord in records:
        print(aRecord)
year()

def rating():
    ratingField = input("Enter the rating of the film to search for: ")
    dbCursor.execute(f"SELECT * FROM tblFilms WHERE rating = '{ratingField}' ")
    records = dbCursor.fetchall()
    for aRecord in records:
        print(aRecord)
rating()
