import { copyFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const hostingerAssets = join(root, "hostinger", "public_html", "assets");
const hostingerDemos = join(root, "hostinger", "public_html", "demos");
const sourceDemos = join(root, "demos");

rmSync(hostingerAssets, { recursive: true, force: true });

execFileSync(process.platform === "win32" ? "cmd.exe" : "npm", process.platform === "win32" ? ["/d", "/s", "/c", "npm run build"] : ["run", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    HOSTINGER: "true",
    VITE_BUILD_ID: process.env.VITE_BUILD_ID ?? "",
  },
});

mkdirSync(hostingerDemos, { recursive: true });
for (const entry of readdirSync(sourceDemos)) {
  if (!entry.endsWith(".html")) continue;
  copyFileSync(join(sourceDemos, entry), join(hostingerDemos, entry));
}

