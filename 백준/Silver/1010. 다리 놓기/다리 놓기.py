import sys
input = sys.stdin.readline

t = int(input())

# 겹쳤다 == m의 인덱스가 n의 인덱스보다 클 떄
# 조합: C(m, n) = m! / (n! × (m-n)!)
for i in range(t):
    n,m = list(map(int,input().split()))

    sum_m = 1
    sum_n = 1
    sum_m_n = 1

    for j in range(m):
        sum_m *= j+1
    for k in range(n):
        sum_n *= k+1
    for l in range(m-n):
        sum_m_n *= (l+1)

    result = sum_m // (sum_n * (sum_m_n))
    print((result))