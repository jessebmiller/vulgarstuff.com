Template.json.jsonOf = function (obj) {
    return EJSON.stringify(obj);
};

Template.youTubeVideoDetail.host = function () {
    return window.location.host;
};
