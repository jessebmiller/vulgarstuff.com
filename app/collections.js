Products = new Meteor.Collection("products", {
  transform: function (doc) {
    return Product(doc.title, doc.image, doc.link, doc.description);
  }
});

YouTubeVideos = new Meteor.Collection("youTubeVideos", {
    transform: function (doc) {
        return YouTubeVideo(doc.title, doc.slug, doc.description, doc.videoId);
    }
});

