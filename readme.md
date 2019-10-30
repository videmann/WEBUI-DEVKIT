<h1>WEBUI-DEVKIT</h1>
<p>Web User Interface Developer Kit based on Gulp</p>

<p><strong>WEBUI-DEVKIT
</strong> - lightweight startup HTML5 template with <strong>Gulp 4</strong>, <strong>Sass</strong>, <strong>Browsersync</strong>, <strong>Autoprefixer</strong>, <strong>Uglify-ES</strong>, <strong>Clean-CSS</strong>, <strong>Rsync</strong>, <strong>CSS Reboot</strong> (Bootstrap reboot). It uses best practices for <strong>responsive images</strong> optimizing and contains a <strong>.htaccess</strong> file for resources caching (images, fonts, HTML, CSS, JS and other content types).</p>

<h2>How to use</h2>

<pre>git clone https://github.com/videmann/WEBUI-DEVKIT</pre>

<ol>
	<li>Clone <strong>WEBUI-DEVKIT</strong> from GitHub</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run: <strong>gulp</strong></li>
</ol>

<h2>Main Gulp tasks:</h2>

<ul>
	<li><strong title="gulp task"><em>gulp</em></strong>: run default gulp task ('img', 'styles', 'scripts', 'browser-sync', 'watch')</li>
	<li><strong title="cleanimg task"><em>cleanimg</em></strong>: Clean @*x responsive IMG's</li>
	<li><strong title="rsync task"><em>rsync</em></strong>: project deployment via <strong>RSYNC</strong></li>
</ul>

<h2>Basic rules</h2>

<h2>Included features</h2>

<ol>
	<li><a href="https://getbootstrap.com/docs/4.0/content/reboot/">bootstrap-reboot.scss</a> - Bootstrap Reboot CSS collection</li>
	<li>
		<a href="https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints">_breakpoints.scss</a> - Bootstrap Breakpoints mixin</li>
</ol>

<h2>Lazy loading images</h2>

<p>Lazy loading img & background images using intersection observer. Enabled by default.</p>

<p>Reference: <a href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#using_intersection_observer">Google Developers</a>.</p>

<p>1. Example of the <strong>usual &lt;img&gt; tag</strong>:</p>
<pre>&lt;img class="lazy" src="thumb.gif" data-src="img/@1x/real.jpg" data-srcset="img/@1x/real.jpg 1x, img/@2x/real.jpg 2x"&gt;</pre>

<p>2. <strong>Background image class</strong> changer example: <code>&lt;div class="lazy-background"&gt;</code> with added class ".visible" for styling.</p>

<p>3. <strong>Background image style</strong> attribute lazy loading example: <code>&lt;div data-bg="image.jpg"&gt;</code>.</p>

<h2>Caching</h2>

<p>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for htaccess resources caching.</p>
