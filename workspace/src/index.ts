import axios from 'axios';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import yargs from 'yargs';

async function fetchAppInfo(countryCode: string, appId: string, verbose: boolean): Promise<void> {
  const url = `https://itunes.apple.com/${countryCode}/app/id${appId}?mt=8`;

  try {
    if (verbose) console.log(`Fetching URL: ${url}`); // Debug log
    const response = await axios.get(url);
    if (verbose) console.log('Response received:', response.status); // Debug log
    const html = response.data;

    // Parse the HTML using cheerio
    const $ = cheerio.load(html);

    // Extract app name from JSON-LD script
    const jsonLdScript = $('script[name="schema:software-application"]').html();
    let appName = 'Unknown';
    if (jsonLdScript) {
      const jsonData = JSON.parse(jsonLdScript);
      appName = jsonData.name || 'Unknown';
    }

    // Extract version information
    const versionText = $('.whats-new__latest__version').text().trim();
    const appVersion = versionText.match(/バージョン\s([\d.]+)/)?.[1] || 'Unknown';

    // Extract release date
    const releaseDate = $('time[data-test-we-datetime]').attr('datetime') || 'Unknown';

    console.log(`App Name: ${appName}`);
    console.log(`App Version: ${appVersion}`);
    console.log(`Release Date: ${releaseDate}`);
  } catch (error) {
    console.error('Error fetching app info:', error);
  }
}

// Parse command-line arguments
const argv = yargs(process.argv.slice(2))
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Enable verbose logging',
    default: false,
  })
  .option('appId', {
    alias: 'a',
    type: 'string',
    description: 'The App Store app ID',
    demandOption: true, // Make appId a required argument
  })
  .help()
  .parseSync();

const countryCode = 'jp';
const appId = argv.appId; // Use appId from command-line arguments
fetchAppInfo(countryCode, appId, argv.verbose);