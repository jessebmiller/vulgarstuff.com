Product = Constructor(
  function (title, image, link, description) {
    var self = this;
    self.title = title;
    self.image = image;
    self.link = link;
    self.description = description;
  }
);

YouTubeVideo = Constructor(
    function (title, slug, description, videoId) {
        var self = this;
        self.title = title;
        self.slug = slug;
        self.description = description;
        self.videoId = videoId;
    }
);
