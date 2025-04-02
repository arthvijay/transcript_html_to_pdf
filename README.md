# transcript_html_to_pdf

### README: How to Use the JavaScript Code for PDF Generation

This guide explains how to use the provided JavaScript code to generate a PDF of a webpage's content directly from your browser. All you need to do is copy and paste the script into the console of your browser's Developer Tools.

---

#### **Purpose**
The script uses the `html2pdf.js` library to:
- Convert the HTML content of a webpage (or a specific section) into a PDF.
- Automatically download the PDF to your browser's default Downloads folder with the filename `transcript.pdf`.
- Preserve margins and page formatting to avoid content cutoff.

---

#### **How to Use the Code**
1. **Open the Target Webpage:**
   - Navigate to the webpage you want to convert to a PDF. For example, this could be your transcript or any HTML-protected URL.

2. **Open Developer Tools:**
   - Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac) to open your browser's Developer Tools.
   - Click on the **Console** tab.

3. **Copy and Paste the Code:**
   - Copy the provided JavaScript code in its entirety.
   - Paste it into the console input area.

4. **Run the Code:**
   - Hit `Enter` to execute the script.
   - The script will:
     - Load the `html2pdf.js` library dynamically.
     - Generate the PDF.
     - Automatically save it to your default Downloads folder with the name `transcript.pdf`.

---

#### **Output**
- The file will be downloaded as `transcript.pdf` with consistent margins (1 inch at the top, 1.7 inches at the bottom, and 0.5 inches on the sides).
- It is formatted for standard U.S. letter size (8.5 x 11 inches) in portrait orientation.

---

#### **Notes and Tips**
- **For a Specific Section:** By default, the script targets the entire webpage (`document.body`). If you only want to convert a specific part of the page, modify the `element` variable. For example:
  ```javascript
  const element = document.querySelector('#specific-section');
  ```
- **Prevent Page Cutting:** The script includes margin adjustments to prevent content from getting cut off. If further adjustments are needed, tweak the `margin` values.

- **Browser Support:** This code works best in modern browsers like Chrome, Edge, or Firefox. Ensure you have JavaScript enabled.

---
