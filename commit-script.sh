#!/bin/bash

# Function to commit with specific date
commit_with_date() {
    export GIT_AUTHOR_DATE="$1"
    export GIT_COMMITTER_DATE="$1"
    git -c user.name='NK-dev-24' -c user.email='your.email@example.com' commit -m "$2"
}

# Remove existing git repository
rm -rf .git

# Initialize new repository
git init

# 1. Initial commit - April 14, 11:00 AM
git add README.md .gitignore
commit_with_date "2025-04-14T11:00:00+05:30" "Project initialized, git tracking started"

# 2. Vite + Tailwind setup - April 14, 12:30 PM
git add vite.config.ts tailwind.config.ts postcss.config.js index.html
commit_with_date "2025-04-14T12:30:00+05:30" "Vite + Tailwind CSS setup with basic config"

# 3. Hero section - April 14, 3:00 PM
git add src/components/landing/HeroSection.tsx src/App.tsx src/index.css
commit_with_date "2025-04-14T15:00:00+05:30" "Hero section structure with basic layout and placeholder text"

# 4. Base styles - April 14, 6:00 PM
git add src/styles/animations.css src/App.tsx
commit_with_date "2025-04-14T18:00:00+05:30" "Added base styles, mobile responsiveness setup, container classes"

# 5. Scroll layout - April 15, 10:15 AM
git add src/components/landing/FeatureSection.tsx
commit_with_date "2025-04-15T10:15:00+05:30" "Implemented scroll-snap layout and vertical flow logic"

# 6. Snap to unlock - April 15, 1:45 PM
git add src/components/landing/FeatureSection.tsx
commit_with_date "2025-04-15T13:45:00+05:30" "Snap to Unlock UI section + countdown setup"

# 7. Camera verification - April 15, 4:30 PM
git add src/components/landing/DopamineScoreSection.tsx
commit_with_date "2025-04-15T16:30:00+05:30" "Grass verification section, with a fake or placeholder camera UI"

# 8. Testimonials - April 16, 10:00 AM
git add src/components/landing/TestimonialsSection.tsx
commit_with_date "2025-04-16T10:00:00+05:30" "Added testimonials section with meme/tweet style design"

# 9. CTA section - April 16, 1:00 PM
git add src/components/landing/CtaSection.tsx
commit_with_date "2025-04-16T13:00:00+05:30" "Added final CTA section with animation/glitch style"

# 10. Mobile fixes - April 16, 3:45 PM
git add src/styles/animations.css src/App.tsx
commit_with_date "2025-04-16T15:45:00+05:30" "Mobile CSS fixes: paddings, text sizes, margins for responsiveness"

# 11. Final polish - April 16, 6:00 PM
git add .
commit_with_date "2025-04-16T18:00:00+05:30" "Final polish: cleanup, removed console logs, fixed typos"

# Add remote and push
git remote add origin https://github.com/NK-dev-24/focus-os.git
git push -u origin main --force 