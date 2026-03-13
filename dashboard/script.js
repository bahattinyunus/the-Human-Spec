const bootLog = document.getElementById('boot-log');
const bootProgress = document.getElementById('boot-progress');
const bootScreen = document.getElementById('boot-screen');
const app = document.getElementById('app');
const currentLayerDisplay = document.getElementById('current-layer');
const docContainer = document.getElementById('doc-container');

const bootMessages = [
    "INITIALIZING CORE KERNEL...",
    "LOADING NEURONAL DATABASE...",
    "HANDSHAKE WITH AMYGDALA PROTOCOLS...",
    "SYNAPSE COHERENCE CHECK: 98.4%",
    "BYPASSING COGNITIVE FILTERS...",
    "SUCCESS. ACCESS GRANTED TO HOMO SAPIENS v2026.03",
    "STARTING SPECIFICATION VIEWER..."
];

const layerData = {
    "01_Hardware": {
        title: "01 Hardware Layer: Nöro-Psikoloji",
        subTopics: [
            { id: "Neuro_Transmitters", title: "Neuro-Transmitters", file: "01_Hardware/Neuro_Transmitters.md" },
            { id: "Brain_Regions", title: "Brain Regions", file: "01_Hardware/Brain_Regions.md" },
            { id: "Bio_Feedback", title: "Bio-Feedback", file: "01_Hardware/Bio_Feedback.md" }
        ],
        content: `
            <div class="spec-card">
                <h2>Sistem Fiziksel Katmanı</h2>
                <p>İşlemci (Beyin) ve veri yolu (Sinir Sistemi) analizi. Alt sistemleri seçerek detaylı teknik şartnameye ulaşın.</p>
                <div class="stat-grid">
                    <div class="stat-item"><span class="label">Voltage:</span> 70mV</div>
                    <div class="stat-item"><span class="label">Sync:</span> 40Hz</div>
                </div>
            </div>
        `
    },
    "02_Processing": {
        title: "02 Core Engine: Bilişsel Psikoloji",
        subTopics: [
            { id: "Attention_Filters", title: "Attention Filters", file: "02_Processing/Attention_Filters.md" },
            { id: "Memory_Management", title: "Memory Management", file: "02_Processing/Memory_Management.md" },
            { id: "Decision_Algorithms", title: "Decision Algorithms", file: "02_Processing/Decision_Algorithms.md" }
        ],
        content: `
            <div class="spec-card">
                <h2>Bilgi İşleme Algoritmaları</h2>
                <p>Veri nasıl içeri alınır ve nasıl saklanır?</p>
            </div>
        `
    },
    "03_Versions": {
        title: "03 Lifecycle Management: Gelişim Psikolojisi",
        subTopics: [
            { id: "Initialization", title: "Initialization", file: "03_Versions/Initialization.md" },
            { id: "Update_Cycles", title: "Update Cycles", file: "03_Versions/Update_Cycles.md" },
            { id: "Legacy_Code", title: "Legacy Code", file: "03_Versions/Legacy_Code.md" }
        ],
        content: `
            <div class="spec-card">
                <h2>Sistemin Zaman İçindeki Versiyon Güncellemeleri</h2>
            </div>
        `
    },
    "04_Networking": {
        title: "04 Network Protocols: Sosyal Psikoloji",
        subTopics: [
            { id: "P2P_Interaction", title: "P2P Interaction", file: "04_Networking/P2P_Interaction.md" },
            { id: "Social_Engineering", title: "Social Engineering", file: "04_Networking/Social_Engineering.md" },
            { id: "Group_Dynamics", title: "Group Dynamics", file: "04_Networking/Group_Dynamics.md" }
        ],
        content: `
            <div class="spec-card">
                <h2>Çoklu Sistemlerin Etkileşimi</h2>
            </div>
        `
    },
    "05_Maintenance": {
        title: "05 Debugging & Patching: Klinik Psikoloji",
        subTopics: [
            { id: "Error_Handling", title: "Error Handling", file: "05_Maintenance/Error_Handling.md" },
            { id: "Refactoring", title: "Refactoring", file: "05_Maintenance/Refactoring.md" },
            { id: "Stability_Patches", title: "Stability Patches", file: "05_Maintenance/Stability_Patches.md" }
        ],
        content: `
            <div class="spec-card">
                <h2>Sistem Hatalarını Giderme ve Optimizasyon</h2>
            </div>
        `
    }
};

const subTopicData = {
    "Neuro_Transmitters": { title: "Neuro-Transmitters", content: `<h3>Reward/Motivation Protocol</h3><ul><li><strong>Dopamine:</strong> Action initiation signal.</li><li><strong>Serotonin:</strong> Stability status.</li></ul>` },
    "Brain_Regions": { title: "Brain Regions", content: `<h3>Physical Modules</h3><ul><li><strong>PFC:</strong> Main CPU.</li><li><strong>Amygdala:</strong> Security Firewall.</li></ul>` },
    "Bio_Feedback": { title: "Bio-Feedback", content: `<h3>System Telemetry</h3><ul><li><strong>Heart Rate:</strong> System Load.</li><li><strong>Cortisol:</strong> Stress Pressure.</li></ul>` },
    // Simplified for now, in a real app we'd fetch or have full text
};

// ... existing runBootSequence ...
async function runBootSequence() {
    let progress = 0;
    for (let i = 0; i < bootMessages.length; i++) {
        const line = document.createElement('div');
        line.textContent = `> ${bootMessages[i]}`;
        bootLog.appendChild(line);
        progress += (100 / bootMessages.length);
        bootProgress.style.width = `${progress}%`;
        await new Promise(r => setTimeout(r, 300 + Math.random() * 400));
    }
    
    setTimeout(() => {
        bootScreen.style.opacity = '0';
        setTimeout(() => {
            bootScreen.classList.add('hidden');
            app.classList.remove('hidden');
            selectLayer("01_Hardware"); // Default layer
        }, 1000);
    }, 500);
}

function selectLayer(layerId) {
    const data = layerData[layerId];
    if (!data) return;

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.layer === layerId);
    });

    currentLayerDisplay.innerText = layerId.replace('0', '').replace('_', ' ').toUpperCase();
    
    let subNavHtml = '';
    if (data.subTopics) {
        subNavHtml = `
            <div class="sub-nav">
                ${data.subTopics.map(st => `
                    <button class="sub-nav-item" onclick="selectSubTopic('${st.id}')">
                        ${st.title}
                    </button>
                `).join('')}
            </div>
        `;
    }

    docContainer.innerHTML = `
        <div class="welcome-card slide-in">
            <h1>${data.title}</h1>
            ${subNavHtml}
            <div id="sub-content-container">
                ${data.content}
            </div>
        </div>
    `;
}

function selectSubTopic(subTopicId) {
    // In a real app, this might fetch the markdown and render it.
    // For this demo, we'll use predefined content that mirrors the .md files
    const subContent = document.getElementById('sub-content-container');
    document.querySelectorAll('.sub-nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(subTopicId));
    });

    // Content mapping for better UX (Mirrors the MD files)
    const subMap = {
        "Neuro_Transmitters": `
            <div class="spec-card">
                <h2>Neuro-Transmitters (Sistem Sinyalleri)</h2>
                <ul>
                    <li><strong>Dopamine:</strong> Ödül ve motivasyon protokolü (GO signal).</li>
                    <li><strong>Serotonin:</strong> Duygu durum ve stabilite protokolü (STATUS OK).</li>
                    <li><strong>Oxytocin:</strong> Güven ve sosyal bağ protokolü (SECURE CONNECTION).</li>
                </ul>
            </div>
        `,
        "Brain_Regions": `
            <div class="spec-card">
                <h2>Brain Regions (Fiziksel Modüller)</h2>
                <ul>
                    <li><strong>Prefrontal Cortex:</strong> Main CPU. Planlama ve mantık.</li>
                    <li><strong>Amygdala:</strong> Security Firewall. Tehdit algılama.</li>
                    <li><strong>Hippocampus:</strong> Data Storage Manager.</li>
                </ul>
            </div>
        `,
        // ... adding more as needed
    };

    if (subMap[subTopicId]) {
        subContent.innerHTML = subMap[subTopicId];
    } else {
        subContent.innerHTML = `<div class="spec-card"><h2>${subTopicId.replace('_', ' ')}</h2><p>Teknik döküm yükleniyor...</p><div class="placeholder-box">Döküman ID: ${subTopicId}</div></div>`;
    }
}

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => selectLayer(btn.dataset.layer));
});

runBootSequence();
