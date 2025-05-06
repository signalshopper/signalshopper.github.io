#!/usr/bin/env python3
import os
import re
import glob

# Directory containing the HTML files
messages_dir = 'messages'

# Get all HTML files in the messages directory
html_files = glob.glob(os.path.join(messages_dir, '*.html'))

# Pattern to match and remove
pattern = r'websites maintained by Texas High Frequency, LLC \(THF\)'

# Compile the pattern for better performance
compiled_pattern = re.compile(pattern, re.IGNORECASE)

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
    
    # Replace the pattern with an empty string
    modified_content = compiled_pattern.sub('websites', content)
    
    # If content was modified, write it back to the file
    if modified_content != content:
        with open(html_file, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        modified_files += 1
        print(f"Modified: {html_file}")
    
print(f"\nProcessed {total_files} files, modified {modified_files} files.")
