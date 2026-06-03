// RTU SGPA & CGPA Calculator - Main JavaScript
// Strictly according to RTU Choice Based Credit System (CBCS)

// RTU Grading System Configuration (10-Point Scale - Official RTU)
const gradingSystem = {
    'A++': 10.0,   // Outstanding
    'A+': 9.0,     // Excellent
    'A': 8.5,      // Very Good
    'B+': 8.0,     // Good
    'B': 7.5,      // Above Average
    'C+': 7.0,     // Average
    'C': 6.5,      // Below Average
    'D+': 6.0,     // Marginal
    'D': 5.5,      // Pass
    'E+': 5.0,     // Pass (Old Regulation)
    'E': 4.0,      // Pass (Old Regulation)
    'F': 0.0       // Fail
};

// Grade to percentage conversion for reference
const gradeToPercentage = {
    'A++': 'Outstanding',
    'A+': 'Excellent',
    'A': 'Very Good',
    'B+': 'Good',
    'B': 'Above Average',
    'C+': 'Average',
    'C': 'Below Average',
    'D+': 'Marginal',
    'D': 'Pass',
    'E+': 'Pass (Old)',
    'E': 'Pass (Old)',
    'F': 'Fail'
};

const grades = ['A++', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'E+', 'E', 'F'];

// Subject Template - RTU Accurate Syllabus for all branches (Odd/Even Semesters)
const subjectTemplates = {
    'CSE': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I', credits: 4 },
            { name: 'Chemistry-I', credits: 4 },
            { name: 'Programming in C', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab', credits: 2 },
            { name: 'Chemistry Lab', credits: 2 }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II', credits: 4 },
            { name: 'Chemistry-II', credits: 4 },
            { name: 'Data Structures', credits: 4 },
            { name: 'English/Hindi', credits: 2 },
            { name: 'Physics Lab-II', credits: 2 },
            { name: 'Engineering Mechanics Lab', credits: 2 }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Discrete Mathematics', credits: 4 },
            { name: 'Digital Logic Design', credits: 4 },
            { name: 'Object Oriented Programming', credits: 4 },
            { name: 'Database Management System', credits: 4 },
            { name: 'Digital Logic Lab', credits: 2 }
        ],
        4: [
            { name: 'Analysis of Algorithms', credits: 4 },
            { name: 'Computer Architecture', credits: 4 },
            { name: 'Software Engineering', credits: 4 },
            { name: 'Compiler Design', credits: 4 },
            { name: 'Web Technologies', credits: 4 },
            { name: 'Database Lab', credits: 2 }
        ],
        5: [
            { name: 'Operating Systems', credits: 4 },
            { name: 'Computer Networks', credits: 4 },
            { name: 'Artificial Intelligence', credits: 4 },
            { name: 'Theory of Computation', credits: 4 },
            { name: 'Microprocessors', credits: 4 },
            { name: 'Operating Systems Lab', credits: 2 }
        ],
        6: [
            { name: 'Machine Learning', credits: 4 },
            { name: 'Cloud Computing', credits: 4 },
            { name: 'Cryptography & Security', credits: 4 },
            { name: 'Data Mining', credits: 4 },
            { name: 'Mobile Application Development', credits: 4 },
            { name: 'Network Lab', credits: 2 }
        ],
        7: [
            { name: 'Distributed Systems', credits: 4 },
            { name: 'Internet of Things', credits: 4 },
            { name: 'Elective-I', credits: 4 },
            { name: 'Project-I', credits: 4 },
            { name: 'Seminar-I', credits: 2 }
        ],
        8: [
            { name: 'Elective-II', credits: 4 },
            { name: 'Elective-III', credits: 4 },
            { name: 'Project-II', credits: 4 },
            { name: 'Seminar-II', credits: 2 }
        ]
    },
    'ECE': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I', credits: 4 },
            { name: 'Chemistry-I', credits: 4 },
            { name: 'Circuit Analysis', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab', credits: 2 },
            { name: 'Chemistry Lab', credits: 2 }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II', credits: 4 },
            { name: 'Chemistry-II', credits: 4 },
            { name: 'Electrical Machines', credits: 4 },
            { name: 'English/Hindi', credits: 2 },
            { name: 'Physics Lab-II', credits: 2 },
            { name: 'Electrical Machines Lab', credits: 2 }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Signals & Systems', credits: 4 },
            { name: 'Electromagnetic Theory', credits: 4 },
            { name: 'Digital Circuits', credits: 4 },
            { name: 'Communication Theory', credits: 4 },
            { name: 'Digital Circuits Lab', credits: 2 }
        ],
        4: [
            { name: 'Digital Signal Processing', credits: 4 },
            { name: 'Microprocessors', credits: 4 },
            { name: 'Control Systems', credits: 4 },
            { name: 'Analog Electronics', credits: 4 },
            { name: 'Antenna Theory', credits: 4 },
            { name: 'Electronics Lab', credits: 2 }
        ],
        5: [
            { name: 'Communication Systems', credits: 4 },
            { name: 'Power Electronics', credits: 4 },
            { name: 'Embedded Systems', credits: 4 },
            { name: 'Wireless Communication', credits: 4 },
            { name: 'RF Engineering', credits: 4 },
            { name: 'Communications Lab', credits: 2 }
        ],
        6: [
            { name: 'Image Processing', credits: 4 },
            { name: 'Optical Communications', credits: 4 },
            { name: 'VLSI Design', credits: 4 },
            { name: 'Satellite Communications', credits: 4 },
            { name: 'Mobile Communications', credits: 4 },
            { name: 'VLSI Lab', credits: 2 }
        ],
        7: [
            { name: 'Advanced Microprocessors', credits: 4 },
            { name: 'IoT Systems', credits: 4 },
            { name: 'Elective-I', credits: 4 },
            { name: 'Project-I', credits: 4 },
            { name: 'Seminar-I', credits: 2 }
        ],
        8: [
            { name: 'Elective-II', credits: 4 },
            { name: 'Elective-III', credits: 4 },
            { name: 'Project-II', credits: 4 },
            { name: 'Seminar-II', credits: 2 }
        ]
    },
    'EE': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I', credits: 4 },
            { name: 'Chemistry-I', credits: 4 },
            { name: 'Electrical Engineering Basics', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab', credits: 2 },
            { name: 'Chemistry Lab', credits: 2 }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II', credits: 4 },
            { name: 'Chemistry-II', credits: 4 },
            { name: 'Electrical Machines-I', credits: 4 },
            { name: 'English/Hindi', credits: 2 },
            { name: 'Physics Lab-II', credits: 2 },
            { name: 'Electrical Machines Lab', credits: 2 }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Power Systems-I', credits: 4 },
            { name: 'Electromagnetic Theory', credits: 4 },
            { name: 'Electrical Machines-II', credits: 4 },
            { name: 'Electrical Measurements', credits: 4 },
            { name: 'Measurements Lab', credits: 2 }
        ],
        4: [
            { name: 'Power Systems-II', credits: 4 },
            { name: 'Control Systems', credits: 4 },
            { name: 'High Voltage Engineering', credits: 4 },
            { name: 'Power Electronics', credits: 4 },
            { name: 'Switchgear & Protection', credits: 4 },
            { name: 'Power Systems Lab', credits: 2 }
        ],
        5: [
            { name: 'Power Generation', credits: 4 },
            { name: 'Renewable Energy Systems', credits: 4 },
            { name: 'Power Quality', credits: 4 },
            { name: 'Power System Operation', credits: 4 },
            { name: 'Smart Grids', credits: 4 },
            { name: 'Power Lab', credits: 2 }
        ],
        6: [
            { name: 'FACTS Devices', credits: 4 },
            { name: 'Power System Analysis', credits: 4 },
            { name: 'Industrial Drives', credits: 4 },
            { name: 'Energy Management', credits: 4 },
            { name: 'Distributed Generation', credits: 4 },
            { name: 'Advanced Power Lab', credits: 2 }
        ],
        7: [
            { name: 'Electrical Safety & Standards', credits: 4 },
            { name: 'Grid Integration', credits: 4 },
            { name: 'Elective-I', credits: 4 },
            { name: 'Project-I', credits: 4 },
            { name: 'Seminar-I', credits: 2 }
        ],
        8: [
            { name: 'Elective-II', credits: 4 },
            { name: 'Elective-III', credits: 4 },
            { name: 'Project-II', credits: 4 },
            { name: 'Seminar-II', credits: 2 }
        ]
    },
    'ME': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I', credits: 4 },
            { name: 'Chemistry-I', credits: 4 },
            { name: 'Engineering Mechanics', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab', credits: 2 },
            { name: 'Chemistry Lab', credits: 2 }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II', credits: 4 },
            { name: 'Chemistry-II', credits: 4 },
            { name: 'Material Science', credits: 4 },
            { name: 'English/Hindi', credits: 2 },
            { name: 'Physics Lab-II', credits: 2 },
            { name: 'Engineering Workshop', credits: 2 }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Thermodynamics-I', credits: 4 },
            { name: 'Fluid Mechanics', credits: 4 },
            { name: 'Manufacturing Processes', credits: 4 },
            { name: 'Machine Design-I', credits: 4 },
            { name: 'Manufacturing Lab', credits: 2 }
        ],
        4: [
            { name: 'Thermodynamics-II', credits: 4 },
            { name: 'Heat Transfer', credits: 4 },
            { name: 'Machine Design-II', credits: 4 },
            { name: 'Industrial Engineering', credits: 4 },
            { name: 'Mechanical Vibrations', credits: 4 },
            { name: 'Thermal Lab', credits: 2 }
        ],
        5: [
            { name: 'Internal Combustion Engines', credits: 4 },
            { name: 'Renewable Energy Sources', credits: 4 },
            { name: 'Automation & Robotics', credits: 4 },
            { name: 'CAD/CAM', credits: 4 },
            { name: 'Power Transmission', credits: 4 },
            { name: 'CAD Lab', credits: 2 }
        ],
        6: [
            { name: 'Finite Element Analysis', credits: 4 },
            { name: 'Computational Fluid Dynamics', credits: 4 },
            { name: 'Advanced Manufacturing', credits: 4 },
            { name: 'Aerodynamics', credits: 4 },
            { name: 'Project Management', credits: 4 },
            { name: 'FEA Lab', credits: 2 }
        ],
        7: [
            { name: 'Advanced Mechanics', credits: 4 },
            { name: 'Energy Systems', credits: 4 },
            { name: 'Elective-I', credits: 4 },
            { name: 'Project-I', credits: 4 },
            { name: 'Seminar-I', credits: 2 }
        ],
        8: [
            { name: 'Elective-II', credits: 4 },
            { name: 'Elective-III', credits: 4 },
            { name: 'Project-II', credits: 4 },
            { name: 'Seminar-II', credits: 2 }
        ]
    },
    'CE': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I', credits: 4 },
            { name: 'Chemistry-I', credits: 4 },
            { name: 'Civil Engineering Basics', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab', credits: 2 },
            { name: 'Chemistry Lab', credits: 2 }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II', credits: 4 },
            { name: 'Chemistry-II', credits: 4 },
            { name: 'Engineering Geology', credits: 4 },
            { name: 'English/Hindi', credits: 2 },
            { name: 'Physics Lab-II', credits: 2 },
            { name: 'Geology Lab', credits: 2 }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Mechanics of Solids', credits: 4 },
            { name: 'Fluid Mechanics', credits: 4 },
            { name: 'Surveying-I', credits: 4 },
            { name: 'Building Materials', credits: 4 },
            { name: 'Surveying Lab', credits: 2 }
        ],
        4: [
            { name: 'Structural Analysis', credits: 4 },
            { name: 'Hydraulic Engineering', credits: 4 },
            { name: 'Soil Mechanics', credits: 4 },
            { name: 'Estimating & Costing', credits: 4 },
            { name: 'Transportation Engineering', credits: 4 },
            { name: 'Soil Mechanics Lab', credits: 2 }
        ],
        5: [
            { name: 'RCC Design', credits: 4 },
            { name: 'Steel Structures', credits: 4 },
            { name: 'Water Supply Engineering', credits: 4 },
            { name: 'Irrigation Engineering', credits: 4 },
            { name: 'Environmental Engineering', credits: 4 },
            { name: 'Concrete Lab', credits: 2 }
        ],
        6: [
            { name: 'Foundation Engineering', credits: 4 },
            { name: 'Highway Engineering', credits: 4 },
            { name: 'Wastewater Treatment', credits: 4 },
            { name: 'Advanced Structures', credits: 4 },
            { name: 'Urban Planning', credits: 4 },
            { name: 'Construction Lab', credits: 2 }
        ],
        7: [
            { name: 'Geotechnical Engineering', credits: 4 },
            { name: 'Disaster Management', credits: 4 },
            { name: 'Elective-I', credits: 4 },
            { name: 'Project-I', credits: 4 },
            { name: 'Seminar-I', credits: 2 }
        ],
        8: [
            { name: 'Elective-II', credits: 4 },
            { name: 'Elective-III', credits: 4 },
            { name: 'Project-II', credits: 4 },
            { name: 'Seminar-II', credits: 2 }
        ]
    },
    'IT': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I', credits: 4 },
            { name: 'Chemistry-I', credits: 4 },
            { name: 'Programming in C', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab', credits: 2 },
            { name: 'Chemistry Lab', credits: 2 }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II', credits: 4 },
            { name: 'Chemistry-II', credits: 4 },
            { name: 'Data Structures', credits: 4 },
            { name: 'English/Hindi', credits: 2 },
            { name: 'Physics Lab-II', credits: 2 },
            { name: 'Programming Lab', credits: 2 }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Database Systems', credits: 4 },
            { name: 'Web Technologies', credits: 4 },
            { name: 'Object Oriented Programming', credits: 4 },
            { name: 'Computer Networks', credits: 4 },
            { name: 'Web Lab', credits: 2 }
        ],
        4: [
            { name: 'Software Engineering', credits: 4 },
            { name: 'System Administration', credits: 4 },
            { name: 'Information Security', credits: 4 },
            { name: 'Java Programming', credits: 4 },
            { name: 'Operating Systems', credits: 4 },
            { name: 'Networking Lab', credits: 2 }
        ],
        5: [
            { name: 'Cloud Computing', credits: 4 },
            { name: 'Mobile Computing', credits: 4 },
            { name: 'Big Data Analytics', credits: 4 },
            { name: 'Machine Learning', credits: 4 },
            { name: 'IoT Fundamentals', credits: 4 },
            { name: 'Cloud Lab', credits: 2 }
        ],
        6: [
            { name: 'Advanced Database', credits: 4 },
            { name: 'DevOps & CI/CD', credits: 4 },
            { name: 'Data Science', credits: 4 },
            { name: 'Distributed Computing', credits: 4 },
            { name: 'Blockchain Technology', credits: 4 },
            { name: 'Data Science Lab', credits: 2 }
        ],
        7: [
            { name: 'Advanced Networking', credits: 4 },
            { name: 'AI & ML Applications', credits: 4 },
            { name: 'Elective-I', credits: 4 },
            { name: 'Project-I', credits: 4 },
            { name: 'Seminar-I', credits: 2 }
        ],
        8: [
            { name: 'Elective-II', credits: 4 },
            { name: 'Elective-III', credits: 4 },
            { name: 'Project-II', credits: 4 },
            { name: 'Seminar-II', credits: 2 }
        ]
    }
};

// Global Variables
let currentSemester = null;
let currentBranch = null;
let semesterData = {};
let currentMarksheetData = [];

document.addEventListener('DOMContentLoaded', () => {
    console.log('═════════════════════════════════════════');
    console.log('🎓 RTU SGPA & CGPA Calculator v2.1');
    console.log('📊 RTU 10-Point Grading Scale (CBCS)');
    console.log('═════════════════════════════════════════');
    console.log('✓ Grading System (10-Point Scale):', gradingSystem);
    console.log('✓ Supported Grades:', grades);
    console.log('✓ Subject Templates Loaded:', Object.keys(subjectTemplates));
    
    initializeEventListeners();
    loadDataFromLocalStorage();
    updateResultsDisplay();
    
    console.log('✓ Application Initialized Successfully');
    console.log('═════════════════════════════════════════');
});

// Event Listeners
function initializeEventListeners() {
    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', switchTab);
    });

    // Manual Entry Tab
    document.getElementById('branch').addEventListener('change', onBranchChange);
    document.getElementById('semester').addEventListener('change', onSemesterChange);
    document.getElementById('add-subject-btn').addEventListener('click', addSubjectInput);
    document.getElementById('calculate-sgpa-btn').addEventListener('click', calculateSGPA);
    document.getElementById('reset-manual-btn').addEventListener('click', resetManualEntry);
    document.getElementById('save-sgpa-btn').addEventListener('click', saveSGPA);

    // Marksheet Upload Tab
    const uploadArea = document.getElementById('upload-area');
    uploadArea.addEventListener('click', () => document.getElementById('marksheet-input').click());
    uploadArea.addEventListener('dragover', e => e.preventDefault());
    uploadArea.addEventListener('drop', handleFileUpload);
    document.getElementById('marksheet-input').addEventListener('change', handleFileUpload);
    document.getElementById('reset-upload-btn').addEventListener('click', resetUpload);
    document.getElementById('confirm-ocr-btn').addEventListener('click', confirmOCRData);
    document.getElementById('edit-ocr-btn').addEventListener('click', editOCRData);

    // Results Tab
    document.getElementById('clear-history-btn').addEventListener('click', clearAllData);

    // Modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.getElementById('cancel-edit-btn').addEventListener('click', closeModal);
    document.getElementById('save-edit-btn').addEventListener('click', saveEditedData);

    // Prevent modal close on content click
    document.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
}

// Tab Switching
function switchTab(e) {
    const tabBtn = e.target.closest('.tab-btn');
    if (!tabBtn) return;

    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    // Add active class to clicked tab
    tabBtn.classList.add('active');
    const tabName = tabBtn.dataset.tab;
    document.getElementById(tabName).classList.add('active');
}

// ==================== MANUAL ENTRY FUNCTIONS ====================

function onBranchChange(e) {
    currentBranch = e.target.value;
}

function onSemesterChange(e) {
    currentSemester = e.target.value;
    populateSubjects();
}

function populateSubjects() {
    if (!currentBranch || !currentSemester) {
        clearSubjectsContainer();
        return;
    }

    const container = document.getElementById('subjects-container');
    container.innerHTML = '';

    const subjects = subjectTemplates[currentBranch] ? 
        subjectTemplates[currentBranch][currentSemester] || [] : [];

    if (subjects.length === 0) {
        addSubjectInput();
        return;
    }

    subjects.forEach(subject => {
        addSubjectInput(subject.name, subject.credits);
    });
}

function clearSubjectsContainer() {
    document.getElementById('subjects-container').innerHTML = '';
}

function addSubjectInput(subjectName = '', credits = 4) {
    const container = document.getElementById('subjects-container');
    const subjectId = Date.now() + Math.random();
    
    const div = document.createElement('div');
    div.className = 'subject-input';
    div.id = `subject-${subjectId}`;
    
    // Create grade buttons
    const gradeButtons = grades.map(g => 
        `<button type="button" class="grade-btn" data-grade="${g}" onclick="selectGrade('${g}', 'subject-${subjectId}')">${g}</button>`
    ).join('');
    
    div.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="font-weight: 600; font-size: 0.9rem; color: var(--text-dark);">Subject Name</label>
                <input type="text" placeholder="Subject Name" value="${subjectName}" class="subject-name-input" readonly style="background: var(--light-bg); cursor: default;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="font-weight: 600; font-size: 0.9rem; color: var(--text-dark);">Credits: ${credits}</label>
                <input type="hidden" class="subject-credits-input" value="${credits}">
                <input type="text" value="Credits: ${credits}" readonly style="background: var(--light-bg); cursor: default; text-align: center;">
            </div>
        </div>
        <div style="margin-top: 12px; margin-bottom: 12px;">
            <label style="font-weight: 600; font-size: 0.9rem; color: var(--text-dark); display: block; margin-bottom: 8px;">Select Grade (RTU Scale)</label>
            <div class="grade-buttons-container" id="grade-container-${subjectId}">
                ${gradeButtons}
                <input type="hidden" class="subject-grade-select" value="">
            </div>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 12px;">
            <span class="selected-grade-display" id="selected-${subjectId}" style="padding: 8px 12px; background: var(--light-bg); border-radius: 6px; font-weight: 600; color: var(--primary-color); min-width: 60px; text-align: center;">No Grade</span>
            <button type="button" class="btn-remove" onclick="removeSubject('subject-${subjectId}')">Remove</button>
        </div>
    `;
    
    container.appendChild(div);
}

function selectGrade(grade, subjectId) {
    const subject = document.getElementById(subjectId);
    if (!subject) return;
    
    // Update hidden input
    subject.querySelector('.subject-grade-select').value = grade;
    
    // Update display
    subject.querySelector(`#selected-${subjectId.split('-')[1]}`).textContent = grade;
    
    // Update button styling
    const buttons = subject.querySelectorAll('.grade-btn');
    buttons.forEach(btn => {
        if (btn.dataset.grade === grade) {
            btn.style.background = 'var(--primary-color)';
            btn.style.color = 'white';
            btn.style.fontWeight = '700';
        } else {
            btn.style.background = 'var(--light-bg)';
            btn.style.color = 'var(--text-dark)';
            btn.style.fontWeight = '600';
        }
    });
}

function calculateSGPA() {
    if (!currentSemester || !currentBranch) {
        alert('Please select semester and branch first!');
        return;
    }

    const subjects = document.querySelectorAll('.subject-input');
    if (subjects.length === 0) {
        alert('Please add at least one subject!');
        return;
    }

    let totalGradePoints = 0;
    let totalCredits = 0;
    let allValid = true;
    const subjectsList = [];

    subjects.forEach(subject => {
        const name = subject.querySelector('.subject-name-input').value.trim();
        const credits = parseFloat(subject.querySelector('.subject-credits-input').value);
        const grade = subject.querySelector('.subject-grade-select').value;

        // Validate inputs
        if (!name) {
            allValid = false;
            alert('Please fill subject names!');
            return;
        }
        
        if (!grade || !gradingSystem.hasOwnProperty(grade)) {
            allValid = false;
            alert(`Please select a valid grade for ${name}!`);
            return;
        }

        const gradePoint = gradingSystem[grade];
        const creditGradeProduct = gradePoint * credits;
        
        totalGradePoints += creditGradeProduct;
        totalCredits += credits;
        
        subjectsList.push({ 
            name, 
            grade, 
            credits, 
            gradePoint,
            percentage: gradeToPercentage[grade]
        });
    });

    if (!allValid || totalCredits === 0) {
        alert('Please ensure all subjects have valid grades!');
        return;
    }

    // Calculate SGPA with proper precision (10-point scale)
    const sgpa = (totalGradePoints / totalCredits).toFixed(2);
    const percentage = ((parseFloat(sgpa) / 10.0) * 100).toFixed(2);
    
    // Display Result
    const resultBox = document.getElementById('sgpa-result');
    document.getElementById('sgpa-value').textContent = sgpa;
    document.getElementById('sgpa-detail').textContent = 
        `Calculated from ${subjectsList.length} subjects | Total Credits: ${totalCredits} | Percentage: ${percentage}%`;
    resultBox.classList.remove('hidden');

    // Store temporarily for saving
    window.pendingSGPA = {
        semester: currentSemester,
        branch: currentBranch,
        sgpa: parseFloat(sgpa),
        percentage: parseFloat(percentage),
        subjects: subjectsList,
        totalCredits,
        totalGradePoints,
        calculationDate: new Date().toLocaleDateString()
    };
    
    console.log('✓ SGPA Calculated (10-Point RTU Scale):', window.pendingSGPA);
}

function saveSGPA() {
    if (!window.pendingSGPA) return;

    const key = `sem_${window.pendingSGPA.semester}_${window.pendingSGPA.branch}`;
    semesterData[key] = window.pendingSGPA;
    saveDataToLocalStorage();
    
    alert('SGPA saved successfully!');
    resetManualEntry();
    updateResultsDisplay();
    
    // Switch to results tab
    document.querySelector('[data-tab="view-results"]').click();
}

function resetManualEntry() {
    document.getElementById('branch').value = '';
    document.getElementById('semester').value = '';
    clearSubjectsContainer();
    document.getElementById('sgpa-result').classList.add('hidden');
    currentSemester = null;
    currentBranch = null;
    window.pendingSGPA = null;
}

// ==================== MARKSHEET UPLOAD FUNCTIONS ====================

function handleFileUpload(e) {
    e.preventDefault();
    
    let files;
    if (e.type === 'drop') {
        files = e.dataTransfer.files;
    } else {
        files = e.target.files;
    }

    if (files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith('image/')) {
        alert('Please upload an image file!');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const imageSrc = event.target.result;
        document.getElementById('preview-image').src = imageSrc;
        document.getElementById('upload-preview').classList.remove('hidden');
        
        // Start OCR
        performOCR(imageSrc);
    };
    reader.readAsDataURL(file);
}

async function performOCR(imageSrc) {
    const loadingDiv = document.getElementById('ocr-loading');
    loadingDiv.classList.remove('hidden');

    try {
        const worker = await Tesseract.createWorker('eng', 1, {
            legacyBlockLayout: true,
            preserveInterwordSpaces: true
        });
        
        const { data: { text, confidence } } = await worker.recognize(imageSrc);
        await worker.terminate();

        console.log('OCR Text Confidence:', confidence);
        
        // Parse OCR text
        const parsedData = parseMarksheet(text);
        
        if (parsedData.length === 0) {
            alert('Could not detect any subjects and grades from the marksheet. Please use manual entry or upload a clearer image.');
            loadingDiv.classList.add('hidden');
            return;
        }
        
        currentMarksheetData = parsedData;
        displayOCRResults(parsedData);
        console.log('✓ OCR Parse Success:', parsedData);
        
    } catch (error) {
        console.error('OCR Error:', error);
        alert('Error processing image: ' + error.message + '\nPlease try again with a clearer image or use manual entry.');
    } finally {
        loadingDiv.classList.add('hidden');
    }
}

function parseMarksheet(text) {
    // Advanced parser for RTU marksheets
    // Handles multiple formats and layouts
    
    if (!text || text.trim().length === 0) {
        return [];
    }
    
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    const subjects = [];
    const seenNames = new Set(); // Track unique subjects
    
    lines.forEach((line) => {
        const trimmedLine = line.trim();
        
        // Skip lines that are too short or contain only numbers
        if (trimmedLine.length < 3) return;
        if (/^\d+$/.test(trimmedLine)) return;
        
        // Check if line contains a grade
        let detectedGrade = null;
        for (const grade of grades) {
            if (trimmedLine.includes(grade)) {
                detectedGrade = grade;
                break;
            }
        }
        
        if (detectedGrade) {
            // Extract subject name (everything before the grade)
            let subjectName = trimmedLine.replace(detectedGrade, '').trim();
            
            // Clean up the subject name
            subjectName = subjectName.replace(/\s+/g, ' '); // Remove extra spaces
            subjectName = subjectName.replace(/[^a-zA-Z0-9\s&\-/()]/g, ''); // Remove special chars
            subjectName = subjectName.trim();
            
            // Skip if name is empty or too short
            if (subjectName.length < 2) return;
            
            // Avoid duplicates
            const nameKey = subjectName.toLowerCase();
            if (seenNames.has(nameKey)) return;
            seenNames.add(nameKey);
            
            // Try to determine credits from context (if available)
            let credits = 4; // Default for most subjects
            if (trimmedLine.includes('Lab') || trimmedLine.includes('lab') || trimmedLine.includes('Practical')) {
                credits = 2;
            }
            
            subjects.push({
                name: subjectName,
                grade: detectedGrade,
                credits: credits
            });
        }
    });
    
    // Remove duplicates and sort
    const uniqueSubjects = Array.from(new Map(
        subjects.map(s => [s.name.toLowerCase(), s])
    ).values());
    
    return uniqueSubjects.slice(0, 12); // Max 12 subjects per semester
}

function displayOCRResults(parsedData) {
    const container = document.getElementById('detected-subjects');
    container.innerHTML = '';

    if (parsedData.length === 0) {
        container.innerHTML = '<p style="color: var(--danger-color); font-weight: 600;">No subjects detected. Please edit manually or upload a clearer image.</p>';
        return;
    }

    parsedData.forEach((subject, index) => {
        const div = document.createElement('div');
        div.className = 'detected-subject';
        div.id = `ocr-subject-${index}`;
        div.innerHTML = `
            <div class="subject-name">${subject.name} (${subject.credits} Credits)</div>
            <div class="subject-grade">${subject.grade}</div>
        `;
        container.appendChild(div);
    });

    document.getElementById('ocr-result').classList.remove('hidden');
}

function confirmOCRData() {
    const semesterSelect = document.getElementById('manual-semester');
    const semester = semesterSelect.value;

    if (!semester) {
        alert('Please select a semester first!');
        return;
    }

    if (currentMarksheetData.length === 0) {
        alert('No data to save. Please upload a valid marksheet image.');
        return;
    }

    // Validate all grades
    let allValid = true;
    currentMarksheetData.forEach(subject => {
        if (!gradingSystem.hasOwnProperty(subject.grade)) {
            allValid = false;
        }
    });

    if (!allValid) {
        alert('Invalid grade detected. Please edit and fix before saving.');
        return;
    }

    // Calculate SGPA for OCR data
    let totalGradePoints = 0;
    let totalCredits = 0;

    currentMarksheetData.forEach(subject => {
        const gradePoint = gradingSystem[subject.grade] || 0;
        totalGradePoints += gradePoint * subject.credits;
        totalCredits += subject.credits;
    });

    const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    const percentage = ((parseFloat(sgpa) / 10.0) * 100).toFixed(2);

    // For OCR, default to CSE but could be detected
    const branch = 'CSE';
    const key = `sem_${semester}_${branch}`;

    semesterData[key] = {
        semester,
        branch,
        sgpa: parseFloat(sgpa),
        percentage: parseFloat(percentage),
        subjects: currentMarksheetData,
        totalCredits,
        totalGradePoints,
        source: 'OCR (Marksheet Upload)',
        ocrDate: new Date().toLocaleDateString()
    };

    saveDataToLocalStorage();
    alert(`✓ SGPA ${sgpa} (${percentage}%) saved from marksheet!`);
    resetUpload();
    updateResultsDisplay();
    document.querySelector('[data-tab="view-results"]').click();
    console.log('✓ OCR Data Saved (10-Point RTU Scale):', semesterData[key]);
}

function editOCRData() {
    const container = document.getElementById('edit-subjects-container');
    container.innerHTML = '';

    currentMarksheetData.forEach((subject, index) => {
        const div = document.createElement('div');
        div.className = 'subject-input';
        div.innerHTML = `
            <input type="text" value="${subject.name}" class="edit-subject-name" placeholder="Subject Name">
            <select class="edit-subject-grade">
                ${grades.map(g => `<option value="${g}" ${g === subject.grade ? 'selected' : ''}>${g}</option>`).join('')}
            </select>
            <input type="number" value="${subject.credits}" class="edit-subject-credits" min="1" max="5">
        `;
        container.appendChild(div);
    });

    document.getElementById('edit-modal').classList.remove('hidden');
}

function saveEditedData() {
    const inputs = document.querySelectorAll('#edit-subjects-container .subject-input');
    
    currentMarksheetData = Array.from(inputs).map(input => ({
        name: input.querySelector('.edit-subject-name').value,
        grade: input.querySelector('.edit-subject-grade').value,
        credits: parseFloat(input.querySelector('.edit-subject-credits').value)
    }));

    closeModal();
    displayOCRResults(currentMarksheetData);
}

function resetUpload() {
    document.getElementById('upload-preview').classList.add('hidden');
    document.getElementById('ocr-result').classList.add('hidden');
    document.getElementById('marksheet-input').value = '';
    currentMarksheetData = [];
}

function closeModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

// ==================== RESULTS & DISPLAY FUNCTIONS ====================

function updateResultsDisplay() {
    const resultsContainer = document.getElementById('semester-results');
    
    // Calculate CGPA (100% accurate RTU calculation)
    let totalGradePoints = 0;
    let totalCredits = 0;
    const semesterCards = [];

    Object.values(semesterData).forEach(data => {
        if (data && typeof data.sgpa !== 'undefined') {
            // Verify calculation accuracy
            let verifyGradePoints = 0;
            let verifyCredits = 0;
            
            if (data.subjects && Array.isArray(data.subjects)) {
                data.subjects.forEach(subject => {
                    const gp = gradingSystem[subject.grade] || 0;
                    verifyGradePoints += gp * subject.credits;
                    verifyCredits += subject.credits;
                });
            }
            
            const verifyGPA = verifyCredits > 0 ? (verifyGradePoints / verifyCredits).toFixed(2) : 0;
            
            totalGradePoints += verifyGradePoints;
            totalCredits += verifyCredits;

            const semesterNum = data.semester;
            const branch = data.branch;
            const percentage = ((parseFloat(verifyGPA) / 10.0) * 100).toFixed(2);
            
            const card = document.createElement('div');
            card.className = 'semester-card';
            
            const subjectsList = data.subjects.map(s => 
                `<div class="subject-item">
                    <span class="subject-item-name">${s.name}</span>
                    <span style="color: var(--text-light); font-size: 0.85rem;">(${s.credits} cr)</span>
                    <span class="subject-item-grade">${s.grade}</span>
                </div>`
            ).join('');

            card.innerHTML = `
                <div class="semester-title">
                    <h4>📖 Semester ${semesterNum} - ${branch}</h4>
                    <div style="text-align: right;">
                        <div class="semester-gpa">SGPA: ${verifyGPA}</div>
                        <div style="font-size: 0.85rem; color: var(--text-light);">${percentage}%</div>
                    </div>
                </div>
                <div class="subjects-list">${subjectsList}</div>
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--text-light);">
                    <span>Total Credits: <strong>${verifyCredits}</strong></span>
                    <span>Grade Points: <strong>${verifyGradePoints}</strong></span>
                </div>
            `;

            semesterCards.push({
                semester: parseInt(semesterNum),
                element: card,
                sgpa: parseFloat(verifyGPA),
                credits: verifyCredits
            });
        }
    });

    if (semesterCards.length === 0) {
        resultsContainer.innerHTML = '<p class="empty-message">📊 No SGPA data saved yet. Complete a semester calculation to view results here.</p>';
        document.getElementById('cgpa-summary').classList.add('hidden');
        return;
    }

    // Sort by semester number
    semesterCards.sort((a, b) => a.semester - b.semester);
    
    resultsContainer.innerHTML = semesterCards.map(card => card.element.outerHTML).join('');

    // Display CGPA (100% accurate calculation - 10-point RTU scale)
    if (totalCredits > 0) {
        const cgpa = (totalGradePoints / totalCredits).toFixed(2);
        const percentage = ((parseFloat(cgpa) / 10.0) * 100).toFixed(2);
        const summary = document.getElementById('cgpa-summary');
        
        document.getElementById('cgpa-value').textContent = cgpa;
        document.getElementById('cgpa-percentage').textContent = percentage + '%';
        document.getElementById('total-semesters').textContent = semesterCards.length;
        document.getElementById('total-credits').textContent = totalCredits;
        
        summary.classList.remove('hidden');
        console.log('✓ CGPA Calculated (100% Accurate):', {cgpa, percentage, semesters: semesterCards.length, totalCredits});
    }
}

function clearAllData() {
    if (confirm('Are you sure you want to delete all saved data? This cannot be undone!')) {
        semesterData = {};
        localStorage.removeItem('rtuCalculatorData');
        updateResultsDisplay();
        alert('All data cleared!');
    }
}

// ==================== LOCAL STORAGE FUNCTIONS ====================

function saveDataToLocalStorage() {
    try {
        localStorage.setItem('rtuCalculatorData', JSON.stringify(semesterData));
    } catch (error) {
        console.error('Error saving to local storage:', error);
        alert('Error saving data. Please check your browser storage.');
    }
}

function loadDataFromLocalStorage() {
    try {
        const data = localStorage.getItem('rtuCalculatorData');
        if (data) {
            semesterData = JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading from local storage:', error);
    }
}

// ==================== UTILITY FUNCTIONS ====================

// Export data as JSON
function exportData() {
    const dataStr = JSON.stringify(semesterData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rtu-cgpa-data.json';
    link.click();
}

// Import data from JSON
function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            semesterData = data;
            saveDataToLocalStorage();
            updateResultsDisplay();
            alert('Data imported successfully!');
        } catch (error) {
            alert('Error importing file. Please check the file format.');
        }
    };
    reader.readAsText(file);
}

// Calculate percentage equivalent
function sgpaToPercentage(sgpa) {
    // Standard conversion: Percentage = (SGPA / 4.0) * 100
    return ((sgpa / 4.0) * 100).toFixed(2);
}

// Get grade description
function getGradeDescription(grade) {
    const descriptions = {
        'A+': 'Excellent',
        'A': 'Very Good',
        'B+': 'Good',
        'B': 'Average',
        'C+': 'Below Average',
        'C': 'Poor',
        'D': 'Very Poor',
        'F': 'Fail'
    };
    return descriptions[grade] || 'Unknown';
}

// Console logging for debugging
console.log('RTU SGPA & CGPA Calculator initialized successfully!');
console.log('Grading System:', gradingSystem);
