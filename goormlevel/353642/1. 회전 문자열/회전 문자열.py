# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
input = sys.stdin.readline

s = list(input().strip())
new_s = s[::-1]

for i in range(len(s)):
	if new_s[i] == '6':
		new_s[i] = '9'
	elif new_s[i] == '9':
		new_s[i] = '6'

print(''.join(new_s))
