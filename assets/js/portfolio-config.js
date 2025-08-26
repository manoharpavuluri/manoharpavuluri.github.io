// Portfolio Configuration
// Modify these settings to customize your dynamic portfolio

const PORTFOLIO_CONFIG = {
    // GitHub username
    githubUsername: 'manoharpavuluri',
    
    // Categories configuration
    categories: {
        'generative-ai': {
            keywords: ['agentic', 'langchain', 'llamaindex', 'ollama', 'gemma', 'huggingface', 'llm', 'ai'],
            icon: 'bi-robot',
            title: '🤖 Generative AI & LLM Solutions',
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
    
    // Industry keywords for automatic detection
    industryKeywords: {
        'finance': ['trading', 'finance', 'banking', 'investment', 'stock', 'market', 'portfolio', 'risk', 'derivatives'],
        'healthcare': ['healthcare', 'medical', 'health', 'patient', 'clinical', 'diagnosis', 'treatment', 'pharma'],
        'retail': ['retail', 'ecommerce', 'shopping', 'sales', 'customer', 'inventory', 'pricing', 'marketing'],
        'education': ['education', 'learning', 'academic', 'student', 'course', 'training', 'assessment'],
        'utilities': ['utility', 'energy', 'power', 'grid', 'infrastructure', 'smart-grid', 'metering'],
        'oil-gas': ['oil', 'gas', 'petroleum', 'drilling', 'exploration', 'upstream', 'downstream'],
        'renewables': ['renewable', 'solar', 'wind', 'green', 'sustainability', 'clean-energy', 'carbon'],
        'non-profit': ['nonprofit', 'charity', 'social', 'community', 'ngo', 'philanthropy'],
        'startup': ['startup', 'entrepreneur', 'innovation', 'disrupt', 'scale', 'growth'],
        'telecom': ['telecom', 'communication', 'network', 'mobile', '5g', 'wireless'],
        'manufacturing': ['manufacturing', 'production', 'quality', 'supply-chain', 'logistics'],
        'transportation': ['transport', 'logistics', 'fleet', 'delivery', 'shipping'],
        'insurance': ['insurance', 'claims', 'underwriting', 'actuarial', 'risk-assessment'],
        'real-estate': ['real-estate', 'property', 'housing', 'mortgage', 'construction']
    },
    
    // Dynamic icon mapping for technologies and project types
    iconMapping: {
        // AI/ML Technologies
        'ai': 'bi-robot',
        'llm': 'bi-robot',
        'langchain': 'bi-link-45deg',
        'llamaindex': 'bi-diagram-3',
        'ollama': 'bi-cpu',
        'huggingface': 'bi-emoji-smile',
        'transformers': 'bi-arrow-repeat',
        'nlp': 'bi-chat-quote',
        'sentiment': 'bi-heart',
        'classification': 'bi-tags',
        'cnn': 'bi-eye',
        'deep-learning': 'bi-layers',
        'machine-learning': 'bi-graph-up',
        'neural-network': 'bi-diagram-3',
        
        // Data Science
        'python': 'bi-code-slash',
        'jupyter': 'bi-journal-code',
        'pandas': 'bi-table',
        'numpy': 'bi-calculator',
        'matplotlib': 'bi-graph-up',
        'seaborn': 'bi-palette',
        'scikit': 'bi-gear',
        'tensorflow': 'bi-diagram-3',
        'pytorch': 'bi-lightning',
        
        // Data Engineering
        'data-engineering': 'bi-database',
        'snowflake': 'bi-snow',
        'aws': 'bi-cloud',
        'lambda': 'bi-lightning',
        'dynamodb': 'bi-database',
        'pipeline': 'bi-arrow-right',
        'etl': 'bi-arrow-repeat',
        'serverless': 'bi-cloud-check',
        
        // Web & Development
        'web': 'bi-globe',
        'html': 'bi-file-earmark-code',
        'css': 'bi-palette',
        'javascript': 'bi-file-earmark-code',
        'react': 'bi-box',
        'node': 'bi-diagram-3',
        
        // Database & Storage
        'sql': 'bi-database',
        'mysql': 'bi-database',
        'postgresql': 'bi-database',
        'mongodb': 'bi-database',
        'vector': 'bi-collection',
        
        // Cloud & Infrastructure
        'cloud': 'bi-cloud',
        'docker': 'bi-box',
        'kubernetes': 'bi-gear',
        'terraform': 'bi-tools',
        
        // Analysis & Visualization
        'analysis': 'bi-graph-up',
        'visualization': 'bi-bar-chart',
        'forecasting': 'bi-calendar',
        'prediction': 'bi-graph-up-arrow',
        'regression': 'bi-graph-up',
        'clustering': 'bi-collection',
        
        // Research & Specialized
        'research': 'bi-search',
        'insurance': 'bi-shield-check',
        'time-series': 'bi-clock',
        'possibilities': 'bi-lightbulb',
        'scraper': 'bi-download',
        'api': 'bi-plug',
        
        // Default icons for categories
        'default': {
            'generative-ai': 'bi-robot',
            'data-science-ml': 'bi-graph-up',
            'data-engineering': 'bi-database',
            'research': 'bi-search'
        }
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
