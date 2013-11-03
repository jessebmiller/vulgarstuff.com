var everything = function () {
    return Products.find();
};

var setView = function (view, passthrough) {
    console.log(view, passthrough);
    Session.set("view", view);
    console.log(Tyson.view(passthrough));
    return passthrough;
}.autoCurry();

var fullSummary = function () {
    Session.set("view", "summary");
    return Products.find();
};


Tyson.registerHomeController("full-summary");
Tyson.registerControllers([
    ["everything", everything],
    ["set-view", setView],
    ["full-summary", fullSummary]
]);
