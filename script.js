//your JS code here. If required.
   
        // Function to get the browser name and version
        function getBrowserInfo() {
            var browserInfo = "Unknown";
            
            // Check if the browser is Chrome
            if (navigator.userAgent.indexOf("Chrome") != -1) {
                var version = navigator.userAgent.match(/Chrome\/(\d+)\./)[1];
                browserInfo = "Google Chrome version " + version;
            }
            // Check if the browser is Firefox
            else if (navigator.userAgent.indexOf("Firefox") != -1) {
                var version = navigator.userAgent.match(/Firefox\/(\d+)\./)[1];
                browserInfo = "Mozilla Firefox version " + version;
            }
            // Check if the browser is Safari
            else if (navigator.userAgent.indexOf("Safari") != -1) {
                var version = navigator.userAgent.match(/Version\/(\d+)\./)[1];
                browserInfo = "Safari version " + version;
            }
            // Check if the browser is Internet Explorer
            else if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident/") != -1) {
                var version = navigator.userAgent.match(/MSIE (\d+)\./)[1];
                browserInfo = "Internet Explorer version " + version;
            }
            // Check if the browser is Edge
            else if (navigator.userAgent.indexOf("Edge") != -1) {
                var version = navigator.userAgent.match(/Edge\/(\d+)\./)[1];
                browserInfo = "Microsoft Edge version " + version;
            }

            return browserInfo;
        }

        // Get the browser information and display it on the page
        var browserInfo = getBrowserInfo();
        var browserInfoElement = document.getElementById("browser-info");
        browserInfoElement.textContent = "You are using " + browserInfo;
   


    // window.onload = function() {
    //   const browserInfo = getBrowserInfo();
    //   displayMessage(browserInfo);
    // };

    // function getBrowserInfo() {
    //   const browserName = navigator.appName;
    //   const browserVersion = navigator.appVersion;
    //   return {
    //     name: browserName,
    //     version: browserVersion
    //   };
    // }

    // function displayMessage(browserInfo) {
		
    //   const message = "You are using " + browserInfo.name + " " + browserInfo.version;
      document.getElementById("browser-info").innerHTML = message;
    }
  