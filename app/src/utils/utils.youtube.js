import { exec, spawn } from "child_process";
import request from "request";
import path from "path";

import * as types from "../constants/YoutubeConstants";

import { getDownloadDir } from "../utils/utils";
import { base64ArrayBuffer } from "../utils/utils.github";

export const YtRegExp = RegExp(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/watch\?.+$/);

export const download = async (url) => {
  const dlDir = await getDownloadDir();
  const outputLoc = path.join(dlDir, "%(title)s.%(ext)s");
  console.log(outputLoc);

  // const ls = spawn('ls', ['-lh', '/usr']);

  // ls.stdout.on('data', (data) => {
  //   console.log(`stdout: ${data}`);
  // });
  
  // ls.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`);
  // });
  
  // ls.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });

  const youtubedl = spawn("youtube-dl", [
    // '--force-ipv4',
    `-o ${outputLoc}`,
    '-i',
    '-f m4a',
    '--embed-thumbnail',
    '--add-metadata',
    `${url}`,
  ]);
  youtubedl.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  youtubedl.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  youtubedl.on('exit', function (code) {
    console.log('youtube-dl process exited with code ' + code.toString());
  });
}

export const downloadImage = (url) => {
  return new Promise((resolve, reject) => {
    let req = require('request').defaults({ encoding: null });

    req.get(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let data = "data:" + response.headers["content-type"]
          + ";base64," + base64ArrayBuffer(body);
        resolve(data);
      } else {
        reject(types.YOUTUBE_DOWNLOAD_IMAGE_FAILED);
      }
    });
  })
};

export const fetchYoutubeInfo = (url) => {
  return new Promise((resolve, reject) => {
    exec(
      `youtube-dl --dump-json ${url}`,
      (err, stdout, stderr) => {
        try {
          if (!err)
            resolve(JSON.parse(stdout));
          else
            reject(types.YOUTUBE_FETCH_INFO_FAILED);
        } catch (e) {
          console.error(e);
          reject(types.YOUTUBE_FETCH_INFO_SYNTAX_ERROR);
        }
      }
    );
  })
    .catch((reason) => {
      console.warn("fetchYoutubeInfo: " + reason);
    });
};

export const fetchImageUrl = (url) => {
  return new Promise((resolve, reject) => {
    exec(
      `youtube-dl --get-thumbnail ${url}`,
      (err, stdout, stderr) => {
        if (!err) {
          if (stdout.length > 0) {
            resolve(stdout);
            return;
          }
        } else {
          console.log("error", err);
          reject(types.YOUTUBE_FETCH_IMAGE_URL_FAILED);
        }
      }
    );
  })
    .catch((reason) => {
      console.warn("fetchImageUrl: " + reason);
    });
};