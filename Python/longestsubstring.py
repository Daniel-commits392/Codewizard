def longest_substring(s):
    current = ''
    longest = 0

    for letter in s:
        if letter in current:
            current=''
        current+=letter
        if len(current)>longest:
                longest = len(current)
    return longest  

print(longest_substring('bbbb'))    
print(longest_substring('bjksdh')) 
print(longest_substring('fhurimbb'))     
