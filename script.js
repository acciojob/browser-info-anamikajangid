//your JS code here. If required.

    window.onload = function() {
      const browserInfo = getBrowserInfo();
      displayMessage(browserInfo);
    };

    function getBrowserInfo() {
      const browserName = navigator.appName;
      const browserVersion = navigator.appVersion;
      return {
        name: browserName,
        version: browserVersion
      };
    }

    function displayMessage(browserInfo) {
		
      const message = "You are using " + browserInfo.name + " " + browserInfo.version;
      document.getElementById("browser-info").innerHTML = message;
    }
  