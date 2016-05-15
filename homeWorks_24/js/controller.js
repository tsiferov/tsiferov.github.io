define(
    'controller',
    ['jquery'],

    function () {

        var Controller = function (view, model) {
            var self = this;

            var editItemText = '';

            view.elements.addButton.on('click', function () {

                var valueButton = view.elements.addButton.text();
                var newItem = view.elements.input.val();

                if (valueButton === 'add') {

                    model.addItem(newItem);

                } else {

                    model.editItem(editItemText, newItem);
                    view.elements.addButton.text('add');
                }
                view.renderList(model.data);
                view.elements.input.val('');
            });

            view.elements.list.on('click', '.remove', function () {
                var removeItem = $(this).attr('data-value');
                model.removeItem(removeItem);

                view.renderList(model.data);
            })

            view.elements.list.on('dblclick', '.itemText', function () {

                editItemText = $(this).text();
                view.elements.input.val(editItemText);
                view.elements.addButton.text("edit");
            })
        }


        return Controller;
    }
);