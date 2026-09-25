const NOWGG = "https://nowgg.fun/";
const CREATOR_CODE = "CRAZY-ADMIN-2026";

const demoUser = {
  email: "demo@crazy.com",
  password: "123456",
  name: "Demo Creator",
  handle: "@demo",
  bio: "Soy el usuario demo de Crazy Studios.",
  points: 250,
  ai: 20,
  opened: 0,
  favorites: [],
  played: [],
  purchases: [],
  verifiedCreator: true,
  themeUnlocked: false,
  badgeUnlocked: false
};

const resources = [
  {id:"minecraft", name:"Minecraft", type:"game", category:"Aventura · Sandbox", description:"Construye mundos infinitos.", rating:"4.9", logo:"https://cdn.simpleicons.org/minecraft/62b47a", official:"https://www.minecraft.net/"},
  {id:"roblox", name:"Roblox", type:"game", category:"Multijugador · Creación", description:"Experiencias creadas por la comunidad.", rating:"4.8", logo:"https://cdn.simpleicons.org/roblox/ffffff", official:"https://www.roblox.com/"},
  {id:"fortnite", name:"Fortnite", type:"game", category:"Battle Royale", description:"Batallas, construcciones y emoción.", rating:"4.8", logo:"https://cdn.simpleicons.org/fortnite/ffffff", official:"https://www.fortnite.com/"},
  {id:"among-us", name:"Among Us", type:"game", category:"Social · Casual", description:"Descubre quién es el impostor.", rating:"4.7", logo:"https://cdn.simpleicons.org/amongus/ffffff", official:"https://www.innersloth.com/games/among-us/"},
  {id:"brawl-stars", name:"Brawl Stars", type:"game", category:"Acción · Casual", description:"Batallas rápidas con personajes únicos.", rating:"4.7", logo:"https://cdn.simpleicons.org/brawlstars/ffffff", official:"https://supercell.com/en/games/brawlstars/"},
  {id:"pubg", name:"PUBG Mobile", type:"game", category:"Shooter", description:"Combate para sobrevivir en campo abierto.", rating:"4.7", logo:"https://cdn.simpleicons.org/pubg/ffffff", official:"https://www.pubgmobile.com/"},
  {id:"free-fire", name:"Free Fire", type:"game", category:"Shooter · Battle Royale", description:"Combate en partidas intensas y rápidas.", rating:"4.7", logo:"https://cdn.simpleicons.org/freefire/ff6a00", official:"https://ff.garena.com/"},
  {id:"tetris", name:"Tetris", type:"classic", category:"Puzzle clásico", description:"Encaja piezas y supera tus récords.", rating:"4.9", logo:"https://cdn.simpleicons.org/tetris/ffffff", official:"https://tetris.com/"},
  {id:"pacman", name:"Pac-Man", type:"classic", category:"Arcade clásico", description:"Recorre el laberinto y evita a los fantasmas.", rating:"4.8", logo:"https://cdn.simpleicons.org/pacman/ffd166", official:"https://www.pacman.com/"},
  {id:"chess", name:"Ajedrez", type:"classic", category:"Estrategia clásica", description:"Piensa varias jugadas por delante.", rating:"4.9", logo:"https://cdn.simpleicons.org/chessdotcom/ffffff", official:"https://www.chess.com/"},
  {id:"spotify", name:"Spotify", type:"app", category:"Música", description:"Escucha música, podcasts y playlists.", rating:"4.8", logo:"https://cdn.simpleicons.org/spotify/1ed760", official:"https://www.spotify.com/"},
  {id:"discord", name:"Discord", type:"app", category:"Comunicación", description:"Habla con amigos y comunidades.", rating:"4.7", logo:"https://cdn.simpleicons.org/discord/5865f2", official:"https://discord.com/"},
  {id:"youtube", name:"YouTube", type:"app", category:"Entretenimiento", description:"Canales, vídeos y directos.", rating:"4.8", logo:"https://cdn.simpleicons.org/youtube/ff0000", official:"https://www.youtube.com/"},
  {id:"google", name:"Google", type:"app", category:"Búsqueda", description:"Busca información rápida y útil.", rating:"4.8", logo:"https://cdn.simpleicons.org/google/4285f4", official:"https://www.google.com/"},
  {id:"gmail", name:"Gmail", type:"app", category:"Correo", description:"Revisa tu correo electrónico.", rating:"4.7", logo:"https://cdn.simpleicons.org/gmail/ea4335", official:"https://mail.google.com/"},
  {id:"telegram", name:"Telegram", type:"app", category:"Mensajería", description:"Chats rápidos y canales públicos.", rating:"4.7", logo:"https://cdn.simpleicons.org/telegram/26a5e4", official:"https://telegram.org/"},
  {id:"twitch", name:"Twitch", type:"app", category:"Streaming", description:"Directos de juegos y creadores.", rating:"4.6", logo:"https://cdn.simpleicons.org/twitch/9146ff", official:"https://www.twitch.tv/"},
  {id:"canva", name:"Canva", type:"app", category:"Diseño", description:"Diseña presentaciones y contenidos.", rating:"4.8", logo:"https://cdn.simpleicons.org/canva/00c4cc", official:"https://www.canva.com/"},
  {id:"notion", name:"Notion", type:"app", category:"Productividad", description:"Notas, tareas y organización.", rating:"4.8", logo:"https://cdn.simpleicons.org/notion/000000", official:"https://www.notion.so/"},
  {id:"github", name:"GitHub", type:"app", category:"Desarrollo", description:"Repositorios y colaboración técnica.", rating:"4.8", logo:"https://cdn.simpleicons.org/github/ffffff", official:"https://github.com/"}
];

const videos = [
  {id:"v1", creator:"Astra", handle:"@astra", likes:12000, comments:310, caption:"Graba mi momento de victoria en Fortnite", badge:"🔥 Trend"},
  {id:"v2", creator:"Mika", handle:"@mika", likes:8400, comments:204, caption:"Mi setup gamer y la mejor configuración", badge:"⚙️ Setup"},
  {id:"v3", creator:"Nex", handle:"@nex", likes:14500, comments:460, caption:"Mini desafío de velocidad en Minecraft", badge:"⚡ Rápido"}
];

const liveRooms = [
  {title:"LIVE: PUBG", host:"Milo", viewers:1240},
  {title:"LIVE: Minecraft Build", host:"Astra", viewers:890},
  {title:"LIVE: Fortnite", host:"Nex", viewers:1530}
];

const shopItems = [
  {id:"ai10", name:"10 mensajes IA", description:"Añade 10 mensajes a tu IA.", cost:10, action:"ai"},
  {id:"ai30", name:"30 mensajes IA", description:"Añade 30 mensajes a tu IA.", cost:25, action:"ai"},
  {id:"theme", name:"Tema neón", description:"Activa un color especial.", cost:50, action:"theme"},
  {id:"badge", name:"Insignia gamer", description:"Desbloquea un sello especial.", cost:80, action:"badge"}
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let authMode = "register";
let activeFilter = "all";
let searchText = "";
let currentLanguage = localStorage.getItem("crazy_lang") || "es";

function getUsers() {
  const users = JSON.parse(localStorage.getItem("crazy_users") || "{}");
  if (!users["demo@crazy.com"]) {
    users["demo@crazy.com"] = { ...demoUser };
    localStorage.setItem("crazy_users", JSON.stringify(users));
  }
  return users;
}

function saveUsers(users) {
  localStorage.setItem("crazy_users", JSON.stringify(users));
}

function getCurrentUser() {
  const email = localStorage.getItem("crazy_session");
  if (!email) return null;
  const users = getUsers();
  return users[email] || null;
}

function saveCurrentUser(userData) {
  const users = getUsers();
  if (!userData?.email) return;
  users[userData.email] = userData;
  saveUsers(users);
}

function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.left = "50%";
  toast.style.bottom = "20px";
  toast.style.transform = "translateX(-50%)";
  toast.style.zIndex = "1000";
  toast.style.padding = "11px 16px";
  toast.style.borderRadius = "10px";
  toast.style.background = "#eafef4";
  toast.style.color = "#123b31";
  toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

function updateStats() {
  const user = getCurrentUser();
  if (!user) return;

  $("#pointsValue").textContent = user.points || 0;
  $("#aiValue").textContent = user.ai || 10;
  $("#openedValue").textContent = user.opened || 0;
  $("#profileName").textContent = `👤 ${user.name}`;
  $("#profileNameBox").textContent = user.name;
  $("#profileAvatar").textContent = (user.name || "U").charAt(0).toUpperCase();
  $("#profileBio").textContent = user.bio || "Sin biografía";
  $("#profileNameInput").value = user.name || "";
  $("#profileHandleInput").value = user.handle || "@" + (user.name || "user").toLowerCase().replace(/\s+/g, "");
  $("#profileBioInput").value = user.bio || "";
}

function renderCatalog(listOverride = null) {
  const user = getCurrentUser();
  if (!user) return;

  const list = listOverride || resources.filter((item) => {
    const matchesType = activeFilter === "all" || item.type === activeFilter;
    const haystack = `${item.name} ${item.category} ${item.description}`.toLowerCase();
    const matchesSearch = haystack.includes(searchText.toLowerCase());
    return matchesType && matchesSearch;
  });

  const catalog = $("#catalog");
  catalog.innerHTML = "";
  $("#empty").style.display = list.length ? "none" : "block";
  $("#resultText").textContent = `${list.length} recursos disponibles`;

  list.forEach((item) => {
    const isFav = (user.favorites || []).includes(item.id);

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="cover">
        <span class="badge">${item.type === "game" ? "Juego" : item.type === "app" ? "App" : "Clásico"}</span>
        <img src="${item.logo}" alt="${item.name}" />
      </div>
      <div class="card-body">
        <h3>${item.name}</h3>
        <div class="description">${item.description}</div>
        <div class="meta">
          <span>${item.category}</span>
          <span class="rating">★ ${item.rating}</span>
        </div>
        <div class="card-actions">
          <button class="btn primary open-btn">Abrir</button>
          <button class="btn fav-btn">${isFav ? "★" : "☆"}</button>
          <button class="btn info-btn">Info</button>
        </div>
      </div>
    `;

    card.querySelector(".open-btn").addEventListener("click", () => openResource(item));
    card.querySelector(".info-btn").addEventListener("click", () => openResource(item, true));
    card.querySelector(".fav-btn").addEventListener("click", () => {
      const arr = user.favorites || [];
      if (arr.includes(item.id)) {
        user.favorites = arr.filter((id) => id !== item.id);
      } else {
        user.favorites = [...arr, item.id];
      }
      saveCurrentUser(user);
      renderCatalog();
      updateStats();
    });

    catalog.appendChild(card);
  });
}

function renderFeed() {
  const list = $("#feedList");
  if (!list) return;
  list.innerHTML = "";

  videos.forEach((video) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <div class="video-top">
        <div class="user-mini">
          <div class="avatar">${video.creator.charAt(0).toUpperCase()}</div>
          <div>
            <strong>${video.creator}</strong><br>
            <span class="small muted">${video.handle}</span>
          </div>
        </div>
        <button class="chip">${video.badge}</button>
      </div>

      <div class="video-media">
        <div class="play">▶</div>
      </div>

      <div class="video-actions">
        <div class="left">
          <button class="chip">♥ ${video.likes}</button>
          <button class="chip">💬 ${video.comments}</button>
        </div>
        <button class="btn primary">Seguir</button>
      </div>

      <div style="padding:0 16px 16px 16px;">
        <div class="muted">${video.caption}</div>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderLives() {
  const list = $("#liveList");
  if (!list) return;
  list.innerHTML = "";
  liveRooms.forEach((room) => {
    const item = document.createElement("div");
    item.className = "live-card";
    item.innerHTML = `
      <div class="live-header">
        <div class="live-badge">LIVE</div>
        <div style="font-size:52px;">🎮</div>
      </div>
      <div class="live-body">
        <strong>${room.title}</strong><br>
        <div class="small muted">Host: ${room.host}</div>
        <div class="small muted">${room.viewers} espectadores</div>
        <button class="btn primary" style="margin-top:12px;">Entrar</button>
      </div>
    `;
    item.querySelector("button").addEventListener("click", () => showToast("Entrando a la sala: " + room.title));
    list.appendChild(item);
  });
}

function renderShop() {
  const grid = $("#shopGrid");
  if (!grid) return;
  grid.innerHTML = "";

  shopItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "shop-item";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="price">🪙 ${item.cost}</span>
      <button class="btn primary buy-item">Comprar</button>
    `;

    card.querySelector(".buy-item").addEventListener("click", () => {
      const user = getCurrentUser();
      if (!user) return;
      if ((user.points || 0) < item.cost) {
        showToast("No tienes suficientes puntos");
        return;
      }

      user.points = (user.points || 0) - item.cost;
      if (item.action === "ai") user.ai = (user.ai || 10) + (item.id.includes("30") ? 30 : 10);
      if (item.action === "theme") user.themeUnlocked = true;
      if (item.action === "badge") user.badgeUnlocked = true;
      if (!user.purchases) user.purchases = [];
      user.purchases.push(item.id);

      saveCurrentUser(user);
      updateStats();
      renderShop();
      showToast("Compra realizada");
    });

    grid.appendChild(card);
  });
}

function openResource(item, onlyInfo = false) {
  const user = getCurrentUser();
  if (!user) return;

  $("#playerTitle").textContent = item.name;
  $("#officialBtn").onclick = () => window.open(item.official, "_blank", "noopener,noreferrer");

  if (onlyInfo) {
    $("#playerContent").innerHTML = `
      <div style="padding:28px;text-align:left;">
        <h3>${item.name}</h3>
        <p class="notice">${item.description}</p>
        <p class="notice"><strong>Categoría:</strong> ${item.category}</p>
        <p class="notice"><strong>Valoración:</strong> ★ ${item.rating}</p>
      </div>
    `;
  } else {
    $("#playerContent").innerHTML = `<iframe src="${NOWGG}" title="${item.name}" loading="lazy"></iframe>`;

    if (!(user.played || []).includes(item.id)) {
      user.played = [...(user.played || []), item.id];
      user.points = (user.points || 0) + 5;
      user.opened = (user.opened || 0) + 1;
      saveCurrentUser(user);
      updateStats();
      showToast("+5 puntos por abrir este recurso");
    }
  }

  $("#playerModal").classList.add("open");
}

function setFilter(value) {
  activeFilter = value;
  $$(".filter").forEach((btn) => btn.classList.toggle("active", btn.dataset.filter === value));
  renderCatalog();
}

function showScreen(id) {
  const screens = ["catalogSection","feedSection","profileSection","creatorSection"];
  screens.forEach((sectionId) => {
    const el = $("#" + sectionId);
    if (el) el.classList.toggle("hidden", sectionId !== id);
  });
}

function saveProfile() {
  const user = getCurrentUser();
  if (!user) return;

  user.name = $("#profileNameInput").value.trim() || user.name;
  user.handle = $("#profileHandleInput").value.trim() || user.handle;
  user.bio = $("#profileBioInput").value.trim() || user.bio;

  saveCurrentUser(user);
  updateStats();
  showToast("Perfil guardado");
}

function toggleAuthMode() {
  authMode = authMode === "register" ? "login" : "register";
  const isRegister = authMode === "register";
  $("#displayName").style.display = isRegister ? "block" : "none";
  $("#authSubmitBtn").textContent = isRegister ? "Crear cuenta" : "Iniciar sesión";
  $("#authSwitch").textContent = isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Crear cuenta";
}

$("#authSwitch").addEventListener("click", toggleAuthMode);

$("#authForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("#email").value.trim().toLowerCase();
  const password = $("#password").value.trim();
  const displayName = $("#displayName").value.trim();

  if (!email || !password) {
    $("#authError").textContent = "Completa todos los campos.";
    return;
  }

  const users = getUsers();

  if (authMode === "register") {
    if (users[email]) {
      $("#authError").textContent = "Ese correo ya está registrado.";
      return;
    }

    const newUser = {
      email,
      password,
      name: displayName || "Player",
      handle: "@player",
      bio: "Nuevo en Crazy Studios",
      points: 0,
      ai: 10,
      opened: 0,
      favorites: [],
      played: [],
      purchases: [],
      verifiedCreator: false,
      themeUnlocked: false,
      badgeUnlocked: false
    };
    users[email] = newUser;
    saveUsers(users);
    localStorage.setItem("crazy_session", email);
    location.reload();
  } else {
    if (!users[email] || users[email].password !== password) {
      $("#authError").textContent = "Correo o contraseña incorrectos.";
      return;
    }
    localStorage.setItem("crazy_session", email);
    location.reload();
  }
});

$("#logoutButton").addEventListener("click", () => {
  localStorage.removeItem("crazy_session");
  location.reload();
});

$("#searchInput").addEventListener("input", (e) => {
  searchText = e.target.value.trim();
  renderCatalog();
});

$$(".filter").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

$("#exploreButton").addEventListener("click", () => {
  showScreen("catalogSection");
  document.getElementById("catalogSection").scrollIntoView({ behavior: "smooth" });
});

$("#openNowggButton").addEventListener("click", () => {
  $("#playerTitle").textContent = "nowgg.fun";
  $("#playerContent").innerHTML = `<iframe src="${NOWGG}" title="nowgg.fun"></iframe>`;
  $("#playerModal").classList.add("open");
});

$("#profileButton").addEventListener("click", () => { showScreen("profileSection"); updateStats(); });
$("#creatorButton").addEventListener("click", () => { showScreen("creatorSection"); });

$("#saveProfileButton").addEventListener("click", saveProfile);
$("#editProfileButton").addEventListener("click", () => $("#profileNameInput").focus());

$("#creatorLoginBtn").addEventListener("click", () => {
  const user = getCurrentUser();
  if (!user) return;

  const input = $("#creatorCodeInput").value.trim();
  if (input === CREATOR_CODE) {
    user.verifiedCreator = true;
    saveCurrentUser(user);
    $("#creatorStatus").textContent = "Cuenta verificada correctamente.";
    $("#creatorStatus").style.color = "var(--success)";
  } else {
    $("#creatorStatus").textContent = "Código incorrecto.";
    $("#creatorStatus").style.color = "var(--danger)";
  }
});

$("#sendGiftBtn").addEventListener("click", () => {
  const user = getCurrentUser();
  if (!user) return;

  const amount = Number($("#giftInput").value || 0);
  const msg = $("#giftTextInput").value || "¡Gracias por apoyar!";

  if (amount <= 0 || amount > (user.points || 0)) {
    showToast("No tienes puntos suficientes para regalar.");
    return;
  }

  user.points -= amount;
  saveCurrentUser(user);
  updateStats();
  showToast(`Regalaste ${amount} puntos: "${msg}"`);
});

$("#aiButton").addEventListener("click", () => $("#chatPanel").classList.toggle("open"));
$("#aiTopButton").addEventListener("click", () => { $("#chatPanel").classList.add("open"); $("#chatInput").focus(); });
$("#closeChatBtn").addEventListener("click", () => $("#chatPanel").classList.remove("open"));

function addChatMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  $("#chatLog").appendChild(div);
  $("#chatLog").scrollTop = $("#chatLog").scrollHeight;
}

function aiReply(question) {
  const q = question.toLowerCase();

  if (q.includes("juego")) return "Te recomiendo Minecraft, Fortnite, Roblox, Free Fire, Tetris o Pac-Man.";
  if (q.includes("app") || q.includes("google")) return "Puedes probar Google, YouTube, Discord, Spotify, Telegram, Canva o GitHub.";
  if (q.includes("clásico") || q.includes("clasico")) return "Los mejores clásicos son Tetris, Pac-Man y Ajedrez.";
  if (q.includes("punto")) return "Ganas 5 puntos cada vez que abres un recurso nuevo. También puedes comprar más en la tienda.";
  if (q.includes("live") || q.includes("directo")) return "En la zona Live puedes entrar a salas, ver directos y seguir a creadores.";
  if (q.includes("hola") || q.includes("ayuda")) return "Puedes buscar recursos, usar filtros, abrir el feed y usar la IA.";
  return "Puedo ayudarte con juegos, apps, clásicos, puntos, directos, la tienda, la IA o el creador.";
}

$("#chatForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = $("#chatInput").value.trim();
  if (!text) return;

  const user = getCurrentUser();
  if (!user) return;

  if ((user.ai || 0) <= 0) {
    if ((user.points || 0) >= 10) {
      user.points -= 10;
      user.ai += 10;
      saveCurrentUser(user);
      updateStats();
      showToast("-10 puntos: +10 mensajes IA");
    } else {
      addChatMessage("No tienes mensajes disponibles. Gana puntos o compra más en la tienda.", "bot");
      return;
    }
  }

  user.ai = (user.ai || 0) - 1;
  saveCurrentUser(user);
  updateStats();

  addChatMessage(text, "user");
  $("#chatInput").value = "";

  setTimeout(() => addChatMessage(aiReply(text), "bot"), 220);
});

$("[data-setting]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.setting;
    button.classList.toggle("on");
    const enabled = button.classList.contains("on");

    if (type === "light") {
      document.body.classList.toggle("light", enabled);
      localStorage.setItem("crazy_theme", enabled ? "light" : "dark");
    }
    if (type === "motion") {
      document.body.style.setProperty("--animation-speed", enabled ? "0s" : ".2s");
    }
  });
});

$("#settingsButton").addEventListener("click", () => $("#settingsModal").classList.add("open"));

$(".close[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.close;
    if (target) $("#" + target).classList.remove("open");
  });
});

$(".overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });
});

$("#languageSelect").addEventListener("change", (e) => {
  currentLanguage = e.target.value;
  localStorage.setItem("crazy_lang", currentLanguage);
  showToast("Idioma actualizado");
});

function loadTheme() {
  const theme = localStorage.getItem("crazy_theme");
  if (theme === "light") {
    document.body.classList.add("light");
    $("[data-setting='light']").classList.add("on");
  }
}

function initSession() {
  const session = localStorage.getItem("crazy_session");
  const users = getUsers();

  if (!session || !users[session]) {
    $("#authScreen").classList.remove("hidden");
    $("#app").classList.add("hidden");
    return;
  }

  $("#authScreen").classList.add("hidden");
  $("#app").classList.remove("hidden");
  updateStats();
  renderCatalog();
  renderFeed();
  renderLives();
  renderShop();
  showScreen("catalogSection");
}

loadTheme();
initSession();

if (!localStorage.getItem("crazy_session")) {
  $("#authScreen").classList.remove("hidden");
  $("#app").classList.add("hidden");
}

$("#email").value = "demo@crazy.com";
$("#password").value = "123456";
