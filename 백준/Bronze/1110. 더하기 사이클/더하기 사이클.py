import sys
import math
input = sys.stdin.readline

n = int(input())
current = n

first_num = 0
second_num = 0
sum_num = 0

count = 0

while True:
    count += 1

    first_num = current // 10
    second_num = current % 10
    sum_num = first_num + second_num

    current = int(str(second_num) + str(math.ceil(sum_num % 10)))

    if current == n:
        break

print(count)