import time
print("Crusty Crab pizza")
print("")
print("")
print("")
print(" _______________________________________________________")
print("|    type           |     price    |  size      | number|")
print("|___________________|______________|____________|_______|")
print("| Peperoni Pizza    |      9.99$   |   20cm     |     1 |")
print("| Italian Pizza     |     10.99$   |   20cm     |     2 |")
print("| Beef Pizza        |      11.99$  |   20cm     |     3 |")
print("| Peperoni Pizza    |     14.99$   |   30cm     |     4 |")
print("| Italian Pizza     |      16.99$  |   30cm     |     5 |")
print("| Beef Pizza        |      18.99$  |   30cm     |     6 |")
print("|___________________|______________|____________|_______|")
print("")
print("")
print("")
food = int(input("What you are going to order?"))

match food:
    case 1: foodprice = 9.99
    case 2: foodprice = 10.99
    case 3: foodprice = 11.99
    case 4: foodprice = 14.99
    case 5: foodprice = 16.99
    case 6: foodprice = 18.99

print("All right, what you are going to order for drink?")
print("")
print("")
print("")
print(" _______________________________________________________")
print("|    type           |     price    |  size      | number|")
print("|___________________|______________|____________|_______|")
print("| sode              |      1.99$   |   20cm     |     1 |")
print("| coca cola         |      1.99$   |   20cm     |     2 |")
print("| pepsi             |      0.99$   |   20cm     |     3 |")
print("| milk              |      0.99$   |   30cm     |     4 |")
print("| water             |      0.49$   |   30cm     |     5 |")
print("| nothing           |      0$      |   30cm     |     6 |")
print("|___________________|______________|____________|_______|")
print("")
print("")
print("")
drink = int(input("What you are going to order?"))

match drink:
    case 1: drinkprice = 1.99
    case 2: drinkprice = 1.99
    case 3: drinkprice = 0.99
    case 4: drinkprice = 0.99
    case 5: drinkprice = 0.49
    case 6: drinkprice = 0

print("")
print("")
print("")
time.sleep(3)
print("wait a moment ...")
print("")
print("")
print("")

a = foodprice + drinkprice
print(a, "your cash is = ")
b= int(input(""))
