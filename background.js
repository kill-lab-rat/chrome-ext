chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.executeScript({
    target: { allFrames: true },
    func: () => {
      document.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        if (
          (e.ctrlKey && key === "s") ||
          (e.ctrlKey && key === "p") ||
          (e.ctrlKey && e.shiftKey && key === "i") ||
          key === "f12"
        ) {
          e.preventDefault();
          e.stopPropagation();
        }
      });

      document.addEventListener("contextmenu", (e) => e.preventDefault());
      document.addEventListener("dragstart", (e) => e.preventDefault());
    }
  });
});
