import sys
input = sys.stdin.readline

def choose(n,m,picked):
    # 종료 조건
    if len(picked) == m:
        print(*picked)
        return
    for num in range(n):
        picked.append(num+1)
        choose(n,m,picked)
        picked.pop()
    return

def main():
    n,m = map(int,input().split())
    choose(n,m,[])

main()
