/**
 * Created by TsiferovSerhii on 02.04.2016.
 */
$(function () {

    var data = {
        name: "Иванов Иван Иванович",
        urlFoto: "../img/foto.png",
        status: "Студент курса GoFrontend Online от компании GoIt",
        want: "Хочу стать Frontend-разработчиком, потому что это:",
        listItem: ["перспективная и востребованная на рынке профессия",
            "интересная и постоянно развивающаяся сфера деятельности",
            "хорошие условия и достойная оплата труда"],
        phon: "+380 50 777 77 77",
        skype: "ivanovivan",
        urlFacebook: "https://www.facebook.com/ivanovII",
        feedback: "Мне нравятся организация учебного процесса и преподаватели," +
        "которые доступно и понятно объясняют материал. Надеюсь на плодотворное и интересное" +
        "обучение, в результате которого, я смогу преобрести новую профессию)",
    };

    var template = _.template($('#pattern').html());

    var content = template(data);
    $('body').append(content);
});
/*

 var content = tmpl(template, data);


 listItem1: "перспективная и востребованная на рынке профессия",
 listItem2: "интересная и постоянно развивающаяся сфера деятельности",
 listItem3: "хорошие условия и достойная оплата труда",
*/