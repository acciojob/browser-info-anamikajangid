//your JS code here. If required.

    window.onload = function() {
      var browserInfo = getBrowserInfo();
      displayMessage(browserInfo);
    };

    function getBrowserInfo() {
      var browserName = navigator.appName;
      var browserVersion = navigator.appVersion;
      return {
        name: browserName,
        version: browserVersion
      };
    }

    function displayMessage(browserInfo) {
      var message = "You are using " + browserInfo.name + " " + browserInfo.version;
      document.getElementById("browser-info").innerHTML = message;
    }
  