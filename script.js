
// هدا لقائمة الاسئلة


function calculateScore(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    let score = 0;
    const totalQuestions = 3;

    // التحقق من السؤال الأول
    const q1Selected = document.querySelector('input[name="q1"]:checked');
    if (q1Selected && q1Selected.value === 'correct') {
        score++;
    }

    // التحقق من السؤال الثاني
    const q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value === 'correct') {
        score++;
    }

    // التحقق من السؤال الثالث
    const q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === 'correct') {
        score++;
    }

    // عرض النتيجة
    const resultBox = document.getElementById('resultBox');
    const scoreText = document.getElementById('scoreText');
    const feedbackText = document.getElementById('feedbackText');

    scoreText.innerText = `${score} من ${totalQuestions}`;

    if (score === 3) {
        feedbackText.innerText = "ممتاز جداً! إجاباتك كلها صحيحة 🌟";
    } else if (score > 0) {
        feedbackText.innerText = "جيد! لقد حصلت على بعض النقاط الصحيحة.";
    } else {
        feedbackText.innerText = "حاول مرة أخرى، لم تحصل على أي نقاط.";
    }

    resultBox.classList.remove('hidden');
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('resultBox').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}