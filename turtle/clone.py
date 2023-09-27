import turtle  
# Creating turtle  
t = turtle.Turtle()  
  
c = t.clone()  
t.color("blue")  
c.color("orange")  
t.circle(20)  
c.circle(30)  
for i in range(40, 100, 10):  
    c.circle(i)  
  
turtle.mainloop()  