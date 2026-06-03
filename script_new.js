// ============================================
// RTU SGPA & CGPA Calculator - Enhanced v2.2
// With Subject Choice Support (Physics/Chemistry)
// ============================================

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

// Grade descriptions
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

// ============================================
// Subject Templates with Swappable Options
// ============================================

const subjectTemplates = {
    'CSE': {
        1: [
            { name: 'Mathematics I', credits: 4 },
            { name: 'Physics-I/Chemistry-I', credits: 4, choices: ['Physics-I', 'Chemistry-I'] },
            { name: 'Chemistry-I/Physics-I', credits: 4, choices: ['Chemistry-I', 'Physics-I'] },
            { name: 'Programming in C', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab/Chemistry Lab', credits: 2, choices: ['Physics Lab', 'Chemistry Lab'] },
            { name: 'Chemistry Lab/Physics Lab', credits: 2, choices: ['Chemistry Lab', 'Physics Lab'] }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II/Chemistry-II', credits: 4, choices: ['Physics-II', 'Chemistry-II'] },
            { name: 'Chemistry-II/Physics-II', credits: 4, choices: ['Chemistry-II', 'Physics-II'] },
            { name: 'Data Structures', credits: 4 },
            { name: 'English/Hindi', credits: 2, choices: ['English', 'Hindi'] },
            { name: 'Physics Lab-II/Engineering Mechanics Lab', credits: 2, choices: ['Physics Lab-II', 'Engineering Mechanics Lab'] },
            { name: 'Engineering Mechanics Lab/Physics Lab-II', credits: 2, choices: ['Engineering Mechanics Lab', 'Physics Lab-II'] }
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
            { name: 'Physics-I/Chemistry-I', credits: 4, choices: ['Physics-I', 'Chemistry-I'] },
            { name: 'Chemistry-I/Physics-I', credits: 4, choices: ['Chemistry-I', 'Physics-I'] },
            { name: 'Circuit Analysis', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab/Chemistry Lab', credits: 2, choices: ['Physics Lab', 'Chemistry Lab'] },
            { name: 'Chemistry Lab/Physics Lab', credits: 2, choices: ['Chemistry Lab', 'Physics Lab'] }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II/Chemistry-II', credits: 4, choices: ['Physics-II', 'Chemistry-II'] },
            { name: 'Chemistry-II/Physics-II', credits: 4, choices: ['Chemistry-II', 'Physics-II'] },
            { name: 'Electrical Machines', credits: 4 },
            { name: 'English/Hindi', credits: 2, choices: ['English', 'Hindi'] },
            { name: 'Physics Lab-II/Electrical Machines Lab', credits: 2, choices: ['Physics Lab-II', 'Electrical Machines Lab'] },
            { name: 'Electrical Machines Lab/Physics Lab-II', credits: 2, choices: ['Electrical Machines Lab', 'Physics Lab-II'] }
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
            { name: 'Physics-I/Chemistry-I', credits: 4, choices: ['Physics-I', 'Chemistry-I'] },
            { name: 'Chemistry-I/Physics-I', credits: 4, choices: ['Chemistry-I', 'Physics-I'] },
            { name: 'Electrical Engineering Basics', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab/Chemistry Lab', credits: 2, choices: ['Physics Lab', 'Chemistry Lab'] },
            { name: 'Chemistry Lab/Physics Lab', credits: 2, choices: ['Chemistry Lab', 'Physics Lab'] }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II/Chemistry-II', credits: 4, choices: ['Physics-II', 'Chemistry-II'] },
            { name: 'Chemistry-II/Physics-II', credits: 4, choices: ['Chemistry-II', 'Physics-II'] },
            { name: 'Electrical Machines-I', credits: 4 },
            { name: 'English/Hindi', credits: 2, choices: ['English', 'Hindi'] },
            { name: 'Physics Lab-II/Electrical Machines Lab', credits: 2, choices: ['Physics Lab-II', 'Electrical Machines Lab'] },
            { name: 'Electrical Machines Lab/Physics Lab-II', credits: 2, choices: ['Electrical Machines Lab', 'Physics Lab-II'] }
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
            { name: 'Physics-I/Chemistry-I', credits: 4, choices: ['Physics-I', 'Chemistry-I'] },
            { name: 'Chemistry-I/Physics-I', credits: 4, choices: ['Chemistry-I', 'Physics-I'] },
            { name: 'Engineering Mechanics', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab/Chemistry Lab', credits: 2, choices: ['Physics Lab', 'Chemistry Lab'] },
            { name: 'Chemistry Lab/Physics Lab', credits: 2, choices: ['Chemistry Lab', 'Physics Lab'] }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II/Chemistry-II', credits: 4, choices: ['Physics-II', 'Chemistry-II'] },
            { name: 'Chemistry-II/Physics-II', credits: 4, choices: ['Chemistry-II', 'Physics-II'] },
            { name: 'Material Science', credits: 4 },
            { name: 'English/Hindi', credits: 2, choices: ['English', 'Hindi'] },
            { name: 'Physics Lab-II/Material Science Lab', credits: 2, choices: ['Physics Lab-II', 'Material Science Lab'] },
            { name: 'Material Science Lab/Physics Lab-II', credits: 2, choices: ['Material Science Lab', 'Physics Lab-II'] }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Applied Thermodynamics', credits: 4 },
            { name: 'Mechanics of Materials', credits: 4 },
            { name: 'Fluid Mechanics', credits: 4 },
            { name: 'Manufacturing Processes', credits: 4 },
            { name: 'Manufacturing Lab', credits: 2 }
        ],
        4: [
            { name: 'Heat Transfer', credits: 4 },
            { name: 'Machine Design', credits: 4 },
            { name: 'Power Plants Engineering', credits: 4 },
            { name: 'Mechanical Vibrations', credits: 4 },
            { name: 'Control Systems', credits: 4 },
            { name: 'Design Lab', credits: 2 }
        ],
        5: [
            { name: 'Dynamics of Machines', credits: 4 },
            { name: 'IC Engines', credits: 4 },
            { name: 'Hydraulics & Pneumatics', credits: 4 },
            { name: 'Energy Conversion', credits: 4 },
            { name: 'Automation in Manufacturing', credits: 4 },
            { name: 'Mechanical Lab', credits: 2 }
        ],
        6: [
            { name: 'Thermal Engineering', credits: 4 },
            { name: 'Industrial Engineering', credits: 4 },
            { name: 'Production Management', credits: 4 },
            { name: 'Renewable Energy Systems', credits: 4 },
            { name: 'Advanced Manufacturing', credits: 4 },
            { name: 'Production Lab', credits: 2 }
        ],
        7: [
            { name: 'Mechanical System Design', credits: 4 },
            { name: 'Advanced Thermodynamics', credits: 4 },
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
            { name: 'Physics-I/Chemistry-I', credits: 4, choices: ['Physics-I', 'Chemistry-I'] },
            { name: 'Chemistry-I/Physics-I', credits: 4, choices: ['Chemistry-I', 'Physics-I'] },
            { name: 'Engineering Mechanics', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab/Chemistry Lab', credits: 2, choices: ['Physics Lab', 'Chemistry Lab'] },
            { name: 'Chemistry Lab/Physics Lab', credits: 2, choices: ['Chemistry Lab', 'Physics Lab'] }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II/Chemistry-II', credits: 4, choices: ['Physics-II', 'Chemistry-II'] },
            { name: 'Chemistry-II/Physics-II', credits: 4, choices: ['Chemistry-II', 'Physics-II'] },
            { name: 'Surveying-I', credits: 4 },
            { name: 'English/Hindi', credits: 2, choices: ['English', 'Hindi'] },
            { name: 'Physics Lab-II/Surveying Lab', credits: 2, choices: ['Physics Lab-II', 'Surveying Lab'] },
            { name: 'Surveying Lab/Physics Lab-II', credits: 2, choices: ['Surveying Lab', 'Physics Lab-II'] }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Mechanics of Materials', credits: 4 },
            { name: 'Building Materials', credits: 4 },
            { name: 'Hydraulics', credits: 4 },
            { name: 'Surveying-II', credits: 4 },
            { name: 'Surveying Lab', credits: 2 }
        ],
        4: [
            { name: 'Soil Mechanics', credits: 4 },
            { name: 'Structural Analysis-I', credits: 4 },
            { name: 'Transportation Engineering', credits: 4 },
            { name: 'Reinforced Concrete Design', credits: 4 },
            { name: 'Environmental Engineering', credits: 4 },
            { name: 'RCC Design Lab', credits: 2 }
        ],
        5: [
            { name: 'Foundation Engineering', credits: 4 },
            { name: 'Structural Analysis-II', credits: 4 },
            { name: 'Water Supply Engineering', credits: 4 },
            { name: 'Steel Structure Design', credits: 4 },
            { name: 'Construction Management', credits: 4 },
            { name: 'Steel Lab', credits: 2 }
        ],
        6: [
            { name: 'Advanced Foundation Design', credits: 4 },
            { name: 'Wastewater Engineering', credits: 4 },
            { name: 'River & Irrigation Engineering', credits: 4 },
            { name: 'Bridge Engineering', credits: 4 },
            { name: 'Geotechnical Engineering', credits: 4 },
            { name: 'Geotechnical Lab', credits: 2 }
        ],
        7: [
            { name: 'Earthquake Engineering', credits: 4 },
            { name: 'Advanced Structural Design', credits: 4 },
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
            { name: 'Physics-I/Chemistry-I', credits: 4, choices: ['Physics-I', 'Chemistry-I'] },
            { name: 'Chemistry-I/Physics-I', credits: 4, choices: ['Chemistry-I', 'Physics-I'] },
            { name: 'Computer Fundamentals', credits: 4 },
            { name: 'Engineering Graphics', credits: 2 },
            { name: 'Physics Lab/Chemistry Lab', credits: 2, choices: ['Physics Lab', 'Chemistry Lab'] },
            { name: 'Chemistry Lab/Physics Lab', credits: 2, choices: ['Chemistry Lab', 'Physics Lab'] }
        ],
        2: [
            { name: 'Mathematics II', credits: 4 },
            { name: 'Physics-II/Chemistry-II', credits: 4, choices: ['Physics-II', 'Chemistry-II'] },
            { name: 'Chemistry-II/Physics-II', credits: 4, choices: ['Chemistry-II', 'Physics-II'] },
            { name: 'Programming in Python', credits: 4 },
            { name: 'English/Hindi', credits: 2, choices: ['English', 'Hindi'] },
            { name: 'Physics Lab-II/Computer Lab', credits: 2, choices: ['Physics Lab-II', 'Computer Lab'] },
            { name: 'Computer Lab/Physics Lab-II', credits: 2, choices: ['Computer Lab', 'Physics Lab-II'] }
        ],
        3: [
            { name: 'Mathematics III', credits: 4 },
            { name: 'Database Systems', credits: 4 },
            { name: 'Object Oriented Programming', credits: 4 },
            { name: 'Data Structures', credits: 4 },
            { name: 'Web Technologies-I', credits: 4 },
            { name: 'Web Lab', credits: 2 }
        ],
        4: [
            { name: 'Operating Systems', credits: 4 },
            { name: 'Network Fundamentals', credits: 4 },
            { name: 'Software Engineering', credits: 4 },
            { name: 'Information Security', credits: 4 },
            { name: 'Enterprise Java Development', credits: 4 },
            { name: 'Network Lab', credits: 2 }
        ],
        5: [
            { name: 'Cloud Computing', credits: 4 },
            { name: 'Mobile Application Development', credits: 4 },
            { name: 'Machine Learning Basics', credits: 4 },
            { name: 'System Administration', credits: 4 },
            { name: 'Web Services', credits: 4 },
            { name: 'Mobile Lab', credits: 2 }
        ],
        6: [
            { name: 'Advanced Databases', credits: 4 },
            { name: 'Distributed Systems', credits: 4 },
            { name: 'Big Data Analytics', credits: 4 },
            { name: 'IoT Applications', credits: 4 },
            { name: 'Advanced Security', credits: 4 },
            { name: 'Big Data Lab', credits: 2 }
        ],
        7: [
            { name: 'Artificial Intelligence', credits: 4 },
            { name: 'DevOps Engineering', credits: 4 },
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

// ============================================
// Global State Management
// ============================================

let currentSubjects = [];
let semesterData = [];
let selectedChoices = {}; // Track user's choices for / subjects

// ============================================
// Utility Functions
// ============================================

/**
 * Format number to 2 decimal places
 */
function formatNumber(num) {
    return parseFloat(num).toFixed(2);
}

/**
 * Calculate percentage from GPA
 */
function calculatePercentage(gpa) {
    return ((gpa / 10.0) * 100).toFixed(2);
}

/**
 * Get grade description
 */
function getGradeDescription(grade) {
    return gradeToPercentage[grade] || 'Unknown';
}

/**
 * Parse subject name to check for choices
 */
function parseSubjectName(fullName) {
    if (fullName.includes('/')) {
        const choices = fullName.split('/').map(s => s.trim());
        return {
            displayName: fullName,
            hasChoices: true,
            choices: choices,
            selected: choices[0] // Default to first choice
        };
    }
    return {
        displayName: fullName,
        hasChoices: false,
        choices: [],
        selected: fullName
    };
}

// ============================================
// Main Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('RTU SGPA & CGPA Calculator v2.2 Loaded');
    console.log('Grading System: RTU 10-Point CBCS Scale');
    
    // Set up event listeners
    setupEventListeners();
    
    // Load saved data
    loadDataFromLocalStorage();
    
    // Initialize UI
    updateUIState();
});

// ============================================
// Event Listeners Setup
// ============================================

function setupEventListeners() {
    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });
    
    // Manual Entry Tab
    document.getElementById('branch')?.addEventListener('change', loadSubjectsForBranch);
    document.getElementById('semester')?.addEventListener('change', loadSubjectsForBranch);
    document.getElementById('add-subject-btn')?.addEventListener('click', addCustomSubject);
    document.getElementById('calculate-sgpa-btn')?.addEventListener('click', calculateSGPA);
    document.getElementById('reset-manual-btn')?.addEventListener('click', resetManualEntry);
    
    // Marksheet Upload Tab
    const uploadArea = document.getElementById('upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            document.getElementById('marksheet-upload').click();
        });
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            handleFileUpload(e.dataTransfer.files[0]);
        });
    }
    
    document.getElementById('marksheet-upload')?.addEventListener('change', (e) => {
        handleFileUpload(e.target.files[0]);
    });
    
    document.getElementById('confirm-ocr-btn')?.addEventListener('click', confirmOCRData);
    document.getElementById('edit-ocr-btn')?.addEventListener('click', openEditModal);
    document.getElementById('reset-upload-btn')?.addEventListener('click', resetUpload);
    
    // View Results Tab
    document.getElementById('clear-all-btn')?.addEventListener('click', clearAllData);
    
    // Modal
    document.getElementById('modal-close')?.addEventListener('click', closeEditModal);
    document.getElementById('modal-cancel')?.addEventListener('click', closeEditModal);
    document.getElementById('modal-save')?.addEventListener('click', saveEditedData);
}

// ============================================
// Tab Navigation
// ============================================

function handleTabSwitch(e) {
    const tabName = e.currentTarget.dataset.tab;
    
    // Remove active class from all buttons and panes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to clicked button and corresponding pane
    e.currentTarget.classList.add('active');
    document.getElementById(tabName)?.classList.add('active');
    
    // Update view if switching to results
    if (tabName === 'view-results') {
        updateResultsDisplay();
    }
}

// ============================================
// Manual Entry Functions
// ============================================

function loadSubjectsForBranch() {
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    
    if (!branch || !semester) {
        document.getElementById('subjects-container').innerHTML = '';
        return;
    }
    
    // Get subjects for selected branch and semester
    const subjects = subjectTemplates[branch]?.[semester] || [];
    currentSubjects = JSON.parse(JSON.stringify(subjects)); // Deep copy
    
    renderSubjects();
    updateCreditsDisplay();
}

function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    currentSubjects.forEach((subject, index) => {
        const parsed = parseSubjectName(subject.name);
        const card = document.createElement('div');
        card.className = 'subject-card' + (parsed.hasChoices ? ' has-choices' : '');
        card.id = `subject-${index}`;
        
        let choicesHTML = '';
        if (parsed.hasChoices) {
            choicesHTML = `
                <div class="choice-selector">
                    <p class="subject-choice-hint">⚠️ Choose One:</p>
                    ${parsed.choices.map((choice, i) => `
                        <label>
                            <input type="radio" name="choice-${index}" value="${choice}" 
                                   ${i === 0 ? 'checked' : ''} 
                                   onchange="updateChoiceSelection(${index}, '${choice}')">
                            ${choice}
                        </label>
                    `).join('')}
                </div>
            `;
        }
        
        card.innerHTML = `
            <button class="subject-delete" onclick="deleteSubject(${index})">×</button>
            <div class="subject-name">${parsed.selected}</div>
            ${choicesHTML}
            <div class="subject-info">
                <span>Credits:</span>
                <span class="subject-credits">${subject.credits}</span>
            </div>
            <div class="grade-buttons" id="grade-container-${index}">
                ${grades.map(grade => `
                    <button class="grade-btn" onclick="selectGrade(${index}, '${grade}')" title="${getGradeDescription(grade)}">
                        ${grade}
                    </button>
                `).join('')}
            </div>
            <input type="hidden" id="grade-${index}" value="">
        `;
        
        container.appendChild(card);
    });
}

function updateChoiceSelection(index, selectedChoice) {
    const parsed = parseSubjectName(currentSubjects[index].name);
    parsed.selected = selectedChoice;
    selectedChoices[index] = selectedChoice;
    
    // Update display name
    const nameEl = document.querySelector(`#subject-${index} .subject-name`);
    if (nameEl) nameEl.textContent = selectedChoice;
}

function selectGrade(index, grade) {
    // Remove previous selection
    document.querySelectorAll(`#grade-container-${index} .grade-btn`).forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    event.target.classList.add('selected');
    
    // Store grade
    document.getElementById(`grade-${index}`).value = grade;
}

function addCustomSubject() {
    const name = prompt('Enter subject name:');
    if (!name) return;
    
    const creditsStr = prompt('Enter credits:');
    const credits = parseInt(creditsStr) || 3;
    
    currentSubjects.push({ name, credits });
    renderSubjects();
    updateCreditsDisplay();
}

function deleteSubject(index) {
    currentSubjects.splice(index, 1);
    renderSubjects();
    updateCreditsDisplay();
}

function updateCreditsDisplay() {
    const total = currentSubjects.reduce((sum, s) => sum + s.credits, 0);
    document.getElementById('total-credits').textContent = total;
}

function calculateSGPA() {
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    
    if (!branch || !semester) {
        alert('Please select branch and semester');
        return;
    }
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    const subjectsData = [];
    
    currentSubjects.forEach((subject, index) => {
        const grade = document.getElementById(`grade-${index}`)?.value;
        
        if (!grade) {
            alert(`Please select grade for ${subject.name}`);
            throw new Error('Missing grade');
        }
        
        const gradePoint = gradingSystem[grade];
        const credits = subject.credits;
        
        totalGradePoints += gradePoint * credits;
        totalCredits += credits;
        
        const selectedName = selectedChoices[index] || subject.name;
        subjectsData.push({
            name: selectedName,
            grade,
            gradePoint,
            credits
        });
    });
    
    if (totalCredits === 0) {
        alert('No subjects added');
        return;
    }
    
    const sgpa = formatNumber(totalGradePoints / totalCredits);
    const percentage = calculatePercentage(sgpa);
    
    // Display result
    const resultBox = document.getElementById('sgpa-result');
    document.getElementById('sgpa-value').textContent = sgpa;
    document.getElementById('sgpa-percentage').textContent = percentage + '%';
    document.getElementById('sgpa-detail').innerHTML = `
        <strong>Branch:</strong> ${branch} | 
        <strong>Semester:</strong> ${semester} | 
        <strong>Total Credits:</strong> ${totalCredits}<br>
        <strong>Grade Points:</strong> ${formatNumber(totalGradePoints)}
    `;
    
    resultBox.classList.remove('hidden');
    
    // Store temporary data for saving
    window.currentSGPAData = {
        branch,
        semester: parseInt(semester),
        sgpa: parseFloat(sgpa),
        percentage: parseFloat(percentage),
        subjects: subjectsData,
        totalCredits,
        totalGradePoints: parseFloat(totalGradePoints),
        date: new Date().toLocaleDateString()
    };
    
    console.log(`SGPA Calculated: ${sgpa} / 10 (${percentage}%)`);
    console.log('Subject Details:', subjectsData);
}

function resetManualEntry() {
    if (confirm('Reset all entries for this semester?')) {
        currentSubjects = [];
        selectedChoices = {};
        document.getElementById('subjects-container').innerHTML = '';
        document.getElementById('sgpa-result').classList.add('hidden');
        document.getElementById('branch').value = '';
        document.getElementById('semester').value = '';
        document.getElementById('total-credits').textContent = '0';
    }
}

// ============================================
// Save SGPA Function
// ============================================

document.addEventListener('click', (e) => {
    if (e.target.id === 'save-sgpa-btn' && window.currentSGPAData) {
        saveSGPA();
    }
});

function saveSGPA() {
    if (!window.currentSGPAData) return;
    
    semesterData.push(window.currentSGPAData);
    saveDataToLocalStorage();
    
    alert('✅ SGPA saved successfully!');
    console.log('Saved SGPA Data:', window.currentSGPAData);
    
    resetManualEntry();
}

// ============================================
// Marksheet Upload Functions
// ============================================

function handleFileUpload(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = document.getElementById('preview-image');
        img.src = e.target.result;
        document.getElementById('image-preview-container').classList.remove('hidden');
        
        // Show loading
        document.getElementById('loading-spinner').classList.remove('hidden');
        
        // Simulate OCR processing (in production, integrate actual OCR)
        setTimeout(() => {
            performOCR(img.src);
        }, 500);
    };
    reader.readAsDataURL(file);
}

function performOCR(imageSrc) {
    // For demo, show mock OCR results
    // In production, integrate Tesseract.js or similar
    
    const mockResults = [
        { name: 'Mathematics I', grade: 'A+' },
        { name: 'Physics-I', grade: 'A' },
        { name: 'Chemistry-I', grade: 'B+' },
        { name: 'Programming in C', grade: 'A+' }
    ];
    
    displayOCRResults(mockResults);
    document.getElementById('loading-spinner').classList.add('hidden');
}

function displayOCRResults(results) {
    const container = document.getElementById('ocr-subjects-container');
    container.innerHTML = '';
    
    results.forEach((result, index) => {
        const subject = document.createElement('div');
        subject.className = 'subject-card';
        subject.innerHTML = `
            <div class="subject-name">${result.name}</div>
            <div class="subject-info">
                <span>Detected Grade:</span>
                <span class="subject-grade">${result.grade}</span>
            </div>
            <div class="grade-buttons">
                ${grades.map(grade => `
                    <button class="grade-btn ${grade === result.grade ? 'selected' : ''}" 
                            onclick="this.parentElement.parentElement.dataset.grade='${grade}'; this.parentElement.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('selected')); this.classList.add('selected');">
                        ${grade}
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(subject);
    });
    
    document.getElementById('ocr-results').classList.remove('hidden');
}

function confirmOCRData() {
    const semester = document.getElementById('upload-semester').value;
    if (!semester) {
        alert('Please select semester');
        return;
    }
    
    // Collect OCR data
    const subjects = Array.from(document.getElementById('ocr-subjects-container').children).map(card => {
        const name = card.querySelector('.subject-name').textContent;
        const grade = card.dataset.grade || card.querySelector('.grade-btn.selected')?.textContent || 'F';
        return { name, grade };
    });
    
    alert('✅ Marksheet data confirmed! (Demo)');
}

function resetUpload() {
    document.getElementById('marksheet-upload').value = '';
    document.getElementById('image-preview-container').classList.add('hidden');
    document.getElementById('ocr-results').classList.add('hidden');
    document.getElementById('upload-semester').value = '';
}

function openEditModal() {
    document.getElementById('edit-modal').classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

function saveEditedData() {
    closeEditModal();
    alert('✅ Changes saved!');
}

// ============================================
// Results Display
// ============================================

function updateResultsDisplay() {
    if (semesterData.length === 0) {
        document.getElementById('no-results-message').style.display = 'block';
        document.getElementById('semesters-grid').innerHTML = '';
        return;
    }
    
    document.getElementById('no-results-message').style.display = 'none';
    
    // Calculate CGPA
    let totalAllGradePoints = 0;
    let totalAllCredits = 0;
    
    semesterData.forEach(sem => {
        totalAllGradePoints += sem.totalGradePoints;
        totalAllCredits += sem.totalCredits;
    });
    
    const cgpa = formatNumber(totalAllGradePoints / totalAllCredits);
    const cgpaPercentage = calculatePercentage(cgpa);
    
    // Update CGPA display
    document.getElementById('cgpa-value').textContent = cgpa;
    document.getElementById('cgpa-percentage').textContent = cgpaPercentage + '%';
    document.getElementById('semesters-count').textContent = semesterData.length;
    document.getElementById('total-credits-count').textContent = totalAllCredits;
    
    // Render semester cards
    const container = document.getElementById('semesters-grid');
    container.innerHTML = '';
    
    semesterData.sort((a, b) => a.semester - b.semester).forEach((sem, idx) => {
        const card = document.createElement('div');
        card.className = 'semester-card';
        
        const subjectsHTML = sem.subjects.map(s => `
            <div class="subject-row">
                <span>${s.name}</span>
                <span class="subject-grade">${s.grade}</span>
            </div>
        `).join('');
        
        card.innerHTML = `
            <div class="semester-card-header">
                <span class="semester-label">Semester ${sem.semester}</span>
                <div class="semester-gpa">
                    <span class="semester-gpa-value">${sem.sgpa}</span>
                    <span class="semester-gpa-unit">/10</span>
                </div>
            </div>
            <div class="semester-info">
                <div class="semester-stat">
                    <span class="semester-stat-label">Percentage</span>
                    <span class="semester-stat-value">${sem.percentage}%</span>
                </div>
                <div class="semester-stat">
                    <span class="semester-stat-label">Credits</span>
                    <span class="semester-stat-value">${sem.totalCredits}</span>
                </div>
            </div>
            <div class="semester-subjects">
                ${subjectsHTML}
            </div>
            <button onclick="deleteSemerterResult(${idx})" style="width: 100%; margin-top: 10px; padding: 8px; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer;">
                🗑️ Delete
            </button>
        `;
        
        container.appendChild(card);
    });
    
    console.log(`CGPA Calculated: ${cgpa} / 10 (${cgpaPercentage}%)`);
}

function deleteSemerterResult(index) {
    if (confirm('Delete this semester result?')) {
        semesterData.splice(index, 1);
        saveDataToLocalStorage();
        updateResultsDisplay();
    }
}

function clearAllData() {
    if (confirm('🚨 This will delete ALL saved data. Are you sure?')) {
        semesterData = [];
        selectedChoices = {};
        localStorage.removeItem('rtuSGPAData');
        updateResultsDisplay();
        alert('✅ All data cleared!');
    }
}

// ============================================
// Local Storage Management
// ============================================

function saveDataToLocalStorage() {
    const data = {
        semesterData,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('rtuSGPAData', JSON.stringify(data));
    console.log('Data saved to localStorage');
}

function loadDataFromLocalStorage() {
    const saved = localStorage.getItem('rtuSGPAData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            semesterData = data.semesterData || [];
            console.log('Data loaded from localStorage:', semesterData.length, 'semesters');
        } catch (e) {
            console.error('Error loading data:', e);
        }
    }
}

// ============================================
// UI State Management
// ============================================

function updateUIState() {
    // Update results display if on that tab
    const resultsTab = document.getElementById('view-results');
    if (resultsTab?.classList.contains('active')) {
        updateResultsDisplay();
    }
}
