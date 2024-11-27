Regular expressions (regex) are patterns used to match character combinations in text. They're powerful tools for string searching, validation, and manipulation.

JavaScript:
```javascript
// Common regex patterns and their use:
const patterns = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  // Matches: user@example.com
  
  phone: /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/,
  // Matches: +1-555-123-4567 or (555)123-4567
  
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
  // Requires: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  
  username: /^[a-zA-Z0-9_-]{3,16}$/
  // Matches: 3-16 characters, letters, numbers, underscore, hyphen
}

// Usage example:
const isValidEmail = patterns.email.test("user@example.com"); // true
```

Python:
```python
import re

# Common regex patterns and their use
patterns = {
    # Email: user@example.com
    'email': r'^[\w\.-]+@[\w\.-]+\.\w{2,4}$',
    
    # Phone: +1-555-123-4567 or (555)123-4567
    'phone': r'^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$',
    
    # Password: 8+ chars, 1 upper, 1 lower, 1 number, 1 special 
    'password': r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$',
    
    # Username: 3-16 chars, letters, numbers, underscore, hyphen
    'username': r'^[a-zA-Z0-9_-]{3,16}$'
}

# Usage examples:
test_email = "user@example.com"
if re.match(patterns['email'], test_email):
    print("Valid email")

# Quick validation function
def validate(pattern_type, test_string):
    return bool(re.match(patterns[pattern_type], test_string))

# Example:
is_valid = validate('email', 'user@example.com')  # True
```

The main differences from JavaScript:
- Uses `r` prefix for raw strings
- Uses `re.match()` instead of `.test()`
- Pattern syntax is similar but Python uses raw strings
- Can be used with either `re.match()` or compiled patterns with `re.compile()`

```python
# Regex Quick Reference Cheatsheet

# Basic Patterns
. (dot)       # Any single character except newline
\w            # Word character [a-zA-Z0-9_]
\d            # Digit [0-9]
\s            # Whitespace (space, tab, newline)
\W \D \S      # NOT word, digit, whitespace

# Occurrences (Quantifiers)
*             # 0 or more (greedy)
+             # 1 or more (greedy)
?             # 0 or 1 (optional)
{3}           # Exactly 3
{2,4}         # 2 to 4 occurrences
{2,}          # 2 or more
*?            # 0 or more (lazy)
+?            # 1 or more (lazy)

# Position Anchors
^             # Start of string
$             # End of string
\b            # Word boundary
\B            # Not word boundary

# Character Classes
[abc]         # Any of a, b, or c
[^abc]        # NOT a, b, or c
[a-z]         # Any lowercase letter
[A-Z]         # Any uppercase letter
[0-9]         # Any digit

# Groups and References
(abc)         # Capture group
(?:abc)       # Non-capturing group
\1            # Back reference to group 1
(?=xyz)       # Positive lookahead
(?!xyz)       # Negative lookahead

# Common Examples
\d{3}-\d{2}-\d{4}   # SSN: 123-45-6789
^.{8,}$             # At least 8 characters
^[A-Z][a-z]*$       # Capitalized word
```
