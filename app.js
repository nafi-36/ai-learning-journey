const modules = [
    {
        id:1,
        title:"AI Fundamentals",
        duration:"Month 1",level:"Beginner",
        summary:"Understand what Artificial Intelligence is, where it came from, and how it is used in everyday life.",
        outcome:"Explain the core AI concepts and prepare a Python environment for further learning.",
        topics:[
            "Introduction to Artificial Intelligence",
            "History and evolution of AI",
            "Narrow AI, General AI, and the idea of Super AI",
            "AI vs. Machine Learning vs. Deep Learning",
            "How AI systems learn and make predictions",
            "Real-world AI applications"
        ],
        practice:[
            "Set up Python and Google Colab or Jupyter Notebook",
            "Write simple Python exercises: variables, conditions, loops, functions",
            "Explore AI tools and identify what makes them AI-powered","Build a simple rule-based chatbot"
        ],
        project:"Create a simple rule-based chatbot and write a short explanation of how it works.",
        resources:[
            "Google Machine Learning Crash Course",
            "Python for Everybody","3Blue1Brown: Neural Networks"
        ]
    },
    {
        id:2,
        title:"Machine Learning Fundamentals",
        duration:"Month 2",
        level:"Beginner → Intermediate",
        summary:"Learn how machines find patterns in data, make predictions, and how we measure model performance.",
        outcome:"Build and evaluate basic Machine Learning models using Python and Scikit-learn.",
        topics:[
            "What is Machine Learning?",
            "Supervised, Unsupervised, and Reinforcement Learning",
            "Classification and Regression",
            "Clustering algorithms",
            "Data collection, cleaning, and preprocessing",
            "Training, validation, and test datasets",
            "Accuracy, precision, recall, F1-score, and confusion matrix",
            "Overfitting and underfitting"
        ],
        practice:[
            "Explore a dataset with Pandas and NumPy",
            "Clean missing or inconsistent data",
            "Visualize data using Matplotlib",
            "Build a classification model with Scikit-learn",
            "Build a simple regression model",
            "Evaluate a model and explain its results"
        ],
        project:"Build a small prediction project (for example, student performance or house prices) and document the dataset, workflow, and evaluation.",
        resources:[
            "Kaggle Learn: Intro to Machine Learning",
            "Scikit-learn User Guide","StatQuest: Machine Learning"
        ]
    },
    {
        id:3,
        title:"Deep Learning & Neural Networks",
        duration:"Month 3",
        level:"Intermediate",
        summary:"Discover neural networks and how deep learning helps computers work with images, text, and other complex data.",
        outcome:"Understand basic neural network architectures and experiment with a small deep learning model.",
        topics:[
            "Introduction to Deep Learning",
            "Artificial Neural Networks (ANN)","Activation functions and loss functions",
            "Training, epochs, batches, and optimizers",
            "Convolutional Neural Networks (CNN)",
            "Recurrent Neural Networks (RNN) — concept and context",
            "Introduction to NLP and Computer Vision","Transfer learning and pretrained models"
        ],
        practice:[
            "Build a small neural network in TensorFlow/Keras or PyTorch",
            "Train an image classifier using a beginner dataset",
            "Experiment with a pretrained model",
            "Observe how changing epochs or learning rate affects results"
        ],
        project:"Create an image classification demo using a small dataset or a pretrained model. Use a cloud notebook if local hardware is limited.",
        resources:[
            "PyTorch Learn the Basics",
            "TensorFlow Tutorials",
            "Hugging Face Course"
        ]
    },
    {
        id:4,
        title:"Generative AI & Large Language Models",
        duration:"Month 4",
        level:"Intermediate",
        summary:"Explore generative models, LLMs, prompting, embeddings, RAG, and ways to integrate AI into applications.",
        outcome:"Build a basic application powered by an LLM and understand its main building blocks.",
        topics:[
            "What is Generative AI?",
            "Large Language Models (LLMs) and tokens",
            "Transformer architecture: high-level intuition",
            "Attention and embeddings",
            "Prompt engineering and structured outputs",
            "LLM APIs and model integration",
            "Retrieval-Augmented Generation (RAG)",
            "Fine-tuning vs. prompting",
            "Introduction to AI agents and tool use"
        ],
        practice:[
            "Compare answers from different LLMs using the same prompt",
            "Practice zero-shot, few-shot, and structured prompting",
            "Call an LLM API from Python","Create a simple chatbot interface",
            "Build a basic RAG prototype using a small collection of documents"
        ],
        project:"Build a document Q&A assistant that answers questions from a small set of your own learning notes. Include source references where possible.",
        resources:[
            "Hugging Face LLM Course",
            "DeepLearning.AI Short Courses",
            "OpenAI Platform Documentation"
        ]
    },
    {
        id:5,
        title:"AI Automation & Model Evaluation",
        duration:"Month 5",
        level:"Intermediate",
        summary:"Learn to connect AI with useful workflows and assess whether AI outputs are reliable, relevant, and safe.",
        outcome:"Create an automated AI workflow and a repeatable evaluation process for LLM responses.",
        topics:[
            "Workflow automation, APIs, and webhooks",
            "No-code and low-code automation concepts",
            "AI agents and workflow orchestration",
            "Introduction to LLM evaluation",
            "Test datasets, test cases, and evaluation criteria",
            "Factuality, relevance, coherence, and hallucinations",
            "Human evaluation vs. automated evaluation",
            "LLM-as-a-Judge: benefits and limitations",
            "Bias, safety, and responsible AI"
        ],
        practice:[
            "Build a workflow using n8n or Make",
            "Connect an AI model to an automation workflow",
            "Create a small test dataset with expected answers",
            "Compare outputs from two LLMs",
            "Score responses using a clear rubric",
            "Try an evaluation tool such as Promptfoo or Ragas"
        ],
        project:"Create a mini LLM evaluation report: define test cases, compare two models, score their responses, and explain limitations.",
        resources:[
            "n8n Documentation",
            "Promptfoo Documentation",
            "Ragas Documentation"
        ]
    },
    {
        id:6,
        title:"AI Projects & Deployment",
        duration:"Month 6",
        level:"Intermediate → Applied",
        summary:"Bring everything together by designing, building, testing, and sharing practical AI-powered projects.",
        outcome:"Complete a small portfolio of working AI projects and explain the decisions behind them.",
        topics:[
            "AI application architecture",
            "FastAPI and REST API fundamentals",
            "Connecting frontend, backend, and AI models",
            "Deployment concepts and environment variables",
            "Streamlit or Gradio for simple interfaces",
            "Docker fundamentals (optional)",
            "Monitoring, latency, cost, and reliability",
            "Privacy, security, and responsible AI"
        ],
        practice:[
            "Plan an AI application and draw its basic architecture",
            "Build a small API that calls an AI model",
            "Create a simple interface with Streamlit or Gradio",
            "Test edge cases and document limitations",
            "Deploy a lightweight demo using a suitable platform"
        ],
        project:"Choose one capstone: an AI learning assistant, a personal knowledge-base chatbot, or an AI workflow + evaluation dashboard. Focus on a working, documented solution — not training a large model from scratch.",
        resources:[
            "FastAPI Tutorial",
            "Streamlit Documentation",
            "Hugging Face Spaces"
        ]
    }
];

const defaultResources = [
    [
        "Python for Everybody",
        "https://www.py4e.com/",
        "Course",
        "1",
        "A beginner-friendly introduction to Python programming."
    ],
    [
        "Google Machine Learning Crash Course",
        "https://developers.google.com/machine-learning/crash-course",
        "Course",
        "1",
        "Free lessons and interactive exercises covering core ML concepts."
    ],
    [
        "Kaggle Learn",
        "https://www.kaggle.com/learn",
        "Practice",
        "2",
        "Short, hands-on lessons for Python, Pandas, and Machine Learning."
    ],
    [
        "Scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html",
        "Documentation",
        "2",
        "Official guide to classical machine learning workflows."
    ],
    [
        "3Blue1Brown — Neural Networks",
        "https://www.youtube.com/@3blue1brown",
        "Video",
        "3",
        "Visual explanations that build intuition for neural networks."
    ],
    [
        "PyTorch Tutorials",
        "https://pytorch.org/tutorials/",
        "Documentation",
        "3",
        "Official tutorials for learning and experimenting with PyTorch."
    ],
    [
        "Hugging Face Course",
        "https://huggingface.co/learn",
        "Course",
        "3",
        "Learn Transformers, datasets, tokenizers, and the open ML ecosystem."
    ],
    [
        "DeepLearning.AI Short Courses",
        "https://www.deeplearning.ai/short-courses/",
        "Course",
        "4",
        "Practical short courses on Generative AI and LLM applications."
    ],
    [
        "OpenAI Platform Docs",
        "https://platform.openai.com/docs/overview",
        "Documentation",
        "4",
        "Learn API concepts and how to integrate models into applications."
    ],
    [
        "n8n Documentation",
        "https://docs.n8n.io/",
        "Documentation",
        "5",
        "Build workflow automations and connect services."
    ],
    [
        "Promptfoo",
        "https://www.promptfoo.dev/docs/",
        "Tool",
        "5",
        "Test and evaluate LLM prompts and model outputs."
    ],
    [
        "Ragas",
        "https://docs.ragas.io/",
        "Tool",
        "5",
        "Framework for evaluating RAG and LLM applications."
    ],
    [
        "FastAPI Tutorial",
        "https://fastapi.tiangolo.com/tutorial/",
        "Documentation",
        "6",
        "Build APIs with Python."
    ],
    [
        "Streamlit Documentation",
        "https://docs.streamlit.io/",
        "Documentation",
        "6",
        "Build simple interactive data and AI applications."
    ],
    [
        "Hugging Face Spaces",
        "https://huggingface.co/docs/hub/spaces",
        "Tool",
        "6",
        "Host and share machine learning demos."
    ]
];

const achievements = [
    ["🌱","First steps","Complete your first lesson","lesson1"],
    ["📚","Curious learner","Complete 10 lessons","lessons10"],
    ["🧩","Foundation builder","Complete AI Fundamentals","module1"],
    ["📊","Data explorer","Complete Machine Learning","module2"],
    ["🧠","Neural thinker","Complete Deep Learning","module3"],
    ["✨","Generative creator","Complete Generative AI","module4"],
    ["⚙️","Workflow wizard","Complete AI Automation & Evaluation","module5"],
    ["🚀","AI project builder","Complete the final module","module6"],
    ["🏆","Journey complete","Complete all six modules","all"]
];

const state = {
    done: JSON.parse(localStorage.getItem("aij_done") || "{}"),
    resources: JSON.parse(localStorage.getItem("aij_resources") || "null") || defaultResources,
    notes: JSON.parse(localStorage.getItem("aij_notes") || "[]"),
    activeNote: null,
    setup: JSON.parse(localStorage.getItem("aij_setup") || "{}"),
    lastActive: localStorage.getItem("aij_last") || new Date().toDateString(),
    streak: Number(localStorage.getItem("aij_streak") || 0)
};

function save(){
    localStorage.setItem("aij_done",JSON.stringify(state.done));
    localStorage.setItem("aij_resources",JSON.stringify(state.resources));
    localStorage.setItem("aij_notes",JSON.stringify(state.notes));
    localStorage.setItem("aij_setup",JSON.stringify(state.setup));
    localStorage.setItem("aij_last",state.lastActive);
    localStorage.setItem("aij_streak",state.streak);
    document.getElementById("saveStatus").textContent="● Progress saved locally";
}

function lessonKey(m,g,i){
    return `${m}-${g}-${i}`
}

function counts(){
    let total = 0, done = 0; 
    modules.forEach(m => {
        ["topics", "practice"].forEach((g, gi) => m[g].forEach((_, i) => {total++;
        if(state.done[lessonKey(m.id, gi, i)]) done++ }))
    });
    return{total, done, modules: modules.filter(m => moduleDone(m.id)).length}
}

function moduleDone(id){
    const m = modules.find(x => x.id === id);
    return ["topics","practice"].every((g, gi) => m[g].every((_, i) => state.done[lessonKey(id, gi, i)]))
}

function pct(){
    let c = counts();
    return Math.round(c.done / c.total * 100)
}

function showToast(msg){
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2300)
}

function go(view){
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    let el = document.getElementById("view-" + view);
    if(el)el.classList.add("active");
    document.querySelectorAll(".nav-link").forEach(b => b.classList.toggle("active", b.dataset.view === view));
    const names = {home: "Overview", path: "Learning path", resources: "Resource library", devices: "Device guide", achievements: "Achievements", notes: "My notes", career: "Career preparation", module: "Module details"};
    document.getElementById("crumb").textContent = names[view] || "Learning";
    document.getElementById("sidebar").classList.remove("open");
    window.scrollTo({top: 0, behavior: "smooth"});
    if(view === "home") renderHome();
    if(view === "path") renderPath();
    if(view === "resources") renderResources();
    if(view === "achievements") renderAchievements();
    if(view === "notes") renderNotes();
    if(view === "devices") renderSetup();
}

document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => go(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
document.getElementById("menuBtn").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));

function renderHome(){
    let c = counts(), p = pct();
    document.getElementById("overallStat").textContent = p + "%"; 
    document.getElementById("completedText").textContent = c.modules + " of 6 modules completed";
    document.getElementById("lessonsStat").textContent = c.done;
    document.getElementById("streakStat").textContent = state.streak + " days";
    let ring = document.getElementById("miniRing");
    ring.style.background = `conic-gradient(var(--purple) ${p * 3.6} deg, #eeeaf7 0deg)`;
    ring.querySelector("span").textContent = p + "%";
    let next = modules.find(m => !moduleDone(m.id)) || modules[5];
    let doneCount = ["topics", "practice"].reduce((a, g, gi) => a + next[g].filter((_, i) => state.done[lessonKey(next.id, gi, i)]).length,0);
    let total = next.topics.length + next.practice.length;
    document.getElementById("continueCard").innerHTML = `<div class="module-number">0${next.id}</div><div class="continue-info"><small>${next.duration.toUpperCase()} · ${next.level.toUpperCase()}</small><strong>${next.title}</strong><p>${doneCount} of ${total} learning activities completed</p></div><button class="primary-btn" onclick="openModule(${next.id})">${doneCount?"Continue":"Start module"} <span>→</span></button>`;
    document.getElementById("journeyStrip").innerHTML = modules.map(m => `<div class="journey-step ${moduleDone(m.id)? "done" : ""}"><div class="step-circle">${moduleDone(m.id)? "✓" : "0" + m.id}</div><strong>${m.title}</strong><small>${moduleDone(m.id)? "Completed" : m.duration}</small></div>`).join("");}

function renderPath(){
    let c=counts(),p=pct();
    document.getElementById("pathPercent").textContent = p + "%";
    document.getElementById("pathBar").style.width = p + "%";
    document.getElementById("moduleList").innerHTML = modules.map(m => {
        let total = m.topics.length+m.practice.length,
        done = ["topics", "practice"].reduce((a, g, gi) => a + m[g].filter((_, i) => state.done[lessonKey(m.id, gi, i)]).length, 0),
        isDone = moduleDone(m.id);
        return `<article class="module-card"><div class="module-number">0${m.id}</div><div><h3>${m.title}<span class="status-pill ${isDone? "done" : ""}">${isDone? "COMPLETED" : done? "IN PROGRESS" : "NOT STARTED"}</span></h3><p>${m.summary}</p><div class="module-meta"><span>◷ ${m.duration}</span><span>☷ ${total} activities</span><span>✧ ${m.level}</span></div></div><button class="primary-btn" onclick="openModule(${m.id})">${isDone? "Review" : "Open module"} →</button></article>`
    }).join("")
}

function openModule(id){
    const m = modules.find(x => x.id === id);
    go("module");
    let groups = [
        ["topics","Learn the concepts"],
        ["practice","Hands-on practice"]
    ];
    let html = groups.map(([g, title], gi) => `<div class="lesson-group"><h4>${gi === 0? "01" : "02"} · ${title}</h4>${m[g].map((item, i) => `<label class="check-row ${state.done[lessonKey(id, gi, i)]? "done" : ""}"><input type="checkbox" ${state.done[lessonKey(id, gi, i)]? "checked" : ""} onchange="toggleLesson(${id},${gi},${i},this.checked)"><span>${item}</span></label>`).join("")}</div>`).join("");
    let total = m.topics.length + m.practice.length,
    done = ["topics","practice"].reduce((a, g, gi) => a+m[g].filter((_, i) => state.done[lessonKey(id, gi, i)]).length, 0), 
    p = Math.round(done / total * 100);
    document.getElementById("moduleDetail").innerHTML = `<div class="module-hero"><div class="module-number">0${id}</div><div><div class="eyebrow">${m.duration.toUpperCase()} · ${m.level.toUpperCase()}</div><h1>${m.title}</h1><p>${m.summary}</p></div></div><div class="module-content-grid"><div class="content-panel"><h3>Learning checklist</h3><p class="section-desc">Tick an activity when you feel you've understood or completed it. You can revisit any lesson anytime.</p>${html}<div class="lesson-group"><h4>03 · Mini project</h4><div class="project-box">${m.project}</div></div></div><aside class="side-panel"><h3>Module progress</h3><strong>${p}% completed</strong><div class="progress-track"><i style="width:${p}%"></i></div><p>${done} of ${total} activities completed.</p><h3 style="margin-top:22px">Learning outcome</h3><p>${m.outcome}</p><h3 style="margin-top:20px">Suggested resources</h3><p>${m.resources.join("<br>")}</p><button class="primary-btn" onclick="finishModule(${id})">${moduleDone(id)? "Completed ✓" : "Complete module"} </button></aside></div>`
}

function toggleLesson(id, g, i, val){
    let key = lessonKey(id, g, i);
    if(val)state.done[key] = true;
    else delete state.done[key];
    save();
    openModule(id);
    renderHome();
    renderPath();
    renderAchievements()}

function finishModule(id){
    if(!moduleDone(id)){
        showToast("Complete all learning activities first ✨");
        return
    }
    showCelebration(id)
}

function showCelebration(id){
    let m = modules[id - 1];
    document.getElementById("celebrateText").textContent = `You've completed ${m.title}. Take a moment to appreciate how far you've come!`;
    document.getElementById("celebration").classList.add("show");
    renderAchievements()
}

document.getElementById("celebrateClose").addEventListener("click", () => {
    document.getElementById("celebration").classList.remove("show");
    go("path")
});

function renderResources(){
    let f = document.getElementById("resourceFilter").value,
    s = document.getElementById("resourceSearch").value.toLowerCase();
    let arr = state.resources.filter(r => (f === "all" || r[2] === f) && r.join(" ").toLowerCase().includes(s));
    document.getElementById("resourceGrid").innerHTML = arr.length? arr.map(r => `<article class="resource-card"><span class="resource-type">${r[2]}</span><h3>${escapeHtml(r[0])}</h3><p>${escapeHtml(r[4] || "A resource to support your learning journey.")}</p><span class="resource-module">${r[3] === "all"? "General" : `Module ${r[3]}`}</span><a href="${safeUrl(r[1])}" target="_blank" rel="noopener noreferrer">Open resource ↗</a></article>`).join(""):`<p class="section-desc">No resources found. Try another search or category.</p>`;
    let sel = document.getElementById("resModule");
    if(sel.options.length === 1) modules.forEach(m => sel.add(new Option(`Module ${m.id} — ${m.title}`, m.id)))
}

document.getElementById("resourceSearch").addEventListener("input",renderResources);
document.getElementById("resourceFilter").addEventListener("change",renderResources);
document.getElementById("resourceForm").addEventListener("submit", e => {e.preventDefault();
    let title = document.getElementById("resTitle").value.trim(), 
    url = document.getElementById("resUrl").value.trim();
    try{
        new URL(url)
    }catch{
        return showToast("Please enter a valid URL.")
    }
    state.resources.unshift([title,url,document.getElementById("resCategory").value,
        document.getElementById("resModule").value,document.getElementById("resDescription").value.trim()]
    );
    save();
    e.target.reset();
    renderResources();
    showToast("Resource added to your library ✨")
});

function renderSetup(){
    let items = [
        "Install Python 3 (or use Google Colab in your browser)",
        "Create a Google account for Colab and other learning tools",
        "Install VS Code (optional but recommended)",
        "Create a GitHub account to save projects",
        "Set up a Python environment using venv or conda",
        "Install Git for version control",
        "Bookmark Kaggle and Hugging Face",
        "Check available storage and internet connection"
    ];
    document.getElementById("setupChecklist").innerHTML = items.map((x, i) => `<label><input type="checkbox" ${state.setup[i]? "checked" : ""} onchange="toggleSetup(${i},this.checked)"><span>${x}</span></label>`).join("")
}

function toggleSetup(i, v){
    state.setup[i] = v;
    save()
}

function renderAchievements(){
    let c = counts(),
    lesson = c.done;
    let unlocked = achievements.map(a => {
        let ok = false;
        if(a[3] === "lesson1") ok = lesson >= 1;
        else if(a[3] === "lessons10") ok = lesson >= 10;
        else if(a[3] === "all") ok = c.modules === 6;
        else ok = moduleDone(Number(a[3].replace("module", "")));
        return {...a,ok}
    });
    document.getElementById("achievementCount").textContent = `${unlocked.filter(a => a.ok).length} of ${achievements.length} achievements unlocked`;
    document.getElementById("achievementGrid").innerHTML = unlocked.map(a => `<article class="achievement-card ${a.ok? "unlocked" : ""}"><div class="achievement-emoji">${a[0]}</div><h3>${a[1]}</h3><p>${a[2]}</p><small>${a.ok? "✓ UNLOCKED" : "· LOCKED"}</small></article>`).join("")
}

function renderNotes(){
    let list = document.getElementById("notesList");
    list.innerHTML = state.notes.length ? state.notes.map(n => `<div class="note-item ${n.id === state.activeNote? "active" : ""}" onclick="selectNote('${n.id}')"><strong>${escapeHtml(n.title||"Untitled note")}</strong><small>${new Date(n.updated).toLocaleDateString()}</small></div>`).join("") : `<p class="section-desc">No notes yet. Create your first one!</p>`;
    let note = state.notes.find(n => n.id === state.activeNote);
    document.getElementById("noteTitle").value = note?.title || "";
    document.getElementById("noteBody").value = note?.body || "";
    document.getElementById("deleteNote").style.visibility = note? "visible" : "hidden"
}

function selectNote(id){
    state.activeNote = id;renderNotes()
}

document.getElementById("newNote").addEventListener("click", () => {
    let n = {id: Date.now().toString(), title: "", body: "", updated: Date.now()};
    state.notes.unshift(n);
    state.activeNote = n.id;
    save();
    renderNotes();
    document.getElementById("noteTitle").focus()
});

function saveCurrentNote(){
    let n = state.notes.find(x => x.id === state.activeNote);
    if(!n) return;
    n.title = document.getElementById("noteTitle").value;
    n.body = document.getElementById("noteBody").value;
    n.updated = Date.now();
    save();
    document.getElementById("noteSaved").textContent = "Saved locally · just now";
    let active = document.querySelector(".note-item.active strong");
    if(active)active.textContent = n.title || "Untitled note"
}

document.getElementById("noteTitle").addEventListener("input", saveCurrentNote);
document.getElementById("noteBody").addEventListener("input", saveCurrentNote);
document.getElementById("deleteNote").addEventListener("click", () => {
    if(!state.activeNote)return;
    if(!confirm("Delete this note?")) return;
    state.notes = state.notes.filter(n => n.id !== state.activeNote);
    state.activeNote = state.notes[0]?.id || null;
    save();
    renderNotes()
});

function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({"&" : "&amp;", "<" : "&lt;", ">" : "&gt;", '"' : "&quot;", "'" : "&#39;"}[c]))
}

function safeUrl(s){
    try{
        let u = new URL(s);
        return ["http:", "https:"].includes(u.protocol)? u.href : "#"
    }catch{
        return "#"
    }
}

function updateStreak(){
    let today = new Date().toDateString(),
    last = state.lastActive;
    if(today !== last){
        let diff = (new Date(today) - new Date(last)) / 86400000;
        state.streak = diff === 1? state.streak + 1 : 1;
        state.lastActive = today;
        save()
    }
}

updateStreak();
renderHome();
renderPath();
renderResources();
renderAchievements();
renderNotes();
renderSetup();