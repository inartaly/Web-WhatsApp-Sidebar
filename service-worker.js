chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// This forces WhatsApp to use its mobile-responsive layout
const MOBILE_USER_AGENT = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1";

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [{
    id: 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [{ header: "user-agent", operation: "set", value: MOBILE_USER_AGENT }]
    },
    condition: {
      urlFilter: "||web.whatsapp.com/",
      resourceTypes: ["main_frame", "sub_frame"]
    }
  }]
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({
    path: 'https://web.whatsapp.com/',
    enabled: true
  });
});
