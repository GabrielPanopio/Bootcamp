from connect import *

def read():
    dbCursor.execute("SELECT * FROM tblFilms")
    records = dbCursor.fetchall()
    for aRecord in records:
        print(aRecord)
if __name__=="__main__":
    read()