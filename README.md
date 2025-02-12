# MTP (markdown to pdf)

A powerful and flexible Markdown to PDF converter built by the BLEU community.

## 🌟 About

This project is part of the BLEU organization's "Learn by Doing" initiative. It's a community-driven tool that converts Markdown files to beautifully formatted PDFs, making it easy to create professional documentation, reports, and more.

## ✨ Features

- Convert Markdown files to PDF
- Customizable styling options
- Support for GitHub Flavored Markdown
- Cross-platform compatibility
- Easy to use CLI and API

## 🚀 Getting Started

### Prerequisites

- Bun (latest version)

#### Installing Bun

```bash
# For macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# For Windows (via WSL)
# First install WSL if you haven't already:
wsl --install

# Then install Bun inside WSL using the command above
```

Verify the installation:
```bash
bun --version
```

### Installation

```bash
bun install @bleu/md-to-pdf
```

### Basic Usage

```javascript
import { mdToPdf } from '@bleu/md-to-pdf';

// Convert a markdown string to PDF
mdToPdf.convert('# Hello World')
  .then(pdf => {
    // Handle PDF buffer
  });

// Convert a markdown file to PDF
mdToPdf.convertFile('input.md', 'output.pdf')
  .then(() => {
    console.log('Conversion complete!');
  });
```

## 🤝 Contributing

We welcome contributions from developers of all skill levels! This project is part of BLEU's mission to learn by doing, and we believe that contributing to open source is one of the best ways to learn and grow as a developer.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/BLEU/md-to-pdf.git

# Install dependencies
bun install

# Run tests
bun test

# Build the project
bun run build
```

### Contribution Guidelines

- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Be kind and respectful to others

## 📝 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to providing a welcoming and inclusive environment for all contributors.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- BLEU Community
- All our contributors
- The open source community

## 📞 Contact

- GitHub Organization: [BLEU](https://github.com/BLEU-IO)
- Join our community: [BLEU Community](https://bleu-website.vercel.app/)

---

Made with ❤️ by the BLEU Community