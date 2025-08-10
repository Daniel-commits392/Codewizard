def longest_substring(s):
    current = ''
    longest = 0

    for letter in s:
        if letter in current:
            
