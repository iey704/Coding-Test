import sys
input = sys.stdin.readline

n, score, p = map(int,input().split())
answer = 0

if n != 0:
    rank = list(map(int,input().split()))
    max_rank = max(rank)
    min_rank = min(rank)

    # 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮을 때
    if score <= min_rank and len(rank) == p:
        answer = -1
    else:
        # 어떤 범위에 해당하는지 찾고 해당 인덱스들을 반환
        greater_than_score = list(filter(lambda x: x>=score,rank))
        greater_than_score.append(score)
        answer = greater_than_score.index(score)+1
else:
    answer = 1

print(answer)