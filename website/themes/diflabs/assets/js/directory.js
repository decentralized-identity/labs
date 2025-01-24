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

function populateGrid(category, gridId, people) {
    const grid = document.getElementById(gridId);
    if (!people || !people[category]) return;

    // Clear the grid before repopulating
    grid.innerHTML = "";

    people[category].forEach(person => {
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
        grid.appendChild(card);
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

// Fetch and populate the grids
(async function initializeDirectory() {
    const people = await fetchPeople();
    if (people) {
        populateGrid("mentors", "mentors-grid", people);
        populateGrid("chairs", "chairs-grid", people);
        populateGrid("leads", "leads-grid", people);
    }
})();
