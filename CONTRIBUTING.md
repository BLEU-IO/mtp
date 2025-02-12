# Contributing to MTP (markdown to pdf)

First off, thank you for considering contributing to MTP! It's people like you that make BLEU such a great community.

## 🎯 Development Process

We use a simplified version of the GitHub flow:

1. Fork the repository
2. Create a feature branch
3. Write your changes
4. Write tests for your changes
5. Run the tests and make sure they pass
6. Submit a Pull Request

## 🛠 Development Setup

This project uses [Bun](https://bun.sh) as its JavaScript runtime and package manager. Make sure you have it installed:

```bash
# Install Bun (if you haven't already)
curl -fsSL https://bun.sh/install | bash

# Clone your fork
git clone https://github.com/YOUR_USERNAME/md-to-pdf.git

# Enter the project directory
cd md-to-pdf

# Install dependencies
bun install

# Start development server
bun run dev
```

## 🧪 Running Tests

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch
```

## 📝 Writing Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation only changes
- `style:` - Changes that do not affect the meaning of the code
- `refactor:` - A code change that neither fixes a bug nor adds a feature
- `perf:` - A code change that improves performance
- `test:` - Adding missing tests or correcting existing tests
- `chore:` - Changes to the build process or auxiliary tools

Example:
```
feat: add support for custom CSS in PDF output
```

## 🎨 Code Style

We use ESLint and Prettier to maintain code quality and consistency:

```bash
# Run linter
bun run lint

# Format code
bun run format
```

## 🔍 Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the CHANGELOG.md following the Keep a Changelog format
3. The PR will be merged once you have the sign-off of at least one maintainer

## 🐛 Reporting Bugs

When filing an issue, make sure to answer these questions:

1. What version of the package are you using?
2. What version of Bun are you using?
3. What did you do?
4. What did you expect to see?
5. What did you see instead?

## 💡 Suggesting Features

We love feature suggestions! When suggesting a feature:

1. Explain the problem you're trying to solve
2. Explain why this feature would help
3. Provide examples of how the feature would work
4. Consider if this feature might impact existing functionality

## 📚 Documentation

Documentation improvements are always welcome. This includes:

- Fixing typos
- Improving explanations
- Adding examples
- Adding new sections
- Translating to other languages

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## ❓ Questions?

Feel free to:

1. Open an issue
2. Join the BLEU Discord community
3. Reach out to the maintainers

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License. 