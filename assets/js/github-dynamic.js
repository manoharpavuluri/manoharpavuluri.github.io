// GitHub Dynamic Portfolio Updater
// This script fetches repositories from GitHub API and updates the portfolio dynamically

class GitHubPortfolioUpdater {
    constructor(username) {
        this.username = username;
        this.githubApiUrl = `https://api.github.com/users/${username}/repos`;
        this.repositories = [];
        this.config = typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG : {
            categories: {},
            techStackMap: {},
            display: {},
            filters: {}
        };
        this.categories = this.config.categories || {};
    }

    async init() {
        try {
            await this.fetchRepositories();
            this.updateStatistics();
            this.updatePortfolioSections();
        } catch (error) {
            console.error('Error initializing portfolio updater:', error);
            this.showErrorMessage();
        }
    }

    showErrorMessage() {
        const loadingPlaceholders = document.querySelectorAll('.loading-placeholder');
        loadingPlaceholders.forEach(placeholder => {
            placeholder.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #dc3545;">
                    <i class="bi bi-exclamation-triangle" style="font-size: 2em;"></i>
                    <p>Unable to load projects from GitHub</p>
                    <p style="font-size: 0.9em; margin-top: 10px;">
                        <a href="https://github.com/${this.username}" target="_blank" style="color: #149ddd;">
                            View repositories on GitHub
                        </a>
                    </p>
                </div>
            `;
        });
    }

    async fetchRepositories() {
        try {
            const response = await fetch(this.githubApiUrl);
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            this.repositories = await response.json();
            
            // Apply filters
            this.repositories = this.repositories.filter(repo => {
                if (this.config.filters.excludeForks && repo.fork) return false;
                if (this.config.filters.excludeArchived && repo.archived) return false;
                if (this.config.filters.excludePrivate && repo.private) return false;
                if (repo.stargazers_count < this.config.filters.minStars) return false;
                if (this.config.filters.excludeRepos.includes(repo.name)) return false;
                return true;
            });
            
            // Sort repositories by stars, then by updated date
            this.repositories.sort((a, b) => {
                if (b.stargazers_count !== a.stargazers_count) {
                    return b.stargazers_count - a.stargazers_count;
                }
                return new Date(b.updated_at) - new Date(a.updated_at);
            });
            
            console.log(`Fetched ${this.repositories.length} repositories for ${this.username}`);
        } catch (error) {
            console.error('Error fetching repositories:', error);
            throw error;
        }
    }

    updateStatistics() {
        // Update repository count
        const repoCountElement = document.querySelector('.stat-item:nth-child(2) .stat-content h3');
        if (repoCountElement) {
            repoCountElement.textContent = `${this.repositories.length}+`;
        }

        // Calculate unique technologies
        const uniqueTechnologies = new Set();
        for (const repo of this.repositories) {
            const techStack = this.getTechStack(repo);
            const techs = techStack.split(' • ');
            techs.forEach(tech => uniqueTechnologies.add(tech.trim()));
        }
        
        // Update technologies count
        const techCountElement = document.querySelector('.stat-item:nth-child(3) .stat-content h3');
        if (techCountElement) {
            techCountElement.textContent = `${uniqueTechnologies.size}+`;
        }

        // Calculate industries based on repository topics and descriptions
        const industries = new Set();
        const industryKeywords = this.config.industryKeywords || {
            'finance': ['trading', 'finance', 'banking', 'investment', 'stock', 'market'],
            'healthcare': ['healthcare', 'medical', 'health', 'patient', 'clinical'],
            'retail': ['retail', 'ecommerce', 'shopping', 'sales', 'customer'],
            'education': ['education', 'learning', 'academic', 'student', 'course'],
            'utilities': ['utility', 'energy', 'power', 'grid', 'infrastructure'],
            'oil-gas': ['oil', 'gas', 'petroleum', 'drilling', 'exploration'],
            'renewables': ['renewable', 'solar', 'wind', 'green', 'sustainability'],
            'non-profit': ['nonprofit', 'charity', 'social', 'community'],
            'startup': ['startup', 'entrepreneur', 'innovation', 'disrupt'],
            'telecom': ['telecom', 'communication', 'network', 'mobile']
        };

        for (const repo of this.repositories) {
            const fullText = `${repo.name} ${repo.description || ''}`.toLowerCase();
            for (const [industry, keywords] of Object.entries(industryKeywords)) {
                if (keywords.some(keyword => fullText.includes(keyword))) {
                    industries.add(industry);
                }
            }
        }

        // Update industries count
        const industryCountElement = document.querySelector('.stat-item:nth-child(4) .stat-content h3');
        if (industryCountElement) {
            industryCountElement.textContent = `${industries.size}+`;
        }
    }

    categorizeRepository(repo) {
        const repoName = repo.name.toLowerCase();
        const description = (repo.description || '').toLowerCase();
        const fullText = `${repoName} ${description}`;

        // Check for exact matches first (higher priority)
        for (const [category, config] of Object.entries(this.categories)) {
            for (const keyword of config.keywords) {
                if (fullText.includes(keyword.toLowerCase())) {
                    return category;
                }
            }
        }

        // If no match found, try to categorize based on repository name patterns
        if (repoName.startsWith('ai-') || repoName.startsWith('ai_')) {
            return 'generative-ai';
        } else if (repoName.startsWith('ml-') || repoName.startsWith('dl-')) {
            return 'data-science-ml';
        } else if (repoName.startsWith('de-')) {
            return 'data-engineering';
        }

        return 'research'; // Default category
    }

    getTechStack(repo) {
        const techStackMap = this.config.techStackMap || {};
        const fullText = `${repo.name} ${repo.description || ''}`.toLowerCase();
        const detectedTech = [];

        for (const [tech, displayName] of Object.entries(techStackMap)) {
            if (fullText.includes(tech.toLowerCase())) {
                detectedTech.push(displayName);
            }
        }

        // Add some default tech based on category
        const category = this.categorizeRepository(repo);
        if (category === 'data-science-ml' && detectedTech.length === 0) {
            detectedTech.push('Python', 'Machine Learning');
        } else if (category === 'data-engineering' && detectedTech.length === 0) {
            detectedTech.push('Python', 'Data Engineering');
        } else if (category === 'generative-ai' && detectedTech.length === 0) {
            detectedTech.push('Python', 'AI');
        }

        return detectedTech.slice(0, 4).join(' • ') || (this.config.display.defaultTechStack || 'Python • AI/ML');
    }

    getDynamicIcon(repo, category) {
        const iconMapping = this.config.iconMapping || {};
        const fullText = `${repo.name} ${repo.description || ''}`.toLowerCase();
        
        // First, try to find a specific technology match
        for (const [tech, icon] of Object.entries(iconMapping)) {
            if (tech !== 'default' && fullText.includes(tech.toLowerCase())) {
                return icon;
            }
        }
        
        // If no specific match, try to match based on project type keywords
        const projectTypeKeywords = {
            'cnn': 'bi-eye',
            'sentiment': 'bi-heart',
            'nlp': 'bi-chat-quote',
            'forecasting': 'bi-calendar',
            'prediction': 'bi-graph-up-arrow',
            'regression': 'bi-graph-up',
            'clustering': 'bi-collection',
            'analysis': 'bi-graph-up',
            'visualization': 'bi-bar-chart',
            'scraper': 'bi-download',
            'api': 'bi-plug',
            'web': 'bi-globe',
            'neural': 'bi-diagram-3',
            'deep': 'bi-layers',
            'machine': 'bi-graph-up',
            'pipeline': 'bi-arrow-right',
            'etl': 'bi-arrow-repeat',
            'serverless': 'bi-cloud-check',
            'cloud': 'bi-cloud',
            'database': 'bi-database',
            'sql': 'bi-database',
            'research': 'bi-search',
            'insurance': 'bi-shield-check',
            'time': 'bi-clock',
            'possibilities': 'bi-lightbulb',
            'classification': 'bi-tags'
        };
        
        for (const [keyword, icon] of Object.entries(projectTypeKeywords)) {
            if (fullText.includes(keyword.toLowerCase())) {
                return icon;
            }
        }
        
        // Fallback to category default
        const defaultIcons = iconMapping.default || {};
        if (defaultIcons[category]) {
            return defaultIcons[category];
        }
        // Robust fallback: always return a generic icon if nothing else matches
        return 'bi-box';
    }

    async getReadmeSummary(repo) {
        try {
            const response = await fetch(`https://api.github.com/repos/${this.username}/${repo.name}/readme`);
            if (!response.ok) return null;
            const data = await response.json();
            if (!data.content) return null;
            // Decode base64
            const decoded = atob(data.content.replace(/\s/g, ''));
            // Extract first non-empty paragraph (skip badges, titles, etc.)
            const lines = decoded.split(/\r?\n/);
            let summary = '';
            for (let line of lines) {
                line = line.trim();
                if (line && !line.startsWith('![') && !line.startsWith('#')) {
                    summary = line;
                    break;
                }
            }
            // Fallback: first 200 chars if no paragraph found
            if (!summary && decoded.length > 0) {
                summary = decoded.substring(0, 200) + (decoded.length > 200 ? '...' : '');
            }
            return summary || null;
        } catch (e) {
            return null;
        }
    }

    async getProjectDescription(repo, category) {
        if (repo.description && repo.description.trim().length > 0) {
            return repo.description;
        }
        // Try to get README summary
        const readmeSummary = await this.getReadmeSummary(repo);
        if (readmeSummary) return readmeSummary;
        // Category-based fallback
        const categoryFallbacks = {
            'generative-ai': 'An innovative project in autonomous AI and large language models.',
            'data-science-ml': 'A data science or machine learning project with practical applications.',
            'data-engineering': 'A project focused on scalable data engineering and cloud solutions.',
            'research': 'A research-driven project exploring advanced concepts and techniques.'
        };
        return categoryFallbacks[category] || 'A project demonstrating modern software and data practices.';
    }

    async createProjectCardAsync(repo, category) {
        const config = this.categories[category];
        const techStack = this.getTechStack(repo);
        const dynamicIcon = this.getDynamicIcon(repo, category);
        const isFeatured = this.config.display.showFeaturedBadge && repo.stargazers_count > 0;
        const featuredClass = isFeatured ? 'featured' : '';
        const featuredBadge = isFeatured ? '<span class="featured-badge">⭐ Featured</span>' : '';
        let statsHtml = '';
        if (this.config.display.showRepositoryStats) {
            const stats = [];
            if (repo.stargazers_count > 0) {
                stats.push(`<span class="repo-stat"><i class="bi bi-star-fill"></i> ${repo.stargazers_count}</span>`);
            }
            if (repo.forks_count > 0) {
                stats.push(`<span class="repo-stat"><i class="bi bi-diagram-3"></i> ${repo.forks_count}</span>`);
            }
            statsHtml = stats.length > 0 ? `<div class="repo-stats">${stats.join(' ')}</div>` : '';
        }
        const description = await this.getProjectDescription(repo, category);
        return `
            <div class="portfolio-item ${featuredClass}">
                ${featuredBadge}
                <div class="portfolio-content">
                    <div class="project-icon">
                        <i class="${dynamicIcon}"></i>
                    </div>
                    <h3>${this.formatProjectTitle(repo.name)}</h3>
                    <p class="tech-stack">${techStack}</p>
                    <p>${description}</p>
                    ${statsHtml}
                    <div class="portfolio-links">
                        <a href="${repo.html_url}" target="_blank" class="github-link">
                            <i class="bi bi-github"></i> View Repository
                        </a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="github-link" style="margin-left: 10px;">
                            <i class="bi bi-link-45deg"></i> Live Demo
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    formatProjectTitle(name) {
        // Convert repository name to a more readable title
        return name
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/\b(ai|ml|dl|de|nlp|cnn|llm|rag|etl|aws|sql)\b/gi, (match) => match.toUpperCase());
    }

    async updatePortfolioSections() {
        // Group repositories by category
        const categorizedRepos = {};
        for (const repo of this.repositories) {
            const category = this.categorizeRepository(repo);
            if (!categorizedRepos[category]) {
                categorizedRepos[category] = [];
            }
            categorizedRepos[category].push(repo);
        }
        // Update each section
        for (const [category, repos] of Object.entries(categorizedRepos)) {
            const sectionId = category === 'research' ? 'additional-projects' : category;
            const section = document.getElementById(sectionId);
            if (section) {
                const portfolioGrid = section.querySelector('.portfolio-grid');
                if (portfolioGrid) {
                    // Clear existing content
                    portfolioGrid.innerHTML = '';
                    // Add new project cards asynchronously
                    for (const repo of repos) {
                        const cardHtml = await this.createProjectCardAsync(repo, category);
                        portfolioGrid.innerHTML += cardHtml;
                    }
                }
            }
        }
    }
}

// Initialize the portfolio updater when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const username = typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG.githubUsername : 'manoharpavuluri';
    const updater = new GitHubPortfolioUpdater(username);
    updater.init();
}); 
