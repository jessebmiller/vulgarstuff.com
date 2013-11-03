var stubProduct = {
    image: 'http://www.shimano.com/publish/content/global_cycle/en/us/index/products/pedals/road/product.image.+media+images+cycling+products+bikecomponents+PD+PD-A530_600x450_v1_m56577569830637299_dot_jpg.bm.512.384.gif',
    link: 'http://www.google.com',
    description: "some text that will make sure that we are describing the product and making you want that motherfucker. look cool as shit, like a boss. like a boss who doesn't give a fuck. Flying or otherwise. ... motherfucker."
};

Meteor.startup(function () {
    Products.remove({});
    Products.insert(stubProduct);
});
