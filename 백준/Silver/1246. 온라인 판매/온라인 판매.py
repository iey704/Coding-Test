import sys
input = sys.stdin.readline

n,m = map(int, input().split())
customer = []
for _ in range(m):
    customer.append(int(input()))

customer.sort()
maxCount = 0
maxResult = 0
for i in range(m):
    price = customer[i]
    # 소유하고있는 달걀의 개수보다 고객의 개수가 많으면? 탈락
    count = min(n,m-i)
    result = price*count

    if result > maxResult:
        maxPrice = price 
        maxResult = result

print(maxPrice, maxResult)
