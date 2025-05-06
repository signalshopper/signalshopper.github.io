#!/usr/bin/env python3
"""
Generate a word cloud from HTML files in the messages directory.
"""

import os
import re
from bs4 import BeautifulSoup
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from collections import Counter

# Directory containing the HTML files
messages_dir = "/Users/robertdouglas/_SYNC/github/signalshopper/signalshopper.github.io/qualitative-signals/messages"
output_dir = "/Users/robertdouglas/_SYNC/github/signalshopper/signalshopper.github.io/qualitative-signals"

# Common words to exclude (stopwords)
stopwords = set([
    "the", "and", "to", "of", "a", "in", "for", "is", "on", "that", "by", "this",
    "with", "i", "you", "it", "not", "or", "be", "are", "from", "at", "as", "your",
    "have", "more", "an", "was", "we", "will", "can", "all", "has", "but", "our",
    "one", "other", "would", "what", "so", "up", "out", "if", "about", "who", "get",
    "which", "go", "me", "when", "make", "like", "time", "no", "just", "him", "know",
    "take", "people", "into", "year", "good", "some", "could", "them", "see", "than",
    "now", "look", "only", "come", "its", "over", "think", "also", "back", "after",
    "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want",
    "because", "any", "these", "give", "day", "most", "us", "been", "had", "their",
    "very", "am", "pm", "est", "edt", "monday", "tuesday", "wednesday", "thursday",
    "friday", "january", "february", "march", "april", "may", "june", "july", "august",
    "september", "october", "november", "december", "thf", "premarket", "trading", "notes"
])

def extract_text_from_html(file_path):
    """Extract text content from an HTML file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Parse HTML
    soup = BeautifulSoup(content, 'html.parser')
    
    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.extract()
    
    # Get text
    text = soup.get_text()
    
    # Clean text
    lines = (line.strip() for line in text.splitlines())
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    text = ' '.join(chunk for chunk in chunks if chunk)
    
    return text

def generate_wordcloud():
    """Generate a word cloud from all HTML files."""
    all_text = ""
    
    # Process each HTML file
    for filename in os.listdir(messages_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(messages_dir, filename)
            all_text += " " + extract_text_from_html(file_path)
    
    # Clean text and remove stopwords
    words = re.findall(r'\b[a-zA-Z]{3,15}\b', all_text.lower())
    words = [word for word in words if word not in stopwords]
    
    # Count word frequencies
    word_freq = Counter(words)
    most_common = word_freq.most_common(100)
    
    # Generate word cloud
    wordcloud = WordCloud(
        width=1200, 
        height=800,
        background_color='#111827',  # Dark background to match site theme
        colormap='viridis',
        max_words=100,
        contour_width=0,
        contour_color='#3B82F6'
    ).generate_from_frequencies(dict(most_common))
    
    # Save the word cloud as an image
    plt.figure(figsize=(12, 8), facecolor='#111827')
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis("off")
    plt.tight_layout(pad=0)
    plt.savefig(os.path.join(output_dir, 'wordmap.png'), 
                facecolor='#111827', 
                bbox_inches='tight', 
                dpi=300)
    
    # Create an HTML file for the word cloud
    create_wordmap_html(most_common)
    
    print(f"Word cloud generated and saved to {output_dir}/wordmap.png")
    print(f"Word cloud HTML page created at {output_dir}/wordmap.html")

def create_wordmap_html(most_common):
    """Create an HTML page to display the word cloud."""
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignalShopper - Qualitative Signals Word Map</title>
    <!-- Import Google Fonts to match main site -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {{
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            background-color: #111827;
            color: #F3F4F6;
        }}
        h1 {{
            text-align: center;
            margin-bottom: 30px;
            color: white;
            font-weight: 700;
        }}
        p {{
            color: #9CA3AF;
            text-align: center;
            margin-bottom: 20px;
        }}
        .nav-links {{
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }}
        .nav-links a {{
            color: #3B82F6;
            text-decoration: none;
            font-weight: 500;
        }}
        .nav-links a:hover {{
            text-decoration: underline;
            color: #60A5FA;
        }}
        .wordmap-container {{
            text-align: center;
            margin-bottom: 40px;
        }}
        .wordmap-container img {{
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }}
        .word-list {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
            margin-top: 40px;
        }}
        .word-item {{
            background-color: #1F2937;
            padding: 10px;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
        }}
        .word-count {{
            color: #3B82F6;
            font-weight: 600;
        }}
        .back-link {{
            display: inline-block;
            margin-bottom: 20px;
            color: #3B82F6;
            font-weight: 500;
        }}
    </style>
</head>
<body>
    <a href="/" class="back-link">← Back to SignalShopper</a>
    <h1>SignalShopper Qualitative Signals Word Map</h1>
    <p>Visual representation of the most common terms in our qualitative trading signals</p>
    
    <div class="nav-links">
        <a href="index.html">Message Archive</a>
        <a href="wordmap.html">Word Map</a>
    </div>
    
    <div class="wordmap-container">
        <img src="wordmap.png" alt="Word Map of Qualitative Signals" />
    </div>
    
    <h2>Top 100 Most Common Terms</h2>
    <div class="word-list">
        {"".join(f'<div class="word-item"><span>{word}</span><span class="word-count">{count}</span></div>' for word, count in most_common)}
    </div>
</body>
</html>
"""
    
    with open(os.path.join(output_dir, 'wordmap.html'), 'w', encoding='utf-8') as file:
        file.write(html_content)

if __name__ == "__main__":
    generate_wordcloud()
