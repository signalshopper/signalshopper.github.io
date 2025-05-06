#!/usr/bin/env python3
import os
import re
import glob
from bs4 import BeautifulSoup

# Directory containing the HTML files
messages_dir = 'messages'

# Get all HTML files in the messages directory
html_files = glob.glob(os.path.join(messages_dir, '*.html'))

# Pattern to match in filenames and titles
pattern = r'THF\'s'
replacement = 'SignalShopper\'s'

# Count of files processed and modified
total_files = 0
renamed_files = 0

# Process each HTML file
for html_file in html_files:
    total_files += 1
    
    # Get the new filename
    filename = os.path.basename(html_file)
    new_filename = re.sub(pattern, replacement, filename)
    new_filepath = os.path.join(messages_dir, new_filename)
    
    # Read the file content
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Parse the HTML content
    soup = BeautifulSoup(content, 'html.parser')
    
    # Update title tag
    title_tag = soup.find('title')
    if title_tag and 'THF' in title_tag.text:
        title_tag.string = title_tag.text.replace('THF\'s', 'SignalShopper\'s')
    
    # Update h1 tag
    h1_tag = soup.find('h1')
    if h1_tag and 'THF' in h1_tag.text:
        h1_tag.string = h1_tag.text.replace('THF\'s', 'SignalShopper\'s')
    
    # Update any other instances of THF in the content
    for tag in soup.find_all(string=re.compile(r'\bTHF\b')):
        tag.replace_with(tag.replace('THF', 'SignalShopper'))
    
    # Write the updated content back to the file
    with open(html_file, 'w', encoding='utf-8') as file:
        file.write(str(soup))
    
    # Rename the file
    if filename != new_filename:
        os.rename(html_file, new_filepath)
        renamed_files += 1
        print(f"Renamed: {filename} -> {new_filename}")
    
print(f"\nProcessed {total_files} files, renamed {renamed_files} files.")
