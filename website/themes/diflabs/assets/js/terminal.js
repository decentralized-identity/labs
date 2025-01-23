document.addEventListener("DOMContentLoaded", () => {
    const terminalOutput = document.getElementById("terminal-output");
    const commandInput = document.getElementById("command-input");

    const people = {
        mentors: [
            { name: "Ana Goessens", role: "CEO at Animo Solutions", img: "https://via.placeholder.com/80" },
            { name: "Anthony Fu", role: "Core contributor to Vite/NextJS", img: "https://via.placeholder.com/80" },
            { name: "Daniel Buchner", role: "TBD/Block, Decentralized Web Nodes", img: "https://via.placeholder.com/80" },
            { name: "Jelle Millenaar", role: "CEO Impierce Technologies", img: "https://via.placeholder.com/80" },
            { name: "Markus Sabadello", role: "Expert in DID Resolution spec", img: "https://via.placeholder.com/80" },
            { name: "Matthew McKinney", role: "Head of Growth @ ArcBlock", img: "https://via.placeholder.com/80" },
            { name: "Nik Graf", role: "Founder at Serenity", img: "https://via.placeholder.com/80" },
            { name: "Otto Mora", role: "ZK Identity Maxi @ Privado.ID", img: "https://via.placeholder.com/80" }
        ],
        chairs: [
            { name: "Andor Kesselman", role: "CTO Andor Labs", img: "https://via.placeholder.com/80" },
            { name: "Ankur Banerjee", role: "Co-Founder at Creds.xyz", img: "https://via.placeholder.com/80" },
            { name: "Daniel Thompson-Yvetot", role: "Cofounder of Tauri Apps", img: "https://via.placeholder.com/80" }
        ],
        leads: [
            { name: "Brian Richter", role: "Bitcoin Ordinals Verifiable Credentials", img: "https://via.placeholder.com/80" },
            { name: "Golda Velez", role: "Linked Claims", img: "https://via.placeholder.com/80" },
            { name: "Alex Hache", role: "VerAnon", img: "https://via.placeholder.com/80" }
        ]
    };

    const handleCommand = async (command) => {
        appendToTerminal(`> ${command}`);

        // Example of LLM API integration
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [
                        { role: "system", content: "You are a knowledgeable assistant for DIF Labs." },
                        { role: "user", content: `Here is the data: ${JSON.stringify(people)}. ${command}` }
                    ]
                })
            });

            const data = await response.json();
            const message = data.choices[0]?.message?.content || "No response from AI.";
            appendToTerminal(message);
        } catch (error) {
            appendToTerminal("Error: Unable to connect to AI.");
            console.error(error);
        }
    };

    const appendToTerminal = (text) => {
        const newLine = document.createElement("p");
        newLine.textContent = text;
        terminalOutput.appendChild(newLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll
    };

    commandInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && commandInput.value.trim()) {
            const command = commandInput.value.trim();
            commandInput.value = "";
            handleCommand(command);
        }
    });
});
