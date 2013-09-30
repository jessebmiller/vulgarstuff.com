Products = new Meteor.Collection("products", {
  transform: function (doc) {
    return Product(
      doc.type, doc.previewImageURL, doc.imageURL, doc.link);
  }
});
