define(
    'view',
    ['jquery', 'lodash'],

    function () {

        var View = function (obj) {

            var self = this;

            init = function () {

                var template = _.template($('#pattern').html());
                /*var content = template();*/
                $('body').append(template);

                self.elements = {
                    input: $('.textInput'),
                    addButton: $('.addButton'),
                    list: $('.list')
                }

                self.renderList(obj);


            }

            self.renderList = function (obj) {
                var template = _.template($('#patternList').html())(obj);
                /*var content = template(obj);*/
                self.elements.list.html(template);
            }

            init();

        }

        return View;

    }
);