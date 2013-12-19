var everything = function () {
    return [YouTubeVideos.find(), Products.find()];
};

var fullSummary = function () {
    return YouTubeVideos.find();
};

var youTubeVideo = function (slug) {
    Session.set("view", "productAd");
    return [YouTubeVideos.findOne({slug: slug})];
};

var products = function () {
    return Products.find();
};

Tyson.registerHomeController("full-summary");
Tyson.registerControllers([
    ["everything", everything],
    ["full-summary", fullSummary],
    ["you-tube-video", youTubeVideo],
    ["shit", products]
]);
