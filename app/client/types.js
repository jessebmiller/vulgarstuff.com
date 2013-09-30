Product = Constructor(
  function (previewImageURL, shirtImageURL, mugImageURL, posterImageURL,
            shirtlink, mugLink, posterLink) {
    var self = this;
    self.previewImageURL = previewImageURL;
    self.options = [
      {
        type: "Shirt",
        image: shirtImageURL,
        link: shirtLink
      },
      {
        type: "Mug",
        image: mugImageURL,
        link: mugLink
      },
      {
        type: "Poster",
        image: posterImageURL,
        link: posterLink
      }];
  });

function registerViews(type, views) {
  Tyson.Viewable(type, {
    views: function () { return views; }
  }
}

registerViews(Product, {
  view: Template.productDetail,
  summary: Template.productSummary
});
