import datetime
 
def calculate_total(adult_tickets, child_tickets, senior_tickets):
    adult_price = 20
    child_price = 12
    senior_price = 11
   
    total_cost = (adult_tickets * adult_price) + (child_tickets * child_price) + (senior_tickets * senior_price)
    return total_cost
 
def print_ticket(surname, adult_tickets, child_tickets, senior_tickets, parking_pass):
    print("\nAdventure Theme Park Ticket")
    print("----------------------------")
    print(f"Lead Booker: {surname}")
    print(f"Adult Tickets: {adult_tickets}")
    print(f"Child Tickets: {child_tickets}")
    print(f"Senior Citizen Tickets: {senior_tickets}")
    print(f"Total Cost: £{calculate_total(adult_tickets, child_tickets, senior_tickets)}")
   
    if parking_pass:
        print("Parking Pass: Yes")
    else:
        print("Parking Pass: No")
   
    print(f"Date: {datetime.datetime.now().strftime('%Y-%m-%d')}")
    print("----------------------------")
 
def main():
    print("Welcome to Adventure Theme Park Ticketing System!")
    print("\nEntrance ticket prices:")
    print("Adult: £20\nChild: £12\nSenior Citizen: £11")
   
    adult_tickets = int(input("\nHow many adult tickets are required? "))
    child_tickets = int(input("How many child tickets are required? "))
    senior_tickets = int(input("How many senior citizen tickets are required? "))
   
    surname = input("\nEnter the lead booker's surname (for the ticket): ")
   
    parking_pass_response = input("\nDo you require a parking pass for the car park? (Yes/No): ").lower()
    parking_pass = parking_pass_response == 'yes'
   
    print("\nCalculating total cost...")
    total_cost = calculate_total(adult_tickets, child_tickets, senior_tickets)
   
    print_ticket(surname, adult_tickets, child_tickets, senior_tickets, parking_pass)
   
    print("\nThank you for your purchase! Enjoy your visit to Adventure Theme Park.")
 
if __name__ == "__main__":
    main()











from datetime import date
# Display welcome message and ticket pricing information
print("Welcome to the adventure Bootcamp")
print("*********************************")
def ticketPrices():
    print("Ticket Prices\n*********************************\nChild: £12\nAdult: £20\nSenior Citizen: £11")
# call the ticketPrices subroutine
# ticketPrices()

# Ask for booking/ticket details and lead booker

# lead booker
def lead_booker():
    bookerName = input("Enter your name: ")
    return bookerName

def valid_num():
    invalidNum = True # create a boolean datatype which is set to true
    # repeat
    while invalidNum: # same as while true
        try:
            number = int(input()) # ask user for integer datatype(number)
            invalidNum = False # reassign the boolean value to for invalid to false
        except ValueError:
            print("Please enter a number: ")
    return number        

def calculate_total(pCTotal, pATotal, pSTotal):
    # includes the child cost * number of child tickets
    total_cost = pCTotal * 12
    print(total_cost)
    # include the adult cost * number of adult tickets
    total_cost = total_cost + pATotal * 20
    print(total_cost)
    # include the senior cost * number of senior tickets
    total_cost = total_cost + pSTotal * 11
    print(total_cost)

# issue tickets and ask for payment
    
def collect_tickets(total_cost):
    print("The total cost is", total_cost)
    print("Ticket Machine only accepts £10 and £20 notes")
    amount_paid = 0 # create amount_paid variable and assign integer value 0

    while total_cost > amount_paid:
        enter_amount = valid_num()
        if enter_amount == 10:
            amount_paid = amount_paid + 10
        elif enter_amount == 20:
            amount_paid = amount_paid + 20
        else:
            print("Ticket Machine only accepts £10 and £20 notes")
        if amount_paid > total_cost:
            give_change = amount_paid - total_cost
            print("Your change is", give_change)    

def issue_tickets(pCTotal, pATotal, pSTotal, total_cost):
    today = date.today()
    print("Your tickets are valid on", today)
    print("Your lead booker is ", lead_name)
    print("Your total child ticket(s) is ", pCTotal)
    print("Your total adult ticket(s) is ", pATotal)
    print("Your total senior ticket(s) is ", pSTotal)
    print("Your total for all ticket(s) is ", total_cost)

def parking_requirements():
    # ask if parking is required
    required_parking = input("Do you require parking?: Enter Y or N: ").upper()
    # if the user failed to enter Y or N
    while required_parking != "Y" and required_parking != "N":
        # repeat the question asking if parking is required
        required_parking = input("Do you require parking?: Enter Y or N: ").upper()
    return required_parking

ticketPrices()

print("Enter the number of child tickets? ")
# call the valid_num() function respective parameter(pCTotal, pATotal, pSTotal)
pCTotal = valid_num()
print("Enter the number of adult tickets? ")
pATotal = valid_num()
print("Enter the number of senior tickets? ")
pSTotal = valid_num()

# call the calculate_total function and assign it to total_ticketsP
total_ticketsP = calculate_total(pCTotal, pATotal, pSTotal)

# call the lead_booker function and assign lead_name
lead_name = lead_booker()

collect_tickets(total_ticketsP)

# call the parking_requirements and parking_Yes_No
parking_Yes_No = parking_requirements()


issue_tickets(pCTotal, pATotal, pSTotal, total_ticketsP)

if parking_Yes_No == "Y":
    print("You have a car pass")
print("Enjoy your adventures")