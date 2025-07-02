// Portfolio Configuration
// Modify these settings to customize your dynamic portfolio

const PORTFOLIO_CONFIG = {
    // GitHub username
    githubUsername: 'manoharpavuluri',
    
    // Categories configuration
    categories: {
        'agentic-ai': {
            keywords: ['agentic', 'langchain', 'llamaindex', 'ollama', 'gemma', 'huggingface', 'llm', 'ai'],
            icon: 'bi-robot',
            title: '🤖 Agentic AI & LLM Solutions',
            description: 'Exploring the cutting-edge world of autonomous AI agents and Large Language Models.'
        },
        'data-science-ml': {
            keywords: ['ml-', 'dl-', 'machine-learning', 'deep-learning', 'cnn', 'nlp', 'sentiment', 'prediction', 'classification'],
            icon: 'bi-tags',
            title: '📊 Data Science & Machine Learning',
            description: 'Comprehensive machine learning solutions spanning NLP, computer vision, and predictive analytics.'
        },
        'data-engineering': {
            keywords: ['de-', 'snowflake', 'aws', 'lambda', 'dynamodb', 'data-engineering', 'pipeline', 'etl'],
            icon: 'bi-snow',
            title: '⚡ Data Engineering & Cloud Solutions',
            description: 'Scalable data engineering solutions leveraging modern cloud technologies.'
        },
        'research': {
            keywords: ['research', 'forecasting', 'time-series', 'insurance', 'sql', 'possibilities'],
            icon: 'bi-shield-check',
            title: '🔬 Research & Specialized Projects',
            description: 'Cutting-edge research projects and specialized applications showcasing advanced techniques.'
        }
    },
    
    // Technology stack mapping
    techStackMap: {
        'python': 'Python',
        'jupyter': 'Jupyter',
        'tensorflow': 'TensorFlow',
        'pytorch': 'PyTorch',
        'scikit': 'Scikit-learn',
        'pandas': 'Pandas',
        'numpy': 'NumPy',
        'matplotlib': 'Matplotlib',
        'seaborn': 'Seaborn',
        'snowflake': 'Snowflake',
        'aws': 'AWS',
        'lambda': 'AWS Lambda',
        'dynamodb': 'DynamoDB',
        'langchain': 'LangChain',
        'llamaindex': 'LlamaIndex',
        'ollama': 'Ollama',
        'huggingface': 'HuggingFace',
        'transformers': 'Transformers',
        'nlp': 'NLP',
        'cnn': 'CNN',
        'deep-learning': 'Deep Learning',
        'machine-learning': 'Machine Learning',
        'data-engineering': 'Data Engineering',
        'sql': 'SQL',
        'rag': 'RAG',
        'vector': 'Vector Databases',
        'serverless': 'Serverless',
        'cloud': 'Cloud Solutions',
        'ai': 'AI',
        'ml': 'ML',
        'dl': 'Deep Learning'
    },
    
    // Display settings
    display: {
        maxProjectsPerCategory: 8, // Maximum projects to show per category
        showRepositoryStats: true, // Show stars and forks
        showFeaturedBadge: true,   // Show featured badge for starred repos
        defaultTechStack: 'Python • AI/ML' // Default tech stack if none detected
    },
    
    // Repository filtering
    filters: {
        excludeForks: false,        // Exclude forked repositories
        excludeArchived: true,      // Exclude archived repositories
        excludePrivate: true,       // Exclude private repositories
        minStars: 0,               // Minimum stars to show repository
        excludeRepos: [            // Repositories to exclude
            'manoharpavuluri.github.io', // Exclude this portfolio repo
            'README',
            'test',
            'demo'
        ]
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 