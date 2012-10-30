var pull = new Lungo.Element.Pull('section#pull article', {
    onPull: "Pull down to refresh",
    onRelease: "Release to get new data",
    onRefresh: "Refreshing...",
    callback: function() {
        alert("Pull & Refresh completed!");
        pull.hide();
    }
});
