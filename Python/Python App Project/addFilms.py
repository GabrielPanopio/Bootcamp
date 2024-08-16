from connect import *

import time

def insertFilms():
    films = []

    title = input("Enter Film Title: ")
    yearReleased = int(input("Enter The Year Released: "))
    rating = input("Enter the Film Rating: ")
    duration = int(input("Enter the Film Duration: "))
    genre = input("Enter the Film Genre: ")

    films.append(title)
    films.append(yearReleased)
    films.append(rating)
    films.append(duration)
    films.append(genre)

    dbCursor.execute("INSERT INTO tblFilms(title, yearReleased, rating, duration, genre) VALUES (?,?,?,?,?)", films)
    dbCon.commit()

    print(f"{title} inserted into films table")
if __name__=="__main__":
    insertFilms()