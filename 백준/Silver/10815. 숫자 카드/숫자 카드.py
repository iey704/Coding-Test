import sys
input = sys.stdin.readline

n = int(input())
cards_n = sorted(list(map(int, input().strip().split())))
m = int(input())
cards_m_raw = list(map(int, input().strip().split()))
# (값, 원래인덱스) 쌍으로 만들고 값 기준 정렬
cards_m = sorted([(val, idx) for idx, val in enumerate(cards_m_raw)])

pointer_n = 0
pointer_m = 0
answer_arr = [0]*m
while pointer_n < n and pointer_m < m:
    val_m, orig_idx = cards_m[pointer_m]

    if cards_n[pointer_n] < val_m:
        pointer_n += 1
    elif cards_n[pointer_n] > val_m:
        pointer_m += 1
    else: # 같을 때
        answer_arr[orig_idx] = 1 # 원래 인덱스에 저장
        pointer_m += 1

print(" ".join(map(str, answer_arr)))