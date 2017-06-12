
def x(n):

    if n > 0:
        n = n - x(n -1)

    return n

print(x(10))