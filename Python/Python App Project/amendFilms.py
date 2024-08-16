from connect import *

def update():
    idField = input("Enter filmID of the record to be updated: ")

    fieldName = input("Enter the title or yearReleased or rating or duration or genre as a field name: ")

    fieldValue = input(f"Enter the value for {fieldName} field: ")

    fieldValue = "'" +fieldValue+ "'" 

    dbCursor.execute(f"UPDATE tblFilms SET {fieldName} = {fieldValue} WHERE filmID = {idField}")
    dbCon.commit()

    print(f"Film {idField} updated into films table")
if __name__ =="__main__":
    update()