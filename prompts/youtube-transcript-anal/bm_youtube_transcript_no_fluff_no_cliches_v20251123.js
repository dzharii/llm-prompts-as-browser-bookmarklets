javascript:(function bm_youtube_transcript_no_fluff_no_cliches_v20251123() { 
  var currentUrl = window.location.href; 
  var prompt = [
    "You are given a transcript of a YouTube video at:\n",
    currentUrl, "\n\n",
    "Analyze it and extract all the main ideas.\n\n",
    "Write a series of short paragraphs, each paragraph expressing one main idea in clear, simple language.\n",
    "Do not add fluff, filler, cliches, or commentary.\n",
    "Do not summarize loosely; capture all essential concepts and arguments from the transcript.\n\n",
    "Avoid repeating key labels and names too often; when possible, use pronouns or rephrase instead of repeating the same term.\n\n",
    "When you introduce an important abstract word or key concept, you may add a single Markdown block quote right after the paragraph that defines that word in one very simple sentence.\n\n",
    "Do not use titles, headings, numbered lists, or bullet lists.\n",
    "Output only the paragraphs and occasional block quotes, as plain text.\n\n",
    "Wait for transcript content."
  ].join(''); 
  var newUrl = "https://chatgpt.com/?q=" + encodeURIComponent(prompt); 
  window.open(newUrl, "_blank"); 
})();

