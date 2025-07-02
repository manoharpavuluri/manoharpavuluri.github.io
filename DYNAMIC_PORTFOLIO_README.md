# Dynamic Portfolio System

Your portfolio is now **fully dynamic**! 🎉 

## What's New

✅ **Automatic Repository Count**: The GitHub repository count updates automatically  
✅ **Dynamic Project Display**: Projects are automatically fetched and categorized from your GitHub  
✅ **Smart Categorization**: Repositories are automatically sorted into categories based on keywords  
✅ **Real-time Updates**: No more manual updates needed - just add repositories to GitHub  
✅ **Repository Statistics**: Shows stars and forks for each project  
✅ **Featured Projects**: Automatically highlights starred repositories  

## How It Works

The system uses the **GitHub API** to fetch your repositories and automatically:

1. **Fetches** all your public repositories
2. **Categorizes** them based on repository names and descriptions
3. **Updates** the repository count in statistics
4. **Populates** project cards with real data
5. **Shows** repository statistics (stars, forks)
6. **Highlights** featured projects

## Customization

### 1. Basic Configuration (`assets/js/portfolio-config.js`)

Edit the configuration file to customize:

```javascript
const PORTFOLIO_CONFIG = {
    // Change your GitHub username
    githubUsername: 'your-username',
    
    // Add/remove categories
    categories: {
        'your-category': {
            keywords: ['keyword1', 'keyword2'],
            icon: 'bi-icon-name',
            title: 'Your Category Title',
            description: 'Category description'
        }
    },
    
    // Control display settings
    display: {
        maxProjectsPerCategory: 8,
        showRepositoryStats: true,
        showFeaturedBadge: true
    },
    
    // Filter repositories
    filters: {
        excludeForks: false,
        excludeArchived: true,
        excludePrivate: true,
        minStars: 0,
        excludeRepos: ['repo-to-exclude']
    }
};
```

### 2. Adding New Categories

To add a new category:

1. **Add to configuration**:
```javascript
'new-category': {
    keywords: ['new', 'category', 'keywords'],
    icon: 'bi-new-icon',
    title: '🆕 New Category',
    description: 'Description of your new category'
}
```

2. **Add HTML section** in `index.html`:
```html
<section id="new-category" class="introduction" style="padding-top:0px">
    <div class="container">
        <div class="section-title">
            <h2>🆕 New Category</h2>
            <p>Description of your new category</p>
        </div>
        <div class="portfolio-grid">
            <!-- Dynamic content will be loaded here -->
            <div class="loading-placeholder" style="text-align: center; padding: 40px; color: #6c757d;">
                <i class="bi bi-arrow-clockwise" style="font-size: 2em; animation: spin 1s linear infinite;"></i>
                <p>Loading projects from GitHub...</p>
            </div>
        </div>
    </div>
</section>
```

### 3. Technology Stack Detection

Add new technologies to the `techStackMap` in the configuration:

```javascript
techStackMap: {
    'your-tech': 'Your Technology',
    'another-tech': 'Another Technology'
}
```

## Repository Naming Conventions

For best automatic categorization, use these prefixes:

- **AI/LLM Projects**: `ai-` or `ai_` (e.g., `ai-langchain-project`)
- **Machine Learning**: `ml-` (e.g., `ml-image-classification`)
- **Deep Learning**: `dl-` (e.g., `dl-cnn-project`)
- **Data Engineering**: `de-` (e.g., `de-snowflake-pipeline`)

## Features

### Automatic Categorization
- **Agentic AI**: Repositories with keywords like `langchain`, `llamaindex`, `ollama`, `huggingface`
- **Data Science & ML**: Repositories with keywords like `ml-`, `dl-`, `cnn`, `nlp`
- **Data Engineering**: Repositories with keywords like `de-`, `snowflake`, `aws`, `lambda`
- **Research**: Everything else or specific research keywords

### Smart Features
- **Repository Statistics**: Shows stars and forks
- **Featured Badges**: Highlights repositories with stars
- **Live Demo Links**: Automatically shows demo links if repository has homepage
- **Error Handling**: Graceful fallback if GitHub API is unavailable
- **Loading States**: Shows loading animation while fetching data

### Filtering Options
- Exclude forked repositories
- Exclude archived repositories
- Exclude private repositories
- Set minimum star requirements
- Exclude specific repositories

## Troubleshooting

### If projects don't load:
1. Check your GitHub username in `portfolio-config.js`
2. Ensure repositories are public
3. Check browser console for errors
4. Verify GitHub API rate limits

### If categorization is wrong:
1. Add more keywords to the category configuration
2. Use consistent repository naming conventions
3. Add detailed descriptions to your repositories

### If you want to exclude repositories:
Add them to the `excludeRepos` array in the configuration.

## Benefits

🎯 **Always Up-to-Date**: No manual maintenance required  
🚀 **Professional Look**: Dynamic content with loading states  
📊 **Real Statistics**: Actual GitHub data  
⚡ **Fast Loading**: Efficient API usage  
🔧 **Highly Customizable**: Easy to modify and extend  
📱 **Responsive**: Works on all devices  

## Next Steps

1. **Test the system** by visiting your portfolio
2. **Customize categories** if needed
3. **Add new repositories** to GitHub and watch them appear automatically
4. **Fine-tune keywords** for better categorization
5. **Update descriptions** in your GitHub repositories for better tech stack detection

Your portfolio will now automatically stay current with your GitHub activity! 🎉 