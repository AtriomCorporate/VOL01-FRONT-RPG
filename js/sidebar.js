async function carregarSidebar() {
  const response = await fetch("./components/sidebar.html");
  const html = await response.text();

  document.getElementById("sidebar").innerHTML = html;
}

carregarSidebar();
