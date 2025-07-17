# Pak Urdu Installer – Linux Port (based on mBilalm)

A cross-platform Urdu keyboard layout for Pakistani Urdu typing, ported from the original Windows-only Pak Urdu Installer by [mBilalm](https://mbilalm.com), now available in **Keyman format** for **Linux** and **Windows** systems.

## 🌟 Features

- **Cross-platform**: Works on **Linux** and **Windows**
- **Complete Urdu support**: All characters, diacritics, and symbols
- **Pakistani phonetic standard**: Matches original Pak Urdu Installer behavior
- **Fast installation**: Simple `.kmp` package for one-click install
- **Tested compatibility**: Works with Keyman Desktop and Keyman for Linux
- **Open source**: Licensed under MIT, with credits to original author

## 📥 Installation

### Option 1: Download Pre-built Package

1. Download the latest `.kmp` file from the [Releases](../../releases) section
2. On **Windows**, double-click the file to install using Keyman Desktop
3. On **Linux**, use Keyman’s command-line tool:

```bash
keyman install pakurdu.kmp
```

### Option 2: Install from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/pak-urdu-installer.git
cd pak-urdu-installer

# Open in Keyman Developer on Windows:
# File > Open > source/pakurdu.kpj
# Press F7 to build the project
```

> 💡 **Note**: Keyman Developer is only available on Windows for building.

## 🖥️ Platform Support

| Platform | Status         | Installation Method     |
|----------|----------------|-------------------------|
| Windows  | ✅ Supported   | Keyman Desktop GUI      |
| Linux    | ✅ Supported   | Keyman CLI              |
| macOS    | ❌ Not supported |                      |
| Android  | ❌ Not supported |                      |
| iOS      | ❌ Not supported |                      |
| Web      | ❌ Not supported |                      |

## 🎯 Usage

After installation:

1. Open your system’s language or input method settings
2. Select **Pak Urdu Installer** from the list of installed keyboards
3. Use your physical keyboard to type in phonetic Urdu

### Phonetic Examples

| Key | Urdu |
|-----|------|
| A   | ا   |
| B   | ب   |
| P   | پ   |
| K   | ک   |
| G   | گ   |
| T   | ت   |
| R   | ر   |

> 🧠 Layout follows standard Pakistani phonetic typing conventions

### On-Screen Keyboard

Use the **Keyman On-Screen Keyboard** to see visual mapping if needed.

## 🔧 Development

### Prerequisites

- [Keyman Developer](https://keyman.com/developer) for building `.kmp`
- Git for version control

### File Structure

```
pak-urdu-installer/
├── build/              # Compiled .kmx and .kmp files
├── source/             # Keyboard source files
│   ├── pakurdu.kmn     # Layout logic (Keyman source)
│   ├── pakurdu.kps     # Package definition
│   ├── pakurdu.kpj     # Project file
│   ├── welcome.htm     # Welcome screen
│   └── readme.htm      # Local embedded readme
├── LICENSE             # MIT License
├── README.md           # Main documentation
└── credits.md          # Credits and attribution
```

### Build Instructions

1. Open `source/pakurdu.kpj` in Keyman Developer
2. Press **F7** to build
3. Output will appear in `build/` folder

## 🤝 Contributing

We welcome contributions of all kinds!

### How to Contribute

1. Fork this repository
2. Create a feature branch: `git checkout -b my-fix`
3. Commit your changes
4. Push to your fork
5. Create a pull request

### Areas for Contribution

- Bug fixes or typing logic corrections
- Support for additional platforms
- Better welcome or help pages
- Native Linux/XKB layout generation
- Packaging as `.deb` or `.rpm`

## 📱 Screenshots

![Keyboard Layout](docs/keyboard-layout.png)  
*Visual layout of the Pak Urdu Installer on Keyman*

## 🐛 Issues

Found a problem? Have an idea? Please [open an issue](../../issues).

We’re especially looking for feedback from:
- Linux users with regional keyboard needs
- Urdu typewriters and linguists
- Anyone who used Pak Urdu Installer before

## 📜 License

This project is licensed under the [MIT License](LICENSE).

- Original layout: © [mBilalm](https://mbilalm.com)
- Ported and packaged: © 2025 Nashit Ahmad

## 🙏 Acknowledgments

- **[mBilalm](https://mbilalm.com)** – Creator of the original Windows-based Pak Urdu Installer
- **Keyman** – For enabling multilingual input across platforms
- Urdu computing community – For feedback and encouragement

## 📊 Repository Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/pak-urdu-installer)
![GitHub forks](https://img.shields.io/github/forks/yourusername/pak-urdu-installer)
![GitHub issues](https://img.shields.io/github/issues/yourusername/pak-urdu-installer)
![GitHub license](https://img.shields.io/github/license/yourusername/pak-urdu-installer)

---

**Made with ❤️ for the Urdu computing community by [Nashit Ahmad](https://github.com/yourusername)**
