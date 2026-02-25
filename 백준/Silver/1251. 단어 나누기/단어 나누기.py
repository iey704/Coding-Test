import sys
input = sys.stdin.readline

word = input().strip() # 양쪽 공백/줄바꿈 제거
n = len(word)
# 단어의 개수를 3등분하되, 한 구역당 최소 길이는 1로 설정
# 각 구열을 reverse하고 난 뒤, 합친 결과물을 저장? 이를 나열했을 때 첫번째 원소로 오는 애가 정답
new_word = []
for left in range(1,n-1):
    for right in range(left+1,n):
        left_area = word[0:left][::-1]
        middle_area = word[left:right][::-1]
        right_area = word[right:n][::-1]

        new_word.append(left_area+middle_area+right_area)

sys.stdout.write(sorted(new_word)[0])