// ===== STORY DATA: title|author|genre|synopsis|chapter title|story content =====
const raw = `
Sa Likod ng Ulan|Mara Santos|Romance|Two strangers keep meeting during every storm.|Unang Patak|Every rainy afternoon, Lia waited under the same waiting shed. And every time, a tall stranger with a yellow umbrella appeared, offering half of it without a word.
Kape at Paalam|Jon Reyes|Romance|A barista falls for a customer who orders one last coffee.|Huling Order|Ben memorized her order before he knew her name. Today she asked for two cups, and for the first time, she sat down across from him.
Liham Mula sa Bukas|Ella Cruz|Romance|Letters arrive from a future love.|Selyadong Sobre|The envelope had no stamp, only tomorrow's date. Inside, a stranger described the day Nina would finally laugh again.
Dragon ng Bundok Apo|Rico Dela Peña|Fantasy|A farm boy discovers he can speak to dragons.|Ang Itlog|Tomas found the glowing egg inside a cave. When it cracked, a tiny dragon looked at him and whispered his name.
Ang Huling Engkanto|Bea Villareal|Fantasy|An engkanto seeks help to save the last forest.|Puno ng Balete|The old balete tree trembled. From its roots stepped a silver-eyed figure who begged Mina to protect the forest before sunrise.
Kaharian ng Salamin|Paolo Lim|Fantasy|A girl steps through a mirror into a hidden kingdom.|Ang Pagtawid|Cora touched the cracked mirror and her hand sank in like water. Beyond it, a kingdom of glass was waiting for its queen.
Ang Nawawalang Susi|Dina Ramos|Mystery|A school librarian solves the case of a vanished key.|Walang Bakas|The vault key disappeared at exactly 3 PM. Only five people were in the library, and every one of them was lying.
Tahimik na Bahay|Carlo Mendoza|Mystery|Neighbors notice a house that is silent every night.|Ilaw sa Bintana|Every night at nine, the light in Number 7 turned on, then off. Yet no one had lived there for ten years.
Ang Ikatlong Saksi|Ivy Bautista|Mystery|A witness remembers something that never happened.|Maling Alaala|Ana swore she saw the thief wearing red. The camera showed nobody at all, and now someone wanted her silent.
Bulong sa Dilim|Ken Aquino|Horror|Whispers follow a student in the old dormitory.|Silid 13|The whisper began right after midnight, calling her nickname. Only her roommate used that name, and her bed was empty.
Ang Manika|Rose Navarro|Horror|An antique doll moves when no one is watching.|Iba ang Ngiti|Yesterday the doll was smiling. Tonight, Mira noticed it was smiling wider, and its head was turned toward her bed.
Lamay|Joel Pascual|Horror|A wake in the province takes a terrifying turn.|Hatinggabi|The coffin knocked three times. Everyone laughed nervously until Lolo, who was supposedly gone, asked for water.
Planetang Berde|Neo Alcantara|Sci-Fi|Colonists find a planet that seems to be alive.|Unang Lupa|The soil pulsed under their boots like a heartbeat. Captain Rey realized the planet was not empty; it was listening.
Robot na Marunong Umiyak|Tina Garcia|Sci-Fi|A household robot learns what feelings are.|Patak ng Langis|Unit-7 was built to clean and cook. One night, watching Grandma sleep, a drop of oil rolled down its metal cheek.
Oras Mula 2099|Zed Manalo|Sci-Fi|A time traveler warns students about the future.|Ang Bisita|The new transfer student knew every answer, and every secret. Then she whispered, You only have seven days to change everything.
Ang Mapa ni Lola|Gabby Torres|Adventure|A hand-drawn map leads three cousins to a treasure.|Unang Palatandaan|Lola's old map showed an X near the river. The cousins packed bread, a flashlight, and a lot of courage.
Isla ng Bagyo|Marco Salazar|Adventure|Castaways must cross a haunted island to be rescued.|Nasirang Bangka|The waves threw them onto an unknown shore. A faded sign read, Do not stay after dark. It was already dusk.
Sa Tuktok ng Pulag|Sam Ocampo|Adventure|A hiker group faces fog, fear, and a hidden trail.|Ulap sa Daan|The fog erased the trail in minutes. Kai tightened his bag strap and led the group toward a light no one else saw.
Si Kuya Guard|Mico Fernandez|Comedy|A school guard becomes the unlikely campus hero.|Bawal Tumakbo|Kuya Rey whistled at everyone, yet today he accidentally caught the principal sneaking pancit into the library.
Ang Group Project|Lyka Domingo|Comedy|Five classmates, one deadline, zero cooperation.|Seen Lang|At 11 PM, the group chat had 48 messages and no work done. Then someone typed, Guys, what is the project again?|
Lola Online|Pia Roxas|Comedy|Grandma goes viral after joining social media.|Hello Po, Followers|Lola Auring accidentally went live while scolding the cat. By morning, two million strangers were calling her Nanay.
Ang Bunsong Anak|Clara Soriano|Drama|The youngest sibling carries the family's hopes.|Unang Sweldo|Ruel counted his first salary three times. It was small, but it was enough to buy his mother the medicine she needed.
Tahanan|Eric Valdez|Drama|A family rebuilds after losing their home.|Bagong Haligi|The new house was only wood and tin, but Papa hammered each nail slowly, as if building a promise.
Ang Gitara ni Tatay|Lena Castillo|Drama|A daughter finds her father's secret songs.|Lumang String|Inside the dusty guitar case were notebooks of lyrics. Every song, Mia realized, was written about her.
Noong Panahon ng Kastila|Andres Magno|Historical|A young scribe hides a secret message in 1890.|Tinta at Takot|Isko copied the governor's letters by day. By night, he slipped another message into the pages: Tonight, we rise.
Huling Tren sa Maynila|Perla Dizon|Historical|A nurse and soldier meet during wartime.|Bagong Pag-asa|The train whistle echoed through the broken station. Marie held her bag tightly and boarded the last car to the north.
Ang Telegrama|Nilo Abad|Historical|A telegram changes a village in 1945.|Balita sa Plaza|The telegraph clicked all morning. When the operator finally looked up, he was crying and smiling at the same time.
Ang Huling Bus|Rina Alvarez|Thriller|A passenger realizes the driver is not stopping.|Walang Hintuan|The bus passed every stop. Jake gripped his seat as the driver looked into the mirror and whispered, Almost there.
Code Red|Vic Hernandez|Thriller|A student hacker discovers a school conspiracy.|Maling Password|Nika typed the password and the screen turned red. Someone had been watching the entire school, and now they watched her.
Tawag sa Hatinggabi|Maya Esguerra|Thriller|An unknown caller knows everything about her.|Hindi Kilalang Numero|The phone rang at 12:01. A calm voice said, Do not turn around, Lara. It is standing right behind you.`;
const stories = raw.trim().split("\n").map((l, i) => {
  const [title, author, genre, syn, chap, body] = l.split("|");
  return { id: i + 1, title, author, genre, syn, chap, body };
});

// ===== FEATURE 1: DARK / LIGHT MODE =====
const themeBtn = document.getElementById("themeBtn");
function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeBtn.textContent = dark ? "☀️" : "🌙";
}
applyTheme(localStorage.getItem("dark") === "1");
themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  localStorage.setItem("dark", dark ? "1" : "0");
  applyTheme(dark);
});

// active nav link
document.querySelectorAll("nav a").forEach(a => {
  if (location.pathname.endsWith(a.getAttribute("href"))) a.classList.add("active");
});

// ===== FEATURE 2: LIKE BUTTON =====
const likes = JSON.parse(localStorage.getItem("likes") || "[]");
function toggleLike(id, btn) {
  const i = likes.indexOf(id);
  i > -1 ? likes.splice(i, 1) : likes.push(id);
  localStorage.setItem("likes", JSON.stringify(likes));
  btn.classList.toggle("liked", likes.includes(id));
  btn.textContent = likes.includes(id) ? "❤️ Liked" : "🤍 Like";
}
const likeLabel = id => likes.includes(id) ? "❤️ Liked" : "🤍 Like";

// ===== FEATURE 3: SHOW / HIDE SYNOPSIS + CARDS =====
const grid = document.getElementById("grid");
function renderCards(list) {
  const limit = grid.dataset.limit ? +grid.dataset.limit : list.length;
  grid.innerHTML = list.slice(0, limit).map(s => `
    <article class="card">
      <img src="images/cover${s.id}.svg" alt="Cover of ${s.title}" loading="lazy">
      <div class="info">
        <span class="badge">${s.genre}</span>
        <h3>${s.title}</h3><small>by ${s.author}</small>
        <p class="syn" id="syn${s.id}">${s.syn}</p>
        <div class="actions">
          <button class="btn" data-syn="${s.id}">Synopsis</button>
          <button class="btn ${likes.includes(s.id) ? "liked" : ""}" data-like="${s.id}">${likeLabel(s.id)}</button>
          <a class="btn" href="story.html?id=${s.id}">Read Story</a>
        </div>
      </div>
    </article>`).join("") || "<p>No stories found.</p>";
}
if (grid) {
  renderCards(stories);
  grid.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.syn) document.getElementById("syn" + b.dataset.syn).classList.toggle("show");
    if (b.dataset.like) toggleLike(+b.dataset.like, b);
  });
}

// ===== LIBRARY: SEARCH + GENRE FILTER =====
const search = document.getElementById("search"), genre = document.getElementById("genre");
if (search && genre) {
  genre.innerHTML = ["All Genres", ...new Set(stories.map(s => s.genre))].map(g => `<option>${g}</option>`).join("");
  const filter = () => {
    const q = search.value.toLowerCase();
    renderCards(stories.filter(s =>
      (genre.value === "All Genres" || s.genre === genre.value) &&
      (s.title + s.author).toLowerCase().includes(q)));
  };
  search.addEventListener("input", filter);
  genre.addEventListener("change", filter);
}

// ===== STORY PAGE + FEATURE 4: READING PROGRESS =====
const reader = document.getElementById("reader");
if (reader) {
  const s = stories.find(x => x.id === +new URLSearchParams(location.search).get("id")) || stories[0];
  document.title = s.title + " | KuwentoHub";
  reader.innerHTML = `
    <div class="covers">
      <img src="images/cover${s.id}.svg" alt="Cover of ${s.title}">
      <img src="images/scene${s.id}.svg" alt="Scene illustration for ${s.title}">
    </div>
    <span class="badge">${s.genre}</span>
    <h1>${s.title}</h1><p class="meta">by ${s.author}</p>
    <p><strong>Synopsis:</strong> ${s.syn}</p>
    <h2>Chapter 1: ${s.chap}</h2>
    <p class="text">${s.body}</p>
    <div class="actions">
      <button class="btn ${likes.includes(s.id) ? "liked" : ""}" id="storyLike">${likeLabel(s.id)}</button>
      <a class="btn" href="library.html">← Back to Library</a>
      ${s.id < stories.length ? `<a class="btn" href="story.html?id=${s.id + 1}">Next Story →</a>` : ""}
    </div>`;
  document.getElementById("storyLike").addEventListener("click", e => toggleLike(s.id, e.target));
}
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = h.scrollHeight - h.clientHeight > 0 ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 : 0;
  document.getElementById("progress").style.width = pct + "%";
});
