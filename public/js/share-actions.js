(() => {
  const LINE_ADD_URL = "https://lin.ee/9wP0eOt";
  const SHARE_TEXT = "このページを共有します。";

  function getShareUrl() {
    return window.location.href.split("#")[0];
  }

  function setTemporaryLabel(button, text) {
    const original = button.textContent;
    button.textContent = text;
    window.setTimeout(() => {
      button.textContent = original;
    }, 1400);
  }

  async function copyUrl(button) {
    const url = getShareUrl();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        setTemporaryLabel(button, "コピー済み");
        return;
      }

      window.prompt("URLをコピーしてください", url);
    } catch (error) {
      window.prompt("URLをコピーしてください", url);
    }
  }

  async function sharePage(copyButton) {
    const shareData = {
      title: document.title || "軽貨物TAKE",
      text: SHARE_TEXT,
      url: getShareUrl(),
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    await copyUrl(copyButton);
  }

  function closeMenu(wrapper, toggle) {
    wrapper.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function createShareActions() {
    if (document.getElementById("share-actions")) return;

    const style = document.createElement("style");
    style.textContent = `
      #share-actions {
        position: fixed;
        top: calc(46px + env(safe-area-inset-top, 0px));
        right: 18px;
        z-index: 9999;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      #share-actions .share-toggle {
        min-width: 70px;
        height: 40px;
        border: 2px solid rgba(255,255,255,.95);
        border-radius: 999px;
        background: linear-gradient(135deg, #06c755, #16a34a);
        color: #fff;
        font-size: 14px;
        font-weight: 900;
        box-shadow: 0 8px 22px rgba(22, 163, 74, .30);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      #share-actions .share-menu {
        position: absolute;
        right: 0;
        top: 48px;
        display: none;
        min-width: 168px;
        padding: 8px;
        border-radius: 18px;
        background: rgba(255, 255, 255, .98);
        border: 1px solid #bbf7d0;
        box-shadow: 0 12px 32px rgba(0,0,0,.18);
      }

      #share-actions.is-open .share-menu {
        display: grid;
        gap: 8px;
      }

      #share-actions .share-menu a,
      #share-actions .share-menu button {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 999px;
        padding: 12px 14px;
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
        -webkit-tap-highlight-color: transparent;
      }

      #share-actions .line {
        background: #06c755;
        color: #fff;
      }

      #share-actions .share,
      #share-actions .copy {
        background: #fff7ed;
        color: #9a3412;
        border: 1px solid #fed7aa;
      }

      @media (max-width: 640px) {
        #share-actions {
          top: calc(44px + env(safe-area-inset-top, 0px));
          right: 10px;
        }

        #share-actions .share-toggle {
          min-width: 64px;
          height: 38px;
          font-size: 13px;
        }

        #share-actions .share-menu {
          top: 46px;
          min-width: 154px;
        }

        #share-actions .share-menu a,
        #share-actions .share-menu button {
          padding: 11px 12px;
          font-size: 13px;
        }
      }
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.id = "share-actions";
    wrapper.setAttribute("aria-label", "ページ共有と公式LINE");

    const toggle = document.createElement("button");
    toggle.className = "share-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "共有";

    const menu = document.createElement("div");
    menu.className = "share-menu";

    const line = document.createElement("a");
    line.className = "line";
    line.href = LINE_ADD_URL;
    line.target = "_blank";
    line.rel = "noopener noreferrer";
    line.textContent = "公式LINE";

    const share = document.createElement("button");
    share.className = "share";
    share.type = "button";
    share.textContent = "共有する";

    const copy = document.createElement("button");
    copy.className = "copy";
    copy.type = "button";
    copy.textContent = "URLコピー";

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = wrapper.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    share.addEventListener("click", async () => {
      await sharePage(copy);
      closeMenu(wrapper, toggle);
    });

    copy.addEventListener("click", async () => {
      await copyUrl(copy);
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        closeMenu(wrapper, toggle);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu(wrapper, toggle);
      }
    });

    menu.append(line, share, copy);
    wrapper.append(toggle, menu);
    document.body.appendChild(wrapper);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createShareActions);
  } else {
    createShareActions();
  }
})();
