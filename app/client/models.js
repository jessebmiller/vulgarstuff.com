function registerViews(type, views) {
  Tyson.Viewable(type, {
    views: function () { return views; }
  });
}

Meteor.startup(function () {
    registerViews(Product, {
        view: Template.productDetail,
        productAd: Template.productAd,
        json: Template.json
    });

    registerViews(YouTubeVideo, {
        view: Template.youTubeVideoDetail,
        json: Template.json
    });
});
