import os

# portraits.js에서 사용하는 실제 스프라이트 시작 이름들
KEEP_PREFIXES = (
    "spr_face",         # 토리엘, 샌즈, 파피루스, 언다인, 아스리엘
    "spr_flowey",       # 플라위
    "spr_alphysface",   # 알피스
    "spr_asgore_face",  # 아스고어
    "spr_mettaton",     # 메타톤
)

current_script = os.path.basename(__file__)
deleted_count = 0

# 현재 폴더 안의 내용물만 탐색 (하위 폴더 재귀 탐색 X)
for filename in os.listdir('.'):
    # 파일인 경우에만 작동 (하위 폴더는 건드리지 않음)
    if os.path.isfile(filename):
        # 파이썬 스크립트 자신은 삭제하지 않음
        if filename == current_script:
            continue
        
        # 필요한 초상화 파일이 아니라면 즉시 삭제
        if not filename.startswith(KEEP_PREFIXES):
            try:
                os.remove(filename)
                deleted_count += 1
            except Exception as e:
                print(f"삭제 실패: {filename} ({e})")

print(f"정리 완료: 불필요한 스프라이트 {deleted_count}개를 삭제했습니다.")