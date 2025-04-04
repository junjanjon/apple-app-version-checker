# Apple App Version Checker

This is a command-line tool written in TypeScript to fetch iOS app information, including the app name, version, and release date, from the App Store.

## Features
- Fetch app name, version, and release date from the App Store.
- Supports verbose logging for debugging.
- Accepts the App Store app ID as a command-line argument.

## Requirements
- Node.js (v14 or later)
- npm (v6 or later)

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
npm start -- --appId <APP_ID> [--verbose]
```

### Options
- `--appId` or `-a`: The App Store app ID (required).
- `--verbose` or `-v`: Enable verbose logging (optional).

### Example
Fetch information for an app with ID `1663423521`:
```bash
npm start -- --appId 1663423521 --verbose
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