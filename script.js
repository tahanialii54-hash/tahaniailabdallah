const challengesData = {
    1: [
        {
            id: 1,
            title: "1. مستطيل كامل",
            idea: "استخدام حلقتين تكراريتين متداخلتين (Nested Loops) لتعبئة الأسطر والأعمدة بالرمز المختار.",
            code: "for(let i=0; i<rows; i++) {\n  let line = '';\n  for(let j=0; j<cols; j++) line += symbol;\n  console.log(line);\n}"
        },
        {
            id: 2,
            title: "2. مستطيل مفرغ (إطار)",
            idea: "طباعة الرمز فقط في حدود المستطيل الخارجية (الأول والأخير أسطراً وأعمدةً).",
            code: "if(i===0 || i===rows-1 || j===0 || j===cols-1) line += symbol;\nelse line += ' ';"
        },
        {
            id: 3,
            title: "3. مثلث قائم متزايد",
            idea: "تتزايد الأعمدة تدريجياً مع كل سطر بناءً على مؤشر الحلقة الخارجية (j <= i).",
            code: "for(let i=0; i<rows; i++) {\n  for(let j=0; j<=i; j++) line += symbol;\n}"
        },
        {
            id: 4,
            title: "4. مثلث قائم معكوس",
            idea: "يبدأ السطر الأول بالعرض الكامل ثم ينقص تدريجياً مع كل تقدم في الأسطر.",
            code: "for(let i=0; i<rows; i++) {\n  for(let j=0; j<rows-i; j++) line += symbol;\n}"
        },
        {
            id: 5,
            title: "5. هرم متكامل (Pyramid)",
            idea: "دمج مسافات تناقصية مع رموز تصاعدية (2*i + 1) لتوسيط الشكل الهندسي.",
            code: "let spaces = ' '.repeat(rows - i - 1);\nlet symbols = symbol.repeat(2 * i + 1);"
        }
    ],
    2: [
        {
            id: 1,
            title: "1. شبكة مربعة (Grid)",
            idea: "رسم شبكة مصفوفة بأبعاد متساوية مع ترك مسافات فاصلة بين الخلايا.",
            code: "for(let i=0; i<h; i++) {\n  for(let j=0; j<w; j++) row += symbol + ' ';\n}"
        },
        {
            id: 2,
            title: "2. مثلث محاذاة لليسار",
            idea: "توليد مثلث متكيف مع الطول والعرض المدخلين مرناً.",
            code: "let wCount = Math.floor((i / h) * w);"
        },
        {
            id: 3,
            title: "3. حرف X متقاطع",
            idea: "طباعة الرمز عندما يتطابق مؤشر العمود مع السطر أو يكونان متعاكسين.",
            code: "if(i === j || j === w - 1 - i) line += symbol;\nelse line += ' ';"
        },
        {
            id: 4,
            title: "4. معين هندسي (Diamond)",
            idea: "ينقسم لجزأين بناءً على المسافة المطلقة عن منتصف الأسطر (Math.abs(mid - i)).",
            code: "let dist = Math.abs(mid - i);\nlet symCount = rows - (2 * dist);"
        },
        {
            id: 5,
            title: "5. ساعة رملية",
            idea: "شكل هندسي يبدأ بمثلث مقلوب في الأعلى ثم هرم صاعد في الأسفل.",
            code: "let spacesCount = i <= m ? i : size - 1 - i;"
        }
    ],
    3: [
        {
            id: 1,
            title: "1. إطار مزدوج متداخل",
            idea: "رسم إطارين متداخلين داخل مصفوفة أبعاد باستخدام شروط الحدود المتقدمة.",
            code: "if(i==0 || i==h-1 || j==0 || j==w-1 || i==1 || i==h-2) line += symbol;"
        },
        {
            id: 2,
            title: "2. مثلث قائم مقلوب (لليمين)",
            idea: "طباعة مسافات بادئة تتزايد مع كل سطر يليه عدد رموز متناقص.",
            code: "let spaces = '  '.repeat(i);\nlet symbols = (symbol + ' ').repeat(rows - i);"
        },
        {
            id: 3,
            title: "3. خط قطري مزدوج (Parallel Lines)",
            idea: "طباعة خطين متوازيين قطريين يعتمدان على معادلة الميل الرياضية بالحلقات.",
            code: "if(j === i || j === i + 2) line += symbol;\nelse line += ' ';"
        },
        {
            id: 4,
            title: "4. هرم مفرغ (Hollow Pyramid)",
            idea: "رسم هرم هندسي بحيث يتم طباعة الرموز على الأطراف والقمة وفراغ في المنتصف.",
            code: "if(j === h - 1 - i || j === h - 1 + i || i === h - 1) line += symbol;"
        },
        {
            id: 5,
            title: "5. شكل سلم متدرج (Staircase)",
            idea: "توليد كتل هندسية متدرجة تشبه درجات السلم بناءً على مقاطع الطول والعرض.",
            code: "let step = Math.floor(i / 2);\nfor(let j=0; j<step*2 + 2; j++) line += symbol;"
        }
    ]
};

let currentChallenge = 1;
let currentTaskIndex = 0;

function switchChallenge(chNum) {
    currentChallenge = chNum;
    currentTaskIndex = 0;
    
    document.getElementById('tab-c1').classList.toggle('active', chNum === 1);
    document.getElementById('tab-c2').classList.toggle('active', chNum === 2);
    document.getElementById('tab-c3').classList.toggle('active', chNum === 3);
    
    renderTasksList();
    loadTaskDetails();
    generateShape();
}

function renderTasksList() {
    const container = document.getElementById('tasksListContainer');
    container.innerHTML = '';
    
    challengesData[currentChallenge].forEach((task, index) => {
        const btn = document.createElement('div');
        btn.className = `task-btn ${index === currentTaskIndex ? 'active' : ''}`;
        btn.innerHTML = `<span>${task.title}</span> <i class="fa-solid fa-chevron-left"></i>`;
        btn.onclick = () => {
            currentTaskIndex = index;
            renderTasksList();
            loadTaskDetails();
            generateShape();
        };
        container.appendChild(btn);
    });
}

function loadTaskDetails() {
    const task = challengesData[currentChallenge][currentTaskIndex];
    document.getElementById('outputTitle').innerText = task.title;
    document.getElementById('algoIdea').innerText = task.idea;
    document.getElementById('algoCode').innerText = task.code;
}

function generateShape() {
    const h = parseInt(document.getElementById('inputHeight').value) || 5;
    const w = parseInt(document.getElementById('inputWidth').value) || 5;
    const sym = document.getElementById('inputSymbol').value;
    const screen = document.getElementById('consoleScreen');
    
    let result = '';

    if (currentChallenge === 1) {
        switch(currentTaskIndex) {
            case 0:
                for(let i=0; i<h; i++) {
                    let line = '';
                    for(let j=0; j<w; j++) line += sym + ' ';
                    result += line + '\n';
                }
                break;
            case 1:
                for(let i=0; i<h; i++) {
                    let line = '';
                    for(let j=0; j<w; j++) {
                        if(i === 0 || i === h-1 || j === 0 || j === w-1) line += sym + ' ';
                        else line += '  ';
                    }
                    result += line + '\n';
                }
                break;
            case 2:
                for(let i=0; i<h; i++) {
                    let line = '';
                    let colsInRow = Math.floor(((i + 1) / h) * w);
                    for(let j=0; j<=colsInRow && j<w; j++) line += sym + ' ';
                    result += line + '\n';
                }
                break;
            case 3:
                for(let i=0; i<h; i++) {
                    let line = '';
                    let limit = w - Math.floor((i / h) * w);
                    for(let j=0; j<limit; j++) line += sym + ' ';
                    result += line + '\n';
                }
                break;
            case 4:
                for(let i=0; i<h; i++) {
                    let spaces = '  '.repeat(h - i - 1);
                    let symbols = (sym + ' ').repeat(2 * i + 1);
                    result += spaces + symbols + '\n';
                }
                break;
        }
    } else if (currentChallenge === 2) {
        switch(currentTaskIndex) {
            case 0:
                for(let i=0; i<h; i++) {
                    let line = '';
                    for(let j=0; j<w; j++) line += sym + '   ';
                    result += line + '\n\n';
                }
                break;
            case 1:
                for(let i=1; i<=h; i++) {
                    let line = '';
                    for(let j=1; j<=i; j++) line += sym + ' ';
                    result += line + '\n';
                }
                break;
            case 2:
                for(let i=0; i<h; i++) {
                    let line = '';
                    for(let j=0; j<w; j++) {
                        if(i === j || j === w - 1 - i) line += sym + ' ';
                        else line += '  ';
                    }
                    result += line + '\n';
                }
                break;
            case 3:
                let rows = h % 2 === 0 ? h + 1 : h;
                let mid = Math.floor(rows / 2);
                for(let i=0; i<rows; i++) {
                    let dist = Math.abs(mid - i);
                    let spaces = '  '.repeat(dist);
                    let symCount = rows - (2 * dist);
                    let symbols = (sym + ' ').repeat(symCount);
                    result += spaces + symbols + '\n';
                }
                break;
            case 4:
                let size = h % 2 === 0 ? h + 1 : h;
                let m = Math.floor(size / 2);
                for(let i=0; i<size; i++) {
                    let spacesCount = i <= m ? i : size - 1 - i;
                    let symCount = size - (2 * spacesCount);
                    let spaces = '  '.repeat(spacesCount);
                    let symbols = (sym + ' ').repeat(symCount);
                    result += spaces + symbols + '\n';
                }
                break;
        }
    } else {
        switch(currentTaskIndex) {
            case 0:
                for(let i=0; i<h; i++) {
                    let line = '';
                    for(let j=0; j<w; j++) {
                        if(i===0 || i===h-1 || j===0 || j===w-1 || i===1 || i===h-2) line += sym + ' ';
                        else line += '  ';
                    }
                    result += line + '\n';
                }
                break;
            case 1:
                for(let i=0; i<h; i++) {
                    let spaces = '  '.repeat(i);
                    let symbols = (sym + ' ').repeat(h - i);
                    result += spaces + symbols + '\n';
                }
                break;
            case 2:
                for(let i=0; i<h; i++) {
                    let line = '';
                    for(let j=0; j<w; j++) {
                        if(j === i || j === i + 2) line += sym + ' ';
                        else line += '  ';
                    }
                    result += line + '\n';
                }
                break;
            case 3:
                for(let i=0; i<h; i++) {
                    let spaces = '  '.repeat(h - i - 1);
                    let line = '';
                    for(let j=0; j < (2 * i + 1); j++) {
                        if(j === 0 || j === 2 * i || i === h - 1) line += sym + ' ';
                        else line += '  ';
                    }
                    result += spaces + line + '\n';
                }
                break;
            case 4:
                for(let i=0; i<h; i++) {
                    let line = '';
                    let blockLen = Math.floor(i / 2) + 2;
                    for(let j=0; j<blockLen; j++) line += sym + ' ';
                    result += line + '\n';
                }
                break;
        }
    }

    screen.innerText = result;
}

function copyOutput() {
    const text = document.getElementById('consoleScreen').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toastNotification');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}

function clearConsole() {
    document.getElementById('consoleScreen').innerText = "تمت إعادة الضبط بنجاح.";
}

window.onload = function() {
    renderTasksList();
    loadTaskDetails();
    generateShape();
};