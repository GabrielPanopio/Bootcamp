from connect import * 

def delete():
    idField = input("Enter filmID of the record to be deleted: ")

    dbCursor.execute(f"DELETE FROM tblFilms WHERE filmID = {idField}")
    dbCon.commit()

    print(f"Film {idField} deleted from film table")
    dbCon.close
if __name__=="__main__":
    delete()