# Tauri + React + Typescript

## Loci
This template is a starting point for building Tauri applications using React and Typescript with Vite as the build tool.

## Features
- Tauri for building cross-platform desktop applications
- React for building user interfaces
- Typescript for type safety
- Vite for fast development and build process
- Tailwind CSS for styling
- ShadCN/UI for pre-built components
- Lucide React for icons
- ESLint and Prettier for code quality
- Vitest for testing

## Prerequisites

Before running this Tauri application, make sure you have the following installed:

### Required Dependencies
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - [Installation guide](https://yarnpkg.com/getting-started/install)
- **Rust** (latest stable) - [Install via rustup](https://rustup.rs/)

### Platform-specific Requirements

#### Windows
- **Microsoft Visual Studio C++ Build Tools** or **Visual Studio Community** with C++ development tools
- **WebView2** (usually pre-installed on Windows 10/11)

#### macOS
- **Xcode Command Line Tools**: Run `xcode-select --install`

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/michaelwnau/loci.git
cd loci
```

### 2. Install Dependencies
```bash
# Install Node.js dependencies
yarn install

# Install Rust dependencies (handled automatically when running Tauri commands)
```

### 3. Development Mode
To run the application in development mode with hot reload:

```bash
# Start the development server and Tauri app
yarn tauri dev
```

This command will:
- Start the Vite development server (frontend)
- Build and run the Tauri desktop application
- Enable hot reload for both frontend and backend changes

### 4. Build for Production
To create a production build:

```bash
# Build the application
yarn tauri build
```

This will create:
- Optimized web assets in `dist/`
- Platform-specific installers in `src-tauri/target/release/bundle/`

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start Vite development server only |
| `yarn build` | Build frontend for production |
| `yarn preview` | Preview production build |
| `yarn tauri dev` | Run Tauri app in development mode |
| `yarn tauri build` | Build Tauri app for production |
| `yarn tauri info` | Show Tauri environment info |

## ShadCN/UI Components

This project includes ShadCN/UI for beautiful, accessible components. To add more components:

```bash
# Add individual components
yarn shadcn add button
yarn shadcn add dialog
yarn shadcn add dropdown-menu

# See available components
yarn shadcn add
```

## Project Structure

```
loci/
├── src/                    # React frontend source
│   ├── components/         # React components
│   │   └── ui/            # ShadCN/UI components
│   ├── lib/               # Utility functions
│   ├── assets/            # Static assets
│   └── main.tsx          # Frontend entry point
├── src-tauri/             # Tauri backend
│   ├── src/               # Rust source code
│   ├── icons/             # App icons
│   └── tauri.conf.json   # Tauri configuration
├── public/                # Public assets
└── dist/                 # Built frontend (generated)
```

## Troubleshooting

### Common Issues

1. **Rust not found**: Ensure Rust is installed and in your PATH
2. **Build tools missing**: Install platform-specific build tools mentioned in prerequisites
3. **WebView2 issues on Windows**: Update Windows or install WebView2 manually
4. **Permission errors**: Run terminal as administrator on Windows

### Getting Help

- Check the [Tauri documentation](https://tauri.app/)
- Visit the [Tauri Discord](https://discord.gg/tauri)
- Review [common issues](https://tauri.app/v1/guides/troubleshoot/)
