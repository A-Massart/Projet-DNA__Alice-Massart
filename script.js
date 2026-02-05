async function loadMarkdown() {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  if (!file) {
    document.getElementById("content").innerHTML = "Aucun fichier markdown spécifié.";
    return;
  }

  const response = await fetch(file);
  let md = await response.text();

  const basePath = file.substring(0, file.lastIndexOf("/") + 1);
  md = md.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
    if (!src.startsWith("http")) {
      return `![${alt}](${basePath}${src})`;
    }
    return match;
  });

  const html = marked.parse(md);
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = html;

  addIdsToHeaders(contentDiv);

  MathJax.typeset();

  
}

function addIdsToHeaders(container) {
  const headers = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headers.forEach(header => {
    if (!header.id) {
      let id = header.textContent
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      header.id = id;
    }
  });
}

loadMarkdown();
