const redirectButton = document.getElementById("redirectButton");

redirectButton.addEventListener("click", async () => {
  await chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.tabs.create({
      active: true,
      url: "https://archive.ph/" + tabs[0].url,
    });
  });
});
