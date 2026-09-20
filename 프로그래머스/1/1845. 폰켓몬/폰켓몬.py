def solution(nums):
    answer = 0
    
    typeCount = len(set(nums))
    selectCount = len(nums) // 2
    
    answer = min(typeCount, selectCount)
    
    return answer