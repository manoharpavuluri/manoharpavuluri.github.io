const template = document.createElement('template');

template.innerHTML = `
<header id="header">
    <div class="d-flex flex-column">

        <div class="profile" style="height:40%;text-align-last:center;">
            <h1 class="text-light"><a href="index.html">Manohar Pavuluri</a></h1>
            <div class="social-links">
                
				<a href="https://www.linkedin.com/in/manoharpavuluri/" target="_blank"><img src="assets/img/linkedin_logo.png"></a>
				<a href="https://github.com/manoharpavuluri/" target="_blank"><img src="assets/img/github_logo.png"></a>
				<a href="https://www.hackerrank.com/manoharpavuluri/" target="_blank"><img src="assets/img/hackerrank_logo.png"></a>
				
            </div>
        </div>
		
		<div class="short-description">
			<p><span>Professional with expertise across diverse industries, skilled in leveraging people, processes, and technology to drive performance and efficiency. 
			Experienced in architecting data-driven solutions with Cloud, ML, Generative AI, and Advanced Analytics. Strong leadership, governance, and digital transformation experience.</span></p>
		</div>

        <nav id="navbar" class="nav-menu navbar">
            <ul>
                <li><a href="index.html" class="nav-link scrollto active"><span>Home</span></a></li>
                <li><a href="index.html#agentic-ai" class="nav-link scrollto"><span>🤖 Agentic AI</span></a></li>
                <li><a href="index.html#data-science-ml" class="nav-link scrollto"><span>📊 Data Science & ML</span></a></li>
                <li><a href="index.html#data-engineering" class="nav-link scrollto"><span>⚡ Data Engineering</span></a></li>
                <li><a href="index.html#additional-projects" class="nav-link scrollto"><span>🔬 Research</span></a></li>
                <li><a href="index.html#contact" class="nav-link scrollto"><span>📞 Contact</span></a></li>
            </ul>
        </nav><!-- .nav-menu -->
    </div>
</header><!-- End Header -->
`;

document.body.appendChild(template.content);
