const express = require('express');
const app = express();

// פונקציה פשוטה שנוכל לבדוק בטסטים
function add(a, b) {
    return a + b;
}

app.get('/', (req, res) => {
    res.send('CI/CD Pipeline is Working!');
});

// ייצוא הפונקציה והאפליקציה לצורך בדיקות
module.exports = { app, add };

if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port 3000'));
}
