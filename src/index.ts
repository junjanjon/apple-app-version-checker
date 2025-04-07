#!/usr/bin/env node

import yargs from 'yargs';
import fetchAppInfo from './fetchAppInfo';

declare const process: {
  argv: string[];
};

// Update yargs configuration to include a format option
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
  .option('format', {
    alias: 'f',
    type: 'string',
    description: 'Output format (e.g., json)',
    choices: ['json'],
  })
  .help()
  .parseSync();

const countryCode = 'jp';
const appId = argv.appId; // Use appId from command-line arguments
const verbose = argv.verbose;
const format = argv.format;

fetchAppInfo(countryCode, appId, verbose, format);
