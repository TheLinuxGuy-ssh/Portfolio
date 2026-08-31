import { a7 as head, a8 as attr, a4 as escape_html, a9 as attr_class, aa as ensure_array_like, ab as stringify, ac as attr_style, ad as sanitize_props, ae as rest_props, af as fallback, ag as attributes, ah as bind_props, a3 as slot } from '../../chunks/index.js-CDHmKEcc.js';
import { o as onDestroy, c as createEventDispatcher } from '../../chunks/index-server.js-CDCu1RHo.js';
import '../../chunks/false.js-DaZuhRgw.js';
import '../../chunks/utils.js-DF0O8cBk.js';
import '../../chunks/utils2.js-BQzn9ikS.js';
import '@sveltejs/kit';
import '@sveltejs/kit/internal';
import '@sveltejs/kit/internal/server';

const logo = "/_app/immutable/assets/logo.9uv7gBk4.webp";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="head-logo svelte-oiwvqb" id="logo"><a href="#hero" aria-label="Go to Start">`);
    {
      $$renderer2.push("<!--[0-->");
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<img${attr("src", logo)} alt="" class="svelte-oiwvqb"/>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></a></div>`);
  });
}
function Hero($$renderer) {
  $$renderer.push(`<section class="hero svelte-juboms" id="hero"><div class="hero-content svelte-juboms"><div class="center"><div class="hero-title svelte-juboms" data-scroll="" data-scroll-speed="-0.1" data-scroll-direction="vertical" data-aos="zoom-in-up">TheLinuxGuy</div> <div class="hero-desc svelte-juboms"></div></div></div></section>`);
}
const Themes = {
  dark: {
    background: "#1a1b26",
    foreground: "#a9b1d6",
    prompt: "#7aa2f7",
    cursor: "#c0caf5"
  },
  light: {
    background: "#ffffff",
    foreground: "#000000",
    prompt: "#2563eb",
    cursor: "#000000"
  },
  dracula: {
    background: "#282a36",
    foreground: "#f8f8f2",
    prompt: "#bd93f9",
    cursor: "#f8f8f2"
  },
  matrix: {
    background: "#000000",
    foreground: "#00ff00",
    prompt: "#00cc00",
    cursor: "#00ff00"
  }
};
class Shell {
  structure;
  customCommands;
  cwd;
  history;
  user;
  aliases = {};
  listeners = {};
  constructor(structure = {}, commands = {}, user = "user", history = []) {
    this.structure = structure;
    this.customCommands = commands;
    this.user = user;
    this.history = history;
    this.cwd = ["~"];
  }
  on(event, callback) {
    if (!this.listeners[event])
      this.listeners[event] = [];
    this.listeners[event].push(callback);
  }
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((cb) => cb(data));
    }
  }
  get currentPath() {
    return this.cwd;
  }
  setHistory(h) {
    this.history = h;
  }
  setStructure(s) {
    this.structure = s;
  }
  setCommands(c) {
    this.customCommands = c;
  }
  /**
   * Resolve a path string to a node and its logical path.
   * Handles:
   * - Absolute paths ( start with / )
   * - Relative paths ( start with ., .., or name )
   * - Nested paths ( a/b/c )
   */
  resolvePath(pathStr) {
    let parts = [];
    let currentPath = [];
    let current = this.structure;
    if (pathStr === "/" || pathStr === "") {
      return { node: this.structure, path: ["~"], parent: void 0, name: "" };
    } else if (pathStr === "~") {
      return { node: this.structure, path: ["~"], parent: void 0, name: "" };
    } else if (pathStr.startsWith("/")) {
      currentPath = ["~"];
      parts = pathStr.split("/").filter((p) => p !== "");
    } else {
      currentPath = [...this.cwd];
      parts = pathStr.split("/").filter((p) => p !== "");
      let ptr = this.structure;
      for (const p of this.cwd) {
        if (p === "~")
          continue;
        if (ptr[p])
          ptr = ptr[p];
      }
      current = ptr;
    }
    let parent = void 0;
    let lastPart = "";
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      lastPart = part;
      if (part === ".")
        continue;
      if (part === "..") {
        if (currentPath.length > 1) {
          currentPath.pop();
          let ptr = this.structure;
          for (const p of currentPath) {
            if (p === "~")
              continue;
            if (ptr[p])
              ptr = ptr[p];
          }
          current = ptr;
        }
        parent = void 0;
        continue;
      }
      if (typeof current === "object") {
        parent = current;
        if (current[part]) {
          current = current[part];
          currentPath.push(part);
        } else {
          if (i === parts.length - 1) {
            return { node: void 0, path: [...currentPath, part], parent, name: part };
          }
          return { node: void 0, path: currentPath, parent: void 0, name: part };
        }
      } else {
        return { node: void 0, path: currentPath, parent: void 0, name: part };
      }
    }
    return { node: current, path: currentPath, parent: parts.length > 0 ? parent : void 0, name: lastPart };
  }
  /**
   * Process a command string and return the updated history lines (or void if direct history mutation).
   * Actually, let's return a list of NEW lines provided by the command execution.
   */
  async execute(input) {
    const trimmed = input.trim();
    if (!trimmed)
      return [];
    let [cmd, ...args] = trimmed.split(/\s+/);
    if (this.aliases[cmd]) {
      const aliased = this.aliases[cmd];
      const expanded = aliased + " " + args.join(" ");
      [cmd, ...args] = expanded.trim().split(/\s+/);
    }
    const outputLines = [];
    if (this.customCommands[cmd]) {
      try {
        const res = await this.customCommands[cmd](args);
        if (res)
          return [{ type: "output", content: res }];
        return [];
      } catch (err) {
        return [{ type: "error", content: err.message || String(err) }];
      }
    }
    if (cmd === "clear") {
      return [{ type: "command", content: "CLEAR_SIGNAL", id: -1 }];
    }
    if (cmd === "ls") {
      const flags = /* @__PURE__ */ new Set();
      let target = ".";
      for (const arg of args) {
        if (arg.startsWith("-")) {
          for (let i = 1; i < arg.length; i++) {
            flags.add(arg[i]);
          }
        } else {
          target = arg;
        }
      }
      const { node } = this.resolvePath(target);
      if (node && typeof node === "object") {
        let entries = Object.entries(node);
        if (!flags.has("a")) {
          entries = entries.filter(([name]) => !name.startsWith("."));
        }
        if (flags.has("l")) {
          const lines = entries.map(([name, val]) => {
            const isDir = typeof val === "object";
            const perms = isDir ? "drwxr-xr-x" : "-rw-r--r--";
            const size = isDir ? 0 : typeof val === "string" ? val.length : 0;
            const date = (/* @__PURE__ */ new Date()).toLocaleDateString();
            return `${perms} 1 user ${size.toString().padStart(4)} ${date} ${name}${isDir ? "/" : ""}`;
          });
          outputLines.push({ type: "output", content: lines.length ? lines.join("\n") : "" });
        } else {
          const names = entries.map(([name, val]) => {
            return typeof val === "object" ? name + "/" : name;
          });
          outputLines.push({ type: "output", content: names.length ? names.join("  ") : "" });
        }
      } else if (typeof node === "string") {
        outputLines.push({ type: "output", content: target });
      } else {
        outputLines.push({ type: "error", content: `ls: cannot access '${target}': No such file or directory` });
      }
      return outputLines;
    }
    if (cmd === "cat") {
      const target = args[0];
      if (!target) {
        return [{ type: "error", content: "usage: cat <file>" }];
      }
      const { node } = this.resolvePath(target);
      if (typeof node === "string") {
        return [{ type: "output", content: node }];
      } else if (typeof node === "object") {
        return [{ type: "error", content: `cat: ${target}: Is a directory` }];
      }
      return [{ type: "error", content: `cat: ${target}: No such file or directory` }];
    }
    if (cmd === "cd") {
      const target = args[0];
      if (!target || target === "~") {
        this.cwd = ["~"];
        return [];
      }
      const { node, path } = this.resolvePath(target);
      if (node && typeof node === "object") {
        this.cwd = path;
      } else if (typeof node === "string") {
        return [{ type: "error", content: `cd: ${target}: Not a directory` }];
      } else {
        return [{ type: "error", content: `cd: ${target}: No such file or directory` }];
      }
      return [];
    }
    if (cmd === "pwd") {
      const pathStr = this.cwd.length > 1 ? "/" + this.cwd.slice(1).join("/") : "/";
      return [{ type: "output", content: pathStr }];
    }
    if (cmd === "help") {
      const custom = Object.keys(this.customCommands);
      const content = `Available commands: clear, ls, cat, cd, pwd, help, history, mkdir, touch, rm, alias${custom.length ? ", " + custom.join(", ") : ""}`;
      return [{ type: "output", content }];
    }
    if (cmd === "history") {
      const historyContent = this.history.filter((h) => h.type === "command").map((h, i) => `${i + 1}  ${h.content}`).join("\n");
      return [{ type: "output", content: historyContent }];
    }
    if (cmd === "mkdir") {
      const target = args[0];
      if (!target)
        return [{ type: "error", content: "usage: mkdir <directory>" }];
      const { node, parent, name } = this.resolvePath(target);
      if (node) {
        return [{ type: "error", content: `mkdir: cannot create directory '${target}': File exists` }];
      }
      if (parent && typeof parent === "object") {
        parent[name] = {};
        this.emit("change", this.structure);
        return [];
      }
      return [{ type: "error", content: `mkdir: cannot create directory '${target}': No such file or directory` }];
    }
    if (cmd === "touch") {
      const target = args[0];
      if (!target)
        return [{ type: "error", content: "usage: touch <file>" }];
      const { node, parent, name } = this.resolvePath(target);
      if (node) {
        return [];
      }
      if (parent && typeof parent === "object") {
        parent[name] = "";
        this.emit("change", this.structure);
        return [];
      }
      return [{ type: "error", content: `touch: cannot touch '${target}': No such file or directory` }];
    }
    if (cmd === "rm") {
      const recursive = args[0] === "-r";
      const target = recursive ? args[1] : args[0];
      if (!target)
        return [{ type: "error", content: "usage: rm [-r] <file/directory>" }];
      const { node, parent, name } = this.resolvePath(target);
      if (!node) {
        return [{ type: "error", content: `rm: cannot remove '${target}': No such file or directory` }];
      }
      if (typeof node === "object" && !recursive) {
        return [{ type: "error", content: `rm: cannot remove '${target}': Is a directory` }];
      }
      if (parent && typeof parent === "object") {
        delete parent[name];
        this.emit("change", this.structure);
        return [];
      }
      return [{ type: "error", content: `rm: cannot remove root` }];
    }
    if (cmd === "cp") {
      const src = args[0];
      const dest = args[1];
      if (!src || !dest)
        return [{ type: "error", content: "usage: cp <source> <destination>" }];
      const sourceRes = this.resolvePath(src);
      if (!sourceRes.node)
        return [{ type: "error", content: `cp: cannot stat '${src}': No such file or directory` }];
      const destRes = this.resolvePath(dest);
      let targetParent = destRes.parent;
      let targetName = destRes.name;
      if (destRes.node && typeof destRes.node === "object") {
        targetParent = destRes.node;
        targetName = sourceRes.name;
      }
      if (targetParent && typeof targetParent === "object") {
        targetParent[targetName] = typeof sourceRes.node === "object" ? JSON.parse(JSON.stringify(sourceRes.node)) : sourceRes.node;
        this.emit("change", this.structure);
        return [];
      }
      return [{ type: "error", content: `cp: cannot create regular file '${dest}': No such file or directory` }];
    }
    if (cmd === "mv") {
      const src = args[0];
      const dest = args[1];
      if (!src || !dest)
        return [{ type: "error", content: "usage: mv <source> <destination>" }];
      const sourceRes = this.resolvePath(src);
      if (!sourceRes.node)
        return [{ type: "error", content: `mv: cannot stat '${src}': No such file or directory` }];
      const destRes = this.resolvePath(dest);
      let targetParent = destRes.parent;
      let targetName = destRes.name;
      if (destRes.node && typeof destRes.node === "object") {
        targetParent = destRes.node;
        targetName = sourceRes.name;
      }
      if (targetParent && typeof targetParent === "object") {
        targetParent[targetName] = sourceRes.node;
        if (sourceRes.parent && typeof sourceRes.parent === "object") {
          delete sourceRes.parent[sourceRes.name];
        }
        this.emit("change", this.structure);
        return [];
      }
      return [{ type: "error", content: `mv: cannot move '${src}' to '${dest}': No such file or directory` }];
    }
    if (cmd === "alias") {
      const argStr = args.join(" ");
      if (!argStr) {
        const list = Object.entries(this.aliases).map(([k, v]) => `${k}='${v}'`).join("\n");
        return [{ type: "output", content: list }];
      }
      const match = argStr.match(/^([a-zA-Z0-9_-]+)=(.+)$/);
      if (match) {
        const key = match[1];
        let val = match[2];
        if (val.startsWith('"') && val.endsWith('"') || val.startsWith("'") && val.endsWith("'")) {
          val = val.slice(1, -1);
        }
        this.aliases[key] = val;
        return [];
      }
      return [{ type: "error", content: "usage: alias name='command'" }];
    }
    return [{ type: "error", content: `Command not found: ${cmd}` }];
  }
  /**
   * Autocomplete logic
   */
  autocomplete(input) {
    if (!input)
      return "";
    const parts = input.split(" ");
    const lastPart = parts[parts.length - 1];
    const isCommand = parts.length === 1;
    let candidates = [];
    let prefix = "";
    if (isCommand) {
      const builtIns = ["clear", "ls", "cat", "cd", "pwd", "help", "history"];
      const customs = Object.keys(this.customCommands);
      const all = Array.from(/* @__PURE__ */ new Set([...builtIns, ...customs]));
      candidates = all.filter((c) => c.startsWith(lastPart));
    } else {
      const lastSlashIndex = lastPart.lastIndexOf("/");
      let parentPath = ".";
      let searchToken = lastPart;
      if (lastSlashIndex !== -1) {
        parentPath = lastPart.substring(0, lastSlashIndex) || "/";
        searchToken = lastPart.substring(lastSlashIndex + 1);
        prefix = parentPath === "/" ? "/" : parentPath + "/";
      }
      const { node } = this.resolvePath(parentPath);
      if (node && typeof node === "object") {
        const entries = Object.keys(node).map((name) => {
          const isDir = typeof node[name] === "object";
          return isDir ? name + "/" : name;
        });
        candidates = entries.filter((e) => e.startsWith(searchToken));
      }
    }
    if (candidates.length === 0)
      return input;
    if (candidates.length === 1) {
      parts[parts.length - 1] = prefix + candidates[0];
      return parts.join(" ");
    }
    candidates.sort();
    const first = candidates[0];
    const last = candidates[candidates.length - 1];
    let i = 0;
    while (i < first.length && first.charAt(i) === last.charAt(i))
      i++;
    const common = first.substring(0, i);
    if (common.length > 0) {
      parts[parts.length - 1] = prefix + common;
      return parts.join(" ");
    }
    return input;
  }
}
function Terminal($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "getShell",
    "commands",
    "structure",
    "theme",
    "welcomeMessage",
    "user",
    "promptStr",
    "autoplay",
    "autoplayLoop",
    "typingSpeed",
    "class"
  ]);
  $$renderer.component(($$renderer2) => {
    let activeTheme;
    let commands = fallback($$props["commands"], () => ({}), true);
    let structure = fallback($$props["structure"], () => ({}), true);
    let theme = fallback($$props["theme"], "dark");
    let welcomeMessage = fallback($$props["welcomeMessage"], "");
    let user = fallback($$props["user"], "user");
    let promptStr = fallback($$props["promptStr"], "");
    let autoplay = fallback($$props["autoplay"], void 0);
    let autoplayLoop = fallback($$props["autoplayLoop"], true);
    let typingSpeed = fallback($$props["typingSpeed"], 50);
    let clazz = fallback($$props["class"], "");
    let history = [];
    let currentInput = "";
    const defaultTheme = {
      background: "#1a1b26",
      foreground: "#a9b1d6",
      prompt: "#7aa2f7",
      cursor: "#c0caf5"
    };
    const shell = new Shell(structure, commands, user);
    function getShell() {
      return shell;
    }
    activeTheme = typeof theme === "string" ? Themes[theme] || defaultTheme : { ...defaultTheme, ...theme };
    if (structure) shell.setStructure(structure);
    if (commands) shell.setCommands(commands);
    $$renderer2.push(`<div${attributes(
      {
        role: "button",
        tabindex: "0",
        ...$$restProps,
        class: `svelte-bash-terminal custom-scrollbar ${stringify(clazz)}`,
        style: ` background-color: ${stringify(activeTheme.background)}; color: ${stringify(activeTheme.foreground)}; border-color: ${stringify(activeTheme.prompt)}33; ${stringify($$restProps.style || "")} `
      },
      "svelte-g3pyzz"
    )}><!--[-->`);
    const each_array = ensure_array_like(history);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let line = each_array[$$index_1];
      $$renderer2.push(`<div class="line svelte-g3pyzz">`);
      if (line.type === "command") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="prompt-label svelte-g3pyzz"${attr_style(`color: ${stringify(activeTheme.prompt)};`)}>${escape_html(line.promptLabel || "$")}</span> <span class="svelte-g3pyzz">${escape_html(line.content)}</span>`);
      } else if (line.type === "error") {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<span class="error svelte-g3pyzz">${escape_html(line.content)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        if (typeof line.content === "string") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="output svelte-g3pyzz">${escape_html(line.content)}</div>`);
        } else if (Array.isArray(line.content)) {
          $$renderer2.push("<!--[1-->");
          $$renderer2.push(`<!--[-->`);
          const each_array_1 = ensure_array_like(line.content);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let item = each_array_1[$$index];
            $$renderer2.push(`<div class="output svelte-g3pyzz">${escape_html(item)}</div>`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[-1-->");
          if (line.content) {
            $$renderer2.push("<!--[-->");
            line.content($$renderer2, {});
            $$renderer2.push("<!--]-->");
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push("<!--]-->");
          }
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (!autoplay) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="input-line svelte-g3pyzz"><span class="prompt-label shrink-0 svelte-g3pyzz"${attr_style(`color: ${stringify(activeTheme.prompt)};`)}>${escape_html(promptStr || `${user}@host ${shell.currentPath.join("/")} $`)}</span> <input${attr("value", currentInput)} class="terminal-input svelte-g3pyzz"${attr_style(`color: ${stringify(activeTheme.cursor)}; caret-color: ${stringify(activeTheme.cursor)};`)} spellcheck="false" autocomplete="off"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="input-line svelte-g3pyzz"><span class="prompt-label shrink-0 svelte-g3pyzz"${attr_style(`color: ${stringify(activeTheme.prompt)};`)}>${escape_html(promptStr || `${user}@host ${shell.currentPath.join("/")} $`)}</span> <span class="svelte-g3pyzz">${escape_html(currentInput)}</span> <span class="cursor-block svelte-g3pyzz"${attr_style(`background-color: ${stringify(activeTheme.cursor)};`)}></span></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, {
      commands,
      structure,
      theme,
      welcomeMessage,
      user,
      promptStr,
      autoplay,
      autoplayLoop,
      typingSpeed,
      class: clazz,
      getShell
    });
  });
}
function About($$renderer) {
  const fileSystem = {
    "readme.md": `thelinuxguy-ssh@github
-----------------
OS: Arch (Primary) · Windows[VM] (for no privacy) · OSX[VM] (for feeling dumb)
Role: Server Administrator · Full-Stack Developer · Freelancer
Desktop Environment: Hyprland · GNOME
Shell: ZSH
Editor: Neovim · VSCodium
Theme: Matrix Dark

Lang: JS · TS · BASH
FW: React · React Native · Next.js · Three.js
Stack: Nginx · Supabase · Postgres · Docker

Projects: SkillHiive · HyprFect · DarwinX · Start-Page · Unite.Do
Mode: Building SkillHiive · Freelancing · Privacy
Music: Soundtracks · Phonk · Soul
      `,
    secrets: { github_token: "You really thought this was it?" }
  };
  let isBored = false;
  const commands = {
    help: () => "Available commands: fetch, clear, ls, cat, cd, pwd, help, history, mkdir, touch, rm, alias",
    fetch: () => `thelinuxguy-ssh@github
-----------------
OS: Arch (Primary) · Windows[VM] (for no privacy) · OSX[VM] (for feeling dumb)
Role: Server Administrator · Full-Stack Developer · Freelancer
Desktop Environment: Hyprland · GNOME
Shell: ZSH
Editor: Neovim · VSCodium
Theme: Matrix Dark

Lang: JS · TS · BASH
FW: React · React Native · Next.js · Three.js
Stack: Nginx · Supabase · Postgres · Docker

Projects: SkillHiive · HyprFect · DarwinX · Start-Page · Unite.Do
Mode: Building SkillHiive · Freelancing · Privacy
Music: Soundtracks · Phonk · Soul
      `
  };
  $$renderer.push(`<audio preload="metadata" class="svelte-1pch8ix"><source src="/audio/boot.mp3" type="audio/mpeg" class="svelte-1pch8ix"/></audio> <section class="about svelte-1pch8ix"><div class="bg svelte-1pch8ix"><div class="svelte-1pch8ix"></div></div> <div class="header-text svelte-1pch8ix" aria-hidden="true"><div class="header-spacing revolutionising svelte-1pch8ix" style="font-size: 5.75vw">Revolutionising</div> <div class="glow-filter svelte-1pch8ix" data-text="The Internet" style="filter: hue-rotate(90deg);">The Internet</div> <div class="header-spacing server svelte-1pch8ix" style="font-size: 5.75vw;">One <span class="header-main-text svelte-1pch8ix">Server</span> At A Time.</div></div> <svg class="filters svelte-1pch8ix" width="1440px" height="300px" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs class="svelte-1pch8ix"><filter id="glow-4" color-interpolation-filters="sRGB" x="-50%" y="-200%" width="200%" height="500%" class="svelte-1pch8ix"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" class="svelte-1pch8ix"></feGaussianBlur><feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" class="svelte-1pch8ix"></feGaussianBlur><feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" class="svelte-1pch8ix"></feGaussianBlur><feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" class="svelte-1pch8ix"></feGaussianBlur><feColorMatrix in="blur4" result="color-0-blur" type="matrix" values="
          1 0 0 0 0
          0 0.9803921568627451 0 0 0
          0 0 0.9647058823529412 0 0
          0 0 0 0.8 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" class="svelte-1pch8ix"></feOffset><feColorMatrix in="blur19" result="color-1-blur" type="matrix" values="
          0.8156862745098039 0 0 0 0
          0 0.49411764705882355 0 0 0
          0 0 0.2627450980392157 0 0
          0 0 0 1 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" class="svelte-1pch8ix"></feOffset><feColorMatrix in="blur9" result="color-2-blur" type="matrix" values="
          1 0 0 0 0
          0 0.6666666666666666 0 0 0
          0 0 0.36470588235294116 0 0
          0 0 0 0.65 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" class="svelte-1pch8ix"></feOffset><feColorMatrix in="blur30" result="color-3-blur" type="matrix" values="
          1 0 0 0 0
          0 0.611764705882353 0 0 0
          0 0 0.3921568 0 0
          0 0 0 1 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="16" class="svelte-1pch8ix"></feOffset><feColorMatrix in="blur30" result="color-5-blur" type="matrix" values="
          0.4235294117647059 0 0 0 0
          0 0.19607843137254902 0 0 0
          0 0 0.11372549019607843 0 0
          0 0 0 1 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-5-blur" result="layer-5-offsetted" dx="0" dy="64" class="svelte-1pch8ix"></feOffset><feColorMatrix in="blur30" result="color-6-blur" type="matrix" values="
          0.21176470588235294 0 0 0 0
          0 0.10980392156862745 0 0 0
          0 0 0.07450980392156863 0 0
          0 0 0 1 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-6-blur" result="layer-6-offsetted" dx="0" dy="64" class="svelte-1pch8ix"></feOffset><feColorMatrix in="blur30" result="color-7-blur" type="matrix" values="
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 0.68 0
        " class="svelte-1pch8ix"></feColorMatrix><feOffset in="color-7-blur" result="layer-7-offsetted" dx="0" dy="64" class="svelte-1pch8ix"></feOffset><feMerge class="svelte-1pch8ix"><feMergeNode in="layer-0-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="layer-1-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="layer-2-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="layer-3-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="layer-5-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="layer-6-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="layer-7-offsetted" class="svelte-1pch8ix"></feMergeNode><feMergeNode in="SourceGraphic" class="svelte-1pch8ix"></feMergeNode></feMerge></filter></defs></svg> <section class="gray svelte-1pch8ix"><div class="box gradient-green svelte-1pch8ix"></div></section></section> <section class="about-real svelte-1pch8ix" id="about"><div${attr_class("about-change svelte-1pch8ix", void 0, { "appear": isBored })} id="change-is-real"></div> <div class="about-content svelte-1pch8ix" id="content"><div class="pccase svelte-1pch8ix" data-aos="fade-right" data-aos-delay="0.5"><div class="screen oldscreeneffect svelte-1pch8ix"><div${attr_class("desktop svelte-1pch8ix", void 0, { "netboot": isBored })}><div class="tlg-link svelte-1pch8ix"><video class="tlg-link-vid svelte-1pch8ix" src="/tlglink.mp4" muted="" playsinline=""></video></div> `);
  Terminal($$renderer, {
    structure: fileSystem,
    class: "tlg-terminal",
    commands,
    user: "TLG",
    autofocus: true,
    theme: {
      background: "transparent",
      foreground: "#00fe1a",
      prompt: "#fff"
    },
    welcomeMessage: `Type 'help' for known commands`,
    typewriter: true,
    syntaxHighlight: true,
    ghostCompletion: true,
    bootplay: [{ command: "fetch" }]
  });
  $$renderer.push(`<!----></div> <div${attr_class("screentext svelte-1pch8ix", void 0, { "bored": isBored })}><p class="sctext svelte-1pch8ix">Booting</p> <hr class="svelte-1pch8ix"/> <p class="sctext svelte-1pch8ix"><span class="about-title svelte-1pch8ix">▄▀█ █▄▄ █▀█ █░█ ▀█▀   █▀▄▀█ █▀▀<br class="svelte-1pch8ix"/> █▀█ █▄█ █▄█ █▄█ ░█░   █░▀░█ ██▄<br class="svelte-1pch8ix"/></span> <br class="svelte-1pch8ix"/>A passionate Tech Enthusiast who is a well experienced Server
            Administrator, Web Developer, Designer with a great sense of humour.
            A mind which works just like electrical current in terms of coding,
            finding the shortest and least resistant path towards a goal, that
            is keeping a clean and optimised code ensuring the best efficiency
            to get the best out of his projects. Self Reliant like the Servers,
            Creative like the Builders. A refined observer caring about every
            pixel of detail. Not a perfectionist, Just <span class="sc-highlight svelte-1pch8ix">Precision-Driven</span><b class="svelte-1pch8ix">.</b><br class="svelte-1pch8ix"/><br class="svelte-1pch8ix"/>Copyright (c) 2026<br class="svelte-1pch8ix"/></p> <p class="sctext change-text svelte-1pch8ix">Bored yet? Same. Let’s <button class="change-is-necessary svelte-1pch8ix">change</button> that.</p></div></div></div></div></section>`);
}
const githubLogo = "/_app/immutable/assets/github.DFfuPLv2.webp";
const monkey = "/_app/immutable/assets/monkeytype.rCyoUCor.png";
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="bottom-nav svelte-1jnx671"><div class="nav-wrap svelte-1jnx671"><nav class="nav-bar"><ul class="nav-list svelte-1jnx671"><li class="nav-item svelte-1jnx671"><a href="https://github.com/thelinuxguy-ssh" class="nav-item__link svelte-1jnx671" target="_blank" rel="me">`);
    {
      $$renderer2.push("<!--[0-->");
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<img${attr("src", githubLogo)} loading="eager" alt="Github Icon" class="image svelte-1jnx671"/>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></a> <div class="nav-item__tooltip svelte-1jnx671"><div>Github</div></div></li> <li class="nav-item svelte-1jnx671"><a href="https://monkeytype.com/profile/TheLinuxGuy-ssh" class="nav-item__link svelte-1jnx671" target="_blank" rel="me">`);
    {
      $$renderer2.push("<!--[0-->");
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<img${attr("src", monkey)} loading="eager" alt="Monkeytype Icon" class="image svelte-1jnx671" style="border-radius: 0.1em"/>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></a> <div class="nav-item__tooltip svelte-1jnx671"><div>Monkeytype</div></div></li></ul></nav></div></section>`);
  });
}
function Desktop($$renderer) {
  $$renderer.push(`<div class="desktop-container svelte-ok63kg"><h1 class="desktop-title svelte-ok63kg">Current Desktop</h1> <div class="current-desktop svelte-ok63kg"><video src="/Desktop.mp4" muted="" loop="" playsinline="" class="svelte-ok63kg"></video></div></div>`);
}
const projects = [{ "name": "Duskmeter", "desc": "Corrected sky brightness estimates from fused VIIRS satellite radiance and ground-truth observations. Quantifies LED light pollution invisible to every public map.", "type": "Web Application", "url": "https://duskmeter.linuxguy.tech", "github": "duskmeter", "status": "2", "tags": [{ "name": "SvelteKit", "accent": "#FF3E00" }, { "name": "TypeScript", "accent": "#3178C6" }, { "name": "Tailwind", "accent": "#06B6D4" }, { "name": "Three.js", "accent": "#F05023" }, { "name": "SQLite", "accent": "#0F9BB5" }, { "name": "Docker", "accent": "#2496ED" }, { "name": "Leaflet", "accent": "#199900" }] }, { "name": "CV", "desc": "An ATS friendly CV template with single file config, built for the web and to be exported as a document on print", "type": "Web Application", "url": "https://cv-bbe2.vercel.app/", "github": "cv", "status": "2", "tags": [{ "name": "Next.js", "accent": "#0070F3" }, { "name": "Typescript", "accent": "#3178C6" }, { "name": "CSS", "accent": "#CC6699" }] }, { "name": "Kepler", "desc": "A Web Application to track the International Space Station and other satellites in real time with a 3D model of the earth and the satellites orbiting it.", "type": "Web Application (Contributor)", "url": "https://keplerai.vercel.app", "github": "https://github.com/7-blocks/kepler", "status": "4", "tags": [{ "name": "Three.js", "accent": "#F05023" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }], "skills": [{ "name": "Web Development", "accent": "#7FB8FF" }, { "name": "3D", "accent": "#7FB8FF" }] }, { "name": "Sosh Media", "desc": "A Creative Agency built for brands that actually have something to say.", "type": "Website", "status": "1", "tags": [{ "name": "Three.js", "accent": "#F05023" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }], "skills": [{ "name": "Web Development", "accent": "#7FB8FF" }, { "name": "3D", "accent": "#7FB8FF" }] }, { "name": "StarWalk CA", "desc": "A Shell based mTLS Certificate automation for orchestrating node setup, configuration, and lifecycle operations. (For Org Use Only)", "type": "Unix Package / Daemon", "status": "4", "tags": [{ "name": "Bash", "accent": "#73A5CA" }, { "name": "CronD", "accent": "#FFEE8C" }] }, { "name": "SkillHiive Stack", "desc": "Upcoming Web + Mobile Stack for SkillHiive", "type": "Web + Mobile Application", "status": "1", "tags": [{ "name": "React", "accent": "#61DBFB" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }, { "name": "Postgres", "accent": "#7FB8FF" }], "skills": [{ "name": "Web App Development", "accent": "#7FB8FF" }, { "name": "Server Administration", "accent": "#7FB8FF" }, { "name": "devOPs", "accent": "#7FB8FF" }] }, { "name": "Hyprfect", "desc": "Hyprland configuration for a clean, minimal arch linux setup!", "type": "Linux Dotfiles", "github": "hyprfect", "status": "4", "tags": [{ "name": "Bash", "accent": "#73A5CA" }, { "name": "SCSS", "accent": "#CC6699" }, { "name": "GLSL", "accent": "#50C878" }], "skills": [{ "name": "LINUX RICING", "accent": "#7FB8FF" }, { "name": "SCRIPTING", "accent": "#7FB8FF" }] }, { "name": "The Spartan Rage", "desc": "Kratos faces his next adventure in the egyptian mythology after his son walks on a different path.", "type": "2D Game", "url": "https://thelinuxguy-ssh.github.io/TheSpartanRage", "github": "thespartanrage", "status": "3", "tags": [{ "name": "GDScript", "accent": "#478cbf" }, { "name": "Pixilart", "accent": "#FF0000" }], "skills": [{ "name": "Game Development", "accent": "#7FB8FF" }, { "name": "PIXEL ART", "accent": "#7FB8FF" }] }, { "name": "DarwinX", "desc": "An online experience of macOS at the cost of nothing but Internet packets", "type": "Web Application", "url": "https://darwinx.vercel.app", "github": "darwinx", "status": "0", "tags": [{ "name": "React", "accent": "#61DBFB" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }], "skills": [{ "name": "Web App Development", "accent": "#7FB8FF" }, { "name": "SCRIPTING", "accent": "#7FB8FF" }] }, { "name": "ESP32 Irrigation Automation", "desc": "This project provides a soil moisture monitoring system using an ESP32 and a soil moisture sensor. The system reads moisture levels from the sensor and displays the readings", "type": "IoT", "github": "esp32irrigation", "status": "2", "tags": [{ "name": "CSS", "accent": "#CC6699" }, { "name": "Adruino", "accent": "#478cbf" }], "skills": [{ "name": "IOT", "accent": "#7FB8FF" }, { "name": "Adruino Programming", "accent": "#7FB8FF" }, { "name": "Web Development", "accent": "#7FB8FF" }] }, { "name": "Marine Consultancy Group", "desc": "Marine Consultancy Services (MCS) is a design-driven marine consultancy firm supporting shipyards, vessel owners, and government agencies across India, Bangladesh, Sri Lanka, and Southeast Asia", "type": "Website", "url": "https://www.shipconsultant.org", "status": "2", "tags": [{ "name": "Three.js", "accent": "#F05023" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }], "skills": [{ "name": "Web Development", "accent": "#7FB8FF" }, { "name": "3D", "accent": "#7FB8FF" }] }, { "name": "Tagged", "desc": "Co-op game where two players play tag to win!", "type": "Game", "url": "https://thelinuxguy-ssh.github.io/Tagged", "github": "Tagged", "status": "2", "tags": [{ "name": "GDScript", "accent": "#478cbf" }, { "name": "Pixilart", "accent": "#FF0000" }], "skills": [{ "name": "Game Development", "accent": "#7FB8FF" }, { "name": "PIXEL ART", "accent": "#7FB8FF" }] }, { "name": "Global Insulation", "desc": "An insulation company which supplies insulation material all over Victoria, Austrailia", "type": "Website", "url": "https://www.globalinsulation.com.au", "status": "2", "tags": [{ "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }, { "name": "Three.js", "accent": "#F05023" }, { "name": "Adobe Premiere Pro", "accent": "#b76fff" }, { "name": "Adobe After Effects", "accent": "#CF96FD" }], "skills": [{ "name": "Web Development", "accent": "#7FB8FF" }, { "name": "Web Development", "accent": "#7FB8FF" }] }, { "name": "TLG Start Page", "desc": "Your Personal Browser Start Page from the Future! ", "type": "Web Application", "url": "https://tlg-start-page.vercel.app/", "github": "tlg-start-page", "status": "2", "tags": [{ "name": "Next.js", "accent": "#0070F3" }, { "name": "Docker", "accent": "#0db7ed" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }, { "name": "Bash", "accent": "#ED1C24" }, { "name": "Powershell", "accent": "#8FAAFF" }] }, { "name": "TLG Links", "desc": "A fork for TLG Start Page for specifically routing people through a set of personalised links in a presentable format ", "type": "Web Application", "url": "https://tlg-links.vercel.app/", "github": "tlg-links", "status": "2", "tags": [{ "name": "Next.js", "accent": "#0070F3" }, { "name": "Docker", "accent": "#0db7ed" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }, { "name": "Bash", "accent": "#ED1C24" }, { "name": "Powershell", "accent": "#8FAAFF" }] }, { "name": "Unite.Do", "desc": "A Task management Web app for team management", "type": "Web Application", "url": "https://unite-do.vercel.app", "github": "unite.do", "status": "3", "tags": [{ "name": "React", "accent": "#61DBFB" }, { "name": "Postgres", "accent": "#7FB8FF" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }] }, { "name": "DigiPod", "desc": "A Landing page for an upcoming AI tool!", "type": "Website", "github": "DigiPod-Website", "status": "2", "tags": [{ "name": "Three.js", "accent": "#F05023" }, { "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }] }, { "name": "COSMA2k24", "desc": "An Inter-School Tech Event Website", "type": "Website", "url": "https://thelinuxguy-ssh.github.io/cosma2k24/", "status": "2", "tags": [{ "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }, { "name": "Three.js", "accent": "#F05023" }] }, { "name": "Mahaveer International School", "desc": "A website for Mahaveer International school, situated in north-west outskirt of historical city of Meerut", "type": "Website", "url": "https://mismeerut.com/", "status": "2", "tags": [{ "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }] }, { "name": "JP Academy", "desc": "A website for a school which is a part of the JP Educational Trust Society laying it's foundation in the educational field", "type": "Website", "url": "https://jpacademy.in", "status": "2", "tags": [{ "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }] }, { "name": "COSMA 2023", "desc": "A website for an inter-school Tech Event", "type": "Website", "url": "https://thelinuxguy-ssh.github.io/cosma/", "status": "2", "tags": [{ "name": "JS", "accent": "#F7DF1E" }, { "name": "CSS", "accent": "#CC6699" }] }];
const linkArrow = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20role='img'%20xmlns='http://www.w3.org/2000/svg'%20aria-labelledby='arrowRightTopIconTitle'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20fill='none'%20color='%23000000'%3e%3ctitle%20id='arrowRightTopIconTitle'%3eArrow%20Right%20Top%3c/title%3e%3cpath%20d='M19%2013V5h-8'/%3e%3cpath%20stroke-linecap='round'%20d='M19%205l-1%201'/%3e%3cpath%20d='M18%206L5%2019'/%3e%3c/svg%3e";
function Work($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const statusMap = {
      0: { label: "Deprecated", class: "deprecated" },
      1: { label: "Ongoing", class: "ongoing" },
      2: { label: "Completed", class: "completed" },
      3: { label: "Paused", class: "paused" },
      4: { label: "Maintained", class: "maintained" }
    };
    $$renderer2.push(`<div class="projects svelte-15hxidr"><div id="trailer">`);
    {
      $$renderer2.push("<!--[0-->");
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<img id="trailer-icon"${attr("src", linkArrow)} alt=""/>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <h1 class="project-title svelte-15hxidr">What I’ve been up to.</h1> <!--[-->`);
    const each_array_1 = ensure_array_like(Object.entries(projects));
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let [key, project] = each_array_1[index];
      const status = statusMap[project.status] || { label: "Unknown", class: "" };
      $$renderer2.push(`<div class="project svelte-15hxidr">`);
      if (project.url != null) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", project.url || null)} aria-label="project" target="_blank"${attr_class("svelte-15hxidr", void 0, { "interactable": project.url != null })}><video class="project-vid svelte-15hxidr" preload="metadeta"${attr("src", "/images/projects/" + project.name + ".mp4")} muted="" autoplay="" loop="" playsinline=""></video></a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="svelte-15hxidr"><video class="project-vid svelte-15hxidr" preload="metadeta"${attr("src", "/images/projects/" + project.name + ".mp4")} muted="" autoplay="" loop="" playsinline=""></video></div>`);
      }
      $$renderer2.push(`<!--]--> <div class="project-content svelte-15hxidr"><h2 class="project-name svelte-15hxidr">${escape_html(project.name)} <span class="project-type svelte-15hxidr">[${escape_html(project.type)}]</span> <div href=""${attr_class(`status-btn ${stringify(status.class)}`, "svelte-15hxidr")}>${escape_html(status.label)}</div></h2> <p class="project-desc svelte-15hxidr">${escape_html(project.desc)}</p> <div class="project-links svelte-15hxidr">`);
      if (project.github != null) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a class="github-btn svelte-15hxidr"${attr("href", project.github.slice(0, 5) != "https" ? "https://git.linuxguy.tech/thelinuxguy/" + project.github : project.github)} target="_blank">`);
        {
          $$renderer2.push("<!--[0-->");
          {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`<img${attr("src", githubLogo)} alt="" class="svelte-15hxidr"/>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--> Github</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (project.url != null) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", project.url)} class="live-btn svelte-15hxidr" target="_blank">Visit</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="tags svelte-15hxidr"><!--[-->`);
      const each_array_3 = ensure_array_like(Object.entries(project.tags || {}));
      for (let index2 = 0, $$length2 = each_array_3.length; index2 < $$length2; index2++) {
        let [key2, tag] = each_array_3[index2];
        $$renderer2.push(`<div class="tag svelte-15hxidr"${attr_style("", { color: tag.accent })}>${escape_html(tag.name)}</div>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Miscellaneous($$renderer) {
  $$renderer.push(`<div class="transition-comp"></div>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="footer svelte-1sr6y3t" id="contact"><div class="work-together svelte-1sr6y3t"><h1 style="text-align: center; backdrop-filter: blur(0px);" class="svelte-1sr6y3t">Let's Talk.</h1></div> <div class="footer-links svelte-1sr6y3t"><a target="_blank" href="mailto:mr.linux.0@protonmail.com" data-scroll="" class="svelte-1sr6y3t"><button class="Btn-Container svelte-1sr6y3t"><span class="text svelte-1sr6y3t">mr.linux.0@protonmail.com</span> <span class="icon-Container svelte-1sr6y3t"><svg width="16" height="19" viewBox="0 0 16 19" fill="nones" xmlns="http://www.w3.org/2000/svg" class="svelte-1sr6y3t"><circle cx="1.61321" cy="1.61321" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="5.73583" cy="1.61321" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="5.73583" cy="5.5566" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="9.85851" cy="5.5566" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="9.85851" cy="9.5" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="13.9811" cy="9.5" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="5.73583" cy="13.4434" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="9.85851" cy="13.4434" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="1.61321" cy="17.3868" r="1.5" fill="black" class="svelte-1sr6y3t"></circle><circle cx="5.73583" cy="17.3868" r="1.5" fill="black" class="svelte-1sr6y3t"></circle></svg></span></button></a></div></footer>`);
}
function Marquee($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "play",
    "playsCount",
    "speed",
    "direction",
    "mode",
    "showGradient",
    "showLeadingGradient",
    "showTrailingGradient",
    "clientWidth",
    "clientHeight",
    "style",
    "class"
  ]);
  $$renderer.component(($$renderer2) => {
    let duration;
    let play = fallback($$props["play"], true);
    let playsCount = fallback($$props["playsCount"], 0);
    let speed = fallback($$props["speed"], 100);
    let direction = fallback($$props["direction"], "right");
    let mode = fallback($$props["mode"], "multiple");
    let showGradient = fallback($$props["showGradient"], false);
    let showLeadingGradient = fallback($$props["showLeadingGradient"], false);
    let showTrailingGradient = fallback($$props["showTrailingGradient"], false);
    let clientWidth = fallback($$props["clientWidth"], 0);
    let clientHeight = fallback($$props["clientHeight"], 0);
    let style = fallback($$props["style"], void 0);
    let className = fallback($$props["class"], void 0);
    const dispatch = createEventDispatcher();
    let interval;
    function getProgress(animation) {
      const currentTime = animation.currentTime;
      if (!currentTime || typeof currentTime !== "number") return 0;
      const duration2 = animation.effect?.getComputedTiming().duration;
      if (!duration2 || typeof duration2 !== "number") return 0;
      return currentTime / duration2;
    }
    function stopInterval() {
      if (interval) clearInterval(interval);
    }
    let marquees = [];
    let animations = [];
    let marqueeWidth = 0;
    let marqueeHeight = 0;
    onDestroy(() => {
      stopInterval();
      for (const animation of animations) {
        animation.cancel();
      }
    });
    if (playsCount < 0) throw new Error('"playsCount" must be greater than or equal to 0');
    if (speed <= 0) throw new Error('"speed" must be strictly greater than 0');
    duration = direction === "left" || direction === "right" ? marqueeWidth / speed : marqueeHeight / speed;
    if (marquees.length) {
      animations = marquees.map((marquee, index) => marquee.animate(
        [
          {
            transform: `
						translateX(${direction === "right" ? "-100%" : "0"})
						translateY(${direction === "down" ? "-100%" : "0"})
						`
          },
          {
            transform: `
						translateX(${direction === "left" ? "-100%" : "0"})
						translateY(${direction === "up" ? "-100%" : "0"})
						`
          }
        ],
        {
          id: `marquee-${index}`,
          duration: (duration ?? 1) * 1e3,
          iterations: playsCount || Infinity,
          easing: "linear"
        }
      ));
      for (const [i, animation] of animations.entries()) {
        if (i > 0) continue;
        animation.onfinish = () => {
          stopInterval();
          play = false;
        };
      }
    }
    if (play) {
      for (const animation of animations) {
        animation.play();
      }
      stopInterval();
      interval = setInterval(() => {
        if (!animations.length) {
          stopInterval();
          return;
        }
        dispatch("progress", { progress: getProgress(animations[0]) });
      });
    } else if (animations.length && animations[0].playState === "running") {
      for (const animation of animations) {
        animation.pause();
      }
      dispatch("playpause", { progress: getProgress(animations[0]) });
      stopInterval();
    }
    $$renderer2.push(`<div${attributes(
      {
        class: `marquee-container ${stringify(
          /**
           * Get the progress of the animation
           * @param animation {Animation} The animation to get the progress of
           * @returns {number} The progress of the animation as a number between 0 and 1
           */
          /** @type {HTMLDivElement[]} */
          /** @type {Animation[]} */
          /** @type {number | undefined} */
          // MARK: Component unmount
          className ?? ""
        )}`,
        style,
        role: "marquee",
        ...$$restProps
      },
      "svelte-c1c7lb",
      void 0,
      {
        "--_leading-gradient-width": showGradient || showLeadingGradient ? "10%" : void 0,
        "--_trailing-gradient-width": showGradient || showTrailingGradient ? "10%" : void 0,
        "--_direction": direction === "up" || direction === "down" ? "column" : "row",
        "--_gradient-direction": direction === "up" || direction === "down" ? "bottom" : "right"
      }
    )}><div class="marquee svelte-c1c7lb"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div> `);
    if (mode === "multiple") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="marquee svelte-c1c7lb"><!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, {
      play,
      playsCount,
      speed,
      direction,
      mode,
      showGradient,
      showLeadingGradient,
      showTrailingGradient,
      clientWidth,
      clientHeight,
      style,
      class: className
    });
  });
}
function Widget($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let status = "Loading...";
    let type = "Idle";
    let play = false;
    onDestroy(() => {
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="widget svelte-16fhpi8"><div class="playing svelte-16fhpi8">Currently ${escape_html(type)}</div> <div class="master-wrapper svelte-16fhpi8">`);
      Marquee($$renderer3, {
        speed: 30,
        style: "--gap: 2.75em",
        direction: "left",
        get play() {
          return play;
        },
        set play($$value) {
          play = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<span class="marquee-content svelte-16fhpi8">${escape_html(status)}</span> <span class="marquee-content svelte-16fhpi8">${escape_html(status)}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Wakatime($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let weeklyHours = "Loading...";
    $$renderer2.push(`<div class="wakatime-widget svelte-hlsb7b"><span class="coded svelte-hlsb7b">Weekly Coding</span>: ${escape_html(weeklyHours)}</div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>TheLinuxGuy | Tech Enthusiast</title>`);
      });
      $$renderer3.push(`<meta charset="UTF-8"/> <link rel="icon" type="image/svg+xml" href="/images/general/logo.webp"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta name="title" content="TheLinuxGuy | Tech Enthusiast"/> <meta name="description" content="I live and breathe Linux, manage powerful servers, and build fast, functional websites with eye-catching design. With lightning-fast fingers, I turn ideas into custom web development and server solutions before you can blink—and nothing is ever “good enough.” Welcome to my digital playground for Linux enthusiasts, web developers, and anyone who loves high-performance, beautifully designed websites."/> <meta name="keywords" content="Linux developer, server management, web developer, website design, web development portfolio, full-stack development, system administration, Linux enthusiast, server solutions, custom websites, high-performance websites, fast web development, functional website design, Linux system expert, web development with design focus, personal tech portfolio, website optimization expert, Linux and server administration, web design and development projects"/> <meta name="robots" content="index, follow"/> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="language" content="English"/> <meta name="revisit-after" content="14 days"/> <meta name="author" content="TheLinuxGuy"/>`);
    });
    $$renderer2.push(`<link rel="stylesheet" href="/css/normalize.css"/> <link rel="stylesheet" href="/css/links.css"/> <link rel="stylesheet" href="/css/locomotive.css"/> <link rel="stylesheet" href="/css/style.css"/> `);
    Nav($$renderer2);
    $$renderer2.push(`<!----> `);
    Miscellaneous($$renderer2);
    $$renderer2.push(`<!----> <main class="mega-container" data-scroll-container="">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> `);
    Hero($$renderer2);
    $$renderer2.push(`<!----> `);
    Wakatime($$renderer2);
    $$renderer2.push(`<!----> `);
    About($$renderer2);
    $$renderer2.push(`<!----> `);
    Desktop($$renderer2);
    $$renderer2.push(`<!----> `);
    Work($$renderer2);
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> `);
    Widget($$renderer2);
    $$renderer2.push(`<!----></main>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-CuKcNAAw.js.map
