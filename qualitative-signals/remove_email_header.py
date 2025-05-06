#!/usr/bin/env python3
import os
import re
import glob

# Directory containing the HTML files
messages_dir = 'messages'

# Get all HTML files in the messages directory
html_files = glob.glob(os.path.join(messages_dir, '*.html'))

# Patterns to match and remove
patterns = [
    r'<p><strong>From:</strong>\s*TS\s*Douglas\s*&lt;toddsdouglas@outlook\.com&gt;</p>',
    r'<div\s+style="[^"]*"><b>From:</b>\s*TS\s*Douglas\s*&lt;<a\s+href="mailto:toddsdouglas@outlook\.com">toddsdouglas@outlook\.com</a>&gt;</div>',
    r'<p\s+class="MsoNormal"><b><span[^>]*>From:</span></b><span[^>]*>\s*TS\s*Douglas\s*&lt;<a\s+href="mailto:toddsdouglas@outlook\.com">toddsdouglas@outlook\.com</a>&gt;'
]

# Compile the patterns for better performance
compiled_patterns = [re.compile(pattern, re.IGNORECASE) for pattern in patterns]

# Count of files processed and modified
total_files = 0
modified_files = 0

# Process each HTML file
for html_file in html_files:
    total_files += 1
    
    # Read the file content
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Original content length for comparison
    original_length = len(content)
    
    # Apply all patterns
    modified_content = content
    for pattern in compiled_patterns:
        modified_content = pattern.sub('', modified_content)
    
    # If content was modified, write it back to the file
    if len(modified_content) != original_length:
        with open(html_file, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        modified_files += 1
        print(f"Modified: {html_file}")
    
print(f"\nProcessed {total_files} files, modified {modified_files} files.")
