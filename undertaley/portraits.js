const FACE_DIR = "portraits";
const PRT_NAME = typeof FACE_NAME !== "undefined" ? FACE_NAME : {};

function speakerFace(names) { return 0; }

function faceEvents(text, f0, key = "") {
  const id = typeof FACE_PRT !== "undefined" ? FACE_PRT[key] : undefined;
  return id === undefined ? [] : [[id, 0]];
}

function faceTile(id, e, small) {
  const cls = "face" + (small ? " small" : "");
  const nm = PRT_NAME[id];
  const c = [`${FACE_DIR}/prt_${id}.png`, `${FACE_DIR}/${id}.png`];
  if (nm) c.push(`${FACE_DIR}/${nm}_0.png`, `${FACE_DIR}/${nm}.png`);
  const lab = nm ? nm.replace(/^spr_(portrait_)?/, "") : "prt " + id;
  return `<img class="${cls}" src="${c[0]}" data-c='${JSON.stringify(c)}' data-i="0" data-n="${lab}" alt="prt ${id}" title="prt[${id}]${nm ? " · " + nm : ""}">`;
}

function faceImgError(ev) {
  const img = ev.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.c) return;
  const c = JSON.parse(img.dataset.c), i = +img.dataset.i + 1;
  if (i < c.length) { img.dataset.i = i; img.src = c[i]; return; }
  const s = document.createElement("span");
  s.className = img.className + " face-miss";
  s.title = img.title + " · 이미지 파일 없음";
  s.textContent = img.dataset.n;
  img.replaceWith(s);
}

function facesHTML(ev) {
  return `<div class="faces">${ev.map(([f, e], i) => faceTile(f, e, i > 0)).join("")}</div>`;
}
