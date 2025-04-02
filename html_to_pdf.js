// Step 1: Load the html2pdf.js library dynamically
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js';
document.body.appendChild(script);

// Step 2: Once the library is loaded, generate and automatically download the PDF
script.onload = () => {
    const element = document.body; // Replace with a specific element if needed

    const options = {
        margin: [1, 0.5, 1.7, 0.5], // Margins: [top, left, bottom, right] in inches
        filename: 'transcript.pdf', // Automatically set the filename to 'transcript.pdf'
        image: { type: 'jpeg', quality: 0.98 }, // High-quality images
        html2canvas: { scale: 2 }, // High resolution for better quality
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }, // Standard letter size
    };

    // Generate and automatically save the PDF to the Downloads folder
    html2pdf()
        .set(options)
        .from(element)
        .toPdf()
        .get('pdf')
        .then((pdf) => {
            const totalPages = pdf.internal.getNumberOfPages();

            // Add spacing or page adjustments for every page
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setMargins(10, 10, 20, 10); // Ensure spacing remains consistent across all pages
            }
        })
        .save();
};
