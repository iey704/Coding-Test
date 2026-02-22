import sys 
input = sys.stdin.readline
n = int(input())

data = []
for _ in range(n):
    name,kor,eng,math = map(str,input().split())
    data.append((name,int(kor),int(eng),int(math)))

# 기준: 국어 내림차순 > 영어 오름차순 > 수학 내림차순 > 이름(아스키코드) 오름차순
sorted_data = sorted(data, key=lambda x: (-x[1], x[2], -x[3], x[0]))

for i in range(n):
    sys.stdout.write(sorted_data[i][0]+'\n')