// These messages are so wide that they bring the maximum textbox width past 400px.
// But they already have their own hard wraps, so the autosoftwrapping doesn't
// kick in.
// We force the matter, transforming e.g.
//
//   A lodestone token inscribed with the record of
//   a legend athlete. Enemy bullets give a bit
//   more TP.
//
//   A lodestone token inscribed
//   with the record of
//   a legend athlete. Enemy
//   bullets give a bit
//   more TP.
//
// We actually wrap these messages more narrowly than normal because that makes
// them less jagged.
export const FORCE_WRAP = new Set([
    "scr_armorinfo_slash_scr_armorinfo_gml_539_0",
    "scr_armorinfo_slash_scr_armorinfo_gml_565_0",
    "scr_armorinfo_slash_scr_armorinfo_gml_568_0",
    "scr_text_slash_scr_text_gml_10537_0",
    "scr_weaponinfo_slash_scr_weaponinfo_gml_607_0",
    "scr_armorinfo_slash_scr_armorinfo_gml_705_0",
    "scr_armorinfo_slash_scr_armorinfo_gml_768_0",
    "scr_itemdesc_single_slash_scr_itemdesc_single_gml_9_0",
    "scr_itemdesc_single_slash_scr_itemdesc_single_gml_151_0",
    "scr_text_slash_scr_text_gml_11457_0",
    "scr_weaponinfo_slash_scr_weaponinfo_gml_630_0",
    "scr_weaponinfo_slash_scr_weaponinfo_gml_653_0",
    "scr_weaponinfo_slash_scr_weaponinfo_gml_676_0",
    "scr_weaponinfo_slash_scr_weaponinfo_gml_699_0",
    // This one is funnier not to wrap
    // "scr_keyiteminfo_slash_scr_keyiteminfo_gml_52_0",
    "obj_church_entrance_festival_slash_Step_0_gml_1129_0",
    "obj_dw_garden_hopschef_slash_Step_0_gml_174_0",
    "obj_dw_garden_mushrooms_slash_Other_10_gml_91_0",
    "obj_dw_garden_newdash_slash_Create_0_gml_126_0",
    "obj_dw_garden_enemyrush_slash_Step_0_gml_1746_0",
    "scr_itemdesc_single_slash_scr_itemdesc_single_gml_172_0",
    "scr_itemdesc_single_slash_scr_itemdesc_single_gml_178_0",
    // Not overly wide but nicer if we space this the same as 218_0
    "scr_keyiteminfo_slash_scr_keyiteminfo_gml_213_0",
    "scr_keyiteminfo_slash_scr_keyiteminfo_gml_218_0",
    "scr_keyiteminfo_slash_scr_keyiteminfo_gml_234_0",
    "scr_text_slash_scr_text_gml_7888_0",
]);

export function should_hardwrap(chap, msgid) {
    if ([
        "scr_recruit_info_slash_scr_recruit_info_gml_434_0_b",
        "scr_recruit_info_slash_scr_recruit_info_gml_449_0",
        "scr_recruit_info_slash_scr_recruit_info_gml_465_0",
        "scr_recruit_info_slash_scr_recruit_info_gml_481_0",
        "scr_recruit_info_slash_scr_recruit_info_gml_512_0",
        "scr_recruit_info_slash_scr_recruit_info_gml_528_0",
        "scr_recruit_info_slash_scr_recruit_info_gml_544_0",
        "obj_shop1_slash_Draw_0_gml_414_0",
        "obj_shop2_slash_Draw_0_gml_372_0",
        "obj_poppup_enemy_slash_Step_0_gml_494_0",
        "obj_shop_ch2_spamton_slash_Draw_0_gml_719_0",
        "obj_shop_ch2_spamton_slash_Draw_0_gml_720_0",
        "scr_text_slash_scr_text_gml_10220_0",
        "obj_dw_church_waterfalltearoom_slash_Step_0_gml_920_0",
        "obj_shop1_slash_Draw_0_gml_479_0_b",
        // This one has a 2D layout that relies on hardwrapping.
        "obj_ch3_PGS01F_slash_Step_0_gml_325_0",
        "obj_shinobeetle_enemy_slash_Step_0_gml_257_0",
        "obj_sheary_enemy_slash_Step_0_gml_164_0",
        "obj_shop_ch5_slash_Create_0_gml_217_0",
        "obj_shop_ch5_slash_Create_0_gml_313_0",
        "obj_shop_ch5_slash_Create_0_gml_320_0",
        "obj_shop_ch5_slash_Create_0_gml_322_0",
    ].includes(msgid)) {
        return true;
    }

    // translation key collision
    if (chap >= 5 && [
        "obj_shop1_slash_Draw_0_gml_447_0",
        "obj_shop1_slash_Draw_0_gml_457_0",
        "obj_shop1_slash_Draw_0_gml_467_0_b",
        "obj_shop1_slash_Draw_0_gml_468_0_b",
        "obj_shop1_slash_Draw_0_gml_482_0",
        "obj_shop1_slash_Draw_0_gml_483_0",
        "obj_shop1_slash_Draw_0_gml_485_0",
        "obj_shop1_slash_Draw_0_gml_486_0",
        "obj_shop1_slash_Draw_0_gml_490_0",
        "obj_shop1_slash_Draw_0_gml_492_0",
        "obj_shop1_slash_Draw_0_gml_498_0_b",
        "obj_shop1_slash_Draw_0_gml_511_0_b",
    ].includes(msgid)) {
        return true;
    }

    return false;
}

export const FUNNYTEXT_DIMS = {
    "spr_dw_tv_time_funnytext": {width: 478, height: 120, origin_x: 239, origin_y: 60},
    "spr_funnytext_alligator": {width: 386, height: 62, origin_x: 186, origin_y: 30},
    "spr_funnytext_amazing_01": {width: 409, height: 123, origin_x: 204, origin_y: 61},
    "spr_funnytext_big": {width: 97, height: 58, origin_x: 48, origin_y: 29},
    "spr_funnytext_board": {width: 133, height: 64, origin_x: 71, origin_y: 46},
    "spr_funnytext_bonus_round": {width: 268, height: 69, origin_x: 134, origin_y: 34},
    "spr_funnytext_breaking_news": {width: 305, height: 71, origin_x: 153, origin_y: 55},
    "spr_funnytext_brother": {width: 182, height: 47, origin_x: 91, origin_y: 23},
    "spr_funnytext_challenge": {width: 261, height: 59, origin_x: 130, origin_y: 39},
    "spr_funnytext_city_feet": {width: 313, height: 61, origin_x: 156, origin_y: 30},
    "spr_funnytext_coffee": {width: 334, height: 28, origin_x: 154, origin_y: 10},
    "spr_funnytext_dark_fountain": {width: 440, height: 81, origin_x: 220, origin_y: 40},
    "spr_funnytext_flames": {width: 171, height: 45, origin_x: 85, origin_y: 22},
    "spr_funnytext_free": {width: 37, height: 28, origin_x: 18, origin_y: 14},
    "spr_funnytext_fun_loop": {width: 104, height: 55, origin_x: 52, origin_y: 27},
    "spr_funnytext_fun_o_meter": {width: 248, height: 52, origin_x: 124, origin_y: 26},
    "spr_funnytext_game": {width: 121, height: 51, origin_x: 60, origin_y: 25},
    "spr_funnytext_game_over": {width: 370, height: 76, origin_x: 186, origin_y: 50},
    "spr_funnytext_gentle": {width: 344, height: 62, origin_x: 170, origin_y: 30},
    "spr_funnytext_grand_prize": {width: 296, height: 55, origin_x: 148, origin_y: 27},
    "spr_funnytext_green_room": {width: 311, height: 66, origin_x: 158, origin_y: 34},
    "spr_funnytext_hall_of_fame": {width: 238, height: 52, origin_x: 119, origin_y: 36},
    "spr_funnytext_know_tv": {width: 336, height: 28, origin_x: 158, origin_y: 10},
    "spr_funnytext_love": {width: 124, height: 58, origin_x: 62, origin_y: 29},
    "spr_funnytext_lovely": {width: 143, height: 55, origin_x: 71, origin_y: 27},
    "spr_funnytext_lovers": {width: 151, height: 40, origin_x: 75, origin_y: 20},
    "spr_funnytext_names": {width: 172, height: 42, origin_x: 86, origin_y: 21},
    "spr_funnytext_over": {width: 250, height: 104, origin_x: 127, origin_y: 53},
    "spr_funnytext_over_small": {width: 111, height: 55, origin_x: 55, origin_y: 27},
    "spr_funnytext_physical_challenge": {width: 391, height: 69, origin_x: 195, origin_y: 34},
    "spr_funnytext_physical_challenges": {width: 391, height: 69, origin_x: 195, origin_y: 34},
    "spr_funnytext_prizes": {width: 168, height: 62, origin_x: 84, origin_y: 31},
    "spr_funnytext_quizzes": {width: 159, height: 52, origin_x: 79, origin_y: 26},
    "spr_funnytext_relax": {width: 259, height: 74, origin_x: 128, origin_y: 32},
    // This one's weird. The letters print and shake individually.
    // https://youtu.be/jiov0_liDd4?t=83
    // These are the dimensions extracted using UTMT:
    // "spr_funnytext_resumes": {width: 124, height: 27, origin_x: 0, origin_y: 0},
    // But centering the origin looks a lot closer to the real thing:
    "spr_funnytext_resumes": {width: 124, height: 27, origin_x: 62, origin_y: 13},
    // (origin_y=16 looks still closer but maybe there's a general bias.)
    "spr_funnytext_rock_concert": {width: 301, height: 62, origin_x: 150, origin_y: 31},
    "spr_funnytext_round_1": {width: 188, height: 69, origin_x: 94, origin_y: 34},
    "spr_funnytext_round": {width: 154, height: 69, origin_x: 77, origin_y: 34},
    "spr_funnytext_rounds": {width: 168, height: 69, origin_x: 84, origin_y: 34},
    "spr_funnytext_special": {width: 110, height: 69, origin_x: 55, origin_y: 34},
    "spr_funnytext_star": {width: 147, height: 60, origin_x: 73, origin_y: 40},
    "spr_funnytext_stars": {width: 173, height: 60, origin_x: 86, origin_y: 40},
    "spr_funnytext_stop": {width: 87, height: 69, origin_x: 44, origin_y: 34},
    "spr_funnytext_susiezilla": {width: 171, height: 38, origin_x: 86, origin_y: 19},
    "spr_funnytext_tan": {width: 458, height: 28, origin_x: 220, origin_y: 12},
    "spr_funnytext_tears": {width: 196, height: 42, origin_x: 98, origin_y: 31},
    "spr_funnytext_toriel": {width: 159, height: 55, origin_x: 79, origin_y: 37},
    "spr_funnytext_tv_time": {width: 192, height: 68, origin_x: 91, origin_y: 34},
    "spr_funnytext_win_big": {width: 261, height: 125, origin_x: 130, origin_y: 62},
    "spr_funnytext_win": {width: 108, height: 40, origin_x: 54, origin_y: 20},
    "spr_funnytext_word": {width: 136, height: 51, origin_x: 68, origin_y: 25},
    "spr_ja_funnytext_alligator": {width: 412, height: 66, origin_x: 206, origin_y: 33},
    "spr_ja_funnytext_amazing_01": {width: 499, height: 123, origin_x: 249, origin_y: 61},
    "spr_ja_funnytext_board": {width: 133, height: 64, origin_x: 66, origin_y: 42},
    "spr_ja_funnytext_brother": {width: 159, height: 47, origin_x: 79, origin_y: 23},
    "spr_ja_funnytext_challenge": {width: 192, height: 59, origin_x: 96, origin_y: 49},
    "spr_ja_funnytext_city_feet": {width: 362, height: 66, origin_x: 181, origin_y: 33},
    "spr_ja_funnytext_coffee": {width: 305, height: 64, origin_x: 152, origin_y: 32},
    "spr_ja_funnytext_daisuki": {width: 126, height: 58, origin_x: 63, origin_y: 29},
    "spr_ja_funnytext_dark_fountain": {width: 181, height: 81, origin_x: 90, origin_y: 40},
    "spr_ja_funnytext_flames": {width: 42, height: 45, origin_x: 21, origin_y: 22},
    "spr_ja_funnytext_fun_loop": {width: 302, height: 53, origin_x: 151, origin_y: 26},
    "spr_ja_funnytext_fun_o_meter": {width: 206, height: 52, origin_x: 103, origin_y: 26},
    "spr_ja_funnytext_gentle": {width: 344, height: 66, origin_x: 172, origin_y: 33},
    "spr_ja_funnytext_grand_prize": {width: 154, height: 55, origin_x: 77, origin_y: 32},
    "spr_ja_funnytext_green_room": {width: 113, height: 66, origin_x: 56, origin_y: 33},
    "spr_ja_funnytext_hall_of_fame": {width: 262, height: 65, origin_x: 131, origin_y: 46},
    "spr_ja_funnytext_know_tv": {width: 352, height: 68, origin_x: 176, origin_y: 34},
    "spr_ja_funnytext_love": {width: 55, height: 58, origin_x: 27, origin_y: 29},
    "spr_ja_funnytext_lovely": {width: 174, height: 55, origin_x: 87, origin_y: 27},
    "spr_ja_funnytext_lovers": {width: 151, height: 40, origin_x: 75, origin_y: 20},
    "spr_ja_funnytext_names": {width: 84, height: 42, origin_x: 42, origin_y: 21},
    "spr_ja_funnytext_physical_challenge": {width: 305, height: 66, origin_x: 152, origin_y: 33},
    "spr_ja_funnytext_prizes": {width: 100, height: 62, origin_x: 50, origin_y: 31},
    "spr_ja_funnytext_quizzes": {width: 107, height: 52, origin_x: 53, origin_y: 26},
    "spr_ja_funnytext_relax": {width: 259, height: 74, origin_x: 129, origin_y: 37},
    "spr_ja_funnytext_rock_concert": {width: 225, height: 53, origin_x: 112, origin_y: 30},
    "spr_ja_funnytext_star": {width: 148, height: 60, origin_x: 74, origin_y: 40},
    "spr_ja_funnytext_stars": {width: 119, height: 60, origin_x: 59, origin_y: 50},
    "spr_ja_funnytext_susiezilla": {width: 136, height: 52, origin_x: 68, origin_y: 26},
    "spr_ja_funnytext_tan": {width: 303, height: 65, origin_x: 151, origin_y: 32},
    "spr_ja_funnytext_tears": {width: 112, height: 42, origin_x: 56, origin_y: 31},
    "spr_ja_funnytext_toriel": {width: 276, height: 55, origin_x: 138, origin_y: 37},
    "spr_ja_funnytext_win_big": {width: 437, height: 139, origin_x: 218, origin_y: 78},
    "spr_ja_funnytext_win": {width: 167, height: 40, origin_x: 83, origin_y: 14},
    "spr_ja_funnytext_word": {width: 232, height: 38, origin_x: 116, origin_y: 19},
    "spr_funnytext_dump_her": {width: 364, height: 69, origin_x: 182, origin_y: 34},
    "spr_funnytext_dump_her_ja": {width: 165, height: 69, origin_x: 82, origin_y: 44},
    "spr_funnytext_ass": {width: 340, height: 62, origin_x: 170, origin_y: 31},
    "spr_ja_funnytext_ass": {width: 364, height: 110, origin_x: 182, origin_y: 65},
};

export const FUNNYTEXT_WHITE = new Set([
    "spr_funnytext_alligator",
    "spr_funnytext_brother",
    "spr_funnytext_city_feet",
    "spr_funnytext_coffee",
    "spr_funnytext_gentle",
    "spr_funnytext_know_tv",
    "spr_funnytext_relax",
    "spr_funnytext_tan",
    "spr_ja_funnytext_alligator",
    "spr_ja_funnytext_brother",
    "spr_ja_funnytext_city_feet",
    "spr_ja_funnytext_coffee",
    "spr_ja_funnytext_gentle",
    "spr_ja_funnytext_know_tv",
    "spr_ja_funnytext_relax",
    "spr_ja_funnytext_tan",
    "spr_funnytext_ass",
    "spr_ja_funnytext_ass",
]);

export const ALT_TEXTS = {
    "spr_dw_tv_time_funnytext": "IT'S!! TV!! TiME!!!",
    "spr_funnytext_alligator": "(Guess your mother's never been\na fan of alligators in bikinis.)",
    "spr_funnytext_amazing_01": "AMAZING",
    "spr_funnytext_big": "BIG",
    "spr_funnytext_board": "BOARD",
    "spr_funnytext_bonus_round": "BONUS ROUND",
    "spr_funnytext_breaking_news": "BREAKING NEWS",
    "spr_funnytext_brother": "BROTHER",
    "spr_funnytext_challenge": "CHALLENGE",
    "spr_funnytext_city_feet": "(But don't ask why the cars\ndon't have feet!)",
    "spr_funnytext_coffee": "(And get me a cup of coffee.)",
    "spr_funnytext_dark_fountain": "DARK FOUNTAIN",
    "spr_funnytext_flames": "FLAMES",
    "spr_funnytext_free": "Free!",
    "spr_funnytext_fun_loop": "FUN",
    "spr_funnytext_fun_o_meter": "FUN-O-METER",
    "spr_funnytext_game": "GAME",
    "spr_funnytext_game_over": "GAME OVER!?",
    "spr_funnytext_gentle": "(Well, okay, you can touch it.\nJust be gentle.)",
    "spr_funnytext_grand_prize": "GRAND PRIZE",
    "spr_funnytext_green_room": "Green Room",
    "spr_funnytext_hall_of_fame": "Hall of Fame",
    "spr_funnytext_know_tv": "(And trust me. I know TV.)",
    "spr_funnytext_love": "LOVE",
    "spr_funnytext_lovely": "Lovely",
    "spr_funnytext_lovers": "LOVERS",
    "spr_funnytext_names": "NAMES",
    "spr_funnytext_over_small": "OVER",
    "spr_funnytext_physical_challenge": "PHYSICAL CHALLENGE",
    "spr_funnytext_physical_challenges": "PHYSICAL CHALLENGES",
    "spr_funnytext_prizes": "PRIZES",
    "spr_funnytext_quizzes": "QUIZZES",
    "spr_funnytext_relax": "Relax and Enjoy...",
    "spr_funnytext_resumes": "Résumés",
    "spr_funnytext_rock_concert": "ROCK CONCERT",
    "spr_funnytext_round": "ROUND",
    "spr_funnytext_round_1": "ROUND 1!",
    "spr_funnytext_rounds": "ROUNDS",
    "spr_funnytext_special": "Special",
    "spr_funnytext_star": "STAR",
    "spr_funnytext_stars": "STARS",
    "spr_funnytext_stop": "STOP",
    "spr_funnytext_susiezilla": "SUSIEZILLA",
    "spr_funnytext_tan": "(Though I would look good with a tan.)",
    "spr_funnytext_tears": "TEARS",
    "spr_funnytext_toriel": "TORIEL",
    "spr_funnytext_tv_time": "TV TiME!",
    "spr_funnytext_win": "WIN!",
    "spr_funnytext_win_big": "*WIN!",
    "spr_funnytext_word": "WORD",
    "spr_ja_funnytext_alligator": "(トリエルママは　ビキニのワニが\nおキライだったのかな！？)",
    "spr_ja_funnytext_amazing_01": "アメ～イジ～ング！",
    "spr_ja_funnytext_board": "PARK",
    "spr_ja_funnytext_brother": "お兄ちゃん",
    "spr_ja_funnytext_challenge": "チャレンジ",
    "spr_ja_funnytext_city_feet": "(クルマに　足がないところは\nツッコミ禁止ですよ～！)",
    "spr_ja_funnytext_coffee": "(ついでに　ワタシに\nコーヒーも　いれてネ♡)",
    "spr_ja_funnytext_daisuki": "大～スキ♥",
    "spr_ja_funnytext_dark_fountain": "闇の泉",
    "spr_ja_funnytext_flames": "炎",
    "spr_ja_funnytext_fun_loop": "AHAHAHAHAHA!!",
    "spr_ja_funnytext_fun_o_meter": "ハピハピメーター",
    "spr_ja_funnytext_gentle": "(だって　チャンネルちゃんは\nそのままで十分　魅力的♡)",
    "spr_ja_funnytext_grand_prize": "優勝賞品",
    "spr_ja_funnytext_green_room": "楽屋",
    "spr_ja_funnytext_hall_of_fame": "殿堂入り",
    "spr_ja_funnytext_know_tv": "(テレビ本人が言うんですから\nまちがいない!)",
    "spr_ja_funnytext_love": "愛",
    "spr_ja_funnytext_lovely": "ラブラブ ラブリ～",
    "spr_ja_funnytext_lovers": "恋人たち",
    "spr_ja_funnytext_names": "名前",
    "spr_ja_funnytext_physical_challenge": "リアルチャレンジ",
    "spr_ja_funnytext_prizes": "賞品",
    "spr_ja_funnytext_quizzes": "クイズ",
    "spr_ja_funnytext_relax": "ゆったりのひととき",
    "spr_ja_funnytext_rock_concert": "ROCK☆LIVE",
    "spr_ja_funnytext_star": "スタア",
    "spr_ja_funnytext_stars": "主役",
    "spr_ja_funnytext_susiezilla": "スージラ",
    "spr_ja_funnytext_tan": "(日焼けしたら　さぞ\nモテモテでSHOWけど!)",
    "spr_ja_funnytext_tears": "ナミダ",
    "spr_ja_funnytext_toriel": "マイスカイ・トリエール",
    "spr_ja_funnytext_win": "CLEAR!",
    "spr_ja_funnytext_win_big": "優勝してね♥",
    "spr_ja_funnytext_word": "ご覧のスポンサー",
    "spr_funnytext_dump_her": "DUMP HER ASS!!!",
    "spr_funnytext_dump_her_ja": "フッて",
    "spr_funnytext_ass": "(The size of Mike's ass,\nseems really variable lately.)",
    "spr_ja_funnytext_ass": "(最近、マイクくんのおケツ…\nデカかったり、ちっこかったり\nしない？)",
};

export const FUNNYTEXT_SOUNDS = {
    "spr_funnytext_fun_loop": "snd_crowd_cheer_single",
    "spr_funnytext_big": "snd_ftext_bounce",
    "spr_funnytext_physical_challenge": "snd_ftext_bounce",
    "spr_funnytext_physical_challenges": "snd_ftext_bounce",
    "spr_funnytext_board": "snd_ftext_woodblock",
    "spr_funnytext_challenge": "snd_ftext_woodblock",
    "spr_funnytext_bonus_round": "snd_ftext_prize",
    "spr_funnytext_word": "snd_ftext_prize",
    "spr_funnytext_hall_of_fame": "snd_ftext_prize",
    "spr_funnytext_amazing_01": "snd_ftext_prize",
    "spr_funnytext_breaking_news": "snd_whip_crack_only",
    "spr_funnytext_flames": "snd_badexplosion",
    "spr_funnytext_fun_o_meter": "snd_ftext_enter",
    "spr_funnytext_special": "snd_ftext_enter",
    "spr_funnytext_susiezilla": "snd_ftext_susiezilla",
    "spr_funnytext_dark_fountain": "snd_ftext_dark_fountain",
    "spr_funnytext_brother": "snd_ftext_brother",
    "spr_funnytext_grand_prize": "snd_ftext_gunshot",
    "spr_funnytext_prizes": "snd_ftext_gunshot",
    "spr_funnytext_round": "snd_ftext_gunshot",
    "spr_funnytext_round_1": "snd_ftext_gunshot",
    "spr_funnytext_rounds": "snd_ftext_gunshot",
    "spr_funnytext_game_over": "snd_ftext_gunshot",
    "spr_funnytext_game": "snd_ftext_gunshot",
    "spr_funnytext_over": "snd_ftext_gunshot",
    "spr_funnytext_names": "snd_ftext_names",
    "spr_funnytext_toriel": "snd_ftext_toriel",
    "spr_funnytext_green_room": "snd_ftext_vibraphones",
    "spr_funnytext_quizzes": "snd_ftext_vibraphones",
    "spr_funnytext_love": "snd_audience_aww",
    "spr_funnytext_lovely": "snd_audience_aww",
    "spr_funnytext_lovers": "snd_audience_aww",
    "spr_funnytext_star": "snd_sparkle_glock",
    "spr_funnytext_stars": "snd_sparkle_glock",
    "spr_funnytext_stop": "snd_locker",
    "spr_funnytext_tears": "snd_splat",
    "spr_funnytext_win_big": "snd_carhonk",
    "spr_funnytext_dump_her": "snd_ftext_bounce",
};

// Missing from the localization sprite map and therefore not found
export const FUNNYTEXT_SOUNDS_BROKEN = new Set([
    "spr_funnytext_big",
    "spr_funnytext_round",
    "spr_funnytext_round_1",
    "spr_funnytext_rounds",
    "spr_funnytext_game_over",
    "spr_funnytext_game",
    "spr_funnytext_over",
    "spr_funnytext_stop",
]);

export const FUNNYTEXT_SOUND_BROKEN_JA = new Set([
    // Broken because it hardcodes the JP sprite name(?)
    "obj_ch3_GSA04_slash_Step_0_gml_230_0",
    // Present in the EN localization sprite map but not the JA map
    "obj_ch3_GSB03_slash_Step_0_gml_279_0",
    "obj_ch3_GSC05_slash_Step_0_gml_233_0",
]);

export function minifacekind(msgid, chap) {
    if (msgid.includes("obj_clubsenemy")) {
        return "clover";
    }

    if (
        msgid.includes("obj_ch2_cyber01")
        || msgid.includes("obj_ch2_scene26")
        || msgid.includes("obj_npc_room_animated_slash_Other")
        || msgid.includes("obj_shop_ch2_music")
        || msgid.includes("scr_text_slash_scr_text_gml")
        || msgid.includes("obj_room_castle_dojo_")
    ) {
        return "scc";
    }

    if ([
        "obj_npc_room_slash_Other_10_gml_1848_0",
        "obj_npc_room_slash_Other_10_gml_1852_0",
        "obj_npc_room_slash_Other_10_gml_1860_0",
        "obj_npc_room_slash_Other_10_gml_1864_0",
        "obj_npc_room_slash_Other_10_gml_1865_0",
        "obj_npc_room_slash_Other_10_gml_1907_0",
        "obj_npc_room_slash_Other_10_gml_1911_0",
        "obj_npc_room_slash_Other_10_gml_264_0",
        "obj_npc_room_slash_Other_10_gml_265_0",
        "obj_npc_room_slash_Other_10_gml_266_0",
        "obj_npc_room_slash_Other_10_gml_270_0",
        "obj_npc_room_slash_Other_10_gml_271_0",
        "obj_npc_room_slash_Other_10_gml_272_0",
    ].includes(msgid)) {
        return "clover";
    }

    if ([
        "obj_npc_room_slash_Other_10_gml_2401_0",
    ].includes(msgid)) {
        return "scc";
    }

    if (chap === "5") {
        // I happen to know that all Clover/SCC faces are covered by the above,
        // because the flower minifaces all use a weird inline conditional, but
        // that's not a stable assumption going forward.
        // Pay attention to patch updates (in case Clover/SCC get new text) and
        // don't assume that this will work in future chapters.
        return "flower";
    }

    throw new Error(`Don\'t know miniface for ${msgid}`);
}

export function minifacesprite(kind, idx) {
    return {
        "clover": {
            "1": "spr_miniface_clover_happy",
            "2": "spr_miniface_clover_mad",
            "3": "spr_miniface_clover_sad",
        },
        "scc": {
            "1": "spr_miniface_sweet_0",
            "2": "spr_miniface_kk_0",
            "3": "spr_miniface_capn_0",
        },
        "flower": {
            "0": "spr_miniface_aqua_0",
            "1": "spr_miniface_seth_0",
            "2": "spr_miniface_orange_0",
            "3": "spr_miniface_green_0",
            "4": "spr_miniface_yellow_0",
            "5": "spr_miniface_blue_0",
        },
    }[kind][idx];
}

export const MINIFACE_ALTS = {
    "spr_miniface_clover_happy": "Happy head:",
    "spr_miniface_clover_mad": "Mad head:",
    "spr_miniface_clover_sad": "Sad head:",
    "spr_miniface_sweet_0": "Sweet:",
    "spr_miniface_kk_0": "K_K:",
    "spr_miniface_capn_0": "Cap'n:",
    "spr_miniface_aqua_0": "🔪",
    "spr_miniface_seth_0": "📖",
    "spr_miniface_orange_0": "🥊",
    "spr_miniface_green_0": "🍳",
    "spr_miniface_yellow_0": "🤠",
    "spr_miniface_blue_0": "🩰",
};

export const FLOWERY_ID2NAME = {
    131: "snd_flowery_voiceclip_flowery2",
    111: "snd_flowery_voiceclip_sorrytokeepyouwaiting1",
    106: "snd_flowery_voiceclip_heyguys",
    110: "snd_flowery_voiceclip_hey",
    5: "snd_flowery_voiceclip_thatsgreat",
    244: "snd_flowery_voiceclip_wow",
    228: "snd_flowery_voiceclip_yes",
    187: "snd_flowery_voiceclip_nonono",
    117: "snd_flowery_voiceclip_huh",
    757: "snd_flowery_voiceclip_stingus",
    226: "snd_flowery_voiceclip_sorrytokeepaladyinwaiting",
    717: "snd_flowery_voiceclip_sorryaboutthatlittleguy",
    633: "snd_flowery_voiceclip_thisguysyourbestfriend",
    205: "snd_flowery_voiceclip_heytherelittleguy",
    154: "snd_flowery_voiceclip_sorrytokeepyouladies",
    44: "snd_flowery_voiceclip_sorryaboutthatguys",
    72: "snd_flowery_voiceclip_itsmeflowery",
    750: "snd_flowery_voiceclip_yourdadsmybestfriend",
    210: "snd_flowery_voiceclip_heyguysithinkifoundaglue",
    54: "snd_flowery_voiceclip_imsorryonceagainikeptaladyinwaiting",
    15: "snd_flowery_voiceclip_glue",
    250: "snd_flowery_voiceclip_hereicomesanfrandisc",
    673: "snd_flowery_voiceclip_itsme",
    77: "snd_flowery_voiceclip_hey_raly",
    95: "snd_flowery_voiceclip_sorrytokeepyouwaiting2",
    49: "snd_flowery_voiceclip_sorryabouttheguy",
    616: "snd_flowery_voiceclip_flowers_blooms_in_your_heart",
    183: "snd_flowery_voiceclip_no_way_its_your_children",
    144: "snd_flowery_voiceclip_mysterious_wind",
    197: "snd_flowery_voiceclip_my_king",
    74: "snd_flowery_voiceclip_my_favorite_two",
    678: "snd_flowery_voiceclip_im_falling",
    436: "snd_flowery_voiceclip_hey_boys",
    702: "snd_flowery_voiceclip_grown_like_a_turnip",
    574: "snd_flowery_voiceclip_great_style",
    53: "snd_flowery_voiceclip_your_dad",
    89: "snd_flowery_voiceclip_the_diner",
    204: "snd_flowery_voiceclip_the_boys",
    216: "snd_flowery_voiceclip_calling_for_help",
    704: "snd_flowery_voiceclip_try_my_flavor",
    125: "snd_flowery_voiceclip_goodbye",
    151: "snd_flowery_voiceclip_susie",
    212: "snd_flowery_voiceclip_kris",
    208: "snd_flowery_voiceclip_get_a_chance_1",
    140: "snd_flowery_voiceclip_youre_a_hero",
    627: "snd_flowery_voiceclip_forget_it",
    3: "snd_flowery_voiceclip_my_human",
    622: "snd_flowery_voiceclip_leaf_it_to_me",
    741: "snd_flowery_voiceclip_say_that_again",
    739: "snd_flowery_voiceclip_go_home",
    147: "snd_flowery_voiceclip_smile_again",
    142: "snd_flowery_voiceclip_thats_my_dreams",
    79: "snd_flowery_voiceclip_dont_you_like_serving_humans",
    743: "snd_flowery_voiceclip_im_only_trying_to_help_you",
    14: "snd_flowery_voiceclip_all_according_to_all_according_to_plant",
    696: "snd_flowery_voiceclip_mostlys",
    185: "snd_flowery_voiceclip_its_so_human",
    653: "snd_flowery_voiceclip_what_a_predictable_creature",
    159: "snd_flowery_voiceclip_its_all_in_a_name",
    628: "snd_flowery_voiceclip_give_to_you",
    29: "snd_flowery_voiceclip_suckle_it_up",
    665: "snd_flowery_voiceclip_get_a_chance_2",
    242: "snd_flowery_voiceclip_my_king_ja_alt",
    670: "snd_flowery_voiceclip_thats_my_dreams_ja_alt",
    373: "snd_flowery_voiceclip_im_falling_vending_ja",
    190: "snd_flowery_voiceclip_yoroshiku",
    193: "snd_flowery_voiceclip_get_a_chance_1_ja",
};

export const FLOWERY_SOUND_TABLE = [
    131,
    111,
    106,
    110,
    5,
    244,
    228,
    187,
    117,
    757,
    226,
    717,
    633,
    205,
    154,
    44,
    72,
    750,
    210,
    54,
    15,
    250,
    673,
    77,
    95,
    49,
    616,
    183,
    144,
    197,
    74,
    678,
    436,
    702,
    574,
    53,
    89,
    204,
    216,
    704,
    125,
    151,
    212,
    208,
    140,
    627,
    3,
    622,
    741,
    739,
    147,
    142,
    79,
    743,
    14,
    696,
    185,
    653,
    159,
    628,
    29,
];

export function flowery_z(msgid, lang) {
    if (msgid === "obj_ch5_DW05_slash_Step_0_gml_807_0") {
            return "snd_flowery_voiceclip_stingus";
    } else if (msgid === "obj_ch5_DW29_slash_Step_0_gml_607_0") {
            return "snd_flowery_voiceclip_lend_me_your_power";
    } else if (msgid === "obj_dw_garden_diner_slash_Step_0_gml_355_0") {
            return "snd_flowery_voiceclip_its_all_yours";
    } else if (msgid === "obj_dw_garden_diner_slash_Step_0_gml_448_0") {
            return "snd_flowery_voiceclip_its_all_yours";
    } else if (msgid === "obj_dw_garden_enemyrush_slash_Step_0_gml_817_0") {
            return "snd_flowery_voiceclip_stingus";
    } else if (lang === "ja" && msgid === "obj_ch5_DW05_slash_Step_0_gml_829_0") {
            return "snd_flowery_voiceclip_chou_exciting_ja";
    } else if (lang === "en" && msgid === "obj_ch5_DW05_slash_Step_0_gml_829_0") {
            return "snd_flowery_voiceclip_stingus";
    } else if (msgid === "obj_dw_garden_fishingspot_slash_Step_0_gml_272_0") {
            return "snd_flowery_voiceclip_minipeppers";
    } else if (msgid === "obj_dw_garden_enemyrush_slash_Step_0_gml_1416_0") {
            return "snd_flowery_voiceclip_heh_it_s_my_jarona";
    } else {
        throw new Error(msgid);
    }
}

export const FLOWERY_JA_MAP = {
    // "snd_flowery_voiceclip_flowery2": "snd_flowery_voiceclip_flowery2_ja",
    // "snd_flowery_voiceclip_sorrytokeepyouwaiting1": "snd_flowery_voiceclip_sorrytokeepyouwaiting1_ja",
    "snd_flowery_voiceclip_heyguys": "snd_flowery_voiceclip_heyguys_ja",
    "snd_flowery_voiceclip_hey": "snd_flowery_voiceclip_hey",
    "snd_flowery_voiceclip_thatsgreat": "snd_flowery_voiceclip_thatsgreat_ja",
    "snd_flowery_voiceclip_wow": "snd_flowery_voiceclip_wow_ja",
    "snd_flowery_voiceclip_yes": "snd_flowery_voiceclip_yes_ja",
    "snd_flowery_voiceclip_nonono": "snd_flowery_voiceclip_nonono",
    "snd_flowery_voiceclip_huh": "snd_flowery_voiceclip_huh",
    "snd_flowery_voiceclip_stingus": "snd_flowery_voiceclip_stingus_ja",
    "snd_flowery_voiceclip_sorrytokeepaladyinwaiting": "snd_flowery_voiceclip_sorrytokeepaladyinwaiting_ja",
    "snd_flowery_voiceclip_sorryaboutthatlittleguy": "snd_flowery_voiceclip_sorryaboutthatlittleguy_ja",
    "snd_flowery_voiceclip_thisguysyourbestfriend": "snd_flowery_voiceclip_thisguysyourbestfriend_ja",
    "snd_flowery_voiceclip_heytherelittleguy": "snd_flowery_voiceclip_heytherelittleguy_ja",
    "snd_flowery_voiceclip_sorrytokeepyouladies": "snd_flowery_voiceclip_sorrytokeepyouladies_ja",
    "snd_flowery_voiceclip_sorryaboutthatguys": "snd_flowery_voiceclip_sorryaboutthatguys_ja",
    "snd_flowery_voiceclip_itsmeflowery": "snd_flowery_voiceclip_itsmeflowery_ja",
    "snd_flowery_voiceclip_yourdadsmybestfriend": "snd_flowery_voiceclip_yourdadsmybestfriend_ja",
    "snd_flowery_voiceclip_heyguysithinkifoundaglue": "snd_flowery_voiceclip_heyguysithinkifoundaglue_ja",
    "snd_flowery_voiceclip_imsorryonceagainikeptaladyinwaiting": "snd_flowery_voiceclip_imsorryonceagainikeptaladyinwaiting_ja",
    "snd_flowery_voiceclip_glue": "snd_flowery_voiceclip_glue_ja",
    "snd_flowery_voiceclip_hereicomesanfrandisc": "snd_flowery_voiceclip_hereicomesanfrandisc_ja",
    "snd_flowery_voiceclip_hereicomesanfrandisco_strong": "snd_flowery_voiceclip_hereicomesanfrandisco_strong_ja",
    "snd_flowery_voiceclip_itsme": "snd_flowery_voiceclip_itsme_ja",
    "snd_flowery_voiceclip_hey_raly": "snd_flowery_voiceclip_hey_raly_ja",
    "snd_flowery_voiceclip_sorrytokeepyouwaiting2": "snd_flowery_voiceclip_sorrytokeepyouwaiting2_ja",
    "snd_flowery_voiceclip_sorryabouttheguy": "snd_flowery_voiceclip_sorryabouttheguy_ja",
    "snd_flowery_voiceclip_flowers_blooms_in_your_heart": "snd_flowery_voiceclip_flowers_blooms_in_your_heart_ja",
    "snd_flowery_voiceclip_no_way_its_your_children": "snd_flowery_voiceclip_no_way_its_your_children_ja",
    "snd_flowery_voiceclip_mysterious_wind": "snd_flowery_voiceclip_mysterious_wind_ja",
    "snd_flowery_voiceclip_my_king": "snd_flowery_voiceclip_my_king_ja",
    "snd_flowery_voiceclip_my_favorite_two": "snd_flowery_voiceclip_my_favorite_two_ja",
    "snd_flowery_voiceclip_im_falling": "snd_flowery_voiceclip_im_falling_ja",
    "snd_flowery_voiceclip_hey_boys": "snd_flowery_voiceclip_hey_boys_ja",
    "snd_flowery_voiceclip_grown_like_a_turnip": "snd_flowery_voiceclip_grown_like_a_turnip_ja",
    "snd_flowery_voiceclip_great_style": "snd_flowery_voiceclip_great_style_ja",
    "snd_flowery_voiceclip_your_dad": "snd_flowery_voiceclip_your_dad_ja",
    "snd_flowery_voiceclip_the_diner": "snd_flowery_voiceclip_the_diner_ja",
    "snd_flowery_voiceclip_the_boys": "snd_flowery_voiceclip_the_boys_ja",
    "snd_flowery_voiceclip_calling_for_help": "snd_flowery_voiceclip_calling_for_help",
    "snd_flowery_voiceclip_try_my_flavor": "snd_flowery_voiceclip_try_my_flavor_ja",
    "snd_flowery_voiceclip_goodbye": "snd_flowery_voiceclip_goodbye",
    "snd_flowery_voiceclip_susie": "snd_flowery_voiceclip_susie_ja",
    "snd_flowery_voiceclip_kris": "snd_flowery_voiceclip_kris_ja",
    "snd_flowery_voiceclip_get_a_chance_1": "snd_flowery_voiceclip_get_a_chance_1_ja",
    "snd_flowery_voiceclip_youre_a_hero": "snd_flowery_voiceclip_youre_a_hero_ja",
    "snd_flowery_voiceclip_forget_it": "snd_flowery_voiceclip_forget_it_ja",
    "snd_flowery_voiceclip_my_human": "snd_flowery_voiceclip_my_human_ja",
    "snd_flowery_voiceclip_leaf_it_to_me": "snd_flowery_voiceclip_leaf_it_to_me_ja",
    "snd_flowery_voiceclip_say_that_again": "snd_flowery_voiceclip_say_that_again_ja",
    "snd_flowery_voiceclip_go_home": "snd_flowery_voiceclip_go_home_ja",
    "snd_flowery_voiceclip_smile_again": "snd_flowery_voiceclip_smile_again_ja",
    "snd_flowery_voiceclip_thats_my_dreams": "snd_flowery_voiceclip_thats_my_dreams_ja",
    "snd_flowery_voiceclip_dont_you_like_serving_humans": "snd_flowery_voiceclip_dont_you_like_serving_humans_ja",
    "snd_flowery_voiceclip_im_only_trying_to_help_you": "snd_flowery_voiceclip_im_only_trying_to_help_you_ja",
    "snd_flowery_voiceclip_all_according_to_all_according_to_plant": "snd_flowery_voiceclip_all_according_to_all_according_to_plant_ja",
    "snd_flowery_voiceclip_mostlys": "snd_flowery_voiceclip_mostlys_ja",
    "snd_flowery_voiceclip_its_so_human": "snd_flowery_voiceclip_its_so_human_ja",
    "snd_flowery_voiceclip_what_a_predictable_creature": "snd_flowery_voiceclip_what_a_predictable_creature_ja",
    "snd_flowery_voiceclip_its_all_in_a_name": "snd_flowery_voiceclip_its_all_in_a_name_ja",
    "snd_flowery_voiceclip_give_to_you": "snd_flowery_voiceclip_give_to_you_ja",
    "snd_flowery_voiceclip_suckle_it_up": "snd_flowery_voiceclip_suckle_it_up_ja",
    "snd_flowery_voiceclip_flowery2": "snd_flowery_voiceclip_flowery2_ja",
    "snd_flowery_voiceclip_sorrytokeepyouwaiting1": "snd_flowery_voiceclip_sorrytokeepyouwaiting1_ja",
    "snd_flowery_voiceclip_its_all_yours": "snd_flowery_voiceclip_its_all_yours_ja",
    "snd_flowery_voiceclip_minipeppers": "snd_flowery_voiceclip_minipeppers_ja",
    "snd_flowery_voiceclip_heh_it_s_my_jarona": "snd_flowery_voiceclip_heh_it_s_my_jarona_ja",
    "snd_flowery_voiceclip_hoo": "snd_flowery_voiceclip_hoo",
    "snd_flowery_voiceclip_jarona1": "snd_flowery_voiceclip_jarona1_ja",
    "snd_flowery_voiceclip_jarona2": "snd_flowery_voiceclip_jarona2_ja",
    "snd_flowery_voiceclip_jarona3": "snd_flowery_voiceclip_jarona3_ja",
    "snd_flowery_voiceclip_jarona4": "snd_flowery_voiceclip_jarona4_ja",
    "snd_flowery_voiceclip_prism_blow": "snd_flowery_voiceclip_prism_blow_ja",
    "snd_flowery_voiceclip_take_that": "snd_flowery_voiceclip_take_that_ja",
    "snd_flowery_voiceclip_last_jarona": "snd_flowery_voiceclip_last_jarona_ja",
    "snd_flowery_voiceclip_lend_me_your_power": "snd_flowery_voiceclip_lend_me_your_power_ja",
    "snd_flowery_voiceclip_omega_flowery": "snd_flowery_voiceclip_omega_flowery_ja",
    "snd_flowery_voiceclip_with_your_powers_combined": "snd_flowery_voiceclip_with_your_powers_combined_ja",
    "snd_flowery_voiceclip_theyre_eating_my_flesh": "snd_flowery_voiceclip_theyre_eating_my_flesh_ja",
    "snd_forthefans": "snd_forthefans_ja",
    "snd_jarona_orange1": "snd_jarona_orange1_ja",
    "snd_jarona_orange2": "snd_jarona_orange1_ja",
    "snd_ja_kidding": "snd_ja_kidding_ja",
};

export const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function lookup_voiceclip(ident, msgid, lang) {
    // There are also a few room-dependent lines but they appear to be unused...?
    let sound_name, sound_id;
    if (ident === "z") {
        sound_name = flowery_z(msgid, lang);
    } else if (ident === "h") {
        if (lang === "ja") {
            return [FLOWERY_ID2NAME[193], null];
        }
        return [FLOWERY_ID2NAME[208], FLOWERY_ID2NAME[665]];
    } else {
        sound_id = FLOWERY_SOUND_TABLE[ALPHABET.indexOf(ident)];
        sound_name = FLOWERY_ID2NAME[sound_id];
    }
    if (lang === "ja") {
        sound_name = FLOWERY_JA_MAP[sound_name] ?? null;
    }
    return [sound_name, null];
}
