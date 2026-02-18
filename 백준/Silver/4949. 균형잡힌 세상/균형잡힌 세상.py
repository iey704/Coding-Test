while True:
    line = input()
    if line == '.':
        break

    stack = []
    balanced = True
    for i in range(len(line)):
        if line[i] == '(' or line[i] == '[':
            stack.append(line[i])
        
        elif line[i] == ')':
            if len(stack) == 0:
                balanced = False
                break
            
            if stack.pop() != '(':
                balanced = False
                break

        elif line[i] == ']':
            if len(stack) == 0:
                balanced = False
                break
            
            if stack.pop() != '[':
                balanced = False
                break
        
    if balanced == True and len(stack) == 0:
        print('yes')
    else:
        print('no')