const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const ReportGenerator = require('lighthouse/lighthouse-core/report/v2/report-generator');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher
    .launch({ chromeFlags: opts.chromeFlags })
    .then(chrome => {
      opts.port = chrome.port;
      return lighthouse(url, opts, config).then(results => {
        // The gathered artifacts are typically removed as they can be quite large (~50MB+)
        delete results.artifacts;
        return chrome.kill().then(() => results);
      });
    })
    .catch(console.error);
}

const opts = {
  chromeFlags: ['--show-paint-rects', '--headless']
};

// Usage:
launchChromeAndRunLighthouse('http://localhost:4200', opts)
  .then(results => {
    // output the result json to an html file using STDOUT
    console.log(new ReportGenerator().generateReportHtml(results));
  })
  .catch(console.error);
