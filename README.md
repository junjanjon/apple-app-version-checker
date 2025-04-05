# Apple App Version Checker

This is a command-line tool written in TypeScript to fetch iOS app information, including the app name, version, and release date, from the App Store.

※日本ストアのみ対応

## Features
- Fetch app name, version, and release date from the App Store.
- Supports verbose logging for debugging.
- Accepts the App Store app ID as a command-line argument.
- Supports JSON output format for app information.

## Requirements
- Node.js (v23 or later)
- npm (v10 or later)

## Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd apple-app-version-checker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Run the script with the following command:
```bash
npm start -- --appId <APP_ID> [--verbose] [--format json]
```

### Options
- `--appId` or `-a`: The App Store app ID (required).
- `--verbose` or `-v`: Enable verbose logging (optional).
- `--format json` or `-f json`: Output app information in JSON format (optional).

### Example
Fetch information for an app with ID `374254473`:
```bash
npm start -- --appId 374254473 --verbose
```

Fetch information for an app with ID `374254473` and output it in JSON format:
```bash
npm start -- --appId 374254473 --format json
```

## Development
To build the project:
```bash
npm run build
```

To run the project:
```bash
npm start
```

## License
This project is licensed under the MIT License.
