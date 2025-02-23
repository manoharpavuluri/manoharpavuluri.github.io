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
                <li><a href="index.html#python" class="nav-link scrollto"><span>Python</span></a></li>
                <li><a href="index.html#sql" class="nav-link scrollto"><span>SQL</span></a></li>
                <li><a href="index.html#cpp" class="nav-link scrollto"><span>C++</span></a></li>
            </ul>
        </nav><!-- .nav-menu -->
    </div>
</header><!-- End Header -->
`;

document.body.appendChild(template.content);
