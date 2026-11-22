import sys
input = sys.stdin.readline

count = [0,0]
answer = []
s = []

def recursion(s,l,r):
    count[1] += 1    # 재귀 함수 호출될 때마다 증가
    if l >= r: 
        count[0] = 1
    elif s[l] != s[r]:
        count[0] = 0 
    else: 
        return recursion(s,l+1,r-1)
    return count

def main():
    n = int(input())
    for _ in range(n):
        s.append(input().strip())
    
    for i in range(n):
        count[1] = 0    # 문자열마다 횟수 초기화
        recursion(s[i], 0, len(s[i]) - 1)
        answer.append([count[0], count[1]])    # 지금 값을 새 리스트로 복사
        
    for a in answer:
        print(a[0], a[1])

main()