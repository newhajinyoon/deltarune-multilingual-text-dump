import os
import json

# 설정: 추출할 원본 데이터 파일과 복구할 언어
INPUT_FILE = 'rendered.json.js'  # 만약 파일명이 다르면 여기에 맞게 수정하세요.
TARGET_LANG = 'pl'               # 뽑아낼 언어 코드 (폴란드어)
OUTPUT_DIR = f'./{TARGET_LANG}'  # ./pl 폴더에 저장됨

def main():
    if not os.path.exists(INPUT_FILE):
        print(f"오류: {INPUT_FILE} 파일을 찾을 수 없습니다.")
        return

    print(f"{INPUT_FILE} 에서 '{TARGET_LANG}' 데이터 추출을 시작합니다...")

    # 1. 파일 읽기 및 JSON 파싱
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # JS 파일 내에서 'window.rendered = {...}' 부분만 잘라내어 순수 JSON으로 변환
    try:
        start_marker = "window.rendered ="
        start_idx = content.find(start_marker)
        
        if start_idx != -1:
            # JS 파일인 경우
            json_str = content[start_idx + len(start_marker):].strip()
            if json_str.endswith(';'):
                json_str = json_str[:-1]  # 맨 뒤 세미콜론 제거
        else:
            # 순수 JSON 파일인 경우
            json_str = content
            
        data = json.loads(json_str)
    except Exception as e:
        print(f"JSON 파싱 실패: {e}")
        return

    # 2. 출력 폴더(pl) 생성
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 3. 데이터 역추출 (Chapter -> Group -> Msg -> Lang => 원본 JSON 포맷)
    extracted_count = 0
    
    for chapter, groups in data.items():
        chapter_data = {}
        
        for group_name, msgs in groups.items():
            for msg_id, langs in msgs.items():
                if TARGET_LANG in langs:
                    # 원본 키값 복구 (build.py에서 자르기 전 상태로 복구)
                    if group_name == 'general':
                        original_key = msg_id
                    else:
                        original_key = f"{group_name}_{msg_id}"
                        
                    chapter_data[original_key] = langs[TARGET_LANG]
        
        # 4. 해당 챕터에 폴란드어 데이터가 있다면 chX.json 으로 저장
        if chapter_data:
            out_filename = f"ch{chapter}.json"
            out_filepath = os.path.join(OUTPUT_DIR, out_filename)
            
            with open(out_filepath, 'w', encoding='utf-8') as f:
                # indent=4 로 보기 좋게 원상복구
                json.dump(chapter_data, f, ensure_ascii=False, indent=4)
                
            print(f"✅ 생성 완료: {out_filepath} (데이터 {len(chapter_data)}개)")
            extracted_count += 1

    if extracted_count > 0:
        print(f"\n🎉 성공! '{TARGET_LANG}' 폴더 안에 원본 형태의 json 파일들이 복구되었습니다.")
    else:
        print(f"\n⚠️ 데이터 안에 '{TARGET_LANG}'(폴란드어) 데이터가 존재하지 않습니다.")

if __name__ == '__main__':
    main()