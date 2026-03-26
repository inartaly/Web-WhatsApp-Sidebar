// 1. Persistent event: keeps the service worker alive forever
chrome.action.onClicked.addListener(() => {
  chrome.sidePanel.open({ windowId: chrome.windows.WINDOW_ID_CURRENT });
});

// 2. Optional: keep default behavior (icon opens panel)
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// 3. Register the global panel path on install/update
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({
    path: 'https://web.whatsapp.com/',
    enabled: true
  });

  console.log("Extension installed. Ready to message!");
});
