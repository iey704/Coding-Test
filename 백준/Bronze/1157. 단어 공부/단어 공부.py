import sys
input = sys.stdin.readline

str = input().strip()
# a-z까지 배열을 놓음 - 아스키코드 활용
lower_str = str.lower()
ascii_arr = [0]*26

for char in lower_str:
    index = ord(char)-97
    ascii_arr[index] += 1

if ascii_arr.count((max(ascii_arr))) != 1:
    print('?')
else:
    max_index = ascii_arr.index(max(ascii_arr))
    print(chr(max_index+97).upper())