import sys
input = sys.stdin.readline
arr = [0]*26

for character in input().strip():
    index = ord(character) - ord('a') # 아스키 코드 변환
    arr[index] += 1 # 중복 체크

print(' '.join(map(str, arr))) # 문자열 메서드 join이므로 배열 내 정수값 -> 문자열로 변환