const terminalOutput = document.getElementById("terminal-output");
const commandInput = document.getElementById("command-input");

const commands = {
    help: "Available commands: help, status, run experiment, clear",
    status: "System operational. AI ready for commands.",
    "run experiment": "Running experiment... Results: Success rate = 97%.",
    clear: "",
};

const handleCommand = (command) => {
    if (commands[command]) {
        if (command === "clear") terminalOutput.innerHTML = "";
        else appendToTerminal(`> ${command}\n${commands[command]}`);
    } else {
        appendToTerminal(`> ${command}\nUnknown command. Type "help" for a list of commands.`);
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
        const command = commandInput.value.trim().toLowerCase();
        commandInput.value = "";
        handleCommand(command);
    }
});
