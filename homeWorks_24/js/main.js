require.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min',
        'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash'
    }
});


require(
    ["controller", "model", "view"],
    function (Controller, Model, View) {

        var initData = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];

        var model = new Model(initData);

        var view = new View(model.data);

        var control = new Controller(view, model);

    });