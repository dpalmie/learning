import tkinter as tk
from tkinter import *
from tkinter.messagebox import showinfo

# main window parameters
root = Tk()
root.title("To-Do Tracker")
root.geometry("400x400") # size of GUI
# root.configure(bg="gray60") # change background color

head = Label(text="To-Do Tracker", justify=CENTER)
head.config(font=("TkDefaultFont", 24))
head.grid(row=0, column=1)

# buttons to add or delete items
item = tk.StringVar() # creates var we can access using get()
itemLabel = Label(text="Enter task") # creates label
itemEntry = Entry(root, textvariable=item) # creates text entry box
addButton = Button(root, text="Add task to list") # need to make command to go with
delButton = Button(root, text="Delete task from list") # need to make command to go with

# placing buttons, labels, and spacers
spacer1 = Label(root, text="")
spacer1.grid(row=1, column=0, columnspan=4)
addButton.grid(row=2, column=3)

root.mainloop() # runs GUI