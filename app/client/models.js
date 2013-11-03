function registerViews(type, views) {
  Tyson.Viewable(type, {
    views: function () { return views; }
  });
}

Meteor.startup(function () {
    registerViews(Product, {
        view: Template.productDetail,
        summary: Template.productSummary,
        json: Template.json
    });
});
