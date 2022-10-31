const CopyToClipboard: ({ text }: { text: string }) => void = async ({ text }) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`${text} Copied`);
  } catch ($e) {
    console.log($e);
  }
};

export default CopyToClipboard;
