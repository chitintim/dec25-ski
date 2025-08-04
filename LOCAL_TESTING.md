# How to Test the Site Locally

The site uses Jekyll, which needs to process the files before viewing. Opening index.html directly won't work because of the Jekyll templating.

## Quick Test Options:

### Option 1: Using Jekyll (Recommended)
```bash
# Install Jekyll if you haven't already
gem install bundler jekyll

# In the project directory, run:
jekyll serve

# Visit http://localhost:4000 in your browser
```

### Option 2: Using Python (Simpler)
```bash
# In the project directory, run:
python -m http.server 8000

# Visit http://localhost:8000 in your browser
# Note: Jekyll features won't work, but you'll see the basic layout
```

### Option 3: Push to GitHub
1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in Settings
4. Your site will be live at https://[username].github.io/[repo-name]

## Why it looks messy when opened directly:
- The `{{ }}` tags are Jekyll template syntax
- They get processed when Jekyll builds the site
- Without Jekyll, you see the raw template code

## For GitHub Pages:
Once pushed to GitHub with Pages enabled, the site will automatically build and display properly!