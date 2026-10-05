// portraits.js — \F(캐릭터) / \E(표정) 코드를 초상화로 바꿔 주는 매핑
// 출처: obj_face_* 의 Create/Step GML + ExportAssetOrder 에셋 목록 (스프라이트 번호 → 이름)
// 이미지는 portraits/ 폴더에 두면 됩니다. 아래 순서로 파일을 찾습니다.
//   portraits/<스프라이트>_<프레임>.png   (UTMT ExportAllSprites 기본 이름, 예: spr_face_sans_0.png)
//   portraits/<스프라이트>/<프레임>.png
//   portraits/<스프라이트>.png            (프레임 0일 때만)

const FACE_DIR = "portraits";

const FACE_NAME = {
  1: "토리엘", 2: "플라위", 3: "샌즈", 4: "파피루스", 5: "언다인",
  6: "알피스", 7: "아스고어", 8: "메타톤", 9: "아스리엘"
};

// 화자(speakers.js) → \F 번호. \F 코드가 문자열에 없을 때만 쓰는 보조 추정입니다.
const SPK_FACE = {
  "Toriel": 1, "Toriel (call)": 1,
  "Flowey": 2,
  "Sans": 3, "Sans (call)": 3,
  "Papyrus": 4, "Papyrus (call)": 4,
  "Undyne": 5, "Undyne (call)": 5,
  "Alphys": 6, "Alphys (call)": 6,
  "Asgore": 7,
  "Mettaton": 8, "Mettaton (call)": 8,
  "Asriel": 9, "Asriel (call)": 9
};

// \F 번호 → { \E 번호: 스프라이트 이름 }  (null 이면 게임 코드에 분기가 없어 직전 표정이 유지됨)
const FACE_SPR = {
  1: { 0: "spr_face_torielhappytalk", 1: "spr_face_torieltalkside", 2: "spr_face_torieltalk",
       3: "spr_face_torielwhat", 4: "spr_face_torielwhatside", 5: "spr_face_torielrevengetalk",
       6: "spr_face_torielcold", 7: "spr_face_torielmad", 8: "spr_face_torielembarrassed",
       9: "spr_face_toriel_goawayasgore" },
  2: { 0: "spr_floweynice", 1: "spr_floweynicesideum", 2: "spr_floweysassy", 3: "spr_floweypissed",
       4: "spr_floweyevil", 5: "spr_floweygrin",
       6: "spr_floweytoriel", 7: "spr_floweytoriel2", 8: "spr_floweyplain" },   // 6~8 은 room_ruinsexit 에서만
  3: { 0: "spr_face_sans", 1: "spr_face_sanschuckle", 2: "spr_face_sanswink",
       3: "spr_face_sansblink", 4: "spr_face_sansnoeyes" },
  4: { 0: "spr_face_papyrus", 1: "spr_face_papyrusmad", 2: "spr_face_papyruslaugh",
       3: "spr_face_papyrusside", 4: "spr_face_papyrusevil", 5: "spr_face_papyrussweat",
       6: "spr_face_papyrusdejected", 7: "spr_face_papyruswacky", 8: "spr_face_papyruscry",
       9: "spr_face_papyruscool" },
  5: { 0: "spr_face_undyne0", 1: "spr_face_undyne1", 2: "spr_face_undyne2", 3: "spr_face_undyne3",
       4: "spr_face_undyne4", 5: "spr_face_undyne5", 6: "spr_face_undyne6", 7: "spr_face_undyne7",
       8: "spr_face_undyne8", 9: "spr_face_undyne9" },                          // 플래그에 따라 1_3, 2_2, 9_2, 9_3 으로 바뀌는 변형은 생략
  6: { 0: "spr_alphysface_0", 1: "spr_alphysface_1", 2: "spr_alphysface_2", 3: "spr_alphysface_3",
       4: "spr_alphysface_4", 5: "spr_alphysface_5", 6: "spr_alphysface_6", 7: "spr_alphysface_7",
       8: "spr_alphysface_8", 9: "spr_alphysface_9" },                         // flag[430]==0 기준
  7: { 0: "spr_asgore_face0", 1: "spr_asgore_face1", 2: "spr_asgore_face2",
       3: "spr_asgore_face3", 4: "spr_asgore_face4", 5: "spr_asgore_face5" },   // 6 이상은 분기 없음
  9: { 0: "spr_face_asriel0", 1: "spr_face_asriel1", 2: "spr_face_asriel2", 3: "spr_face_asriel3",
       4: "spr_face_asriel4", 5: "spr_face_asriel5", 6: "spr_face_asriel6", 7: "spr_face_asriel7",
       8: "spr_face_asriel8", 9: "spr_face_asriel9" }
};

// 메타톤: 스프라이트 하나에 image_index = \E 번호.
// ※ 스프라이트 이름은 obj_face_mettaton 오브젝트 속성에 있어서 코드로는 확인하지 못했습니다. 추정값이니 맞는지 확인하세요.
const METT_SPRITE = "spr_mettaton_talk";

function faceSprite(f, e) {
  if (f === 8) return { name: METT_SPRITE, frame: e };
  const t = FACE_SPR[f];
  const n = t && t[e];
  return n ? { name: n, frame: 0 } : null;
}

// speakers.js 의 화자 이름 배열 → \F 번호 (후보가 하나로 정해질 때만)
function speakerFace(names) {
  const s = new Set();
  for (const raw of names) {
    const n = raw.replace(/\s+and Frisk$/, "");
    if (SPK_FACE[n]) s.add(SPK_FACE[n]);
  }
  return s.size === 1 ? [...s][0] : 0;
}

// 문자열의 \F / \E 코드를 순서대로 읽어 [[캐릭터, 표정], ...] 로 돌려줌.
// f0 = \F 가 나오기 전에 쓸 기본 캐릭터(화자 추정). \F0 은 얼굴 제거.
// key 인자를 추가로 받도록 수정
function faceEvents(text, f0, key = "") {
  // ★ 추가: 언다인 데이트(obj_adate) 씬은 초상화가 아예 없으므로 빈 배열 반환해서 꺼버림
  if (key.startsWith("obj_adate")) return [];

  const re = /\\([FE])(\d)/g;
  const ev = [];
  let f = f0 || 0, e = 0, m, sawF = false, pushed = false;
  const push = () => {
    if (f <= 0) return;
    const last = ev[ev.length - 1];
    if (!last || last[0] !== f || last[1] !== e) ev.push([f, e]);
    pushed = true;
  };
  
  while ((m = re.exec(text))) {
    if (m[1] === "F") { f = +m[2]; sawF = true; pushed = false; }
    else { e = +m[2]; push(); }
  }
  
  if (sawF && !pushed) push();       // \F 만 있고 \E 가 없으면 표정 0 으로 표시
  if (ev.length === 0 && f0 > 0) push(); // 태그가 없어도 화자 추정값이 있으면 기본 표정 표시
  
  return ev;
}


function faceTile(f, e, small) {
  const cls = "face" + (small ? " small" : "");
  const label = `${FACE_NAME[f] || "F" + f} E${e}`;
  const r = faceSprite(f, e);
  if (!r) return `<span class="${cls} face-none" title="${label} · 게임 코드에 분기 없음(직전 표정 유지)">${label}</span>`;
  const c = [`${FACE_DIR}/${r.name}_${r.frame}.png`, `${FACE_DIR}/${r.name}/${r.frame}.png`];
  if (r.frame === 0) c.push(`${FACE_DIR}/${r.name}.png`);
  return `<img class="${cls}" src="${c[0]}" data-c='${JSON.stringify(c)}' data-i="0" data-n="${r.name}" alt="${label}" title="${label} · ${r.name}">`;
}

// 이미지가 없으면 다음 후보 경로를 시도하고, 모두 실패하면 스프라이트 이름 표시
function faceImgError(ev) {
  const img = ev.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.c) return;
  const c = JSON.parse(img.dataset.c), i = +img.dataset.i + 1;
  if (i < c.length) { img.dataset.i = i; img.src = c[i]; return; }
  const s = document.createElement("span");
  s.className = img.className + " face-miss";
  s.title = img.title + " · 이미지 파일 없음";
  s.textContent = img.dataset.n.replace(/^spr_/, "");
  img.replaceWith(s);
}

function facesHTML(ev) {
  return `<div class="faces">${ev.map(([f, e], i) => faceTile(f, e, i > 0)).join("")}</div>`;
}
