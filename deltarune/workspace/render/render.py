import sys
import re

def py_to_js(py_source):
    out = py_source

    # 1. 필요 없는 파이썬 전용 import 및 타입 정의 제거
    out = re.sub(r'^import .*\n', '', out, flags=re.MULTILINE)
    out = re.sub(r'^from .* import .*\n', '', out, flags=re.MULTILINE)
    out = re.sub(r'^@dataclass\nclass Dim:\n(\s+\w+: \w+\n)+', '', out, flags=re.MULTILINE)
    out = re.sub(r'^type FaceKind = Literal\[.*?\]\n+', '', out, flags=re.MULTILINE)

    # 2. 리터럴 값 변환 (True/False/None)
    out = re.sub(r'\bTrue\b', 'true', out)
    out = re.sub(r'\bFalse\b', 'false', out)
    out = re.sub(r'\bNone\b', 'null', out)

    # 3. 데이터 클래스 Dim(...) -> JS Object 변환
    out = re.sub(r'Dim\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)', r'{width: \1, height: \2, origin_x: \3, origin_y: \4}', out)

    # 4. 변수 선언 방식 변경 (export const 추가)
    out = re.sub(r'^([A-Z_0-9]+) = \{', r'export const \1 = {', out, flags=re.MULTILINE)
    out = re.sub(r'^([A-Z_0-9]+) = \[', r'export const \1 = [', out, flags=re.MULTILINE)
    
    # 4-1. 특정 딕셔너리 구조를 Set으로 변경
    set_vars = ["FORCE_WRAP", "FUNNYTEXT_WHITE", "FUNNYTEXT_SOUNDS_BROKEN", "FUNNYTEXT_SOUND_BROKEN_JA"]
    for s in set_vars:
        out = out.replace(f'export const {s} = {{', f'export const {s} = new Set([')

    # 4-2. Set 블록 정밀하게 닫기 (오류 났던 부분 완벽 수정)
    for s in set_vars:
        pattern = rf'(export const {s} = new Set\(\[.*?)^}}'
        out = re.sub(pattern, r'\1]);', out, flags=re.MULTILINE | re.DOTALL)
        
    # 4-3. 일반 객체(Dict) 블록 정밀하게 닫기
    dict_vars = ["FUNNYTEXT_DIMS", "ALT_TEXTS", "FUNNYTEXT_SOUNDS", "MINIFACE_ALTS", "FLOWERY_ID2NAME", "FLOWERY_JA_MAP"]
    for s in dict_vars:
        pattern = rf'(export const {s} = {{.*?)^}}'
        out = re.sub(pattern, r'\1};', out, flags=re.MULTILINE | re.DOTALL)

    # 4-4. 배열(List) 블록 정밀하게 닫기
    list_vars = ["FLOWERY_SOUND_TABLE"]
    for s in list_vars:
        pattern = rf'(export const {s} = \[.*?)^\]'
        out = re.sub(pattern, r'\1];', out, flags=re.MULTILINE | re.DOTALL)

    # ALPHABET 변수 치환
    out = out.replace(
        'ALPHABET = string.digits + string.ascii_uppercase + string.ascii_lowercase', 
        'export const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";'
    )

    # 5. 파이썬 주석(#)을 JS 주석(//)으로 변경
    out = re.sub(r'(\s|^)#(.*?)$', r'\1//\2', out, flags=re.MULTILINE)

    # 6. 함수 시그니처 변환
    out = re.sub(r'^def should_hardwrap\(.*?\).*?:', 'export function should_hardwrap(chap, msgid) {', out, flags=re.MULTILINE)
    out = re.sub(r'^def minifacekind\(.*?\).*?:', 'export function minifacekind(msgid, chap) {', out, flags=re.MULTILINE)
    out = re.sub(r'^def minifacesprite\(.*?\).*?:', 'export function minifacesprite(kind, idx) {', out, flags=re.MULTILINE)
    out = re.sub(r'^def flowery_z\(.*?\).*?:', 'export function flowery_z(msgid, lang) {', out, flags=re.MULTILINE)
    # 줄바꿈 된 인자를 처리하기 위한 정규식
    out = re.sub(r'^def lookup_voiceclip\([\s\S]*?\).*?:', 'export function lookup_voiceclip(ident, msgid, lang) {', out, flags=re.MULTILINE)

    # 7. should_hardwrap & minifacekind 바디 로직 (if in Set -> Array.includes)
    out = out.replace('if msgid in {', 'if ([')
    out = out.replace('if chap >= 5 and msgid in {', 'if (chap >= 5 && [')

    # 파이썬 딕셔너리 종료(}:)를 JS의 `.includes`로 변환 (들여쓰기 꼬임 방지)
    out = re.sub(r'\s+\}:\n\s+return true', r'\n    ].includes(msgid)) {\n        return true;\n    }', out)
    out = re.sub(r'\s+\}:\n\s+return "clover"', r'\n    ].includes(msgid)) {\n        return "clover";\n    }', out)
    out = re.sub(r'\s+\}:\n\s+return "scc"', r'\n    ].includes(msgid)) {\n        return "scc";\n    }', out)
    
    # 함수 끝부분 JS 블록 닫기
    out = re.sub(r'    return false\n', r'    return false;\n}\n', out)
    out = re.sub(r'    raise RuntimeError\(f"Don\'t know miniface for \{msgid\}"\)\n', r'    throw new Error(`Don\'t know miniface for ${msgid}`);\n}\n', out)

    # 8. minifacekind 내부 if or in 로직 변환
    out = re.sub(r'or "(.*?)" in msgid', r'|| msgid.includes("\1")', out)
    out = re.sub(r'if "(.*?)" in msgid:', r'if (msgid.includes("\1")) {', out)
    out = re.sub(r'"(.*?)" in msgid', r'msgid.includes("\1")', out)
    out = out.replace('    ):\n        return "scc"', '    ) {\n        return "scc";\n    }')
    out = out.replace('if chap == "5":', 'if (chap === "5") {')
    out = out.replace('        return "flower"\n', '        return "flower";\n    }\n')

    # 9. minifacesprite 로직 변환
    out = re.sub(r'    \}\[kind\]\[idx\]\n', r'    }[kind][idx];\n}\n', out)

    # 10. flowery_z 로직 (match-case -> if - else if)
    out = out.replace('    match lang, msgid:\n', '')
    out = out.replace('        case _, "obj_ch5_DW05_slash_Step_0_gml_807_0":\n', '    if (msgid === "obj_ch5_DW05_slash_Step_0_gml_807_0") {\n')
    out = re.sub(r'\s+case _, "(.*?)":\n', r'\n    } else if (msgid === "\1") {\n', out)
    out = re.sub(r'\s+case "(.*?)", "(.*?)":\n', r'\n    } else if (lang === "\1" && msgid === "\2") {\n', out)
    out = out.replace('        case _:\n', '    } else {\n')
    out = out.replace('            assert false, msgid\n', '        throw new Error(msgid);\n    }\n}\n')
    
    # 리턴 문장 뒤에 JS 세미콜론(;) 부착
    out = re.sub(r'(\s+return "(?:[^"]*)")\n', r'\1;\n', out)

    # 11. lookup_voiceclip 내부 로직
    out = out.replace('    if ident == "z":\n', '    let sound_name, sound_id;\n    if (ident === "z") {\n')
    out = out.replace('        sound_name = flowery_z(msgid, lang)\n', '        sound_name = flowery_z(msgid, lang);\n')
    out = out.replace('    elif ident == "h":\n', '    } else if (ident === "h") {\n')
    out = out.replace('        if lang == "ja":\n', '        if (lang === "ja") {\n')
    out = out.replace('            return FLOWERY_ID2NAME[193], null\n', '            return [FLOWERY_ID2NAME[193], null];\n        }\n')
    out = out.replace('        return FLOWERY_ID2NAME[208], FLOWERY_ID2NAME[665]\n', '        return [FLOWERY_ID2NAME[208], FLOWERY_ID2NAME[665]];\n')
    out = out.replace('    else:\n', '    } else {\n')
    out = out.replace('        sound_id = FLOWERY_SOUND_TABLE[ALPHABET.index(ident)]\n', '        sound_id = FLOWERY_SOUND_TABLE[ALPHABET.indexOf(ident)];\n')
    out = out.replace('        sound_name = FLOWERY_ID2NAME[sound_id]\n', '        sound_name = FLOWERY_ID2NAME[sound_id];\n    }\n')
    
    # 딕셔너리 Get 및 마지막 리턴 문 괄호 닫기
    out = out.replace('    if lang == "ja":\n', '    if (lang === "ja") {\n')
    out = out.replace('        sound_name = FLOWERY_JA_MAP.get(sound_name)\n', '        sound_name = FLOWERY_JA_MAP[sound_name] ?? null;\n    }\n')
    out = out.replace('    return sound_name, null\n', '    return [sound_name, null];\n}\n')

    # 불필요하게 3번 이상 연속된 빈 줄을 2줄로 정리
    out = re.sub(r'\n{3,}', '\n\n', out)
    return out.strip() + '\n'

if __name__ == "__main__":
    try:
        with open("input.py", "r", encoding="utf-8") as f:
            py_code = f.read()
    except FileNotFoundError:
        print("input.py 파일을 찾을 수 없습니다.")
        sys.exit(1)
    
    js_code = py_to_js(py_code)
    
    with open("output.json.js", "w", encoding="utf-8") as f:
        f.write(js_code)
    
    print("JS 변환 완료! Syntax Error 픽스됨 (output.json.js)")