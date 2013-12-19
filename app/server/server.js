var stubProduct = {
    image: 'mock-product.jpg',
    title: 'Fuck Tee',
    link: 'http://www.google.com',
    description: "some text that will make sure that we are describing the product and making you want that motherfucker. look cool as shit, like a boss. like a boss who doesn't give a fuck. Flying or otherwise. ... motherfucker."
};

Meteor.startup(function () {
    Products.remove({});
    Products.insert(stubProduct);
});
