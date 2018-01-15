import cmd from "node-cmd";

cmd.get(
  'youtube-dl -o "./%(title)s.%(ext)s" -i --format m4a --embed-thumbnail --add-metadata https://www.youtube.com/watch?v=NXTOFUEqYcU',
  function (err, data, stderr) {
    if (!err) {
      console.log(data);
    } else {
      console.log('error', err);
    }
  }
);
