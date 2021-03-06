(function() {
    let radios = document.forms["version"].elements["django_version"];

    function setVersion(django_version) {
        version = django_version;
        console.log(version);
        browserAPI.sendMessage({
            action: "setVersion",
            django_version: version
        });
    }

    browserAPI.sendMessage({ action: "getVersion" }, django_version => {
        version = django_version;
    });

    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = function() {
            setVersion(this.value);
        };
    }

    console.debug("popup.js");
})();
