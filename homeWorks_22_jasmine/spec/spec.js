

jasmine.getFixtures().fixturesPath = 'fixture';


describe("тестирование страницы теста по программированию", function() {
  
 

  	loadFixtures('myfixture.html');
   
	var elements = $('#check01');
	var elements2 = $("input:radio:checked"); 



  it("подсчет правильных ответов ", function() {  	
   expect(countingAnswers(elements)).toEqual(1);
  });

  it("подсчет правильных ответов с тремя правильными ответами", function() {  	
   expect(countingAnswers(elements2)).toEqual(3);
  });

  it("проверка генерации сообщения с тремя правильными ответами", function() {
   expect(generateMessage(elements2)).toEqual("3 из 3 правильно!");
  });

  it("проверка генерации сообщения с одним ответом", function() {
   expect(generateMessage(elements)).toEqual("Натыкано мало ответов!");
  });

  it("проверка конвертации jSon в js объект", function() {
  	var jsonTestObject = convertToJson(testPage.questions);
   expect(convertFromJson(jsonTestObject)).toEqual(testPage.questions);
  });
  
});