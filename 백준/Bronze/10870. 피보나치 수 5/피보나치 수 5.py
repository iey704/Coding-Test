import sys
input = sys.stdin.readline

def main():
    n = int(input())
    arr = [0,1]

    for i in range(2,n+1):
        sum = arr[i-2] + arr[i-1]
        arr.append(sum)

    print(arr[n])

main()