import readFilms, addFilms, amendFilms, deleteFilms

def menuOptions():
    options = 0 
    menuNumbers = "Film Menu Options\nEnter:\n1. Print all Films.\n2. Add a Film.\n3. Update a Film.\n4. Delete a Film.\n5. Exit Films App."
    optionsList = ["1", "2", "3", "4", "5"]

    while options not in optionsList:
        print(menuNumbers)

        options = input("Enter an option from the films app menu: ")

        if options not in optionsList:
            print(f"{options} is not a valid choice in the films app menu")
    return options


mainProgram = True

while mainProgram:  
    mainMenu = menuOptions()
    if mainMenu == "1": 
        readFilms.read()
    elif mainMenu =="2":
        addFilms.insertFilms()
    elif mainMenu =="3":
        amendFilms.update()
    elif mainMenu == "4":
        deleteFilms.delete()
    else:
        mainProgram = False
input("Press enter to quit the films app")