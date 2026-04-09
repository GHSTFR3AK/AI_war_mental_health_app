# AI War Mental Health App

A stealth-first student wellness web app designed for high-pressure exam environments. The UI presents as a study/productivity toolkit while quietly offering focus, grounding, and sleep-support experiences.

## Highlights

- Academic-style dashboard and productivity flow
- Focus mode interface (`focus.html`)
- Sanctuary chat experience with dynamic responses and optional voice output (`sanctuary.html`)
- Memory Consolidation tool with offline audio protocol controls (`memory_cognitive.html`)
- Library and schedule pages for realistic study workflow cover

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)

## Project Structure

```text
.
|-- index.html
|-- focus.html
|-- library.html
|-- sanctuary.html
|-- schedule.html
|-- memory_cognitive.html
|-- css/
|   `-- main.css
|-- js/
|   |-- app.js
|   |-- particles.js
|   |-- support.js
|   `-- timer.js
`-- references/
    |-- cognitivity_tool.html
    |-- focus_tool.html
    |-- lib_section.html
    |-- memory_cognitive.html
    |-- sanctuary_chat.html
    `-- schedule.html
```

## Run Locally

### Option 1: Python static server

From the project root:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/
```

### Option 2: VS Code Live Server

Open the folder in VS Code and run with any static server extension.

## Main Routes

- `/index.html` - Dashboard (main entry)
- `/focus.html` - Focus mode
- `/sanctuary.html` - Cognitive sanctuary interaction
- `/memory_cognitive.html` - Memory consolidation protocol (offline audio)
- `/library.html` - Library page
- `/schedule.html` - Schedule page

## Notes

- This project is frontend-only and does not require a backend.
- For best audio experience in the memory protocol, use headphones.
- Modern browser recommended (Chrome/Edge/Firefox latest).

## License

This repository currently has no license file. Add a `LICENSE` if you want to define usage permissions.
