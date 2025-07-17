# Pak Urdu Installer – Linux Port

A cross-platform Urdu keyboard layout for Pakistani Urdu typing, ported from the original Windows-only Pak Urdu Installer by [mBilalm](https://mbilalm.com). Now available in **Keyman format** for **Linux** and **Windows** systems.

## What is this?

This keyboard layout lets you type Urdu text using standard English keys in a phonetic way. For example:
- Press `A` to get `ا`
- Press `B` to get `ب` 
- Press `P` to get `پ`

It's designed specifically for Pakistani Urdu typing conventions and works exactly like the popular Windows-only Pak Urdu Installer.

## 🌟 Features

- **Cross-platform**: Works on Linux and Windows
- **Complete Urdu support**: All Urdu characters, diacritics, and symbols
- **Pakistani phonetic standard**: Matches original Pak Urdu Installer behavior
- **Easy installation**: Simple one-click install package
- **Open source**: MIT licensed with full credits to original author

## 📥 Installation Instructions

### For Windows Users

**Prerequisites:**
- Download and install [Keyman Desktop](https://keyman.com/desktop/) first

**Installation Steps:**
1. Download the latest `pak_urdu_installer.kmp` file from the [Releases](../../releases) section
2. Double-click the downloaded `.kmp` file
3. Keyman Desktop will open and ask for confirmation - click "Install"
4. The keyboard will be automatically added to your system

**To activate:**
1. Click the Keyman Desktop icon in your system tray
2. Select "Pak Urdu Installer" from the keyboard list
3. Start typing in any application

### For Linux Users

**Prerequisites:**
- Install Keyman for Linux first:
  ```bash
  # On Ubuntu/Debian:
  sudo apt install keyman
  
  # On Fedora:
  sudo dnf install keyman
  
  # On Arch Linux:
  sudo pacman -S keyman
  ```

**Installation Steps:**
1. Download the latest `pak_urdu_installer.kmp` file from the [Releases](../../releases) section
2. Open terminal and navigate to your downloads folder
3. Install the keyboard:
   ```bash
   keyman install pak_urdu_installer.kmp
   ```
4. Restart your system or log out and back in

**To activate:**
1. Open your system settings → Input Sources (or Keyboard)
2. Add "Pak Urdu Installer" as an input method
3. Use your keyboard switcher (usually Alt+Shift or Super+Space) to switch to Urdu
4. Start typing in any application

## 🎯 How to Use

### Basic Typing

Once activated, simply type English letters to get Urdu characters:

| English Key | Urdu Output | Example Word |
|-------------|-------------|--------------|
| A           | ا           | **A**dmi → **ا**دمی |
| B           | ب           | **B**ari → **ب**ڑی |
| P           | پ           | **P**ani → **پ**انی |
| K           | ک           | **K**itab → **ک**تاب |
| G           | گ           | **G**har → **گ**ھر |
| T           | ت           | **T**eez → **ت**یز |
| R           | ر           | **R**ang → **ر**نگ |

### Viewing the Full Layout

To see all key mappings:
1. **Windows**: Right-click Keyman Desktop icon → "On Screen Keyboard"
2. **Linux**: Use the Keyman configuration tool or refer to the layout chart

## 🔧 For Developers

### Building from Source

**Prerequisites:**
- [Keyman Developer](https://keyman.com/developer) (Windows only)
- Git

**Build Steps:**
1. Clone the repository:
   ```bash
   git clone https://github.com/nashitahmedbarq/pak-urdu-installer-linux-port.git
   cd pak-urdu-installer
   ```

2. Open `pak_urdu_installer.kpj` in Keyman Developer

3. Press **F7** to build the project

4. Find the compiled `.kmp` file in the `build/` folder

### Project Structure

```
pak-urdu-installer-linux-port/
├── HISTORY.md                    # Version history and changelog
├── LICENSE.md                    # MIT License
├── README.md                     # This documentation
├── pak_urdu_installer.kpj        # Keyman project file
├── pak_urdu_installer.kpj.user   # User-specific project settings
├── build/                        # Compiled output files
│   └── pak_urdu_installer.kmp    # Installable keyboard package
└── source/                       # Source code and assets
    ├── pak_urdu_installer.kmn    # Main keyboard layout logic
    ├── pak_urdu_installer.kmx    # Compiled keyboard file
    ├── pak_urdu_installer.kps    # Package definition
    ├── readme.htm                # Embedded help documentation
    └── welcome.htm               # Welcome screen for installer
```

## 🐛 Troubleshooting

### Common Issues

**Windows:**
- **Keyman Desktop not opening**: Restart as administrator
- **Keyboard not appearing**: Check if Keyman service is running
- **Characters not typing**: Make sure keyboard is selected in Keyman Desktop

**Linux:**
- **Installation fails**: Check if you have proper permissions (`sudo` may be needed)
- **Keyboard not available**: Restart your session after installation
- **Input method not switching**: Check your desktop environment's keyboard settings

### Getting Help

If you encounter issues:
1. Check the [Issues](../../issues) section for existing solutions
2. Create a new issue with your system details
3. Include screenshots if possible

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report bugs**: Found a typing issue? [Open an issue](../../issues)
2. **Suggest improvements**: Ideas for better functionality
3. **Code contributions**: Fork, improve, and submit pull requests
4. **Documentation**: Help improve this README or add tutorials

## 📱 Platform Support

| Platform | Status | Installation Method |
|----------|--------|-------------------|
| Windows 10/11 | ✅ Fully Supported | Keyman Desktop GUI |
| Linux (Ubuntu/Debian) | ✅ Fully Supported | Keyman CLI |
| Linux (Fedora) | ✅ Fully Supported | Keyman CLI |
| Linux (Arch) | ✅ Fully Supported | Keyman CLI |
| macOS | ❌ Not Available | - |
| Android | ❌ Not Available | - |
| iOS | ❌ Not Available | - |

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details.

**Credits:**
- Original layout: [mBilalm](https://mbilalm.com)
- Linux port: [Nashit Ahmed Barq](https://github.com/nashitahmedbarq)

## 🙏 Acknowledgments

- **[mBilalm](https://mbilalm.com)** for creating the original Windows Pak Urdu Installer
- **Keyman team** for providing cross-platform keyboard tools
- **Urdu computing community** for feedback and support

---

**Made with ❤️ for the Urdu computing community**
