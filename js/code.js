function copyCode() {
    const codeElement = document.querySelector('.code-box code');
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(codeElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}