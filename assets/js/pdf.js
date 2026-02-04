document.getElementById('download-pdf').addEventListener('click', function () {
    const element = document.getElementById('bill-container');
    const opt = {
        margin: [10, 10],
        filename: 'POS-Bill-' + new Date().getTime() + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#0f172a' // Match background for transparency look
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save().then(() => {
        showNotification("Bill saved as PDF!");
    });
});
