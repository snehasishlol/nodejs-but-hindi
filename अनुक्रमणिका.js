const अभिव्यक्त_करना = require('express');
const छपाई = console.log;

const अनुप्रयोग = अभिव्यक्त_करना();
अनुप्रयोग.set('view engine', 'ejs');
अनुप्रयोग.set('views', process.cwd() + "/पृष्ठों")

अनुप्रयोग.get('/', (अनुरोध, जवाब) => {
  जवाब.render('घर');
});

अनुप्रयोग.listen(3000, () => {
  छपाई('सर्वर लॉन्च किया गया');
});
