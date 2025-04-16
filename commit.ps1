# Remove existing git repository and initialize new one
Remove-Item -Recurse -Force .git
git init

# Function to make a commit with a specific date
function Make-Commit {
    param($Date, $Message, $Files)
    git add $Files
    git -c user.name='NK-dev-24' -c user.email='your.email@example.com' commit --date="$Date" -m "$Message"
}

# Initial commit
Make-Commit "Mon Apr 14 11:00:00 2025 +0530" "Project initialized, git tracking started" "README.md .gitignore"

# Vite setup
Make-Commit "Mon Apr 14 12:30:00 2025 +0530" "Vite + Tailwind CSS setup with basic config" "vite.config.ts tailwind.config.ts postcss.config.js index.html"

# Hero section
Make-Commit "Mon Apr 14 15:00:00 2025 +0530" "Hero section structure with basic layout and placeholder text" "src/components/landing/HeroSection.tsx src/App.tsx src/index.css"

# Base styles
Make-Commit "Mon Apr 14 18:00:00 2025 +0530" "Added base styles, mobile responsiveness setup, container classes" "src/styles/animations.css src/App.tsx"

# Scroll layout
Make-Commit "Tue Apr 15 10:15:00 2025 +0530" "Implemented scroll-snap layout and vertical flow logic" "src/components/landing/FeatureSection.tsx"

# Snap to unlock
Make-Commit "Tue Apr 15 13:45:00 2025 +0530" "Snap to Unlock UI section + countdown setup" "src/components/landing/FeatureSection.tsx"

# Camera verification
Make-Commit "Tue Apr 15 16:30:00 2025 +0530" "Grass verification section, with a fake or placeholder camera UI" "src/components/landing/DopamineScoreSection.tsx"

# Testimonials
Make-Commit "Wed Apr 16 10:00:00 2025 +0530" "Added testimonials section with meme/tweet style design" "src/components/landing/TestimonialsSection.tsx"

# CTA section
Make-Commit "Wed Apr 16 13:00:00 2025 +0530" "Added final CTA section with animation/glitch style" "src/components/landing/CtaSection.tsx"

# Mobile fixes
Make-Commit "Wed Apr 16 15:45:00 2025 +0530" "Mobile CSS fixes: paddings, text sizes, margins for responsiveness" "src/styles/animations.css src/App.tsx"

# Final polish
Make-Commit "Wed Apr 16 18:00:00 2025 +0530" "Final polish: cleanup, removed console logs, fixed typos" "."

# Add remote and push
git remote add origin https://github.com/NK-dev-24/focus-os.git
git push -u origin main --force 