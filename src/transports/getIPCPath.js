'use strict';

const fs = require('fs');
const os = require('os');

function getIPCPath(id) {
  if (process.platform === 'win32') {
    return `\\\\?\\pipe\\discord-ipc-${id}`;
  }

  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;

  const { uid } = os.userInfo();
  const snapPath = `/run/user/${uid}/app/com.discordapp.Discord/discord-ipc-${id}`;
  if (fs.existsSync(snapPath)) {
    return snapPath;
  }

  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
}

module.exports = getIPCPath;
