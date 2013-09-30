Products = new Meteor.Collection("products", {
  transform: function (doc) {
    return Product(
      doc.previewImageURL, doc.shirtImageURL, doc.mugImageURL,
      doc.posterImageURL, doc.shirtLink, doc.mugLink, doc.posterLink);
  }
});
