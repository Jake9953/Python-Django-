# # Variable assignment

# a = 5

# print(a)

# my_income = 100000
# tax_rate = 60000

# my_taxes = my_income * tax_rate

# print(my_taxes)


  

# # strings
# # basics of strings

# 'hello' #string
# "Hello" #string

# # Indexing strings
# mystring = "jacobwambua"

# print(mystring[0]) # To index a string we use the square brackets
# print(mystring[-1]) # To index a string we use the square brackets

# # slicing strings
# mystring = "wambua" 

# print(mystring[2:]) #This will slice the string wambua, starting at index 2 until the last letter

# # lists
# mylist = [1,2,3] 

# # functions
# def addNUM(num1,num2):
#   return num1+num2

# results = addNUM(2,3)
# print(results)

# OOP

class person():
  def __init__(self, name, course):
    
    self.name = name
    self.course = course
    
me = person(name = "Jake" , course="ICT")

print(me.name)
print(me.course)
