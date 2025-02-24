#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download project images
curl -L "https://images.unsplash.com/photo-1557821552-17105176677c?w=800" -o public/images/project1.jpg
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" -o public/images/project2.jpg
curl -L "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800" -o public/images/project3.jpg
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" -o public/images/project4.jpg 