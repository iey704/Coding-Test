str = input()
answer = []
for char in str:
    if char.islower():
        char = char.upper()
    else:
        char = char.lower()
    answer.append(char)
print("".join(answer))