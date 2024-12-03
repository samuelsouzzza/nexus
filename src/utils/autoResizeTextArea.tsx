export default function autoResizeTextArea(
  textArea: HTMLTextAreaElement | null,
  minRows = 1
) {
  if (textArea) {
    while (textArea.scrollHeight > textArea.offsetHeight) {
      textArea.rows += 1;
    }
    while (
      textArea.scrollHeight <= textArea.offsetHeight &&
      textArea.rows > minRows
    ) {
      textArea.rows -= 1;
    }
  }
}
