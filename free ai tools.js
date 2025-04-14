const recommendedTools = ["ChatGPT", "Bard", "DALL·E", "RunwayML"];
const trendingTools = ["Midjourney", "Notion AI", "Copy.ai"];

function startQuiz() {
  const tool = prompt("What do you need AI help with? (e.g., writing, images, coding)");
  if (tool) {
    const match = recommendedTools.find(t => t.toLowerCase().includes(tool.toLowerCase())) || "ChatGPT";
    document.getElementById("recommendationList").innerHTML = `<li>You might like: <strong>${match}</strong></li>`;
  }
}

function submitTool() {
  const name = document.getElementById("toolName").value;
  if (name) {
    alert(`Thanks for submitting: ${name}`);
    document.getElementById("toolName").value = "";
  }
}

function populateTrending() {
  const trendingList = document.getElementById("trendingList");
  trendingTools.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    trendingList.appendChild(li);
  });
}

function loadNews() {
  const newsList = document.getElementById("newsFeed");
  const articles = [
    "How GPT-4 is Changing Education",
    "Top 10 AI Tools for Startups in 2025",
    "Understanding Diffusion Models in AI"
  ];
  articles.forEach(article => {
    const li = document.createElement("li");
    li.textContent = article;
    newsList.appendChild(li);
  });
}

// Initialize
window.onload = () => {
  populateTrending();
  loadNews();
};
function showWorkflow() {
    const step1 = document.getElementById("step1").value;
    const step2 = document.getElementById("step2").value;
    const step3 = document.getElementById("step3").value;
    document.getElementById("workflowResult").textContent =
      `Your workflow: ${step1} → ${step2} → ${step3}`;
  }
  function loadLeaderboard() {
    const leaderboard = [
      { name: "ChatGPT", votes: 520 },
      { name: "Midjourney", votes: 430 },
      { name: "Notion AI", votes: 390 }
    ];
    const list = document.getElementById("leaderboardList");
    leaderboard.forEach(tool => {
      const li = document.createElement("li");
      li.textContent = `${tool.name} – ${tool.votes} votes`;
      list.appendChild(li);
    });
  }
  window.onload = () => {
    populateTrending();
    loadNews();
    loadLeaderboard(); // Add this
  };
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  const allTools = [
    { name: "ChatGPT", free: true, useCase: "writing", type: "nocode" },
    { name: "HuggingFace", free: true, useCase: "code", type: "developer" },
    { name: "Notion AI", free: false, useCase: "writing", type: "nocode" },
    { name: "RunwayML", free: true, useCase: "design", type: "nocode" },
  ];
  
  function filterTools() {
    const showFree = document.getElementById("filterFree").checked;
    const useCase = document.getElementById("filterUseCase").value;
    const type = document.getElementById("filterType").value;
    const list = document.getElementById("filteredToolsList");
    list.innerHTML = "";
  
    const filtered = allTools.filter(tool => {
      return (!showFree || tool.free) &&
             (!useCase || tool.useCase === useCase) &&
             (!type || tool.type === type);
    });
  
    if (filtered.length === 0) {
      list.innerHTML = "<li>No tools match your filters.</li>";
      return;
    }
  
    filtered.forEach(tool => {
      const li = document.createElement("li");
      li.textContent = tool.name;
      list.appendChild(li);
    });
  }
  function autoDescribeTool(toolName) {
    const descriptions = {
      "ChatGPT": "A powerful language model for text generation.",
      "Notion AI": "An AI-powered writing assistant inside Notion.",
      "RunwayML": "AI video editing and generative design tool."
    };
    return descriptions[toolName] || "An AI tool that helps with creative tasks.";
  }
  function toggleCode(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
  async function generateImage() {
    const prompt = document.getElementById('imgPrompt').value;
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt, n: 1, size: "512x512" })
    });
    const data = await res.json();
    document.getElementById('aiImage').src = data.data[0].url;
  }
        
    