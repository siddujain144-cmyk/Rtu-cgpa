# RTU SGPA & CGPA Calculator 📊

A **beautiful, visual, and easy-to-use** calculator for computing SGPA (Semester Grade Point Average) and CGPA (Cumulative Grade Point Average) for **Rajasthan Technical University (RTU)** using the **Choice Based Credit System (CBCS)** with the official **10-point grading scale**.

---

## Features ✨

### 1. **Manual Entry Mode** ✏️
- Select your **branch** and **semester**
- Automatically populate pre-configured subjects (or add custom ones)
- Enter grades for each subject using **RTU's 10-point scale**
- Set credit hours per subject
- Calculate SGPA instantly with percentage
- Save SGPA for permanent record

### 2. **Marksheet Upload Mode** 📤
- Upload a photo/scan of your marksheet
- **Automatic OCR** (Optical Character Recognition) processing
- Automatically extracts subjects and grades from the image
- Option to edit detected values manually
- Calculate SGPA from uploaded marksheet
- Supports all image formats (JPG, PNG, etc.)

### 3. **Results & Analytics** 📋
- View all saved SGPAs semester-wise
- **Automatic CGPA calculation** across all semesters using weighted credits
- Display of all subjects and grades in an organized table
- Total credits tracker and grade points
- Export/Import functionality

---

## Supported Branches 🏫

The calculator includes pre-configured subjects for:

1. **CSE** - Computer Science Engineering
2. **ECE** - Electronics & Communication Engineering
3. **EE** - Electrical Engineering
4. **ME** - Mechanical Engineering
5. **CE** - Civil Engineering
6. **IT** - Information Technology

Custom subjects can be added for any branch.

---

## RTU Grading System 🎓

### RTU 10-Point CBCS Grading Scale (Official)

| Grade | Points | Description          |
|-------|--------|----------------------|
| A++   | 10.0   | Outstanding          |
| A+    | 9.0    | Excellent            |
| A     | 8.5    | Very Good            |
| B+    | 8.0    | Good                 |
| B     | 7.5    | Above Average        |
| C+    | 7.0    | Average              |
| C     | 6.5    | Below Average        |
| D+    | 6.0    | Marginal             |
| D     | 5.5    | Pass                 |
| E+    | 5.0    | Pass (Old Regulation)|
| E     | 4.0    | Pass (Old Regulation)|
| F     | 0.0    | Fail                 |

**Formulas Used:**
```
SGPA = Σ(Grade Point × Credit Hours) / Σ(Total Credits)
CGPA = Σ(All Grade Points × All Credits) / Σ(All Credits)
```

---

## How to Use 🚀

### Method 1: Manual Entry

1. **Open** `index.html` in your web browser
2. Click on **"Manual Entry"** tab
3. Select your **Branch** from dropdown
4. Select your **Semester** (1-8)
5. Pre-configured subjects will appear automatically
6. For each subject:
   - Verify subject name (edit if needed)
   - Verify credit hours are correct
   - Select grade (A++, A+, A, B+, B, C+, C, D+, D, E+, E, F)
7. Click **"Calculate SGPA"** button
8. Review the calculated SGPA with percentage
9. Click **"Save SGPA"** to save permanently

### Method 2: Upload Marksheet

1. Click on **"Upload Marksheet"** tab
2. **Drag and drop** or **click to select** your marksheet image
3. The system will automatically:
   - Recognize the image
   - Extract subjects and grades using OCR
   - Display detected information
4. Select the **Semester** for this marksheet
5. (Optional) Click **"Edit Details"** to manually adjust detected values
6. Click **"Confirm & Calculate"** to save
7. SGPA will be calculated and saved automatically

### Method 3: View Results

1. Click on **"View Results"** tab
2. See all saved SGPAs semester-wise
3. View **automatic CGPA** calculation at the top
4. Review all subjects and grades
5. Check total credits for each semester

---

## Example Calculation 📐

**If a student scores in CSE Semester 1:**
- Mathematics I: A++ (10.0) × 4 credits = 40 points
- Physics-I: B+ (8.0) × 4 credits = 32 points
- Chemistry-I: A (8.5) × 4 credits = 34 points
- Programming in C: A+ (9.0) × 4 credits = 36 points

**Calculation:**
```
Total Points = 40 + 32 + 34 + 36 = 142
Total Credits = 4 + 4 + 4 + 4 = 16
SGPA = 142 / 16 = 8.875 ≈ 8.88
Percentage = (8.88 / 10) × 100 = 88.8%
```

---

## File Structure 📁

```
Rtu-cgpa/
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

### Files Explained:

- **index.html**: Contains the complete UI structure with all tabs and sections
- **styles.css**: Beautiful, responsive design with gradient backgrounds and smooth animations
- **script.js**: All functionality including:
  - SGPA/CGPA calculations (10-point RTU scale)
  - Marksheet OCR processing
  - Local storage management
  - Tab navigation
  - Data management

---

## Technical Details 🔧

### Technologies Used:

1. **HTML5** - Structure
2. **CSS3** - Modern styling with gradients, animations, and responsive design
3. **JavaScript (Vanilla)** - All functionality
4. **Tesseract.js** - OCR for marksheet processing
5. **LocalStorage API** - Data persistence

### Key Features:

- ✅ **No Backend Required** - Runs entirely in browser
- ✅ **Offline Support** - Works without internet after first load
- ✅ **Data Persistence** - All data saved in browser's LocalStorage
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Modern UI** - Beautiful gradients, smooth animations
- ✅ **OCR Integration** - Automatic marksheet processing
- ✅ **100% RTU Accurate** - Uses official 10-point CBCS scale

---

## How Data is Stored 💾

All your data is stored **locally in your browser** using LocalStorage:
- No data is sent to any server
- Data persists even after closing the browser
- You can clear all data from the "View Results" tab

### To Export Your Data:
Open browser console (F12) and run:
```javascript
exportData()
```

### To Import Data:
Open browser console and run:
```javascript
importData(file)
```

---

## Browser Compatibility ✅

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

**Note**: For OCR feature, modern browser with JavaScript support required.

---

## Tips & Tricks 💡

1. **Accurate OCR**: Take clear, well-lit photos of your marksheet
2. **Manual Override**: If OCR doesn't work perfectly, manually enter data
3. **Multiple Branches**: Can calculate SGPA for multiple branches
4. **Subject Customization**: Add or remove subjects as needed
5. **Credit Hours**: Verify correct credits per subject
6. **Save Regularly**: Remember to click "Save SGPA" to persist data
7. **Compare**: View all semesters together to track your progress

---

## Important Notes ⚠️

1. **Always Verify**: Compare calculated SGPA with official RTU marksheet
2. **Credits Matter**: SGPA depends heavily on credit hours
3. **Failed Subjects**: F grade (0 points) still adds to total credits
4. **Weighted Average**: CGPA uses weighted formula with credits, not simple average
5. **Official Source**: Download official marksheet from [rtu.sumsraj.com](https://rtu.sumsraj.com) or [rtu.ac.in](https://rtu.ac.in)

---

## Troubleshooting 🔧

### OCR Not Working?
- Ensure marksheet image is clear
- Try uploading a higher-quality image
- Use manual entry as fallback

### Data Not Saving?
- Check if LocalStorage is enabled in browser
- Try clearing browser cache
- Use a different browser

### Incorrect SGPA Calculation?
- Verify all grades are entered correctly
- Check credit hours are accurate
- Ensure grade scale matches RTU's 10-point scale

---

## Updates & Future Features 🚀

Potential future enhancements:
- 📱 Mobile app version
- ☁️ Cloud sync functionality
- 📊 Advanced analytics and charts
- 📧 Email export functionality
- 🎓 GPA comparison tools
- 🌐 Multi-language support

---

## Support & Feedback 📞

If you face any issues or have suggestions:
1. Check this README thoroughly
2. Clear browser cache and reload
3. Try using a different browser
4. Verify your RTU grading scale matches official documentation

---

## License 📜

This calculator is provided free for educational purposes by RTU students.

---

## Disclaimer ⚠️

This calculator is provided **as-is** for educational purposes. While we strive for accuracy, always verify results with your official university records. RTU officials remain the authority for all academic matters.

---

## Version History 📝

### Version 2.1 (Current - June 4, 2026)
- ✅ Updated to RTU official 10-point CBCS scale
- ✅ Fixed grade system (A++, A+, A, B+, B, C+, C, D+, D, E+, E, F)
- ✅ Correct percentage conversion (/10 instead of /4)
- ✅ Accurate SGPA and CGPA calculations
- ✅ All documentation updated

### Version 2.0 (Earlier)
- 4-point scale implementation
- Basic features

### Version 1.0 (Earlier)
- Initial release

---

**Created for RTU Students | Made with ❤️**

**Last Updated**: June 4, 2026 (Version 2.1)

