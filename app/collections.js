Products = new Meteor.Collection("products", {
  transform: function (doc) {
    console.log(doc);
    return Product(doc.image, doc.link, doc.description);
  }
});
