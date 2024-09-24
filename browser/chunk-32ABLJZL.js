import{a as h}from"./chunk-6JTKFIGZ.js";import{a as p}from"./chunk-6FMLIRIY.js";import{Jb as C,L as d,Ma as g,Na as r,ha as t,ra as c,rb as l}from"./chunk-ZQZS5QUD.js";import{a,b as i,g as k}from"./chunk-P2VZOJAX.js";var f=k(C());var y={title:"Frontend Onboarding",mdFile:"./index.md",category:h,order:2},n=y;var u=[];var v={},m=v;var S=`<h1 id="frontend-onboarding" class="ngde">Frontend Onboarding<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#frontend-onboarding"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><h3 id="onboarding-process-for-new-frontend-developer" class="ngde">Onboarding Process for New Frontend Developer<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#onboarding-process-for-new-frontend-developer"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">Welcome to the team! We're excited to have you on board as a new Frontend Developer. This document will guide you through the onboarding process and help you set up your local development environment with the necessary tools and preconditions.</p><h4 id="pre-onboarding-checklist" class="ngde">Pre-Onboarding Checklist<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#pre-onboarding-checklist"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h4><p class="ngde">Before you start, ensure you have the following:</p><ul class="ngde"><li class="ngde">A computer with administrative access.</li><li class="ngde">Internet connection.</li><li class="ngde">An active RiskPhysics account.</li><li class="ngde">Access to the team's repository on Azure DevOps (request access if not already provided).</li></ul><h4 id="step-1-install-required-software" class="ngde">Step 1: Install Required Software<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#step-1-install-required-software"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h4><ol class="ngde"><li class="ngde"><p class="ngde"><strong class="ngde">Node.js and npm</strong></p><ul class="ngde"><li class="ngde">Download and install the latest LTS version of Node.js from <a href="https://nodejs.org/" class="ngde">nodejs.org</a>.</li><li class="ngde">Verify the installation by running the following commands in your terminal:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">node -v
</span><span class="line ngde">npm -v
</span></code></pre></li></ul></li><li class="ngde"><p class="ngde"><strong class="ngde">Git</strong></p><ul class="ngde"><li class="ngde">Download and install Git from <a href="https://git-scm.com/" class="ngde">git-scm.com</a>.</li><li class="ngde">Configure Git with your user information:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">git config --global user.name <span class="hljs-string ngde">"Your Name"</span>
</span><span class="line ngde">git config --global user.email <span class="hljs-string ngde">"your.email@example.com"</span>
</span></code></pre></li></ul></li><li class="ngde"><p class="ngde"><strong class="ngde">Angular CLI</strong></p><ul class="ngde"><li class="ngde">Install the Angular CLI globally:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">npm install -g @angular/cli
</span></code></pre></li><li class="ngde">Verify the installation:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">ng version
</span></code></pre></li></ul></li></ol><h4 id="step-2-set-up-visual-studio-code-vs-code" class="ngde">Step 2: Set Up Visual Studio Code (VS Code)<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#step-2-set-up-visual-studio-code-vs-code"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h4><ol class="ngde"><li class="ngde"><p class="ngde"><strong class="ngde">Download and Install VS Code</strong></p><ul class="ngde"><li class="ngde">Download and install VS Code from <a href="https://code.visualstudio.com/" class="ngde">code.visualstudio.com</a>.</li></ul></li><li class="ngde"><p class="ngde"><strong class="ngde">Install Required Extensions</strong></p><ul class="ngde"><li class="ngde">Launch VS Code and install the following extensions:<ul class="ngde"><li class="ngde">Angular Snippets: <code class="ngde">Angular Snippets</code></li><li class="ngde">Angular Language Service: <code class="ngde">Angular Language Service</code></li><li class="ngde">Auto Close Tag: <code class="ngde">Auto Close Tag</code></li><li class="ngde">Auto Comment Blocks: <code class="ngde">Auto Comment Blocks</code></li><li class="ngde">Better Comments: <code class="ngde">Better Comments</code></li><li class="ngde">GitHub Copilot: <code class="ngde">GitHub Copilot</code></li><li class="ngde">GitHub Copilot Chat: <code class="ngde">GitHub Copilot Chat</code></li><li class="ngde">Auto Rename Tag: <code class="ngde">Auto Rename Tag</code></li><li class="ngde">Code Spell Checker: <code class="ngde">Code Spell Checker</code></li><li class="ngde">ESLint: <code class="ngde">ESLint</code></li><li class="ngde">Git Graph: <code class="ngde">Git Graph</code></li><li class="ngde">CSS Peek: <code class="ngde">CSS Peek</code></li><li class="ngde">Nx Console: <code class="ngde">Nx Console</code></li><li class="ngde">npm Dependency Links: <code class="ngde">npm Dependency Links</code></li></ul></li></ul></li></ol><h4 id="step-3-getting-started" class="ngde">Step 3: Getting Started<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#step-3-getting-started"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h4><ol class="ngde"><li class="ngde"><strong class="ngde">Clone the repository</strong>:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">git <span class="hljs-built_in ngde">clone</span> https://rp@dev.azure.com/rp/RiskPhysics/_git/rp-portal-shell
</span></code></pre></li><li class="ngde"><strong class="ngde">Install dependencies</strong>:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde"> npm install
</span></code></pre></li><li class="ngde"><strong class="ngde">Initialize git submodule</strong>:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde"> git submodule init
</span></code></pre></li><li class="ngde"><strong class="ngde">Update git submodule</strong>:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde"> git submodule update
</span></code></pre></li><li class="ngde"><strong class="ngde">Start the dev server</strong>:<pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">npm run start
</span></code></pre></li></ol><h4 id="step-4-additional-resources-and-support" class="ngde">Step 4: Additional Resources and Support<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#step-4-additional-resources-and-support"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h4><ol class="ngde"><li class="ngde"><p class="ngde"><strong class="ngde">Documentation</strong></p><ul class="ngde"><li class="ngde">Familiarize yourself with the project\u2019s documentation available in the repository\u2019s <a href="https://rp@dev.azure.com/rp/RiskPhysics/_git/rp-portal-shell" class="ngde">README.md file</a> or the project wiki.</li></ul></li><li class="ngde"><p class="ngde"><strong class="ngde">Team Communication</strong></p><ul class="ngde"><li class="ngde">Join the team\u2019s communication channels in Google Chat and introduce yourself.</li></ul></li><li class="ngde"><p class="ngde"><strong class="ngde">Mentorship and Support</strong></p><ul class="ngde"><li class="ngde">Feel free to reach out to your assigned mentor or any team member for help and guidance.</li></ul></li></ol><h4 id="conclusion" class="ngde">Conclusion<a title="Link to heading" class="ng-doc-header-link ngde" href="/onboarding-process/frontend-onboarding#conclusion"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h4><p class="ngde">You are now set up and ready to start contributing to the project. We look forward to seeing your great work and collaboration. Welcome to the team!</p><p class="ngde">If you have any questions or run into any issues, do not hesitate to ask for help. Happy coding!</p>`,j=(()=>{let e=class e extends l{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=S,this.page=n,this.demoAssets=m}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-page-onboarding-process-frontend-onboarding"]],standalone:!0,features:[g([{provide:l,useExisting:e},u,n.providers??[]]),t,r],decls:1,vars:0,template:function(o,w){o&1&&c(0,"ng-doc-page")},dependencies:[p],encapsulation:2,changeDetection:0});let s=e;return s})(),A=[i(a({},(0,f.isRoute)(n.route)?n.route:{}),{path:"",component:j,title:"Frontend Onboarding"})],I=A;export{j as DynamicComponent,I as default};
