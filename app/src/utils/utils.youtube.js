import request from "request";
import { exec } from "child_process";

import * as types from "../constants/YoutubeConstants";

import { base64ArrayBuffer } from "../utils/utils.github";

export const download = (url) => {
  exec(
    `youtube-dl -o "./%(title)s.%(ext)s" -i --format m4a --embed-thumbnail --add-metadata ${url}`,
    (err, stdout, stderr) => {
      if (!err) {
        console.log(stdout);
      } else {
        console.warn('error', err);
      }
    }
  );
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