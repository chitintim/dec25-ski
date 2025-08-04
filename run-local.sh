#!/bin/bash

echo "Starting La Tania 2025 site locally..."
echo "=================================="
echo ""

# Check if Jekyll is installed
if ! command -v jekyll &> /dev/null; then
    echo "Jekyll is not installed. Installing..."
    gem install bundler jekyll
fi

# Install dependencies if Gemfile.lock doesn't exist
if [ ! -f "Gemfile.lock" ]; then
    echo "Installing dependencies..."
    bundle install
fi

echo ""
echo "Starting Jekyll server..."
echo "Site will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop"
echo ""

# Run Jekyll
bundle exec jekyll serve --watch