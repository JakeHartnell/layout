Package.describe({
    documentation: "README.md",
    git: "https://github.com/meteorwebcomponents/layout.git",
    name: "mwc:layout",
    summary: "mwc layout",
    version: "1.1.2"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0");

    api.addAssets("layout.mwc.html", ["client"]);
    api.addFiles("PolymerLayout.js", ["client"]);

    api.export("mwcLayout");
});
