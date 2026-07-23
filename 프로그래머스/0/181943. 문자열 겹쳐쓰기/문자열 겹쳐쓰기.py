def solution(my_string, overwrite_string, s):
    length = len(overwrite_string)
    prefix = my_string[:s]
    suffix = my_string[s+length:]
    answer = prefix + overwrite_string + suffix
    
    return answer
