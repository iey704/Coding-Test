import sys
input = sys.stdin.readline
n,k = map(int, input().split())

circle = list(range(1,n+1))
# 첫번째 때는 순차적으로 나열한 후 3번째 요소 삭제
# 그 이후부터는 삭제된 요소 다음부터를 첫번째로 지칭한 후, 3번쨰 요소 삭제
index = 0
result = []
while len(circle) > 0:
    index = (index+k-1) % len(circle) # 원형 배열에서 몇 칸 이동할 때, 인덱스가 넘치면 처음으로 돌려줌
    result.append(circle.pop(index))

print("<" + ", ".join(map(str, result)) + ">")