let currentCohort = 'beta-cohort-2'; // Default to latest cohort
let peopleData = null;

async function fetchPeople() {
    try {
        const response = await fetch("/data/directory.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch people data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching people data:", error);
        alert("Failed to load people data. Please try again later.");
        return null;
    }
}

function createCohortTabs(data) {
    const tabsContainer = document.getElementById("cohortTabs");
    tabsContainer.innerHTML = "";

    // Check if data and cohorts exist
    if (!data || !data.cohorts) {
        console.error('Invalid data structure:', data);
        tabsContainer.innerHTML = '<p>Error loading cohort data</p>';
        return;
    }

    const cohorts = Object.keys(data.cohorts);
    // Sort cohorts so beta-cohort-2 comes first
    cohorts.sort((a, b) => {
        if (a === 'beta-cohort-2') return -1;
        if (b === 'beta-cohort-2') return 1;
        return a.localeCompare(b);
    });

    cohorts.forEach(cohortId => {
        const cohort = data.cohorts[cohortId];
        const tab = document.createElement("button");
        tab.className = `cohort-tab ${cohortId === currentCohort ? 'active' : ''}`;
        tab.textContent = cohort.name;
        tab.onclick = () => switchCohort(cohortId);
        tabsContainer.appendChild(tab);
    });
}

function switchCohort(cohortId) {
    currentCohort = cohortId;
    
    // Update active tab
    document.querySelectorAll('.cohort-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update content
    displayCohortContent(peopleData.cohorts[cohortId]);
}

function displayCohortContent(cohortData) {
    const contentContainer = document.getElementById("cohortContent");
    contentContainer.innerHTML = "";

    // Check if cohortData exists
    if (!cohortData) {
        console.error('No cohort data provided');
        contentContainer.innerHTML = '<p>No cohort data available</p>';
        return;
    }

    // Create sections for each role type
    const roleTypes = ['mentors', 'chairs', 'leads'];
    const roleLabels = {
        'mentors': 'Expert Mentors',
        'chairs': 'Chairs', 
        'leads': 'Project Leads'
    };

    roleTypes.forEach(roleType => {
        if (cohortData[roleType] && cohortData[roleType].length > 0) {
            const section = document.createElement("div");
            section.className = "role-section";
            
            const heading = document.createElement("h2");
            heading.id = roleType;
            heading.textContent = roleLabels[roleType];
            section.appendChild(heading);
            
            const grid = document.createElement("div");
            grid.className = "avatar-grid";
            grid.id = `${roleType}-grid`;
            
            populateGrid(cohortData[roleType], grid);
            section.appendChild(grid);
            contentContainer.appendChild(section);
        }
    });
}

function populateGrid(people, gridElement) {
    gridElement.innerHTML = "";

    people.forEach(person => {
        const card = document.createElement("div");
        card.className = "avatar-card";
        card.innerHTML = `
            <img src="${person.img}" alt="${person.name}" 
                 onerror="this.style.display='none'; this.insertAdjacentHTML('afterend', \`
                 <span class='material-icons' style='font-size: 80px; color: #666;'>person</span>\`);">
            <h3>${person.name}</h3>
            <p>${person.role}</p>
        `;
        card.addEventListener("click", () => openModal(person));
        gridElement.appendChild(card);
    });
}

function openModal(person) {
    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalOverlay = document.getElementById("modalOverlay");
    const infoModal = document.getElementById("infoModal");
    const modalProfileLink = document.getElementById("modalProfileLink");
    const modalImg = document.getElementById("modalImg");

    modalName.innerText = person.name || "No name available";
    modalRole.innerText = person.role || "No role specified";

    if (person.img) {
        modalImg.src = person.img;
        modalImg.style.display = "block";
    } else {
        modalImg.style.display = "none";
    }

    if (person.profile_url) {
        modalProfileLink.href = person.profile_url;
        modalProfileLink.style.display = "inline";
    } else {
        modalProfileLink.style.display = "none";
    }

    modalOverlay.style.display = "block";
    infoModal.style.display = "block";
}

function closeModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    const infoModal = document.getElementById("infoModal");

    modalOverlay.style.display = "none";
    infoModal.style.display = "none";
}

function filterAvatars() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".avatar-card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// Fetch and initialize the directory
(async function initializeDirectory() {
    try {
        const rawData = await fetchPeople();
        
        // Handle both old and new data formats
        if (rawData) {
            // Check if it's the new cohort-based format
            if (rawData.cohorts) {
                peopleData = rawData;
            } else {
                // Convert old format to new format
                console.log('Converting old data format to new cohort format');
                peopleData = {
                    cohorts: {
                        'beta-cohort-1': {
                            name: 'Beta Cohort 1',
                            mentors: rawData.mentors || [],
                            chairs: rawData.chairs || [],
                            leads: rawData.leads || []
                        }
                    }
                };
                currentCohort = 'beta-cohort-1';
            }
            
            createCohortTabs(peopleData);
            
            if (peopleData.cohorts[currentCohort]) {
                displayCohortContent(peopleData.cohorts[currentCohort]);
            } else {
                console.error('Current cohort not found in data:', currentCohort);
                // Fallback to first available cohort
                const firstCohort = Object.keys(peopleData.cohorts)[0];
                if (firstCohort) {
                    currentCohort = firstCohort;
                    displayCohortContent(peopleData.cohorts[firstCohort]);
                }
            }
        } else {
            console.error('No data received from server');
        }
        
        // Close modal when clicking overlay
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', closeModal);
        }
    } catch (error) {
        console.error('Error initializing directory:', error);
    }
})();