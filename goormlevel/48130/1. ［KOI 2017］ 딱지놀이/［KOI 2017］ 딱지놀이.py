# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
input = sys.stdin.readline

n = int(input())

arr_a = []
arr_b = []
num_a = 0
num_b = 0
for _ in range(n):
	line_a = list(map(int,input().split()))
	num_a = line_a[0]
	arr_a = line_a[1:]
	star_a = arr_a.count(4)
	circle_a = arr_a.count(3)
	rectangle_a = arr_a.count(2)
	triangle_a = arr_a.count(1)
	
	line_b = list(map(int,input().split()))
	num_b = line_b[0]
	arr_b = line_b[1:]
	star_b = arr_b.count(4)
	circle_b = arr_b.count(3)
	rectangle_b = arr_b.count(2)
	triangle_b = arr_b.count(1)

	if star_a != star_b:
		winner = "A" if star_a > star_b else "B"
	elif circle_a != circle_b:
		winner = "A" if circle_a > circle_b else "B"
	elif rectangle_a != rectangle_b:
		winner = "A" if rectangle_a > rectangle_b else "B"
	elif triangle_a != triangle_b:
		winner = "A" if triangle_a > triangle_b else "B"
	else:
		winner = "D"

	print(winner)
	
