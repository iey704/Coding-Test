import sys
input = sys.stdin.readline

n = int(input())
arr_num = 10001
count_arr = [0]*arr_num # 값의 범위에 따라 배열 생성

for i in range(n):
    count_arr[int(input())] += 1 # 해당 값이 얼마나 나오는지 개수 세기

for j in range(arr_num):
    if count_arr[j] != 0:
        for k in range(count_arr[j]):
            sys.stdout.write(str(j)+'\n')