#!/bin/bash

# Create the directory if it doesn't exist
mkdir -p public/images/mortgage-calculator

# Copy the images from the Website images directory to the mortgage-calculator directory
cp "./public/images/Website images/Xnapper-2025-02-26-17.28.09.png" public/images/mortgage-calculator/mortgage-calculator-1.png
cp "./public/images/Website images/Xnapper-2025-02-26-17.28.48.png" public/images/mortgage-calculator/mortgage-calculator-2.png
cp "./public/images/Website images/Xnapper-2025-02-26-17.30.45.png" public/images/mortgage-calculator/mortgage-calculator-3.png

echo "Mortgage calculator images have been copied to public/images/mortgage-calculator/" 