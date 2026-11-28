import sys
input = sys.stdin.readline

def choose(n,m,picked):
    if len(picked) == m:
        print(*picked)
        return
    for num in range(n):
        picked.append(num+1)
        # 오름차순 정렬 확인
        isSorted = all(a<=b for a,b in zip(picked,picked[1:]))
        if not isSorted:
            picked.pop() 
            continue    # 안 맞는 건 제외하고 다음 숫자 확인
        choose(n,m,picked)
        picked.pop()

    return

def main():
    n, m = map(int, input().split())
    choose(n,m,[])

main()
